<template>
    <div class="row">
    <!-- <div class="col-md-4" v-bind:key="results.items" v-for="(result.items) in results">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title">
            <h4 class="card-title">{{ result.title }}</h4>
          </div>
        </div>
        <div class="panel-body">
          
            <p>Year: {{ result.release_date }}</p>
            <p>Director: {{ result.director }}</p>
            
            <router-link :to="'/film/' + (index + 1)">
              <a :href="'/film/' + (index + 1)" class="btn btn-primary btn-md pull-left">Go Film Details</a>
          </router-link>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
 import axios from 'axios';

// testing the api by r
export default {
  name: 'home',
  data() {
    return {
      results: {},
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
     axios
      .get('https://swapi.co/api/?format=json')
      .then((response) => {
        this.Items = response.data;
      }, (error)  =>  {
        console.log(error);
      })
    },
  },
};

</script>