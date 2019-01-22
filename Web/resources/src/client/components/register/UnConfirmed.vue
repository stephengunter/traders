<template>
   <div class="container">
      <v-layout v-if="emailSend" row wrap>
         <v-flex xs12>
            <v-alert class="title cn" :value="true"  type="info">
               <span class="cn">
                  已經Email一封驗證信給您.  請查看您的Email來完成驗證.  
               </span>  
            </v-alert>
         </v-flex>
      </v-layout>
      <v-layout v-else row wrap>
         <v-flex xs12>
            <v-alert :value="true"  color="error"  icon="mdi-alert" outline  class="title">
               <span class="cn" >
                  您的Email尚未驗證
               </span>  
            </v-alert>
         </v-flex>
         <v-flex xs12>
            <v-btn @click="sendEmail" color="info" class="cn" style="margin: 6px 0px">
               重發認證信
            </v-btn>
         </v-flex>
      </v-layout>
   </div>
</template>

<script>

import { SEND_CONFIRM_EMAIL } from '../../store/actions.type';

export default {
   props: {
      email: {
         type: String,
         default: ''
      }
   },
   data () {
      return {
         emailSend: false
      }
   },
   methods: {
      sendEmail(){
         this.$store
         .dispatch(SEND_CONFIRM_EMAIL, { email: this.email })
         .then(() => {
            this.emailSend = true;       
         })
      },
   }
}
</script>

