import crud from '../../store/crud';

crud.state.endpoint = '/users'

const module = {
    namespaced: true,
    state: {
        ...crud.state,
    },
    mutations: {
        ...crud.mutations,
    },
    actions: {
        ...crud.actions,
    },
    getters: {
        ...crud.getters,
    }
}
  
export default module
