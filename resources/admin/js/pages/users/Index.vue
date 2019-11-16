<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col-12">
                <breadcrumb :links="breadcrumb.links" :current="'Users'"  />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <searchbar :search="query.search" v-on:submit="(q)=>query.search=q" />
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <cl-table :headers="fields" :body="items">
                    <template v-slot:item="props">
                        <router-link :to="{name: 'user', params:{user_id:props.item.field.id}}">
                            {{ props.item.key }}
                        </router-link>
                    </template>

                    <template v-slot:s_created_at="props">
                        {{ props.item.created_at|formatDate }}
                    </template>

                    <template v-slot:s_actions="props">
                        <router-link :to="{name: 'edit-user', params:{user_id:props.item.id}}" class="btn btn-sm btn-outline-primary">
                            <i class="fas fa-pencil-alt"></i>
                        </router-link>
                        <a href="#" @click="activeItem = props.item"
                                data-toggle="modal" data-target="#confirmation-modal"
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
import Breadcrumb from '../../components/Breadcrumb.vue'
import Searchbar from '../../components/Searchbar.vue'
import Pagination from '../../components/Pagination.vue'
import ClTable from '../../components/Table.vue'
import ConfirmationModal from '../../components/ConfirmationModal.vue'

export default {
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
                return this.$store.getters['users/query']
            },
            set(query) {
                this.$store.commit('users/UPDATE_QUERY', query)
            }
        },
        activeItem:  {
            get() {
                return this.$store.getters['users/activeItem']
            },
            set(activeItem) {
                this.$store.commit('users/SET_ACTIVE', activeItem)
            }
        },
        itemTitle() {
            return this.$store.getters['users/itemTitle'];
        },
        fields() {
            return this.$store.getters['users/fields'];
        },
        items() {
            return this.$store.getters['users/items'];
        },
        itemTitle() {
            return this.$store.getters['users/itemTitle'];
        },
        meta() {
            return this.$store.getters['users/meta'];
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
            this.$store.dispatch('users/fetchAll')
        },
        remove() {
            this.$store.dispatch('users/delete', this.activeItem.id)
            this.activeItem ={}
        }
    }
}
</script>
