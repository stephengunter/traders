<template>
   <div class="container">
      <div v-if="result.success">
         <v-alert class="title" :value="true"  type="success">
            <span class="cn">
               {{ result.msg }}
            </span>      
         </v-alert>
      </div>
      <div v-if="model" v-show="!result.success">
         <h1 class="cn">{{ title }}</h1>
         <ErrorList  />
         <form @submit.prevent="onSubmit">
            <v-text-field v-if="hasOldPassword"
               type="password"
               v-validate="'required'"
               v-model="model.oldPassword"
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
               v-model="model.password"
               :counter="12"
               :error-messages="errors.collect('password')"
               label="密碼"
               data-vv-name="password"
               required
            />

            <v-text-field
               type="password"
               v-validate="'required|confirmed:password'"
               v-model="model.confirmPassword"
               :counter="12"
               :error-messages="errors.collect('confirmPassword')"
               label="確認密碼"
               data-vv-name="confirmPassword"
               required
            />
            <v-btn type="submit" @click.prevent="onSubmit" color="success" class="cn">確認</v-btn>
         </form>
      </div>
   </div>   
</template>

<script>
import { mapState } from 'vuex';
import { CLEAR_ERROR, SET_ERROR } from '../store/mutations.type';
import { INIT_CHANGE_PASSWORD, CHANGE_PASSWORD, SET_PASSWORD } from '../store/actions.type';

import ErrorList from '@/components/ErrorList';

export default {
   name: 'RwvChangePassword',
   components: {
      ErrorList
   },
   data () {
      return {
         model: null,
         result: {
            success: false,
            msg:''
         }
      }
   },
   computed: {
      hasOldPassword(){
         if(!this.model) return false;
         return this.model.hasOwnProperty('oldPassword');
      },
      title(){
         if(this.hasOldPassword) return '變更密碼';
         return '設定密碼';
      },
      action(){
         if(this.hasOldPassword) return CHANGE_PASSWORD;
         return SET_PASSWORD;
      }
   },
   beforeMount(){
      this.init();
   },
   methods: {
      init(){
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(INIT_CHANGE_PASSWORD)
         .then(model => {
            this.model = model;
         })
         .catch(error => {
            Bus.$emit('errors');
         })
      },
      onSubmit() {
         this.$validator.validate().then(valid => {
            if(valid) this.submit();
         });
      },
      onSuccess(){
         this.result = {
            success : true,
            msg: this.hasOldPassword ? '密碼變更成功' : '密碼設定成功'
         }
      },
      submit(){
         this.$store.commit(CLEAR_ERROR);
         this.$store
         .dispatch(this.action, this.model)
         .then(() => {
            this.onSuccess();
         })
         .catch(error => {
            if(!error)  Bus.$emit('errors');
            else this.resolveError(error);
         })
      },
      resolveError(error){       
         this.$store.commit(SET_ERROR, error);
      },
   },
   
};
</script>
