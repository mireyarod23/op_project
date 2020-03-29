<template>
  <div id="app">
     <Header />
     <Home/>
  </div>
</template>

<script>
import Header from './components/Layout/Header'
import Home from './views/Home'

export default {
  name: 'app',
  components: {
    Header,
    Home
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
  }
</style>
