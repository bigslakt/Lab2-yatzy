import Vue from 'vue'
import Router from 'vue-router'
import Intro from './components/Intro.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('./components/Game.vue')
    }
  ]
})
