<template>
    <div class="items">
         <b-form-input label="Search"  
                            v-model="query" 
                            placeholder="Search..." 
                            :formatter="getResult(query)"
                            size="lg">
                </b-form-input>
            <b-row align-v="center">
                    <b-card-group deck>
                    <cardLayout  v-for="result in results" 
                    :key="result.id"
                    :img_title="result.data[0].title"
                    :img="result.links[0].href"
                    :desc="result.data[0].description"
                    >
                    </cardLayout>
                    </b-card-group>
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
    // TODO: remove console
    // Add error catch
    getResult(query){
        axios.get ('https://images-api.nasa.gov/search?q='+ query + '&media_type=image' )
            .then(response => {
            console.log(response.data.collection.items);
            this.results = response.data.collection.items;
            });
        }
    }
}
</script>

<style scoped>

</style>