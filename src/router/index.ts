import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FunnelOne from '../views/FunnelOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomeView,
    },
    {
      path: '/funnel-1',
      name: 'funnel1',
      component: FunnelOne,
    },
    {
      path: '/funnel-2',
      name: 'funnel-2',
      component: HomeView,
    },
    {
      path: '/funnel-3',
      name: 'funnel-3',
      component: HomeView,
    },
    {
      path: '/funnel-4',
      name: 'funnel-4',
      component: HomeView,
    },
    {
      path: '/funnel-5',
      name: 'funnel-5',
      component: HomeView,
    },
    {
      path: '/user/login',
      name: 'user-login',
      component: HomeView,
    },
      {
      path: '/user/dashboard',
      name: 'user-dashboard',
      component: HomeView,
      meta: { requiresAuth: true, role: 'user' },
    },

  ],
})

export default router
