import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';
import DashboardPage from '@/views/DashboardPage.vue';
import _404Page from '@/views/_404Page.vue';
import { App } from 'vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'DashboardPage' }
  },

  {
    path: '/LoginPage',
    name: 'Login',
    component: LoginPage,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/DashboardPage',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: _404Page
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

export const goToPlugin = {
  install(app: App<Element>) {
    app.mixin({
      methods: {
        $goTo<GoToType>(path: 'Login' | 'Dashboard'): void {
          this.$router.push({ name: path });
        }
      }
    })
  }
};
