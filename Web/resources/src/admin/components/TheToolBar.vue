<template>
   <v-toolbar id="core-toolbar" flat prominent style="background: #eee;" >
      <div class="v-toolbar-title">
         <v-toolbar-title class="tertiary--text font-weight-light">
            <v-btn @click.stop="onClickBtn" v-if="responsive" class="default v-btn--simple" dark icon>
               <v-icon>mdi-view-list</v-icon>
            </v-btn>
            
            <span style="font-size:1.2rem" class="font-weight-light cn"> {{ title }} </span> 
         </v-toolbar-title>
      </div>
      <v-spacer />
      <v-toolbar-items>
         <v-flex align-center layout py-2>
            <v-text-field  v-if="false" hide-details color="purple" 
            class="mr-4 mt-2 purple-input" label="Search..."
            />
            <router-link v-if="false" v-ripple class="toolbar-items" to="/">
               <v-icon color="tertiary">mdi-view-dashboard</v-icon>
            </router-link>

            <v-menu v-if="false" bottom left content-class="dropdown-menu" offset-y transition="slide-y-transition">
               <router-link v-ripple  slot="activator"  class="toolbar-items" to="/notifications" >
                  <v-badge color="error" overlap>
                     <template slot="badge">
                        {{ notifications.length }}
                     </template>
                     <v-icon color="tertiary">mdi-bell</v-icon>
                  </v-badge>
               </router-link>
               <v-card>
                  <v-list dense>
                     <v-list-tile @click="onClick" v-for="notification in notifications" :key="notification">
                        <v-list-tile-title  v-text="notification" />
                     </v-list-tile>
                  </v-list>
               </v-card>
            </v-menu>
            
            <v-menu offset-y>
               <v-btn dark flat slot="activator" class="lowercase">
                  <span class="mr-1" style="color: #000;">traders.com.tw@gmail.com</span> 
                  <v-icon style="color: #000;">mdi-menu-down</v-icon>
               </v-btn>
               <v-card>
                  <v-list dense>
                     <v-list-tile @click.prevent="logout">
                        <v-list-tile-action>
                           <v-icon>mdi-logout-variant</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                           <v-list-tile-title class="cn">登出</v-list-tile-title>
                        </v-list-tile-content>
                     </v-list-tile>
                  </v-list>
               </v-card>
            </v-menu>
         </v-flex>
      </v-toolbar-items>   
   </v-toolbar>
</template>

<script>

import { mapState } from 'vuex';
import { TOGGLE_DRAWER } from '../store/mutations.type';

export default {
   name: 'TheToolBar',
   data () {
		return {
			notifications: [
            'Mike, John responded to your email',
            'You have 5 new tasks',
            'You\'re now a friend with Andrew',
            'Another Notification',
            'Another One'
         ],
         title: ''
		}
   },
   computed: {
      ...mapState({
         responsive: state => state.app.responsive
      })
   },
   watch: {
      '$route' (val) {
         this.title = val.meta.title;
      }
   },
   methods: {
      onClickBtn () {
         this.$store.commit(TOGGLE_DRAWER);
      },
      onClick () {
         //
      },
      logout(){
         alert('logout');
      }
	}
}
</script>


<style scoped>
.lowercase {
   text-transform: lowercase;
}
</style>



