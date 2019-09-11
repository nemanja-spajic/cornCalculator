<template>
  <div id="app">
    <left-header></left-header>
    <router-view/>
  </div>
</template>

<script>
  import LeftHeader from './components/Header'
  export default {
    name: 'App',
    components: {
      LeftHeader
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
  margin-top: 60px;
}
</style>
