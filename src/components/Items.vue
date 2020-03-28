<template>
    <div class="items">
        <h1>{{mesg}}</h1>
        <form v-on:submit.prevent="getResult(query)">
            <input type="text" placeholder="Search Moon, Earth" v-model="query">
        </form> 
        <div v-if="results">
            <div v-for="result in results" v-bind:key="result.links">
                <img v-bind:src="result.links[0].href">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'items',
    data (){
        return{
            mesg: 'Items',
            query : '',
            results : ''
        }
    },
methods :{
    getResult(query){
        axios.get ('https://images-api.nasa.gov/search?q='+ query +' &media_type=image')
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