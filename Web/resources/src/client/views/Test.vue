<template>
   <div class="container">
      

      <v-dialog v-model="editting" persistent max-width="500px">
         <strategy-edit v-if="editting" 
               :strategy="settings.model.strategy"
               :selected_indicators="settings.model.selectedIndicators"
               :indicators="settings.model.indicators" 
               />
      </v-dialog>
      

      <a href="#" @click="test">Edit</a>
      
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
         settings:{
            action: '',
            model: null
         },
      }
   },
   methods:{
      test(){
         
         this.createStrategy();
      },
      createStrategy(){
         
			this.$store.dispatch(CREATE_STRATEGY)
				.then(model => {
               this.settings.model = model;
               this.settings.action = 'create';
                this.editting = true;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
      },
   }
}
</script>

