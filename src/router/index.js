import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import ZC from '../views/ZC.vue'

import classift from './classift'
import home from './home'
import shooping from './shooping'
import user from './user'
import detailed from './detailed'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect: '/home',
    children: [].concat(classift, home, shooping, user)
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/view/orderpage',
    name: 'orderpage',
    component: () => import(/* webpackChunkName: "orderpage" */ '@/views/orderpage.vue')
  },
  {
    path: '/setr',
    component: () => import('@/components/setr/setr.vue')
  },
  {
    path:'/ZC',
    name:'ZC',
    component:ZC
  },
  {
    path:'*',
    redirect:'/'
  }
  // {
  //   path: '/user/all',
  //   name: 'all',
  //   component: () => import(/* webpackChunkName: "all" */ '@/components/user/myOrder/all.vue')
  // },
  // {
  //   path: '/user/cancel',
  //   name: 'cancel',
  //   component: () => import(/* webpackChunkName: "cancel" */ '@/components/user/myOrder/cancel.vue')
  // },
  // {
  //   path: '/user/ finished',
  //   name: 'finished',
  //   component: () => import(/* webpackChunkName: " finished" */ '@/components/user/myOrder/finished.vue')
  // },
  // {
  //   path: '/user/waitpay',
  //   name: 'waitpay',
  //   component: () => import(/* webpackChunkName: " waitpay" */ '@/components/user/myOrder/waitpay.vue')
  // },
  // {
  //   path: '/user/waitreceive',
  //   name: 'waitreceive',
  //   component: () => import(/* webpackChunkName: "waitreceive" */ '@/components/user/myOrder/waitreceive.vue')
  // },


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
