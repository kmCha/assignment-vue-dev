import Vue from 'vue'
import App from './App'
import AssHeader from './components/AssHeader'
import AssFooter from './components/AssFooter'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(vueResource)
Vue.use(VueRouter)

var router = new VueRouter()
router.map({
  '/foo': {
    component: AssHeader
  },
  '/bar': {
    component: AssFooter
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
