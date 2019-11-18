<template>
    <div class="container-fluid">

        <div v-if="breadcrumbs" class="row">
            <div v-if="!objectIsEmpty(item)" class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="itemTitle" />
            </div>
        </div>

        <div class="row pt-3">
            <div v-if="!objectIsEmpty(item)" class="col-12 col-sm-6">
                <slot name="body" v-bind:item="item" v-bind:related="related" />
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb.vue'

export default {
    props: ['title', 'namespace', 'breadcrumbs'],
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
        related() {
            return this.$store.getters[this.namespace+'/related'];
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

        this.$store.dispatch(this.namespace+'/fetchRelated')
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
