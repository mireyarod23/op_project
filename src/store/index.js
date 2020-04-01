import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: '',
    displayResult: '',
    rows: 0
  },
  //event registation 
  mutations: {
    SET_RESULTS (state, results){
        state.results = results;
    },
    SET_ROWS (state, rows){
        state.rows = rows;
    },
    SET_DISPLAY_RESULTS (state, displayResult){
        state.displayResult = displayResult;
    }
 },
  actions: {
      //Accessing api passing a parameter
      //TODO: Add await for to allow objects to load add 
      //spinning indicator
    async accessResults({commit, dispatch}, txtSearch){
        axios.get ('https://images-api.nasa.gov/search?q='+ txtSearch +'&media_type=image' )
        .then(response => {
        const data = response.data.collection.items;
        commit('SET_RESULTS', data);
        commit("SET_ROWS", data.length);
        dispatch("paginate", { currentPage: 1, perPage: 12 });
        })
        .catch(function (error) {
        // handle error
            console.log(error);
        });
      
    },
      async paginate({ commit, state }, { currentPage, perPage }) {
          console.log(perPage);
        const start = (currentPage - 1) * perPage;
        const results = state.results.slice(start, start + 12);
        commit("SET_DISPLAY_RESULTS", results);
      },
 },
 //setting the getters 
 getters: {
    getResults(state) {
      return state.results;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayResults(state) {
      return state.displayResult;
    },
 },
  modules: {

  }
});