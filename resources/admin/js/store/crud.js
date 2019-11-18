import Vue from 'vue'
import str from '../mixins/str'

export default function crudModule(endpoint) {
    return {
        state: {
            fields: [],
            fillable: [],
            related: {},
            items: [],
            meta: {},
            item: {},
            activeItem: {},
            itemTitle: '',
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
            SET_ACTIVE(state, item) {
                state.activeItem = item;
            },
            SET_RELATED(state, related) {
                Vue.set(state.related, related.namespace, related.data);
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
                state.activeItem = item.data;
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
            },
            DELETE (state, id) {
                state.items.forEach(function(item, i) {
                    if(item.id == id) {
                        state.items.splice(i, 1);
                    }
                });
            }
        },
        actions: {
            fetchRelated({dispatch, state, commit}) {
                dispatch('wait/start', 'fetchRelated', { root: true });

                state.fields.forEach(function(field, i) {
                    if(field.hasOwnProperty('belongsTo')) {
                        var namespace = field.belongsTo.namespace
                        
                        dispatch(namespace+'/fetchAll', null, { root: true })
                            .then(function(response) {
                                commit("SET_RELATED", {
                                    namespace: namespace,
                                    data: {
                                        data: response.data,
                                        keys: {
                                            for_key: 'status_id',
                                            ref_key: 'id'
                                        }
                                    }
                                });
                                dispatch('wait/end', 'fetchRelated', { root: true });
                            }).catch((error) => {
                                dispatch('wait/end', 'fetchRelated', { root: true });
                            });
                    }
                })
            },
            fetchAll({dispatch, state, commit})  {
                dispatch('wait/start', 'fetchAll', { root: true });
                dispatch('fetchRelated');

                return new Promise((resolve, reject) => {
                    axios.get(endpoint+'?'+str.methods.queryString(state.query))
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
                dispatch('fetchRelated');

                return new Promise((resolve, reject) => {
                    axios.get(endpoint+'/'+id).then((response) => {
                        commit("FETCH", response.data);
                        resolve(response.data);
                        dispatch('wait/end', 'fetch.'+id, { root: true });
                    }).catch((error) => {
                        reject(error.response.data.errors);
                        dispatch('wait/end', 'fetch.'+id, { root: true });
                    });
                });
            },
            create({dispatch, commit}, data)  {
                dispatch('wait/start', 'create', { root: true });
                return new Promise((resolve, reject) => {
                    axios.post(endpoint, data).then((response) => {
                        commit("CREATE", response.data);
                        resolve(response.data);
                        dispatch('wait/end', 'create', { root: true });
                    }).catch((error) => {
                        reject(error.response.data.errors);
                        dispatch('wait/end', 'create', { root: true });
                    });
                });
            },
            update({dispatch, commit}, data)  {
                dispatch('wait/start', 'update.'+data.id, { root: true });

                return new Promise((resolve, reject) => {
                    axios.put(endpoint+'/'+data.id, data).then((response) => {
                        commit("UPDATE", response.data);
                        resolve(response.data);
                        dispatch('wait/end', 'update.'+data.id, { root: true });
                    }).catch((error) => {
                        reject(error.response.data.errors);
                        dispatch('wait/end', 'update.'+data.id, { root: true });
                    });
                });
            },
            delete({dispatch, commit}, id) {
                dispatch('wait/start', 'delete.'+id, { root: true });
                
                return new Promise((resolve, reject) => {
                    axios.delete(endpoint+'/'+id).then((response) => {
                        commit('DELETE', id)
                        resolve(response.data);
                        dispatch('wait/end', 'delete.'+id, { root: true });
                    }).catch((error => {
                        reject(error.response.data.errors);
                        dispatch('wait/end', 'delete.'+id, { root: true });
                    }))
                })
            },
        },
        getters: {
            fields(state) {
                return state.fields;
            },
            fillable(state) {
                return state.fillable;
            },
            related(state) {
                return state.related;
            },
            items(state) {
                return state.items;
            },
            meta(state) {
                return state.meta;
            },
            item(state) {
                return state.item;
            },
            activeItem(state) {
                return state.activeItem;
            },
            itemTitle(state) {
                return state.itemTitle;
            },
            query(state) {
                return state.query;
            },
        }
        
    }
}
