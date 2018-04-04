<template>
  <div id="app">
    <vsvg></vsvg>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import datum from './components/datum.vue'
import datafunc from './components/datafunc.vue'
import vsvg from './components/vsvg.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld, datum, datafunc, 
    vsvg
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
