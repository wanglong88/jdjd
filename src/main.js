import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import { Tabbar, TabbarItem ,Icon ,Search, Tab, Tabs, TreeSelect, Grid, GridItem} from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Search).use(Tab).use(Tabs);
Vue.use(Grid).use(GridItem);
Vue.use(TreeSelect);
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
