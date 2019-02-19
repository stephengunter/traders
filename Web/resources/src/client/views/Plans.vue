<template>
   <div class="container">
      <Bread />
      <v-card>
         <v-container fluid grid-list-lg>
            <v-layout row wrap>
               <v-flex xs12 sm12 md4>
                  <ul class="headline" style="list-style-type: none; color:#ee4d2d">
                     <li class="mb-3" >
                        <span class="cn">一個月</span>
                        <span class="money ml-1">$1200</span> 
                     </li>
                     <li >
                        <span class="cn">三個月</span>
                        <span class="money ml-1">$3500</span> 
                     </li>
                  </ul>
               </v-flex>
               <v-flex xs12 sm12 md6>
                  <ul class="mb-0" style="list-style-type: none;">
                     <li>
                        <v-icon class="mr-1" color="success">mdi-check</v-icon>
                        <span class="cn">伺服器端程式開發 ASP.NET Core MVC, PHP, node.js</span>                     
                     </li>
                     <li>
                        <v-icon class="mr-1" color="success">mdi-check</v-icon>
                        <span class="cn">伺服器端程式開發 ASP.NET Core MVC, PHP, node.js</span>                     
                     </li>
                  </ul>
               </v-flex>
               <v-flex xs12 sm12 md2>
                  <v-btn large color="info">
                     <span class="cn" style="font-size:1.2rem">我要訂閱</span>
                  </v-btn>
               </v-flex>
            </v-layout>
         </v-container>
      </v-card>
       
   </div>
   
</template>

<script>

import Bread from '../components/TheBread';

import { FETCH_PLANS } from '../store/actions.type';

export default {
   name: 'PlansView',
   components: {
      Bread
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
			this.$store.dispatch(FETCH_PLANS)
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

