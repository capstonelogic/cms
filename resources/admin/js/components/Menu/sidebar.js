
const module = {
    namespaced: true,
    state: {
        items: [
            {
                title: 'Dashboard',
                icon: '<i class="fas fa-tachometer-alt"></i>',
                route: { name: 'dashboard' },
            },
            {
                title: 'Users',
                icon: '<i class="fas fa-users"></i>',
                route: {},
                childs: [
                    {
                        title: 'Users',
                        icon: '<i class="fas fa-users"></i>',
                        route: { name: 'users' },
                    },
                    {
                        title: 'Create',
                        icon: '<i class="fas fa-plus"></i>',
                        route: { name: 'users-create' },
                    }
                ]
            },
            {
                title: 'Pages',
                icon: '<i class="fas fa-file"></i>',
                route: {},
                childs: [
                    {
                        title: 'Pages',
                        icon: '<i class="fas fa-file"></i>',
                        route: { name: 'pages' },
                    },
                    {
                        title: 'Create',
                        icon: '<i class="fas fa-plus"></i>',
                        route: { name: 'pages-create' },
                    }
                ]
            }
        ]
    },
    getters: {
        items(state) {
            return state.items;
        },
    }
}
  
export default module
