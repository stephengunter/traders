
const appRoutes = [
   {
      name: 'test',
      path: '/test',
      component: () => import('../views/Test'), 
      meta: { 
         order: 0,
         icon: '',
         title: '',
         menu: false
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
         menu: false
      }        
   },
   {
      name: 'home',
      path: '/',
      component: () => import('../views/Dashboard'), 
      meta: { 
         order: 0,
         icon: 'mdi-view-dashboard',
         title: '總覽',
         menu: true
      }        
   },
   {
      name: 'users',
      path: '/user',
      component: () => import('../views/Users'), 
      meta: { 
         order: 0,
         icon: 'mdi-account',
         title: '會員管理',
         menu: true
      }        
   },
   {
      name: 'stocks',
      path: '/stocks',
      component: () => import('../views/Stocks'), 
      meta: { 
         order: 0,
         icon: 'mdi-compass',
         title: '權值股管理',
         menu: true
      }        
   }
];


for(let i = 0; i < appRoutes.length; i++){
   appRoutes[i].meta.order = i;
}

export default appRoutes;