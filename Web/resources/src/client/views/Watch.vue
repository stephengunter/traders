<template>
   <div class="container">
      <Bread />
      <v-layout v-if="result < 0" row wrap>
         <v-flex xs12>
            <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
               <span>
                  {{ errMsg }}
               </span>  
            </v-alert>
         </v-flex>
      </v-layout>
      <v-card v-if="result > 0">
         <v-card-text>
            <Menu v-if="menu.ready" :responsive="responsive"
               :strategy_options="strategyOptions" :strategy_id="strategyId"
               :date_string="dateString"
               :min_date="minDate" :max_date="today"
               :empty_dates="emptyDates"
               @changed="onParamsChanged" @refresh="refresh"
               @edit-strategy="editStrategy" @create-strategy="createStrategy"
            />
            <v-layout row>
               <v-flex xs12 >
                  <v-alert :value="noData"  color="info"  icon="mdi-alert" outline  class="title">
                     <span>
                        沒有這一天的資料
                     </span>  
                  </v-alert>
                  <v-alert v-if="realtimeView" :value="realTime"  :color="realtimeView.color" class="title">
                     <span>
                        策略信號：{{ realtimeView.signalText }}
                     </span>
                     <span class="ml-3" >
                        即時部位：{{ realtimeView.position }}
                     </span>
                  </v-alert>
                  <charts-default v-show="!noData" ref="myChart"
                  :responsive="responsive" 
                  :strategy_model="strategyModel" :charts_model="chartsModel"
                  @resize="onResize" @init-completed="onChartsInitCompleted"
                  />
               </v-flex>
               
            </v-layout>
            <v-layout row>
               <v-flex xs12 >
                  <trade-list :result="trade.result" />
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
import { mapState, mapGetters } from 'vuex';
import moment from 'moment';
import Hub from '@/models/hub';
import { WATCH_URL } from '@/common/config';
import Helper from '@/common/helper';

import { INIT_WATCH, FETCH_QUOTES, INIT_STRATEGY, INIT_CHART,
   GET_REALTIME_QUOTES,
   CREATE_STRATEGY, STORE_STRATEGY,
   EDIT_STRATEGY, UPDATE_STRATEGY,
   DELETE_STRATEGY } from '../store/actions.type';


