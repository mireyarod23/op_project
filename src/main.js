import Vue from 'vue'
import App from './App.vue'
import store from "./store";
// import router from './router'

import 'bootstrap/dist/css/bootstrap.css'

import {BootstrapVue, BootstrapVueIcons }  from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
export const bus = new Vue();

new Vue({
  // router,
  store,
  render: h => h(App),
}).$mount('#app')
