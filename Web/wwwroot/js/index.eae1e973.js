(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={index:0},a={index:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1d6d029e":"efbc4438","chunk-2d0af7b2":"6bb6a1d9","chunk-2d0db485":"59dcc7c6","chunk-2d20772a":"a6f43c30","chunk-3caf9f63":"a7223c63","chunk-76cad0d0":"a175f7b0","chunk-255c1c1e":"beb6a23e","chunk-28386880":"6a6b8b3d","chunk-3c2486d6":"37439234","chunk-8ce53e34":"3b728729"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1d6d029e":1,"chunk-3caf9f63":1,"chunk-76cad0d0":1,"chunk-255c1c1e":1,"chunk-28386880":1,"chunk-3c2486d6":1,"chunk-8ce53e34":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1d6d029e":"97634786","chunk-2d0af7b2":"31d6cfe0","chunk-2d0db485":"31d6cfe0","chunk-2d20772a":"31d6cfe0","chunk-3caf9f63":"e9ebb65c","chunk-76cad0d0":"b7d78d59","chunk-255c1c1e":"6be33f1b","chunk-28386880":"6be33f1b","chunk-3c2486d6":"5d4e95f5","chunk-8ce53e34":"b1ecc611"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("2034")},"0d0f":function(t,e,n){"use strict";var r=n("47a7"),o=n.n(r);o.a},2034:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("bbf0");var r=n("d4ec"),o=n("bee2"),a=function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"resolveErrorData",value:function(t){return 400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}}]),t}(),s=a,i=n("2b0e"),c=n("9062"),u=n.n(c),l=(n("e40d"),n("e815")),f=n("04e1"),d=n.n(f),m=n("c1df"),h=n.n(m),b="id_token",p="refresh_token",v=function(){return window.localStorage.getItem(b)},k=function(){return window.localStorage.getItem(p)},j=function(t,e){axios.defaults.headers.common.authorization="Bearer ".concat(t),window.localStorage.setItem(b,t),window.localStorage.setItem(p,e)},g=function(){axios.defaults.headers.common.authorization="",window.localStorage.removeItem(b),window.localStorage.removeItem(p)},w=function(){var t=window.localStorage.getItem(b);if(!t)return-1;var e=d()(t),n=h.a.unix(e.exp),r=h.a.utc(),o=n.diff(r,"minutes");return o<=0?-1:o<30?0:1},y={getToken:v,getRefreshToken:k,saveToken:j,destroyToken:g,tokenStatus:w},_=(n("d1e7"),n("bb71"));n("da64");i["a"].use(_["a"],{iconfont:"md"});var T=n("7bb1"),O=n("427f"),x=n.n(O);i["a"].use(T["b"]),T["a"].localize("zh_TW",x.a);var P={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機"}}};T["a"].localize(P),T["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}});var C=n("4f76"),E=n.n(C);i["a"].use(E.a);for(var z=n("8c4f"),L=[{name:"home",path:"/",component:function(){return n.e("chunk-3c2486d6").then(n.bind(null,"8a51"))},meta:{order:0,icon:"",title:"",type:"all",menu:!1}},{name:"strategies",path:"/strategies",component:function(){return n.e("chunk-255c1c1e").then(n.bind(null,"0b75"))},meta:{order:0,icon:"stars",title:"策略介紹",type:"all",menu:!0}},{name:"confirm-email",path:"/confirm-email",component:function(){return n.e("chunk-8ce53e34").then(n.bind(null,"0699"))},meta:{order:0,icon:"",title:"Email確認",type:"all",menu:!1}}],V=[{name:"login",path:"/login",component:function(){return Promise.all([n.e("chunk-1d6d029e"),n.e("chunk-76cad0d0")]).then(n.bind(null,"50b5"))},meta:{order:0,icon:"",title:"登入",type:"guest",menu:!0}},{name:"register",path:"/register",component:function(){return Promise.all([n.e("chunk-1d6d029e"),n.e("chunk-3caf9f63")]).then(n.bind(null,"a5a8"))},meta:{order:0,icon:"",title:"註冊",type:"guest",menu:!1}},{name:"forgot-password",path:"/forgot-password",component:function(){return Promise.all([n.e("chunk-1d6d029e"),n.e("chunk-2d0db485")]).then(n.bind(null,"6ecc"))},meta:{order:0,icon:"",title:"忘記密碼",type:"guest",menu:!1}},{name:"reset-password",path:"/reset-password",component:function(){return Promise.all([n.e("chunk-1d6d029e"),n.e("chunk-2d0af7b2")]).then(n.bind(null,"0f06"))},meta:{order:0,icon:"",title:"重設密碼",type:"guest",menu:!1}}],$=[{name:"subscribes",path:"/subscribes",component:function(){return n.e("chunk-28386880").then(n.bind(null,"da4e"))},meta:{order:0,icon:"",title:"訂閱紀錄",type:"user",menu:!0}},{name:"change-password",path:"/change-password",component:function(){return Promise.all([n.e("chunk-1d6d029e"),n.e("chunk-2d20772a")]).then(n.bind(null,"a126"))},meta:{order:0,icon:"",title:"變更密碼",type:"user",menu:!0}}],A=L.concat(V).concat($),B=0;B<A.length;B++)A[B].meta.order=B;var S=A;i["a"].use(z["a"]);var M,I,U=new z["a"]({routes:S}),q=n("2f62"),R=n("ade3"),N="setLoading",F="logOut",D="setAuth",H="setUser",W="setError",J="clearError",X={loading:!1},K=Object(R["a"])({},N,function(t,e){t.loading=e}),Q={state:X,mutations:K},G=(n("673e"),"auth"),Y={login:function(t){var e="".concat(G,"/login"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},refreshToken:function(t){var e="".concat(G,"/RefreshToken"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},Z=Y,tt="oauth",et={fbLogin:function(t){var e="".concat(tt,"/facebook"),n="post";return new Promise(function(r,o){axios[n](e,{token:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},nt=et,rt="account",ot={register:function(t){var e=rt,n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},sendConfirmEmail:function(t){var e="".concat(rt,"/SendConfirmEmail"),n="post";return new Promise(function(r,o){axios[n](e,{email:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},confirmEmail:function(t){var e="".concat(rt,"/ConfirmEmail"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},at=ot,st="password",it={forgot:function(t){var e="".concat(st,"/forgot"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},reset:function(t){var e="".concat(st,"/reset"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},change:function(t){var e="".concat(st,"/change"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},ct=it,ut=(n("ac6a"),n("456d"),function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(o["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}()),lt=ut,ft=n("bf31"),dt={errors:new lt,user:{},isAuthenticated:!!y.getToken()},mt={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},ht=(M={},Object(R["a"])(M,ft["f"],function(t,e){return t.commit(J),t.commit(N,!0),new Promise(function(n){Z.login(e).then(function(e){t.commit(D,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(N,!1),n(1)}).catch(function(e){t.commit(N,!1),400===e.status?e.data.hasOwnProperty("email_confirm")?n(0):t.commit(W,e.data):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["d"],function(t,e){return t.commit(J),t.commit(N,!0),new Promise(function(n){nt.fbLogin(e).then(function(e){e.accessToken?(t.commit(D,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(N,!1),n(null)):(t.commit(N,!1),n(e))}).catch(function(e){t.commit(N,!1),e.status&&400===e.status?t.commit(W,e.data):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["g"],function(t){t.commit(F)}),Object(R["a"])(M,ft["i"],function(t,e){return t.commit(J),t.commit(N,!0),new Promise(function(n){at.register(e).then(function(){t.commit(N,!1),n(!0)}).catch(function(e){t.commit(N,!1),400===e.status?t.commit(W,e.data):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["k"],function(t,e){return new Promise(function(t){at.sendConfirmEmail(e).then(function(){t(!0)}).catch(function(t){Bus.$emit("errors",t)})})}),Object(R["a"])(M,ft["c"],function(t,e){return new Promise(function(t){at.confirmEmail(e).then(function(){t(!0)}).catch(function(e){400===e.status?t(!1):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["b"],function(t){return new Promise(function(e){var n=y.getToken();if(n){var r=d()(n);t.commit(H,{id:r.id,name:r.sub}),e(!0)}else t.commit(F),e(!1)})}),Object(R["a"])(M,ft["h"],function(t){return new Promise(function(e){var n=y.getToken(),r=y.getRefreshToken();n&&r?(t.commit(N,!0),Z.refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(D,{token:n.accessToken.token,refreshToken:n.refreshToken}),t.commit(N,!1),e(!0)}).catch(function(){t.commit(N,!1),t.commit(F),e(!1)})):(t.commit(F),e(!1))})}),Object(R["a"])(M,ft["e"],function(t,e){return t.commit(J),t.commit(N,!0),new Promise(function(n){ct.forgot(e).then(function(){t.commit(N,!1),n(!0)}).catch(function(e){t.commit(N,!1),400===e.status?t.commit(W,e.data):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["j"],function(t,e){return t.commit(J),t.commit(N,!0),new Promise(function(n){ct.reset(e).then(function(){t.commit(N,!1),n(!0)}).catch(function(e){t.commit(N,!1),400===e.status?t.commit(W,e.data):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["a"],function(t,e){return t.commit(J),t.commit(N,!0),new Promise(function(n){ct.change(e).then(function(){t.commit(N,!1),n(!0)}).catch(function(e){t.commit(N,!1),400===e.status?t.commit(W,e.data):Bus.$emit("errors",e)})})}),Object(R["a"])(M,ft["l"],function(t,e){var n=e.email,r=e.username,o=e.password,a=e.image,s=e.bio,i={email:n,username:r,bio:s,image:a};return o&&(i.password=o),ApiService.put("user",i).then(function(e){var n=e.data;return t.commit(D,n.user),n})}),M),bt=(I={},Object(R["a"])(I,W,function(t,e){t.errors.record(e)}),Object(R["a"])(I,J,function(t){t.errors.clear()}),Object(R["a"])(I,H,function(t,e){t.user=e}),Object(R["a"])(I,D,function(t,e){y.saveToken(e.token,e.refreshToken);var n=d()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0,t.errors=new lt}),Object(R["a"])(I,F,function(t){t.isAuthenticated=!1,t.user={},t.errors=new lt,y.destroyToken()}),I),pt={state:dt,actions:ht,mutations:bt,getters:mt};i["a"].use(q["a"]);var vt=new q["a"].Store({loading:!1,modules:{app:Q,auth:pt}}),kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("loading",{attrs:{active:t.loading},on:{"update:active":function(e){t.loading=e}}}),n("RwvHeader"),n("v-content",{staticClass:"main-content"},[n("router-view")],1),n("RwvFooter"),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"errIcon"},[t._v("warning")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},jt=[],gt=n("be94"),wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"site-title cn"},[t._v("交易者")]),n("v-icon",[t._v("bar_chart")]),n("span",{staticClass:"site-sub-title cn"},[t._v("台指當沖策略平台")])],1),n("v-spacer"),t.isAuthenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.links,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t.isAuthenticated?n("UserMenu",{attrs:{user:t.currentUser,items:t.userLinks},on:{selected:t.link}}):t._e()],2):n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.links,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._l(t.guestLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[t._v(" \n       "+t._s(e.title)+"\n      ")])})],2),n("MobileMenu",{attrs:{auth:t.isAuthenticated,user:t.currentUser,links:t.links,user_links:t.userLinks,guest_links:t.guestLinks},on:{selected:t.link}})],1)},yt=[],_t=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""}},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?t._e():n("v-list",t._l(t.guest_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.user.name))])],1)],1)],1):t._e(),t.auth?n("v-list",[t._l(t.user_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),n("v-list-tile",{on:{click:function(e){e.preventDefault(),t.select("logout")}}},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],2):t._e()],1)}),Tt=[],Ot={name:"MobileMenu",props:{links:{type:Array,default:null},auth:{type:Boolean,default:!1},user:{type:Object,default:null},guest_links:{type:Array,default:null},user_links:{type:Array,default:null}},data:function(){return{}},methods:{select:function(t){this.$emit("selected",t)}}},xt=Ot,Pt=(n("7a63"),n("2877")),Ct=n("6544"),Et=n.n(Ct),zt=n("132d"),Lt=n("8860"),Vt=n("ba95"),$t=n("40fe"),At=n("5d23"),Bt=n("e449"),St=n("706c"),Mt=Object(Pt["a"])(xt,_t,Tt,!1,null,"4551626c",null);Mt.options.__file="Mobile.vue";var It=Mt.exports;Et()(Mt,{VIcon:zt["a"],VList:Lt["a"],VListTile:Vt["a"],VListTileAction:$t["a"],VListTileContent:At["a"],VListTileTitle:At["b"],VMenu:Bt["a"],VToolbarSideIcon:St["a"]});var Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",staticStyle:{"min-width":"48px"},attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("div",{staticClass:"hidden-sm-and-down"},[n("span",{staticClass:"mr-1"},[t._v(t._s(t.user.name))])]),n("v-icon",[t._v("arrow_drop_down")])],1),n("v-list",[t._l(t.items,function(e,r){return n("v-list-tile",{key:r,on:{click:function(n){t.action(e.name)}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)}),n("v-list-tile",{on:{click:function(e){t.action("logout")}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],2)],1)},qt=[],Rt={name:"UserMenu",props:{items:{type:Array,default:null},user:{type:Object,default:null}},methods:{action:function(t){this.$emit("selected",t)}}},Nt=Rt,Ft=(n("53c2"),n("8336")),Dt=Object(Pt["a"])(Nt,Ut,qt,!1,null,"028f7411",null);Dt.options.__file="User.vue";var Ht=Dt.exports;Et()(Dt,{VBtn:Ft["a"],VIcon:zt["a"],VList:Lt["a"],VListTile:Vt["a"],VListTileTitle:At["b"],VMenu:Bt["a"]});var Wt={name:"RwvHeader",components:{MobileMenu:It,UserMenu:Ht},computed:Object(gt["a"])({},Object(q["b"])(["currentUser","isAuthenticated"]),{routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return t.meta.menu}):[]},links:function(){var t=this,e=this.routes.filter(function(t){return"all"===t.meta.type});return e.map(function(e){return t.mapLink(e)})},guestLinks:function(){var t=this,e=this.routes.filter(function(t){return"guest"===t.meta.type});return e.map(function(e){return t.mapLink(e)})},userLinks:function(){var t=this,e=this.routes.filter(function(t){return"user"===t.meta.type});return e.map(function(e){return t.mapLink(e)})}}),data:function(){return{}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},link:function(t){"logout"===t?this.logout():this.$router.push({name:t})},logout:function(){var t=this;this.$store.dispatch(ft["g"]).then(function(){return t.$router.push({name:"home"})})}}},Jt=Wt,Xt=(n("33bf"),n("9910")),Kt=n("71d9"),Qt=n("2a7f"),Gt=Object(Pt["a"])(Jt,wt,yt,!1,null,"252132a2",null);Gt.options.__file="TheHeader.vue";var Yt=Gt.exports;Et()(Gt,{VBtn:Ft["a"],VIcon:zt["a"],VSpacer:Xt["a"],VToolbar:Kt["a"],VToolbarItems:Qt["a"],VToolbarTitle:Qt["b"]});var Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n      ©2018 — "),n("strong",[n("span",{staticClass:"cn"},[t._v("交易者")]),t._v(" traders.com.tw")])])],1)],1)},te=[],ee={name:"RwvFooter"},ne=ee,re=n("0e8f"),oe=n("553a"),ae=n("a722"),se=Object(Pt["a"])(ne,Zt,te,!1,null,null,null);se.options.__file="TheFooter.vue";var ie=se.exports;Et()(se,{VFlex:re["a"],VFooter:oe["a"],VLayout:ae["a"]});var ce={name:"App",components:{RwvHeader:Yt,RwvFooter:ie},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},date:""}},computed:Object(gt["a"])({},Object(q["c"])({loading:function(t){return t.app.loading}})),created:function(){Bus.$on("errors",this.onError)},methods:{onError:function(t){t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})}}},ue=ce,le=(n("0d0f"),n("7496")),fe=n("12b2"),de=n("549c"),me=n("169a"),he=Object(Pt["a"])(ue,kt,jt,!1,null,"512453e0",null);he.options.__file="App.vue";var be=he.exports;Et()(he,{VApp:le["a"],VCardTitle:fe["a"],VContent:de["a"],VDialog:me["a"],VIcon:zt["a"]}),window.Helper=s,i["a"].config.productionTip=!1,i["a"].component("loading",u.a),window.Bus=new i["a"]({}),window.axios=n("bc3a"),window.axios.defaults.baseURL=l["a"],window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var pe=y.getToken();pe&&(window.axios.defaults.headers.common.authorization="Bearer ".concat(pe)),U.beforeEach(function(t,e,n){vt.dispatch(ft["b"]).then(function(e){var r="user"===t.meta.type,o="guest"===t.meta.type,a="all"===t.meta.type;if(!e)return r?n({path:"/login",query:{returnUrl:t.path}}):n();var s=y.tokenStatus();return-1!==s?0===s?(vt.dispatch(ft["h"]).then(function(e){return e?o?n({name:"home"}):n():r?n({path:"/login",query:{returnUrl:t.path}}):n()}),n()):o?n({name:"home"}):n():a?n():void vt.dispatch(ft["h"]).then(function(e){return e?o?n({name:"home"}):n():o?n():n({path:"/login",query:{returnUrl:t.path}})})})}),new i["a"]({router:U,store:vt,render:function(t){return t(be)}}).$mount("#app")},"30a3":function(t,e,n){},"33bf":function(t,e,n){"use strict";var r=n("30a3"),o=n.n(r);o.a},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4678"},"47a7":function(t,e,n){},"53c2":function(t,e,n){"use strict";var r=n("b2f1"),o=n.n(r);o.a},"7a63":function(t,e,n){"use strict";var r=n("c749"),o=n.n(r);o.a},b2f1:function(t,e,n){},bbf0:function(t,e,n){},bf31:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"i",function(){return s}),n.d(e,"k",function(){return i}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"e",function(){return l}),n.d(e,"j",function(){return f}),n.d(e,"b",function(){return d}),n.d(e,"h",function(){return m}),n.d(e,"l",function(){return h});var r="fbLogin",o="login",a="logout",s="register",i="sendConfirmEmail",c="confirmEmail",u="changePassword",l="forgotPassword",f="restPassword",d="checkAuth",m="refreshToken",h="updateUser"},c749:function(t,e,n){},e815:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i});n("cadf"),n("551c"),n("097d");var r="https://localhost:44371",o="".concat(r,"/api"),a={url:"https://www.facebook.com",id:"285921658793697",secret:"e21467494d13abf65a60e05b04de5f44",version:"v3.2",page:"/oauth/facebook"},s="".concat(a.url,"/").concat(a.version,"/dialog/oauth?&response_type=token&display=popup&client_id=").concat(a.id)+"&display=popup&redirect_uri=".concat(r).concat(a.page,"&scope=email"),i={client_id:"753186496069-b926t1274man4v2n2ivplt17nie2ik5o"}}});
//# sourceMappingURL=index.eae1e973.js.map