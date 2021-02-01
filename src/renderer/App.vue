<template>
    <div id="app">
        <toolbar/>
        <landing-page></landing-page>
    </div>
</template>

<script>
    import LandingPage from '@/components/LandingPage'
    import toolbar from '@/components/toolbar'

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
    }
</script>
