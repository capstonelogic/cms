<template>
    <div class="container-fluid">

        <div class="row">
            <div v-if="!objectIsEmpty(item)" class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="itemTitle"  />
            </div>
        </div>

        <div class="row">
            <div v-if="!objectIsEmpty(item)" class="col-12">
                <form @submit="onSubmit">
                    <form-fields :item="item" @changed="onChange" :errors="errors"/>

                    <div class="form-group">
                        <button type="submit" class="btn btn-sm btn-outline-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import FormFields from './FormFields.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'

export default {
    props: ['title', 'namespace'],
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
        FormFields,
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
