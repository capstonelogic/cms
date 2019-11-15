require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import router from './router'
import date from './mixins/date'
import obj from './mixins/obj'
import str from './mixins/str'

Vue.use(require('vue-moment'));

export default Vue;

Vue.mixin(date)
Vue.mixin(obj)
Vue.mixin(str)

new Vue({
    el: '#app',
    router,
    render: app => app(App)
});
