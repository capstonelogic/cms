<template>
    <div class="form-group">
        <input type="text" class="form-control"
            placeholder="Search"
            @keydown.enter.prevent="submit"
            v-model="query" />
    </div>
</template>

<script>
export default {
    props: ['search'],
    data() {
        return {
            query: ''
        }
    },
    created () {
        this.query = this.search;
    },
    methods: {
        submit(e) {
            this.$emit('submit', this.query)
        }
    }
}

</script>
