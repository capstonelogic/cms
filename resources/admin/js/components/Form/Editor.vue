<template>
<div class="form-group">
    <label>{{label}}</label>
    <ckeditor class="form-control" id="contentInput"
            placeholder="Enter Content"
            :editor="editor"
            v-model="mutableValue"
            @input="onEditorInput"
            :config="editorConfig" />
            
    <div v-if="!isEmpty(errors) && errors.hasOwnProperty(error_key)">
        <p v-for="error in errors[error_key]" v-bind:key="error" class="text-danger">
            {{error}}
        </p>
    </div>
</div>
</template>


<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    props: [
        'label',
        'value',
        'errors' ,
        'error_key'
    ],
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
