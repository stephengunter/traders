(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a860f80"],{"135d":function(t,e,a){},"14a8":function(t,e,a){"use strict";var n=a("ac58"),s=a.n(n);s.a},2889:function(t,e,a){"use strict";var n=a("3c60"),s=a.n(n);s.a},"29b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.pageList?a("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("material-card",{attrs:{color:"green"}},[a("v-card-text",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{sm6:""}}),a("v-flex",{attrs:{sm6:""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}})],1)])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{sm12:""}},[a("v-data-table",{attrs:{headers:t.headers,items:t.users,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var n=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3 cn"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.text)+"\n\t\t\t\t\t\t\t\t\t\t")])]}},{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.profile.fullname))]),a("td",[t._v(t._s(e.item.email))]),a("td",[t._v(t._s(e.item.phone))])]}}])})],1)],1),a("table-pager",{directives:[{name:"show",rawName:"v-show",value:t.users.length>0,expression:"users.length > 0"}],attrs:{model:t.pageList,responsive:t.responsive},on:{pageChanged:t.onPageChanged,sizeChanged:t.onPageSizeChanged}})],1)],1)],1)],1)],1):t._e()},s=[],i=a("be94"),r=a("2f62"),o=a("f888"),l=a("dad0"),c=a("37a2"),u={name:"UserView",components:{"material-card":l["a"],"table-pager":c["a"]},data:function(){return{params:{keyword:"",page:1,pageSize:10},headers:[{sortable:!1,text:"姓名",value:"name"},{sortable:!1,text:"Email",value:"email"},{sortable:!1,text:"手機",value:"phone"}]}},computed:Object(i["a"])({},Object(r["c"])({responsive:function(t){return t.app.responsive},pageList:function(t){return t.users.pageList}}),{users:function(){return this.pageList?this.pageList.viewList:[]}}),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch(o["j"],this.params)},onPageChanged:function(t){this.params.page=t,this.fetchData()},onPageSizeChanged:function(t){this.params.pageSize=t,this.fetchData()},search:function(){this.fetchData()}}},f=u,h=a("2877"),d=a("6544"),v=a.n(d),p=a("99d9"),g=a("a523"),m=a("8fea"),b=a("0e8f"),_=a("a722"),x=a("2677"),y=Object(h["a"])(f,n,s,!1,null,null,null);y.options.__file="Users.vue";e["default"]=y.exports;v()(y,{VCardText:p["b"],VContainer:g["a"],VDataTable:m["a"],VFlex:b["a"],VLayout:_["a"],VTextField:x["a"]})},"37a2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("v-layout",{attrs:{row:""}},[t.canPage?a("v-flex",{attrs:{sm12:""}},[t.responsive?a("div",{staticClass:"text-xs-center pt-2"},[a("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),a("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),a("v-btn",{attrs:{flat:"",icon:"",color:"indigo",disabled:!t.model.hasPreviousPage},on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[a("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-left")])],1),a("v-btn",{attrs:{flat:"",icon:"",disabled:!t.model.hasNextPage,color:"indigo"},on:{click:function(e){return e.preventDefault(),t.next(e)}}},[a("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-right")])],1)],1):a("div",{staticClass:"text-xs-center pt-2"},[a("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),a("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),a("v-pagination",{attrs:{length:t.model.totalPages,"total-visible":7},on:{previous:t.onPageChanged,next:t.onPageChanged},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]):a("v-flex",{attrs:{sm12:""}},[a("span",{staticClass:"ml-3 mr-3"},[t._v("\n         "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n      ")])])],1):t._e()},s=[],i={name:"TablePager",props:{model:{type:Object,default:null},canPage:{type:Boolean,default:!0},responsive:{type:Boolean,default:!1}},data:function(){return{page:1,size:10}},beforeMount:function(){this.page=this.model.pageNumber,this.size=this.model.pageSize},computed:{first:function(){return this.model&&this.model.totalItems?this.model.pageSize*(this.model.pageNumber-1)+1:0},last:function(){return this.model&&this.model.totalItems?this.first+this.model.viewList.length-1:0}},methods:{next:function(){this.page++,this.onPageChanged()},prev:function(){this.page--,this.onPageChanged()},onPageChanged:function(){this.$emit("pageChanged",this.page)},onPageSizeChanged:function(){this.$emit("sizeChanged",this.size)}}},r=i,o=(a("5cd3"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),f=a("0e8f"),h=a("132d"),d=a("a722"),v=(a("8460"),a("9d26")),p=a("0d3d"),g=a("58df"),m=a("b64a"),b=a("6a18"),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t};function x(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var y=Object(g["a"])(m["a"],b["a"]).extend({name:"v-pagination",directives:{Resize:p["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return _({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2===0?1:0,a=Math.floor(t/2),n=this.length-a+1+e;if(this.value>a&&this.value<n){var s=this.value-a+2,i=this.value+a-2-e;return[1,"..."].concat(x(this.range(s,i)),["...",this.length])}if(this.value===a){var r=this.value+a-1-e;return[].concat(x(this.range(1,r)),["...",this.length])}if(this.value===n){var o=this.value-a+1;return[1,"..."].concat(x(this.range(o,this.length)))}return[].concat(x(this.range(1,a)),["..."],x(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var n=t;n<=e;n++)a.push(n);return a},genIcon:function(t,e,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{type:"button"},on:a?{}:{click:n}},[t(v["a"],[e])])])},genItem:function(t,e){var a=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map(function(a,n){return t("li",{key:n},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),C=a("b56d"),w=Object(o["a"])(r,n,s,!1,null,"c8f07d42",null);w.options.__file="TablePager.vue";e["a"]=w.exports;c()(w,{VBtn:u["a"],VFlex:f["a"],VIcon:h["a"],VLayout:d["a"],VPagination:y,VSelect:C["a"]})},"3c60":function(t,e,a){},"5cd3":function(t,e,a){"use strict";var n=a("135d"),s=a.n(n);s.a},8460:function(t,e,a){},"99d9":function(t,e,a){"use strict";var n=a("80d2"),s=a("b0af"),i=a("adda"),r=a("d9bd"),o=i["a"].extend({name:"v-card-media",mounted:function(){Object(r["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),l=a("12b2");a.d(e,"a",function(){return c}),a.d(e,"b",function(){return u});var c=Object(n["e"])("v-card__actions"),u=Object(n["e"])("v-card__text");s["a"],l["a"]},ac58:function(t,e,a){},dad0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?a("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):a("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?a("span",[a("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),a("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),a("v-card-text",[t._t("default")],2),t.$slots.actions?a("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?a("v-card-actions",[t._t("actions")],2):t._e()],1)},s=[],i=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)}),r=[],o={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},l=o,c=(a("2889"),a("2877")),u=Object(c["a"])(l,i,r,!1,null,null,null);u.options.__file="Offset.vue";var f=u.exports,h={inheritAttrs:!1,components:{"helper-offset":f},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},d=h,v=(a("14a8"),a("6544")),p=a.n(v),g=a("b0af"),m=a("99d9"),b=a("ce7e"),_=Object(c["a"])(d,n,s,!1,null,null,null);_.options.__file="Card.vue";e["a"]=_.exports;p()(_,{VCard:g["a"],VCardActions:m["a"],VCardText:m["b"],VDivider:b["a"]})}}]);
//# sourceMappingURL=chunk-3a860f80.891d656e.js.map