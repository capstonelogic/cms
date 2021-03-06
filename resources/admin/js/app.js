require('./bootstrap');

import Vue from 'vue';
import VueWait from 'vue-wait'
import App from './App.vue';
import router from './router'
import store from './store';

import date from './mixins/date'
import obj from './mixins/obj'
import str from './mixins/str'
import number from './mixins/number'
Vue.mixin(date)
Vue.mixin(obj)
Vue.mixin(str)
Vue.mixin(number)


Vue.use(VueWait)
Vue.use(require('vue-moment'))

import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use(CKEditor);

export default Vue;

new Vue({
    el: '#app',
    store,
    router,
    wait: new VueWait({
        useVuex: true
    }),
    render: app => app(App)
});
