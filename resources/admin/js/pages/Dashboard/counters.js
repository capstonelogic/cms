import crudModule from '../../store/crud';

const crud = crudModule('/stats/counters');

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fillable: {
            key: '',
            position: 0,
            title: '',
            icon: '',
            css_classes: '',
        },
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
