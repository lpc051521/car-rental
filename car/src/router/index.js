import Vue from 'vue'
import Router from 'vue-router'
import Index from './../components/index/index'
import All from './../components/car-all/all'
import Shop from './../components/ch_shop/shop'
import Bills from './../components/cgy-bills/bills'
import TopUp from './../components/topUp/topUp'
import Autonym from './../components/autonym/autonym'
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
  ]
})
