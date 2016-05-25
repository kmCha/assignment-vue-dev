import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import { router } from './vue-router/router'
import { modalFade } from './vue-animation/animation.js'

Vue.use(vueResource)

// 动画
Vue.transition('modal-fade', modalFade)

// 指令
Vue.directive('focus', {
  update (value) {
    if (value) {
      this.el.focus()
    }
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
