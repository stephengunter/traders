<template>
   <v-list v-if="result" two-line>
      <template v-for="(trade, index) in result.trades">
         <trade-item :model="trade" :index="index" :key="index" />
         <v-divider v-if="index + 1 < result.trades.length" :key="-1 - index"/>
      </template>
      <trade-total :model="result" v-if="result.trades.length > 1" />
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
   }
}
</script>

