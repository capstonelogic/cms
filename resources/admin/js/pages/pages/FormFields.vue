<template>
<div>
    <div class="form-group">
        <label for="titleInput">Title:</label>
        <input type="text" class="form-control" id="titleInput"
            placeholder="Enter Title"
            v-model="data.title" />
        
        <div v-if="errors.hasOwnProperty('title')">
            <p v-for="error in errors.title" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="contentInput">Content:</label>
        <editor class="form-control" v-model="data.content"/>

        <div v-if="errors.hasOwnProperty('content')">
            <p v-for="error in errors.content" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="seoTitleInput">SEO Title:</label>
        <input type="text" class="form-control" id="seoTitleInput"
            placeholder="Enter SEO Title"
            v-model="data.seo_title" />
        
        <div v-if="errors.hasOwnProperty('seo_title')">
            <p v-for="error in errors.seo_title" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="seoDescriptionInput">SEO Description:</label>
        <input type="text" class="form-control" id="seoDescriptionInput"
            placeholder="Enter SEO Description"
            v-model="data.seo_description" />
        
        <div v-if="errors.hasOwnProperty('seo_description')">
            <p v-for="error in errors.seo_description" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

    <div class="form-group">
        <label for="seoKeywordsInput">SEO Keywords:</label>
        <input type="text" class="form-control" id="seoKeywordsInput"
            placeholder="Enter SEO Keywords"
            v-model="data.seo_keywords" />
        
        <div v-if="errors.hasOwnProperty('seo_keywords')">
            <p v-for="error in errors.seo_keywords" v-bind:key="error" class="text-danger">
                {{error}}
            </p>
        </div>
    </div>

</div>
</template>

<script>
import Editor from '../../components/Editor.vue'

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
    components: {
        Editor
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
