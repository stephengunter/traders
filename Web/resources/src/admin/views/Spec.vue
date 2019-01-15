<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card  color="green">
					<v-card-text >
						
								<v-tabs v-model="active" color="cyan" dark slider-color="yellow">
									<v-tab ripple>
									<span class="cn">報價資料</span>
									</v-tab>
									<!-- <v-tab ripple>
									報價資料2
									</v-tab> -->
									<v-tab-item>
										<v-card flat>
											<v-card-text>
												<qoute-spec />
											</v-card-text>
										</v-card>
									</v-tab-item>
									<!-- <v-tab-item>
										<v-card flat>
											<v-card-text>報價資料2</v-card-text>
										</v-card>
									</v-tab-item> -->
								</v-tabs>
								
							
						
					</v-card-text>
				</material-card>
			</v-flex>
     </v-layout>
	</v-container>
    
	
</template>

<script>

import MaterialCard from '../components/material/Card';
import QuoteSpec from '../components/spec/Quote';

export default {
	name: 'SpecView',
	components: {
		'material-card' : MaterialCard,
		'qoute-spec' : QuoteSpec
	},
	data () {
		return {
			active: 0,
			items: [
				'報價資料'
			],
			
		}
	},
	beforeMount(){
		
	},
	methods: {
		
	}
}
</script>


