
import Login from './components/Auth/Login.vue';
import Register from './components/Auth/Register.vue';

import Dashboard from './pages/Dashboard.vue';
import Users from './pages/users/Index.vue';

import store from './store'

var ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/admin/login')
}



export default {
    mode: 'history',
    routes: [
      {
          path: '/admin/register', name: 'register', component: Register,
      },
      {
          path: '/admin/login', name: 'login', component: Login,
      },
      {
        path: '/admin', name: 'dashboard', component: Dashboard,
        beforeEnter: ifAuthenticated,
      },
      {
        path: '/admin/users', name: 'users', component: Users,
        beforeEnter: ifAuthenticated,
      },
    ]
}
