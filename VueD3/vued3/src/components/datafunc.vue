<template>
  <div>
      <p></p>
      <p></p>
      <p></p>
  </div>
</template>

<script>
export default {
    name : "datafunc",
    data(){
        return 0;
    },
    mounted : function(){
        var d3 = this.$d3;
        alert(d3);
        var data = [1, 2, 3];
        var paragraph = d3.select("body")
        .selectAll("p")
        .data(data)
        .text(function (d, i) {
        console.log("d: " + d);
        console.log("i: " + i);
        console.log("this: " + this);
        return "The index is " + i + " and the data is " + d;
        });
    }
}
</script>

<style>

</style>
