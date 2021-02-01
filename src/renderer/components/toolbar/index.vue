<template>
    <div class="navbar" style="-webkit-app-region: drag;height: 40px;background-color: #ffffff" id="navbar">
        <el-row style="border-bottom: solid 2px rgba(156, 156, 156, 0.53);" :span="3">
            <el-col style="padding-top: 5px;padding-bottom: 5px;width: 160px;" :span="2">
                <el-button size="mini" icon="el-icon-search" circle></el-button>
                <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
                <el-button size="mini" type="success" icon="el-icon-check" circle></el-button>
                <el-button size="mini" type="info" icon="el-icon-message" circle></el-button>
            </el-col>
            <el-col :span="20" style="width: calc(100% - 160px - 110px)">
                <div id="title">{{title}}</div>
            </el-col>
            <el-col :span="2" style="width: 110px;padding-top: 5px;">
                <el-button size="mini" class="el-icon-minus" circle @click="minimizeWin"></el-button>
                <el-button size="mini" :class="isFullscreen?'el-icon-copy-document':'el-icon-full-screen'" circle @click="maximizeWin"></el-button>
                <el-button size="mini" class="el-icon-close" circle @click="closeWin"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {ipcRenderer} from 'electron';

    export default {
        name: 'toolbar',
        data() {
            return {
                isFullscreen: false,
                title:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题'
            }
        },
        methods: {
            minimizeWin() {
                ipcRenderer.send('window-min')
            },
            maximizeWin() {
                ipcRenderer.send('window-max');
                if (this.isFullscreen) {
                    this.isFullscreen = false;
                } else {
                    this.isFullscreen = true;
                }
                $(event.toElement).blur();
            },
            closeWin() {
                ipcRenderer.send('window-close')
            }
        }
    }
</script>


<style lang="scss" scoped>
    .navbar {
        top: 0;
        width: 100%;
        background-color: #ffffff;
    }

    #navbar {
        button {
            -webkit-app-region: no-drag;
            border: 0;
        }

        #title {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
        }
        .el-col{
            height: 100%;
            padding-top: 10px;
        }
    }
</style>

