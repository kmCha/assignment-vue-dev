import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Welcome from './components/Welcome'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(vueResource)
Vue.use(VueRouter)

var router = new VueRouter()
router.map({
  '/': {
    component: Welcome
  },
  '/home': {
    component: Home
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

var app = Vue.extend({
  // el: 'body',
  components: { App }
})

router.start(app, 'body')
