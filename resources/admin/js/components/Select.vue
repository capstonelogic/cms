<template>
    <select class="form-control" @change="onChange" v-model="selectedValue">
        <option v-for="option in options"
                v-bind:key="option.id"
                :value="option.id">
            {{option.title}}
        </option>
    </select>
</template>

<script>
export default {
    props: ['value', 'options'],
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
