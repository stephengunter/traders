(function(t){function e(e){for(var r,a,o=e[0],s=e[1],u=e[2],f=0,l=[];f<o.length;f++)a=o[f],c[a]&&l.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={admin:0},c={admin:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-06ab8843":"4eee5944","chunk-12fa1aec":"a1c283bf","chunk-3c565e72":"820bcefc","chunk-2a01bfc4":"417c44b2","chunk-fa4d1a02":"245eb06e","chunk-21e204fe":"27e6bbdc","chunk-2d0b3d8f":"9f27c0e9","chunk-63728713":"20137c91","chunk-6b779950":"344cdad0","chunk-174b4e3a":"10e7234b","chunk-2d0d5c5c":"407434ac"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-06ab8843":1,"chunk-12fa1aec":1,"chunk-3c565e72":1,"chunk-2a01bfc4":1,"chunk-fa4d1a02":1,"chunk-21e204fe":1,"chunk-63728713":1,"chunk-6b779950":1,"chunk-174b4e3a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-06ab8843":"73534c05","chunk-12fa1aec":"51ce9aab","chunk-3c565e72":"e296bdac","chunk-2a01bfc4":"df50d670","chunk-fa4d1a02":"e7d360fa","chunk-21e204fe":"a24d8c22","chunk-2d0b3d8f":"31d6cfe0","chunk-63728713":"17a789c0","chunk-6b779950":"6baaf9bd","chunk-174b4e3a":"227b712b","chunk-2d0d5c5c":"31d6cfe0"}[t]+".css",c=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],f=u.getAttribute("data-href");if(f===r||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){a[t]=0}));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=c[t]=[e,n]});e.push(r[2]=i);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(t),u=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}c[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;i.push([1,"chunk-vendors"]),n()})({"0959":function(t,e,n){},"0feb":function(t,e,n){"use strict";n("28a5");var r=n("d4ec"),a=n("bee2"),c=(n("cadf"),n("551c"),n("097d"),function(){function t(){Object(r["a"])(this,t)}return Object(a["a"])(t,null,[{key:"getScrollBarWidth",value:function(){return Common.getScrollBarWidth()}},{key:"isSmallScreen",value:function(){return window.innerWidth<991}},{key:"resolveErrorData",value:function(t){return console.log(t),t&&t.status&&400===t.status?t.data:null}},{key:"BusEmitError",value:function(t,e){var n=e;t.data&&t.data.msg&&(n=t.data.msg),n||(n="系統無回應，請稍後再試"),Bus.$emit("errors",{title:n,status:t.status})}},{key:"BusEmitOK",value:function(t){var e="資料已存檔";t&&(e=t);var n={title:e,status:200};Bus.$emit("okmsg",n)}},{key:"tryParseInt",value:function(t){return t?parseInt(t):0}},{key:"isTrue",value:function(t){return"number"==typeof t?t>0:"string"==typeof t?"true"==t.toLowerCase()||"1"==t:"boolean"==typeof t&&t}},{key:"buildQuery",value:function(t,e){for(var n in t+="?",e){var r=e[n];t+=n+"="+r+"&"}return t.substr(0,t.length-1)}},{key:"genderOptions",value:function(){return[{value:1,text:"男"},{value:0,text:"女"}]}},{key:"activeOptions",value:function(){return[{value:!0,text:"上架中"},{value:!1,text:"已下架"}]}},{key:"yesNoOptions",value:function(){return[{value:!0,text:"是"},{value:!1,text:"否"}]}},{key:"numberOptions",value:function(t,e,n){var r=[];if(n)for(var a=e;a>=t;a--)r.push({text:a,value:a});else for(a=t;a<=e;a++)r.push({text:a,value:a});return r}},{key:"toDateString",value:function(t){if(t=String(t),8!=t.length)return"";var e=t.substring(0,4),n=t.substring(4,6),r=t.substring(6,8);return"".concat(e,"-").concat(n,"-").concat(r)}},{key:"dateNumber",value:function(t){var e=new Date(t),n=this.toNumberString(e.getFullYear()),r=this.toNumberString(e.getMonth()+1),a=this.toNumberString(e.getDate());return"".concat(n).concat(r).concat(a)}},{key:"toNumberString",value:function(t){return t<10?"0"+String(t):String(t)}},{key:"timeString",value:function(t){t=String(t),t.length<6&&(t="0"+t);var e=t.substring(0,2),n=t.substring(2,4),r=t.substring(4,6);return"".concat(e,":").concat(n,":").concat(r)}},{key:"resolveTimeNumber",value:function(t){t=String(t);var e=t.split(":");return 2===e.length?this.timeNumber(e[0],e[1]):0}},{key:"timeNumber",value:function(t,e){return t=parseInt(t),e=parseInt(e),1e4*t+100*e}}]),t}());e["a"]=c},1:function(t,e,n){t.exports=n("9150")},"270f":function(t,e,n){"use strict";var r=n("ee97"),a=n("a49b"),c="".concat(a["b"],"/auth"),i={refreshToken:function(t){var e="".concat(c,"/RefreshToken"),n="post";return r["a"].submit(n,e,t)},login:function(t){var e="".concat(c,"/login"),n="post";return r["a"].submit(n,e,t)}};e["a"]=i},"302c":function(t,e,n){"use strict";n("ac6a"),n("456d");var r=n("d4ec"),a=n("bee2"),c=function(){function t(){Object(r["a"])(this,t),this.errors={}}return Object(a["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}();e["a"]=c},"33ce":function(t,e,n){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=c(t);return n(e)}function c(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=c,t.exports=a,a.id="4678"},"5e4c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var r=n("04e1"),a=n.n(r),c=n("c1df"),i=n.n(c),o="id_token",s="refresh_token",u=function(){return window.localStorage.getItem(o)},f=function(){return window.localStorage.getItem(s)},l=function(t,e){window.localStorage.setItem(o,t),window.localStorage.setItem(s,e)},d=function(){window.localStorage.removeItem(o),window.localStorage.removeItem(s)},m=function(){var t=window.localStorage.getItem(o);if(!t)return-1;var e=a()(t),n=i.a.unix(e.exp),r=i.a.utc(),c=n.diff(r,"minutes");return c<=0?-1:c<30?0:1};e["a"]={getToken:u,getRefreshToken:f,saveToken:l,destroyToken:d,tokenStatus:m}},7092:function(t,e,n){"use strict";var r=n("7a50"),a=n.n(r);a.a},7459:function(t,e,n){"use strict";var r=n("da30"),a=n.n(r);a.a},"7a50":function(t,e,n){},9150:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("9062"),c=n.n(a),i=(n("e40d"),n("ce5b")),o=n.n(i),s=(n("bf40"),n("5363"),{primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"});r["default"].use(o.a,{iconfont:"mdi",theme:s});n("ae60");for(var u=n("31bd"),f=n("8c4f"),l=[{name:"",path:"/test",component:function(){return n.e("chunk-174b4e3a").then(n.bind(null,"607b"))},meta:{order:0,icon:"",title:"",menu:!1}},{name:"auth",path:"/auth",component:function(){return n.e("chunk-2d0d5c5c").then(n.bind(null,"705b"))},meta:{order:0,icon:"",title:"",menu:!1}},{name:"home",path:"/",component:function(){return n.e("chunk-06ab8843").then(n.bind(null,"bd55"))},meta:{order:0,icon:"mdi-view-dashboard",title:"總覽",menu:!0}},{name:"users",path:"/user",component:function(){return Promise.all([n.e("chunk-12fa1aec"),n.e("chunk-fa4d1a02"),n.e("chunk-3c565e72"),n.e("chunk-2d0b3d8f")]).then(n.bind(null,"29b4"))},meta:{order:0,icon:"mdi-account",title:"會員管理",menu:!0}},{name:"indicators",path:"/indicators",component:function(){return Promise.all([n.e("chunk-12fa1aec"),n.e("chunk-3c565e72"),n.e("chunk-2a01bfc4")]).then(n.bind(null,"f1b4"))},meta:{order:0,icon:"mdi-chart-areaspline",title:"指標管理",menu:!0}},{name:"indicators-create",path:"/indicators/create",component:function(){return Promise.all([n.e("chunk-12fa1aec"),n.e("chunk-fa4d1a02"),n.e("chunk-6b779950")]).then(n.bind(null,"e910"))},meta:{order:0,icon:"mdi-chart-areaspline",title:"新增指標",menu:!1}},{name:"indicators-edit",path:"/indicators/:id",component:function(){return Promise.all([n.e("chunk-12fa1aec"),n.e("chunk-fa4d1a02"),n.e("chunk-6b779950")]).then(n.bind(null,"e910"))},meta:{order:0,icon:"mdi-chart-areaspline",title:"編輯指標",menu:!1}},{name:"stocks",path:"/stocks",component:function(){return Promise.all([n.e("chunk-12fa1aec"),n.e("chunk-fa4d1a02"),n.e("chunk-3c565e72"),n.e("chunk-63728713")]).then(n.bind(null,"eb96"))},meta:{order:0,icon:"mdi-compass",title:"權值股管理",menu:!0}},{name:"",path:"/spec",component:function(){return Promise.all([n.e("chunk-12fa1aec"),n.e("chunk-fa4d1a02"),n.e("chunk-21e204fe")]).then(n.bind(null,"ec47"))},meta:{order:0,icon:"mdi-file-document-outline",title:"規格說明",menu:!0}}],d=0;d<l.length;d++)l[d].meta.order=d;var m=l;r["default"].use(f["a"]);var h,b,v,p=new f["a"]({routes:m}),g=n("2f62"),j=n("ade3"),k=n("be94"),w=n("302c"),y=n("ce9b"),O={loading:!1,responsive:!1,drawer:null,color:"info",image:"",errorList:new w["a"]},T=Object(k["a"])({},O),_=(h={},Object(j["a"])(h,y["i"],function(t,e){t.loading=e}),Object(j["a"])(h,y["j"],function(t,e){t.responsive=e}),Object(j["a"])(h,y["e"],function(t,e){t.drawer=e}),Object(j["a"])(h,y["g"],function(t,e){t.image=e}),Object(j["a"])(h,y["d"],function(t,e){t.color=e}),Object(j["a"])(h,y["n"],function(t){t.drawer=!t.drawer}),Object(j["a"])(h,y["f"],function(t,e){t.errorList.record(e)}),Object(j["a"])(h,y["a"],function(t){t.errorList.clear()}),h),S={state:T,mutations:_},V=(n("673e"),n("28a5"),n("04e1")),x=n.n(V),C=n("270f"),P=n("ee97"),E=n("5e4c"),z=n("f888"),I={errors:new w["a"],user:{},isAuthenticated:!!E["a"].getToken()},L={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}};function B(t){var e=t.roles.split(","),n=e.filter(function(t){return"DEV"===t.toUpperCase()||"BOSS"===t.toUpperCase()});return!(!n||!n.length)}var $,D,A=(b={},Object(j["a"])(b,z["k"],function(t){t.commit(y["b"])}),Object(j["a"])(b,z["a"],function(t){return new Promise(function(e){var n=E["a"].getToken();if(n){P["a"].setHeader();var r=x()(n);if(B(r))t.commit(y["l"],{id:r.id,name:r.sub}),e(!0);else{var a=!1;t.commit(y["b"],a),e(!1)}}else t.commit(y["b"]),e(!1)})}),Object(j["a"])(b,z["l"],function(t){return new Promise(function(e){var n=E["a"].getToken(),r=E["a"].getRefreshToken();n&&r?(t.commit(y["i"],!0),C["a"].refreshToken({accessToken:n,refreshToken:r}).then(function(n){t.commit(y["c"],{token:n.accessToken.token,refreshToken:n.refreshToken}),t.commit(y["i"],!1),e(!0)}).catch(function(n){t.commit(y["i"],!1),t.commit(y["b"]),e(!1)})):(t.commit(y["b"]),e(!1))})}),b),N=(v={},Object(j["a"])(v,y["f"],function(t,e){t.errors.record(e)}),Object(j["a"])(v,y["a"],function(t){t.errors.clear()}),Object(j["a"])(v,y["l"],function(t,e){t.user=e}),Object(j["a"])(v,y["c"],function(t,e){E["a"].saveToken(e.token,e.refreshToken);var n=x()(e.token);t.user={id:n.id,name:n.sub},t.isAuthenticated=!0,t.errors=new w["a"]}),Object(j["a"])(v,y["b"],function(t){t.isAuthenticated=!1,t.user={},t.errors=new w["a"],E["a"].destroyToken()}),v),F={state:I,actions:A,mutations:N,getters:L},U=n("a49b"),M="".concat(U["a"],"/users"),q={fetch:function(t){var e="".concat(M);return P["a"].fetch(e,t)}},R=q,W={pageList:null},H=Object(k["a"])({},W),J={},Y=Object(j["a"])({},z["j"],function(t,e){return t.commit(y["i"],!0),R.fetch(e).then(function(e){t.commit(y["m"],e),t.commit(y["i"],!1)}).catch(function(e){t.commit(y["i"],!1),Bus.$emit("errors",e)})}),Q=Object(j["a"])({},y["m"],function(t,e){t.pageList=e}),K={state:H,actions:Y,mutations:Q,getters:J},G="".concat(U["a"],"/stocks"),X={fetch:function(t){var e="".concat(G);return P["a"].fetch(e,t)},create:function(){var t="".concat(G,"/create");return P["a"].fetch(t)},store:function(t){var e="".concat(G);return P["a"].submit("post",e,t)},edit:function(t){var e="".concat(G,"/edit/").concat(t);return P["a"].fetch(e)},update:function(t){var e="".concat(G,"/").concat(t.id);return P["a"].submit("put",e,t)},remove:function(t){var e="".concat(G,"/").concat(t);return P["a"].submit("delete",e)}},Z=X,tt=n("0feb"),et={pageList:null},nt=Object(k["a"])({},et),rt={},at=($={},Object(j["a"])($,z["i"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){Z.fetch(e).then(function(e){t.commit(y["k"],e),n(e)}).catch(function(t){r(t)}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])($,z["c"],function(t){return new Promise(function(e,n){Z.create().then(function(t){return e(t)}).catch(function(t){n(t)}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])($,z["n"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){Z.store(e).then(function(t){n(t)}).catch(function(t){r(tt["a"].resolveErrorData(t))}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])($,z["g"],function(t,e){return new Promise(function(n,r){Z.edit(e).then(function(t){return n(t)}).catch(function(t){r(t)}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])($,z["p"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){Z.update(e).then(function(){n(!0)}).catch(function(t){r(tt["a"].resolveErrorData(t))}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])($,z["e"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){Z.remove(e).then(function(){n(!0)}).catch(function(t){r(tt["a"].resolveErrorData(t))}).finally(function(){t.commit(y["i"],!1)})})}),$),ct=Object(j["a"])({},y["k"],function(t,e){t.pageList=e}),it={state:nt,actions:at,mutations:ct,getters:rt},ot="".concat(U["a"],"/indicators"),st={fetch:function(t){var e="".concat(ot);return P["a"].fetch(e,t)},create:function(){var t="".concat(ot,"/create");return P["a"].fetch(t)},store:function(t){var e="".concat(ot);return P["a"].submit("post",e,t)},edit:function(t){var e="".concat(ot,"/edit/").concat(t);return P["a"].fetch(e)},update:function(t){var e="".concat(ot,"/").concat(t.id);return P["a"].submit("put",e,t)},remove:function(t){var e="".concat(ot,"/").concat(t);return P["a"].submit("delete",e)}},ut=st,ft={pageList:null},lt=Object(k["a"])({},ft),dt={},mt=(D={},Object(j["a"])(D,z["h"],function(t,e){var n={active:tt["a"].isTrue(e)};return t.commit(y["i"],!0),new Promise(function(e,r){ut.fetch(n).then(function(n){t.commit(y["h"],n),e(n)}).catch(function(t){r(t)}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])(D,z["b"],function(t){return new Promise(function(e,n){ut.create().then(function(t){return e(t)}).catch(function(t){n(t)}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])(D,z["m"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){ut.store(e).then(function(t){n(t)}).catch(function(t){r(tt["a"].resolveErrorData(t))}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])(D,z["f"],function(t,e){return new Promise(function(n,r){ut.edit(e).then(function(t){return n(t)}).catch(function(t){r(t)}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])(D,z["o"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){ut.update(e).then(function(){n(!0)}).catch(function(t){r(tt["a"].resolveErrorData(t))}).finally(function(){t.commit(y["i"],!1)})})}),Object(j["a"])(D,z["d"],function(t,e){return t.commit(y["i"],!0),new Promise(function(n,r){ut.remove(e).then(function(){n(!0)}).catch(function(t){r(tt["a"].resolveErrorData(t))}).finally(function(){t.commit(y["i"],!1)})})}),D),ht=Object(j["a"])({},y["h"],function(t,e){t.pageList=e}),bt={state:lt,actions:mt,mutations:ht,getters:dt};r["default"].use(g["a"]);var vt=new g["a"].Store({loading:!1,modules:{app:S,auth:F,users:K,stocks:it,indicators:bt}}),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.isAuthenticated?n("TheToolBar",{attrs:{user:t.currentUser,responsive:t.responsive}}):t._e(),t.isAuthenticated?n("TheDrawer",{attrs:{responsive:t.responsive,image:t.image,color:t.color}}):t._e(),n("TheView"),n("v-snackbar",{attrs:{timeout:t.success.timeout,color:t.success.color,top:!0,right:!0,dark:""},model:{value:t.success.show,callback:function(e){t.$set(t.success,"show",e)},expression:"success.show"}},[n("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\tmdi-check-circle\n\t\t\t")]),n("span",{staticClass:"successText cn"},[t._v("\n\t\t\t\t"+t._s(t.success.msg)+"\n\t\t\t")])],1),n("v-dialog",{attrs:{width:"480"},model:{value:t.err.show,callback:function(e){t.$set(t.err,"show",e)},expression:"err.show"}},[n("v-card-title",{staticClass:"headline red lighten-1"},[n("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\t\t\tmdi-alert-circle\n\t\t\t\t")]),n("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\t"+t._s(t.err.msg)+"\n\t\t\t\t")])],1)],1)],1)},gt=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",[t._v("mdi-settings")])],1),n("v-card",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Sidebar Filters")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return n("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(n){t.setColor(e)}}})}),1),n("v-divider",{staticClass:"mt-3"})],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("Images")])]),t._l(t.images,function(e){return n("v-flex",{key:e,attrs:{xs3:""}},[n("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(n){t.setImage(e)}}})],1)})],2)],1)],1)],1)},kt=[],wt={name:"TheFilter",data:function(){return{colors:["primary","info","success","warning","danger"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(k["a"])({},Object(g["c"])({image:function(t){return t.app.image},color:function(t){return t.app.color}})),methods:{setImage:function(t){this.$store.commit(y["g"],t)},setColor:function(t){this.$store.commit(y["d"],t)}}},yt=wt,Ot=(n("cd17"),n("2877")),Tt=n("6544"),_t=n.n(Tt),St=n("8212"),Vt=n("8336"),xt=n("b0af"),Ct=n("a523"),Pt=n("ce7e"),Et=n("0e8f"),zt=n("132d"),It=n("adda"),Lt=n("a722"),Bt=n("e449"),$t=Object(Ot["a"])(yt,jt,kt,!1,null,null,null);$t.options.__file="TheFilter.vue";var Dt=$t.exports;_t()($t,{VAvatar:St["a"],VBtn:Vt["a"],VCard:xt["a"],VContainer:Ct["a"],VDivider:Pt["a"],VFlex:Et["a"],VIcon:zt["a"],VImg:It["a"],VLayout:Lt["a"],VMenu:Bt["a"]});var At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[n("div",{staticClass:"v-toolbar-title"},[n("v-toolbar-title",{staticClass:"tertiary--text font-weight-light"},[t.responsive?n("v-btn",{staticClass:"default v-btn--simple",attrs:{dark:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[n("v-icon",[t._v("mdi-view-list")])],1):t._e(),n("span",{staticClass:"font-weight-light cn",staticStyle:{"font-size":"1.2rem"}},[t._v(" "+t._s(t.title)+" ")])],1)],1),n("v-spacer"),n("v-toolbar-items",[n("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t._e(),t._e(),t._e(),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{staticClass:"lowercase",attrs:{slot:"activator",dark:"",flat:""},slot:"activator"},[n("span",{staticClass:"mr-1",staticStyle:{color:"#000"}},[t._v(t._s(t.user.name))]),n("v-icon",{staticStyle:{color:"#000"}},[t._v("mdi-menu-down")])],1),n("v-card",[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[n("v-list-tile-action",[n("v-icon",[t._v("mdi-logout-variant")])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"cn"},[t._v("登出")])],1)],1)],1)],1)],1)],1)],1)],1)},Nt=[],Ft={name:"TheToolBar",props:{user:{type:Object,default:null},responsive:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:""}},watch:{$route:function(t){this.title=t.meta.title}},methods:{onClickBtn:function(){this.$store.commit(y["n"])},onClick:function(){},logout:function(){this.$store.dispatch(z["k"]).then(function(){return window.location=U["e"]})}}},Ut=Ft,Mt=(n("7092"),n("4ca6")),qt=n("8860"),Rt=n("ba95"),Wt=n("40fe"),Ht=n("5d23"),Jt=n("9910"),Yt=n("2677"),Qt=n("71d9"),Kt=n("2a7f"),Gt=Object(Ot["a"])(Ut,At,Nt,!1,null,"2f9507d4",null);Gt.options.__file="TheToolBar.vue";var Xt=Gt.exports;_t()(Gt,{VBadge:Mt["a"],VBtn:Vt["a"],VCard:xt["a"],VFlex:Et["a"],VIcon:zt["a"],VList:qt["a"],VListTile:Rt["a"],VListTileAction:Wt["a"],VListTileContent:Ht["a"],VListTileTitle:Ht["c"],VMenu:Bt["a"],VSpacer:Jt["a"],VTextField:Yt["a"],VToolbar:Qt["a"],VToolbarItems:Kt["a"],VToolbarTitle:Kt["b"]});var Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[n("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-title",{staticClass:"title",staticStyle:{"text-align":"center"}},[n("span",{staticClass:"cn",staticStyle:{"font-size":"1.2rem"}},[t._v("交易者 - 管理介面")])])],1),n("v-divider"),t._e(),t._l(t.links,function(e){return n("v-list-tile",{key:e.order,staticClass:"v-list-item",attrs:{to:e.path,"active-class":t.color,avatar:""}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-title",{staticClass:"cn",domProps:{textContent:t._s(e.title)}})],1)})],2)],1)},te=[],ee=(n("7f7f"),{name:"TheDrawer",props:{color:{type:String,default:"info"},image:{type:String,default:""},responsive:{type:Boolean,default:!1}},data:function(){return{}},computed:{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},routes:function(){return this.$router?this.$router.options.routes.filter(function(t){return t.meta.menu}):[]},links:function(){var t=this;return this.routes.map(function(e){return t.mapLink(e)})},items:function(){return this.$t("Layout.View.items")}},methods:{mapLink:function(t){return{name:t.name,path:t.path,order:t.meta.order,icon:t.meta.icon,title:t.meta.title}},setDrawer:function(t){this.$store.commit(y["e"],t)},toggleDrawer:function(){this.$store.commit(y["n"])}}}),ne=ee,re=(n("a539"),n("f774")),ae=Object(Ot["a"])(ne,Zt,te,!1,null,null,null);ae.options.__file="TheDrawer.vue";var ce=ae.exports;_t()(ae,{VDivider:Pt["a"],VIcon:zt["a"],VLayout:Lt["a"],VListTile:Rt["a"],VListTileAction:Wt["a"],VListTileTitle:Ht["c"],VNavigationDrawer:re["a"],VTextField:Yt["a"]});var ie=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"core-view"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)])},oe=[],se={name:"TheView"},ue=se,fe=(n("ccab"),n("549c")),le=n("0789"),de=Object(Ot["a"])(ue,ie,oe,!1,null,null,null);de.options.__file="TheView.vue";var me=de.exports;_t()(de,{VContent:fe["a"],VFadeTransition:le["b"]});var he={name:"App",components:{TheFilter:Dt,TheToolBar:Xt,TheDrawer:ce,TheView:me},data:function(){return{err:{show:!1,msg:"伺服器無回應. 請稍候再試"},success:{color:"success",show:!1,timeout:1500,msg:"存檔成功"}}},computed:Object(k["a"])({},Object(g["b"])(["isAuthenticated","currentUser"]),Object(g["c"])({loading:function(t){return t.app.loading},responsive:function(t){return t.app.responsive},image:function(t){return t.app.image},color:function(t){return t.app.color}})),created:function(){Bus.$on("errors",this.onError),Bus.$on("success",this.onSuccess)},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{onError:function(t){if(!t)return this.err.msg="伺服器無回應. 請稍候再試",void(this.err.show=!0);t.status||(this.err.msg=t.msg?t.msg:"伺服器無回應. 請稍候再試",this.err.show=!0),500===t.status?(this.err.msg="伺服器無回應. 請稍候再試",this.err.show=!0):401===t.status&&this.$router.push({name:"login"})},onSuccess:function(t){this.success.show=!0,this.success.msg=t||"存檔成功"},onResponsiveInverted:function(){window.innerWidth<991?this.$store.commit(y["j"],!0):this.$store.commit(y["j"],!1)}}},be=he,ve=(n("7459"),n("7496")),pe=n("12b2"),ge=n("169a"),je=n("2db4"),ke=Object(Ot["a"])(be,pt,gt,!1,null,null,null);ke.options.__file="App.vue";var we=ke.exports;_t()(ke,{VApp:ve["a"],VCardTitle:pe["a"],VDialog:ge["a"],VIcon:zt["a"],VSnackbar:je["a"]}),window.Bus=new r["default"]({}),r["default"].component("loading",c.a);Object(u["sync"])(vt,p);p.beforeEach(function(t,e,n){if("/auth"===t.path)return n();vt.dispatch(z["a"]).then(function(e){if(e){var r=E["a"].tokenStatus();return-1===r?n({path:"/auth",query:{returnUrl:t.path}}):0===r?n({path:"/auth",query:{returnUrl:t.path}}):n()}return n({path:"/auth"})})}),r["default"].config.productionTip=!1,new r["default"]({router:p,store:vt,render:function(t){return t(we)}}).$mount("#app")},a49b:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return i}),n.d(e,"c",function(){return o});var r="https://localhost:44300",a="".concat(r,"/#/login"),c="".concat(r,"/api"),i="".concat(r,"/admin"),o=("".concat(r,"/watchHub"),{client_id:"753186496069-c7arjrt9ji0cd3rcbple37m1au2n1csh"})},a539:function(t,e,n){"use strict";var r=n("0959"),a=n.n(r);a.a},a60d:function(t,e,n){},ae60:function(t,e,n){"use strict";var r=n("2b0e"),a=n("7bb1"),c=n("427f"),i=n.n(c);r["default"].use(a["b"]),a["a"].localize("zh_TW",i.a);var o={zh_TW:{messages:{email:function(){return"請輸入正確的Email格式"},required:function(t){return"請輸入"+t}},attributes:{name:"名稱",email:"Email",oldPassword:"舊密碼",password:"密碼",confirmPassword:"確認密碼",fullname:"姓名",phone:"手機",code:"代碼",entity:"代碼",description:"說明",indicator_begin:"信號開始時間",indicator_end:"信號結束時間",minParam:"最小參數",maxParam:"最大參數",defaultParam:"預設參數"}}};a["a"].localize(o),a["a"].extend("phone",{getMessage:function(t){return t+"格式不正確"},validate:function(t){return!t||!isNaN(t)}})},ccab:function(t,e,n){"use strict";var r=n("33ce"),a=n.n(r);a.a},cd17:function(t,e,n){"use strict";var r=n("a60d"),a=n.n(r);a.a},ce9b:function(t,e,n){"use strict";n.d(e,"i",function(){return r}),n.d(e,"j",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"g",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"n",function(){return s}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return f}),n.d(e,"l",function(){return l}),n.d(e,"m",function(){return d}),n.d(e,"k",function(){return m}),n.d(e,"h",function(){return h}),n.d(e,"f",function(){return b}),n.d(e,"a",function(){return v});var r="setLoading",a="setResponsive",c="setDrawer",i="setImage",o="setColor",s="toggleDrawer",u="logOut",f="setAuth",l="setUser",d="setUsers",m="setStocks",h="setIndicators",b="setError",v="clearError"},da30:function(t,e,n){},ee97:function(t,e,n){"use strict";var r=n("bc3a"),a=n.n(r),c=n("5e4c"),i=n("0feb"),o={setHeader:function(){var t=c["a"].getToken();t||(t=""),a.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)},fetch:function(t,e){return e&&(t=i["a"].buildQuery(t,e)),new Promise(function(e,n){a.a.get(t).then(function(t){e(t.data)}).catch(function(t){n(t.response)})})},submit:function(t,e,n){return new Promise(function(r,c){a.a[t](e,n).then(function(t){r(t.data)}).catch(function(t){c(t.response)})})}};e["a"]=o},f888:function(t,e,n){"use strict";n.d(e,"k",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"l",function(){return c}),n.d(e,"j",function(){return i}),n.d(e,"i",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"n",function(){return u}),n.d(e,"g",function(){return f}),n.d(e,"p",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"h",function(){return m}),n.d(e,"b",function(){return h}),n.d(e,"m",function(){return b}),n.d(e,"f",function(){return v}),n.d(e,"o",function(){return p}),n.d(e,"d",function(){return g});var r="logout",a="checkAuth",c="refreshToken",i="fetchUsers",o="fetchStocks",s="createStock",u="storeStock",f="editStock",l="updateStock",d="deleteStock",m="fetchIndicators",h="createIndicator",b="storeIndicator",v="editIndicator",p="updateIndicator",g="deleteIndicator"}});
//# sourceMappingURL=admin.d051d041.js.map