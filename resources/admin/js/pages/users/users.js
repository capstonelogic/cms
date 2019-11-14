import Vue from 'vue'
import str from '../../mixins/str'

const module = {
    namespaced: true,
    state: {
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
        fetchAll({state, commit})  {
            return new Promise((resolve, reject) => {
                axios.get("/users?"+str.methods.queryString(state.query))
                    .then((response) => {
                        commit("FETCH_ALL", response.data);
                        resolve(response.data);
                    }).catch((error) => {
                        state.items = []
                        state.meta = {}
                        reject(error.response.data.errors);
                    });
            });
        },
        fetch({state, commit}, id)  {
            state.item = {}

            return new Promise((resolve, reject) => {
                axios.get("/users/"+id).then((response) => {
                    commit("FETCH", response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error.response.data.errors);
                });
            });
        },
        create({commit}, data)  {
            return new Promise((resolve, reject) => {
                axios.post("/users", data).then((response) => {
                    commit("CREATE", response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error.response.data.errors);
                });
            });
        },
        update({commit}, data)  {
            return new Promise((resolve, reject) => {
                axios.put("/users/"+data.id, data).then((response) => {
                    commit("UPDATE", response.data);
                    resolve(response.data);
                }).catch((error) => {
                    reject(error.response.data.errors);
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
  
export default module
