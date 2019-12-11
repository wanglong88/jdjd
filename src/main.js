import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import { Tabbar, TabbarItem ,Icon ,Search, Tab, Tabs, TreeSelect, Grid, GridItem, Dialog,Button,DropdownMenu, DropdownItem, RadioGroup, Radio , CheckboxGroup ,Checkbox} from "vant";
import { Tag } from 'vant';

Vue.use(Tag);
Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Search).use(Tab).use(Tabs).use(Button).use(CheckboxGroup).use(Checkbox);
Vue.use(Grid).use(GridItem);
Vue.use(TreeSelect);
Vue.use(Dialog)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(RadioGroup);
Vue.use(Radio);
 

import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
