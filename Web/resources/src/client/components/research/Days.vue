<template>
   <v-data-table :headers="headers" :items="trades" hide-actions class="trades-table">
      <template slot="headerCell" slot-scope="{ header }">
         <span class="subheading font-weight-light text-success text--darken-3 cn">
            {{ header.text }}
         </span>
      </template>
      <template slot="items" slot-scope="props">
         <td>
            <v-tooltip top content-class="top">
               <a href="#" @click.prevent="details" slot="activator" style="text-decoration: none;">
                  {{ props.item.date }}
               </a>
               <span>查看詳情</span>
            </v-tooltip>


         </td>
         <td>{{ props.item.profit }}</td>
         <td>{{ props.item.counts }}</td>
      </template>
   </v-data-table>
</template>

<script>
   export default {
      name: 'ResearchDays',
      props:{
         trades: {
            type: Array,
            default: null
         }
      },
      data(){
         return {
            headers: [{
               sortable: false,
               text: '日期',
               value: 'date'
            },
            {
               sortable: false,
               text: '損益',
               value: 'profit'
            },
            {
               sortable: false,
               text: '交易回數',
               value: 'counts'
            }],
            
         }
      },
      methods:{
         details(){

         }
      }
   }
</script>


<style scoped>
.trades-table td {
   font-size: 1.2em;
}
</style>