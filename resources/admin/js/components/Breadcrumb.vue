<template>
    <nav aria-label="breadcrumb" class="breadcrumb-wraper">
        <ol class="breadcrumb">
            <li v-for="link in links" v-bind:key="link.text" class="breadcrumb-item">
                <router-link :to="{ name: link.to }">
                    {{link.text}}
                </router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                {{current}}
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    props: ['links', 'current'],
    data() {
        return {

        }
    }
}

</script>