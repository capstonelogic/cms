<template>
<div>
    <div class="form-group">
        <label for="firstNameInput">First Name:</label>
        <input type="text" class="form-control" id="firstNameInput"
            placeholder="Enter First Name"
            v-model="data.first_name" />
        
        <div v-if="errors.hasOwnProperty('first_name')">
            <p v-for="error in errors.first_name" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="lastNameInput">Last Name:</label>
        <input type="text" class="form-control" id="lastNameInput"
            placeholder="Enter Last Name"
            v-model="data.last_name" />

        <div v-if="errors.hasOwnProperty('last_name')">
            <p v-for="error in errors.last_name" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="firstNameInput">Username:</label>
        <input type="text" class="form-control" id="userNameInput"
            placeholder="Enter Username"
            v-model="data.username" />

        <div v-if="errors.hasOwnProperty('username')">
            <p v-for="error in errors.username" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="emailInput">Email:</label>
        <input type="text" class="form-control" id="emailInput"
            placeholder="Enter Email"
            v-model="data.email" />

        <div v-if="errors.hasOwnProperty('email')">
            <p v-for="error in errors.email" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>
    
    <div class="form-group">
        <label for="phoneInput">Phone:</label>
        <input type="text" class="form-control" id="phoneInput"
            placeholder="Enter Phone"
            v-model="data.phone" />

        <div v-if="errors.hasOwnProperty('phone')">
            <p v-for="error in errors.phone" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    props: ['item', 'errors'],
    data() {
        return {
            data: {}
        }
    },
    created () {
        this.data = this.item;
    },
    watch: {
        data: {
            handler(val) {
                this.onChange()
            },
            deep: true
        }
    },
    methods: {
        onChange() {
            this.$emit('changed', this.data)
        }
    }
}
</script>
