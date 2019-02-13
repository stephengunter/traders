<template>
   <v-card>
      <v-img  class="white--text" height="200px" src="https://localhost:44300/uploads/stockmarket.jpg">
         <v-container fill-height fluid>
            <v-layout fill-height>
               <v-flex xs12 align-end flexbox>
                  <div class="headline ">
                     <span class="cn">{{ model.name }}</span>
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

