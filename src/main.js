import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

import { a, b, c, x } from './d'
console.log('a', a)
console.log('b', b)
console.log('c', c)
console.log('x', x)
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
const eventHub = new Vue()
Vue.mixin({
  beforeCreate () {
    this.$eventHub = eventHub
  }
})
new Vue({
  router,
  store
}).$mount('#app')
