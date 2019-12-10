import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Tabbar, TabbarItem, GoodsAction,
  GoodsActionIcon,
  GoodsActionButton, Button, Cell, CellGroup, NavBar,Icon,Swipe, SwipeItem
} from "vant";
import Api from './api/index.js';
Vue.prototype.$api = Api;
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.use(Tabbar).use(TabbarItem).use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Button)
  .use(Cell).use(CellGroup)
  .use(NavBar)
  .use(Icon)
  .use(Swipe).use(SwipeItem);
import 'vant/lib/index.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
