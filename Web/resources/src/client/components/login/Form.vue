<template>
   <form  @submit.prevent="onSubmit">
      <v-text-field
         v-validate="'required|email'"
         v-model="credentials.email"
         :error-messages="errors.collect('email')"
         label="Email"
         data-vv-name="email"
         required
      ></v-text-field>

      <v-text-field
         type="password"
         v-validate="'required|max:12'"
         v-model="credentials.password"
         :counter="12"
         :error-messages="errors.collect('password')"
         label="密碼"
         data-vv-name="password"
         required
      ></v-text-field>
      <v-layout class="mt-1" row wrap>
         <v-flex xs12>
            <v-btn type="submit" @click.prevent="onSubmit" color="success" class="cn">登入</v-btn>
         </v-flex>
      </v-layout>
      
   </form>
</template>



<script>

export default {
   name: 'LoginForm',
   data() {
      return {
         credentials: {
            email: '',
            password: '',
         }
      }
   },
   methods: {
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.$emit('submit', this.credentials);
         });         
      }
   }
};
</script>

