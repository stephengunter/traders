<template>
   <form v-if="oAuth" @submit.prevent="onSubmit">
      <v-text-field 
         v-model="oAuthUser.email"
         label="Email"
         disabled
      />

      <v-text-field
         v-validate="'phone'"
         v-model="oAuthUser.phone"
         :error-messages="errors.collect('phone')"
         label="手機"
         data-vv-name="phone"
         required
      />

      <v-text-field
         v-validate="'required'"
         v-model="oAuthUser.fullname"
         :error-messages="errors.collect('fullname')"
         label="姓名"
         data-vv-name="fullname"
         required
      />

      <v-radio-group v-model="oAuthUser.gender" row>
         <v-radio v-for="(item, index) in genderOptions" :key="index" 
            :label="item.text" :value="item.value" 
         />
      </v-radio-group>
      
      <v-btn @click.prevent="onSubmit" color="success" class="cn">註冊</v-btn>
   </form>

   <form v-else @submit.prevent="onSubmit">
      
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

      <v-text-field
         v-validate="'phone'"
         v-model="user.phone"
         :error-messages="errors.collect('phone')"
         label="手機"
         data-vv-name="phone"
         required
      />

      <v-text-field
         v-validate="'required'"
         v-model="user.fullname"
         :error-messages="errors.collect('fullname')"
         label="姓名"
         data-vv-name="fullname"
         required
      />

      <v-radio-group v-model="user.gender" row>
         <v-radio v-for="(item, index) in genderOptions" :key="index" 
            :label="item.text" :value="item.value" 
         />
      </v-radio-group>
      
      <v-btn @click.prevent="onSubmit" color="success" class="cn">註冊</v-btn>
   </form>
</template>



<script>

export default {
   name: 'RegisterForm',
   props: {
      model: {
         type: Object,
         default: null
      }
   },
   data() {
      return {
         user: {
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            fullname: '',
            gender: 1           
         },

         oAuthUser: {
            email: '',
            phone: '',
            fullname: '',
            gender: 1            
         },

         oAuth: false,

         genderOptions: Helper.genderOptions()
         
      }
   },
   beforeMount(){
      if(this.model != null){
         this.oAuthUser = { ...this.model };
         this.oAuthUser.gender = Helper.tryParseInt(this.oAuthUser.gender);
         this.oAuth = true;
      }
   },
   methods: {
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid){
               if(this.oAuth) this.$emit('submit', this.oAuthUser);
               else this.$emit('submit', this.user);
            } 
         });         
      }
   }
};
</script>
