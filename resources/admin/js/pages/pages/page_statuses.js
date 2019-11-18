import crudModule from '../../store/crud';

const crud = crudModule('/pages/statuses');

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fillable: {
            title: ''
        },
        fields: [
            {key: 'id',    label: 'ID'},
            {key: 'title', label: 'Name'},
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
            return state.activeItem.title;
        },
    }
}
  
export default module
