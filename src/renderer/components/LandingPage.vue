<template>
  <div style="overflow: hidden;height: calc(100% - 40px)">
    <div id="wrapper" style="overflow: auto;">
      <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
      <main>
        <div class="left-side">
        <span class="title">
          Welcome to your new project!
        </span>
          <system-information></system-information>
        </div>

        <div class="right-side">
          <div class="doc">
            <div class="title">Getting Started</div>
            <p>
              electron-vue comes packed with detailed documentation that covers everything from
              internal configurations, using the project structure, building your application,
              and so much more.
            </p>
            <el-button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</el-button><br><br>
          </div>
          <div class="doc">
            <div class="title alt">Other Documentation</div>
            <el-button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</el-button>
            <el-button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</el-button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        require('electron').shell.openExternal(link)
      }
    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    transition: all 0.15s ease;
    box-sizing: border-box;
  }
</style>
