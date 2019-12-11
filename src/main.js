import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import '@/less/common.less'
import 'vant/lib/index.css';

import { Tabbar, TabbarItem, Button, Icon, Card, Tag, SubmitBar, Checkbox, CheckboxGroup, Stepper, Sku, Popup, Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, CountDown, Cell, Divider, Image, Tab, Tabs, TreeSelect, } from "vant";

Vue.use(Tabbar).use(TabbarItem).use(Button).use(Icon).use(Card).use(SubmitBar).use(Tag).use(Checkbox).use(CheckboxGroup).use(Stepper).use(Sku).use(Popup).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(CountDown).use(Cell).use(Divider).use(Image).use(Tab).use(Tabs).use(TreeSelect);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
