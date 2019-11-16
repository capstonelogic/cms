<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="'Create'" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <form @submit="onSubmit">
                    <form-fields :item="item" @changed="onChange" :errors="errors"/>

                    <div class="form-group">
                        <label for="passwordInput">Password:</label>
                        <input type="password" class="form-control" id="passwordInput"
                            placeholder="Enter Password"
                            v-model="item.password" />

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
import Breadcrumb from '../../components/Breadcrumb.vue'

export default {
    props: ['title', 'namespace'],
    data() {
        return {
            item: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                password: ''
            },
            errors: {},
            breadcrumb: {
                links: [
                    { to: 'dashboard', text: 'Dashboard' },
                    { to: this.namespace, text: this.title }
                ],
            }
        }
    },
    components: {
        FormFields,
        Breadcrumb
    },
    methods: {
        onChange (data) {
            this.item = Object.assign(data, this.item)
        },
        onSubmit(e) {
            e.preventDefault();
            var _this = this;

            store.dispatch(this.namespace+'/create', this.item)
                .then(function(response) {
                    _this.$router.push({name: _this.namespace})
                }).catch((errors => {
                    _this.errors = errors
                }))
        }
    }
}
</script>
