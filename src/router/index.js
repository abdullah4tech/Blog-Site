import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/newpost',
      name: 'New Post',
      component: () => import('@/views/NewPostView.vue')
    }
  ]
})

export default router
