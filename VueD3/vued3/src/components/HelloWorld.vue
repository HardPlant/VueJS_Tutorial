<template>
<div>
  <div id="hello">
    Hello World
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    //this.$d3.select("#hello").append("span");
    this.$d3.select("#hello").append("span").text("from D3.js");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
