<template>
	<v-list v-if="pays">
      <v-list-tile v-for="(item, index) in pays" :key="index">
         <v-list-tile-content>
            <v-list-tile-title>{{ item.date }}</v-list-tile-title>
         </v-list-tile-content>
         <v-list-tile-content>
            <v-list-tile-title>
               <span class="cn" v-text="item.payWay"></span>
            </v-list-tile-title>
         </v-list-tile-content>
         <v-list-tile-content>
            <v-list-tile-title>
               <span class="money">${{ item.money }}</span>
            </v-list-tile-title>
         </v-list-tile-content>
      </v-list-tile>
   </v-list>	
</template>


<script>

export default {
	name: 'PayRecords',
	props: {
		pays: {
         type: Array,
         default: null
      },
	},
	data () {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>
