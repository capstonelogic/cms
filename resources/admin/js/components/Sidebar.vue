<template>
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
        <li>
            <router-link :to="{ name: 'dashboard' }">
                <i class="fas fa-tachometer-alt"></i>
                Dashboard
            </router-link>
        </li>
        <li>
            <a href="#usersSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-users"></i>
                Users
            </a>

            <ul class="collapse list-unstyled" id="usersSubmenu">
                <li>
                    <router-link :to="{ name: 'users' }">
                        <i class="fas fa-users"></i>
                        Users
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'users-create' }">
                        <i class="fas fa-plus"></i>
                        Create
                    </router-link>
                </li>
            </ul>

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