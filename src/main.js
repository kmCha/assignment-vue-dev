import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import { router } from './vue-router/router'

Vue.use(vueResource)

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
