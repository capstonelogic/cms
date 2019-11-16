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
var props = {
    title: 'Users',
    namespace: 'users'
};

export default [
    {
        path: '/admin/users', name: 'users', component: Users,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/users/create', name: 'users-create', component: CreateUser,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/users/:id', name: 'users-view', component: ViewUser,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/users/edit/:id', name: 'users-edit', component: EditUser,
        beforeEnter: ifAuthenticated,
        props: props,
    },
];
