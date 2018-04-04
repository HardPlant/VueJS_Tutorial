<template>
<div>
  <div class="myclass">
      Hello World!
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
    var d3 = this.$d3;
    //this.$d3.select("#hello").append("span");
    //this.$d3.select("#hello").append("span").text("from D3.js");
    //this.$d3.select("#hello").html("Hello World! from vue!");
    //this.$d3.select(".myclass").attr("style", "color: red");
    //d3.select(".myclass").style("color", "red");
    //var element = d3.select(".myclass")
    //element.classed("myanotherclass", !oneBar.classed("myanotherclass"));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
