<template>
  <div id="app">
 <b-container>
        <b-jumbotron header="FDA Drugs" lead="Drug Interaction">
        </b-jumbotron>

        <b-form-group
          horizontal
          :label-cols="1"
          description="Search the drugs.">
          <b-form-input v-model.trim="name"></b-form-input>
        </b-form-group>

        <b-alert variant="success" :show="showAlert">Hello {{ name }}</b-alert>
      </b-container>
        {{ info }}
  </div>
</template>
<script>

import axios from '';

// testing the api by r
export default {
  name: 'App',
  data () {
    return  {
      info : null
    }
  },
   mounted () {
    axios
      .get('https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20081231]&limit=1')
      .then(response => (this.info = response))
  }
}
</script>

<style>

</style>
