<template>
    <div class="container-fluid min-vh-100">
        <div v-if="isAuthenticated">
            <navbar />
            <div class="min-vh-100">
                <div id="wrapper">
                    <sidebar/>
                    <div id="page-content-wrapper">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div v-else="" class="col-12">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import store from './store'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'


export default {
    data() {
        return {

        }
    },
    computed: {
        isAuthenticated() {
            return store.getters['auth/isAuthenticated']
        }
    },
    components: {
        Navbar,
        Sidebar
    },
    watch: {
        '$route': 'routeChanged',
    },
    methods: {
        routeChanged() {
            $('#sidebar-wrapper.collapse').collapse('hide');
        }
    }
}

</script>
