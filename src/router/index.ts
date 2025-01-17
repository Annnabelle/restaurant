import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    }
  ]
  
})

export default router
