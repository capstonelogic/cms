import Vue from 'vue'
import Vuex from 'vuex'

import auth from './components/Auth/store'
import users from './pages/users/users'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        users
    }
})
