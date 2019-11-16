import crud from '../../store/crud';

crud.state.endpoint = '/pages'

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fields: [
            {key: 'id',         label: 'ID'},
            {key: 'title',      label: 'Title'},
            {key: 'content',    label: 'Content'},
            {key: 'created_at', label: 'Created'},
            {key: 'updated_at', label: 'Updated'},
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
