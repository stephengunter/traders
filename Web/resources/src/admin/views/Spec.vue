<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card  color="green">
					<v-card-text>
						<v-tabs v-model="active" color="cyan" dark slider-color="yellow">
							<v-tab ripple>
								<span class="cn">報價資料</span>
							</v-tab>
							<v-tab ripple>
								<span class="cn">藍籌股指標</span>
							</v-tab>
							<v-tab ripple>
								<span class="cn">多空力道指標</span>
							</v-tab>
							<v-tab ripple>
								<span class="cn">主力成本指標</span>
							</v-tab>
							<v-tab ripple>
								<span class="cn">策略</span>
							</v-tab>
							<v-tab-item>
								<v-card flat>
									<v-card-text>
										<quote-spec />
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item>
								<v-card flat>
									<v-card-text>
										<blue-chips />
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item>
								<v-card flat>
									<v-card-text>
										<powers-spec />
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item>
								<v-card flat>
									<v-card-text>
										<prices-spec />
									</v-card-text>
								</v-card>
							</v-tab-item>
							<v-tab-item>
								<v-card flat>
									<v-card-text>
										<strategy-spec />
									</v-card-text>
								</v-card>
							</v-tab-item>
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
import BlueChips from '../components/spec/BlueChips';
import Powers from '../components/spec/Powers';
import Prices from '../components/spec/Prices';
import Strategy from '../components/spec/Strategy';

export default {
	name: 'SpecView',
	components: {
		'material-card' : MaterialCard,
		'quote-spec' : QuoteSpec,
		'blue-chips' : BlueChips,
		'powers-spec' : Powers,
		'prices-spec' : Prices,
		'strategy-spec' : Strategy
	},
	data () {
		return {
			active: 0,
			
			
		}
	},
	beforeMount(){
		
	},
	methods: {
		
	}
}
</script>


