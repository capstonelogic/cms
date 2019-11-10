<template>
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

        <li>
            <router-link :to="{ name: 'dashboard' }">
                Dashboard
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: 'users' }">
                Users
            </router-link>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
}

</script>