//TODO: Fix dynamic tabs to work in all screens
<template>
<div class="home">
     <Items />
</div>
</template>

<script>
import Items from '../components/Items'
// testing the api by r
export default {
  name: 'Home',
   components: {
    Items
    }
};
</script>

<style scope>
.home{
    background-color:#333a40 !important;
}
.nav-tabs{
  background-color:#333a40!important;
}
.tab-content{
    background-color:#1e2225;
    color:#fff;
    padding:5px
}
.nav-tabs > li > a{
  border: medium none;
  color: gray;
 /* background-color: darkgray; */
}
.nav-tabs > li > a:hover{
    border-radius: 0;
    color:#fff;
}


</style>