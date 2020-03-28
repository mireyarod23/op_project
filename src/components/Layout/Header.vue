<template>
<header class="header">
  <img alt="NASA logo" src="../../assets/Open.png"/>
   <h3>Images</h3>
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
        padding: 10px;
        color: white;
        text-align: left; 
       
    }
    .header img{
        height: 100px;
    }
    .header h3 {
      display: inline;
    }
</style>