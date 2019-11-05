import Dashboard from './components/Dashboard.vue';


export default {
    mode: 'history',
    routes: [
      {
        path: '/admin', name: 'dashboard', component: Dashboard,
        //beforeEnter: ifAuthenticated,
      },
    ]
}
