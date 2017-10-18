import Vue from 'vue'
import Router from 'vue-router'
import Mnet from '@/components/Mnet'
import Tvn from '@/components/Tvn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mnet',
      component: Mnet
    },
    {
      path: '/tvn',
      name: 'tvn',
      component: Tvn
    }
  ]
})
