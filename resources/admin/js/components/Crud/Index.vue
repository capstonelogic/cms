<template>
    <div class="container-fluid">

        <div v-if="breadcrumbs" class="row">
            <div class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="title"  />
            </div>
        </div>

        <div v-if="serch" class="row">
            <div class="col-12">
                <searchbar :search="query.search" v-on:submit="(q)=>query.search=q" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <cl-table :headers="fields" :body="items" :actions="table_actions">
                    <template v-slot:item="props">
                        <router-link :to="{name: namespace+'-view', params:{id:props.item.field.id}}">
                            {{ props.item.key }}
                        </router-link>
                    </template>

                    <template v-slot:s_created_at="props">
                        {{ props.item.created_at|formatDate }}
                    </template>

                    <template v-slot:s_actions="props">
                        <router-link :to="{name: namespace+'-edit', params:{id:props.item.id}}" class="btn btn-sm btn-outline-primary">
                            <i class="fas fa-pencil-alt"></i>
                        </router-link>
                        <a href="#" @click="activeItem = props.item"
                                data-toggle="modal" data-target=".confirmation-modal"
                                class="btn btn-sm btn-outline-danger">
                            <i class="fas fa-ban"></i>
                        </a>
                    </template>
                </cl-table>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <pagination class="text-center"
                    v-if="meta && meta.last_page > 1"
                    :pagination="meta" @paginate="(p)=>query.page=p">
                </pagination>
            </div>
        </div>

        <confirmation-modal
            :text="'Are you sure you want to delete ('+itemTitle+') ?'"
            v-on:yes="()=>remove()"/>
    </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb.vue'
import Searchbar from '../Searchbar.vue'
import Pagination from '../Pagination.vue'
import ClTable from '../Table.vue'
import ConfirmationModal from '../ConfirmationModal.vue'

export default {
    props: [
        'title',
        'namespace',
        'breadcrumbs',
        'serch',
        'table_actions'
    ],
    data() {
        return {
            breadcrumb: {
                links: [{to: 'dashboard', text: 'Dashboard'}],
            }
        }
    },
    computed: {
        query:  {
            get() {
                return this.$store.getters[this.namespace+'/query']
            },
            set(query) {
                this.$store.commit(this.namespace+'/UPDATE_QUERY', query)
            }
        },
        activeItem:  {
            get() {
                return this.$store.getters[this.namespace+'/activeItem']
            },
            set(activeItem) {
                this.$store.commit(this.namespace+'/SET_ACTIVE', activeItem)
            }
        },
        itemTitle() {
            return this.$store.getters[this.namespace+'/itemTitle'];
        },
        fields() {
            return this.$store.getters[this.namespace+'/fields'];
        },
        items() {
            return this.$store.getters[this.namespace+'/items'];
        },
        itemTitle() {
            return this.$store.getters[this.namespace+'/itemTitle'];
        },
        meta() {
            return this.$store.getters[this.namespace+'/meta'];
        },
    },
    components: {
        Breadcrumb,
        Searchbar,
        Pagination,
        ClTable,
        ConfirmationModal
    },
    created () {
        if(!this.isEmpty(this.$route.query)) {
            this.query = Object.assign(this.query, this.$route.query)
        }
        else {
            this.fetchData()
        }
    },
    watch: {
        query: {
            handler(val) {
                if(this.isEmpty(this.$route.query)
                        || !this.isEquivalent(this.query, this.$route.query)) {
                    this.$router.replace({query: this.query})
                }

                this.fetchData()
            },
            deep: true
        }
    },
    methods: {
        fetchData() {
            this.$store.dispatch(this.namespace+'/fetchAll')
        },
        remove() {
            this.$store.dispatch(this.namespace+'/delete', this.activeItem.id)
            this.activeItem ={}
        }
    }
}
</script>
