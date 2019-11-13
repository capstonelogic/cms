<template>
    <div class="container-fluid">

        <div class="row" v-if="!objectIsEmpty(user)">
            <div class="col-12">
                <breadcrumb :links="breadcrumb.links"
                    :current="user.first_name+' '+user.last_name" />
            </div>
        </div>

        <div class="row pt-3">
            <div v-if="!objectIsEmpty(user)" class="col-12 col-sm-6">
                
                <div class="card">
                    <div class="card-header text-center">
                        {{user.first_name}} {{user.last_name}}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Username: {{user.username}}
                        </li>
                        <li class="list-group-item">
                            Email: {{user.email}}
                        </li>
                        <li class="list-group-item">
                            Phone: {{user.phone}}
                        </li>
                        <li class="list-group-item">
                            Registered: {{user.created_at|formatDate}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import Breadcrumb from '../../components/Breadcrumb.vue'

export default {
    data() {
        return {
            user_id: null,
            breadcrumb: {
                links: [
                    { to: 'dashboard', text: 'Dashboard' },
                    { to: 'users', text: 'Users' }
                ],
            }
        }
    },
    computed: {
        user() {
            return store.getters['users/item'];
        },
    },
    components: {
        Breadcrumb
    },
    created () {
        this.user_id = this.$route.params.user_id

        this.fetchData()
    },
    methods: {
        fetchData () {
            
            store.dispatch('users/fetch', this.user_id)
                .then(function(response) {
                    
                }).catch((error => {

                }))
        }
    }
}
</script>
