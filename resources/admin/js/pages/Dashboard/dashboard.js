const module = {
    namespaced: true,
    state: {
        stats_widgets: [
            {
                title: 'Users',
                counter: 5,
                icon: '<i class="fas fa-users"></i>',
                css_classes: 'text-white bg-primary'
            },
            {
                title: 'Pages',
                counter: 10,
                icon: '<i class="fas fa-file"></i>',
                css_classes: 'text-white bg-info'
            }
        ]
    },
    getters: {
        stats_widgets(state) {
            return state.stats_widgets;
        },
    }
}
  
export default module
