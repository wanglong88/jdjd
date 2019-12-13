import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import '@/less/common.less'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Api from './api/index.js';
Vue.prototype.$api = Api;
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
