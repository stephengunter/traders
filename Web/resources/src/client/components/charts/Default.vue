<template>
   <div id="chart-watch" :style="`width:${this.width}px;height:${this.height}px`">
   
   </div>
</template>

<script>
import echarts from 'echarts';
import Charts from '@/models/chart';

import { mapState, mapGetters } from 'vuex';

export default {
   name: 'ChartDefault',
   props: {
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
         this.chartModel = new Charts(this.quotes, this.indicators);
         this.chart = echarts.init(document.getElementById('chart-watch'));
         this.chart.setOption(this.chartModel.defaultOptions());
      }
   }
}
</script>

