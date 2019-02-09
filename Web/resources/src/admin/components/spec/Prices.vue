<template>
   <v-layout row wrap>
      <v-flex sm12>
         <v-data-table :headers="headers" :items="prices" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
               <span class="subheading font-weight-light text-success text--darken-3 cn">
                  {{ header.text }}
               </span>
            </template>
            <template slot="items" slot-scope="props">
               <td class="cn">{{ props.item.symbol }}</td>
               <td>{{ props.item.price }}</td>
               <td>{{ props.item.qty }}</td>
            </template>
         </v-data-table>
      </v-flex>
      <v-flex sm12 class="cn">
         <h2 class="font-weight-light mb-4"> <span class="cn">主力成本</span></h2>
         <h5 class="cn">
            <span class="cn">定義與說明</span> 
         </h5>
         <ul>
            <li>
               將各價位成交口數考慮在內，計算台指期平均價格
            </li>
            <li>
               以上圖為例，計算方式為
               <span v-for="(item, index) in prices" :key="index">
                  ( {{ item.price }} x {{ item.qty }} ) {{ index === prices.length - 1 ? '' : '+' }}
               </span>
               / (
               <span v-for="(item, index) in prices" :key="0 - index - 1">
                  {{ item.qty }} {{ index === prices.length - 1 ? '' : '+' }}
               </span>
               ) = {{ result }}
            </li>
            
         </ul>
         <h5>
            <span class="cn">圖形呈現</span>
         </h5>
         <ul>
            <li>
               參數範圍：1 到 60
            </li>
            <li>
               柱狀圖：數值 = 目前價格 - (參數n分鐘)內的均價平均 (例如得出均價為9806.30目前價格為9810則回傳數值3.7)
               
            </li>
         </ul>
         <h5>
            <span class="cn">信號判斷</span>
         </h5>
         <ul>
            <li>
               如數值大於1則輸出信號1 ,   數值小於1則輸出信號-1
            </li>
         </ul>
         
         
      </v-flex>
      <v-flex sm6 class="cn">
         <v-img :aspect-ratio="443/101"  class="white--text" src="https://nns5qg.ch.files.1drv.com/y4mDMhubkJ07zT910u4R3tzylpxqXmnpyL9II_5OaOGeh7HBJRKbkqYzbWxnz7qaePOkm7-UzHI1LMJZjqpByc4Pf7caouObKbQBcPfUmotBUesETBZ9LLBas__3GCcln4Hbq0mmWg3N0d2QmARpzhKygyBqyoloJdOfXrB_KQ_0UDqeGrKoPMejtwylyLjou8U">
         <v-container fill-height fluid>
            <v-layout fill-height>
               <v-flex xs12 align-end flexbox>
                  <div class="headline ">
                     <span class="cn">指標圖形範例 紅色柱狀圖代表信號為1，綠色代表信號為-1</span>
                  </div>
                  
               </v-flex>
            </v-layout>
         </v-container>
      </v-img>
      </v-flex>
      <v-flex sm6 class="cn">
      </v-flex>
   </v-layout>
</template>

<script>
export default {
   data () {
		return {
			headers: [
				{
					sortable: false,
					text: '商品',
					value: 'symbol'
				},
				{
					sortable: false,
					text: '價格',
					value: 'price'
            },
            {
					sortable: false,
					text: '口數',
					value: 'qty'
				}
         ],
         prices: [{
            symbol: '台指期',
            price: 9800,
            qty: 300
         },{
            symbol: '台指期',
            price: 9805,
            qty: 100
         },{
            symbol: '台指期',
            price: 9810,
            qty: 200
         }]
			
		}
   },
   computed: {
      result(){
         let sum = 0;
         let total = 0;
         for(let i = 0; i < this.prices.length; i++){
            sum += (this.prices[i].price * this.prices[i].qty);
            total += this.prices[i].qty;            
         }
         let val = sum / total;
         return Math.round(val * 100) / 100;
      }
   }
}
</script>
