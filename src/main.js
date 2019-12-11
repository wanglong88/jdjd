import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/less/common.less'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// import {
//   Tabbar, TabbarItem, GoodsAction,
//   GoodsActionIcon,
//   GoodsActionButton, Button, Cell, CellGroup, NavBar,Icon,Swipe, SwipeItem
// } from "vant";
import Api from './api/index.js';
Vue.prototype.$api = Api;
import axios from 'axios'
Vue.prototype.$ajax = axios
// Vue.use(Tabbar).use(TabbarItem).use(GoodsAction)
//   .use(GoodsActionIcon)
//   .use(GoodsActionButton)
//   .use(Button)
//   .use(Cell).use(CellGroup)
//   .use(NavBar)
//   .use(Icon)
//   .use(Swipe).use(SwipeItem);
// import 'vant/lib/index.css';
// import { Tabbar, TabbarItem, Icon,  } from "vant";

// Vue.use(Tabbar).use(TabbarItem).use(Icon);

// import { Tabbar, TabbarItem, Button, Icon, Card, Tag, SubmitBar, Checkbox, CheckboxGroup, Stepper, Sku, Popup,Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, CountDown,Cell,Divider, Image,Tab, Tabs, TreeSelect,GoodsAction,GoodsActionIcon,GoodsActionButton,CellGroup,NavBar } from "vant";

// Vue.use(Tabbar).use(TabbarItem).use(Button).use(Icon).use(Card).use(SubmitBar).use(Tag).use(Checkbox).use(CheckboxGroup).use(Stepper).use(Sku).use(Popup).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem).use(CountDown).use(Cell).use(Divider).use(Image).use(Tab).use(Tabs).use(TreeSelect).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(CellGroup).use(NavBar);

// 
// import { Tabbar, TabbarItem, Icon,  } from "vant";
// Vue.use(Tabbar).use(TabbarItem).use(Icon);



// import { Tabbar, TabbarItem ,Icon ,Search,  Grid, GridItem} from "vant";
// Vue.use(Tabbar).use(TabbarItem).use(Icon).use(Search);
// Vue.use(Grid).use(GridItem);
// Vue;
// import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
