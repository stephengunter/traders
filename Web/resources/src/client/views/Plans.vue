<template>
   <div class="container">
      <Bread />
      <v-card>
         <v-container fluid grid-list-lg>
            <v-layout row wrap>
               <v-flex xs12 sm12 md4>
                  <ul class="headline" style="list-style-type: none; color:#ee4d2d">
                     <li class="mb-3" v-for="item in plans" :key="item.id">
                        <span class="cn" v-text="monthString(item)"></span>
                        <span class="money ml-1">${{ item.money }}</span> 
                     </li>
                  </ul>
               </v-flex>
               <v-flex xs12 sm12 md6>
                  <ul style="list-style-type: none;">
                     <li v-for="(item, index) in descriptions" :key="index" class="mb-1" >
                        <v-icon class="mr-1" color="success">mdi-check</v-icon>
                        <span class="cn" style="font-size:1.2rem">{{ item }}</span>                     
                     </li>
                  </ul>
               </v-flex>
               <v-flex xs12 sm12 md2>
                  <v-btn to="/subscribes/create" large color="info">
                     <span class="cn" style="font-size:1.2rem">我要訂閱</span>
                  </v-btn>
               </v-flex>
            </v-layout>
         </v-container>
      </v-card>
       
   </div>
   
</template>

<script>
import { mapState } from 'vuex';
import Helper from '@/common/helper';
import { FETCH_PLANS } from '../store/actions.type';
import Bread from '../components/TheBread';

export default {
   name: 'PlansView',
   components: {
      Bread
   },
   data () {
      return {
         descriptions:[
            '可自訂多個策略',
            '可選用所有指標',
            '指標參數可調整',
            '歷史資料回測功能',
         ]
      }
   },
   computed: {
      ...mapState({
         pageList: state => state.plans.pageList
      }),
      plans(){
         if(!this.pageList) return [];
         return this.pageList.viewList;
      }
   },
   beforeMount(){
      this.fetchData();
   },
   methods: {
      fetchData(){
			this.$store.dispatch(FETCH_PLANS)
				.catch(error => {
					Bus.$emit('errors');
				})
      },
      monthString(item){
         let month = Helper.chineseNumber(item.month);
         return `${month}個月`;
      }
   }
}
</script>
