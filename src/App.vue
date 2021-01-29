<template>
  <div id="app">
    <main-view></main-view>
  </div>
</template>

<script>
import MainView from './components/Main.vue'

export default {
  name: 'App',
  components: {
    MainView
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
