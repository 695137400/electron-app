<template>
    <div class="navbar" style="-webkit-app-region: drag;" id="navbar">
        <el-row :span="3">
            <el-col style="width: 160px;" :span="2">
                <el-button size="mini" icon="el-icon-search" circle></el-button>
                <el-button size="mini" type="primary" icon="el-icon-edit" circle></el-button>
                <el-button size="mini" type="success" icon="el-icon-check" circle ></el-button>
                <el-button size="mini" type="info" icon="el-icon-message" circle></el-button>
            </el-col>
            <el-col :span="20" style="width: calc(100% - 160px - 110px);">
                <div id="title">{{title}}</div>
            </el-col>
            <el-col :span="2" style="width: 110px;">
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
                title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            }
        },
        created() {

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
        box-shadow: 0px 0px 2px #616161;
        height: 40px;
        line-height: 2.5em;
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

        .el-col {
            height: 100%;
        }
    }
</style>

