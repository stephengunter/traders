(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],f=0,l=[];f<i.length;f++)o=i[f],c[o]&&l.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);m&&m(e);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={index:0},c={index:0},a=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c42be":"8be27da9","chunk-2db4d1fd":"e67d6fd6","chunk-354ce2bc":"5e25a6f9","chunk-594ea634":"0da03f4a","chunk-0bb2f332":"705b162f","chunk-2d93104c":"a71dff51","chunk-0d41fd58":"22157513","chunk-2d0a3514":"4b116999","chunk-46b16407":"ff24d4a9","chunk-75b4c666":"9e12195e","chunk-5d565600":"d344f7d7","chunk-af8318b2":"7ecb73ae","chunk-87c5b382":"982402f7","chunk-a527f6bc":"7790c0fa","chunk-e2cbf2ba":"56bdacfc"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2db4d1fd":1,"chunk-354ce2bc":1,"chunk-594ea634":1,"chunk-0bb2f332":1,"chunk-2d93104c":1,"chunk-0d41fd58":1,"chunk-46b16407":1,"chunk-75b4c666":1,"chunk-5d565600":1,"chunk-af8318b2":1,"chunk-87c5b382":1,"chunk-a527f6bc":1,"chunk-e2cbf2ba":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c42be":"31d6cfe0","chunk-2db4d1fd":"77fef66f","chunk-354ce2bc":"6be33f1b","chunk-594ea634":"af5878fe","chunk-0bb2f332":"b1ecc611","chunk-2d93104c":"4c2d3c3b","chunk-0d41fd58":"14f4d000","chunk-2d0a3514":"31d6cfe0","chunk-46b16407":"b1ecc611","chunk-75b4c666":"e6f7564f","chunk-5d565600":"b54f96e0","chunk-af8318b2":"b1ecc611","chunk-87c5b382":"b1ecc611","chunk-a527f6bc":"b1ecc611","chunk-e2cbf2ba":"883bebb2"}[t]+".css",c=s.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],f=u.getAttribute("data-href");if(f===r||f===c)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,delete o[t],m.parentNode.removeChild(m),n(a)},m.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(m)}).then(function(){o[t]=0}));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=c[t]=[e,n]});e.push(r[2]=a);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=i(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}c[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var m=f;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("303a")},"0feb":function(t,e,n){"use strict";var r=n("d4ec"),o=n("bee2"),c=(n("cadf"),n("551c"),n("097d"),function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"resolveErrorData",value:function(t){return console.log(t),t&&t.status&&400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}},{key:"toDateString",value:function(t){if(t=String(t),8!=t.length)return"";var e=t.substring(0,4),n=t.substring(4,6),r=t.substring(6,8);return"".concat(e,"-").concat(n,"-").concat(r)}},{key:"dateNumber",value:function(t){var e=new Date(t),n=this.toNumberString(e.getFullYear()),r=this.toNumberString(e.getMonth()+1),o=this.toNumberString(e.getDate());return"".concat(n).concat(r).concat(o)}},{key:"toNumberString",value:function(t){return t<10?"0"+String(t):String(t)}},{key:"timeString",value:function(t){t=String(t),t.length<6&&(t="0"+t);var e=t.substring(0,2),n=t.substring(2,4),r=t.substring(4,6);return"".concat(e,":").concat(n,":").concat(r)}}]),t}());e["a"]=c},1094:function(t,e,n){},"23a3":function(t,e,n){"use strict";var r=n("1094"),o=n.n(r);o.a},"270f":function(t,e,n){"use strict";var r=n("ee97"),o=n("a49b"),c="".concat(o["b"],"/auth"),a={refreshToken:function(t){var e="".concat(c,"/RefreshToken"),n="post";return r["a"].submit(n,e,t)},login:function(t){var e="".concat(c,"/login"),n="post";return r["a"].submit(n,e,t)}};e["a"]=a},"302c":function(t,e,n){"use strict";n("ac6a"),n("456d");var r=n("d4ec"),o=n("bee2"),c=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(o["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e["a"]=c},"303a":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("f6d6");var r=n("2b0e"),o=n("9062"),c=n.n(o),a=(n("e40d"),n("5363"),n("bb71"));n("da64");r["default"].use(a["a"],{iconfont:"mdi"});n("ae60");var i=n("4f76"),s=n.n(i);r["default"].use(s.a);for(var u=n("8c4f"),f=[{name:"test",path:"/test",component:function(){return n.e("chunk-87c5b382").then(n.bind(null,"b0e6"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"auth",path:"/auth",component:function(){return n.e("chunk-2d0c42be").then(n.bind(null,"3a60"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"home",path:"/",component:function(){return n.e("chunk-2db4d1fd").then(n.bind(null,"76bf"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"indicators",path:"/indicators",component:function(){return n.e("chunk-e2cbf2ba").then(n.bind(null,"9651"))},meta:{order:0,icon:"mdi-chart-bar",title:"指標介紹",type:"all",menu:"main"}},{name:"watch",path:"/watch",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-75b4c666"),n.e("chunk-5d565600")]).then(n.bind(null,"dbd6"))},meta:{order:0,icon:"mdi-monitor-cellphone",title:"看盤室",type:"user",menu:"main"}},{name:"confirm-email",path:"/confirm-email",component:function(){return n.e("chunk-a527f6bc").then(n.bind(null,"5b6e"))},meta:{order:0,icon:"",title:"Email確認",type:"all",menu:"none"}}],l=[{name:"login",path:"/login",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-2d93104c"),n.e("chunk-0d41fd58")]).then(n.bind(null,"8457"))},meta:{order:0,icon:"",title:"登入",type:"guest",menu:"guest"}},{name:"register",path:"/register",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-2d93104c"),n.e("chunk-2d0a3514")]).then(n.bind(null,"0251"))},meta:{order:0,icon:"",title:"註冊",type:"guest",menu:"guest"}},{name:"forgot-password",path:"/forgot-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-46b16407")]).then(n.bind(null,"c5fa"))},meta:{order:0,icon:"",title:"忘記密碼",type:"guest",menu:"none"}},{name:"reset-password",path:"/reset-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-0bb2f332")]).then(n.bind(null,"bf75"))},meta:{order:0,icon:"",title:"重設密碼",type:"guest",menu:"none"}}],m=[{name:"subscribes",path:"/subscribes",component:function(){return n.e("chunk-354ce2bc").then(n.bind(null,"1cd1"))},meta:{order:0,icon:"",title:"訂閱紀錄",type:"user",menu:"user"}},{name:"change-password",path:"/change-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-af8318b2")]).then(n.bind(null,"d5fb"))},meta:{order:0,icon:"",title:"變更密碼",type:"user",menu:"user"}}],d=f.concat(l).concat(m),h=0;h<d.length;h++)d[h].meta.order=h;var b=d;r["default"].use(u["a"]);var v,p,k,g,j,y=new u["a"]({routes:b}),w=n("2f62"),_=n("ade3"),O="setLoading",T="setResponsive",P="logOut",E="setAuth",C="setUser",L="setWatchModel",x="setStrategy",$="setRealTime",S="setIndicators",z="setChartQuotes",V="setError",B="clearError",A={loading:!1,responsive:!1},I=(v={},Object(_["a"])(v,O,function(t,e){t.loading=e}),Object(_["a"])(v,T,function(t,e){t.responsive=e}),v),M={state:A,mutations:I},D=(n("673e"),n("04e1")),R=n.n(D),q=n("ee97"),N=n("5e4c"),U=n("302c"),F=n("0feb"),W=n("270f"),H="oauth",Q={fbLogin:function(t){var e="".concat(H,"/facebook"),n="post";return new Promise(function(r,o){axios[n](e,{token:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},googleLogin:function(t){var e="".concat(H,"/google"),n="post";return new Promise(function(r,o){axios[n](e,{token:t}).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},register:function(t){var e="".concat(H,"/register"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},J=Q,K=n("a49b"),Y="".concat(K["b"],"/account"),G={register:function(t){var e=Y,n="post";return q["a"].submit(n,e,t)},sendConfirmEmail:function(t){var e="".concat(Y,"/SendConfirmEmail"),n="post";return q["a"].submit(n,e,t)},confirmEmail:function(t){var e="".concat(Y,"/ConfirmEmail"),n="post";return q["a"].submit(n,e,t)}},X=G,Z="password",tt={forgot:function(t){var e="".concat(Z,"/forgot"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},reset:function(t){var e="".concat(Z,"/reset"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})},change:function(t){var e="".concat(Z,"/change"),n="post";return new Promise(function(r,o){axios[n](e,t).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}},et=tt,nt=n("c41f"),rt={errors:new U["a"],user:{},isAuthenticated:!!N["a"].getToken()},ot={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},ct=(p={},Object(_["a"])(p,nt["i"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n){W["a"].login(e).then(function(e){t.commit(E,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(O,!1),n(1)}).catch(function(e){t.commit(O,!1);var r=F["a"].resolveErrorData(e);r?r.hasOwnProperty("email_confirm")?n(0):t.commit(V,r):Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["d"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n){J.fbLogin(e).then(function(e){e.accessToken?(t.commit(E,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(O,!1),n(null)):(t.commit(O,!1),n(e))}).catch(function(e){t.commit(O,!1);var n=F["a"].resolveErrorData(e);n?t.commit(V,n):Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["g"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n){J.googleLogin(e).then(function(e){e.accessToken?(t.commit(E,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(O,!1),n(null)):(t.commit(O,!1),n(e))}).catch(function(e){t.commit(O,!1);var n=F["a"].resolveErrorData(e);n?t.commit(V,n):Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["k"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n){J.register(e).then(function(e){t.commit(E,{token:e.accessToken.token,refreshToken:e.refreshToken}),t.commit(O,!1),n(1)}).catch(function(e){t.commit(O,!1),Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["j"],function(t){t.commit(P)}),Object(_["a"])(p,nt["m"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n){X.register(e).then(function(){t.commit(O,!1),n(!0)}).catch(function(e){t.commit(O,!1);var n=F["a"].resolveErrorData(e);n?t.commit(V,n):Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["o"],function(t,e){return t.commit(O,!0),new Promise(function(n){X.sendConfirmEmail(e).then(function(){t.commit(O,!1),n(!0)}).catch(function(e){t.commit(O,!1),Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["c"],function(t,e){return new Promise(function(t){X.confirmEmail(e).then(function(){t(!0)}).catch(function(e){var n=F["a"].resolveErrorData(e);n?t(!1):Bus.$emit("errors",e)})})}),Object(_["a"])(p,nt["b"],function(t){return new Promise(function(e){var n=N["a"].getToken();if(n){q["a"].setHeader();var r=R()(n);t.commit(C,{id:r.id,name:r.sub}),e(!0)}else t.commit(P),e(!1)})}),Object(_["a"])(p,nt["l"],function(t){return new Promise(function(e){var n=N["a"].getToken(),r=N["a"].getRefreshToken();n&&r?(t.commit(O,!0),W["a"].refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(E,{token:n.accessToken.token,refreshToken:n.refreshToken}),t.commit(O,!1),e(!0)}).catch(function(n){t.commit(O,!1),t.commit(P),e(!1)})):(t.commit(P),e(!1))})}),Object(_["a"])(p,nt["f"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n,r){et.forgot(e).then(function(){t.commit(O,!1),n(!0)}).catch(function(e){t.commit(O,!1);var n=F["a"].resolveErrorData(e);n?t.commit(V,n):(Bus.$emit("errors",e),r())})})}),Object(_["a"])(p,nt["n"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n,r){et.reset(e).then(function(){t.commit(O,!1),n(!0)}).catch(function(e){t.commit(O,!1);var n=F["a"].resolveErrorData(e);n?t.commit(V,n):(Bus.$emit("errors",e),r())})})}),Object(_["a"])(p,nt["a"],function(t,e){return t.commit(B),t.commit(O,!0),new Promise(function(n,r){et.change(e).then(function(){t.commit(O,!1),n(!0)}).catch(function(e){t.commit(O,!1);var n=F["a"].resolveErrorData(e);n?t.commit(V,n):(Bus.$emit("errors",e),r())})})}),p),at=(k={},Object(_["a"])(k,V,function(t,e){t.errors.record(e)}),Object(_["a"])(k,B,function(t){t.errors.clear()}),Object(_["a"])(k,C,function(t,e){t.user=e}),Object(_["a"])(k,E,function(t,e){N["a"].saveToken(e.token,e.refreshToken);var n=R()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0,t.errors=new U["a"]}),Object(_["a"])(k,P,function(t){t.isAuthenticated=!1,t.user={},t.errors=new U["a"],N["a"].destroyToken()}),k),it={state:rt,actions:ct,mutations:at,getters:ot},st="".concat(K["b"],"/watch"),ut={init:function(){var t=st;return q["a"].fetch(t)}},ft=ut,lt={errors:new U["a"],model:null,strategy:null},mt={},dt=Object(_["a"])({},nt["h"],function(t){return t.commit(O,!0),new Promise(function(e,n){ft.init().then(function(n){t.commit(L,n),t.commit(x,n.strategies[0]),t.commit(O,!1),e(1)}).catch(function(r){t.commit(O,!1),t.commit(L,null),t.commit(x,null);var o=F["a"].resolveErrorData(r);o&&o.hasOwnProperty("subscribe")?(t.commit(L,null),t.commit(x,null),e(0)):n(r)})})}),ht=(g={},Object(_["a"])(g,V,function(t,e){t.errors.record(e)}),Object(_["a"])(g,B,function(t){t.errors.clear()}),Object(_["a"])(g,L,function(t,e){t.model=e}),Object(_["a"])(g,x,function(t,e){t.strategy=e}),g),bt={state:lt,actions:dt,mutations:ht,getters:mt},vt=n("be94"),pt="".concat(K["b"],"/quotes"),kt={fetch:function(t){var e=pt;return q["a"].fetch(e,t)}},gt=kt,jt={indicators:[],quotes:[],realTime:!1},yt=Object(vt["a"])({},jt),wt={},_t=Object(_["a"])({},nt["e"],function(t,e){return t.commit($,!1),t.commit(S,[]),t.commit(z,[]),t.commit(O,!0),new Promise(function(n,r){gt.fetch(e).then(function(e){t.commit($,e.realTime),t.commit(S,e.indicators),t.commit(z,e.quotes),t.commit(O,!1),n(e.quotes.length)}).catch(function(e){t.commit(O,!1),r(e)})})}),Ot=(j={},Object(_["a"])(j,$,function(t,e){t.realTime=e}),Object(_["a"])(j,S,function(t,e){t.indicators=e}),Object(_["a"])(j,z,function(t,e){t.quotes=e}),j),Tt={state:yt,actions:_t,mutations:Ot,getters:wt};r["default"].use(w["a"]);var Pt=new w["a"].Store({loading:!1,modules:{app:M,auth:it,watch:bt,chart:Tt}}),Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("loading",{attrs:{active:t.loading},on:{"update:active":function(e){t.loading=e}}}),n("RwvHeader"),n("v-content",{staticClass:"main-content"},[n("router-view")],1),n("RwvFooter"),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"errIcon"},[t._v("mdi-alert")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},Ct=[],Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"site-title cn"},[t._v("交易者")]),n("v-icon",{staticClass:"site-icon"},[t._v("mdi-finance")]),n("span",{staticClass:"site-sub-title cn"},[t._v("台指當沖策略平台")])],1),n("v-spacer"),t.isAuthenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.menuLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n         "+t._s(e.title)+"\n      ")],1)}),t.isAuthenticated?n("UserMenu",{attrs:{user:t.currentUser,items:t.userLinks},on:{selected:t.link}}):t._e()],2):n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.menuLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._l(t.guestLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[t._v(" \n       "+t._s(e.title)+"\n      ")])})],2),n("MobileMenu",{attrs:{auth:t.isAuthenticated,user:t.currentUser,links:t.menuLinks,user_links:t.userLinks,guest_links:t.guestLinks},on:{selected:t.link}})],1)},xt=[],$t=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""}},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?t._e():n("v-list",t._l(t.guest_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.user.name))])],1)],1)],1):t._e(),t.auth?n("v-list",[t._l(t.user_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),n("v-list-tile",{on:{click:function(e){e.preventDefault(),t.select("logout")}}},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],2):t._e()],1)}),St=[],zt={name:"MobileMenu",props:{links:{type:Array,default:null},auth:{type:Boolean,default:!1},user:{type:Object,default:null},guest_links:{type:Array,default:null},user_links:{type:Array,default:null}},data:function(){return{}},methods:{select:function(t){this.$emit("selected",t)}}},Vt=zt,Bt=(n("a37b"),n("2877")),At=n("6544"),It=n.n(At),Mt=n("132d"),Dt=n("8860"),Rt=n("ba95"),qt=n("40fe"),Nt=n("5d23"),Ut=n("e449"),Ft=n("706c"),Wt=Object(Bt["a"])(Vt,$t,St,!1,null,"afa218ca",null);Wt.options.__file="Mobile.vue";var Ht=Wt.exports;It()(Wt,{VIcon:Mt["a"],VList:Dt["a"],VListTile:Rt["a"],VListTileAction:qt["a"],VListTileContent:Nt["a"],VListTileTitle:Nt["b"],VMenu:Ut["a"],VToolbarSideIcon:Ft["a"]});var Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",staticStyle:{"min-width":"48px"},attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("div",{staticClass:"hidden-sm-and-down"},[n("span",[t._v(t._s(t.user.name))])]),n("v-icon",[t._v("mdi-menu-down")])],1),n("v-list",[t._l(t.items,function(e,r){return n("v-list-tile",{key:r,on:{click:function(n){t.action(e.name)}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)}),n("v-list-tile",{on:{click:function(e){t.action("logout")}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],2)],1)},Jt=[],Kt={name:"UserMenu",props:{items:{type:Array,default:null},user:{type:Object,default:null}},methods:{action:function(t){this.$emit("selected",t)}}},Yt=Kt,Gt=(n("3f4e"),n("8336")),Xt=Object(Bt["a"])(Yt,Qt,Jt,!1,null,"5fc24a9e",null);Xt.options.__file="User.vue";var Zt=Xt.exports;It()(Xt,{VBtn:Gt["a"],VIcon:Mt["a"],VList:Dt["a"],VListTile:Rt["a"],VListTileTitle:Nt["b"],VMenu:Ut["a"]});var te={name:"RwvHeader",components:{MobileMenu:Ht,UserMenu:Zt},computed:Object(vt["a"])({},Object(w["b"])(["currentUser","isAuthenticated"]),{routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return"none"!=t.meta.menu}):[]},menuLinks:function(){var t=this,e=this.routes.filter(function(t){return"main"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})},guestLinks:function(){var t=this,e=this.routes.filter(function(t){return"guest"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})},userLinks:function(){var t=this,e=this.routes.filter(function(t){return"user"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})}}),data:function(){return{}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},link:function(t){"logout"===t?this.logout():this.$router.push({name:t})},logout:function(){var t=this;this.$store.dispatch(nt["j"]).then(function(){return t.$router.push({name:"home"})})}}},ee=te,ne=(n("23a3"),n("9910")),re=n("71d9"),oe=n("2a7f"),ce=Object(Bt["a"])(ee,Lt,xt,!1,null,"1b13f1fe",null);ce.options.__file="TheHeader.vue";var ae=ce.exports;It()(ce,{VBtn:Gt["a"],VIcon:Mt["a"],VSpacer:ne["a"],VToolbar:re["a"],VToolbarItems:oe["a"],VToolbarTitle:oe["b"]});var ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n      ©2018 — "),n("strong",[n("span",{staticClass:"cn"},[t._v("交易者")]),t._v(" traders.com.tw")])])],1)],1)},se=[],ue={name:"RwvFooter"},fe=ue,le=n("0e8f"),me=n("553a"),de=n("a722"),he=Object(Bt["a"])(fe,ie,se,!1,null,null,null);he.options.__file="TheFooter.vue";var be=he.exports;It()(he,{VFlex:le["a"],VFooter:me["a"],VLayout:de["a"]});var ve={name:"App",components:{RwvHeader:ae,RwvFooter:be},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},date:""}},computed:Object(vt["a"])({},Object(w["c"])({loading:function(t){return t.app.loading}})),created:function(){Bus.$on("errors",this.onError),Bus.$on("success",this.onSuccess)},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{onError:function(t){if(!t)return this.err.msg="伺服器無回應. 請稍候再試",void(this.err.show=!0);t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})},onSuccess:function(t){this.success.show=!0,this.success.msg=t||"存檔成功"},onResponsiveInverted:function(){window.innerWidth<991?this.$store.commit(T,!0):this.$store.commit(T,!1)}}},pe=ve,ke=(n("4645"),n("7496")),ge=n("12b2"),je=n("549c"),ye=n("169a"),we=Object(Bt["a"])(pe,Et,Ct,!1,null,"46fe46f4",null);we.options.__file="App.vue";var _e=we.exports;It()(we,{VApp:ke["a"],VCardTitle:ge["a"],VContent:je["a"],VDialog:ye["a"],VIcon:Mt["a"]}),window.Bus=new r["default"]({}),r["default"].component("loading",c.a),y.beforeEach(function(t,e,n){Pt.dispatch(nt["b"]).then(function(e){var r="user"===t.meta.type,o="guest"===t.meta.type,c="all"===t.meta.type;if(e){var a=N["a"].tokenStatus();return-1===a?c?n():n({path:"/auth",query:{returnUrl:t.path}}):0===a?c?n():n(o?{name:"home"}:{path:"/auth",query:{returnUrl:t.path}}):o?n({name:"home"}):n()}return r?n({path:"/login",query:{returnUrl:t.path}}):n()})}),r["default"].config.productionTip=!1,new r["default"]({router:y,store:Pt,render:function(t){return t(_e)}}).$mount("#app")},"3f4e":function(t,e,n){"use strict";var r=n("f1c3"),o=n.n(r);o.a},4645:function(t,e,n){"use strict";var r=n("61da"),o=n.n(r);o.a},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=c(t);return n(e)}function c(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=c,t.exports=o,o.id="4678"},"5e4c":function(t,e,n){"use strict";var r=n("04e1"),o=n.n(r),c=n("c1df"),a=n.n(c),i="id_token",s="refresh_token",u=function(){return window.localStorage.getItem(i)},f=function(){return window.localStorage.getItem(s)},l=function(t,e){window.localStorage.setItem(i,t),window.localStorage.setItem(s,e)},m=function(){window.localStorage.removeItem(i),window.localStorage.removeItem(s)},d=function(){var t=window.localStorage.getItem(i);if(!t)return-1;var e=o()(t),n=a.a.unix(e.exp),r=a.a.utc(),c=n.diff(r,"minutes");return c<=0?-1:c<30?0:1};e["a"]={getToken:u,getRefreshToken:f,saveToken:l,destroyToken:m,tokenStatus:d}},"61da":function(t,e,n){},a37b:function(t,e,n){"use strict";var r=n("d211"),o=n.n(r);o.a},a49b:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return a});n("cadf"),n("551c"),n("097d");var r="https://localhost:44300",o="".concat(r,"/#/login"),c="".concat(r,"/api"),a="".concat(r,"/admin"),i={url:"https://www.facebook.com",id:"285921658793697",secret:"e21467494d13abf65a60e05b04de5f44",version:"v3.2",page:"/oauth/facebook"};"".concat(i.url,"/").concat(i.version,"/dialog/oauth?&response_type=token&display=popup&client_id=").concat(i.id),"&display=popup&redirect_uri=".concat(r).concat(i.page,"&scope=email")},ae60:function(t,e,n){"use strict";var r=n("2b0e"),o=n("7bb1"),c=n("427f"),a=n.n(c);r["default"].use(o["b"]),o["a"].localize("zh_TW",a.a);var i={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{name:"名稱",email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機",code:"代碼"}}};o["a"].localize(i),o["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}})},c41f:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"i",function(){return c}),n.d(e,"j",function(){return a}),n.d(e,"m",function(){return i}),n.d(e,"k",function(){return s}),n.d(e,"o",function(){return u}),n.d(e,"c",function(){return f}),n.d(e,"a",function(){return l}),n.d(e,"f",function(){return m}),n.d(e,"n",function(){return d}),n.d(e,"b",function(){return h}),n.d(e,"l",function(){return b}),n.d(e,"h",function(){return v}),n.d(e,"e",function(){return p});n("cadf"),n("551c"),n("097d");var r="fbLogin",o="googleLogin",c="login",a="logout",i="register",s="oAuthRegister",u="sendConfirmEmail",f="confirmEmail",l="changePassword",m="forgotPassword",d="restPassword",h="checkAuth",b="refreshToken",v="initWatch",p="fetchQuotes"},d211:function(t,e,n){},ee97:function(t,e,n){"use strict";var r=n("bc3a"),o=n.n(r),c=n("5e4c"),a=n("0feb"),i={setHeader:function(){var t=c["a"].getToken();t||(t=""),o.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},fetch:function(t,e){return e&&(t=a["a"].buildQuery(t,e)),new Promise(function(e,n){o.a.get(t).then(function(t){e(t.data)}).catch(function(t){n(t)})})},submit:function(t,e,n){return new Promise(function(r,c){o.a[t](e,n).then(function(t){r(t.data)}).catch(function(t){c(t.response)})})}};e["a"]=i},f1c3:function(t,e,n){},f6d6:function(t,e,n){}});
//# sourceMappingURL=index.aeb5ee49.js.map