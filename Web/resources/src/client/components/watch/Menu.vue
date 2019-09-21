<template>
   <v-layout row wrap>
      <v-flex xs10 class="d-inline-flex">
         <v-select style="width:180px"
            :items="strategy_options"  label="策略"
            v-model="strategyId" @change="onStrategyChanged"
         />
         <v-menu :close-on-content-click="false"
            v-model="showDatePicker"
            :nudge-right="40"  full-width min-width="290px"
            lazy  transition="scale-transition" offset-y
         >
            <v-text-field readonly class="ml-3"
               slot="activator" v-model="dateString" label="日期"
               prepend-icon="mdi-calendar"
            />
            <v-date-picker v-model="dateString" locale="zh-cn"
               :min="min_date"
               :max="max_date"
               :allowed-dates="allowedDates"
               @input="onDateChanged" 
            />
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
                     <v-list-tile-title>重新整理</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-list-tile @click.prevent="editStrategy" >
                  <v-list-tile-action>
                     <v-btn class="mr-1" slot="activator"  color="success" icon>
                        <v-icon>mdi-settings</v-icon>
                     </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>策略設定</v-list-tile-title>
                  </v-list-tile-content>
               </v-list-tile>
               <v-list-tile @click.prevent="createStrategy" >
                  <v-list-tile-action>
                     <v-btn slot="activator" color="primary" icon>
                        <v-icon>mdi-plus</v-icon>
                     </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-content>
                     <v-list-tile-title>新增策略</v-list-tile-title>
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
            <span>重新整理</span>
         </v-tooltip>
         <v-tooltip top content-class="top">
            <v-btn @click.prevent="editStrategy" class="mr-1" slot="activator"  color="success" icon>
               <v-icon>mdi-settings</v-icon>
            </v-btn>
            <span>策略設定</span>
         </v-tooltip>
         <v-tooltip top content-class="top">
            <v-btn @click.prevent="createStrategy" slot="activator"  color="primary" icon>
               <v-icon>mdi-plus</v-icon>
            </v-btn>
            <span>新增策略</span>
         </v-tooltip>
      </v-flex>
   </v-layout>
</template>


<script>
import Helper from '@/common/helper';

export default {
   name: 'WatchMenu',
   props: {
      responsive:{
         type: Boolean,
         default: false
      },
      strategy_options: {
         type: Array,
         default: null
      },
      strategy_id: {
         type: Number,
         default: 0
      },
      date_string: {
         type: String,
         default: ''
      },
      min_date: {
         type: String,
         default: ''
      },
      max_date: {
         type: String,
         default: ''
      },
      empty_dates: {
         type: Array,
         default: null
      },

   },
   data(){
      return {
         strategyId: 0,
         dateString: '',
         showDatePicker: false
      }
   },
   beforeMount(){
      this.init();
   },
   methods: {
      init(){
         this.strategyId = this.strategy_id;
         this.dateString = this.date_string;
      },
      allowedDates(val){
         return this.empty_dates.indexOf(val) < 0
      },
      onStrategyChanged(){
         this.onParamsChanged();
      },
      onDateChanged(){
         this.showDatePicker = false;
         this.onParamsChanged();
      },
      onParamsChanged(){
         this.$emit('changed', {
            strategy: this.strategyId,
            date: this.dateString
         });
      },
      refresh(){
         this.$emit('refresh');
      },
      editStrategy(){
         this.$emit('edit-strategy');
      },
      createStrategy(){
         this.$emit('create-strategy');
      }

   }
}
</script>