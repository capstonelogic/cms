<template>
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top navbar-laravel">
    <div class="container-fluid">
        <router-link :to="{ name: 'dashboard' }" class="navbar-brand">CMS</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav ml-auto">
                <li>
                    <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>

export default {
    data() {
        return {

        }
    },
}

</script>