<template>
<header class="header">
   <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item :to="'/'">Home </b-nav-item>
       <b-nav-item :to="'/plantary'">Plantary Models</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  <div>
        <b-img width="150" :src="require('../../assets/Open.png')"  alt="Nasa Logo"></b-img>
   <h4>Overview</h4>
  </div>
    <router-view></router-view>
</header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
    .header {
        background:#1e2225;
        padding: 5px;
        color: white;
        text-align: left; 
       
    }
    .header h4 {
      display: inline;
    }
</style>