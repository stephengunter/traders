<template>
   <div v-if="ok" class="container">
      <v-alert class="title" :value="true"  type="success">
         <span class="cn">
         您的密碼已變更.
         </span>      
      </v-alert>
   </div>
   <div v-else class="container">
      <h1 class="cn">變更密碼</h1>
      <v-alert :value="Errors.any()" color="error" outline>
         <ErrorList :model="Errors" />
      </v-alert>
      <form  @submit.prevent="onSubmit">
         <v-text-field
            type="password"
            v-validate="'required'"
            v-model="user.oldPassword"
            :counter="12"
            :error-messages="errors.collect('oldPassword')"
            label="舊密碼"
            data-vv-name="oldPassword"
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
import { CHANGE_PASSWORD } from '../store/actions.type';

import ErrorList from '@/components/Errors';

export default {
   name: 'RwvChangePassword',
   components: {
      ErrorList
   },
   data () {
      return {
         user: {
            oldPassword: '',
            password: '',
            confirmPassword: ''
         },
         ok: false
      }
   },
   computed: {
      ...mapState({
         Errors: state => state.auth.errors
      })
   },
   methods: {
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.submit();
         });
      },
      submit(){
         this.$store
         .dispatch(CHANGE_PASSWORD, this.user)
         .then(() => {
            this.ok = true;
         })
      }
   },
   
};
</script>
