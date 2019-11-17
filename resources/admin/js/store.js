import Vue from 'vue'
import Vuex from 'vuex'

import auth from './components/Auth/store'
import sidebar from './components/Menu/sidebar'
import users from './pages/users/users'
import pages from './pages/pages/pages'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        sidebar,
        users,
        pages
    }
})
