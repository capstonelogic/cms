<template>
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
            <li v-for="(item, index) in items"  v-bind:key="item.title">
                <div v-if="!objectIsEmpty(item.route)">
                    <router-link :to="item.route">
                        <span v-html="item.icon"></span>
                        {{item.title}}
                    </router-link>
                </div>
                <div v-else="">
                    <a :href="'#Submenu'+index" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <span v-html="item.icon"></span>
                        {{item.title}}
                    </a>
                </div>
                <ul v-if="item.childs && item.childs.length" class="collapse list-unstyled" :id="'Submenu'+index">
                    <li v-for="child in item.childs"  v-bind:key="child.title">
                        <router-link :to="child.route">
                            <span v-html="child.icon"></span>
                            {{child.title}}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    computed: {
        items() {
            return this.$store.getters['sidebar/items'];
        }
    },
}

</script>