<template>
   <div class="container">


      
      <h1>Test</h1>

      <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
               <span class="cn" >
                  您的Email尚未驗證
               </span>  
            </v-alert>

      <button @click="test">test</button>
   </div>
   
</template>

<script>

export default {
   name: 'TestView',
   data () {
      return {
        
      }
   },
   methods:{
      test(){
         
      },
   }
}
</script>

