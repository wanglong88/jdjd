import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import '@/less/common.less'
import 'vant/lib/index.css';
import { Tabbar, TabbarItem, Icon, Divider, Image, Tab, Tabs } from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Divider).use(Image).use(Tab).use(Tabs);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
