<template>
    <div id="login" class="card mt-5">
        <div class="card-header">
            <div class="text-center">
                <h4>Sign in</h4>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <form class="login" @submit.prevent="login">

                        <div class="form-group">
                            <label>Email</label>
                            <input required v-model="email" type="text" class="form-control" placeholder="Email"/>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input required v-model="password" type="password" class="form-control" placeholder="Password"/>
                        </div>

                        <hr/>
                        <button type="submit" class="btn btn-success btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../../store'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function () {
            const { email, password } = this
            store.dispatch('auth/login', { email, password }).then(resp => {
                this.$router.push('/admin')
            })
        }
    }
}
</script>