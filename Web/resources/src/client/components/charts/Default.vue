<template>
   <div id="chart-watch" :style="`width:100%; height:${this.height}px`">
         
   </div>
  
</template>

<script>
import echarts from 'echarts';

import Hub from '@/models/hub';
import Strategy from '@/models/strategy';
import Charts from '@/models/chart';

import { WATCH_URL } from '@/common/config';

import { mapState, mapGetters } from 'vuex';
import { GET_QUOTES } from '../../store/actions.type';
import { SET_LOADING, SET_TRADES, SET_POSITION, SET_SIGNAL_POSITION,
SET_REALTIME_POSITION, ADD_CHART_QUOTES } from '../../store/mutations.type';

export default {
   name: 'ChartDefault',
   props: {
      strategy: {
         type: Object,
         default: null
      }
   },
   data () {
		return {
         chart: null,
         height: 500,

         hubModel: null,
         strategyModel: null,
         chartModel: null,

         connection: null,
         connState:{
            connecting: 0,
            connected: 1,
            reconnecting: 2,
            disconnected: 4
         }

		}
   },
   watch: {
      responsive (val) {
         this.resize();
      }
   },
	computed: {
      ...mapState({
         key: state => state.watch.key,
         indicators: state => state.chart.indicators,
         quotes: state => state.chart.quotes,
         realTime: state => state.chart.realTime         
      }),
      latestTime(){
         if(this.quotes.length){
            return this.quotes[this.quotes.length - 1].time;
         }else return 0;
      }
   },
   beforeMount(){
      this.hubModel = new Hub(WATCH_URL);
      this.hubModel.on('receive', this.getQuote);
   },
   mounted(){
      window.addEventListener('resize', this.resize)
	},
	beforeDestroy () {
      window.removeEventListener('resize', this.resize)
   },
   methods: {
      init(){
         this.hubModel.disconnect();

         this.$store.commit(SET_LOADING, true);

         this.height = 400 + (this.indicators.length * 100);

         this.strategyModel = new Strategy(this.strategy, this.indicators, this.quotes); 
         this.chartModel = new Charts(this.strategyModel, this.quotes);
         
         this.chartModel.init()
            .then(options => {
               this.chart = echarts.init(document.getElementById('chart-watch'));                     
               this.chart.setOption(options);

               this.resize();
               this.$store.commit(SET_LOADING, false);

               this.loadTrades();
            }).catch(error => {
               this.resolveError(error);
            })

        
         if(this.realTime){
            this.hubModel.connect();
         }
         
      },
      loadTrades(){
         this.$store.commit(SET_TRADES, this.chartModel.resolveTrades());
         this.$store.commit(SET_POSITION, this.strategyModel.getLatestTradePosition());
         this.$store.commit(SET_SIGNAL_POSITION, this.strategyModel.getLatestSignalPosition());
      },
      resize(){
         if(this.chart){
            this.chart.resize();
            this.$emit('resize');
         }
      },
      getQuote(){
         let params = {
            user: this.key,
            time: this.latestTime  
         };
        
         this.$store.dispatch(GET_QUOTES, params)
            .then(quotes => {
               if(quotes.length){
                  this.chartModel.updateRealTimeQuotes(quotes)
                  .then(options => {
                     this.chart.setOption(options);
                     this.loadTrades();
                  }).catch(error => {
                     this.resolveError(error);
                  })
               }
               
            }).catch(error => {
               this.resolveError(error);
            })
      },
      resolveError(error){       
         if(!error)  Bus.$emit('errors');
         else console.log(error);
      }
   }
}
</script>

