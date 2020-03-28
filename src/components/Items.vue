<template>
    <div class="items">
        <!-- <form v-on:submit.prevent="getResult(query)">
            <input type="text" placeholder="Search Moon, Earth" v-model="query">
        </form> -->
        <b-form-input v-model="query" placeholder="Search Moon, Earth, or Pluto..." @input="getResult(query)"></b-form-input>
        <!-- <div v-if="results">
            <div v-for="result in results" v-bind:key="result.id">
                <img v-bind:src="result.links[0].href"/>
                <h1>{{result.data[0].title}}</h1>
            </div>
        </div> -->
        <b-container>
            <b-row align-v="center">
                <b-col md="3">
                    <b-card v-for="result in results" v-bind:key="result.id"
                
                            v-bind:img-src="result.links[0].href"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                    >
                    <b-card-text>
                       {{result.data[0].description}}
                    </b-card-text>
                      </b-card>
                    </b-col>
            </b-row>
        </b-container>
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
        axios.get ('https://images-api.nasa.gov/search?q='+ query )
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