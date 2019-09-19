<template>
   <v-list v-if="result" two-line>
      <template v-for="(trade, index) in result.trades">
         <trade-item :model="trade" :index="index" :key="index" />
         <v-divider v-if="index + 1 < result.trades.length" :key="-1 - index"/>
      </template>
      <trade-total v-if="result.trades.length > 1" :total="result.netProfit" />
   </v-list>
</template>

<script>

import TradeItem from './Item';
import TradeTotal from './Total';

export default {
   name: 'TradeList',
   props: {
      result: {
         type: Object,
         default: null
      }
   },
   components: {
      'trade-item' : TradeItem,
      'trade-total' : TradeTotal
   },
   // computed: {
   //    ...mapState({
   //       trades: state => state.strategy.trades
   //    }),
   //    result(){
   //       if(!this.trades){
   //          return null;
   //       } 
   //       let views = [];
   //       let sum = 0;
   //       for (let i = 0; i < this.trades.length; i++) {
           
   //          if(i % 2 === 0){
   //             let inTrade = this.trades[i];
   //             let outTrade = (i === this.trades.length - 1) ? null : this.trades[i + 1];

   //             let result = outTrade ? outTrade.result : 0;

   //             sum += result;

   //             let item = {
   //                val: inTrade.val,
   //                inTrade: inTrade,
   //                outTrade: outTrade,
   //                result: result
   //             };

               
   //             views.push(item);
   //          }
   //       }

   //       return {
   //          views: views,
   //          total: sum
   //       };
   //    }
      
   // }
}
</script>

