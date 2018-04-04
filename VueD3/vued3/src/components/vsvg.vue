<template>
<div>
    <svg width="300" height="300">
        <line x1= "100" y1 = "100" x2="00" y2="200"
        style = "stroke:rgb(255,0,0);stroke-width:2"/>
    </svg>
    <div id = "svgcontainer"></div>
</div>

</template>

<script>
export default {
    name : "vsvg",
    data(){
        return {};
    },
    mounted : function(){
        var d3 = this.$d3;
        var width = 300;
        var height = 300;
        var svg = d3.select("#svgcontainer")
        .append("svg").attr("width",width).attr("height", height);
        svg.append("line")
        .attr("x1", 100)
        .attr("y1", 100)
        .attr("x2", 200) 
        .attr("y2", 200)
        .style("stroke", "rgb(255,0,0)")
        .style("stroke-width", 2);
    }
}
</script>

<style>

</style>
