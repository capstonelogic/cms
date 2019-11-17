const module = {
    namespaced: true,
    state: {
        stats_widgets: [
            {
                title: 'Customers',
                counter: 5,
                icon: '<i class="fas fa-users"></i>',
                css_classes: 'text-white bg-primary'
            },
            {
                title: 'Visits',
                counter: 120000,
                icon: '<i class="fas fa-eye"></i>',
                css_classes: 'text-white bg-success'
            },
            {
                title: 'Pages',
                counter: 10,
                icon: '<i class="fas fa-file"></i>',
                css_classes: 'text-white bg-info'
            },
        ]
    },
    getters: {
        stats_widgets(state) {
            return state.stats_widgets;
        },
    }
}
  
export default module
