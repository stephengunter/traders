<template>
   <v-list two-line>
      <template v-for="(trade, index) in tradeViewList">
         <trade-item :trade="trade" :index="index" :key="index" />                        
         <v-divider v-if="index + 1 < tradeViewList.length" :key="-1 - index"/>
         
      </template>
      <trade-total v-if="tradeViewList.length" :total="total" />
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
         trades: state => state.chart.trades
      }),
      tradeViewList(){
         if(!this.trades.length) return [];
         let views = [];
         for (let i = 0; i < this.trades.length; i++) {
            if(i % 2 === 0){
               let inTrade = this.trades[i];
               let outTrade = (i === this.trades.length - 1) ? null : this.trades[i + 1];
               let items = [inTrade];
               if(outTrade) items.push(outTrade);

               let item = {
                  val: inTrade.val,
                  items: items
               };

               if(outTrade){
                  if(inTrade.val > 0 ){
                     item.result = outTrade.price - inTrade.price;
                  }else{
                     item.result = inTrade.price - outTrade.price;
                  }
               }else  item.result = '';
               
               views.push(item);
            }
         }
         return views;
      },
      total(){
         let sum = 0;
         for (let i = 0; i < this.tradeViewList.length; i++) {
            if(this.tradeViewList[i].result){
               sum += this.tradeViewList[i].result
            }
         }
         return sum;
      }
      
   },
}
</script>

