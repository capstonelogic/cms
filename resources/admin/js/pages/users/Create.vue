<template>
    <crud-create
        :title="title"
        :namespace="namespace"
        :breadcrumbs="true" >

        <template v-slot:fields="props">
            <form-fields
                :item="item"
                :errors="props.errors"
                @changed="props.onChange"/>
                
            <div class="form-group">
                <label for="passwordInput">Password:</label>
                <input type="password" class="form-control" id="passwordInput"
                    placeholder="Enter Password"
                    v-model="item.password" />

                <div v-if="props.errors.hasOwnProperty('password')">
                    <p v-for="error in props.errors.password" v-bind:key="error" class="text-danger">
                        {{error}}
                    </p>
                </div>
            </div>
        </template>
    </crud-create>
</template>

<script>
import CrudCreate from '../../components/Crud/Create.vue'
import FormFields from './FormFields.vue'

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
        }
    },
    components: {
        CrudCreate,
        FormFields
    }
}
</script>
