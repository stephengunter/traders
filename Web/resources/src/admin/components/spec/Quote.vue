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
         每一筆報價(Tick)包含以上資料. 分為三種情況來處理
         <ul>
            <li>
               成交價介於Bid/Offer之間：評分為 0 例如上表台指期
            </li>
            <li>
               成交價大於等於Offer：評分為 <span style="color:red">1</span>  例如上表台積電
            </li>
            <li>
               成交價小於等於Bid：評分為 <span style="color:green">-1</span>  例如上表中鋼
            </li>
         </ul>
      </v-flex>
      <v-flex sm12 class="cn">
         運用範例
         <ul>
            <li>
               10:30:00 ~ 10:31:00 台指期『多方量』的口數 ? 等於給定時間內所有評分為1的單量總和. 例如612 
            </li>
            <li>
               10:30:00 ~ 10:31:00 『多方量』的筆數 ? 等於給定時間內所有評分為1的資料筆數. 例如398 
            </li>
            <li>
               11:12:00 ~ 11:13:00 台指期『空方量』的口數 ? 等於給定時間內所有評分為-1的單量總和. 例如737 
            </li>
            <li>
               11:12:00 ~ 11:13:00 『空方量』的筆數 ? 等於給定時間內所有評分為-1的資料筆數. 例如515 
            </li>
         </ul>
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
            symbol: '台積電',
            time: '10:21:10',
            price: 210.5,
            qty: 46,
            bid: 210,
            offer: 210.5
         },{
            symbol: '中鋼',
            time: '10:21:10',
            price: 22.1,
            qty: 190,
            bid: 22.1,
            offer: 22.15
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
