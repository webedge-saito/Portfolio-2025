import { createRouter, createWebHistory } from 'vue-router'
import FrontEndView from '../views/frontEndView.vue'
import CodingView from '../views/codingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontEnd',
      component: FrontEndView,
    },
    {
      path: '/coding',
      name: 'coding',
      component: CodingView,
    },
  ],
})

export default router
