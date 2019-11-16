<template>
    <crud-view
        :title="title"
        :namespace="namespace"
        :breadcrumbs="true" >

        <template v-slot:body="props">
            <div class="card">
                <div class="card-header text-center">
                    {{props.item.first_name}} {{props.item.last_name}}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        Username: {{props.item.username}}
                    </li>
                    <li class="list-group-item">
                        Email: {{props.item.email}}
                    </li>
                    <li class="list-group-item">
                        Phone: {{props.item.phone}}
                    </li>
                    <li class="list-group-item">
                        Registered: {{props.item.created_at|formatDate}}
                    </li>
                </ul>
            </div>
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