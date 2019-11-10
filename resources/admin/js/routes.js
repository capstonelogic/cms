import Dashboard from './components/Dashboard.vue';
import Users from './pages/users/Index.vue';


export default {
    mode: 'history',
    routes: [
      {
        path: '/admin', name: 'dashboard', component: Dashboard,
        //beforeEnter: ifAuthenticated,
      },
      {
        path: '/admin/users', name: 'users', component: Users,
        //beforeEnter: ifAuthenticated,
      },
    ]
}
