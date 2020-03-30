<template>
    <div class="items"  >
            <b-row :show="false" class="m-0" align-v="center" >
              <b-input-group   class="mb-2">
                <b-input-group-prepend  is-text >
                    <b-icon  icon="search" ></b-icon>
                </b-input-group-prepend >
                    <b-form-input class="bg-dark text-light" v-model="query" :formatter="getResult(query)" type="search" placeholder="Search..."></b-form-input>
                </b-input-group>
                <b-card-group deck >
                    <cardLayout  v-for="result in results" 
                    :key="result.id"
                    :img_title="result.data[0].title"
                    :img="result.links[0].href"
                    :desc="result.data[0].description">
                    </cardLayout>
                </b-card-group>
                  <!-- <b-overlay :show="true" no-wrap>
                 
                 </b-overlay> -->
            </b-row>
    </div>
</template>

<script>
import axios from 'axios';
import CardLayout from './Layout/CardLayout'

export default {
    name: 'items',
    components : {
        "cardLayout" : CardLayout
        },
    data (){
        return{
            mesg: 'Items',
            query : '',
            results : ''
        }
    },
methods :{
    //Method that will access api 
    getResult(query){
        axios.get ('https://images-api.nasa.gov/search?q='+ query + '&media_type=image' )
            .then(response => {
            // console.log(response.data.collection.items);
            this.results = response.data.collection.items;
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            });
        },
     accessItem(){
         console.log("Hello world");
     }
    }
}
</script>

<style scoped>

</style>