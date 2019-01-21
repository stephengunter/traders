<template>
   <div v-if="ok" class="container">
      <v-alert class="title" :value="true"  type="success">
         <span class="cn">
         您的密碼已重設.
         </span>      
      </v-alert>
   </div>
   <div v-else class="container">
      <h1 class="cn">重設密碼</h1>
      <v-alert :value="Errors.any()" color="error" outline>
         <ErrorList :model="Errors" />
      </v-alert>
      <form  @submit.prevent="onSubmit">
         <v-text-field
            v-validate="'required|email'"
            v-model="user.email"
            :error-messages="errors.collect('email')"
            label="Email"
            data-vv-name="email"
            required
         />

         <v-text-field
            ref="password"
            type="password"
            v-validate="'required|min:6|max:12'"
            v-model="user.password"
            :counter="12"
            :error-messages="errors.collect('password')"
            label="密碼"
            data-vv-name="password"
            required
         />

         <v-text-field
            type="password"
            v-validate="'required|confirmed:password'"
            v-model="user.confirmPassword"
            :counter="12"
            :error-messages="errors.collect('confirmPassword')"
            label="確認密碼"
            data-vv-name="confirmPassword"
            required
         />
         <v-btn @click.prevent="onSubmit" color="success" class="cn">確認</v-btn>
      </form>
   </div>
</template>

<script>
import { mapState } from 'vuex';
import { RESET_PASSWORD } from '../store/actions.type';

import ErrorList from '@/components/Errors';

export default {
   name: 'RwvResetPassword',
   components: {
      ErrorList
   },
   data () {
      return {
         user: {
            email: '',
            password: '',
            confirmPassword: '',
            code: ''       
         },
         ok: false
      }
   },
   computed: {
      ...mapState({
         Errors: state => state.auth.errors
      })
   },
   beforeMount(){
      if(this.$route.query.code) this.user.code = this.$route.query.code;
   },
   methods: {
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.submit();
         });
      },
      submit(){
         this.$store
         .dispatch(RESET_PASSWORD, this.user)
         .then(() => {
            this.ok = true;
         })
      }
   },
   
};
</script>
