<template>
    <div class="home">
      <!-- <b-container> -->
          <!-- <b-row>
            <b-col sm="2">
                <Nav/>
            </b-col>
            <b-col>
                <Items></Items>
            </b-col>
        </b-row> -->
       
       <!-- </b-container> -->
    <div>
    <b-card no-body>
        <b-tabs pills card vertical nav-wrapper-class="col-2">
        <b-tab title="Tab 1" active>
            <b-card-text>  
                <Items/>
            </b-card-text>
        </b-tab>
        <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
        <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
        </b-tabs>
    </b-card>
</div>
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

<style scoped>

</style>