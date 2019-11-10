const module = {
    namespaced: true,
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
        user: {}
    },
    mutations: {
        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
        AUTH_LOGOUT: (state) => {
            state.user = {}
            state.token = ''
        },
        USER_REQUEST: (state, user) => {
            state.user = user
        },
    },
    actions: {
        login: ({commit, dispatch}, user) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST')
                axios.post('auth/login', user).then(resp => {
                    const token = resp.data.access_token
                    
                    localStorage.setItem('user-token', token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

                    commit('AUTH_SUCCESS', token)
                    
                    dispatch('getUser')
                    resolve(resp)
                })
                .catch(err => {
                    commit('AUTH_ERROR', err)
                    localStorage.removeItem('user-token')
                    reject(err)
                })
            })
        },
        signup: ({commit, dispatch}, user) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST')
                axios.post('auth/signup', user).then(resp => {
                    resolve(resp)
                })
                .catch(err => {
                    commit('AUTH_ERROR', err)
                    reject(err)
                })
            })
        },
        logout: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_LOGOUT')
                localStorage.removeItem('user-token')
                resolve()
            })
        },
        getUser: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
                axios.get('auth').then(resp => {
                    commit('USER_REQUEST', resp.data.data)
                    resolve(resp)
                })
                .catch(err => {
                    reject(err)
                })
            })
        },
    },
    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
        user: state => state.user,
    }
}
  
export default module
