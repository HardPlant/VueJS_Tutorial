<template>
  <div id="app">
    <charts></charts>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import datum from './components/datum.vue'
import datafunc from './components/datafunc.vue'
import vsvg from './components/vsvg.vue'
import Trans from './components/Trans.vue'
import Anima from './components/Animation.vue'
import Charts from './components/Charts.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld, datum, datafunc, 
    vsvg, Trans, Anima, Charts
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
