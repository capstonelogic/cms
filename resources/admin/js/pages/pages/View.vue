<template>
    <crud-view
        :title="title"
        :namespace="namespace"
        :breadcrumbs="true" >

        <template v-slot:body="props">
            <h1>{{props.item.title}}</h1>
            <div v-html="props.item.content"></div>
        </template>

    </crud-view>
</template>

<script>
import CrudView from '../../components/Crud/View.vue'

export default {
    props: ['title', 'namespace'],
    components: {
        CrudView
    }
}
</script>