<template>
    <div>
        <navbar />
        
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
    data() {
        return {

        }
    },
    components: {
        Navbar
    },
}

</script>
