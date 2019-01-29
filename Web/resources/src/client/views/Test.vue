<template>
   <div class="container">


      

      <a href="#" @click.prevent="test">Test</a>
      
   </div>
   
</template>

<script>
import axios from 'axios';
export default {
   name: 'TestView',
   data () {
      return {
        
      }
   },
   methods:{
      test(){
         this.fetch()
         .then(data => alert('then'))
         .catch(error => {
            console.log('data',error.response.data);
      console.log('status',error.response.status);
      console.log('headers',error.response.headers);
            
         });
      },
      fetch(){
         return new Promise((resolve, reject) => {
			axios.get('https://localhost:44300/api/values')
				.then(response => {
					resolve(response.data);
				})
				.catch(error => {
					reject(error);
				})
      })
      }
   }
}
</script>

