import crudModule from '../../store/crud';

const crud = crudModule('/menus');

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fillable: {
            name: '',
            slug: ''
        },
        fields: [
            {key: 'name', label: 'Name'},
            {key: 'slug', label: 'Slug'},
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
            return state.activeItem.name;
        },
    }
}
  
export default module
