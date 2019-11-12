<template>
    <div class="container-fluid">
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
import store from '../../store'
import FormFields from './FormFields.vue'

export default {
    data() {
        return {
            user_id: null,
            data: {},
            errors: {}
        }
    },
    computed: {
        user() {
            return store.getters['users/item'];
        },
    },
    components: {
        FormFields
    },
    created() {
        this.user_id = this.$route.params.user_id

        this.fetchData()
    },
    methods: {
        fetchData() {
            var _this = this;
            store.dispatch('users/fetch', this.user_id)
                .then(function(response) {
                    _this.data = response.data
                }).catch((error => {

                }))
        },
        onChange(data) {
            this.data = Object.assign(data, this.data)
        },
        onSubmit(e) {
            e.preventDefault();
            var _this = this;

            store.dispatch('users/update', this.data)
                .then(function(response) {
                    _this.$router.push({name: 'users'})
                }).catch((errors => {
                    _this.errors = errors
                }))
        }
    }
}
</script>
