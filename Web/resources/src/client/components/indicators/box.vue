<template>
   <v-card>
      <v-img  class="white--text"  height="200px" :src="model.img.src">
         <v-container fill-height fluid>
            <v-layout fill-height>
               <v-flex xs12 align-end flexbox>
                  <div class="headline ">
                     <span class="cn">{{ model.title }}</span>
                  </div>
                  
               </v-flex>
            </v-layout>
         </v-container>
      </v-img>
      <v-card-title>
         <div>
            <span class="cn">{{ model.description }}</span>
         </div>
      </v-card-title>
      <v-card-actions v-if="false">
         <v-btn flat color="orange">Share</v-btn>
         <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
   </v-card>
   
</template>

<script>
export default {
   name: 'IndicatorsBox',
   props: {
      model: {
         type: Object,
         default: null
      }
   },
   data () {
      return {
         
      }
   },
}
</script>

