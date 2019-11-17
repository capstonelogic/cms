<template>
<div :class="'card '+css_class">
    <div class="card-body">
        <div class="row">
            <div class="col-5 text-center pt-1 h1" v-html="icon"></div>
            <div class="col-7 text-right">
                <span class="h5">{{title}}</span>
                <p class="h2">{{counter}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'css_class',
        'icon',
        'title',
        'counter'
    ],
}
</script>
