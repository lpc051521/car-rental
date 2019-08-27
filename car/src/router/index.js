import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index/index'
import All from './../components/car-all/all'
import Shop from './../components/ch_shop/shop'
import Login from './../components/login/login'
import Register from './../components/register/register'
import Order from './../components/order/order'
import Allorder from './../components/order/all-order/all-order'
import Not from './../components/order/not/not'
import Evaluate from './../components/order/evaluate/evaluate'

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
    },
    {
      path:'/shop',
      component:Shop
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/order',
      component:Order,
      children:[
        {
          path:'/',
          redirect:'/allorder'
        },
        {
          path:'/allorder',
          component:Allorder,
        },{
          path:'/not',
          component:Not,
        },{
          path:'/evaluate',
          component:Evaluate,
        },
      ]
    },

  ]
})
