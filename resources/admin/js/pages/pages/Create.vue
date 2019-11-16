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
                title: '',
                content: ''
            },
        }
    },
    components: {
        CrudCreate,
        FormFields
    }
}
</script>
