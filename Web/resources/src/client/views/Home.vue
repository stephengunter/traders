<template>
<div>
   <RwvHero />
   <div class="container">
      <section>
         <div class="display-1" style="padding-bottom:20px">
            <span class="cn">請使用測試帳號登入</span>  
         </div>
         <v-layout row wrap>
            <table>
               <tr>
                  <td class="title">
                     Email
                  </td>
                  <td style="padding-left:20px">
                     traderstest@gmail.com
                  </td>
               </tr>
               <tr>
                  <td class="title">
                    Password
                  </td>
                  <td style="padding-left:20px">
                     test@traders
                  </td>
               </tr>
            </table>
         </v-layout>
         
      </section>
    
      <section>
         <div class="display-1" style="padding:20px 0px 20px 0px">
            <a href="https://author.waterapps.nctu.me" target="_blank" style="text-decoration: none"><span class="cn">作者：阿水</span>  </a>
            
         </div>
         
         
      </section>
   </div>
</div>   
</template>

<script>
import RwvHero from '../components/TheHero';
export default {
   name: 'HomeView',
   components: {
		RwvHero
   }
}
</script>

