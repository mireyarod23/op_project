import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Planetary from '../views/Planetary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/planetary',
      name: 'Planetary',
      component: Planetary
    }
  ]
})
