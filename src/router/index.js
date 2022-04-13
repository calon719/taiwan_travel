import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue'),
  },
  {
    path: '/tourism/:id',
    name: 'tourism',
    component: () => import('../views/TourismView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
