import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import Welcome from '../components/Welcome'

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

export { router }
