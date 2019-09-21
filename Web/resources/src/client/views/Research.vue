<template>
   <div class="container">
      <Bread />
      <Forbidden v-if="result < 0" :msg="errMsg" />
      <v-card>
         <v-card-text>
            <Menu v-if="menu.ready" :responsive="responsive"
               :strategy_options="strategyOptions" :strategy_id="strategyId"
               :seleted_dates = "seletedDates"
               :min_date="minDate" :max_date="maxDate"
               :empty_dates="emptyDates"
               @changed="onParamsChanged" @submit="submit"
               @edit-strategy="editStrategy" @create-strategy="createStrategy"
            />
            <div v-if="report.ready">
               <h1>回測結果</h1>
               <Report :trade_results="tradeResults" />
            </div>
            <v-layout v-if="seletedResult" row>
               <v-flex sm12>
                  <days-table v-if="tradeResults.length" 
                     :trade_results="[seletedResult]"
                     @details="onDetails"
                  />
               </v-flex>
            </v-layout>
            <v-layout row>
               <v-flex xs12 >
                  <charts-default  ref="myChart" v-show="chart.ready"
                     :responsive="responsive" 
                     :strategy_model="strategyModel" :charts_model="chartsModel"
                     @resize="onResize" @init-completed="onChartsInitCompleted"
                  />
               </v-flex>
            </v-layout>
            <v-layout v-if="false" row>
               <v-flex xs12 >
                  <trade-list :result="seletedResult" />
               </v-flex>
            </v-layout>


            <v-layout row v-if="unSeletedResults.length">
               <v-flex sm12>
                  <days-table
                     :trade_results="unSeletedResults"
                     @details="onDetails"
                  />
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
import Helper from '@/common/helper';

import { INIT_RESEARCH, RESOLVE_RESEARCH, INIT_STRATEGY, INIT_CHART,
   GET_REALTIME_QUOTES,
   CREATE_STRATEGY, STORE_STRATEGY,
   EDIT_STRATEGY, UPDATE_STRATEGY,
   DELETE_STRATEGY } from '../store/actions.type';


import { SET_RESPONSIVE, SET_RESEARCH_DATE, 
   SET_STRATEGY, CLEAR_ERROR, SET_ERROR 
} from '../store/mutations.type';

import Bread from '../components/TheBread';
import Menu from '../components/research/Menu';
import Report from '../components/research/Report';
import ChartsDefault from '../components/charts/Default';
import StrategyEdit from '../components/strategies/Edit';
import DaysTable from '../components/research/Days';
import TradeList from '../components/trades/List';

export default {
   name: 'ResearchView',
   components: {
      Bread,
      Menu,
      Report,
      'days-table' : DaysTable,
      'charts-default' : ChartsDefault,
      'strategy-edit' : StrategyEdit,
      'trade-list' : TradeList
   },
   data(){
      return {
         today: moment().format('YYYY-MM-DD'),
         seletedDates: [],

         menu: {
            ready: false,
         },

         model: {
            strategy: 0,
            beginDate: 0,
            endDate: 0
         },

         result: 0,
         errMsg: '',
         noData: false,

         tradeResults: [],

         details: {
            date: 0
         },

         seletedResult: null,

         chart:{
            ready: false
         },

         report: {
            ready: false
         },

         settings:{
            action: '',
            model: null
         },

         

         trade: {
            result: null
         }
      }
   },
   computed: {
      ...mapState({
         responsive: state => state.app.responsive,
         key: state => state.auth.key,
         minDate: state => state.research.minDate,
         maxDate: state => state.research.maxDate,
         emptyDates: state => state.research.emptyDates,
         strategy: state => state.strategy.strategy,
         strategies: state => state.strategy.strategies,
         strategyModel: state => state.strategy.strategyModel,
         chartsModel: state => state.charts.chartsModel,
         indicators: state => state.indicator.indicators,
         dateQuotesList: state => state.quote.dateQuotesList
      }),
      strategyOptions(){
         return this.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      },
      strategyId(){
         return this.strategy ? this.strategy.id : 0;
      },
      unSeletedResults(){
         if(this.tradeResults && this.tradeResults.length){
            return this.tradeResults.filter(item => item.date != this.details.date);
         }
         else return [];
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
         this.menu.ready = false;

         this.settings.action = '';
         this.settings.model = null;

         this.tradeResults = [];
         this.report.ready = false;

         this.details.date = 0;
         this.seletedResult = null;

         this.chart.ready = false;

         this.$store.dispatch(INIT_RESEARCH)
            .then(() => {
               this.seletedDates = [
                  moment(this.maxDate).add(-7, 'days').format('YYYY-MM-DD'),
                  this.maxDate
               ];
               this.result = 1;
               this.menu.ready = true;
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
      onParamsChanged(model){
         this.model = { ...model };

         let strategy = this.strategies.find(item => item.id == model.strategy);
         if(strategy.id !== this.strategyId)  this.$store.commit(SET_STRATEGY, strategy);
      },
      onResize(){
         this.$store.commit(SET_RESPONSIVE, Helper.isSmallScreen());
      },
      submit(model){
         this.onParamsChanged(model);
         this.$store.dispatch(RESOLVE_RESEARCH, model)
            .then(() => {
               this.initStrategy();
            }).catch(error => {
               Bus.$emit('errors');
            })
      },
      initStrategy(){
         let indicatorIds = this.strategy.indicatorSettings.map(item => item.indicatorId);
         let indicators = this.indicators.filter(item => indicatorIds.includes(item.id));
         let dateQuotesList = this.dateQuotesList;
         let date = dateQuotesList[0].date;
         this.$store.dispatch(INIT_STRATEGY, { date, indicators, dateQuotesList })
         .then(() => {
            this.tradeResults.push(this.strategyModel.tradeResult);
            let dates = dateQuotesList.map(item => item.date);
            dates.splice(0,1);
            this.calculate(dates);           
         }).catch(error => {
            Bus.$emit('errors');
         })
      },
      calculate(dates){
         let date = dates.shift();
         this.strategyModel.init(date);
         this.strategyModel.calculate()
         .then(() => {
            this.tradeResults.push(this.strategyModel.tradeResult);

            if(dates.length) this.calculate(dates);
            else this.onCalculateDone()
         })
         .catch(error => {  
            Bus.$emit('errors');
         })
      },
      onCalculateDone(){
         this.report.ready = true;
      },
      onDetails(date){
         this.details.date = date;
         this.strategyModel.init(date);
         this.strategyModel.calculate()
         .then(() => {
            let tradeResult = this.strategyModel.tradeResult;
            this.seletedResult = tradeResult;

            let index = this.tradeResults.findIndex(item => item.date === date);
            this.tradeResults.splice(index, 1, this.strategyModel.tradeResult);
            setTimeout(() => {
               this.initCharts();
            },500);   
         })
         .catch(error => {  
            Bus.$emit('errors');
         })
      },
      initCharts(){
         this.$store.dispatch(INIT_CHART, this.strategyModel)
            .then(() => {
               this.$refs.myChart.init();
            }).catch(error => {
               Bus.$emit('errors');
            })
      },
      onChartsInitCompleted(){
         this.chart.ready = true;
         
         setTimeout(() => {
            this.$refs.myChart.resize();
         },500);
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

