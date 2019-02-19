<template>
   <div class="container">
      <Bread />
      <form class="cn"  @submit.prevent="onSubmit">
         <v-card>
            <v-container fluid grid-list-lg>
               <v-layout row wrap>
                  <v-flex xs12 sm12 md6>
                     <p class="title ">
                        <span class="cn">訂閱方案</span>
                     </p>
                     <v-radio-group v-model="radios" :mandatory="false">
                        <v-radio color="primary" label="Radio 1" value="radio-1"></v-radio>
                        <v-radio color="primary" label="Radio 2" value="radio-2"></v-radio>
                     </v-radio-group>
                  </v-flex>
                  <v-flex xs12 sm12 md6>
                     <p class="title ">
                        <span class="cn">付款方式</span>
                        <v-radio-group v-model="radios" :mandatory="false">
                           <v-radio color="primary" label="Radio 1" value="radio-1"></v-radio>
                           <v-radio color="primary" label="Radio 2" value="radio-2"></v-radio>
                        </v-radio-group>
                     </p>
                  </v-flex>
                  <v-flex xs12>
                     <v-btn type="submit" large color="success">
                        <span class="cn" style="font-size:1.2rem">確認</span>
                     </v-btn>
                  </v-flex>
               </v-layout>
            </v-container>
         </v-card>
      </form>
   </div>
   
</template>

<script>
import Bread from '../components/TheBread';

export default {
   name: 'SubscribeCreateView',
   components: {
      Bread
   },
   data () {
      return {
          radios: 'radio-1'
      }
   },
   methods: {
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid){
					if(!this.strategy.stpl)  this.strategy.stpl = 0;
					if(!this.strategy.stpw)  this.strategy.stpw = 0;
					this.$emit('submit', this.selectedIndicators);
				} 
         });         
      },
   }
}
</script>

