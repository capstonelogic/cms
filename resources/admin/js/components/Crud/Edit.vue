<template>
    <div class="container-fluid">

        <div v-if="breadcrumbs" class="row">
            <div v-if="!objectIsEmpty(item)" class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="itemTitle"  />
            </div>
        </div>

        <div v-if="!objectIsEmpty(item)" class="row">
            <div class="col-12">
                <slot name="body" v-bind:item="item">
                    <form @submit="onSubmit">
                        <slot name="fields"
                            v-bind:item="item"
                            v-bind:onChange="onChange"
                            v-bind:errors="errors" />

                        <div class="form-group">
                            <button type="submit" class="btn btn-sm btn-outline-primary">
                                Update
                            </button>
                        </div>
                    </form>
                </slot>
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
            data: {},
            errors: {},
            breadcrumb: {
                links: [
                    { to: 'dashboard', text: 'Dashboard' },
                    { to: this.namespace, text: this.title }
                ]
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
    created() {
        this.id = this.$route.params.id

        this.fetchData()
    },
    methods: {
        fetchData() {
            this.$store.dispatch(this.namespace+'/fetch', this.id)
        },
        onChange(data) {
            this.data = Object.assign(data, this.data)
        },
        onSubmit(e) {
            e.preventDefault();
            var _this = this;

            this.$store.dispatch(this.namespace+'/update', this.data)
                .then(function(response) {
                    _this.$router.push({name: _this.namespace})
                }).catch((errors => {
                    _this.errors = errors
                }))
        }
    }
}
</script>
