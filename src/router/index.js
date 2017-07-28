import Vue from 'vue'
import Router from 'vue-router'
import Mnet from '@/components/Mnet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mnet',
      component: Mnet
    }
  ]
})
