import Menus from './Index.vue';
import CreatePage from './Create.vue';
import EditPage from './Edit.vue';

import store from '../../store'

var ifAuthenticated = (to, from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next('/admin/login')
}
var props = {
    title: 'Menus',
    namespace: 'menus'
};

export default [
    {
        path: '/admin/menus', name: 'menus', component: Menus,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/menus/create', name: 'menus-create', component: CreatePage,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/menus/edit/:id', name: 'menus-edit', component: EditPage,
        beforeEnter: ifAuthenticated,
        props: props,
    },
];
