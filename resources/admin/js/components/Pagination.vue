<template>
<div>
    <nav>
        <ul class="pagination">
            <li class="page-item">
                <a  class="page-link" @click.prevent="changePage(pagination.current_page - 1)" :disabled="pagination.current_page <= 1">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            
            <li class="page-item" v-for="page in pages" v-bind:key="page" :class="isCurrentPage(page) ? 'active' : ''">
                <a class="page-link" @click.prevent="changePage(page)">{{ page }}</a>
            </li>
            
            <li class="page-item">
                <a class="page-link" @click.prevent="changePage(pagination.current_page + 1)" :disabled="pagination.current_page >= pagination.last_page">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
</template>


<script>
    export default {
        props: ['pagination'],
        
        data() {
            return {
                currentPage: this.pagination.current_page,
                perPage: this.pagination.per_page
            }
        },
        methods: {
            isCurrentPage(page) {
                return this.pagination.current_page === page;
            },
            changePage(page) {
                if (page > this.pagination.last_page) {
                    page = this.pagination.last_page;
                }
                this.pagination.current_page = page;
                this.$emit('paginate', page);
            }
        },
        computed: {
            pages() {
                let pages = [];
                let from = 1;

                while (from <= this.pagination.last_page) {
                    pages.push(from);
                    from++;
                }
                return pages;
            }
        }
    }
</script>