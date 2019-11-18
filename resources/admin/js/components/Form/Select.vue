<template>
<div class="form-group">
    <label :for="title_key+'Input'">{{label}}</label>
    <select class="form-control" @change="onChange" v-model="selectedValue">
        <option v-for="option in options"
                v-bind:key="option[value_key]"
                :value="option[value_key]">
            {{option[title_key]}}
        </option>
    </select>
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
        'value',
        'options',
        'value_key',
        'title_key',
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
