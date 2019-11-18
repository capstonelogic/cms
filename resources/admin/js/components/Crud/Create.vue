<template>
    <div class="container-fluid">

        <div v-if="breadcrumbs" class="row">
            <div class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="'Create'" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <slot name="body" v-bind:item="item">
                    <form @submit="onSubmit">

                        <slot name="fields"
                            v-bind:onChange="onChange"
                            v-bind:errors="errors" />

                        <div class="form-group">
                            <button type="submit" class="btn btn-sm btn-outline-primary">
                                Create
                            </button>
                        </div>
                    </form>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import Breadcrumb from '../../components/Breadcrumb.vue'

export default {
    props: ['title', 'namespace', 'item', 'breadcrumbs'],
    data() {
        return {
            errors: {},
            breadcrumb: {
                links: [
                    { to: 'dashboard', text: 'Dashboard' },
                    { to: this.namespace, text: this.title }
                ],
            },
            data: {}
        }
    },
    components: {
        Breadcrumb
    },
    methods: {
        onChange (data) {
            this.data = Object.assign(data, this.data)
        },
        onSubmit(e) {
            e.preventDefault();
            var _this = this;

            store.dispatch(this.namespace+'/create', this.data)
                .then(function(response) {
                    _this.$router.push({name: _this.namespace})
                }).catch((errors => {
                    _this.errors = errors
                }))
        }
    }
}
</script>
