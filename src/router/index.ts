import { createRouter, createWebHistory } from 'vue-router'
import FrontEndView from '../views/FrontEndView.vue'
import CodingView from '../views/CodingView.vue'

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
