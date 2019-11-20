<template>
<div>

    <form-input :type="'text'" :placeholder="'Enter Name'"
        :label="'Name:'"
        v-model="data.name"
        :errors="errors"
        :error_key="'name'"/>

    <form-input :type="'text'" :placeholder="'Enter Slug'"
        :label="'Slug:'"
        v-model="data.slug"
        :errors="errors"
        :error_key="'slug'"/>

</div>
</template>

<script>
import FormInput from '../../components/Form/Input.vue'

export default {
    props: ['item', 'namespace', 'errors'],
    data() {
        return {
            data: {}
        }
    },
    created () {
        this.data = this.item;
    },
    components: {
        FormInput,
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
