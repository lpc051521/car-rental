// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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
    this.$router.push('/home');
  }
});
