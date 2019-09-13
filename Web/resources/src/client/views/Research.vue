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
      <v-card>
         <v-card-text>
            <Menu :strategy_options="strategyOptions" :strategy_id="strategyId"
               :min_date="minDate" :max_date="today" :empty_dates="emptyDates"
            />
            
         </v-card-text>
      </v-card>
   </div>
   
</template>

<script>
import moment from 'moment';
import Helper from '@/common/helper';
import { mapState } from 'vuex';
import { INIT_WATCH, FETCH_QUOTES,
   CREATE_STRATEGY, STORE_STRATEGY,
   EDIT_STRATEGY, UPDATE_STRATEGY,
   DELETE_STRATEGY } from '../store/actions.type';


import { SET_RESPONSIVE, SET_DATE, SET_STRATEGY, CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';

import Bread from '../components/TheBread';
import Menu from '../components/research/Menu';
import ChartsDefault from '../components/charts/Default';
import StrategyEdit from '../components/strategies/Edit';
import TradeList from '../components/trades/List';

export default {
   name: 'WatchView',
   components: {
      Bread,
      Menu,
      'charts-default' : ChartsDefault,
      'strategy-edit' : StrategyEdit,
      'trade-list' : TradeList
   },
   data () {
      return {
         minDate: '2019-08-20',
         today: moment().format('YYYY-MM-DD'),
         emptyDates: ['2019-08-28', '2019-08-29', '2019-08-30'],
         strategyId: 0,
         dateString: '',
         showDatePicker: false,

         result: 0,
         errMsg: '',
         noData: false,

         settings:{
            action: '',
            model: null
         }
         
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
         position: state => state.strategy.position,
         signalPosition: state => state.strategy.signalPosition
      }),
      strategyOptions(){
         return this.strategies.map(item => ({
               value: item.id, text: item.name 
             }))
      },
      editting(){
         return this.settings.action != '';
      },
      realtimeView(){
         if(this.position && this.signalPosition){
            let signalText = '中立';
            let color = 'blue lighten-3';

            if(this.signalPosition.val > 0 ){
               signalText = '多';
               color = 'red';
            }else if(this.signalPosition.val < 0 ){
               signalText = '空';
               color = 'green';
            }

            return {
               signalText: signalText,
               position: this.position.val,
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
         this.settings.action = '';
         this.settings.model = null;

         this.$store.dispatch(INIT_WATCH)
            .then(() => {
               this.result = 1;
               this.dateString = Helper.toDateString(this.date);
               this.strategyId = this.strategies[0].id;

               //this.fetchQuotes();   
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
      allowedDates(val){
         return this.emptyDates.indexOf(val) < 0
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
               }else{
                  //沒有資料
                  this.noData = true;
               }
               this.$refs.myChart.init();  
            }).catch(error => {
               console.log('error',error);
               if(!error)  Bus.$emit('errors');
               else this.resolveWatchError(error);
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

