import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/create-podcast',
      name: 'CreatePodacast',
      component: () => import('./views/CreatePodcast.vue')
    }
  ]
})
