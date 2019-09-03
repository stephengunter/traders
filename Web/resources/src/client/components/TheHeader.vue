<template>
   <v-toolbar dark color="primary" app>
      
      <v-toolbar-title class="headline">
         <a class="site-link" href="#/">
            <span class="site-title cn">交易者</span>
            <v-icon class="site-icon">mdi-finance</v-icon>
            <span class="site-sub-title cn">台指當沖策略平台</span>
         </a> 
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- 有登入 -->
      <v-toolbar-items v-if="isAuthenticated"  class="hidden-sm-and-down cn">
         <v-btn v-for="item in menuLinks" :key="item.order" class="route-link" flat
         :to="item.path"
         > 
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
         </v-btn>

         <UserMenu v-if="isAuthenticated" :user="currentUser"  :items="userLinks"
            @selected="link"
         />
         
      </v-toolbar-items>

      <!-- 沒登入 -->
      <v-toolbar-items v-else class="hidden-sm-and-down cn">
         <v-btn v-for="item in menuLinks" :key="item.order" class="route-link" flat
          :to="item.path"
         > 
           <v-icon>{{ item.icon }}</v-icon>
           {{ item.title }}
         </v-btn>
        
         <v-btn v-for="item in guestLinks" :key="item.order"  class="route-link" flat
          :to="item.path" > 
          {{ item.title }}
         </v-btn>
      </v-toolbar-items>

      <MobileMenu :auth="isAuthenticated" :user="currentUser"
       :links="menuLinks"  :user_links="userLinks" :guest_links="guestLinks"
       @selected="link"
      />
      
   </v-toolbar>
</template>


<script>
import { mapGetters } from 'vuex';
import { LOGOUT } from '../store/actions.type';

import MobileMenu from './menu/Mobile';
import UserMenu from './menu/User';
 

export default {
   name: 'RwvHeader',
   components: {
      MobileMenu,
		UserMenu
   },
   computed: {
      ...mapGetters(['currentUser', 'isAuthenticated']),
      routes(){
         if(this.$router) return this.$router.options.routes.filter(item => item.meta.menu != 'none');
         return [];         
      },
      menuLinks(){
         let items = this.routes.filter(item => item.meta.menu === 'main');
         return items.map(route => this.mapLink(route));
      },
      guestLinks(){
         let items = this.routes.filter(item => item.meta.menu === 'guest');
         return items.map(route => this.mapLink(route));
      },
      userLinks(){
         let items = this.routes.filter(item => item.meta.menu === 'user');
         return items.map(route => this.mapLink(route));
      }
   },
   data () {
      return {
         
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
      link(name){
         if(name === 'logout') this.logout();
         else this.$router.push({ name });
      },
      logout() {  
         this.$store
         .dispatch(LOGOUT)
         .then(() => this.$router.push({ name: 'home' }))
      },
   }
}
</script>

<style scoped>
.site-icon{
   margin-bottom:3px;
}
.site-title{
   font-size: 2.2rem!important;
   padding-right: 16px;
}
.site-link{
   color: #fff;
   text-decoration: none;
}
.site-sub-title{
   font-size: 1.4rem;
}
.route-link{
   font-size: 1.4rem;
}
</style>

