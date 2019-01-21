<template>
   <div class="container">
      <Bread />
      <v-icon>mdi-stars</v-icon>
      <v-card>
         <v-card-text>
            <v-layout row>
               <v-flex xs12 sm6>
                  <v-select
                     :items="strategies" 
                     label="策略"
                  />
               </v-flex>
               <v-flex xs12 sm6 class="text-lg-right">
                  <v-tooltip top content-class="top">
                     <v-btn class="mr-2" slot="activator"  color="info" icon>
                        <v-icon>mdi-refresh</v-icon>
                     </v-btn>
                     <span class="cn">重新整理</span>
                  </v-tooltip>
                  <v-tooltip top content-class="top">
                     <v-btn class="mr-2" slot="activator"  color="success" icon>
                        <v-icon>mdi-settings</v-icon>
                     </v-btn>
                     <span class="cn">設定</span>
                  </v-tooltip>
               </v-flex>
            </v-layout>
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import Bread from '../components/TheBread';
import ChartsDefault from '../components/charts/Default';

export default {
   name: 'WatchView',
   components: {
      Bread,
      'charts-default' : ChartsDefault
   },
   data () {
      return {
         strategies: []
      }
   },
}
</script>

