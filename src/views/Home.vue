<template>
<div class="home">
    <b-card no-body border-variant="light"  >
        <b-tabs card vertical class="vh-100"
                 nav-wrapper-class="col-2 mx-0" 
                  >
        <b-tab title="Images" active >
            <Items />
        </b-tab>
        <b-tab active>
            <template v-slot:title class="mp-0">
                <b-spinner type="grow" small></b-spinner> I'm <i>custom</i> <strong>title</strong>
            </template>
            <p class="p-3">Tab contents 1</p>
        </b-tab>
        <b-tab title="Earth"  >
            <Items/>
        </b-tab>
        <b-tab title="Tab 2">
            <b-card-text>Tab contents 2</b-card-text></b-tab>
        <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
        </b-tabs>
    </b-card>
</div>
</template>

<script>
import Items from '../components/Items'
// testing the api by r
export default {
  name: 'home',
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