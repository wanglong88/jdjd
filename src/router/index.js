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
    redirect:'/home',
    // children:[].concat(classift,home,shooping,user)
    children:[].concat(classift,home,shooping,user,detailed)
  },
  {
    path:'/login',
    name:'login',
    component:Login
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
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
