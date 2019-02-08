<template>
   <v-list v-if="results" two-line>
      <template v-for="(trade, index) in results.views">
         <trade-item :model="trade" :index="index" :key="index" />
         <v-divider v-if="index + 1 < results.views.length" :key="-1 - index"/>
      </template>
      <trade-total v-if="results.views.length > 1" :total="results.total" />
   </v-list>
</template>

<script>
import { mapState } from 'vuex';

import TradeItem from './Item';
import TradeTotal from './Total';

export default {
   name: 'TradeList',
   components: {
      'trade-item' : TradeItem,
      'trade-total' : TradeTotal
   },
   computed: {
      ...mapState({
         trades: state => state.strategy.trades
      }),
      results(){
         if(!this.trades){
            return null;
         } 
         let views = [];
         let sum = 0;
         for (let i = 0; i < this.trades.length; i++) {
           
            if(i % 2 === 0){
               let inTrade = this.trades[i];
               let outTrade = (i === this.trades.length - 1) ? null : this.trades[i + 1];

               let result = outTrade ? outTrade.result : 0;

               sum += result;

               let item = {
                  val: inTrade.val,
                  inTrade: inTrade,
                  outTrade: outTrade,
                  result: result
               };

               
               views.push(item);
            }
         }

         return {
            views: views,
            total: sum
         };
      }
      
   }
}
</script>

