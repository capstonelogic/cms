require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.router = new VueRouter(Routes);

import Routes from './routes';
import App from './App.vue';


export default Vue;

App.router = Vue.router

const app = new Vue({
    el: '#app',
    render: app => app(App)
});
