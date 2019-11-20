import Vue from 'vue'
import Vuex from 'vuex'

import auth from './components/Auth/store'
import menus from './pages/menus/menus'
import sidebar from './components/Menu/sidebar'
import users from './pages/users/users'
import pages from './pages/pages/pages'
import page_statuses from './pages/pages/page_statuses'

import counters from './pages/Dashboard/counters'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        menus,
        sidebar,
        users,
        pages,
        page_statuses,

        counters,
    }
})
