<template>
   <div class="container">
      
      <Bread />
      <v-layout v-if="result < 0" row wrap>
         <v-flex xs12>
            <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
               <span class="cn" >
                  {{ errMsg }}
               </span>  
            </v-alert>
         </v-flex>
      </v-layout>
      <v-card v-if="result > 0">
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
            <v-layout row>
               <v-flex xs12>
                  <v-alert v-if="noData" :value="true"  color="warning"  icon="mdi-alert" outline  class="title">
                     <span class="cn" >
                        沒有這一天的資料
                     </span>  
                  </v-alert>
                  <charts-default v-show="!noData" ref="myChart" 
                  :strategy="strategy" 
                  />
               </v-flex>
               
            </v-layout>
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import Helper from '@/common/helper';
import { mapState } from 'vuex';

import { INIT_WATCH, FETCH_QUOTES } from '../store/actions.type';
import { SET_DATE, SET_STRATEGY } from '../store/mutations.type';

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
         strategyId: 0,
         dateString: '',
         showDatePicker: false,

         result:0,
         errMsg: '',
         noData: false,

         chart: {
            width: 940,
            height: 600
         }
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
               this.result = 1;
               this.dateString = Helper.toDateString(this.date);
               this.strategyId = this.strategies[0].id;

               this.fetchQuotes();       
            }).catch(error => {
               if(!error)  Bus.$emit('errors');
               else this.resolveError(error);
            })
      },
      resolveError(error){
         if(error.hasOwnProperty('subscribe')){
            this.errMsg = '您還沒有完成訂閱或者不在訂閱期間內';
            this.result = -1;
         }else if(error.hasOwnProperty('user')){
            this.errMsg = '權限不足或重複登入';
            this.result = -1;
         }else{
            Bus.$emit('errors');
         }

         
      },
      onStrategyChanged(val){
         let strategy = this.strategies.find(item => item.id == val);
         if(strategy.id !== this.strategy.id){
            this.$store.commit(SET_STRATEGY, strategy);
            this.fetchQuotes();
         }
        
      },
      onDateChanged(){
         this.showDatePicker = false;
         this.$store.commit(SET_DATE, Helper.dateNumber(this.dateString));
         this.fetchQuotes();
      },
      fetchQuotes(){
         let params = {
            user: this.key,
            date: this.date,
            strategy: this.strategy.id  
         };
         this.$store.dispatch(FETCH_QUOTES, params)
            .then(result => {
               if(result){
                  this.noData = false;
                  this.$refs.myChart.init();      
               }else{
                  //沒有資料
                  this.noData = true;
               }        
            }).catch(error => {
               if(!error)  Bus.$emit('errors');
               else this.resolveError(error);
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

