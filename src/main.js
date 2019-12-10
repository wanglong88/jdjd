import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less'
<<<<<<< HEAD
import { Tabbar, TabbarItem ,Icon,Search,Swipe, SwipeItem,Lazyload,Grid, GridItem,CountDown    } from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Icon ).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(CountDown);
=======
import { Tabbar, TabbarItem, Button, Icon, Card, Tag, SubmitBar, Checkbox, CheckboxGroup, Stepper, Sku ,Popup, Cell } from "vant";
Vue.use(Tabbar).use(TabbarItem).use(Button).use(Icon).use(Card).use(SubmitBar).use(Checkbox).use(CheckboxGroup).use(Popup).use(Stepper).use(Tag).use(Sku).use(Cell);
>>>>>>> origin/dev-v1.0
import 'vant/lib/index.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
