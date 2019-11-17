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
