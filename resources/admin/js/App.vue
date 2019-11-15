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
                    <div v-if="$wait.any" id="root-loader">Load...</div>
                </div>
            </div>
        </div>
        <div v-else="" class="col-12">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'


export default {
    data() {
        return {

        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
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
