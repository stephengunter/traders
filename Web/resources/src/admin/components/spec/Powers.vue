<template>
   <v-layout row wrap>
      <v-flex sm12>
         <v-data-table :headers="headers" :items="ticks" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
               <span class="subheading font-weight-light text-success text--darken-3 cn">
                  {{ header.text }}
               </span>
            </template>
            <template slot="items" slot-scope="props">
               <td class="cn">{{ props.item.symbol }}</td>
               <td>{{ props.item.time }}</td>
               <td>{{ props.item.price }}</td>
               <td :style="getStyle(props.item)">{{ props.item.qty }}</td>
               <td>{{ props.item.bid }}</td>
               <td>{{ props.item.offer }}</td>
            </template>
         </v-data-table>
      </v-flex>
      <v-flex sm12 class="cn">
         <h2 class="font-weight-light mb-4"> <span class="cn">多空力道</span></h2>
         <h5 class="cn">
            <span class="cn">定義與說明</span> 
         </h5>
         <ul>
            <li>
               計算台指期 『多方能量』與『空方能量』
            </li>
            <li>
               記錄台指期的每筆報價(Tick),可得其『多方量』(參照第一頁報價資料說明)
            </li>
            <li>
               最後計算方式，給定一個時間範圍例如 10:30:00 ~ 10:31:00，預計回傳兩個數字『多方能量』與『空方能量』
            </li>
            <li>
               『多方能量』 = 多方量口數. 『空方能量』 = 空方量口數. 
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
               柱狀圖：數值 = (開盤起至給定時間止)累計多方能量 - 累計空方能量
            </li>
            <li>
               平均線：(參數n分鐘)內的數值平均
            </li>
         </ul>
         <h5>
            <span class="cn">信號判斷</span>
         </h5>
         <ul>
            <li>
               如數值大於均線則輸出信號1 ,   數值小於均線則輸出信號-1
            </li>
         </ul>
         
         
      </v-flex>
      <v-flex sm6 class="cn">
         <v-img :aspect-ratio="548/169"  class="white--text" src="https://n3s5qg.ch.files.1drv.com/y4mj0hsZC2a_ibUXzboF_pJcndsACBdw7go1g-2AmXNsSk1QHXMun5JtmJ-9oRS1AukwYgxxfVYA77YD2aMySF4d17PbCGcC-IhLPgftXuJPo-rj-8jqK70JXNcgQ3jfhT0CybkWaR7VGQWvatVcPc8eqOqQcEeUp3JfhGxRqL-dQMWcew_kRrj12U-mlFiXEJE">
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
					text: '時間',
					value: 'time'
				},
				{
					sortable: false,
					text: '成交價',
					value: 'price'
            },
            {
					sortable: false,
					text: '單量',
					value: 'qty'
				},
				{
					sortable: false,
					text: 'Bid',
					value: 'bid'
				},
				{
					sortable: false,
					text: 'Offer',
					value: 'offer'
				}
         ],
         ticks: [{
            symbol: '台指期',
            time: '10:21:11',
            price: 9767,
            qty: 3,
            bid: 9766,
            offer: 9768
         },{
            symbol: '台指期',
            time: '10:21:11',
            price: 9766,
            qty: 4,
            bid: 9765,
            offer: 9766
         },{
            symbol: '台指期',
            time: '10:21:12',
            price: 9765,
            qty: 9,
            bid: 9765,
            offer: 9766
         }]
			
		}
   },
   methods: {
		getStyle(item){
         if(item.price <= item.bid) return 'color:green';
         else if(item.price >= item.offer) return 'color:red';
         else return '';
		}
	}
}
</script>
