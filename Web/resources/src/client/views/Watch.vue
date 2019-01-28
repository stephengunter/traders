<template>
   <div class="container">
      
      <Bread />
      <v-layout v-if="noSubscribe" row wrap>
         <v-flex xs12>
            <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
               <span class="cn" >
                  您還沒有完成訂閱或者不在訂閱期間內
               </span>  
            </v-alert>
         </v-flex>
      </v-layout>
      <v-card>
         <v-card-text>
            <v-layout row wrap>
               <v-flex xs12 sm10 md10 class="d-inline-flex">
                  <v-select 
                  :items="strategyOptions"  label="策略"
                  v-model="strategyId" @change="onStrategyChanged"
                  />
                  <v-menu :close-on-content-click="false"
                  v-model="showDatePicker"
                  :nudge-right="40"  full-width min-width="290px"
                  lazy  transition="scale-transition" offset-y
                  >
                     <v-text-field readonly
                     slot="activator" v-model="dateString" label="日期"
                     prepend-icon="mdi-canlendar"
                     />
                     <v-date-picker v-model="dateString" locale="zh-cn" @input="onDateChanged" />
                  </v-menu>
               </v-flex>
               <v-flex xs12 sm2 md2 class="text-sm-right">
                  <v-tooltip top content-class="top">
                     <v-btn @click.prevent="refresh" class="mr-1" slot="activator"  color="info" icon>
                        <v-icon>mdi-refresh</v-icon>
                     </v-btn>
                     <span class="cn">重新整理</span>
                  </v-tooltip>
                  <v-tooltip top content-class="top">
                     <v-btn @click.prevent="settings" class="mr-1" slot="activator"  color="success" icon>
                        <v-icon>mdi-settings</v-icon>
                     </v-btn>
                     <span class="cn">策略設定</span>
                  </v-tooltip>
                  <v-tooltip top content-class="top">
                     <v-btn @click.prevent="createStrategy" slot="activator"  color="primary" icon>
                        <v-icon>mdi-plus</v-icon>
                     </v-btn>
                     <span class="cn">新增策略</span>
                  </v-tooltip>
                  
               </v-flex>
            </v-layout>
            <!-- <v-layout row>
               <v-flex xs12>
                  <v-alert v-if="noData" :value="true"  color="warning"  icon="mdi-alert" outline  class="title">
                     <span class="cn" >
                        沒有這一天的資料
                     </span>  
                  </v-alert>
                  <charts-default v-show="!noData" ref="myChart" v-else />
               </v-flex>
            </v-layout> -->
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import Helper from '@/common/helper';
import { mapState } from 'vuex';

import { INIT_WATCH, FETCH_QUOTES } from '../store/actions.type';
import Bread from '../components/TheBread';
import ChartsDefault from '../components/charts/Default';

export default {
   name: 'WatchView',
   components: {
      Bread,
      'charts-default' : ChartsDefault
   },
   data () {
      return {
         noSubscribe: false,
         strategyId: 0,
         dateString: '',
         showDatePicker: false,
         noData: false
      }
   },
   computed: {
      ...mapState({
         key: state => state.watch.key,
         date: state => state.watch.date,
         strategy: state => state.watch.strategy,
         strategies: state => state.watch.strategies,
      }),
      strategyOptions(){
         return this.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      }
   },
   beforeMount(){
		this.init();
   },
   methods: {
		init(){
         this.$store.dispatch(INIT_WATCH)
            .then(() => {
               this.noSubscribe = false;
               this.dateString = Helper.toDateString(this.date);
               //this.fetchQuotes();       
            }).catch(error => {
               //let result = this.resolveError(error);
               //if(!result) Bus.$emit('errors', error);
              //  Bus.$emit('errors', error);
            })
      },
      resolveError(error){
         
         if(errorData){
            if(errorData.hasOwnProperty('subscribe')){
               this.noSubscribe = true;
               return true;
            }
         }
         return false; 
      },
      onStrategyChanged(){
         alert(this.strategyId);
      },
      onDateChanged(){
         this.showDatePicker = false;
         alert(this.date);
      },
      fetchQuotes(){
         let params = {
            user: this.model.key,
            date: Helper.dateNumber(this.date),
            strategy: this.strategyId  
         };
         this.$store.dispatch(FETCH_QUOTES, params)
            .then(result => {
               if(result){
                  this.$refs.myChart.init();      
               }else{
                  //沒有資料
                  this.noData = true;
               }        
            }).catch(error => {
               Bus.$emit('errors', error);
            })
      },
      refresh(){
         this.fetchQuotes();
      },
      settings(){
         
      },
      createStrategy(){
         this.$store.dispatch(FETCH_QUOTES, params)
            .then(result => {
               if(result){
                  this.$refs.myChart.init();      
               }else{
                  //沒有資料
                  this.noData = true;
               }        
            }).catch(error => {
               console.log(error);
               Bus.$emit('errors', error);
            })
      }
   }
}
</script>

