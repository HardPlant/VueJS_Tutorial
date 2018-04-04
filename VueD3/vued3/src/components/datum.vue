<template>
  <div>
      <p></p>
      <div id="list">
          <li></li>
      </div>
  </div>
</template>

<script>
export default {
    name : "datum",
    data (){
        return 0;
    },
    mounted : function(){
        var d3 = this.$d3
        d3.select("p")
        .datum(50)
        .text(function(d){
            return "Used existing p element and the data " + d
        });

        d3.select("div")
        .datum(100)
        .append("p")
        .text(function(d){
            return "Created " + d;
        })

        d3.select("#list").selectAll("li")
        .data([10,20,30,25,15])
        .text(function(d) { return "This is pre-existing element and the value is " + d; })
        .enter() // 데이터에 없는 요소를 자동으로 추가
        .append("li")
        .text(function(d) { return "This is dynamically created element and the value is " + d; });
        //.exit() // 데이터가 없는 요소를 선택
        //.remove() // 해당 요소를 삭제
    }
}
</script>

<style>

</style>
