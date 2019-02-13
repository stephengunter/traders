import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW';

Vue.use(VeeValidate);

Validator.localize('zh_TW', zh_TW);

const dictionary = {
   zh_TW: {
      messages: {
        email: () => '請輸入正確的Email格式',
        required: ( field )=> '請輸入' + field
      },
      attributes:{
         name: '名稱',
         email: 'Email',
         oldPassword:'舊密碼',
         password:'密碼',
         confirmPassword:'確認密碼',
         fullname:'姓名',
         phone: '手機',
         code: '代碼',
         entity: '代碼',
         description: '說明',
         indicator_begin: '信號開始時間',
         indicator_end: '信號結束時間',
         minParam: '最小參數',
         maxParam: '最大參數'
      }
   }
};
Validator.localize(dictionary);

Validator.extend('phone', {
   getMessage: field => field + '格式不正確',
   validate: value => {
      if(!value) return true;
      return !isNaN(value);
   }
});