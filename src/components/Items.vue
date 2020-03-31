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
                    <cardLayout  v-for="result in getDisplayResults" 
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
                :total-rows="getRows"
                :per-page="perPage"
                first-text="First"
                prev-text="Prev"
                next-text="Next"
                last-text="Last"
                align="fill"
                @input="paginate(currentPage)"
                class="bg-secondary"
             ></b-pagination>  
             
    </div>
</template>

<script>
// import axios from 'axios';
import CardLayout from './Layout/CardLayout'
import { bus } from '../main'
import store from '../store';
import {mapGetters} from "vuex";

export default {
    name: 'items',
    components : {
        "cardLayout" : CardLayout
        },
    async mounted() {
        this.getRecords();
    },
    data (){
        return{
            mesg: 'Items',
            txtSearch : '',
            selResults:'',
            onShow: false,
            perPage: 3,
            currentPage: 1,
        }
    },
methods :{
    search(){
        this.$store.dispatch("accessResults", this.txtSearch);
    },
    async getRecords(){
        this.$store.dispatch("accessResults", "Earth");
    },
    paginate(currentPage) {
        console.log(currentPage);
      this.$store.dispatch("paginate", { currentPage, perPage: this.perPage });
    }
},
 created (){
    bus.$on('changeIt', (data) => {
      this.onShow = true;
      console.log(data);
      this.selResults = data;
     
    })
  },

  computed: {
      ...mapGetters (["getDisplayResults", "getRows"]),

        results(){
          return store.state.results; 
      }
  }
}
</script>

<style >

</style>