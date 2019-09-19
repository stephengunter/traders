<template>
   <v-card v-if="model" class="pa-2" outlined color="cyan lighten-5">
      <v-layout row wrap class="mt-1">
         <v-flex xs4 sm3 class="headline text-md-right">
            毛損益：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
            <span>{{ model.grossProfit }}</span>
         </v-flex>
         <v-flex xs4 sm3 class="headline text-md-right">
            淨損益：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
            <span>{{ model.netProfit }}</span>
         </v-flex>

         <v-flex xs4 sm3 class="headline text-md-right">
            交易日：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
           <span>{{ model.days }}</span>
         </v-flex>
         <v-flex xs4 sm3 class="headline text-md-right">
            交易總回數：
         </v-flex>
         <v-flex xs2 sm3 class="headline text-md-left">
            <span>{{ model.tradeCount }}</span>
         </v-flex>
      </v-layout>
   </v-card>
</template>

<script>
   export default {
      name: 'ResearchReport',
      props: {
         model: {
            type: Object,
            default: null
         },
      }
   }
</script>