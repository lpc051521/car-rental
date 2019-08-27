import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index/index'
import All from './../components/car-all/all'
import Shop from './../components/ch_shop/shop'
import Details from '../components/ch_details/details'
import Done from '../components/ch_done/done.vue'
import Wallet from '../components/ch_wallet/wallet.vue'
import City from '../components/ch_city/city.vue'
import Comments from '../components/ch_comment/comment.vue'
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
    }
  ]
})
