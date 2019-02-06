<template>
   <v-list-tile>
      <v-list-tile-content style="width:30px">
         
      </v-list-tile-content>
      <v-list-tile-content style="width:50px">
         
      </v-list-tile-content>

      <v-list-tile-content>
         
      </v-list-tile-content>
      <v-list-tile-content :style="{ width: '75px' ,color: total > 0 ? 'red' : 'green' }">
         <span class="ml-3" style="text-align: right;">小計：{{ total }}</span>
      </v-list-tile-content>
   </v-list-tile>
</template>

<script>


export default {
   name: 'TradeTotal',
   props: {
      total:{
         type: Number,
         default: 0
      }
   }
}
</script>

