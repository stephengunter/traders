<template>
   <div class="container">
      <Bread />
      <v-icon>mdi-stars</v-icon>
      <h1>WatchView</h1>
   </div>
   
</template>

<script>
import Bread from '../components/TheBread';

export default {
   name: 'WatchView',
   components: {
      Bread
   },
   data () {
      return {
         
      }
   },
}
</script>

