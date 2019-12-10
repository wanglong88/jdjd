import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less'
import { Tabbar, TabbarItem ,Icon,Search,Swipe, SwipeItem,Lazyload,Grid, GridItem,CountDown    } from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Icon ).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(CountDown);
import 'vant/lib/index.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
