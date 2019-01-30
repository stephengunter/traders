<template>
   <div id="chart-watch" :style="`width:${this.width}px;height:${this.height}px`">
   
   </div>
</template>

<script>
import echarts from 'echarts';
import Charts from '@/models/chart';

import { mapState, mapGetters } from 'vuex';
import { SET_LOADING } from '../../store/mutations.type';

export default {
   name: 'ChartDefault',
   props: {
      strategy: {
         type: Object,
         default: null
      },
      width: {
         type: Number,
         default: 940
      },
      height: {
         type: Number,
         default: 600
      }
   },
   data () {
		return {
         chart: null,
         chartModel: null
		}
	},
	computed: {
      ...mapState({
         indicators: state => state.chart.indicators,
         quotes: state => state.chart.quotes
      }),
   },
   methods: {
      init(){
         this.$store.commit(SET_LOADING, true);
         
         this.chartModel = new Charts(this.strategy, this.indicators, this.quotes);
         this.chart = echarts.init(document.getElementById('chart-watch'));
         this.chart.setOption(this.chartModel.defaultOptions());

          this.$store.commit(SET_LOADING, false);
      }
   }
}
</script>

