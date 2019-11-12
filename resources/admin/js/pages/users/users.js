import Vue from 'vue'

const module = {
    namespaced: true,
    state: {
        items: [],
        meta: {},
        item: {}
    },
    mutations: {
        FETCH_ALL(state, items) {
            state.items = items.data;
            state.meta = items.meta;
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
        fetchAll({state, commit}, query)  {
            state.items = []
            state.meta = {}

            return new Promise((resolve, reject) => {
                axios.get("/users?"+query).then((response) => {
                    commit("FETCH_ALL", response.data);
                    resolve(response.data);
                }).catch((error) => {
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
    }
}
  
export default module
