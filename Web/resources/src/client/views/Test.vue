<template>
   <div class="container">



      <v-dialog v-model="editting" persistent max-width="500px">
         <strategy-edit v-if="editting" 
         :strategy="model.strategy"
         :selected_indicators="model.selectedIndicators"
         :indicators="model.indicators"
         @submit="submit" @cancel="cancelEdit"
         @remove="remove"
         />
      </v-dialog>
      

      <a href="#" @click.prevent="editStrategy(3)">Edit</a>
      
   </div>
   
</template>

<script>
import { CREATE_STRATEGY, STORE_STRATEGY,
EDIT_STRATEGY, UPDATE_STRATEGY, DELETE_STRATEGY } from '../store/actions.type';

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
      createStrategy(){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(CREATE_STRATEGY)
				.then(model => {
               this.model = model;
					this.editting = true;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
      },
      editStrategy(id){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(EDIT_STRATEGY, id)
				.then(model => {
               this.model = model;
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

         model.strategy.indicatorSettings.forEach((item, index) => {
            item.order = index;
         });

         let action = STORE_STRATEGY;
         if(model.strategy.id){
            action = UPDATE_STRATEGY
         }

         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(action, model)
         .then(id => {
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
      },
      remove(){
         let id = this.model.strategy.id;
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(DELETE_STRATEGY, id)
         .then(() => {
            this.model = null;  
            this.editting = false;             
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveError(error);
         })
      }
   }
}
</script>

