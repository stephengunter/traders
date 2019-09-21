<template>
   <v-data-table :headers="headers" :items="trade_results" hide-actions class="trades-table">
      <template slot="headerCell" slot-scope="{ header }">
         <span class="subheading font-weight-light text-success text--darken-3 cn">
            {{ header.text }}
         </span>
      </template>
      <template slot="items" slot-scope="props">
         <tr>
            <td>
               <v-tooltip top content-class="top">
                  <a href="#" @click.prevent="details(props.item.date)" slot="activator" style="text-decoration: none;">
                     {{ props.item.date }}
                  </a>
                  <span>查看詳情</span>
               </v-tooltip>
            </td>
            <td :style="profitStyle(props.item.grossProfit)">
               {{ props.item.grossProfit }}
            </td>
            <td :style="profitStyle(props.item.grossProfit)">
               {{ props.item.netProfit }}
            </td>
         </tr>
      </template>
   </v-data-table>
</template>

<script>
   export default {
      name: 'ResearchDays',
      props:{
         trade_results: {
            type: Array,
            default: null
         },
         selected_date: {
            type: Number,
            default: 0
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
               text: '毛損益',
               value: 'grossProfit'
            },
            {
               sortable: false,
               text: '淨損益',
               value: 'netProfit'
            }],

            date: 0
            
         }
      },
      beforeMount(){
         this.date = this.selected_date;
      },
      methods:{
         profitStyle(val){
            return { color: val > 0 ? 'red' : 'green' }
         },
         details(date){
            this.date = date;
            this.$emit('details',date);
         }
      }
   }
</script>


<style scoped>
.trades-table td {
   font-size: 1.2em;
}
</style>