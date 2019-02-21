<template>
   <div id="chart-watch" :style="`width:100%; height:${this.height}px`">
         
   </div>
  
</template>

<script>
import echarts from 'echarts';
import * as signalR from '@aspnet/signalr';

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
   mounted(){
      window.addEventListener('resize', this.resize)
	},
	beforeDestroy () {
      window.removeEventListener('resize', this.resize)
   },
   methods: {
      init(){
         this.disconnectHub();
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
            this.connectHub();
         }else{
            this.disconnectHub();
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
      registerHub(){         
        
         this.connection = new signalR.HubConnectionBuilder().withUrl(WATCH_URL).build(); 
        
         this.connection.start().catch((error) => {
               console.log(error);
            });

         // this.connection.on('receive', () => {
         //    console.log(this.connection)
         //    console.log('receive');
         //    this.getQuote();
         // });
      },
      connectHub(){
         if(this.connection == null) this.registerHub();
         else{
            if(this.connection.state === connState.disconnected){
               this.connection.start()
                  .catch(error => {
                     console.log(error);
                  });
            }
         } 
      },
      disconnectHub(){
         if(this.connection != null && this.connection.state === connState.connected){
            this.connection.stop()
               .catch(error => {
                  console.log(error);
               });
         } 
      },
      // addChartQuotes(quotes){
      //    let newQuotes = [];
      //    for (let i = 0; i < quotes.length; i++) {
      //       let exist = this.quotes.find(q => q.time == quotes[i].time);
      //       if(!exist){
      //          newQuotes.push(quotes[i]);
      //       }
      //    }
      //    if(newQuotes.length){
      //       this.$store.commit(ADD_CHART_QUOTES, newQuotes);
      //       this.chartModel.addRealTimeQuotes(this.quotes, newQuotes)
      //          .then(options => {
      //             this.chart.setOption(options);
      //             this.loadTrades();
      //          }).catch(error => {
      //             console.log(error); 
      //          })
      //    }
         
        
         
      // },
      getQuote(){
         console.log('getQuote');
         let params = {
            user: this.key,
            time: this.latestTime  
         };
        
         this.$store.dispatch(GET_QUOTES, params)
            .then(quotes => {
               this.chartModel.addRealTimeQuotes(quotes)
               .then(options => {
                  this.chart.setOption(options);
                  this.loadTrades();
               }).catch(error => {
                  this.resolveError(error);
               })
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

