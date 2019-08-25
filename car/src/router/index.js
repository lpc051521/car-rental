import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index/index'
import All from './../components/car-all/all'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:'/all',
      component:All
    }
  ]
})
