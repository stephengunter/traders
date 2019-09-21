<template>
   <v-card class="pa-2" outlined color="cyan lighten-5">
      <v-layout row wrap class="mt-1">

         <v-flex xs4 sm3 class="headline text-md-right">
            交易日：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
           <span>{{ trade_results.length }}</span>
         </v-flex>
         <v-flex xs4 sm3 class="headline text-md-right">
            交易數：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
            <span>{{ totalTradeCount }}</span>
         </v-flex>

         <v-flex xs4 sm3 class="headline text-md-right">
            毛損益：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
            <span :style="profitStyle(totalGrossProfit)"> {{ totalGrossProfit }} </span>
         </v-flex>
         <v-flex xs4 sm3 class="headline text-md-right">
            淨損益：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
            <span :style="profitStyle(totalNetProfit)">{{ totalNetProfit }}</span>
         </v-flex>
      </v-layout>
   </v-card>
</template>

<script>
export default {
   name: 'ResearchReport',
   props: {
      trade_results: {
         type: Array,
         default: null
      }
   },
   data(){
      return {
         totalGrossProfit: 0,
         totalNetProfit: 0,
         totalTradeCount: 0
      }
   },
   beforeMount(){
      this.init();
   },
   methods:{
      init(){
         let dateTrades = this.trade_results;

         let totalGrossProfit = 0;
         let totalNetProfit = 0;
         let totalTradeCount = 0;
         for (let i = 0; i < dateTrades.length; i++) {
            totalGrossProfit += dateTrades[i].grossProfit;
            totalNetProfit += dateTrades[i].netProfit;
            totalTradeCount += dateTrades[i].tradeCount;
         }

         this.totalGrossProfit = totalGrossProfit;
         this.totalNetProfit = totalNetProfit;
         this.totalTradeCount = totalTradeCount;
      },
      profitStyle(val){
         return { color: val > 0 ? 'red' : 'green' }
      },
   }
}
</script>