<template>
   <v-menu offset-y class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator" />       
      <v-list>
         <v-list-tile v-for="item in links" :key="item.order"  @click.prevent="select(item.name)" >
            <v-list-tile-action>
               <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
               <v-list-tile-title class="cn">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
      </v-list>

      <v-list v-if="!auth">
         <v-list-tile v-for="item in guest_links" :key="item.order"  @click.prevent="select(item.name)" >            
            <v-list-tile-action v-if="item.icon">
               <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
               <v-list-tile-title class="cn">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
      </v-list>
      <!-- user menu -->
      <v-list v-if="auth">
         <v-list-tile >
            <v-list-tile-content>
               <v-list-tile-title >{{ user.name }}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
      </v-list>

      <v-list v-if="auth">
         <v-list-tile v-for="item in user_links" :key="item.order"  @click.prevent="select(item.name)" >            
            <v-list-tile-action v-if="item.icon">
               <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
               <v-list-tile-title class="cn">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>

         <v-list-tile @click.prevent="select('logout')" >            
            <v-list-tile-action>
               <v-icon>mdi-logout</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
               <v-list-tile-title class="cn">登出</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>

      </v-list>
      <!-- end user menu -->
   </v-menu>
</template>


<script>

export default {
   name: 'MobileMenu',
   props: {
      links: {
         type: Array,
         default: null
      },
      auth: {
         type: Boolean,
         default: false
      },
      user: {
         type: Object,
         default: null
      },
      guest_links: {
         type: Array,
         default: null
      },
      user_links: {
         type: Array,
         default: null
		},

   },
   data () {
      return {
         
      }
   },
   methods: {
      select(name){
         this.$emit('selected', name);
      }
   }
}
</script>


<style scoped>
</style>

