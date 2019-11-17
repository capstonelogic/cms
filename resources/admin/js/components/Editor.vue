<template>
    <ckeditor class="form-control" id="contentInput"
            placeholder="Enter Content"
            :editor="editor"
            v-model="mutableValue"
            @input="onEditorInput"
            :config="editorConfig" />
</template>


<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    props: ['value'],
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {},
            mutableValue: this.value
        }
    },
    methods: {
        onEditorInput(value) {
            this.$emit('input', value)
        }
    }
}
</script>
