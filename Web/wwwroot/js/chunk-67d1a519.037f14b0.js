(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67d1a519"],{"23bf":function(t,e,s){"use strict";var i=s("2b0e");e["a"]=i["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],width:[Number,String]}})},3279:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-breadcrumbs",{staticClass:"cn",attrs:{items:t.items,divider:">"}})},a=[],n=(s("7514"),s("cadf"),s("551c"),s("097d"),{name:"RwvBread",data:function(){return{items:[]}},beforeMount:function(){var t=this;this.items.push({text:"首頁",disabled:!1,href:"#/"});var e=this.$router.options.routes.find(function(e){return e.path===t.$route.path});this.items.push({text:e.meta.title,disabled:!1,href:"#"+e.path})}}),r=n,c=s("2877"),o=s("6544"),l=s.n(o),u=(s("c6e2"),s("0d01")),d=s("58df");function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var f=Object(d["a"])(u["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return h({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(this.classes),s=e.tag,i=e.data;return t("li",[t(s,i,this.$slots.default)])}}),m=s("80d2"),b=Object(m["e"])("v-breadcrumbs__divider","li"),p=s("6a18"),v=s("d9bd"),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},y=Object(d["a"])(p["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return g({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(v["d"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(v["d"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(v["d"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,s=0;s<this.$slots.default.length;s++){var i=this.$slots.default[s];i.componentOptions&&"v-breadcrumbs-item"===i.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(i),e=!0):t.push(i)}return t}},genDivider:function(){return this.$createElement(b,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,s=0;s<this.items.length;s++){var i=this.items[s];e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(f,{key:i.text,props:i},[i.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),j=Object(c["a"])(r,i,a,!1,null,null,null);j.options.__file="TheBread.vue";e["a"]=j.exports;l()(j,{VBreadcrumbs:y})},4568:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("Bread"),s("v-card",[s("v-container",{attrs:{fluid:"","grid-list-lg":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[s("ul",{staticClass:"headline",staticStyle:{"list-style-type":"none",color:"#ee4d2d"}},t._l(t.plans,function(e){return s("li",{key:e.id,staticClass:"mb-3"},[s("span",{staticClass:"cn",domProps:{textContent:t._s(t.monthString(e))}}),s("span",{staticClass:"money ml-1"},[t._v("$"+t._s(e.money))])])}),0)]),s("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[s("ul",{staticStyle:{"list-style-type":"none"}},t._l(t.descriptions,function(e,i){return s("li",{key:i,staticClass:"mb-1"},[s("v-icon",{staticClass:"mr-1",attrs:{color:"success"}},[t._v("mdi-check")]),s("span",{staticClass:"cn",staticStyle:{"font-size":"1.2rem"}},[t._v(t._s(e))])],1)}),0)]),s("v-flex",{attrs:{xs12:"",sm12:"",md2:""}},[s("v-btn",{attrs:{to:"/subscribes/create",large:"",color:"info"}},[s("span",{staticClass:"cn",staticStyle:{"font-size":"1.2rem"}},[t._v("我要訂閱")])])],1)],1)],1)],1)],1)},a=[],n=s("be94"),r=(s("cadf"),s("551c"),s("097d"),s("2f62")),c=s("0feb"),o=s("c41f"),l=s("3279"),u={name:"PlansView",components:{Bread:l["a"]},data:function(){return{descriptions:["可自訂多個策略","可選用所有指標","指標參數可調整","歷史資料回測功能"]}},computed:Object(n["a"])({},Object(r["c"])({pageList:function(t){return t.plans.pageList}}),{plans:function(){return this.pageList?this.pageList.viewList:[]}}),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch(o["i"]).catch(function(t){Bus.$emit("errors")})},monthString:function(t){var e=c["a"].chineseNumber(t.month);return"".concat(e,"個月")}}},d=u,h=s("2877"),f=s("6544"),m=s.n(f),b=s("8336"),p=s("b0af"),v=s("a523"),g=s("0e8f"),y=s("132d"),j=s("a722"),x=Object(h["a"])(d,i,a,!1,null,null,null);x.options.__file="Plans.vue";e["default"]=x.exports;m()(x,{VBtn:b["a"],VCard:p["a"],VContainer:v["a"],VFlex:g["a"],VIcon:y["a"],VLayout:j["a"]})},"4c94":function(t,e,s){},b0af:function(t,e,s){"use strict";s("4c94");var i=s("b64a"),a=s("23bf"),n=s("0d01"),r=s("6a18"),c=s("80d2"),o=s("58df"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};e["a"]=Object(o["a"])(i["a"],a["a"],n["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean,tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return l({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--raised":this.raised,"v-card--tile":this.tile},this.themeClasses)},styles:function(){var t={height:Object(c["b"])(this.height)};return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),this.height&&(t.height=Object(c["b"])(this.height)),this.maxHeight&&(t.maxHeight=Object(c["b"])(this.maxHeight)),this.maxWidth&&(t.maxWidth=Object(c["b"])(this.maxWidth)),this.width&&(t.width=Object(c["b"])(this.width)),t}},render:function(t){var e=this.generateRouteLink(this.classes),s=e.tag,i=e.data;return i.style=this.styles,t(s,this.setBackgroundColor(this.color,i),this.$slots.default)}})},c6e2:function(t,e,s){}}]);
//# sourceMappingURL=chunk-67d1a519.037f14b0.js.map