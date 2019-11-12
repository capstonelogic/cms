require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import date from './mixins/date'
import obj from './mixins/obj'

Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.router = new VueRouter(Routes);

import Routes from './routes';
import App from './App.vue';


export default Vue;

App.router = Vue.router

Vue.mixin(date)
Vue.mixin(obj)

const app = new Vue({
    el: '#app',
    render: app => app(App)
});
