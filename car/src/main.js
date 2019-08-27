// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from "vue-touch";
// import $ from 'zepto'

Vue.use(VueTouch, {name:'v-touch'});


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;
import { obj } from '../static/js/utils'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted() {
    obj.setRem();
    window.onresize = obj.setRem;
  },
  beforeCreate() {
    this.$router.push('/index');
  }
});
