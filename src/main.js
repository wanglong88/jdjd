import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less'
import 'vant/lib/index.css';
import { Tabbar, TabbarItem, Icon, Divider, Image } from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Divider).use(Image);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
