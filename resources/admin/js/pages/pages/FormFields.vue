<template>
<div>

    <form-input :type="'text'" :placeholder="'Enter Title'"
        :label="'Title:'"
        v-model="data.title"
        :errors="errors"
        :error_key="'title'"/>

    <form-editor
        :label="'Content:'"
        v-model="data.content"
        :errors="errors"
        :error_key="'content'"/>

    <form-select
        v-if="related.hasOwnProperty('page_statuses')"
        :label="'Status:'"
        v-model="data[related.page_statuses.keys.for_key]"
        :options="related.page_statuses.data"
        :value_key="related.page_statuses.keys.ref_key"
        :title_key="related.page_statuses.keys.title_key"
        :errors="errors"
        :error_key="related.page_statuses.keys.for_key"/>

    <form-input :type="'text'" :placeholder="'Enter SEO Title'"
        :label="'SEO Title:'"
        v-model="data.seo_title"
        :errors="errors"
        :error_key="'seo_title'"/>

    <form-input :type="'text'" :placeholder="'Enter SEO Description'"
        :label="'SEO Description:'"
        v-model="data.seo_description"
        :errors="errors"
        :error_key="'seo_description'"/>

    <form-input :type="'text'" :placeholder="'Enter SEO Keywords'"
        :label="'SEO Keywords:'"
        v-model="data.seo_keywords"
        :errors="errors"
        :error_key="'seo_keywords'"/>

</div>
</template>

<script>
import FormEditor from '../../components/Form/Editor.vue'
import FormInput from '../../components/Form/Input.vue'
import FormSelect from '../../components/Form/Select.vue'

export default {
    props: ['item', 'namespace', 'errors'],
    data() {
        return {
            data: {}
        }
    },
    computed: {
        related() {
            return this.$store.getters[this.namespace+'/related'];
        },
    },
    created () {
        this.data = this.item;
        this.$store.dispatch(this.namespace+'/fetchRelated')
    },
    components: {
        FormEditor,
        FormInput,
        FormSelect
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
