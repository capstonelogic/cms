<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

        <a href="#" class="navbar-toggler mr-2" data-toggle="collapse" data-target="#sidebar-wrapper" aria-controls="" aria-expanded="false" aria-label="Toggle sidebar">
            <i class="fas fa-bars"></i>
        </a>
        
        <router-link :to="{ name: 'dashboard' }" class="navbar-brand">CMS</router-link>
        
        <ul class="navbar-nav ml-auto d-inline d-lg-flex">
            <li class="nav-item d-inline-block">
                <a href="#" @click="logout()" class="ml-2" title="Logout">
                    <i class="fas fa-sign-out-alt"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {

        }
    },
    methods: {
        logout: function () {
            store.dispatch('auth/logout').then(resp => {
                this.$router.go('/admin/login')
            })
        }
    },
}

</script>