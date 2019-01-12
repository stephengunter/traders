<template>
   <div class="container">

<v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      item-key="name"
      select-all
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>
          <v-checkbox
            v-model="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
      
      <h1>Test</h1>
<button @click="login">login</button>
      <button @click="test">test</button>
   </div>
   
</template>

<script>
import { REFRESH_TOKEN } from '../store/actions.type';

import JwtService from '@/common/jwt';

import AuthService from '../services/auth';

import UserService from '../services/user';
export default {
   name: 'TestView',
   data () {
      return {
         selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ],
         accessToken:'',
         refreshToken: ''
      }
   },
   beforeMount(){
      let users = UserService.fetch();
      users.then(() => {
            
            
         }).catch(err => console.log(err))
   },
   methods:{
      test(){
         alert('test');
         //window.setInterval(this.doRefresh(), 3000);
         // this.$store
         //    .dispatch(REFRESH_TOKEN)
         //    .then(result => {
         //       if(result){
                 
         //       }else{
                 
         //       }        
         //    })
         
         this.doRefresh();
      },
      login(){
         let result = this.doLogin('traders.com.tw@gmail.com','secret');
         result.then(() => {
            
            
         }).catch(err => console.log(err))
      },
      doLogin(email, password){
         return new Promise((resolve) => {
            if (email && password) {
               
               AuthService.login({ email, password })
               .then(model => {

                  JwtService.saveToken(model.accessToken.token,model.refreshToken);
                 
               })
               .catch((err) => {
                  console.log(err);
                  resolve(null);           
               })
            } else {
               resolve(null);
            }
         });
      },
      doRefresh(){
        
         let result = this.refresh(JwtService.getToken(), JwtService.getRefreshToken());
         result.then(result => {
            
            
         }).catch(err => console.log(err))
      },
      refresh(accessToken, refreshToken){
         return new Promise((resolve) => {
            if (accessToken && refreshToken) {
               
               AuthService.refreshToken({ accessToken, refreshToken })
               .then(model => {
                  JwtService.saveToken(model.accessToken.token,model.refreshToken);
                 
                  resolve(true);
               })
               .catch((err) => {
                  resolve(null);           
               })
            } else {
               resolve(null);
            }
         });
      }
   }
}
</script>

