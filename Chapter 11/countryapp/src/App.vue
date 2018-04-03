<template>
  <div id="app">
    <h1>hello</h1>
    <region-buttons></region-buttons>
    <country-list></country-list>
  </div>
</template>

<script>
import RegionButtons from './components/RegionButtons.vue';
import CountryList from './components/CountryList.vue';

export default {
  name : 'app',
  components : {RegionButtons, CountryList}
}
</script>

<style>

</style>
