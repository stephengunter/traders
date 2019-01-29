<template>
   <div v-if="ok" class="container">
      <v-alert class="title" :value="true"  type="success">
         <span class="cn">
         已經Email一封忘記密碼確認信給您.  請查看您的Email來啟動密碼重設程序.
         </span>      
      </v-alert>
   </div>
   <div v-else class="container">
      <h1 class="cn">忘記密碼</h1>
      <ErrorList />
      <form  @submit.prevent="onSubmit">
         <v-text-field
            v-validate="'required|email'"
            v-model="email"
            :error-messages="errors.collect('email')"
            label="Email"
            data-vv-name="email"
            required
         />
         <v-btn type="submit" @click.prevent="onSubmit" color="success" class="cn">確認</v-btn>
      </form>
   </div>
</template>

<script>
import { mapState } from 'vuex';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';
import { FORGOT_PASSWORD } from '../store/actions.type';

import ErrorList from '@/components/ErrorList';

export default {
   name: 'RwvForgotPassword',
   components: {
      ErrorList
   },
   data () {
      return {
         email: '',
         ok: false
      }
   },
   methods: {
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.submit();
         });
      },
      submit(){
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(FORGOT_PASSWORD, { email: this.email })
         .then(() => {
            this.ok = true;
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.$store.commit(SET_ERROR, error);
         })
      }
   },
   
};
</script>