import { SET_RESPONSIVE, SET_WATCH_DATE, SET_STRATEGY, CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import Bread from '../components/TheBread';
import Menu from '../components/watch/Menu';
import ChartsDefault from '../components/charts/Default';
import StrategyEdit from '../components/strategies/Edit';
import TradeList from '../components/trades/List';

export default {
   name: 'WatchView',
   components: {
      Bread,
      Menu,
      'charts-default' : ChartsDefault,
      'charts-default' : ChartsDefault,
      'strategy-edit' : StrategyEdit,
      'trade-list' : TradeList
   },
   data(){
      return {
         today: moment().format('YYYY-MM-DD'),

         menu: {
            ready: false,
         },

         result: 0,
         errMsg: '',
         noData: false,

         settings:{
            action: '',
            model: null
         },

         trade: {
            result: null,
            position: null,
            signalPosition: null
         },

         hubModel: null
      }
   },
   computed: {
      ...mapState({
         responsive: state => state.app.responsive,
         key: state => state.auth.key,
         minDate: state => state.watch.minDate,
         emptyDates: state => state.watch.emptyDates,
         date: state => state.watch.date,
         strategy: state => state.strategy.strategy,
         strategies: state => state.strategy.strategies,
         strategyModel: state => state.strategy.strategyModel,
         chartsModel: state => state.charts.chartsModel,
         indicators: state => state.indicator.indicators,
         realTime: state => state.quote.realTime,
         dateQuotesList: state => state.quote.dateQuotesList,
         position: state => state.strategy.position,
         signalPosition: state => state.strategy.signalPosition
      }),
      ...mapGetters(['quoteLatestTime']),
      strategyOptions(){
         return this.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      },
      dateString(){
         return this.date ? Helper.toDateString(this.date) : '';
      },
      strategyId(){
         return this.strategy ? this.strategy.id : 0;
      },
      editting(){
         return this.settings.action != '';
      },
      realtimeView(){
         let position = this.trade.position;
         let signalPosition = this.trade.signalPosition;
         if(position && signalPosition){
            let signalText = '中立';
            let color = 'blue lighten-3';

            if(signalPosition.val > 0 ){
               signalText = '多';
               color = 'red';
            }else if(signalPosition.val < 0 ){
               signalText = '空';
               color = 'green';
            }

            return {
               signalText: signalText,
               position: position.val,
               color: color
            }
         }else return null;
         
      }
      
   },
   beforeMount(){
      this.init();
   },
   methods: {
		init(){
         this.menu.ready = false;

         this.settings.action = '';
         this.settings.model = null;

         if(this.hubModel){
            this.hubModel.disconnect();
         }else{
            this.hubModel = new Hub(WATCH_URL);
            this.hubModel.on('receive', this.getRealTimeQuotes);
         }

         this.$store.dispatch(INIT_WATCH)
            .then(() => {
               this.result = 1;
               this.menu.ready = true;
               this.fetchQuotes();  
            }).catch(error => {
               if(!error)  Bus.$emit('errors');
               else this.resolveInitError(error);
            })
      },
      resolveInitError(error){
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
      onParamsChanged(params){
         let strategy = this.strategies.find(item => item.id == params.strategy);
         if(strategy.id !== this.strategyId)  this.$store.commit(SET_STRATEGY, strategy);
         this.$store.commit(SET_WATCH_DATE, Helper.dateNumber(params.date));

         this.fetchQuotes();
      },
      onResize(){
         this.$store.commit(SET_RESPONSIVE, Helper.isSmallScreen());
      },
      fetchQuotes(){
         this.hubModel.disconnect();
         let params = {
            user: this.key,
            strategy: this.strategyId,
            date: this.date
         };
         this.$store.dispatch(FETCH_QUOTES, params)
         .then(model => {
            this.noData = model.noData;
            this.initStrategy();
         }).catch(error => {
            Bus.$emit('errors');
         })
      },
      initStrategy(){
         let indicatorIds = this.strategy.indicatorSettings.map(item => item.indicatorId);
         let indicators = this.indicators.filter(item => indicatorIds.includes(item.id));
         let date = this.date;
         let dateQuotesList = this.dateQuotesList;
         this.$store.dispatch(INIT_STRATEGY, { date, indicators, dateQuotesList })
         .then(() => {
            this.initCharts();            
         }).catch(error => {
            Bus.$emit('errors');
         })
      },
      initCharts(){
         this.$store.dispatch(INIT_CHART, this.strategyModel)
            .then(() => {
               this.$refs.myChart.init();
               this.loadTrades(); 
            }).catch(error => {
               Bus.$emit('errors');
            })
      },
      onChartsInitCompleted(){
         if(this.realTime) this.hubModel.connect();
      },
      loadTrades(){
         this.trade.result = this.strategyModel.tradeResult;
         this.trade.position = this.strategyModel.latestTradePosition;
         this.trade.signalPosition = this.strategyModel.latestSignalPosition;
      },
      getRealTimeQuotes(){
         let params = {
            user: this.key,
            time: this.quoteLatestTime  
         };
         this.$store.dispatch(GET_REALTIME_QUOTES, params)
            .then(quotes => {
               if(quotes.length) this.updateRealTimeQuotes(quotes);               
            }).catch(error => {
               Bus.$emit('errors');
            })
      },
      updateRealTimeQuotes(quotes){
         this.chartsModel.updateRealTimeQuotes(quotes)
            .then(() => {
               this.$refs.myChart.update();
               this.loadTrades();
            }).catch(error => {
               Bus.$emit('errors');
            })
      },
      refresh(){
         this.fetchQuotes();
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
         this.$store.dispatch(action, model)
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
         this.$store.dispatch(DELETE_STRATEGY, id)
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

