<template>
   <v-breadcrumbs class="cn" :items="items" divider=">"></v-breadcrumbs>   
</template>

<script>

export default {
   name: 'RwvBread',
   data () {
		return {
         items: [],
		}
	},
   beforeMount(){
      this.items.push({
         text: '首頁',
         disabled: false,
         href: '#/'
      });

      let route = this.$router.options.routes.find(item => item.path === this.$route.path);

      this.items.push({
         text: route.meta.title,
         disabled: false,
         href: '#' + route.path
      });      
   }

};
</script>
