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
               <v-flex xs10 class="d-inline-flex">
                  <v-select style="width:180px"
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
               <v-flex v-if="responsive" xs2 class="text-sm-right">
                  <v-menu offset-y class="hidden-md-and-up">
                     <v-toolbar-side-icon  slot="activator" />
                     <v-list>
                        <v-list-tile @click.prevent="refresh" >
                           <v-list-tile-action>
                               <v-btn class="mr-1" slot="activator"  color="info" icon>
                                 <v-icon>mdi-refresh</v-icon>
                              </v-btn>
                           </v-list-tile-action>
                           <v-list-tile-content>
                              <v-list-tile-title class="cn">重新整理</v-list-tile-title>
                           </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile @click.prevent="editStrategy" >
                           <v-list-tile-action>
                              <v-btn class="mr-1" slot="activator"  color="success" icon>
                                 <v-icon>mdi-settings</v-icon>
                              </v-btn>
                           </v-list-tile-action>
                           <v-list-tile-content>
                              <v-list-tile-title class="cn">策略設定</v-list-tile-title>
                           </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile @click.prevent="createStrategy" >
                           <v-list-tile-action>
                              <v-btn slot="activator" color="primary" icon>
                                 <v-icon>mdi-plus</v-icon>
                              </v-btn>
                           </v-list-tile-action>
                           <v-list-tile-content>
                              <v-list-tile-title class="cn">新增策略</v-list-tile-title>
                           </v-list-tile-content>
                        </v-list-tile>
                     </v-list>
                  </v-menu>
               </v-flex>
               <v-flex v-else xs2 class="text-sm-right">
                  <v-tooltip top content-class="top">
                     <v-btn @click.prevent="refresh" class="mr-1" slot="activator"  color="info" icon>
                        <v-icon>mdi-refresh</v-icon>
                     </v-btn>
                     <span class="cn">重新整理</span>
                  </v-tooltip>
                  <v-tooltip top content-class="top">
                     <v-btn @click.prevent="editStrategy" class="mr-1" slot="activator"  color="success" icon>
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
               <v-flex xs12 >
                  <v-alert :value="noData"  color="warning"  icon="mdi-alert" outline  class="title">
                     <span class="cn" >
                        沒有這一天的資料
                     </span>  
                  </v-alert>
                  <v-alert v-if="position" :value="realTime"  :color="position.color" class="title">
                     <span class="cn" >
                        即時部位：{{ position.text }}
                     </span>  
                  </v-alert>
                  <charts-default v-show="!noData" ref="myChart" 
                  :strategy="strategy"
                  @resize="onResize"
                  />
               </v-flex>
               
            </v-layout>
            <v-layout row>
               <v-flex xs12 >
                  <trade-list />
               </v-flex>
            </v-layout>

            <v-dialog v-model="editting" persistent max-width="500px">
               <strategy-edit v-if="editting" 
               :strategy="settings.model.strategy"
               :selected_indicators="settings.model.selectedIndicators"
               :indicators="settings.model.indicators"               
               @submit="submitStrategy" @cancel="cancelEditStrategy"
               @remove="removeStrategy"
               />
            </v-dialog>
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import Helper from '@/common/helper';
import { mapState } from 'vuex';
import { INIT_WATCH, FETCH_QUOTES,
   CREATE_STRATEGY, STORE_STRATEGY,
   EDIT_STRATEGY, UPDATE_STRATEGY,
   DELETE_STRATEGY } from '../store/actions.type';


import { SET_RESPONSIVE, SET_DATE, SET_STRATEGY, CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import Bread from '../components/TheBread';
import ChartsDefault from '../components/charts/Default';
import StrategyEdit from '../components/strategies/Edit';
import TradeList from '../components/trades/List';

export default {
   name: 'WatchView',
   components: {
      Bread,
      'charts-default' : ChartsDefault,
      'strategy-edit' : StrategyEdit,
      'trade-list' : TradeList
   },
   data () {
      return {
         strategyId: 0,
         dateString: '',
         showDatePicker: false,

         result: 0,
         errMsg: '',
         noData: false,

         settings:{
            action: '',
            model: null
         },

         trades:[],
      }
   },
   computed: {
      ...mapState({
         responsive: state => state.app.responsive,
         key: state => state.watch.key,
         date: state => state.watch.date,
         strategy: state => state.watch.strategy,
         strategies: state => state.watch.strategies,
         realTime: state => state.chart.realTime,
         position: state => state.chart.position
      }),
      strategyOptions(){
         return this.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      },
      editting(){
         return this.settings.action != '';
      }
      
   },
   beforeMount(){
      this.init();
   },
   methods: {
		init(){
         this.settings.action = '';
         this.settings.model = null;

         this.$store.dispatch(INIT_WATCH)
            .then(() => {
               this.result = 1;
               this.dateString = Helper.toDateString(this.date);
               this.strategyId = this.strategies[0].id;

               this.fetchQuotes();       
            }).catch(error => {
               if(!error)  Bus.$emit('errors');
               else this.resolveWatchError(error);
            })
      },
      resolveWatchError(error){
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
      onResize(){
         this.$store.commit(SET_RESPONSIVE, Helper.isSmallScreen());
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
               else this.resolveWatchError(error);
            })
      },
      refresh(){
         this.fetchQuotes();
      },
      onTrades(trades){
         this.trades = trades;
      },
      cancelEditStrategy(){
         this.settings.model = null;
         this.settings.action = '';
      },
      editStrategy(){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(EDIT_STRATEGY, this.strategyId)
				.then(model => {
               this.settings.model = model;
               this.settings.action = 'edit';
				})
				.catch(error => {
					Bus.$emit('errors');
				})
      },
      createStrategy(){
         this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(CREATE_STRATEGY)
				.then(model => {
               this.settings.model = model;
               this.settings.action = 'create';
				})
				.catch(error => {
					Bus.$emit('errors');
				})
      },
      submitStrategy(selectedIndicators){
         let model = {
            strategy: this.settings.model.strategy,
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
            this.onSettingsUpdated(true);              
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveSettingsError(error);
         })
      },
      removeStrategy(){
         let id = this.strategyId;
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(DELETE_STRATEGY, id)
         .then(() => {
            this.onSettingsUpdated();           
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveSettingsError(error);
         })
      },
      resolveSettingsError(error){       
         if(error){
            this.$store.commit(SET_ERROR, error);
         }else{
            Bus.$emit('errors');
         }
      },
      onSettingsUpdated(showMsg){
         this.init();

         if(showMsg) Bus.$emit('success');
      }
   }
}
</script>

