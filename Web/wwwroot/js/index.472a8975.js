(function(t){function e(e){for(var r,o,a=e[0],s=e[1],u=e[2],f=0,l=[];f<a.length;f++)o=a[f],c[o]&&l.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={index:0},c={index:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c42be":"619c9410","chunk-2d20edf5":"c8f72cf2","chunk-2db4d1fd":"e67d6fd6","chunk-354ce2bc":"5e25a6f9","chunk-594ea634":"0da03f4a","chunk-13c8af60":"be359745","chunk-218cc694":"5fa9cb3d","chunk-0d7a75b6":"15f2ffa7","chunk-2d0a3514":"d7a010ac","chunk-75b4c666":"9e12195e","chunk-5d565600":"ad1bce21","chunk-773d2eeb":"d5be9672","chunk-9b88c080":"8b1894aa","chunk-a527f6bc":"a68f3273","chunk-e2cbf2ba":"56bdacfc"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2db4d1fd":1,"chunk-354ce2bc":1,"chunk-594ea634":1,"chunk-13c8af60":1,"chunk-218cc694":1,"chunk-0d7a75b6":1,"chunk-75b4c666":1,"chunk-5d565600":1,"chunk-773d2eeb":1,"chunk-9b88c080":1,"chunk-a527f6bc":1,"chunk-e2cbf2ba":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c42be":"31d6cfe0","chunk-2d20edf5":"31d6cfe0","chunk-2db4d1fd":"77fef66f","chunk-354ce2bc":"6be33f1b","chunk-594ea634":"af5878fe","chunk-13c8af60":"b1ecc611","chunk-218cc694":"5e5fe350","chunk-0d7a75b6":"87ef3a1f","chunk-2d0a3514":"31d6cfe0","chunk-75b4c666":"e6f7564f","chunk-5d565600":"b54f96e0","chunk-773d2eeb":"b1ecc611","chunk-9b88c080":"b1ecc611","chunk-a527f6bc":"b1ecc611","chunk-e2cbf2ba":"883bebb2"}[t]+".css",c=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],f=u.getAttribute("data-href");if(f===r||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){o[t]=0}));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=c[t]=[e,n]});e.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=a(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}c[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("303a")},"0feb":function(t,e,n){"use strict";var r=n("d4ec"),o=n("bee2"),c=(n("cadf"),n("551c"),n("097d"),function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"resolveErrorData",value:function(t){return console.log(t),t&&t.status&&400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}},{key:"toDateString",value:function(t){if(t=String(t),8!=t.length)return"";var e=t.substring(0,4),n=t.substring(4,6),r=t.substring(6,8);return"".concat(e,"-").concat(n,"-").concat(r)}},{key:"dateNumber",value:function(t){var e=new Date(t),n=this.toNumberString(e.getFullYear()),r=this.toNumberString(e.getMonth()+1),o=this.toNumberString(e.getDate());return"".concat(n).concat(r).concat(o)}},{key:"toNumberString",value:function(t){return t<10?"0"+String(t):String(t)}},{key:"timeString",value:function(t){t=String(t),t.length<6&&(t="0"+t);var e=t.substring(0,2),n=t.substring(2,4),r=t.substring(4,6);return"".concat(e,":").concat(n,":").concat(r)}}]),t}());e["a"]=c},1094:function(t,e,n){},"23a3":function(t,e,n){"use strict";var r=n("1094"),o=n.n(r);o.a},"270f":function(t,e,n){"use strict";var r=n("ee97"),o=n("a49b"),c="".concat(o["b"],"/auth"),i={refreshToken:function(t){var e="".concat(c,"/RefreshToken"),n="post";return r["a"].submit(n,e,t)},login:function(t){var e="".concat(c,"/login"),n="post";return r["a"].submit(n,e,t)}};e["a"]=i},"302c":function(t,e,n){"use strict";n("ac6a"),n("456d");var r=n("d4ec"),o=n("bee2"),c=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(o["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e["a"]=c},"303a":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("f6d6");var r=n("2b0e"),o=n("9062"),c=n.n(o),i=(n("e40d"),n("5363"),n("bb71"));n("da64");r["default"].use(i["a"],{iconfont:"mdi"});n("ae60");var a=n("4f76"),s=n.n(a);r["default"].use(s.a);var u=n("a3ad"),f=n.n(u);r["default"].use(f.a);for(var l=n("8c4f"),d=[{name:"test",path:"/test",component:function(){return n.e("chunk-2d20edf5").then(n.bind(null,"b0e6"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"auth",path:"/auth",component:function(){return n.e("chunk-2d0c42be").then(n.bind(null,"3a60"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"home",path:"/",component:function(){return n.e("chunk-2db4d1fd").then(n.bind(null,"76bf"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"indicators",path:"/indicators",component:function(){return n.e("chunk-e2cbf2ba").then(n.bind(null,"9651"))},meta:{order:0,icon:"mdi-chart-bar",title:"指標介紹",type:"all",menu:"main"}},{name:"watch",path:"/watch",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-75b4c666"),n.e("chunk-5d565600")]).then(n.bind(null,"dbd6"))},meta:{order:0,icon:"mdi-monitor-cellphone",title:"看盤室",type:"user",menu:"main"}},{name:"confirm-email",path:"/confirm-email",component:function(){return n.e("chunk-a527f6bc").then(n.bind(null,"5b6e"))},meta:{order:0,icon:"",title:"Email確認",type:"all",menu:"none"}}],m=[{name:"login",path:"/login",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-218cc694"),n.e("chunk-0d7a75b6")]).then(n.bind(null,"8457"))},meta:{order:0,icon:"",title:"登入",type:"guest",menu:"guest"}},{name:"register",path:"/register",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-218cc694"),n.e("chunk-2d0a3514")]).then(n.bind(null,"0251"))},meta:{order:0,icon:"",title:"註冊",type:"guest",menu:"guest"}},{name:"forgot-password",path:"/forgot-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-9b88c080")]).then(n.bind(null,"c5fa"))},meta:{order:0,icon:"",title:"忘記密碼",type:"guest",menu:"none"}},{name:"reset-password",path:"/reset-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-773d2eeb")]).then(n.bind(null,"bf75"))},meta:{order:0,icon:"",title:"重設密碼",type:"guest",menu:"none"}}],h=[{name:"subscribes",path:"/subscribes",component:function(){return n.e("chunk-354ce2bc").then(n.bind(null,"1cd1"))},meta:{order:0,icon:"",title:"訂閱紀錄",type:"user",menu:"user"}},{name:"change-password",path:"/change-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-13c8af60")]).then(n.bind(null,"d5fb"))},meta:{order:0,icon:"",title:"變更密碼",type:"user",menu:"user"}}],b=d.concat(m).concat(h),v=0;v<b.length;v++)b[v].meta.order=v;var p=b;r["default"].use(l["a"]);var k,g,j,y,w,_,O,T=new l["a"]({routes:p,scrollBehavior:function(){return{x:0,y:0}}}),E=n("2f62"),P=n("ade3"),C=n("be94"),L=n("302c"),S=n("f721"),x={errorList:new L["a"],loading:!1,responsive:!1},z=Object(C["a"])({},x),V=(k={},Object(P["a"])(k,S["i"],function(t,e){t.loading=e}),Object(P["a"])(k,S["k"],function(t,e){t.responsive=e}),Object(P["a"])(k,S["f"],function(t,e){t.errorList.record(e)}),Object(P["a"])(k,S["a"],function(t){t.errorList.clear()}),k),A={state:z,mutations:V},I=(n("673e"),n("04e1")),$=n.n(I),D=n("ee97"),M=n("5e4c"),B=n("0feb"),R=n("270f"),q=n("a49b"),U="".concat(q["b"],"/oauth"),N={fbLogin:function(t){var e="".concat(U,"/facebook"),n="post";return D["a"].submit(n,e,{token:t})},googleLogin:function(t){var e="".concat(U,"/google"),n="post";return D["a"].submit(n,e,{token:t})},register:function(t){var e="".concat(U,"/register"),n="post";return D["a"].submit(n,e,t)}},F=N,H=n("c41f"),W={user:{},isAuthenticated:!!M["a"].getToken()},Q=Object(C["a"])({},W),J={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},K=(g={},Object(P["a"])(g,H["b"],function(t){return new Promise(function(e){var n=M["a"].getToken();if(n){D["a"].setHeader();var r=$()(n);t.commit(S["n"],{id:r.id,name:r.sub}),e(!0)}else t.commit(S["b"]),e(!1)})}),Object(P["a"])(g,H["m"],function(t){return new Promise(function(e){var n=M["a"].getToken(),r=M["a"].getRefreshToken();n&&r?(t.commit(S["i"],!0),R["a"].refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(S["c"],{token:n.accessToken.token,refreshToken:n.refreshToken}),e(!0)}).catch(function(n){t.commit(S["b"]),e(!1)}).finally(function(){t.commit(S["i"],!1)})):(t.commit(S["b"]),e(!1))})}),Object(P["a"])(g,H["j"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){R["a"].login(e).then(function(e){t.commit(S["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(g,H["d"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){F.fbLogin(e).then(function(e){e.accessToken?(t.commit(S["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(null)):n(e)}).catch(function(t){r(t)}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(g,H["g"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){F.googleLogin(e).then(function(e){e.accessToken?(t.commit(S["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(null)):n(e)}).catch(function(t){r(t)}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(g,H["l"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){F.register(e).then(function(e){t.commit(S["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(!0)}).catch(function(t){r(t)}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(g,H["k"],function(t){t.commit(S["b"])}),g),Y=(j={},Object(P["a"])(j,S["n"],function(t,e){t.user=e}),Object(P["a"])(j,S["c"],function(t,e){M["a"].saveToken(e.token,e.refreshToken);var n=$()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0}),Object(P["a"])(j,S["b"],function(t){t.isAuthenticated=!1,t.user={},M["a"].destroyToken()}),j),G={state:Q,actions:K,mutations:Y,getters:J},X="".concat(q["b"],"/password"),Z={initChange:function(){var t="".concat(X,"/change");return D["a"].fetch(t)},change:function(t){var e="".concat(X,"/change"),n="post";return D["a"].submit(n,e,t)},set:function(t){var e="".concat(X,"/set"),n="post";return D["a"].submit(n,e,t)},forgot:function(t){var e="".concat(X,"/forgot"),n="post";return D["a"].submit(n,e,t)},reset:function(t){var e="".concat(X,"/reset"),n="post";return D["a"].submit(n,e,t)}},tt=Z,et=(y={},Object(P["a"])(y,H["h"],function(t){return t.commit(S["i"],!0),new Promise(function(e,n){tt.initChange().then(function(t){e(t)}).catch(function(t){n(t)}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(y,H["q"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){tt.set(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(y,H["a"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){tt.change(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(y,H["f"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){tt.forgot(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(y,H["o"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){tt.reset(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),y),nt={actions:et},rt="".concat(q["b"],"/account"),ot={register:function(t){var e=rt,n="post";return D["a"].submit(n,e,t)},sendConfirmEmail:function(t){var e="".concat(rt,"/SendConfirmEmail"),n="post";return D["a"].submit(n,e,t)},confirmEmail:function(t){var e="".concat(rt,"/ConfirmEmail"),n="post";return D["a"].submit(n,e,t)}},ct=ot,it=(w={},Object(P["a"])(w,H["n"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){ct.register(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(w,H["p"],function(t,e){return t.commit(S["i"],!0),new Promise(function(n,r){ct.sendConfirmEmail(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),Object(P["a"])(w,H["c"],function(t,e){return new Promise(function(n,r){ct.confirmEmail(e).then(function(){n(!0)}).catch(function(t){r(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),w),at={actions:it},st="".concat(q["b"],"/watch"),ut={init:function(){var t=st;return D["a"].fetch(t)}},ft=ut,lt={key:"",date:"",strategy:null,strategies:[]},dt={},mt=Object(P["a"])({},H["i"],function(t){return t.commit(S["i"],!0),new Promise(function(e,n){ft.init().then(function(n){t.commit(S["h"],n.key),t.commit(S["e"],n.date),t.commit(S["m"],n.strategies[0]),t.commit(S["l"],n.strategies),e(!0)}).catch(function(t){n(B["a"].resolveErrorData(t))}).finally(function(){t.commit(S["i"],!1)})})}),ht=(_={},Object(P["a"])(_,S["h"],function(t,e){t.key=e}),Object(P["a"])(_,S["e"],function(t,e){t.date=e}),Object(P["a"])(_,S["m"],function(t,e){t.strategy=e}),Object(P["a"])(_,S["l"],function(t,e){t.strategies=e}),_),bt={state:lt,actions:mt,mutations:ht,getters:dt},vt="".concat(q["b"],"/quotes"),pt={fetch:function(t){var e=vt;return D["a"].fetch(e,t)}},kt=pt,gt={indicators:[],quotes:[],realTime:!1},jt=Object(C["a"])({},gt),yt={},wt=Object(P["a"])({},H["e"],function(t,e){return t.commit(S["j"],!1),t.commit(S["g"],[]),t.commit(S["d"],[]),t.commit(S["i"],!0),new Promise(function(n,r){kt.fetch(e).then(function(e){t.commit(S["j"],e.realTime),t.commit(S["g"],e.indicators),t.commit(S["d"],e.quotes),t.commit(S["i"],!1),n(e.quotes.length)}).catch(function(e){t.commit(S["i"],!1),r(e)})})}),_t=(O={},Object(P["a"])(O,S["j"],function(t,e){t.realTime=e}),Object(P["a"])(O,S["g"],function(t,e){t.indicators=e}),Object(P["a"])(O,S["d"],function(t,e){t.quotes=e}),O),Ot={state:jt,actions:wt,mutations:_t,getters:yt};r["default"].use(E["a"]);var Tt=new E["a"].Store({loading:!1,modules:{app:A,auth:G,password:nt,account:at,watch:bt,chart:Ot}}),Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("loading",{attrs:{active:t.loading},on:{"update:active":function(e){t.loading=e}}}),n("RwvHeader"),n("v-content",{staticClass:"main-content"},[n("router-view")],1),n("RwvFooter"),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"errIcon"},[t._v("mdi-alert")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},Pt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"site-title cn"},[t._v("交易者")]),n("v-icon",{staticClass:"site-icon"},[t._v("mdi-finance")]),n("span",{staticClass:"site-sub-title cn"},[t._v("台指當沖策略平台")])],1),n("v-spacer"),t.isAuthenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.menuLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n         "+t._s(e.title)+"\n      ")],1)}),t.isAuthenticated?n("UserMenu",{attrs:{user:t.currentUser,items:t.userLinks},on:{selected:t.link}}):t._e()],2):n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.menuLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._l(t.guestLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[t._v(" \n       "+t._s(e.title)+"\n      ")])})],2),n("MobileMenu",{attrs:{auth:t.isAuthenticated,user:t.currentUser,links:t.menuLinks,user_links:t.userLinks,guest_links:t.guestLinks},on:{selected:t.link}})],1)},Lt=[],St=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""}},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?t._e():n("v-list",t._l(t.guest_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.user.name))])],1)],1)],1):t._e(),t.auth?n("v-list",[t._l(t.user_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),n("v-list-tile",{on:{click:function(e){e.preventDefault(),t.select("logout")}}},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],2):t._e()],1)}),xt=[],zt={name:"MobileMenu",props:{links:{type:Array,default:null},auth:{type:Boolean,default:!1},user:{type:Object,default:null},guest_links:{type:Array,default:null},user_links:{type:Array,default:null}},data:function(){return{}},methods:{select:function(t){this.$emit("selected",t)}}},Vt=zt,At=(n("a37b"),n("2877")),It=n("6544"),$t=n.n(It),Dt=n("132d"),Mt=n("8860"),Bt=n("ba95"),Rt=n("40fe"),qt=n("5d23"),Ut=n("e449"),Nt=n("706c"),Ft=Object(At["a"])(Vt,St,xt,!1,null,"afa218ca",null);Ft.options.__file="Mobile.vue";var Ht=Ft.exports;$t()(Ft,{VIcon:Dt["a"],VList:Mt["a"],VListTile:Bt["a"],VListTileAction:Rt["a"],VListTileContent:qt["a"],VListTileTitle:qt["b"],VMenu:Ut["a"],VToolbarSideIcon:Nt["a"]});var Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",staticStyle:{"min-width":"48px"},attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("div",{staticClass:"hidden-sm-and-down"},[n("span",[t._v(t._s(t.user.name))])]),n("v-icon",[t._v("mdi-menu-down")])],1),n("v-list",[t._l(t.items,function(e,r){return n("v-list-tile",{key:r,on:{click:function(n){t.action(e.name)}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)}),n("v-list-tile",{on:{click:function(e){t.action("logout")}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],2)],1)},Qt=[],Jt={name:"UserMenu",props:{items:{type:Array,default:null},user:{type:Object,default:null}},methods:{action:function(t){this.$emit("selected",t)}}},Kt=Jt,Yt=(n("3f4e"),n("8336")),Gt=Object(At["a"])(Kt,Wt,Qt,!1,null,"5fc24a9e",null);Gt.options.__file="User.vue";var Xt=Gt.exports;$t()(Gt,{VBtn:Yt["a"],VIcon:Dt["a"],VList:Mt["a"],VListTile:Bt["a"],VListTileTitle:qt["b"],VMenu:Ut["a"]});var Zt={name:"RwvHeader",components:{MobileMenu:Ht,UserMenu:Xt},computed:Object(C["a"])({},Object(E["b"])(["currentUser","isAuthenticated"]),{routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return"none"!=t.meta.menu}):[]},menuLinks:function(){var t=this,e=this.routes.filter(function(t){return"main"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})},guestLinks:function(){var t=this,e=this.routes.filter(function(t){return"guest"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})},userLinks:function(){var t=this,e=this.routes.filter(function(t){return"user"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})}}),data:function(){return{}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},link:function(t){"logout"===t?this.logout():this.$router.push({name:t})},logout:function(){var t=this;this.$store.dispatch(H["k"]).then(function(){return t.$router.push({name:"home"})})}}},te=Zt,ee=(n("23a3"),n("9910")),ne=n("71d9"),re=n("2a7f"),oe=Object(At["a"])(te,Ct,Lt,!1,null,"1b13f1fe",null);oe.options.__file="TheHeader.vue";var ce=oe.exports;$t()(oe,{VBtn:Yt["a"],VIcon:Dt["a"],VSpacer:ee["a"],VToolbar:ne["a"],VToolbarItems:re["a"],VToolbarTitle:re["b"]});var ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n      ©2018 — "),n("strong",[n("span",{staticClass:"cn"},[t._v("交易者")]),t._v(" traders.com.tw")])])],1)],1)},ae=[],se={name:"RwvFooter"},ue=se,fe=n("0e8f"),le=n("553a"),de=n("a722"),me=Object(At["a"])(ue,ie,ae,!1,null,null,null);me.options.__file="TheFooter.vue";var he=me.exports;$t()(me,{VFlex:fe["a"],VFooter:le["a"],VLayout:de["a"]});var be={name:"App",components:{RwvHeader:ce,RwvFooter:he},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},date:""}},computed:Object(C["a"])({},Object(E["c"])({loading:function(t){return t.app.loading}})),created:function(){Bus.$on("errors",this.onError),Bus.$on("success",this.onSuccess)},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{onError:function(t){if(!t)return this.err.msg="伺服器無回應. 請稍候再試",void(this.err.show=!0);t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})},onSuccess:function(t){this.success.show=!0,this.success.msg=t||"存檔成功"},onResponsiveInverted:function(){window.innerWidth<991?this.$store.commit(S["k"],!0):this.$store.commit(S["k"],!1)}}},ve=be,pe=(n("4645"),n("7496")),ke=n("12b2"),ge=n("549c"),je=n("169a"),ye=Object(At["a"])(ve,Et,Pt,!1,null,"46fe46f4",null);ye.options.__file="App.vue";var we=ye.exports;$t()(ye,{VApp:pe["a"],VCardTitle:ke["a"],VContent:ge["a"],VDialog:je["a"],VIcon:Dt["a"]}),window.Bus=new r["default"]({}),r["default"].component("loading",c.a),T.beforeEach(function(t,e,n){Tt.dispatch(H["b"]).then(function(e){var r="user"===t.meta.type,o="guest"===t.meta.type,c="all"===t.meta.type;if(e){var i=M["a"].tokenStatus();return-1===i?c?n():n({path:"/auth",query:{returnUrl:t.path}}):0===i?c?n():n(o?{name:"home"}:{path:"/auth",query:{returnUrl:t.path}}):o?n({name:"home"}):n()}return r?n({path:"/login",query:{returnUrl:t.path}}):n()})}),r["default"].config.productionTip=!1,new r["default"]({router:T,store:Tt,render:function(t){return t(we)}}).$mount("#app")},"3f4e":function(t,e,n){"use strict";var r=n("f1c3"),o=n.n(r);o.a},4645:function(t,e,n){"use strict";var r=n("61da"),o=n.n(r);o.a},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=c(t);return n(e)}function c(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=c,t.exports=o,o.id="4678"},"5e4c":function(t,e,n){"use strict";var r=n("04e1"),o=n.n(r),c=n("c1df"),i=n.n(c),a="id_token",s="refresh_token",u=function(){return window.localStorage.getItem(a)},f=function(){return window.localStorage.getItem(s)},l=function(t,e){window.localStorage.setItem(a,t),window.localStorage.setItem(s,e)},d=function(){window.localStorage.removeItem(a),window.localStorage.removeItem(s)},m=function(){var t=window.localStorage.getItem(a);if(!t)return-1;var e=o()(t),n=i.a.unix(e.exp),r=i.a.utc(),c=n.diff(r,"minutes");return c<=0?-1:c<30?0:1};e["a"]={getToken:u,getRefreshToken:f,saveToken:l,destroyToken:d,tokenStatus:m}},"61da":function(t,e,n){},a37b:function(t,e,n){"use strict";var r=n("d211"),o=n.n(r);o.a},a49b:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a});var r="https://localhost:44300",o="".concat(r,"/#/login"),c="".concat(r,"/api"),i="".concat(r,"/admin"),a={client_id:"753186496069-c7arjrt9ji0cd3rcbple37m1au2n1csh"}},ae60:function(t,e,n){"use strict";var r=n("2b0e"),o=n("7bb1"),c=n("427f"),i=n.n(c);r["default"].use(o["b"]),o["a"].localize("zh_TW",i.a);var a={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{name:"名稱",email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機",code:"代碼"}}};o["a"].localize(a),o["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}})},c41f:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"m",function(){return o}),n.d(e,"j",function(){return c}),n.d(e,"d",function(){return i}),n.d(e,"g",function(){return a}),n.d(e,"l",function(){return s}),n.d(e,"k",function(){return u}),n.d(e,"n",function(){return f}),n.d(e,"p",function(){return l}),n.d(e,"c",function(){return d}),n.d(e,"h",function(){return m}),n.d(e,"q",function(){return h}),n.d(e,"a",function(){return b}),n.d(e,"f",function(){return v}),n.d(e,"o",function(){return p}),n.d(e,"i",function(){return k}),n.d(e,"e",function(){return g});n("cadf"),n("551c"),n("097d");var r="checkAuth",o="refreshToken",c="login",i="fbLogin",a="googleLogin",s="oAuthRegister",u="logout",f="register",l="sendConfirmEmail",d="confirmEmail",m="initChangePassword",h="setPassword",b="changePassword",v="forgotPassword",p="resetPassword",k="initWatch",g="fetchQuotes"},d211:function(t,e,n){},ee97:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("bc3a"),o=n.n(r),c=n("5e4c"),i=n("0feb"),a={setHeader:function(){var t=c["a"].getToken();t||(t=""),o.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},fetch:function(t,e){return e&&(t=i["a"].buildQuery(t,e)),new Promise(function(e,n){o.a.get(t).then(function(t){e(t.data)}).catch(function(t){n(t.response)})})},submit:function(t,e,n){return new Promise(function(r,c){o.a[t](e,n).then(function(t){r(t.data)}).catch(function(t){c(t.response)})})}};e["a"]=a},f1c3:function(t,e,n){},f6d6:function(t,e,n){},f721:function(t,e,n){"use strict";n.d(e,"i",function(){return r}),n.d(e,"k",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"n",function(){return a}),n.d(e,"h",function(){return s}),n.d(e,"e",function(){return u}),n.d(e,"m",function(){return f}),n.d(e,"l",function(){return l}),n.d(e,"j",function(){return d}),n.d(e,"g",function(){return m}),n.d(e,"d",function(){return h}),n.d(e,"f",function(){return b}),n.d(e,"a",function(){return v});var r="setLoading",o="setResponsive",c="logOut",i="setAuth",a="setUser",s="setKey",u="setDate",f="setStrategy",l="setStrategies",d="setRealTime",m="setIndicators",h="setChartQuotes",b="setError",v="clearError"}});
//# sourceMappingURL=index.472a8975.js.map