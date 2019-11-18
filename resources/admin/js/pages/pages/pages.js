import crudModule from '../../store/crud';


const crud = crudModule('/pages');

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fields: [
            {key: 'id',                 label: 'ID'},
            {key: 'title',              label: 'Title'},
            {key: 'user.first_name',    label: 'Author'},
            {key: 'status.title',       label: 'Status'},
            {key: 'content',            label: 'Content',   onList: false},
            {key: 'created_at',         label: 'Created'},
            {key: 'updated_at',         label: 'Updated'},
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
