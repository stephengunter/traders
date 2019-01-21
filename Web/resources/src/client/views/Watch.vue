<template>
   <div class="container">
      <Bread />
      <v-icon>mdi-stars</v-icon>
      <v-card>
         <v-card-text>
            <v-layout row>
               <v-flex xs12 sm6 md6>
                  jjj
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
         
      }
   },
}
</script>

