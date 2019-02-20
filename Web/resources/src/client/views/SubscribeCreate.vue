<template>
   <div class="container">
      <Bread />
      <form v-if="model" class="cn"  @submit.prevent="onSubmit">
         <v-card>
            <v-container fluid grid-list-lg>
               <v-layout row wrap>
                  <v-flex xs12 sm12 md6>
                     <p class="title ">
                        <span class="cn">訂閱方案</span>
                     </p>
                     <v-radio-group v-model="model.planId" :mandatory="false">
                        <v-radio v-for="(item, index) in plans" :key="index" :value="item.id" color="primary">
                           <div slot="label" class="price font-md">
                              <span class="cn" v-text="monthString(item)"></span>
                              <span class="money ml-1">${{ item.money }}</span> 
                           </div>
                        </v-radio>
                     </v-radio-group>
                  </v-flex>
                  <v-flex xs12 sm12 md6>
                     <p class="title ">
                        <span class="cn">付款方式</span>
                     </p>
                     <v-radio-group v-model="model.bill.payway" :mandatory="false">
                        <v-radio v-for="(item, index) in paywayOptions" :key="index" :value="item.value" color="primary">
                           <div slot="label" class="font-md">
                              <span class="cn" v-text="item.text"></span>
                           </div>
                        </v-radio>
                     </v-radio-group>
                  </v-flex>
                  <v-flex xs12>
                     <v-btn type="submit" large color="success">
                        <span class="cn" style="font-size:1.2rem">確認</span>
                     </v-btn>
                  </v-flex>
               </v-layout>
            </v-container>
         </v-card>
      </form>
   </div>
   
</template>

<script>
import Bread from '../components/TheBread';
import Helper from '@/common/helper';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';
import { CREATE_SUBSCRIBE, STORE_SUBSCRIBE } from '../store/actions.type';


export default {
   name: 'SubscribeCreateView',
   components: {
      Bread
   },
   data () {
      return {
         paywayOptions:[],
         plans:[],
         model: null,
      }
   },
   computed: {
      
   },
   beforeMount(){
		this.create();
	},
   methods: {
      create(){
			this.$store.commit(CLEAR_ERROR);
			this.$store.dispatch(CREATE_SUBSCRIBE)
				.then(model => {
               this.model = model.subscribe;
               this.model.planId = model.plans[0].id;
               this.model.bill.payway = model.paywayOptions[0].value;

               this.paywayOptions = model.paywayOptions;
               this.plans = model.plans; 
				})
				.catch(error => {
					Bus.$emit('errors');
				})
			
      },
      monthString(item){
         let month = Helper.chineseNumber(item.month);
         return `${month}個月`;
      },
      onSubmit() {
         console.log('submit');      
      },
   }
}
</script>

