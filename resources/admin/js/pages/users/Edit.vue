<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <breadcrumb :links="breadcrumb.links"
                    :current="'Edit: '+user.first_name+' '+user.last_name"  />
            </div>
        </div>

        <div class="row">
            <div v-if="!objectIsEmpty(user)" class="col-12">
                <form @submit="onSubmit">
                    <form-fields :item="user" @changed="onChange" :errors="errors"/>

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
    data() {
        return {
            user_id: null,
            data: {},
            errors: {},
            breadcrumb: {
                links: [
                    { to: 'dashboard', text: 'Dashboard' },
                    { to: 'users', text: 'Users' }
                ]
            }
        }
    },
    computed: {
        user() {
            return this.$store.getters['users/item'];
        },
    },
    components: {
        FormFields,
        Breadcrumb
    },
    created() {
        this.user_id = this.$route.params.user_id

        this.fetchData()
    },
    methods: {
        fetchData() {
            this.$store.dispatch('users/fetch', this.user_id)
        },
        onChange(data) {
            this.data = Object.assign(data, this.data)
        },
        onSubmit(e) {
            e.preventDefault();
            var _this = this;

            this.$store.dispatch('users/update', this.data)
                .then(function(response) {
                    _this.$router.push({name: 'users'})
                }).catch((errors => {
                    _this.errors = errors
                }))
        }
    }
}
</script>
