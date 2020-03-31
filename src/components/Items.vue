<template>
    <div class="items"  >

        <b-row class="m-0" align-v="center" >
            <b-input-group   class="mb-2">
            <b-input-group-prepend  is-text >
                <b-icon  icon="search" ></b-icon>
            </b-input-group-prepend >
                <b-form-input class="bg-dark text-light" 
                                v-model="txtSearch"
                                 @input="search()" 
                                 type="search" 
                                 placeholder="Search..."></b-form-input>
            </b-input-group>
                <b-card-group deck >          
                    <cardLayout  v-for="result in results" 
                    :key="result.id"
                    :item ="result"
                    :img_title="result.data[0].title"
                    :img="result.links[0].href"
                    :desc="result.data[0].description">
                    </cardLayout>
                    
                </b-card-group>
                <b-overlay :show="onShow" no-wrap >
                    <template v-slot:overlay >
                    <div class="text-center">
                        <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
                        <p id="cancel-label">Please wait...</p>
                        <b-button
                            ref="cancel"
                            variant="outline-danger"
                            size="sm"
                            aria-describedby="cancel-label"
                            v-model="sText"
                            @click="onShow = false" >Cancel
                        </b-button>
                    </div>
                </template>
                </b-overlay> 
        </b-row> 
        <b-pagination
                v-model="currentPage"
                :total-rows=3
                :per-page="perPage"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
                @input="paginate(currentPage)"
             ></b-pagination>  
    </div>
</template>

<script>
// import axios from 'axios';
import CardLayout from './Layout/CardLayout'
import { bus } from '../main'
import store from '../store';

export default {
    name: 'items',
    components : {
        "cardLayout" : CardLayout
        },
    data (){
        return{
            mesg: 'Items',
            txtSearch : '',
            // results : '',
            selResults:'',
            onShow: false,
            perPage: 3,
            currentPage: 1,
        }
    },
methods :{
    //Method that will access api 
    // getResult(query){
    //     axios.get ('https://images-api.nasa.gov/search?q='+ query + '&media_type=image' )
    //         .then(response => {
    //         // console.log(response.data.collection.items);
    //         this.results = response.data.collection.items;
    //         })
    //         .catch(function (error) {
    //         // handle error
    //             console.log(error);
    //         });
    //     },
    search(){
        // console.log(this.query);
        this.$store.dispatch("getResults", this.txtSearch);
    }
},
 created (){
    bus.$on('changeIt', (data) => {
      this.onShow = true;
      console.log(data);
      this.selResults = data;
     
    })
  },
  paginate(currentPage) {
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    },
  computed: {
      rows() {
        return this.results.length;
      },
      results(){
          return store.state.results; 
      }
  }
}
</script>

<style scoped>
 
</style>