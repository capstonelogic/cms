<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <form @submit="onSubmit">
                    <form-fields :item="user" @changed="onChange" :errors="errors"/>

                    <div class="form-group">
                        <label for="passwordInput">Password:</label>
                        <input type="password" class="form-control" id="passwordInput"
                            placeholder="Enter Password"
                            v-model="user.password" />

                        <div v-if="errors.hasOwnProperty('password')">
                            <p v-for="error in errors.password" v-bind:key="error" class="text-danger">
                                {{error}}
                            </p>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-sm btn-outline-primary">
                            Create
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
            user: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                password: ''
            },
            errors: {}
        }
    },
    components: {
        FormFields
    },
    methods: {
        onChange (data) {
            this.user = Object.assign(data, this.user)
        },
        onSubmit(e) {
            e.preventDefault();
            var _this = this;

            store.dispatch('users/create', this.user)
                .then(function(response) {
                    _this.$router.push({name: 'users'})
                }).catch((errors => {
                    _this.errors = errors
                }))
        }
    }
}
</script>
