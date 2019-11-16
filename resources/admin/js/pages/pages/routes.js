import Pages from './Index.vue';
import CreatePage from './Create.vue';
import ViewPage from './View.vue';
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
    title: 'Pages',
    namespace: 'pages'
};

export default [
    {
        path: '/admin/pages', name: 'pages', component: Pages,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/pages/create', name: 'pages-create', component: CreatePage,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/pages/:id', name: 'pages-view', component: ViewPage,
        beforeEnter: ifAuthenticated,
        props: props
    },
    {
        path: '/admin/pages/edit/:id', name: 'pages-edit', component: EditPage,
        beforeEnter: ifAuthenticated,
        props: props,
    },
];
