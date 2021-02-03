<template>
    <div id="app">
        <toolbar/>
        <!-- <landing-page></landing-page>-->
    </div>
</template>

<script>
    import LandingPage from '@/components/LandingPage'
    import toolbar from '@/components/toolbar'
    import {ipcRenderer} from 'electron';

    export default {
        name: 'electron-vue-app',
        components: {
            LandingPage,
            toolbar,
        },
        data() {
            return {
                isFullscreen: false
            }
        },
        created() {
            setInterval(function () {
                if (ipcRenderer.eventNames().indexOf('synchronous-isDark') < 0) {
                    ipcRenderer.on('synchronous-isDark', (event, arg) => {
                        if (arg.isDark) {
                            var link = document.createElement('link');
                            link.id = 'element-theme-dark';
                            link.rel = 'stylesheet';
                            link.href = '/static/styles/element-theme-dark/lib/index.css';
                            if ($('#element-theme-dark').length == 0) {
                                $('head').append(link);
                            }
                        } else {
                            $('#element-theme-dark').remove();
                        }
                    });
                }
                ipcRenderer.send('synchronous-message', 'pong');
            }, 300);
        }
    }
</script>
