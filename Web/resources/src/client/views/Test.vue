<template>
   <div class="container">

      <v-dialog v-model="editting" persistent max-width="500px">
         <strategy-edit v-if="editting" :model="model" 
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
					this.editting = true;
				})
				.catch(error => {
					Bus.$emit('errors');
				})


      },
      submit(){

      },
      cancelEdit(){
         this.model = null;  
         this.editting = false;
      }
   }
}
</script>

