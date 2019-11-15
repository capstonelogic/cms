import crud from '../../store/crud';

crud.state.endpoint = '/users'

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fields: [
            {key: 'id',         label: 'ID'},
            {key: 'first_name', label: 'First Name'},
            {key: 'last_name',  label: 'Last Name'},
            {key: 'email',      label: 'Email'},
            {key: 'created_at', label: 'Created'},
            {key: 'actions',    label: 'Actions'},
        ]
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
