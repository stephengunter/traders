<template>
   <div class="container">
      <Bread />
      <v-card>
         <v-container fluid grid-list-lg>
            <v-layout row wrap>
               <v-flex xs12 v-for="(item,index) in pageList.viewList" :key="index">
                  <indicator-box :model="item" />
               </v-flex>
            </v-layout>
         </v-container>
      </v-card>
   </div>
   
</template>

<script>

import Bread from '../components/TheBread';
import IndicatorBox from '../components/indicators/box';

import { FETCH_INDICATORS } from '../store/actions.type';

export default {
   name: 'IndicatorsView',
   components: {
      Bread,
      'indicator-box' : IndicatorBox
   },
   data () {
      return {
         pageList: {
				viewList:[]
			},
      }
   },
   beforeMount(){
      this.fetchData();
   },
   methods: {
      fetchData(){
			this.$store.dispatch(FETCH_INDICATORS)
				.then(model => {
					this.pageList = model;
				})
				.catch(error => {
					Bus.$emit('errors');
				})
		}
   }
}
</script>

