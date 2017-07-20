<template>
  <div id="app">
    <h></h>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Common/Header/index.vue'
  export default {
    name: 'app',
    components: {
      h: Header
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
