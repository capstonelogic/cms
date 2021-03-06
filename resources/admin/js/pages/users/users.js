import crudModule from '../../store/crud';

const crud = crudModule('/users');

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fillable: {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: ''
        },
        fields: [
            {key: 'id',         label: 'ID'},
            {key: 'first_name', label: 'First Name'},
            {key: 'last_name',  label: 'Last Name'},
            {key: 'email',      label: 'Email'},
            {key: 'created_at', label: 'Created'},
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
        itemTitle(state) {
            return state.activeItem.first_name+' '+state.activeItem.last_name;
        },
    }
}
  
export default module
