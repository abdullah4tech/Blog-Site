import { createRouter, createWebHistory } from 'vue-router';
import NewPostView from '@/views/NewPostView.vue';

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
      component: NewPostView
    },
  ]
})

export default router
