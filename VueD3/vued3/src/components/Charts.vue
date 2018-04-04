<template>
<div>
<button @click="bar"></button>
<button @click="circle"></button>
</div>
</template>

<script>
export default {
    name : "charts",
    mounted : function(){
    },
    methods:{
        bar: function(){
        var d3 = this.$d3;
        var data = [10, 5, 12, 15];
        var width = 300,
            scaleFactor = 20,
            barHeight = 30;
        var graph = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);
        var bar = graph.selectAll("g") 
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                return "translate(0," + i * barHeight + ")";
            });
        bar.append("rect")
            .attr("width", function(d) {
                return d * scaleFactor;
            })
            .attr("height", barHeight - 1);
        bar.append("text")
            .attr("x", function(d) { return (d*scaleFactor); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d; });
        },
        circle: function(){
            var d3 = this.$d3;
            var width = 400;
            var height = 400;
            var data = [10, 20, 30];
            var colors = ['green', 'purple', 'yellow'];

            var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);
            
            var g = svg.selectAll("g")
                .data(data)
                .enter()
                .append("g")
                .attr("transform", function(d, i) { // 정위치
                    return "translate(0,0)";
                })
            g.append("circle")
            .attr("cx", function(d, i) { // We are multiplying the index of the circle 
                return i*75 + 50;//with 75 and adding a padding of 50 between the circles
            })
            .attr("cy", function(d, i) {
                return 75;
            })
            .attr("r", function(d) {
                return d*1.5;
            })
            .attr("fill", function(d, i){
                return colors[i];
            })
            g.append("text")
                .attr("x", function(d, i) {
                    return i * 75 + 25;
                })
                .attr("y", 80)
                .attr("stroke", "teal")
                .attr("font-size", "10px")
                .attr("font-family", "sans-serif")
                .text(function(d) {
                    return d;
            });
        },
        pie : function(){
            var d3 = this.$d3;
            var svg = d3.select("svg"),
                width = svg.attr("width"),
                height = svg.attr("height"),
                radius = Math.min(width, height) / 2;
            var g = svg.append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            var color = d3.scaleOrdinal(['gray', 'green', 'brown', 'orange']);
            var pie = d3.pie()
                .value(function(d) { return d.percent; });
            var arc = d3.arc()
                .outerRadius(radius)
                .innerRadius(0);
            var label = d3
                .arc()
                .outerRadius(radius)
                .innerRadius(radius - 80);
            d3.csv("populations.csv", function(error, data) {
                if (error) {
                    throw error;
                }
            });
            var arc = g.selectAll(".arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc");
                        }
    }
}
</script>

<style>
svg rect {
   fill: gray;
}
svg text {
   fill: yellow;
   font: 12px sans-serif;
   text-anchor: end;
}

.arc text {
   font: 12px arial;
   text-anchor: middle;
}

.arc path {
   stroke: #fff;
}

.title {
   fill: green;
   font-weight: italic;
}
</style>
