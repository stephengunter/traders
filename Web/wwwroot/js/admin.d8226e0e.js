(function(t){function e(e){for(var r,a,s=e[0],i=e[1],u=e[2],f=0,l=[];f<s.length;f++)a=s[f],o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={admin:0},o={admin:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d5c5c":"c2507b36","chunk-5d311792":"94c2f858","chunk-68038c1c":"200dd86a","chunk-01fdfe7e":"d68c8e41","chunk-78cc3757":"7b780468","chunk-f3147fce":"afc80103","chunk-cfdd4b5a":"5c9a0a09"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-5d311792":1,"chunk-68038c1c":1,"chunk-01fdfe7e":1,"chunk-78cc3757":1,"chunk-f3147fce":1,"chunk-cfdd4b5a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0d5c5c":"31d6cfe0","chunk-5d311792":"73534c05","chunk-68038c1c":"583271cb","chunk-01fdfe7e":"472074bb","chunk-78cc3757":"d73e8bfc","chunk-f3147fce":"2145aa0d","chunk-cfdd4b5a":"227b712b"}[t]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===o))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],f=u.getAttribute("data-href");if(f===r||f===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=c);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=s(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;c.push([1,"chunk-vendors"]),n()})({"0959":function(t,e,n){},"0feb":function(t,e,n){"use strict";var r=n("d4ec"),a=n("bee2"),o=(n("cadf"),n("551c"),n("097d"),function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"resolveErrorData",value:function(t){return console.log(t),t&&t.status&&400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}}]),t}());e["a"]=o},1:function(t,e,n){t.exports=n("9150")},"270f":function(t,e,n){"use strict";var r=n("ee97"),a=n("a49b"),o="".concat(a["b"],"/auth"),c={refreshToken:function(t){var e="".concat(o,"/RefreshToken"),n="post";return r["a"].submit(n,e,t)},login:function(t){var e="".concat(o,"/login"),n="post";return r["a"].submit(n,e,t)}};e["a"]=c},"302c":function(t,e,n){"use strict";n("ac6a"),n("456d");var r=n("d4ec"),a=n("bee2"),o=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(a["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e["a"]=o},"33ce":function(t,e,n){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="4678"},"5e4c":function(t,e,n){"use strict";var r=n("04e1"),a=n.n(r),o=n("c1df"),c=n.n(o),s="id_token",i="refresh_token",u=function(){return window.localStorage.getItem(s)},f=function(){return window.localStorage.getItem(i)},l=function(t,e){window.localStorage.setItem(s,t),window.localStorage.setItem(i,e)},d=function(){window.localStorage.removeItem(s),window.localStorage.removeItem(i)},m=function(){var t=window.localStorage.getItem(s);if(!t)return-1;var e=a()(t),n=c.a.unix(e.exp),r=c.a.utc(),o=n.diff(r,"minutes");return o<=0?-1:o<30?0:1};e["a"]={getToken:u,getRefreshToken:f,saveToken:l,destroyToken:d,tokenStatus:m}},7092:function(t,e,n){"use strict";var r=n("7a50"),a=n.n(r);a.a},7459:function(t,e,n){"use strict";var r=n("da30"),a=n.n(r);a.a},"7a50":function(t,e,n){},9150:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("9062"),o=n.n(a),c=(n("e40d"),n("ce5b")),s=n.n(c),i=(n("bf40"),n("5363"),{primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"});r["default"].use(s.a,{iconfont:"mdi",theme:i});n("ae60");for(var u=n("8c4f"),f=[{name:"",path:"/test",component:function(){return n.e("chunk-cfdd4b5a").then(n.bind(null,"607b"))},meta:{order:0,icon:"",title:"",menu:!1}},{name:"auth",path:"/auth",component:function(){return n.e("chunk-2d0d5c5c").then(n.bind(null,"705b"))},meta:{order:0,icon:"",title:"",menu:!1}},{name:"home",path:"/",component:function(){return n.e("chunk-5d311792").then(n.bind(null,"bd55"))},meta:{order:0,icon:"mdi-view-dashboard",title:"總覽",menu:!0}},{name:"users",path:"/user",component:function(){return Promise.all([n.e("chunk-68038c1c"),n.e("chunk-78cc3757")]).then(n.bind(null,"29b4"))},meta:{order:0,icon:"mdi-account",title:"會員管理",menu:!0}},{name:"stocks",path:"/stocks",component:function(){return Promise.all([n.e("chunk-68038c1c"),n.e("chunk-f3147fce")]).then(n.bind(null,"eb96"))},meta:{order:0,icon:"mdi-compass",title:"權值股管理",menu:!0}},{name:"",path:"/spec",component:function(){return Promise.all([n.e("chunk-68038c1c"),n.e("chunk-01fdfe7e")]).then(n.bind(null,"ec47"))},meta:{order:0,icon:"mdi-file-document-outline",title:"規格說明",menu:!0}}],l=0;l<f.length;l++)f[l].meta.order=l;var d=f;r["default"].use(u["a"]);var m,h,b,v=new u["a"]({routes:d}),p=n("2f62"),j=n("ade3"),g="setLoading",k="setResponsive",w="setDrawer",y="setImage",O="setColor",T="toggleDrawer",_="logOut",V="setAuth",C="setUser",x="setUsers",B="setStocks",$="setError",z="clearError",P={loading:!1,responsive:!1,drawer:null,color:"info",image:""},L=(m={},Object(j["a"])(m,g,function(t,e){t.loading=e}),Object(j["a"])(m,k,function(t,e){t.responsive=e}),Object(j["a"])(m,w,function(t,e){t.drawer=e}),Object(j["a"])(m,y,function(t,e){t.image=e}),Object(j["a"])(m,O,function(t,e){t.color=e}),Object(j["a"])(m,T,function(t){t.drawer=!t.drawer}),m),S={state:P,mutations:L},I=(n("673e"),n("28a5"),n("04e1")),A=n.n(I),D=n("302c"),E=n("270f"),F=n("ee97"),N=n("5e4c"),M=n("f888"),q={errors:new D["a"],user:{},isAuthenticated:!!N["a"].getToken()},W={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}};function J(t){var e=t.roles.split(","),n=e.filter(function(t){return"DEV"===t.toUpperCase()||"BOSS"===t.toUpperCase()});return!(!n||!n.length)}var Q,Y,K=(h={},Object(j["a"])(h,M["g"],function(t){t.commit(_)}),Object(j["a"])(h,M["a"],function(t){return new Promise(function(e){var n=N["a"].getToken();if(n){F["a"].setHeader();var r=A()(n);if(J(r))t.commit(C,{id:r.id,name:r.sub}),e(!0);else{var a=!1;t.commit(_,a),e(!1)}}else t.commit(_),e(!1)})}),Object(j["a"])(h,M["h"],function(t){return new Promise(function(e){var n=N["a"].getToken(),r=N["a"].getRefreshToken();n&&r?(t.commit(g,!0),E["a"].refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(V,{token:n.accessToken.token,refreshToken:n.refreshToken}),t.commit(g,!1),e(!0)}).catch(function(n){t.commit(g,!1),t.commit(_),e(!1)})):(t.commit(_),e(!1))})}),h),H=(b={},Object(j["a"])(b,$,function(t,e){t.errors.record(e)}),Object(j["a"])(b,z,function(t){t.errors.clear()}),Object(j["a"])(b,C,function(t,e){t.user=e}),Object(j["a"])(b,V,function(t,e){N["a"].saveToken(e.token,e.refreshToken);var n=A()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0,t.errors=new D["a"]}),Object(j["a"])(b,_,function(t){t.isAuthenticated=!1,t.user={},t.errors=new D["a"],N["a"].destroyToken()}),b),U={state:q,actions:K,mutations:H,getters:W},X=n("be94"),Z=n("a49b"),G="".concat(Z["a"],"/users"),R={fetch:function(t){var e="".concat(G);return F["a"].fetch(e,t)}},tt=R,et={pageList:null},nt=Object(X["a"])({},et),rt={},at=Object(j["a"])({},M["f"],function(t,e){return t.commit(g,!0),tt.fetch(e).then(function(e){t.commit(x,e),t.commit(g,!1)}).catch(function(e){t.commit(g,!1),Bus.$emit("errors",e)})}),ot=Object(j["a"])({},x,function(t,e){t.pageList=e}),ct={state:nt,actions:at,mutations:ot,getters:rt},st="".concat(Z["a"],"/stocks"),it={fetch:function(t){var e="".concat(st);return F["a"].fetch(e,t)},create:function(){var t="".concat(st,"/create");return F["a"].fetch(t)},store:function(t){var e="".concat(st);return F["a"].submit("post",e,t)},edit:function(t){var e="".concat(st,"/edit/").concat(t);return F["a"].fetch(e)},update:function(t){var e="".concat(st,"/").concat(t.id);return F["a"].submit("put",e,t)},remove:function(t){var e="".concat(st,"/").concat(t);return F["a"].submit("delete",e)}},ut=it,ft=n("0feb"),lt={errors:new D["a"],pageList:null},dt=Object(X["a"])({},lt),mt={},ht=(Q={},Object(j["a"])(Q,M["e"],function(t,e){return t.commit(g,!0),ut.fetch(e).then(function(e){t.commit(B,e),t.commit(g,!1)}).catch(function(e){t.commit(g,!1),Bus.$emit("errors",e)})}),Object(j["a"])(Q,M["b"],function(t){return t.commit(z),new Promise(function(t,e){ut.create().then(function(e){return t(e)}).catch(function(t){Bus.$emit("errors",t),e(t)})})}),Object(j["a"])(Q,M["i"],function(t,e){return t.commit(z),t.commit(g,!0),new Promise(function(n,r){ut.store(e).then(function(e){t.commit(g,!1),n(e)}).catch(function(e){t.commit(g,!1);var n=ft["a"].resolveErrorData(e);n?t.commit($,n):Bus.$emit("errors",e),r(e)})})}),Object(j["a"])(Q,M["d"],function(t,e){return t.commit(z),new Promise(function(t,n){ut.edit(e).then(function(e){return t(e)}).catch(function(t){Bus.$emit("errors",t),n(t)})})}),Object(j["a"])(Q,M["j"],function(t,e){return t.commit(z),t.commit(g,!0),new Promise(function(n,r){ut.update(e).then(function(){t.commit(g,!1),n(!0)}).catch(function(e){t.commit(g,!1);var n=ft["a"].resolveErrorData(e);n?t.commit($,n):Bus.$emit("errors",e),r(e)})})}),Object(j["a"])(Q,M["c"],function(t,e){return t.commit(z),t.commit(g,!0),new Promise(function(n,r){ut.remove(e).then(function(){t.commit(g,!1),n(!0)}).catch(function(e){t.commit(g,!1),Bus.$emit("errors",e),r(e)})})}),Q),bt=(Y={},Object(j["a"])(Y,$,function(t,e){t.errors.record(e)}),Object(j["a"])(Y,z,function(t){t.errors.clear()}),Object(j["a"])(Y,B,function(t,e){t.pageList=e}),Y),vt={state:dt,actions:ht,mutations:bt,getters:mt};r["default"].use(p["a"]);var pt=new p["a"].Store({loading:!1,modules:{app:S,auth:U,users:ct,stocks:vt}}),jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.isAuthenticated?n("TheToolBar",{attrs:{user:t.currentUser,responsive:t.responsive}}):t._e(),t.isAuthenticated?n("TheDrawer",{attrs:{responsive:t.responsive,image:t.image,color:t.color}}):t._e(),n("TheView"),n("v-snackbar",{attrs:{timeout:t.success.timeout,color:t.success.color,top:!0,right:!0,dark:""},model:{value:t.success.show,callback:function(e){t.$set(t.success,"show",e)},expression:"success.show"}},[n("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\tmdi-check-circle\n\t\t\t")]),n("span",{staticClass:"successText cn"},[t._v("\n\t\t\t\t"+t._s(t.success.msg)+"\n\t\t\t")])],1),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\t\t\tmdi-alert-circle\n\t\t\t\t")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},gt=[],kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",[t._v("mdi-settings")])],1),n("v-card",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Sidebar Filters")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return n("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(n){t.setColor(e)}}})}),1),n("v-divider",{staticClass:"mt-3"})],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Images")])]),t._l(t.images,function(e){return n("v-flex",{key:e,attrs:{xs3:""}},[n("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(n){t.setImage(e)}}})],1)})],2)],1)],1)],1)},wt=[],yt={name:"TheFilter",data:function(){return{colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(X["a"])({},Object(p["c"])({image:function(t){return t.app.image},color:function(t){return t.app.color}})),methods:{setImage:function(t){this.$store.commit(y,t)},setColor:function(t){this.$store.commit(O,t)}}},Ot=yt,Tt=(n("cd17"),n("2877")),_t=n("6544"),Vt=n.n(_t),Ct=n("8212"),xt=n("8336"),Bt=n("b0af"),$t=n("a523"),zt=n("ce7e"),Pt=n("0e8f"),Lt=n("132d"),St=n("adda"),It=n("a722"),At=n("e449"),Dt=Object(Tt["a"])(Ot,kt,wt,!1,null,null,null);Dt.options.__file="TheFilter.vue";var Et=Dt.exports;Vt()(Dt,{VAvatar:Ct["a"],VBtn:xt["a"],VCard:Bt["a"],VContainer:$t["a"],VDivider:zt["a"],VFlex:Pt["a"],VIcon:Lt["a"],VImg:St["a"],VLayout:It["a"],VMenu:At["a"]});var Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[n("div",{staticClass:"v-toolbar-title"},[n("v-toolbar-title",{staticClass:"tertiary--text font-weight-light"},[t.responsive?n("v-btn",{staticClass:"default v-btn--simple",attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[n("v-icon",[t._v("mdi-view-list")])],1):t._e(),n("span",{staticClass:"font-weight-light cn",staticStyle:{"font-size":"1.2rem"}},[t._v(" "+t._s(t.title)+" ")])],1)],1),n("v-spacer"),n("v-toolbar-items",[n("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t._e(),t._e(),t._e(),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("span",{staticClass:"mr-1",staticStyle:{color:"#000"}},[t._v(t._s(t.user.name))]),n("v-icon",{staticStyle:{color:"#000"}},[t._v("mdi-menu-down")])],1),n("v-card",[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("v-list-tile-action",[n("v-icon",[t._v("mdi-logout-variant")])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],1)],1)],1)],1)],1)],1)},Nt=[],Mt={name:"TheToolBar",props:{user:{type:Object,default:null},responsive:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:""}},watch:{$route:function(t){this.title=t.meta.title}},methods:{onClickBtn:function(){this.$store.commit(T)},onClick:function(){},logout:function(){this.$store.dispatch(M["g"]).then(function(){return window.location=Z["d"]})}}},qt=Mt,Wt=(n("7092"),n("4ca6")),Jt=n("8860"),Qt=n("ba95"),Yt=n("40fe"),Kt=n("5d23"),Ht=n("9910"),Ut=n("2677"),Xt=n("71d9"),Zt=n("2a7f"),Gt=Object(Tt["a"])(qt,Ft,Nt,!1,null,"2f9507d4",null);Gt.options.__file="TheToolBar.vue";var Rt=Gt.exports;Vt()(Gt,{VBadge:Wt["a"],VBtn:xt["a"],VCard:Bt["a"],VFlex:Pt["a"],VIcon:Lt["a"],VList:Jt["a"],VListTile:Qt["a"],VListTileAction:Yt["a"],VListTileContent:Kt["a"],VListTileTitle:Kt["b"],VMenu:At["a"],VSpacer:Ht["a"],VTextField:Ut["a"],VToolbar:Xt["a"],VToolbarItems:Zt["a"],VToolbarTitle:Zt["b"]});var te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[n("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-title",{staticClass:"title",staticStyle:{"text-align":"center"}},[n("span",{staticClass:"cn",staticStyle:{"font-size":"1.2rem"}},[t._v("交易者 - 管理介面")])])],1),n("v-divider"),t._e(),t._l(t.links,function(e){return n("v-list-tile",{key:e.order,staticClass:"v-list-item",attrs:{to:e.path,"active-class":t.color,avatar:""}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-title",{staticClass:"cn",domProps:{textContent:t._s(e.title)}})],1)})],2)],1)},ee=[],ne=(n("7f7f"),{name:"TheDrawer",props:{color:{type:String,default:"info"},image:{type:String,default:""},responsive:{type:Boolean,default:!1}},data:function(){return{}},computed:{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return t.meta.menu}):[]},links:function(){var t=this;return this.routes.map(function(e){return t.mapLink(e)})},items:function(){return this.$t("Layout.View.items")}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},setDrawer:function(t){this.$store.commit(w,t)},toggleDrawer:function(){this.$store.commit(T)}}}),re=ne,ae=(n("a539"),n("f774")),oe=Object(Tt["a"])(re,te,ee,!1,null,null,null);oe.options.__file="TheDrawer.vue";var ce=oe.exports;Vt()(oe,{VDivider:zt["a"],VIcon:Lt["a"],VLayout:It["a"],VListTile:Qt["a"],VListTileAction:Yt["a"],VListTileTitle:Kt["b"],VNavigationDrawer:ae["a"],VTextField:Ut["a"]});var se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"core-view"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)])},ie=[],ue={name:"TheView"},fe=ue,le=(n("ccab"),n("549c")),de=n("0789"),me=Object(Tt["a"])(fe,se,ie,!1,null,null,null);me.options.__file="TheView.vue";var he=me.exports;Vt()(me,{VContent:le["a"],VFadeTransition:de["b"]});var be={name:"App",components:{TheFilter:Et,TheToolBar:Rt,TheDrawer:ce,TheView:he},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},success:{color:"success",show:!1,timeout:1500,msg:"存檔成功"},date:""}},computed:Object(X["a"])({},Object(p["b"])(["isAuthenticated","currentUser"]),Object(p["c"])({loading:function(t){return t.app.loading},responsive:function(t){return t.app.responsive},image:function(t){return t.app.image},color:function(t){return t.app.color}})),created:function(){Bus.$on("errors",this.onError),Bus.$on("success",this.onSuccess)},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{onError:function(t){if(!t)return this.err.msg="伺服器無回應. 請稍候再試",void(this.err.show=!0);t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})},onSuccess:function(t){this.success.show=!0,this.success.msg=t||"存檔成功"},onResponsiveInverted:function(){window.innerWidth<991?this.$store.commit(k,!0):this.$store.commit(k,!1)}}},ve=be,pe=(n("7459"),n("7496")),je=n("12b2"),ge=n("169a"),ke=n("2db4"),we=Object(Tt["a"])(ve,jt,gt,!1,null,null,null);we.options.__file="App.vue";var ye=we.exports;Vt()(we,{VApp:pe["a"],VCardTitle:je["a"],VDialog:ge["a"],VIcon:Lt["a"],VSnackbar:ke["a"]}),window.Bus=new r["default"]({}),r["default"].component("loading",o.a),v.beforeEach(function(t,e,n){if("/auth"===t.path)return n();pt.dispatch(M["a"]).then(function(e){if(e){var r=N["a"].tokenStatus();return-1===r?n({path:"/auth",query:{returnUrl:t.path}}):0===r?n({path:"/auth",query:{returnUrl:t.path}}):n()}return n({path:"/auth"})})}),r["default"].config.productionTip=!1,new r["default"]({router:v,store:pt,render:function(t){return t(ye)}}).$mount("#app")},a49b:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c});n("cadf"),n("551c"),n("097d");var r="https://localhost:44300",a="".concat(r,"/#/login"),o="".concat(r,"/api"),c="".concat(r,"/admin"),s={url:"https://www.facebook.com",id:"285921658793697",secret:"e21467494d13abf65a60e05b04de5f44",version:"v3.2",page:"/oauth/facebook"};"".concat(s.url,"/").concat(s.version,"/dialog/oauth?&response_type=token&display=popup&client_id=").concat(s.id),"&display=popup&redirect_uri=".concat(r).concat(s.page,"&scope=email")},a539:function(t,e,n){"use strict";var r=n("0959"),a=n.n(r);a.a},a60d:function(t,e,n){},ae60:function(t,e,n){"use strict";var r=n("2b0e"),a=n("7bb1"),o=n("427f"),c=n.n(o);r["default"].use(a["b"]),a["a"].localize("zh_TW",c.a);var s={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{name:"名稱",email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機",code:"代碼"}}};a["a"].localize(s),a["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}})},ccab:function(t,e,n){"use strict";var r=n("33ce"),a=n.n(r);a.a},cd17:function(t,e,n){"use strict";var r=n("a60d"),a=n.n(r);a.a},da30:function(t,e,n){},ee97:function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),o=n("5e4c"),c=n("0feb"),s={setHeader:function(){var t=o["a"].getToken();t||(t=""),a.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},fetch:function(t,e){return e&&(t=c["a"].buildQuery(t,e)),new Promise(function(e,n){a.a.get(t).then(function(t){e(t.data)}).catch(function(t){n(t)})})},submit:function(t,e,n){return new Promise(function(r,o){a.a[t](e,n).then(function(t){r(t.data)}).catch(function(t){o(t.response)})})}};e["a"]=s},f888:function(t,e,n){"use strict";n.d(e,"g",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"h",function(){return o}),n.d(e,"f",function(){return c}),n.d(e,"e",function(){return s}),n.d(e,"b",function(){return i}),n.d(e,"i",function(){return u}),n.d(e,"d",function(){return f}),n.d(e,"j",function(){return l}),n.d(e,"c",function(){return d});var r="logout",a="checkAuth",o="refreshToken",c="fetchUsers",s="fetchStocks",i="createStock",u="storeStock",f="editStock",l="updateStock",d="deleteStock"}});
//# sourceMappingURL=admin.d8226e0e.js.map