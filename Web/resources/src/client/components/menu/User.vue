<template>
   <v-menu offset-y>
      <v-btn dark flat slot="activator"  class="lowercase" style="min-width:48px;">
         <div class="hidden-sm-and-down">
            <span class="mr-1">{{ user.name }}</span>
         </div>
         <v-icon>arrow_drop_down</v-icon>
      </v-btn>
      <v-list>
         <v-list-tile v-for="(item, index) in items"  :key="index" 
             @click="action(item.name)" >
            <v-list-tile-title class="cn">{{ item.title }}</v-list-tile-title>
         </v-list-tile>
         <v-list-tile 
             @click="action('logout')" >
            <v-list-tile-title class="cn">登出</v-list-tile-title>
         </v-list-tile>
      </v-list>
   </v-menu>
</template>


<script>
export default {
   name: 'UserMenu',
   props: {
      items: {
         type: Array,
         default: null
      },
      user: {
         type: Object,
         default: null
      }
   },
   methods: {
      action(name){
         this.$emit('selected', name);
      }
   }
}
</script>


<style scoped>
.lowercase {
   text-transform: lowercase;
}
</style>

