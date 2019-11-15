import Login from './Login.vue';
import Register from './Register.vue';

export default [
    {
        path: '/admin/register', name: 'register', component: Register,
    },
    {
        path: '/admin/login', name: 'login', component: Login,
    },
];
