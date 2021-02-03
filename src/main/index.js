import {app, BrowserWindow, systemPreferences, ipcMain,ipcRenderer} from 'electron';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`;

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 563,
        width: 1000,
        frame: false, // 无边框
        //alwaysOnTop: true, // 总是在最前
        webPreferences: {
            nodeIntegration: true,  // 支持网页
        }
    });

    mainWindow.loadURL(winURL);
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
ipcMain.on('window-min', function () { // 收到渲染进程的窗口最小化操作的通知，并调用窗口最小化函数，执行该操作
    mainWindow.minimize();
});

// 2. 窗口 最大化、恢复
ipcMain.on('window-max', function (data) {
    if (mainWindow.isMaximized()) { // 为true表示窗口已最大化
        mainWindow.restore();// 将窗口恢复为之前的状态.
    } else {
        mainWindow.maximize();
    }
});

// 3. 关闭窗口
ipcMain.on('window-close', function () {
    mainWindow.close();
});


ipcMain.on('synchronous-message', (event, arg) => {
    event.sender.send('synchronous-isDark', {isDark:systemPreferences.isDarkMode()});
});
