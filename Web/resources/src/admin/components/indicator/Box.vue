<template>
   <v-card v-if="model">
      <v-img @click.prevent="select" :src="imageUrl" class="white--text" height="200px">
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

import { UPLOAD_URL } from '@/common/config';

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
   computed:{
      coverMedia(){
         if(!this.model) return null;
         if(!this.model.medias.length) return null;
         return this.model.medias[0];
      },
      imageUrl(){
         if(!this.coverMedia) return '';
         return `${UPLOAD_URL}/${this.coverMedia.previewPath}`;
      }
   },
   methods: {
      select(){
         this.$emit('select', this.model.id);
      }
   }
}
</script>

