<template>
  <div>
      <h3>Simple transitions</h3>
  </div>
</template>

<script>
export default {
    name : "anima",
    mounted : function(){
         var d3 = this.$d3
         //d3.select("body").style("background-color", "lightblue")
         // make the background-color lightblue.transition()
         //.style("background-color", "gray");
         // make the background-color gray
         
         d3.selectAll("h3").transition().style("color","green").duration(5000);
         d3.selectAll("h3").transition().style("color","rgb(0,150,120)").duration(5000);
         
         d3.selectAll("h3").transition()
            .style("font-size","28px").delay(2000).duration(2000);
        
        d3.select("body")
   .transition()
   .delay(200)
   .each("start", ()=>{ this.$d3.select(this).style("color", "green"); })
   .style("color", "red");
    }
}
</script>

<style>

</style>
