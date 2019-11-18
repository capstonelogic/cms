import crudModule from '../../store/crud';


const crud = crudModule('/pages');

const module = {
    namespaced: true,
    state: {
        ...crud.state,
        fillable: {
            status_id: 1,
            title: '',
            content: '',
            seo_title: '',
            seo_description: '',
            seo_keywords: '',
        },
        fields: [
            {key: 'id',                 label: 'ID'},
            {key: 'title',              label: 'Title'},
            {key: 'content',            label: 'Content',   onList: false},
            {key: 'user.first_name',    label: 'Author'},
            {
                key: 'status.title',
                label: 'Status',
                belongsTo: {
                    endpoint: '/pages/statuses',
                    for_key: 'status_id',
                    ref_key: 'id'
                }
            },
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
