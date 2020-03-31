import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: ''
    
  },
  mutations: {
    SET_RESULTS (state, results){
        state.results = results;
    },
 },
  actions: {
    getResults(context, txtSearch){
        axios.get ('https://images-api.nasa.gov/search?q='+ txtSearch +'&media_type=image' )
        .then(response => {
        console.log(response.data.collection.items);
        // this.results = response.data.collection.items;
        context.commit('SET_RESULTS', response.data.collection.items);
        })
        .catch(function (error) {
        // handle error
            console.log(error);
        })
    }      
 },
  modules: {

  }
});