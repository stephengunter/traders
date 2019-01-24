<template>
   <div id="chart-watch" :style="`width:${this.width}px;height:${this.height}px`">
   
   </div>
</template>

<script>
import { mapState } from 'vuex';

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
			
		}
	},
	computed: {
      ...mapState({
         quotes: state => state.chart.quotes,
         times: state => state.chart.times
      }),
   },
}
</script>

