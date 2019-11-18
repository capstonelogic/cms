<template>
    <crud-edit
        :title="title"
        :namespace="namespace"
        :breadcrumbs="true" >

        <template v-slot:fields="props">
            <form-fields
                :item="props.item"
                :namespace="namespace"
                :errors="props.errors"
                @changed="props.onChange"/>
        </template>
    </crud-edit>
</template>

<script>
import CrudEdit from '../../components/Crud/Edit.vue'
import FormFields from './FormFields.vue'

export default {
    props: ['title', 'namespace'],
    components: {
        CrudEdit,
        FormFields
    }
}
</script>
