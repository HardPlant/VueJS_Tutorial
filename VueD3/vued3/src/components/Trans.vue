<template>
  <div>
            <svg width = "300" height = "300">
         <rect x = "20" 
            y = "20"
            width = "60"
            height = "60"
            fill = "green"
            transform = "translate(60 60) rotate(45)">
         </rect>
                  <g transform = "translate(60,60) rotate(30)">
            <rect x = "20" 
               y = "20" 
               width = "60" 
               height = "30" 
               fill = "green">
            </rect>
            <circle cx = "0" 
               cy = "0" 
               r = "30" 
               fill = "red"/>
         </g>
      </svg>
      <svg width = "300" height = "300">
   <g transform = "translate(60,60) rotate(30)">
      <rect x = "20" 
         y = "20" 
         width = "60" 
         height = "30" 
         fill = "green">
      </rect>
      <circle cx = "0" 
         cy = "0" 
         r = "30" 
         fill = "red"/>
   </g>
   
</svg>
<div id = "svgcontainer"></div>
  </div>
</template>

<script>
export default {
    name: "trans",
    data(){
        return {}
    },
    mounted : function(){
        var d3 = this.$d3;
        console.log(Object.getOwnPropertyNames(d3).filter(function (p) {
    return typeof d3[p] === 'function';
}));
            var width = 300;
            var height = 300;
            var svg = d3.select("#svgcontainer")
               .append("svg")
               .attr("width", width)
               .attr("height", height);

            var group = svg.append("g")
               .attr("transform", "translate(60, 60) rotate(30)");
            
            var rect = group.append("rect")
               .attr("x", 20)
               .attr("y", 20)
               .attr("width", 60)
               .attr("height", 30)
               .attr("fill", "green")
            
            var circle = group
               .append("circle")
               .attr("cx", 0)
               .attr("cy", 0)
               .attr("r", 30)
               .attr("fill", "red")
        
    }
}
</script>

<style>

</style>
