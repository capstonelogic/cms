import Users from './Index.vue';
import CreateUser from './Create.vue';
import ViewUser from './View.vue';
import EditUser from './Edit.vue';

import store from '../../store'

var ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/admin/login')
}

export default [
    {
        path: '/admin/users', name: 'users', component: Users,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/admin/users/create', name: 'create-user', component: CreateUser,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/admin/users/:user_id', name: 'user', component: ViewUser,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/admin/users/edit/:user_id', name: 'edit-user', component: EditUser,
        beforeEnter: ifAuthenticated,
    },
];
