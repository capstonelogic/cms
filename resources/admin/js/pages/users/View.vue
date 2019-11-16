<template>
    <div class="container-fluid">

        <div class="row">
            <div v-if="!objectIsEmpty(item)" class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="itemTitle" />
            </div>
        </div>

        <div class="row pt-3">
            <div v-if="!objectIsEmpty(item)" class="col-12 col-sm-6">
                
                <div class="card">
                    <div class="card-header text-center">
                        {{item.first_name}} {{item.last_name}}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            Username: {{item.username}}
                        </li>
                        <li class="list-group-item">
                            Email: {{item.email}}
                        </li>
                        <li class="list-group-item">
                            Phone: {{item.phone}}
                        </li>
                        <li class="list-group-item">
                            Registered: {{item.created_at|formatDate}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'

export default {
    props: ['title', 'namespace'],
    data() {
        return {
            id: null,
            breadcrumb: {
                links: [
                    { to: 'dashboard', text: 'Dashboard' },
                    { to: this.namespace, text: this.title }
                ],
            }
        }
    },
    computed: {
        item() {
            return this.$store.getters[this.namespace+'/item'];
        },
        itemTitle() {
            return this.$store.getters[this.namespace+'/itemTitle'];
        },
    },
    components: {
        Breadcrumb
    },
    created () {
        this.id = this.$route.params.id

        this.fetchData()
    },
    methods: {
        fetchData () {
            this.$store.dispatch(this.namespace+'/fetch', this.id)
                .then(function(response) {
                    
                }).catch((error => {

                }))
        }
    }
}
</script>
