<template>
   <div class="container">

      <v-dialog v-model="editting" persistent max-width="500px">
         <strategy-edit v-if="editting" 
         :strategy="model.strategy" :selected_indicators="model.selectedIndicators"
         :indicators="model.indicators"
         @submit="submit" @cancel="cancelEdit"
         />
      </v-dialog>
      

      <a href="#" @click.prevent="edit">Edit</a>
      
   </div>
   
</template>

<script>
import { CREATE_STRATEGY, STORE_STRATEGY,
EDIT_STRATEGY, UPDATE_STRATEGY } from '../store/actions.type';

import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import StrategyEdit from '../components/strategies/Edit';
export default {
   name: 'TestView',
   components: {
		'strategy-edit' : StrategyEdit
	},
   data () {
      return {
         editting: false,
         model: null
      }
   },
   methods:{
      edit(){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(EDIT_STRATEGY, 1)
				.then(model => {
               this.model = model;
               model.indicators.forEach(indicator => {
                  let exist = model.selectedIndicators.includes(indicator.id);
                  if(!exist){
                     this.model.strategy.indicatorSettings.push({
                        indicatorId: indicator.id,
                        arg: 0,
                        order: 0
                     });
                  }
               });
					this.editting = true;
				})
				.catch(error => {
					Bus.$emit('errors');
				})


      },
      submit(selectedIndicators){
         let model = {
            strategy: this.model.strategy,
            selectedIndicators: selectedIndicators
         };

         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(UPDATE_STRATEGY, model)
         .then(() => {
            this.onSuccess();              
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveError(error);
         })
      },
      resolveError(error){       
         if(error){
            this.$store.commit(SET_ERROR, error);
         }else{
            Bus.$emit('errors');
         }
      },
      onSuccess(){
          Bus.$emit('success');
         this.model = null;  
         this.editting = false;
      },
      cancelEdit(){
         this.model = null;  
         this.editting = false;
      }
   }
}
</script>

