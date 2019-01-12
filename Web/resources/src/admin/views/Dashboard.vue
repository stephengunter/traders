<template>
	<v-container fluid grid-list-xl fill-height>
     <v-layout justify-center  align-center>
			<v-flex xs12>
				<material-card  color="green">
					<div v-if="false" slot="header">
						<div class="title font-weight-light mb-2">Notifications</div>
            		<div class="category">
							Handcrafted by us with
							<v-icon  size="17">mdi-heart</v-icon>
            		</div>
					</div>
					<v-card-text>
						<v-layout row  wrap>
							<v-flex sm12>
								
               
							</v-flex>
						</v-layout>	
						
					</v-card-text>
					
				</material-card>
			</v-flex>
     </v-layout>
	</v-container>
    
	
</template>

<script>

import MaterialCard from '../components/material/Card';

export default {
	name: 'DashboardView',
	components: {
		'material-card' : MaterialCard
	},
	data () {
		return {
			
		}
	},
	mounted(){
		
	},
	methods: {
		
	}
}
</script>


