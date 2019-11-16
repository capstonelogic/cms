<template>
    <div class="table-responsive">
        <table v-if="body.length" class="table table-sm table-bordered">
            <thead>
                <tr class="text-center">
                    <th v-for="header in headers" v-bind:key="header.key">
                        {{header.label}}
                    </th>
                    <th v-if="actions">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in body" v-bind:key="item.id">
                    <td v-for="header in headers" v-bind:key="header.key" :class="'td_'+header.key">
                        <slot :name="'s_'+header.key" v-bind:item="item">
                            <slot name="item" v-bind:item="{field: item, key:item[header.key]}">
                                {{ item[header.key] }}
                            </slot>
                        </slot>
                    </td>
                    <td v-if="actions" class="td_actions">
                        <slot name="s_actions" v-bind:item="item"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        props: ['headers', 'body', 'actions'],
        
        data() {
            return {
                
            }
        }
    }
</script>
