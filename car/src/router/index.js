import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index/index'
import All from './../components/car-all/all'
import Shop from './../components/ch_shop/shop'

import Bills from './../components/cgy-bills/bills'
import TopUp from './../components/topUp/topUp'
import Autonym from './../components/autonym/autonym'

import Details from '../components/ch_details/details'
import Done from '../components/ch_done/done.vue'
import Wallet from '../components/ch_wallet/wallet.vue'
import City from '../components/ch_city/city.vue'
import Comments from '../components/ch_comment/comment.vue'
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

      path:'/bills',
      component:Bills
    },
    {
      path:'/topUp',
      component:TopUp
    },
    {
      path:'/autonym',
      component:Autonym
    },

    {
      path:'/details',
      component:Details
    },
    {
      path:'/done',
      component:Done
    },
    {
      path:'/wallet',
      component:Wallet
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/comment',
      component:Comments
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
