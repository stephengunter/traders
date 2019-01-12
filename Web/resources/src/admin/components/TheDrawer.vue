<template>
   <v-navigation-drawer id="app-drawer"  v-model="inputValue"
     app dark floating persistent mobile-break-point="991"  width="260"
   >
   
      <v-layout  class="fill-height"  tag="v-list" column>
            <v-list-tile avatar>
               <v-list-tile-title class="title" style="text-align: center;">
                  <span class="cn" style="font-size:1.2rem">交易者 - 管理介面</span>
               </v-list-tile-title>
            </v-list-tile>
         
            <v-divider/>

            <v-list-tile v-if="false">
               <v-text-field class="purple-input search-input"  label="Search..."
                  color="purple"
               />
            </v-list-tile>

            <v-list-tile v-for="item in links" :key="item.order"
               :to="item.path"   :active-class="color"
               avatar  class="v-list-item"
            >
               <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
               </v-list-tile-action>
               <v-list-tile-title class="cn"  v-text="item.title"/>
         </v-list-tile>

      </v-layout>
   </v-navigation-drawer>
</template>

<script>

import { mapState } from 'vuex';
import { SET_DRAWER, TOGGLE_DRAWER } from '../store/mutations.type';

export default {
   name: 'TheDrawer',
   data () {
		return {
         
		}
   },
   computed: {
      ...mapState({
         image: state => state.app.image,
         color: state => state.app.color,
         responsive: state => state.app.responsive
      }),
      inputValue: {
         get () {
            return this.$store.state.app.drawer
         },
         set (val) {
            this.setDrawer(val)
         }
      },
      routes(){
         if(this.$router) return this.$router.options.routes.filter(item => item.meta.menu);
         return [];         
      },
      links(){
         return this.routes.map(route => this.mapLink(route));
      },
      items () {
         return this.$t('Layout.View.items')
      }
   },
   methods: {
      mapLink(route){
         return {
            name: route.name,
            path: route.path,
            order: route.meta.order,
            icon: route.meta.icon,
            title: route.meta.title
         }
      },
      setDrawer(val){
         this.$store.commit(SET_DRAWER, val);
      },
      toggleDrawer(){
         this.$store.commit(TOGGLE_DRAWER);
      }
	}
}
</script>


<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>


