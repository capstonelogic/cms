import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from './pages/Dashboard/Dashboard.vue';
import PageNotFound from './pages/PageNotFound.vue';

import store from './store'
var ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/admin/login')
}

Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/admin', name: 'dashboard', component: Dashboard,
        beforeEnter: ifAuthenticated,
      },
      {
        path: "*", component: PageNotFound
      }
    ]
});

import authRoutes from './components/Auth/routes';
router.addRoutes(authRoutes);

import usersRoutes from './pages/users/routes';
router.addRoutes(usersRoutes);

import pagesRoutes from './pages/pages/routes';
router.addRoutes(pagesRoutes);

import menusRoutes from './pages/menus/routes';
router.addRoutes(menusRoutes);

export default router
