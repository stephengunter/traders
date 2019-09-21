<template>
   <v-list-tile>
      <v-list-tile-content style="width:30px">
         
      </v-list-tile-content>
      <v-list-tile-content style="width:50px">
         
      </v-list-tile-content>

      <v-list-tile-content>
         TOTAL
      </v-list-tile-content>
      <v-list-tile-content :style="{ width: '75px'}">
         <span :style="profitStyle(model.grossProfit)">毛損益 &nbsp;&nbsp; {{ model.grossProfit }}</span>
         <span :style="profitStyle(model.netProfit)">淨損益 &nbsp;&nbsp; {{ model.netProfit }}</span>
       
      </v-list-tile-content>
   </v-list-tile>
</template>

<script>


export default {
   name: 'TradeTotal',
   props: {
      model:{
         type: Object,
         default: null
      }
   },
   methods: {
      profitStyle(val){
         return { color: val > 0 ? 'red' : 'green' }
      }
   }
}
</script>

