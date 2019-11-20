<template>
<div class="container-fluid">
    <div v-if="counters.length" class="row stats-widgets pt-3">
        <div v-for="item in counters" v-bind:key="item.title"
                class="col-sm-4 mb-3">

            <stats-widget
                :icon="item.icon"
                :title="item.title"
                :counter="item.counter"
                :css_class="item.css_classes"/>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            
        </div>
    </div>
</div>
</template>

<script>
import StatsWidget from '../../components/Widgets/Stats.vue'

export default {
    computed: {
        counters() {
            return this.$store.getters['counters/items'];
        }
    },
    components: {
        StatsWidget
    },
    created () {
        this.$store.dispatch('counters/fetchAll')
    },
}
</script>
