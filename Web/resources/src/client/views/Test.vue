<template>
   <div class="container">

      <ul>
         <li v-for="(item, index) in trades" :key="index">
            {{ item.index }} , {{ item.val }}
         </li>
      </ul>

      <v-dialog v-model="editting" persistent max-width="500px">
         <strategy-edit v-if="editting" 
         :strategy="model.strategy"
         :selected_indicators="model.selectedIndicators"
         :indicators="model.indicators"
         @submit="submit" @cancel="cancelEdit"
         @remove="remove"
         />
      </v-dialog>
      

      <a href="#" @click.prevent="test">Edit</a>
      
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
         trades: [{
            index: 20,
            val : 1
         },{
            index: 120,
            val : 0
         }]
      }
   },
   methods:{
      test(){
         let trade = {
            index: 120,
            val : -1
         };
         let existIndex = this.trades.findIndex(item => item.index === trade.index);
         if(existIndex < 0){
            this.trades.push(trade);
         }else{
            this.trades.splice(existIndex, 1);
           // this.trades.splice(existIndex, 1, trade);
         }
      }
   }
}
</script>

