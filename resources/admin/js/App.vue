<template>
    <div class="container-fluid min-vh-100">
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
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'


export default {
    data() {
        return {

        }
    },
    components: {
        Navbar,
        Sidebar
    },
}

</script>
