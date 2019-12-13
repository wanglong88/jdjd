import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import '@/less/common.less'
import Api from './api/index.js';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.prototype.$api = Api;
import axios from 'axios'

Vue.prototype.$ajax = axios

import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')