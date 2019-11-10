<template>
    <div class="card mt-5">
        <div class="card-header">
            <div class="text-center">
                <h3>Sign up</h3>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <form class="register" @submit.prevent="signup">

                        <div class="form-group">
                            <label>First Name</label>
                            <input required v-model="data.firstname" type="text" placeholder="First Name"/>
                        </div>

                        <div class="form-group">
                            <label>Last Name</label>
                            <input required v-model="data.lastname" type="text" placeholder="Last Name"/>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input required v-model="data.email" type="text" placeholder="Email"/>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input required v-model="data.password" type="password" placeholder="Password"/>
                        </div>

                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input required v-model="data.password_confirmation" type="password" placeholder="Password"/>
                        </div>

                        <hr/>
                        <button type="submit">Register</button>
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
            data: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
            
        }
    },
    methods: {
        signup: function () {
            const data = this.data
            store.dispatch('auth/signup', data).then(() => {
                const { email, password } = this.data
                store.dispatch('auth/login', { email, password }).then(resp => {
                    this.$router.push('/')
                })
            })
        }
    }
}
</script>