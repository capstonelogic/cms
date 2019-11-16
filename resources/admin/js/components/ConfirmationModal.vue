<template>
<div class="modal fade confirmation-modal"
        tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-center">
                <h5>{{text}}</h5>
            </div>
            <div class="modal-footer border-top-0 justify-content-between">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="yes()">Yes</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['text'],
    methods: {
        yes() {
            this.$emit('yes')
        }
    }
}
</script>
