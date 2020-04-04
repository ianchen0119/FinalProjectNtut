import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dynamic from '@/components/Dynamic'
import Login from '@/components/Other/Login'

import Myperformance from '@/components/Myperformance'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
      // ,children:[
      //   {
      //       name:'Footer',
      //       component:Footer
      //   }
      // ]
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Myperformance',
      name: 'Myperformance',
      component: Myperformance
    }
  ]
})