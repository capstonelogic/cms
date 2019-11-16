<template>
    <crud-index
        :title="title"
        :namespace="namespace"
        :breadcrumbs="true"
        :serch="true"
        :table_actions="true" />

</template>

<script>
import CrudIndex from '../../components/Crud/Index.vue'

export default {
    props: ['title', 'namespace'],
    components: {
        CrudIndex
    }
}
</script>
