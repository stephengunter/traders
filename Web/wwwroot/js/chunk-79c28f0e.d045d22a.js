(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79c28f0e"],{"29b4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pageList?n("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("material-card",{attrs:{color:"green"}},[n("v-card-text",[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{sm6:""}}),n("v-flex",{attrs:{sm6:""}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}})],1)])],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("v-data-table",{attrs:{headers:t.headers,items:t.users,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[n("span",{staticClass:"subheading font-weight-light text-success text--darken-3 cn"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(a.text)+"\n\t\t\t\t\t\t\t\t\t\t")])]}},{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.profile.fullname))]),n("td",[t._v(t._s(e.item.email))]),n("td",[t._v(t._s(e.item.phone))])]}}])})],1)],1),n("table-pager",{directives:[{name:"show",rawName:"v-show",value:t.users.length>0,expression:"users.length > 0"}],attrs:{model:t.pageList,responsive:t.responsive},on:{pageChanged:t.onPageChanged,sizeChanged:t.onPageSizeChanged}})],1)],1)],1)],1)],1):t._e()},i=[],s=n("be94"),r=n("2f62"),o=n("f888"),l=n("dad0"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{sm12:""}},[t.responsive?n("div",{staticClass:"text-xs-center pt-2"},[n("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),n("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),n("v-btn",{attrs:{flat:"",icon:"",color:"indigo",disabled:!t.model.hasPreviousPage},on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[n("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-left")])],1),n("v-btn",{attrs:{flat:"",icon:"",disabled:!t.model.hasNextPage,color:"indigo"},on:{click:function(e){return e.preventDefault(),t.next(e)}}},[n("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-right")])],1)],1):n("div",{staticClass:"text-xs-center pt-2"},[n("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),n("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),n("v-pagination",{attrs:{length:t.model.totalPages,"total-visible":7},on:{previous:t.onPageChanged,next:t.onPageChanged},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1):t._e()},u=[],h={name:"TablePager",props:{model:{type:Object,default:null},responsive:{type:Boolean,default:!1}},data:function(){return{page:1,size:10}},beforeMount:function(){this.page=this.model.pageNumber,this.size=this.model.pageSize},computed:{first:function(){return this.model?this.model.pageSize*(this.model.pageNumber-1)+1:0},last:function(){return this.model?this.first+this.model.viewList.length-1:0}},methods:{next:function(){this.page++,this.onPageChanged()},prev:function(){this.page--,this.onPageChanged()},onPageChanged:function(){this.$emit("pageChanged",this.page)},onPageSizeChanged:function(){this.$emit("sizeChanged",this.size)}}},d=h,v=(n("351c"),n("2877")),p=n("6544"),f=n.n(p),g=n("8336"),m=n("0e8f"),b=n("132d"),x=n("a722"),_=(n("8460"),n("9d26")),y=n("0d3d"),C=n("58df"),w=n("b64a"),z=n("6a18"),k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};function S(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var P=Object(C["a"])(w["a"],z["a"]).extend({name:"v-pagination",directives:{Resize:y["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return k({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2===0?1:0,n=Math.floor(t/2),a=this.length-n+1+e;if(this.value>n&&this.value<a){var i=this.value-n+2,s=this.value+n-2-e;return[1,"..."].concat(S(this.range(i,s)),["...",this.length])}if(this.value===n){var r=this.value+n-1-e;return[].concat(S(this.range(1,r)),["...",this.length])}if(this.value===a){var o=this.value-n+1;return[1,"..."].concat(S(this.range(o,this.length)))}return[].concat(S(this.range(1,n)),["..."],S(this.range(a,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var n=[];t=t>0?t:1;for(var a=t;a<=e;a++)n.push(a);return n},genIcon:function(t,e,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:a}},[t(_["a"],[e])])])},genItem:function(t,e){var n=this,a=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return n.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map(function(n,a){return t("li",{key:a},[isNaN(Number(n))?t("span",{class:"v-pagination__more"},[n.toString()]):e.genItem(t,n)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),$=n("b56d"),I=Object(v["a"])(d,c,u,!1,null,"4cfa286e",null);I.options.__file="TablePager.vue";var V=I.exports;f()(I,{VBtn:g["a"],VFlex:m["a"],VIcon:b["a"],VLayout:x["a"],VPagination:P,VSelect:$["a"]});var D={name:"UserView",components:{"material-card":l["a"],"table-pager":V},data:function(){return{params:{keyword:"",page:1,pageSize:10},headers:[{sortable:!1,text:"姓名",value:"name"},{sortable:!1,text:"Email",value:"email"},{sortable:!1,text:"手機",value:"phone"}]}},computed:Object(s["a"])({},Object(r["c"])({responsive:function(t){return t.app.responsive},pageList:function(t){return t.users.pageList}}),{users:function(){return this.pageList?this.pageList.viewList:[]}}),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch(o["d"],this.params)},onPageChanged:function(t){this.params.page=t,this.fetchData()},onPageSizeChanged:function(t){this.params.pageSize=t,this.fetchData()},search:function(){this.fetchData()}}},L=D,N=n("99d9"),j=n("a523"),O=n("8fea"),B=n("2677"),T=Object(v["a"])(L,a,i,!1,null,null,null);T.options.__file="Users.vue";e["default"]=T.exports;f()(T,{VCardText:N["b"],VContainer:j["a"],VDataTable:O["a"],VFlex:m["a"],VLayout:x["a"],VTextField:B["a"]})},"351c":function(t,e,n){"use strict";var a=n("8dcb"),i=n.n(a);i.a},8460:function(t,e,n){},"8dcb":function(t,e,n){}}]);
//# sourceMappingURL=chunk-79c28f0e.d045d22a.js.map