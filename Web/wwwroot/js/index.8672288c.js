(function(t){function e(e){for(var r,c,a=e[0],s=e[1],u=e[2],f=0,l=[];f<a.length;f++)c=a[f],o[c]&&l.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},c={index:0},o={index:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c42be":"c0844a56","chunk-2db4d1fd":"d0809b0c","chunk-354ce2bc":"9f932021","chunk-594ea634":"0da03f4a","chunk-13c8af60":"2ecc987a","chunk-218cc694":"2e2d78d7","chunk-0d7a75b6":"ec17a95f","chunk-2d0a3514":"233ed083","chunk-773d2eeb":"bb5f48bf","chunk-9b88c080":"c91d942d","chunk-cc6129e8":"9b992f9d","chunk-b8952baa":"c10a1695","chunk-1474c32e":"9af3c282","chunk-2d20edf5":"009b8717","chunk-a527f6bc":"147e42e0","chunk-e2cbf2ba":"3d6e2258"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2db4d1fd":1,"chunk-354ce2bc":1,"chunk-594ea634":1,"chunk-13c8af60":1,"chunk-218cc694":1,"chunk-0d7a75b6":1,"chunk-773d2eeb":1,"chunk-9b88c080":1,"chunk-cc6129e8":1,"chunk-b8952baa":1,"chunk-1474c32e":1,"chunk-a527f6bc":1,"chunk-e2cbf2ba":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c42be":"31d6cfe0","chunk-2db4d1fd":"77fef66f","chunk-354ce2bc":"6be33f1b","chunk-594ea634":"af5878fe","chunk-13c8af60":"b1ecc611","chunk-218cc694":"5e5fe350","chunk-0d7a75b6":"87ef3a1f","chunk-2d0a3514":"31d6cfe0","chunk-773d2eeb":"b1ecc611","chunk-9b88c080":"b1ecc611","chunk-cc6129e8":"e6f7564f","chunk-b8952baa":"c8280a26","chunk-1474c32e":"8f99e4e9","chunk-2d20edf5":"31d6cfe0","chunk-a527f6bc":"b1ecc611","chunk-e2cbf2ba":"883bebb2"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var u=i[a],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===o))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){u=l[a],f=u.getAttribute("data-href");if(f===r||f===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete c[t],d.parentNode.removeChild(d),n(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){c[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=a(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+c+")");i.type=r,i.request=c,n[1](i)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("303a")},"078e":function(t,e,n){"use strict";var r=n("ea6b"),c=n.n(r);c.a},"0feb":function(t,e,n){"use strict";var r=n("d4ec"),c=n("bee2"),o=function(){function t(){Object(r["a"])(this,t)}return Object(c["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"resolveErrorData",value:function(t){return console.log(t),t&&t.status&&400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}},{key:"toDateString",value:function(t){if(t=String(t),8!=t.length)return"";var e=t.substring(0,4),n=t.substring(4,6),r=t.substring(6,8);return"".concat(e,"-").concat(n,"-").concat(r)}},{key:"dateNumber",value:function(t){var e=new Date(t),n=this.toNumberString(e.getFullYear()),r=this.toNumberString(e.getMonth()+1),c=this.toNumberString(e.getDate());return"".concat(n).concat(r).concat(c)}},{key:"toNumberString",value:function(t){return t<10?"0"+String(t):String(t)}},{key:"timeString",value:function(t){t=String(t),t.length<6&&(t="0"+t);var e=t.substring(0,2),n=t.substring(2,4),r=t.substring(4,6);return"".concat(e,":").concat(n,":").concat(r)}}]),t}();e["a"]=o},1094:function(t,e,n){},"23a3":function(t,e,n){"use strict";var r=n("1094"),c=n.n(r);c.a},"270f":function(t,e,n){"use strict";var r=n("ee97"),c=n("a49b"),o="".concat(c["b"],"/auth"),i={refreshToken:function(t){var e="".concat(o,"/RefreshToken"),n="post";return r["a"].submit(n,e,t)},login:function(t){var e="".concat(o,"/login"),n="post";return r["a"].submit(n,e,t)}};e["a"]=i},"302c":function(t,e,n){"use strict";n("ac6a"),n("456d");var r=n("d4ec"),c=n("bee2"),o=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(c["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e["a"]=o},"303a":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("f6d6");var r=n("2b0e"),c=n("9062"),o=n.n(c),i=(n("e40d"),n("5363"),n("bb71"));n("da64");r["default"].use(i["a"],{iconfont:"mdi"});n("ae60");var a=n("4f76"),s=n.n(a);r["default"].use(s.a);var u=n("a3ad"),f=n.n(u);r["default"].use(f.a);for(var l=n("8c4f"),d=[{name:"test",path:"/test",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-cc6129e8"),n.e("chunk-b8952baa"),n.e("chunk-2d20edf5")]).then(n.bind(null,"b0e6"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"auth",path:"/auth",component:function(){return n.e("chunk-2d0c42be").then(n.bind(null,"3a60"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"home",path:"/",component:function(){return n.e("chunk-2db4d1fd").then(n.bind(null,"76bf"))},meta:{order:0,icon:"",title:"",type:"all",menu:"none"}},{name:"indicators",path:"/indicators",component:function(){return n.e("chunk-e2cbf2ba").then(n.bind(null,"9651"))},meta:{order:0,icon:"mdi-chart-bar",title:"指標介紹",type:"all",menu:"main"}},{name:"watch",path:"/watch",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-cc6129e8"),n.e("chunk-b8952baa"),n.e("chunk-1474c32e")]).then(n.bind(null,"dbd6"))},meta:{order:0,icon:"mdi-monitor-cellphone",title:"看盤室",type:"user",menu:"main"}},{name:"confirm-email",path:"/confirm-email",component:function(){return n.e("chunk-a527f6bc").then(n.bind(null,"5b6e"))},meta:{order:0,icon:"",title:"Email確認",type:"all",menu:"none"}}],m=[{name:"login",path:"/login",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-218cc694"),n.e("chunk-0d7a75b6")]).then(n.bind(null,"8457"))},meta:{order:0,icon:"",title:"登入",type:"guest",menu:"guest"}},{name:"register",path:"/register",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-218cc694"),n.e("chunk-2d0a3514")]).then(n.bind(null,"0251"))},meta:{order:0,icon:"",title:"註冊",type:"guest",menu:"guest"}},{name:"forgot-password",path:"/forgot-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-9b88c080")]).then(n.bind(null,"c5fa"))},meta:{order:0,icon:"",title:"忘記密碼",type:"guest",menu:"none"}},{name:"reset-password",path:"/reset-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-773d2eeb")]).then(n.bind(null,"bf75"))},meta:{order:0,icon:"",title:"重設密碼",type:"guest",menu:"none"}}],h=[{name:"subscribes",path:"/subscribes",component:function(){return n.e("chunk-354ce2bc").then(n.bind(null,"1cd1"))},meta:{order:0,icon:"",title:"訂閱紀錄",type:"user",menu:"user"}},{name:"change-password",path:"/change-password",component:function(){return Promise.all([n.e("chunk-594ea634"),n.e("chunk-13c8af60")]).then(n.bind(null,"d5fb"))},meta:{order:0,icon:"",title:"變更密碼",type:"user",menu:"user"}}],b=d.concat(m).concat(h),v=0;v<b.length;v++)b[v].meta.order=v;var p=b;r["default"].use(l["a"]);var k,g,j,y,w,_,O,T,E=new l["a"]({routes:p,scrollBehavior:function(){return{x:0,y:0}}}),P=n("2f62"),S=n("ade3"),C=n("be94"),L=n("302c"),x=n("f721"),z={errorList:new L["a"],loading:!1,responsive:!1},V=Object(C["a"])({},z),A=(k={},Object(S["a"])(k,x["i"],function(t,e){t.loading=e}),Object(S["a"])(k,x["k"],function(t,e){t.responsive=e}),Object(S["a"])(k,x["f"],function(t,e){t.errorList.record(e)}),Object(S["a"])(k,x["a"],function(t){t.errorList.clear()}),k),D={state:V,mutations:A},I=(n("673e"),n("04e1")),$=n.n(I),M=n("ee97"),R=n("5e4c"),q=n("0feb"),B=n("270f"),U=n("a49b"),N="".concat(U["b"],"/oauth"),F={fbLogin:function(t){var e="".concat(N,"/facebook"),n="post";return M["a"].submit(n,e,{token:t})},googleLogin:function(t){var e="".concat(N,"/google"),n="post";return M["a"].submit(n,e,{token:t})},register:function(t){var e="".concat(N,"/register"),n="post";return M["a"].submit(n,e,t)}},H=F,W=n("c41f"),Q={user:{},isAuthenticated:!!R["a"].getToken()},J=Object(C["a"])({},Q),K={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},Y=(g={},Object(S["a"])(g,W["b"],function(t){return new Promise(function(e){var n=R["a"].getToken();if(n){M["a"].setHeader();var r=$()(n);t.commit(x["n"],{id:r.id,name:r.sub}),e(!0)}else t.commit(x["b"]),e(!1)})}),Object(S["a"])(g,W["p"],function(t){return new Promise(function(e){var n=R["a"].getToken(),r=R["a"].getRefreshToken();n&&r?(t.commit(x["i"],!0),B["a"].refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(x["c"],{token:n.accessToken.token,refreshToken:n.refreshToken}),e(!0)}).catch(function(n){t.commit(x["b"]),e(!1)}).finally(function(){t.commit(x["i"],!1)})):(t.commit(x["b"]),e(!1))})}),Object(S["a"])(g,W["m"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){B["a"].login(e).then(function(e){t.commit(x["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(g,W["g"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){H.fbLogin(e).then(function(e){e.accessToken?(t.commit(x["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(null)):n(e)}).catch(function(t){r(t)}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(g,W["j"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){H.googleLogin(e).then(function(e){e.accessToken?(t.commit(x["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(null)):n(e)}).catch(function(t){r(t)}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(g,W["o"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){H.register(e).then(function(e){t.commit(x["c"],{token:e.accessToken.token,refreshToken:e.refreshToken}),n(!0)}).catch(function(t){r(t)}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(g,W["n"],function(t){t.commit(x["b"])}),g),G=(j={},Object(S["a"])(j,x["n"],function(t,e){t.user=e}),Object(S["a"])(j,x["c"],function(t,e){R["a"].saveToken(e.token,e.refreshToken);var n=$()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0}),Object(S["a"])(j,x["b"],function(t){t.isAuthenticated=!1,t.user={},R["a"].destroyToken()}),j),X={state:J,actions:Y,mutations:G,getters:K},Z="".concat(U["b"],"/password"),tt={initChange:function(){var t="".concat(Z,"/change");return M["a"].fetch(t)},change:function(t){var e="".concat(Z,"/change"),n="post";return M["a"].submit(n,e,t)},set:function(t){var e="".concat(Z,"/set"),n="post";return M["a"].submit(n,e,t)},forgot:function(t){var e="".concat(Z,"/forgot"),n="post";return M["a"].submit(n,e,t)},reset:function(t){var e="".concat(Z,"/reset"),n="post";return M["a"].submit(n,e,t)}},et=tt,nt=(y={},Object(S["a"])(y,W["k"],function(t){return t.commit(x["i"],!0),new Promise(function(e,n){et.initChange().then(function(t){e(t)}).catch(function(t){n(t)}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(y,W["t"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){et.set(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(y,W["a"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){et.change(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(y,W["i"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){et.forgot(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(y,W["r"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){et.reset(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),y),rt={actions:nt},ct="".concat(U["b"],"/account"),ot={register:function(t){var e=ct,n="post";return M["a"].submit(n,e,t)},sendConfirmEmail:function(t){var e="".concat(ct,"/SendConfirmEmail"),n="post";return M["a"].submit(n,e,t)},confirmEmail:function(t){var e="".concat(ct,"/ConfirmEmail"),n="post";return M["a"].submit(n,e,t)}},it=ot,at=(w={},Object(S["a"])(w,W["q"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){it.register(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(w,W["s"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){it.sendConfirmEmail(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(w,W["c"],function(t,e){return new Promise(function(n,r){it.confirmEmail(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),w),st={actions:at},ut="".concat(U["b"],"/watch"),ft={init:function(){var t=ut;return M["a"].fetch(t)}},lt=ft,dt={key:"",date:"",strategy:null,strategies:[]},mt={},ht=Object(S["a"])({},W["l"],function(t){return t.commit(x["i"],!0),new Promise(function(e,n){lt.init().then(function(n){t.commit(x["h"],n.key),t.commit(x["e"],n.date),t.commit(x["m"],n.strategies[0]),t.commit(x["l"],n.strategies),e(!0)}).catch(function(t){n(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),bt=(_={},Object(S["a"])(_,x["h"],function(t,e){t.key=e}),Object(S["a"])(_,x["e"],function(t,e){t.date=e}),Object(S["a"])(_,x["m"],function(t,e){t.strategy=e}),Object(S["a"])(_,x["l"],function(t,e){t.strategies=e}),_),vt={state:dt,actions:ht,mutations:bt,getters:mt},pt="".concat(U["b"],"/quotes"),kt={fetch:function(t){var e=pt;return M["a"].fetch(e,t)}},gt=kt,jt={indicators:[],quotes:[],realTime:!1},yt=Object(C["a"])({},jt),wt={},_t=Object(S["a"])({},W["h"],function(t,e){return t.commit(x["j"],!1),t.commit(x["g"],[]),t.commit(x["d"],[]),t.commit(x["i"],!0),new Promise(function(n,r){gt.fetch(e).then(function(e){e.quotes.length&&(t.commit(x["j"],e.realTime),t.commit(x["g"],e.indicators),t.commit(x["d"],e.quotes)),n(e.quotes.length)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Ot=(O={},Object(S["a"])(O,x["j"],function(t,e){t.realTime=e}),Object(S["a"])(O,x["g"],function(t,e){t.indicators=e}),Object(S["a"])(O,x["d"],function(t,e){t.quotes=e}),O),Tt={state:yt,actions:_t,mutations:Ot,getters:wt},Et="".concat(U["b"],"/strategies"),Pt={create:function(){var t="".concat(Et,"/create");return M["a"].fetch(t)},store:function(t){var e="".concat(Et);return M["a"].submit("post",e,t)},edit:function(t){var e="".concat(Et,"/edit/").concat(t);return M["a"].fetch(e)},update:function(t){var e="".concat(Et,"/").concat(t.strategy.id);return M["a"].submit("put",e,t)},remove:function(t){var e="".concat(Et,"/").concat(t);return M["a"].submit("delete",e)}},St=Pt,Ct={strategies:[]},Lt=Object(C["a"])({},Ct),xt={},zt=(T={},Object(S["a"])(T,W["d"],function(t){return new Promise(function(e,n){St.fetch(params).then(function(n){t.commit(SET_REALTIME,n.realTime),t.commit(SET_INDICATORS,n.indicators),t.commit(SET_CHART_QUOTES,n.quotes),e(n.quotes.length)}).catch(function(t){n(t)})})}),Object(S["a"])(T,W["d"],function(t){return new Promise(function(e,n){St.create().then(function(t){return e(t)}).catch(function(t){n(t)}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(T,W["u"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){St.store(e).then(function(t){n(t)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(T,W["f"],function(t,e){return new Promise(function(n,r){St.edit(e).then(function(t){return n(t)}).catch(function(t){r(t)}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(T,W["v"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){St.update(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),Object(S["a"])(T,W["e"],function(t,e){return t.commit(x["i"],!0),new Promise(function(n,r){St.remove(e).then(function(){n(!0)}).catch(function(t){r(q["a"].resolveErrorData(t))}).finally(function(){t.commit(x["i"],!1)})})}),T),Vt={},At={state:Lt,actions:zt,mutations:Vt,getters:xt};r["default"].use(P["a"]);var Dt=new P["a"].Store({loading:!1,modules:{app:D,auth:X,password:rt,account:st,watch:vt,chart:Tt,strategy:At}}),It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("loading",{attrs:{active:t.loading},on:{"update:active":function(e){t.loading=e}}}),n("RwvHeader"),n("v-content",{staticClass:"main-content"},[n("router-view")],1),n("RwvFooter"),n("v-snackbar",{attrs:{timeout:t.success.timeout,color:t.success.color,top:!0,right:!0,dark:""},model:{value:t.success.show,callback:function(e){t.$set(t.success,"show",e)},expression:"success.show"}},[n("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\tmdi-check-circle\n\t\t\t")]),n("span",{staticClass:"successText cn"},[t._v("\n\t\t\t\t"+t._s(t.success.msg)+"\n\t\t\t")])],1),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"errIcon"},[t._v("mdi-alert")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},$t=[],Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"site-title cn"},[t._v("交易者")]),n("v-icon",{staticClass:"site-icon"},[t._v("mdi-finance")]),n("span",{staticClass:"site-sub-title cn"},[t._v("台指當沖策略平台")])],1),n("v-spacer"),t.isAuthenticated?n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.menuLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n         "+t._s(e.title)+"\n      ")],1)}),t.isAuthenticated?n("UserMenu",{attrs:{user:t.currentUser,items:t.userLinks},on:{selected:t.link}}):t._e()],2):n("v-toolbar-items",{staticClass:"hidden-sm-and-down cn"},[t._l(t.menuLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._l(t.guestLinks,function(e){return n("v-btn",{key:e.order,staticClass:"route-link",attrs:{flat:"",to:e.path}},[t._v(" \n       "+t._s(e.title)+"\n      ")])})],2),n("MobileMenu",{attrs:{auth:t.isAuthenticated,user:t.currentUser,links:t.menuLinks,user_links:t.userLinks,guest_links:t.guestLinks},on:{selected:t.link}})],1)},Rt=[],qt=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":""}},[n("v-toolbar-side-icon",{attrs:{slot:"activator"},slot:"activator"}),n("v-list",t._l(t.links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?t._e():n("v-list",t._l(t.guest_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),1),t.auth?n("v-list",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(t.user.name))])],1)],1)],1):t._e(),t.auth?n("v-list",[t._l(t.user_links,function(e){return n("v-list-tile",{key:e.order,on:{click:function(n){n.preventDefault(),t.select(e.name)}}},[e.icon?n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)],1)}),n("v-list-tile",{on:{click:function(e){e.preventDefault(),t.select("logout")}}},[n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],2):t._e()],1)}),Bt=[],Ut={name:"MobileMenu",props:{links:{type:Array,default:null},auth:{type:Boolean,default:!1},user:{type:Object,default:null},guest_links:{type:Array,default:null},user_links:{type:Array,default:null}},data:function(){return{}},methods:{select:function(t){this.$emit("selected",t)}}},Nt=Ut,Ft=(n("a37b"),n("2877")),Ht=n("6544"),Wt=n.n(Ht),Qt=n("132d"),Jt=n("8860"),Kt=n("ba95"),Yt=n("40fe"),Gt=n("5d23"),Xt=n("e449"),Zt=n("706c"),te=Object(Ft["a"])(Nt,qt,Bt,!1,null,"afa218ca",null);te.options.__file="Mobile.vue";var ee=te.exports;Wt()(te,{VIcon:Qt["a"],VList:Jt["a"],VListTile:Kt["a"],VListTileAction:Yt["a"],VListTileContent:Gt["a"],VListTileTitle:Gt["b"],VMenu:Xt["a"],VToolbarSideIcon:Zt["a"]});var ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",staticStyle:{"min-width":"48px"},attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("div",{staticClass:"hidden-sm-and-down"},[n("span",[t._v(t._s(t.user.name))])]),n("v-icon",[t._v("mdi-menu-down")])],1),n("v-list",[t._l(t.items,function(e,r){return n("v-list-tile",{key:r,on:{click:function(n){t.action(e.name)}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v(t._s(e.title))])],1)}),n("v-list-tile",{on:{click:function(e){t.action("logout")}}},[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],2)],1)},re=[],ce={name:"UserMenu",props:{items:{type:Array,default:null},user:{type:Object,default:null}},methods:{action:function(t){this.$emit("selected",t)}}},oe=ce,ie=(n("3f4e"),n("8336")),ae=Object(Ft["a"])(oe,ne,re,!1,null,"5fc24a9e",null);ae.options.__file="User.vue";var se=ae.exports;Wt()(ae,{VBtn:ie["a"],VIcon:Qt["a"],VList:Jt["a"],VListTile:Kt["a"],VListTileTitle:Gt["b"],VMenu:Xt["a"]});var ue={name:"RwvHeader",components:{MobileMenu:ee,UserMenu:se},computed:Object(C["a"])({},Object(P["b"])(["currentUser","isAuthenticated"]),{routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return"none"!=t.meta.menu}):[]},menuLinks:function(){var t=this,e=this.routes.filter(function(t){return"main"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})},guestLinks:function(){var t=this,e=this.routes.filter(function(t){return"guest"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})},userLinks:function(){var t=this,e=this.routes.filter(function(t){return"user"===t.meta.menu});return e.map(function(e){return t.mapLink(e)})}}),data:function(){return{}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},link:function(t){"logout"===t?this.logout():this.$router.push({name:t})},logout:function(){var t=this;this.$store.dispatch(W["n"]).then(function(){return t.$router.push({name:"home"})})}}},fe=ue,le=(n("23a3"),n("9910")),de=n("71d9"),me=n("2a7f"),he=Object(Ft["a"])(fe,Mt,Rt,!1,null,"1b13f1fe",null);he.options.__file="TheHeader.vue";var be=he.exports;Wt()(he,{VBtn:ie["a"],VIcon:Qt["a"],VSpacer:le["a"],VToolbar:de["a"],VToolbarItems:me["a"],VToolbarTitle:me["b"]});var ve=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{height:"auto",color:"primary lighten-1"}},[n("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[n("v-flex",{attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("\n      ©2018 — "),n("strong",[n("span",{staticClass:"cn"},[t._v("交易者")]),t._v(" traders.com.tw")])])],1)],1)},pe=[],ke={name:"RwvFooter"},ge=ke,je=n("0e8f"),ye=n("553a"),we=n("a722"),_e=Object(Ft["a"])(ge,ve,pe,!1,null,null,null);_e.options.__file="TheFooter.vue";var Oe=_e.exports;Wt()(_e,{VFlex:je["a"],VFooter:ye["a"],VLayout:we["a"]});var Te={name:"App",components:{RwvHeader:be,RwvFooter:Oe},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},success:{color:"success",show:!1,timeout:1500,msg:"存檔成功"}}},computed:Object(C["a"])({},Object(P["c"])({loading:function(t){return t.app.loading}})),created:function(){Bus.$on("errors",this.onError),Bus.$on("success",this.onSuccess)},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{onError:function(t){if(!t)return this.err.msg="伺服器無回應. 請稍候再試",void(this.err.show=!0);t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})},onSuccess:function(t){this.success.show=!0,this.success.msg=t||"存檔成功"},onResponsiveInverted:function(){window.innerWidth<991?this.$store.commit(x["k"],!0):this.$store.commit(x["k"],!1)}}},Ee=Te,Pe=(n("078e"),n("7496")),Se=n("12b2"),Ce=n("549c"),Le=n("169a"),xe=n("2db4"),ze=Object(Ft["a"])(Ee,It,$t,!1,null,"6d4c7960",null);ze.options.__file="App.vue";var Ve=ze.exports;Wt()(ze,{VApp:Pe["a"],VCardTitle:Se["a"],VContent:Ce["a"],VDialog:Le["a"],VIcon:Qt["a"],VSnackbar:xe["a"]}),window.Bus=new r["default"]({}),r["default"].component("loading",o.a),E.beforeEach(function(t,e,n){Dt.dispatch(W["b"]).then(function(e){var r="user"===t.meta.type,c="guest"===t.meta.type,o="all"===t.meta.type;if(e){var i=R["a"].tokenStatus();return-1===i?o?n():n({path:"/auth",query:{returnUrl:t.path}}):0===i?o?n():n(c?{name:"home"}:{path:"/auth",query:{returnUrl:t.path}}):c?n({name:"home"}):n()}return r?n({path:"/login",query:{returnUrl:t.path}}):n()})}),r["default"].config.productionTip=!1,new r["default"]({router:E,store:Dt,render:function(t){return t(Ve)}}).$mount("#app")},"3f4e":function(t,e,n){"use strict";var r=n("f1c3"),c=n.n(r);c.a},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}c.keys=function(){return Object.keys(r)},c.resolve=o,t.exports=c,c.id="4678"},"5e4c":function(t,e,n){"use strict";var r=n("04e1"),c=n.n(r),o=n("c1df"),i=n.n(o),a="id_token",s="refresh_token",u=function(){return window.localStorage.getItem(a)},f=function(){return window.localStorage.getItem(s)},l=function(t,e){window.localStorage.setItem(a,t),window.localStorage.setItem(s,e)},d=function(){window.localStorage.removeItem(a),window.localStorage.removeItem(s)},m=function(){var t=window.localStorage.getItem(a);if(!t)return-1;var e=c()(t),n=i.a.unix(e.exp),r=i.a.utc(),o=n.diff(r,"minutes");return o<=0?-1:o<30?0:1};e["a"]={getToken:u,getRefreshToken:f,saveToken:l,destroyToken:d,tokenStatus:m}},a37b:function(t,e,n){"use strict";var r=n("d211"),c=n.n(r);c.a},a49b:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a});var r="https://localhost:44300",c="".concat(r,"/#/login"),o="".concat(r,"/api"),i="".concat(r,"/admin"),a={client_id:"753186496069-c7arjrt9ji0cd3rcbple37m1au2n1csh"}},ae60:function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("2b0e"),c=n("7bb1"),o=n("427f"),i=n.n(o);r["default"].use(c["b"]),c["a"].localize("zh_TW",i.a);var a={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{name:"名稱",email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機",code:"代碼"}}};c["a"].localize(a),c["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}})},c41f:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"p",function(){return c}),n.d(e,"m",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"j",function(){return a}),n.d(e,"o",function(){return s}),n.d(e,"n",function(){return u}),n.d(e,"q",function(){return f}),n.d(e,"s",function(){return l}),n.d(e,"c",function(){return d}),n.d(e,"k",function(){return m}),n.d(e,"t",function(){return h}),n.d(e,"a",function(){return b}),n.d(e,"i",function(){return v}),n.d(e,"r",function(){return p}),n.d(e,"l",function(){return k}),n.d(e,"h",function(){return g}),n.d(e,"d",function(){return j}),n.d(e,"u",function(){return y}),n.d(e,"f",function(){return w}),n.d(e,"v",function(){return _}),n.d(e,"e",function(){return O});n("cadf"),n("551c"),n("097d");var r="checkAuth",c="refreshToken",o="login",i="fbLogin",a="googleLogin",s="oAuthRegister",u="logout",f="register",l="sendConfirmEmail",d="confirmEmail",m="initChangePassword",h="setPassword",b="changePassword",v="forgotPassword",p="resetPassword",k="initWatch",g="fetchQuotes",j="createStrategy",y="storeStrategy",w="editStrategy",_="updateStrategy",O="deleteStrategy"},d211:function(t,e,n){},ea6b:function(t,e,n){},ee97:function(t,e,n){"use strict";var r=n("bc3a"),c=n.n(r),o=n("5e4c"),i=n("0feb"),a={setHeader:function(){var t=o["a"].getToken();t||(t=""),c.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},fetch:function(t,e){return e&&(t=i["a"].buildQuery(t,e)),new Promise(function(e,n){c.a.get(t).then(function(t){e(t.data)}).catch(function(t){n(t.response)})})},submit:function(t,e,n){return new Promise(function(r,o){c.a[t](e,n).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}};e["a"]=a},f1c3:function(t,e,n){},f6d6:function(t,e,n){},f721:function(t,e,n){"use strict";n.d(e,"i",function(){return r}),n.d(e,"k",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"n",function(){return a}),n.d(e,"h",function(){return s}),n.d(e,"e",function(){return u}),n.d(e,"m",function(){return f}),n.d(e,"l",function(){return l}),n.d(e,"j",function(){return d}),n.d(e,"g",function(){return m}),n.d(e,"d",function(){return h}),n.d(e,"f",function(){return b}),n.d(e,"a",function(){return v});var r="setLoading",c="setResponsive",o="logOut",i="setAuth",a="setUser",s="setKey",u="setDate",f="setStrategy",l="setStrategies",d="setRealTime",m="setIndicators",h="setChartQuotes",b="setError",v="clearError"}});
//# sourceMappingURL=index.8672288c.js.map