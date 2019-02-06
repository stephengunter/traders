<template>
   <v-list-tile>
      <v-list-tile-content style="width:30px">
         #{{ index + 1 }}
      </v-list-tile-content>
      <v-list-tile-content style="width:50px">
         <v-icon v-if="trade.val > 0" color="red">mdi-alpha-b-circle</v-icon>
         <v-icon v-if="trade.val < 0" color="green">mdi-alpha-s-circle</v-icon>
      </v-list-tile-content>

      <v-list-tile-content>
         <v-list-tile-title class="cn">{{ trade.items[0].text }} {{ trade.items[0].price  }}</v-list-tile-title>
         <v-list-tile-sub-title>{{ trade.items[0].time }}</v-list-tile-sub-title>

         <v-list-tile-title v-if="trade.items.length > 1" class="cn">{{ trade.items[1].text  }} {{ trade.items[1].price  }}</v-list-tile-title>
         <v-list-tile-sub-title v-if="trade.items.length > 1" >{{ trade.items[1].time }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-content :style="{ width: '75px' ,color: trade.result > 0 ? 'red' : 'green' }">
         <span class="ml-3" style="text-align: right;">{{ trade.result }}</span>
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
      trade: {
         type: Object,
         default: null
      }
   },
   data () {
      return {
        
      }
   },
   beforeMount(){
      
   },
   methods: {
      
   }
}
</script>

