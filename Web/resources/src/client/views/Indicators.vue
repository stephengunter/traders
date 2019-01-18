<template>
   <div class="container">
      <Bread />
      <v-card>
         <v-container fluid grid-list-lg>
            <v-layout row wrap>
               <v-flex xs12 v-for="(item,index) in indicators" :key="index">
                  <indicator-box :model="item">
                  </indicator-box>
               </v-flex>

            </v-layout>
         </v-container>
      </v-card>
   </div>
   
</template>

<script>

import Bread from '../components/TheBread';
import IndicatorBox from '../components/indicators/box';

export default {
   name: 'IndicatorsView',
   components: {
      Bread,
      'indicator-box' : IndicatorBox
   },
   data () {
      return {
         indicators: [{
            title: '指標',
            description: '說明',
            img: { src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' }
         },{
            title: '指標',
            description: '說明',
            img: { src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' }
         }]
      }
   },
}
</script>

