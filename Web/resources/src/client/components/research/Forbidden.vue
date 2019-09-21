<template>
   <v-layout row wrap>
      <v-flex xs12>
         <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
            <span>
               {{ errMsg }}
            </span>  
         </v-alert>
      </v-flex>
   </v-layout>
</template>

<script>
   export default {
      name: 'ResearchForbidden',
      props:{
         msg: {
            type: String,
            default: ''
         }
      }
   }
</script>