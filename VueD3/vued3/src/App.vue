<template>
  <div id="app">
    <datafunc></datafunc>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import datum from './components/datum.vue'
import datafunc from './components/datafunc.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, datum, datafunc
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
