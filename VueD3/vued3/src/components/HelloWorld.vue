<template>
<div>
      <ul id = "list">
         <li></li>
         <li></li>
      </ul>
        
      <input type = "button" name = "remove" value = "Remove fourth value" 
         @click = "remove()" />
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
    //d3.selectAll(".myclass").attr("style", "color: red");
    d3.select("#list").selectAll("li")
      .data([10, 20, 30, 25, 15])
      .text(function(d) 
          { return "This is pre-existing element and the value is " + d; })
      .enter()
      .append("li")
      .text(function(d) 
          { return "This is dynamically created element and the value is " + d; });
        
},
  methods: {
    remove : function() {
    var d3 = this.$d3;
            d3.selectAll("li")
            .data([10, 20, 30, 15])
            .exit()
            .remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
