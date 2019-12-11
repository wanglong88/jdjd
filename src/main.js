import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import '@/less/common.less'


import {
  Tabbar,
  TabbarItem,
  Button, 
  Icon,
  Card,
  Tag,
  SubmitBar,
  Checkbox,
  CheckboxGroup,
  Stepper,
  Sku,
  Popup,
  Cell,
  Col,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Dialog,
  Picker,
  Field

} from "vant";
Vue
  .use(Col)
  .use(SwipeItem)
  .use(GoodsActionButton)
  .use(GoodsActionIcon)
  .use(GoodsAction)
  .use(Toast)
  .use(CellGroup)
  .use(Swipe)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Button)
  .use(Icon)
  .use(Card)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Popup)
  .use(Stepper)
  .use(Tag)
  .use(Sku)
  .use(Dialog)
  .use(Picker)
  .use(Field)
  .use(Cell);
import 'vant/lib/index.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuex,
  render: h => h(App)
}).$mount('#app')
