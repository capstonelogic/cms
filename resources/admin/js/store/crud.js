import Vue from 'vue'
import str from '../mixins/str'

var Crud = {
    state: {
        endpoint: '',
        items: [],
        meta: {},
        item: {},
        query: {
            page: 1,
            per_page: 20,
            order_by: 'id',
            sort: 'desc',
            search: ''
        }
    },
    mutations: {
        UPDATE_QUERY(state, query) {
            state.query = query;
        },
        FETCH_ALL(state, items) {
            state.items = items.data;
            state.meta = items.meta;

            if(items.meta.last_page < state.query.page) {
                state.query.page = items.meta.last_page
            }
        },
        FETCH(state, item) {
            state.item = item.data;
        },
        CREATE: (state, item) => {
            state.items.unshift(item);
        },
        UPDATE: (state, data) => {
            state.items.forEach(function(item, i) {
                if(data.id == item.id) {
                    Vue.set(state.items, i, item);
                }
            })
        }
    },
    actions: {
        fetchAll({dispatch, state, commit})  {
            dispatch('wait/start', 'fetchAll', { root: true });
            return new Promise((resolve, reject) => {
                axios.get(state.endpoint+'?'+str.methods.queryString(state.query))
                    .then((response) => {
                        commit("FETCH_ALL", response.data);
                        resolve(response.data);
                        dispatch('wait/end', 'fetchAll', { root: true });
                    }).catch((error) => {
                        state.items = []
                        state.meta = {}
                        reject(error.response.data.errors);
                        dispatch('wait/end', 'fetchAll', { root: true });
                    });
            });
        },
        fetch({dispatch, state, commit}, id)  {
            state.item = {}
            dispatch('wait/start', 'fetch.'+id, { root: true });

            return new Promise((resolve, reject) => {
                axios.get(state.endpoint+'/'+id).then((response) => {
                    commit("FETCH", response.data);
                    resolve(response.data);
                    dispatch('wait/end', 'fetch.'+id, { root: true });
                }).catch((error) => {
                    reject(error.response.data.errors);
                    dispatch('wait/end', 'fetch.'+id, { root: true });
                });
            });
        },
        create({dispatch, state, commit}, data)  {
            dispatch('wait/start', 'create', { root: true });
            return new Promise((resolve, reject) => {
                axios.post(state.endpoint, data).then((response) => {
                    commit("CREATE", response.data);
                    resolve(response.data);
                    dispatch('wait/end', 'create', { root: true });
                }).catch((error) => {
                    reject(error.response.data.errors);
                    dispatch('wait/end', 'create', { root: true });
                });
            });
        },
        update({dispatch, state, commit}, data)  {
            dispatch('wait/start', 'update.'+data.id, { root: true });

            return new Promise((resolve, reject) => {
                axios.put(state.endpoint+'/'+data.id, data).then((response) => {
                    commit("UPDATE", response.data);
                    resolve(response.data);
                    dispatch('wait/end', 'update.'+data.id, { root: true });
                }).catch((error) => {
                    reject(error.response.data.errors);
                    dispatch('wait/end', 'update.'+data.id, { root: true });
                });
            });
        },
    },
    getters: {
        items(state) {
            return state.items;
        },
        meta(state) {
            return state.meta;
        },
        item(state) {
            return state.item;
        },
        query(state) {
            return state.query;
        },
    }
    
}

export default Crud 
