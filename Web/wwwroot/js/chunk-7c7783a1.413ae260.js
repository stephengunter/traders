(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c7783a1"],{"0798":function(t,e,i){"use strict";i("a57f");var n=i("9d26"),s=i("b64a"),a=i("98a1"),r=i("00ab"),o=i("58df");e["a"]=Object(o["a"])(s["a"],a["a"],r["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(n["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(n["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,n=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n}})},"37a2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.model?i("v-layout",{attrs:{row:""}},[t.canPage?i("v-flex",{attrs:{sm12:""}},[t.responsive?i("div",{staticClass:"text-xs-center pt-2"},[i("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),i("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),i("v-btn",{attrs:{flat:"",icon:"",color:"indigo",disabled:!t.model.hasPreviousPage},on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[i("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-left")])],1),i("v-btn",{attrs:{flat:"",icon:"",disabled:!t.model.hasNextPage,color:"indigo"},on:{click:function(e){return e.preventDefault(),t.next(e)}}},[i("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-right")])],1)],1):i("div",{staticClass:"text-xs-center pt-2"},[i("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),i("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),i("v-pagination",{attrs:{length:t.model.totalPages,"total-visible":7},on:{previous:t.onPageChanged,next:t.onPageChanged},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]):i("v-flex",{attrs:{sm12:""}},[i("span",{staticClass:"ml-3 mr-3"},[t._v("\n         "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n      ")])])],1):t._e()},s=[],a={name:"TablePager",props:{model:{type:Object,default:null},canPage:{type:Boolean,default:!0},responsive:{type:Boolean,default:!1}},data:function(){return{page:1,size:10}},beforeMount:function(){this.page=this.model.pageNumber,this.size=this.model.pageSize},computed:{first:function(){return this.model?this.model.pageSize*(this.model.pageNumber-1)+1:0},last:function(){return this.model?this.first+this.model.viewList.length-1:0}},methods:{next:function(){this.page++,this.onPageChanged()},prev:function(){this.page--,this.onPageChanged()},onPageChanged:function(){this.$emit("pageChanged",this.page)},onPageSizeChanged:function(){this.$emit("sizeChanged",this.size)}}},r=a,o=(i("9542"),i("2877")),l=i("6544"),c=i.n(l),u=i("8336"),d=i("0e8f"),h=i("132d"),m=i("a722"),v=(i("8460"),i("9d26")),f=i("0d3d"),p=i("58df"),g=i("b64a"),b=i("6a18"),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function _(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var y=Object(p["a"])(g["a"],b["a"]).extend({name:"v-pagination",directives:{Resize:f["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return x({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2===0?1:0,i=Math.floor(t/2),n=this.length-i+1+e;if(this.value>i&&this.value<n){var s=this.value-i+2,a=this.value+i-2-e;return[1,"..."].concat(_(this.range(s,a)),["...",this.length])}if(this.value===i){var r=this.value+i-1-e;return[].concat(_(this.range(1,r)),["...",this.length])}if(this.value===n){var o=this.value-i+1;return[1,"..."].concat(_(this.range(o,this.length)))}return[].concat(_(this.range(1,i)),["..."],_(this.range(n,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:n}},[t(v["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map(function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),C=i("b56d"),w=Object(o["a"])(r,n,s,!1,null,"fe8ae67e",null);w.options.__file="TablePager.vue";e["a"]=w.exports;c()(w,{VBtn:u["a"],VFlex:d["a"],VIcon:h["a"],VLayout:m["a"],VPagination:y,VSelect:C["a"]})},"39e2":function(t,e,i){},"3a2f":function(t,e,i){"use strict";i("60e8");var n=i("b64a"),s=i("163b"),a=i("c69d"),r=i("30d4"),o=i("b8d7"),l=i("98a1"),c=i("80d2");function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-tooltip",mixins:[n["a"],s["a"],a["a"],r["a"],o["a"],l["a"]],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,s=0;return this.top||this.bottom||n?s=e.left+e.width/2-i.width/2:(this.left||this.right)&&(s=e.left+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),this.calcXOverflow(s)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=0;return this.top||this.bottom?n=e.top+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=e.top+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),this.calcYOverflow(n+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":void 0},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(c["b"])(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},mounted:function(){this.value&&this.callActivate()},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)}},render:function(t){var e,i=this,n=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},u(e,this.contentClass,!0),u(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[n]),t("span",{on:this.disabled?{}:{mouseenter:function(){i.runDelay("open")},mouseleave:function(){i.runDelay("close")}},ref:"activator"},this.$slots.activator)])}}},"60e8":function(t,e,i){},8460:function(t,e,i){},"93aa":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?i("ul",t._l(t.errorList.errors,function(e,n){return i("li",{key:n,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},s=[],a=i("be94"),r=(i("cadf"),i("551c"),i("097d"),i("2f62")),o={name:"ErrorList",computed:Object(a["a"])({},Object(r["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},l=o,c=i("2877"),u=i("6544"),d=i.n(u),h=i("0798"),m=Object(c["a"])(l,n,s,!1,null,null,null);m.options.__file="ErrorList.vue";e["a"]=m.exports;d()(m,{VAlert:h["a"]})},9542:function(t,e,i){"use strict";var n=i("39e2"),s=i.n(n);s.a},9617:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"cn",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-card",[i("v-card-title",[i("h3",[i("span",{staticClass:"cn"},[t._v(t._s(t.title))])])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"名稱","error-messages":t.errors.collect("name"),name:"name",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"代碼","error-messages":t.errors.collect("code"),name:"code",required:""},model:{value:t.model.code,callback:function(e){t.$set(t.model,"code",e)},expression:"model.code"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"權重(%)","error-messages":t.errors.collect("weight"),name:"weight","data-vv-as":"權重",required:""},model:{value:t.model.weight,callback:function(e){t.$set(t.model,"weight",e)},expression:"model.weight"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"價格","error-messages":t.errors.collect("price"),name:"price","data-vv-as":"價格",required:""},model:{value:t.model.price,callback:function(e){t.$set(t.model,"price",e)},expression:"model.price"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-checkbox",{attrs:{label:"電信股"},model:{value:t.model.ignore,callback:function(e){t.$set(t.model,"ignore",e)},expression:"model.ignore"}})],1)],1),i("ErrorList")],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),i("v-btn",{attrs:{type:"submit",color:"primary",flat:""},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Save")])],1)],1)],1)},s=[],a=(i("2f62"),i("93aa")),r={name:"StockEdit",components:{ErrorList:a["a"]},props:{model:{type:Object,default:null}},data:function(){return{}},computed:{title:function(){return this.model&&this.model.id?"編輯權值股":"新增權值股"}},beforeMount:function(){this.model.weight||(this.model.weight=""),this.model.price||(this.model.price="")},methods:{cancel:function(){this.$emit("cancel")},onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.$emit("submit")})}}},o=r,l=i("2877"),c=i("6544"),u=i.n(c),d=i("8336"),h=i("b0af"),m=i("99d9"),v=i("12b2"),f=i("ac7c"),p=i("a523"),g=i("0e8f"),b=i("a722"),x=i("9910"),_=i("2677"),y=Object(l["a"])(o,n,s,!1,null,null,null);y.options.__file="Edit.vue";e["a"]=y.exports;u()(y,{VBtn:d["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:v["a"],VCheckbox:f["a"],VContainer:p["a"],VFlex:g["a"],VLayout:b["a"],VSpacer:x["a"],VTextField:_["a"]})},a57f:function(t,e,i){},eb96:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pageList?i("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("material-card",[i("v-card-text",[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}})],1)]),i("v-flex",{staticClass:"text-lg-right",attrs:{xs12:"",sm6:"",md6:""}},[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"mr-2",attrs:{slot:"activator",disabled:!t.canCreate,color:"info",icon:""},on:{click:function(e){return e.preventDefault(),t.create(e)}},slot:"activator"},[i("v-icon",[t._v("mdi-plus-circle")])],1),i("span",{staticClass:"cn"},[t._v("新增")])],1),i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{attrs:{slot:"activator",disabled:!t.canRemove,color:"error",icon:""},on:{click:function(e){return e.preventDefault(),t.remove(e)}},slot:"activator"},[i("v-icon",[t._v("mdi-delete-circle")])],1),i("span",{staticClass:"cn"},[t._v("刪除")])],1),i("v-dialog",{attrs:{width:"480px"},model:{value:t.deleting,callback:function(e){t.deleting=e},expression:"deleting"}},[i("Confirm",{on:{ok:t.submitDelete,cancel:t.cancelDelete}})],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.editting,callback:function(e){t.editting=e},expression:"editting"}},[t.editting?i("stock-edit",{attrs:{model:t.model},on:{submit:t.submit,cancel:t.cancelEdit}}):t._e()],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{sm12:""}},[i("v-data-table",{attrs:{"select-all":"",headers:t.headers,items:t.stocks,"hide-actions":"","item-key":"id"},scopedSlots:t._u([{key:"headerCell",fn:function(e){var n=e.header;return[i("span",{staticClass:"subheading font-weight-light text-success text--darken-3 cn"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.text)+"\n\t\t\t\t\t\t\t\t\t\t")])]}},{key:"items",fn:function(e){return[i("td",[i("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(i){t.$set(e,"selected",i)},expression:"props.selected"}})],1),i("td",{staticClass:"cn"},[t._v(t._s(e.item.name)+"  "),e.item.ignore?i("v-icon",[t._v("mdi-cancel")]):t._e()],1),i("td",[t._v(t._s(e.item.code))]),i("td",[t._v(t._s(e.item.weight))]),i("td",[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("a",{attrs:{slot:"activator",href:"#",icon:""},on:{click:function(i){i.preventDefault(),t.edit(e.item.id)}},slot:"activator"},[i("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-pencil")])],1),i("span",{staticClass:"cn"},[t._v("編輯")])])],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),i("table-pager",{attrs:{model:t.pageList,canPage:!1}})],1)],1)],1)],1)],1):t._e()},s=[],a=i("be94"),r=(i("cadf"),i("551c"),i("097d"),i("2f62")),o=i("ce9b"),l=i("f888"),c=i("dad0"),u=i("37a2"),d=i("9617"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",{class:t.style,attrs:{"primary-title":""}},[t.isWarning?i("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n         mdi-alert-circle\n      ")]):t._e(),i("span",{staticClass:"cn",style:t.titleStyle},[t._v("\n         "+t._s(t.title)+"\n      ")])],1),i("v-card-text",[t._v("\n      "+t._s(t.msg)+"\n   ")]),t.msg?i("v-divider"):t._e(),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.cancel}},[i("span",{staticClass:"cn"},[t._v("取消")])]),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.accept}},[i("span",{staticClass:"cn"},[t._v("確定")])])],1)],1)},m=[],v={name:"Confirm",props:{type:{type:String,default:"warning"},title:{type:String,default:"確定要刪除嗎?"},msg:{type:String,default:""}},data:function(){return{show:!1}},computed:{isWarning:function(){return"warning"===this.type},style:function(){var t="headline lighten-1",e="red";return"".concat(t," ").concat(e)},icon:function(){return"mdi-alert-circle"},titleStyle:function(){if(this.isWarning)return"color: #fff;"}},methods:{accept:function(){this.$emit("ok")},cancel:function(){this.$emit("cancel")}}},f=v,p=i("2877"),g=i("6544"),b=i.n(g),x=i("8336"),_=i("b0af"),y=i("99d9"),C=i("12b2"),w=i("ce7e"),$=i("132d"),k=i("9910"),S=Object(p["a"])(f,h,m,!1,null,null,null);S.options.__file="Confirm.vue";var V=S.exports;b()(S,{VBtn:x["a"],VCard:_["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:C["a"],VDivider:w["a"],VIcon:$["a"],VSpacer:k["a"]});var I={name:"StocksView",components:{"material-card":c["a"],"stock-edit":d["a"],"table-pager":u["a"],Confirm:V},data:function(){return{params:{keyword:"",page:1,pageSize:10},headers:[{sortable:!1,text:"名稱",value:"name"},{sortable:!1,text:"代碼",value:"code"},{sortable:!1,text:"權重 (%)",value:"weight"},{sortable:!1,text:"",value:"",width:"50px"}],selected:[],editting:!1,deleting:!1,model:null}},computed:Object(a["a"])({},Object(r["c"])({pageList:function(t){return t.stocks.pageList}}),{stocks:function(){return this.pageList?this.pageList.viewList:[]},canRemove:function(){return!this.editting&&this.selected.length>0},canCreate:function(){return!this.editting&&!this.deleting}}),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.commit(o["a"]),this.$store.dispatch(l["e"],this.params).catch(function(t){Bus.$emit("errors")})},search:function(){this.fetchData()},create:function(){var t=this;this.$store.commit(o["a"]),this.selected=[],this.$store.dispatch(l["b"]).then(function(e){t.model=e,t.editting=!0}).catch(function(t){Bus.$emit("errors")})},edit:function(t){var e=this;this.$store.commit(o["a"]),this.selected=[],this.$store.dispatch(l["d"],t).then(function(t){e.model=t,e.editting=!0}).catch(function(t){Bus.$emit("errors")})},cancelEdit:function(){this.model=null,this.editting=!1},remove:function(){this.deleting=!0},submitDelete:function(){var t=this;this.$store.commit(o["a"]);var e=this.selected.map(function(t){return t.id});this.$store.dispatch(l["c"],e.join(",")).then(function(){t.fetchData(),t.model=null,t.deleting=!1}).catch(function(t){Bus.$emit("errors")})},cancelDelete:function(){this.deleting=!1},submit:function(){var t=this;this.$store.commit(o["a"]);var e=this.model.id?l["j"]:l["i"];this.$store.dispatch(e,this.model).then(function(){t.fetchData(),Bus.$emit("success"),t.model=null,t.editting=!1}).catch(function(e){e?t.$store.commit(o["f"],e):Bus.$emit("errors")})}}},D=I,B=i("ac7c"),z=i("a523"),L=i("8fea"),E=i("169a"),O=i("0e8f"),P=i("a722"),T=i("2677"),j=i("3a2f"),N=Object(p["a"])(D,n,s,!1,null,null,null);N.options.__file="Stocks.vue";e["default"]=N.exports;b()(N,{VBtn:x["a"],VCardText:y["b"],VCheckbox:B["a"],VContainer:z["a"],VDataTable:L["a"],VDialog:E["a"],VFlex:O["a"],VIcon:$["a"],VLayout:P["a"],VTextField:T["a"],VTooltip:j["a"]})}}]);
//# sourceMappingURL=chunk-7c7783a1.413ae260.js.map