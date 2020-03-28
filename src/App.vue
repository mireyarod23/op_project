<template>
  <div id="app">
      <Header />
       <Items></Items>
  </div>
</template>

<script>
import Header from './components/Layout/Header'
import Items from './components/Items'

export default {
  name: 'app',
  components: {
    Header,
    Items
  }
};
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    color: white;
    background-color: black;
  }
</style>
