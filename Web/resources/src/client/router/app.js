
const links = [
   {
      name: 'test',
      path: '/test',
      component: () => import('../views/Test'), 
      meta: { 
         order: 0,
         icon: '',
         title: '',
         type: 'all',
         menu: 'none'
      }        
   },
   {
      name: 'auth',
      path: '/auth',
      component: () => import('../views/Auth'), 
      meta: { 
         order: 0,
         icon: '',
         title: '',
         type: 'all',
         menu: 'none'
      }        
   },
   {
      name: 'home',
      path: '/',
      component: () => import('../views/Home'), 
      meta: { 
         order: 0,
         icon: '',
         title: '',
         type: 'all',
         menu: 'none'
      }        
   },
   {
      name: 'indicators',
      path: '/indicators',
      component: () => import('../views/Indicators'),
      meta: { 
         order: 0,
         icon: 'mdi-chart-bar',
         title: '指標介紹',
         type: 'all',
         menu: 'main'
      } 
   },
   {
      name: 'plans',
      path: '/plans',
      component: () => import('../views/Plans'),
      meta: { 
         order: 0,
         icon: 'mdi-format-list-bulleted',
         title: '訂閱方案',
         type: 'all',
         menu: 'main'
      } 
   },
   {
      name: 'watch',
      path: '/watch',
      component: () => import('../views/Watch'),
      meta: { 
         order: 0,
         icon: 'mdi-monitor-cellphone',
         title: '看盤室',
         type: 'user',
         menu: 'main'
      } 
   },
   {
      name: 'confirm-email',
      path: '/confirm-email',
      component: () => import('../views/ConfirmEmail'),
      meta: { 
         order: 0,
         icon: '',
         title: 'Email確認',
         type: 'all',
         menu: 'none'
      } 
   },
];


const guestLinks = [
   {
      name: 'login',
      path: '/login',
      component: () => import('../views/Login'),
      meta: { 
         order: 0,
         icon: '',
         title: '登入',
         type: 'guest',
         menu: 'guest'
      }
   },
   {
      name: 'register',
      path: '/register',
      component: () => import('../views/Register'),
      meta: { 
         order: 0,
         icon: '',
         title: '註冊',
         type: 'guest',
         menu: 'guest'
      }
   },
   {
      name: 'forgot-password',
      path: '/forgot-password',
      component: () => import('../views/ForgotPassword'),
      meta: { 
         order: 0,
         icon: '',
         title: '忘記密碼',
         type: 'guest',
         menu: 'none'
      }
   },
   {
      name: 'reset-password',
      path: '/reset-password',
      component: () => import('../views/ResetPassword'),
      meta: { 
         order: 0,
         icon: '',
         title: '重設密碼',
         type: 'guest',
         menu: 'none'
      }
   },
];

const userLinks = [
   {
      name: 'subscribes',
      path: '/subscribes',
      component: () => import('../views/Subscribes'),
      meta: { 
         order: 0,
         icon: '',
         title: '訂閱紀錄',
         type: 'user',
         menu: 'user'
      }
   },
   {
      name: 'change-password',
      path: '/change-password',
      component: () => import('../views/ChangePassword'),
      meta: { 
         order: 0,
         icon: '',
         title: '變更密碼',
         type: 'user',
         menu: 'user'
      }
   },
];

let appRoutes = links.concat(guestLinks).concat(userLinks);

for(let i = 0; i < appRoutes.length; i++){
   appRoutes[i].meta.order = i;
}

export default appRoutes;