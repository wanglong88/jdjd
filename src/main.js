import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import '@/less/common.less'


import Api from './api/index.js';
import Vant from 'vant';
Vue.use(Vant);
Vue.prototype.$api = Api;
import axios from 'axios'
Vue.prototype.$ajax = axios
import {Lazyload} from 'vant';

// import { Tabbar, TabbarItem ,Icon ,Search, Tab, Tabs, TreeSelect, Grid, GridItem, Dialog,Button,DropdownMenu, DropdownItem, RadioGroup, Radio , CheckboxGroup ,Checkbox, Lazyload} from "vant";
// import { Tag } from 'vant';

// Vue.use(Tag);
// Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Search).use(Tab).use(Tabs).use(Button).use(CheckboxGroup).use(Checkbox);
// Vue.use(Grid).use(GridItem);
// Vue.use(TreeSelect);
// Vue.use(Dialog)
// Vue.use(DropdownMenu).use(DropdownItem)
// Vue.use(RadioGroup);
// Vue.use(Radio);
Vue.use(Lazyload);
 

import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')