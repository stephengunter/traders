<template>
   <v-list-tile>
      <v-list-tile-content style="width:30px">
         #{{ index + 1 }}
      </v-list-tile-content>
      <v-list-tile-content style="width:50px">
         <v-icon v-if="model.val > 0" color="red">mdi-alpha-b-circle</v-icon>
         <v-icon v-else color="green">mdi-alpha-s-circle</v-icon>
      </v-list-tile-content>

      <v-list-tile-content >
         <v-list-tile-title class="cn">{{ model.inTrade.text }} {{ model.inTrade.price  }}</v-list-tile-title>
         <v-list-tile-sub-title>{{ model.inTrade.time }}</v-list-tile-sub-title>

         <v-list-tile-title v-if="model.outTrade" class="cn">{{ model.outTrade.text  }} {{ model.outTrade.price  }}</v-list-tile-title>
         <v-list-tile-sub-title v-if="model.outTrade" >{{ model.outTrade.time }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-content :style="{ width: '75px' ,color: model.result > 0 ? 'red' : 'green' }">
         <span v-if="model.outTrade"  class="ml-3" style="text-align: right;">{{ model.profit }}</span>
      </v-list-tile-content>
   </v-list-tile>
</template>

<script>


export default {
   name: 'TradeItem',
   props: {
      index:{
         type: Number,
         default: 0
      },
      model: {
         type: Object,
         default: null
      }
   }
}
</script>

