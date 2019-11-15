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
                <div class="table-responsive">
                    <table v-if="users.length" class="table table-sm table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in users" v-bind:key="item.id">
                                <th class="text-center">
                                    <router-link :to="{name: 'user', params:{user_id:item.id}}">
                                        {{ item.id }}
                                    </router-link>
                                </th>
                                <td>
                                    <router-link :to="{name: 'user', params:{user_id:item.id}}">
                                        {{ item.first_name }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{name: 'user', params:{user_id:item.id}}">
                                        {{ item.last_name }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{name: 'user', params:{user_id:item.id}}">
                                        {{ item.email }}
                                    </router-link>
                                </td>
                                <td class="text-light">
                                    {{ item.created_at|formatDate }}
                                </td>
                                <td class="text-center">
                                    <router-link :to="{name: 'edit-user', params:{user_id:item.id}}" class="btn btn-sm btn-outline-primary">
                                        <i class="fas fa-pencil-alt"></i>
                                    </router-link>
                                    <router-link :to="{ name: 'users' }" class="btn btn-sm btn-outline-danger">
                                        <i class="fas fa-ban"></i>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
    </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue'
import Searchbar from '../../components/Searchbar.vue'
import Pagination from '../../components/Pagination.vue'

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
        users() {
            return this.$store.getters['users/items'];
        },
        meta() {
            return this.$store.getters['users/meta'];
        },
    },
    components: {
        Breadcrumb,
        Searchbar,
        Pagination
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
    }
}
</script>
