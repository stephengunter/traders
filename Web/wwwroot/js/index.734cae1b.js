(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],f=0,l=[];f<i.length;f++)o=i[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={index:0},a={index:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-102c9062":"43ec20db","chunk-2d0c42be":"a13d4ca0","chunk-313e987d":"4e6b5f6d","chunk-1b636d8f":"dcdacc83","chunk-2d217563":"2143c1f0","chunk-2d21b318":"59a639fe","chunk-2d21e9c3":"019bc14f","chunk-2e535d0f":"a3f7ff95","chunk-3846be4e":"202a5c45","chunk-3afa99a8":"37869da7","chunk-49c11b3a":"c3c47d32"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-102c9062":1,"chunk-313e987d":1,"chunk-1b636d8f":1,"chunk-2e535d0f":1,"chunk-3846be4e":1,"chunk-3afa99a8":1,"chunk-49c11b3a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-102c9062":"b1ecc611","chunk-2d0c42be":"31d6cfe0","chunk-313e987d":"c0387903","chunk-1b636d8f":"e9ebb65c","chunk-2d217563":"31d6cfe0","chunk-2d21b318":"31d6cfe0","chunk-2d21e9c3":"31d6cfe0","chunk-2e535d0f":"bb9c6096","chunk-3846be4e":"6be33f1b","chunk-3afa99a8":"6be33f1b","chunk-49c11b3a":"77fef66f"}[t]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===a))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],f=u.getAttribute("data-href");if(f===r||f===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.request=r,delete o[t],d.parentNode.removeChild(d),n(c)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=c);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=i(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("303a")},"0feb":function(t,e,n){"use strict";var r=n("d4ec"),o=n("bee2"),a=function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"resolveErrorData",value:function(t){return console.log(t),t&&t.status&&400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}}]),t}();e["a"]=a},"270f":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("ee97"),o=n("a49b"),a="".concat(o["b"],"/auth"),c={refreshToken:function(t){var e="".concat(a,"/RefreshToken"),n="post";return r["a"].submit(n,e,t)},login:function(t){var e="".concat(a,"/login"),n="post";return r["a"].submit(n,e,t)}};e["a"]=c},"302c":function(t,e,n){"use strict";n("ac6a"),n("456d");var r=n("d4ec"),o=n("bee2"),a=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(o["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e["a"]=a},"303a":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("f6d6");var r=n("2b0e"),o=n("9062"),a=n.n(o),c=(n("e40d"),n("d1e7"),n("bb71"));n("da64");r["default"].use(c["a"],{iconfont:"md"});n("ae60");var i=n("4f76"),s=n.n(i);r["default"].use(s.a);for(var u=n("8c4f"),f=[{name:"auth",path:"/auth",component:function(){return n.e("chunk-2d0c42be").then(n.bind(null,"3a60"))},meta:{order:0,icon:"",title:"",type:"all",menu:!1}},{name:"home",path:"/",component:function(){return n.e("chunk-49c11b3a").then(n.bind(null,"76bf"))},meta:{order:0,icon:"",title:"",type:"all",menu:!1}},{name:"strategies",path:"/strategies",component:function(){return n.e("chunk-3afa99a8").then(n.bind(null,"bfbc"))},meta:{order:0,icon:"stars",title:"策略介紹",type:"all",menu:!0}},{name:"confirm-email",path:"/confirm-email",component:function(){return n.e("chunk-102c9062").then(n.bind(null,"5b6e"))},meta:{order:0,icon:"",title:"Email確認",type:"all",menu:!1}}],l=[{name:"login",path:"/login",component:function(){return Promise.all([n.e("chunk-313e987d"),n.e("chunk-2e535d0f")]).then(n.bind(null,"8457"))},meta:{order:0,icon:"",title:"登入",type:"guest",menu:!0}},{name:"register",path:"/register",component:function(){return Promise.all([n.e("chunk-313e987d"),n.e("chunk-1b636d8f")]).then(n.bind(null,"0251"))},meta:{order:0,icon:"",title:"註冊",type:"guest",menu:!1}},{name:"forgot-password",path:"/forgot-password",component:function(){return Promise.all([n.e("chunk-313e987d"),n.e("chunk-2d217563")]).then(n.bind(null,"c5fa"))},meta:{order:0,icon:"",title:"忘記密碼",type:"guest",menu:!1}},{name:"reset-password",path:"/reset-password",component:function(){return Promise.all([n.e("chunk-313e987d"),n.e("chunk-2d21b318")]).then(n.bind(null,"bf75"))},meta:{order:0,icon:"",title:"重設密碼",type:"guest",menu:!1}}],d=[{name:"subscribes",path:"/subscribes",component:function(){return n.e("chunk-3846be4e").then(n.bind(null,"1cd1"))},meta:{order:0,icon:"",title:"訂閱紀錄",type:"user",menu:!0}},{name:"change-password",path:"/change-password",component:function(){return Promise.all([n.e("chunk-313e987d"),n.e("chunk-2d21e9c3")]).then(n.bind(null,"d5fb"))},meta:{order:0,icon:"",title:"變更密碼",type:"user",menu:!0}}],m=f.concat(l).concat(d),h=0;h<m.length;h++)m[h].meta.order=h;var b=m;r["default"].use(u["a"]);var v,p,k=new u["a"]({routes:b}),j=n("2f62"),g=n("ade3"),y="setLoading",w="logOut",_="setAuth",T="setUser",O="setError",P="clearError",x={loading:!1},E=Object(g["a"])({},y,function(t,e){t.loading=e}),C={state:x,mutations:E},L=(n("673e"),n("04e1")),V=n.n(L),$=n("ee97"),z=n("5e4c"),A=n("302c"),B=n("0feb"),M=n("270f"),S="oauth",I={fbLogin:function(t){var e="".concat(S,"/facebook"),n="post";return new Promise(function(r,o){axios[n](e,{token:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},googleLogin:function(t){var e="".concat(S,"/google"),n="post";return new Promise(function(r,o){axios[n](e,{token:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},register:function(t){var e="".concat(S,"/register"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},D=I,U="account",q={register:function(t){var e=U,n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},sendConfirmEmail:function(t){var e="".concat(U,"/SendConfirmEmail"),n="post";return new Promise(function(r,o){axios[n](e,{email:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},confirmEmail:function(t){var e="".concat(U,"/ConfirmEmail"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},N=q,R="password",F={forgot:function(t){var e="".concat(R,"/forgot"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},reset:function(t){var e="".concat(R,"/reset"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},change:function(t){var e="".concat(R,"/change"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},H=F,W=n("c41f"),J={errors:new A["a"],user:{},isAuthenticated:!!z["a"].getToken()},Q={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},K=(v={},Object(g["a"])(v,W["g"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n){M["a"].login(e).then(function(e){t.commit(_,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(y,!1),n(1)}).catch(function(e){t.commit(y,!1);var r=B["a"].resolveErrorData(e);r?r.hasOwnProperty("email_confirm")?n(0):t.commit(O,r):Bus.$emit("errors",e)})})}),Object(g["a"])(v,W["d"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n){D.fbLogin(e).then(function(e){e.accessToken?(t.commit(_,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(y,!1),n(null)):(t.commit(y,!1),n(e))}).catch(function(e){t.commit(y,!1);var n=B["a"].resolveErrorData(e);n?t.commit(O,n):Bus.$emit("errors",e)})})}),Object(g["a"])(v,W["f"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n){D.googleLogin(e).then(function(e){e.accessToken?(t.commit(_,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(y,!1),n(null)):(t.commit(y,!1),n(e))}).catch(function(e){t.commit(y,!1);var n=B["a"].resolveErrorData(e);n?t.commit(O,n):Bus.$emit("errors",e)})})}),Object(g["a"])(v,W["i"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n){D.register(e).then(function(e){t.commit(_,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(y,!1),n(1)}).catch(function(e){t.commit(y,!1),Bus.$emit("errors",e)})})}),Object(g["a"])(v,W["h"],function(t){t.commit(w)}),Object(g["a"])(v,W["k"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n){N.register(e).then(function(){t.commit(y,!1),n(!0)}).catch(function(e){t.commit(y,!1);var n=B["a"].resolveErrorData(e);n?t.commit(O,n):Bus.$emit("errors",e)})})}),Object(g["a"])(v,W["m"],function(t,e){return new Promise(function(t){N.sendConfirmEmail(e).then(function(){t(!0)}).catch(function(t){Bus.$emit("errors",t)})})}),Object(g["a"])(v,W["c"],function(t,e){return new Promise(function(t){N.confirmEmail(e).then(function(){t(!0)}).catch(function(e){var n=B["a"].resolveErrorData(e);n?t(!1):Bus.$emit("errors",e)})})}),Object(g["a"])(v,W["b"],function(t){return new Promise(function(e){var n=z["a"].getToken();if(n){$["a"].setHeader();var r=V()(n);t.commit(T,{id:r.id,name:r.sub}),e(!0)}else t.commit(w),e(!1)})}),Object(g["a"])(v,W["j"],function(t){return new Promise(function(e){var n=z["a"].getToken(),r=z["a"].getRefreshToken();n&&r?(t.commit(y,!0),M["a"].refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(_,{token:n.accessToken.token,refreshToken:n.refreshToken}),t.commit(y,!1),e(!0)}).catch(function(n){t.commit(y,!1),t.commit(w),e(!1)})):(t.commit(w),e(!1))})}),Object(g["a"])(v,W["e"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n,r){H.forgot(e).then(function(){t.commit(y,!1),n(!0)}).catch(function(e){t.commit(y,!1);var n=B["a"].resolveErrorData(e);n?t.commit(O,n):(Bus.$emit("errors",e),r())})})}),Object(g["a"])(v,W["l"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n,r){H.reset(e).then(function(){t.commit(y,!1),n(!0)}).catch(function(e){t.commit(y,!1);var n=B["a"].resolveErrorData(e);n?t.commit(O,n):(Bus.$emit("errors",e),r())})})}),Object(g["a"])(v,W["a"],function(t,e){return t.commit(P),t.commit(y,!0),new Promise(function(n,r){H.change(e).then(function(){t.commit(y,!1),n(!0)}).catch(function(e){t.commit(y,!1);var n=B["a"].resolveErrorData(e);n?t.commit(O,n):(Bus.$emit("errors",e),r())})})}),v),G=(p={},Object(g["a"])(p,O,function(t,e){t.errors.record(e)}),Object(g["a"])(p,P,function(t){t.errors.clear()}),Object(g["a"])(p,T,function(t,e){t.user=e}),Object(g["a"])(p,_,function(t,e){z["a"].saveToken(e.token,e.refreshToken);var n=V()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0,t.errors=new A["a"]}),Object(g["a"])(p,w,function(t){t.isAuthenticated=!1,t.user={},t.errors=new A["a"],z["a"].destroyToken()}),p),X={state:J,actions:K,mutations:G,getters:Q};r["default"].use(j["a"]);var Y=new j["a"].Store({loading:!1,modules:{app:C,auth:X}}),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("loading",{attrs:{active:t.loading},on:{"update:active":function(e){t.loading=e}}}),n("RwvHeader"),n("v-content",{staticClass:"main-content"},[n("router-view")],1),n("RwvFooter"),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"errIcon"},[t._v("warning")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},tt=[],et=n("be94"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"site-title cn"},[t._v("交易者")]),n("v-icon",[t._v("bar_chart")]),n("span",{staticClass:"site-sub-title cn"},[t._v("台指當沖策略平台")])],1),n("v-spacer"),t.isAuthenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.links,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t.isAuthenticated?n("UserMenu",{attrs:{user:t.currentUser,items:t.userLinks},on:{selected:t.link}}):t._e()],2):n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.links,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._l(t.guestLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[t._v(" \n       "+t._s(e.title)+"\n      ")])})],2),n("MobileMenu",{attrs:{auth:t.isAuthenticated,user:t.currentUser,links:t.links,user_links:t.userLinks,guest_links:t.guestLinks},on:{selected:t.link}})],1)},rt=[],ot=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""}},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?t._e():n("v-list",t._l(t.guest_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.user.name))])],1)],1)],1):t._e(),t.auth?n("v-list",[t._l(t.user_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),n("v-list-tile",{on:{click:function(e){e.preventDefault(),t.select("logout")}}},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],2):t._e()],1)}),at=[],ct={name:"MobileMenu",props:{links:{type:Array,default:null},auth:{type:Boolean,default:!1},user:{type:Object,default:null},guest_links:{type:Array,default:null},user_links:{type:Array,default:null}},data:function(){return{}},methods:{select:function(t){this.$emit("selected",t)}}},it=ct,st=(n("dfbd"),n("2877")),ut=n("6544"),ft=n.n(ut),lt=n("132d"),dt=n("8860"),mt=n("ba95"),ht=n("40fe"),bt=n("5d23"),vt=n("e449"),pt=n("706c"),kt=Object(st["a"])(it,ot,at,!1,null,"6a42c99f",null);kt.options.__file="Mobile.vue";var jt=kt.exports;ft()(kt,{VIcon:lt["a"],VList:dt["a"],VListTile:mt["a"],VListTileAction:ht["a"],VListTileContent:bt["a"],VListTileTitle:bt["b"],VMenu:vt["a"],VToolbarSideIcon:pt["a"]});var gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",staticStyle:{"min-width":"48px"},attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("div",{staticClass:"hidden-sm-and-down"},[n("span",{staticClass:"mr-1"},[t._v(t._s(t.user.name))])]),n("v-icon",[t._v("arrow_drop_down")])],1),n("v-list",[t._l(t.items,function(e,r){return n("v-list-tile",{key:r,on:{click:function(n){t.action(e.name)}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)}),n("v-list-tile",{on:{click:function(e){t.action("logout")}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],2)],1)},yt=[],wt={name:"UserMenu",props:{items:{type:Array,default:null},user:{type:Object,default:null}},methods:{action:function(t){this.$emit("selected",t)}}},_t=wt,Tt=(n("3bc5"),n("8336")),Ot=Object(st["a"])(_t,gt,yt,!1,null,"63185934",null);Ot.options.__file="User.vue";var Pt=Ot.exports;ft()(Ot,{VBtn:Tt["a"],VIcon:lt["a"],VList:dt["a"],VListTile:mt["a"],VListTileTitle:bt["b"],VMenu:vt["a"]});var xt={name:"RwvHeader",components:{MobileMenu:jt,UserMenu:Pt},computed:Object(et["a"])({},Object(j["b"])(["currentUser","isAuthenticated"]),{routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return t.meta.menu}):[]},links:function(){var t=this,e=this.routes.filter(function(t){return"all"===t.meta.type});return e.map(function(e){return t.mapLink(e)})},guestLinks:function(){var t=this,e=this.routes.filter(function(t){return"guest"===t.meta.type});return e.map(function(e){return t.mapLink(e)})},userLinks:function(){var t=this,e=this.routes.filter(function(t){return"user"===t.meta.type});return e.map(function(e){return t.mapLink(e)})}}),data:function(){return{}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},link:function(t){"logout"===t?this.logout():this.$router.push({name:t})},logout:function(){var t=this;this.$store.dispatch(W["h"]).then(function(){return t.$router.push({name:"home"})})}}},Et=xt,Ct=(n("8868"),n("9910")),Lt=n("71d9"),Vt=n("2a7f"),$t=Object(st["a"])(Et,nt,rt,!1,null,"719635f8",null);$t.options.__file="TheHeader.vue";var zt=$t.exports;ft()($t,{VBtn:Tt["a"],VIcon:lt["a"],VSpacer:Ct["a"],VToolbar:Lt["a"],VToolbarItems:Vt["a"],VToolbarTitle:Vt["b"]});var At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n      ©2018 — "),n("strong",[n("span",{staticClass:"cn"},[t._v("交易者")]),t._v(" traders.com.tw")])])],1)],1)},Bt=[],Mt={name:"RwvFooter"},St=Mt,It=n("0e8f"),Dt=n("553a"),Ut=n("a722"),qt=Object(st["a"])(St,At,Bt,!1,null,null,null);qt.options.__file="TheFooter.vue";var Nt=qt.exports;ft()(qt,{VFlex:It["a"],VFooter:Dt["a"],VLayout:Ut["a"]});var Rt={name:"App",components:{RwvHeader:zt,RwvFooter:Nt},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},date:""}},computed:Object(et["a"])({},Object(j["c"])({loading:function(t){return t.app.loading}})),created:function(){Bus.$on("errors",this.onError)},methods:{onError:function(t){if(!t)return this.err.msg="伺服器無回應. 請稍候再試",void(this.err.show=!0);t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})}}},Ft=Rt,Ht=(n("64c1"),n("7496")),Wt=n("12b2"),Jt=n("549c"),Qt=n("169a"),Kt=Object(st["a"])(Ft,Z,tt,!1,null,"0f706dc4",null);Kt.options.__file="App.vue";var Gt=Kt.exports;ft()(Kt,{VApp:Ht["a"],VCardTitle:Wt["a"],VContent:Jt["a"],VDialog:Qt["a"],VIcon:lt["a"]}),window.Bus=new r["default"]({}),r["default"].component("loading",a.a),k.beforeEach(function(t,e,n){Y.dispatch(W["b"]).then(function(e){var r="user"===t.meta.type,o="guest"===t.meta.type,a="all"===t.meta.type;if(e){var c=z["a"].tokenStatus();return-1===c?a?n():n({path:"/auth",query:{returnUrl:t.path}}):0===c?a?n():n(o?{name:"home"}:{path:"/auth",query:{returnUrl:t.path}}):o?n({name:"home"}):n()}return r?n({path:"/login",query:{returnUrl:t.path}}):n()})}),r["default"].config.productionTip=!1,new r["default"]({router:k,store:Y,render:function(t){return t(Gt)}}).$mount("#app")},"3bc5":function(t,e,n){"use strict";var r=n("b6cc"),o=n.n(r);o.a},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4678"},"5e4c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("04e1"),o=n.n(r),a=n("c1df"),c=n.n(a),i="id_token",s="refresh_token",u=function(){return window.localStorage.getItem(i)},f=function(){return window.localStorage.getItem(s)},l=function(t,e){window.localStorage.setItem(i,t),window.localStorage.setItem(s,e)},d=function(){window.localStorage.removeItem(i),window.localStorage.removeItem(s)},m=function(){var t=window.localStorage.getItem(i);if(!t)return-1;var e=o()(t),n=c.a.unix(e.exp),r=c.a.utc(),a=n.diff(r,"minutes");return a<=0?-1:a<30?0:1};e["a"]={getToken:u,getRefreshToken:f,saveToken:l,destroyToken:d,tokenStatus:m}},"64c1":function(t,e,n){"use strict";var r=n("bf78"),o=n.n(r);o.a},8868:function(t,e,n){"use strict";var r=n("d7cf"),o=n.n(r);o.a},9927:function(t,e,n){},a49b:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c});n("cadf"),n("551c"),n("097d");var r="http://35.221.177.4",o="".concat(r,"/#/login"),a="".concat(r,"/api"),c="".concat(r,"/admin"),i={url:"https://www.facebook.com",id:"285921658793697",secret:"e21467494d13abf65a60e05b04de5f44",version:"v3.2",page:"/oauth/facebook"};"".concat(i.url,"/").concat(i.version,"/dialog/oauth?&response_type=token&display=popup&client_id=").concat(i.id),"&display=popup&redirect_uri=".concat(r).concat(i.page,"&scope=email")},ae60:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("7bb1"),a=n("427f"),c=n.n(a);r["default"].use(o["b"]),o["a"].localize("zh_TW",c.a);var i={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機"}}};o["a"].localize(i),o["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}})},b6cc:function(t,e,n){},bf78:function(t,e,n){},c41f:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"h",function(){return c}),n.d(e,"k",function(){return i}),n.d(e,"i",function(){return s}),n.d(e,"m",function(){return u}),n.d(e,"c",function(){return f}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"l",function(){return m}),n.d(e,"b",function(){return h}),n.d(e,"j",function(){return b});n("cadf"),n("551c"),n("097d");var r="fbLogin",o="googleLogin",a="login",c="logout",i="register",s="oAuthRegister",u="sendConfirmEmail",f="confirmEmail",l="changePassword",d="forgotPassword",m="restPassword",h="checkAuth",b="refreshToken"},d7cf:function(t,e,n){},dfbd:function(t,e,n){"use strict";var r=n("9927"),o=n.n(r);o.a},ee97:function(t,e,n){"use strict";var r=n("bc3a"),o=n.n(r),a=n("5e4c"),c=n("0feb"),i={setHeader:function(){var t=a["a"].getToken();t||(t=""),o.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},fetch:function(t,e){return e&&(t=c["a"].buildQuery(t,e)),new Promise(function(e,n){o.a.get(t).then(function(t){e(t.data)}).catch(function(t){n(t)})})},submit:function(t,e,n){return new Promise(function(r,a){o.a[t](e,n).then(function(t){r(t.data)}).catch(function(t){a(t.response)})})}};e["a"]=i},f6d6:function(t,e,n){}});
//# sourceMappingURL=index.734cae1b.js.map