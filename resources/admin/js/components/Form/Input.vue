<template>
<div class="form-group">
    <label>{{label}}</label>
    <input :type="type" class="form-control"
        @change="onChange"
        :placeholder="placeholder"
        v-model="selectedValue" />
    
    <div v-if="!isEmpty(errors) && errors.hasOwnProperty(error_key)">
        <p v-for="error in errors[error_key]" v-bind:key="error" class="text-danger">
            {{error}}
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'label',
        'placeholder',
        'type',
        'value',
        'errors' ,
        'error_key'
    ],
    data() {
        return {
            selectedValue: null,
        }
    },
    created () {
        this.selectedValue = this.value;
    },
    methods: {
        onChange(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>
