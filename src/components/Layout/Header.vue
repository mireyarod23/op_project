<template>
<header class="header">
  <img alt="NASA logo" src="../../assets/Open.png"/>
   <h4>Overview</h4>
</header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: #333;
        padding: 5px;
        color: white;
        text-align: left; 
       
    }
    .header img{
        height: 100px;
    }
    .header h4 {
      display: inline;
    }
</style>