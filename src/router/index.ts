import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CollectionsView from '@/views/CollectionsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/collections',
      name: 'collections',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/CollectionsView.vue'),
      component: CollectionsView,
    },
    {
      path: '/about',
      name: 'about',

      // component: () => import('../views/AboutView.vue'),
      component: AboutView,
    },
  ],
})

export default router
