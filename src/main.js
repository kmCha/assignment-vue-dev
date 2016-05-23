import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import { router } from './vue-router/router'
import { modalFade } from './vue-animation/animation.js'

Vue.use(vueResource)

// 动画
Vue.transition('modal-fade', modalFade)

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
