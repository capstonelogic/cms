<template>
<div class="container-fluid">
    <div v-if="stats_widgets.length" class="row stats-widgets pt-3">
        <div v-for="item in stats_widgets" v-bind:key="item.title"
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
        stats_widgets() {
            return this.$store.getters['dashboard/stats_widgets'];
        }
    },
    components: {
        StatsWidget
    }
}
</script>
