(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7428fa18"],{"135d":function(t,e,i){},"14a8":function(t,e,i){"use strict";var a=i("ac58"),n=i.n(a);n.a},2889:function(t,e,i){"use strict";var a=i("3c60"),n=i.n(a);n.a},"37a2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.model?i("v-layout",{attrs:{row:""}},[t.canPage?i("v-flex",{attrs:{sm12:""}},[t.responsive?i("div",{staticClass:"text-xs-center pt-2"},[i("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),i("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),i("v-btn",{attrs:{flat:"",icon:"",color:"indigo",disabled:!t.model.hasPreviousPage},on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[i("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-left")])],1),i("v-btn",{attrs:{flat:"",icon:"",disabled:!t.model.hasNextPage,color:"indigo"},on:{click:function(e){return e.preventDefault(),t.next(e)}}},[i("v-icon",{staticStyle:{color:"#999"}},[t._v("mdi-chevron-right")])],1)],1):i("div",{staticClass:"text-xs-center pt-2"},[i("v-select",{staticClass:"d-inline-flex",staticStyle:{width:"80px"},attrs:{label:"Rows per page",items:[10,25,50]},on:{change:t.onPageSizeChanged},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}}),i("span",{staticClass:"ml-3 mr-3"},[t._v("\n            "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n         ")]),i("v-pagination",{attrs:{length:t.model.totalPages,"total-visible":7},on:{previous:t.onPageChanged,next:t.onPageChanged},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)]):i("v-flex",{attrs:{sm12:""}},[i("span",{staticClass:"ml-3 mr-3"},[t._v("\n         "+t._s(t.first)+"-"+t._s(t.last)+" of "+t._s(t.model.totalItems)+"\n      ")])])],1):t._e()},n=[],s={name:"TablePager",props:{model:{type:Object,default:null},canPage:{type:Boolean,default:!0},responsive:{type:Boolean,default:!1}},data:function(){return{page:1,size:10}},beforeMount:function(){this.page=this.model.pageNumber,this.size=this.model.pageSize},computed:{first:function(){return this.model&&this.model.totalItems?this.model.pageSize*(this.model.pageNumber-1)+1:0},last:function(){return this.model&&this.model.totalItems?this.first+this.model.viewList.length-1:0}},methods:{next:function(){this.page++,this.onPageChanged()},prev:function(){this.page--,this.onPageChanged()},onPageChanged:function(){this.$emit("pageChanged",this.page)},onPageSizeChanged:function(){this.$emit("sizeChanged",this.size)}}},o=s,r=(i("5cd3"),i("2877")),l=i("6544"),c=i.n(l),u=i("8336"),h=i("0e8f"),d=i("132d"),f=i("a722"),v=(i("8460"),i("9d26")),p=i("0d3d"),m=i("58df"),g=i("b64a"),x=i("6a18"),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};function _(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var y=Object(m["a"])(g["a"],x["a"]).extend({name:"v-pagination",directives:{Resize:p["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},totalVisible:[Number,String],nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return b({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10)||this.maxButtons;if(this.length<=t)return this.range(1,this.length);var e=t%2===0?1:0,i=Math.floor(t/2),a=this.length-i+1+e;if(this.value>i&&this.value<a){var n=this.value-i+2,s=this.value+i-2-e;return[1,"..."].concat(_(this.range(n,s)),["...",this.length])}if(this.value===i){var o=this.value+i-1-e;return[].concat(_(this.range(1,o)),["...",this.length])}if(this.value===a){var r=this.value-i+1;return[1,"..."].concat(_(this.range(r,this.length)))}return[].concat(_(this.range(1,i)),["..."],_(this.range(a,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout(function(){return t.selected=t.value},100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var a=t;a<=e;a++)i.push(a);return i},genIcon:function(t,e,i,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:a}},[t(v["a"],[e])])])},genItem:function(t,e){var i=this,a=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(a,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map(function(i,a){return t("li",{key:a},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])})}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),C=i("b56d"),$=Object(r["a"])(o,a,n,!1,null,"c8f07d42",null);$.options.__file="TablePager.vue";e["a"]=$.exports;c()($,{VBtn:u["a"],VFlex:h["a"],VIcon:d["a"],VLayout:f["a"],VPagination:y,VSelect:C["a"]})},"3c60":function(t,e,i){},"5cd3":function(t,e,i){"use strict";var a=i("135d"),n=i.n(a);n.a},8460:function(t,e,i){},ac58:function(t,e,i){},dad0:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?i("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):i("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?i("span",[i("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),i("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),i("v-card-text",[t._t("default")],2),t.$slots.actions?i("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?i("v-card-actions",[t._t("actions")],2):t._e()],1)},n=[],s=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)}),o=[],r={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},l=r,c=(i("2889"),i("2877")),u=Object(c["a"])(l,s,o,!1,null,null,null);u.options.__file="Offset.vue";var h=u.exports,d={inheritAttrs:!1,components:{"helper-offset":h},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},f=d,v=(i("14a8"),i("6544")),p=i.n(v),m=i("b0af"),g=i("99d9"),x=i("ce7e"),b=Object(c["a"])(f,a,n,!1,null,null,null);b.options.__file="Card.vue";e["a"]=b.exports;p()(b,{VCard:m["a"],VCardActions:g["a"],VCardText:g["b"],VDivider:x["a"]})},f1b4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("material-card",[i("v-card-text",[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[i("v-select",{attrs:{items:t.activeOptions,label:"狀態"},on:{change:t.fetchData},model:{value:t.params.active,callback:function(e){t.$set(t.params,"active",e)},expression:"params.active"}})],1),i("v-flex",{staticClass:"text-lg-right",attrs:{xs6:"",sm6:"",md6:""}},[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"mr-2",attrs:{slot:"activator",color:"info",icon:""},on:{click:function(e){return e.preventDefault(),t.create(e)}},slot:"activator"},[i("v-icon",[t._v("mdi-plus-circle")])],1),i("span",{staticClass:"cn"},[t._v("新增")])],1),i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{attrs:{slot:"activator",disabled:!t.orderChanged,color:"success",icon:""},on:{click:function(e){return e.preventDefault(),t.save(e)}},slot:"activator"},[i("v-icon",[t._v("mdi-content-save")])],1),i("span",{staticClass:"cn"},[t._v("存檔")])],1)],1)],1),i("v-layout",{attrs:{id:"indicatorsList",row:"",wrap:""}},t._l(t.pageList.viewList,function(e){return i("v-flex",{key:t.itemKey(e),staticClass:"sortableRow",attrs:{xs12:""}},[i("indicator-box",{attrs:{model:e},on:{select:t.edit}})],1)}),1),i("table-pager",{attrs:{model:t.pageList,canPage:!1}})],1)],1)],1)],1)],1)},n=[],s=(i("ac6a"),i("5df3"),i("10ad"),i("cadf"),i("551c"),i("097d"),i("53fe")),o=(i("2f62"),i("ce9b")),r=i("f888"),l=i("dad0"),c=i("37a2"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.model?i("v-card",[i("v-img",{staticClass:"white--text",attrs:{src:t.imageUrl,height:"200px"},on:{click:function(e){return e.preventDefault(),t.select(e)}}},[i("v-container",{attrs:{"fill-height":"",fluid:""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("div",{staticClass:"headline "},[i("span",{staticClass:"cn"},[t._v(t._s(t.model.name))])])])],1)],1)],1),i("v-card-title",[i("div",[i("span",{staticClass:"cn"},[t._v(t._s(t.model.description))])])])],1):t._e()},h=[],d=i("a49b"),f={name:"IndicatorsBox",props:{model:{type:Object,default:null}},data:function(){return{}},computed:{coverMedia:function(){return this.model&&this.model.medias.length?this.model.medias[0]:null},imageUrl:function(){return this.coverMedia?"".concat(d["f"],"/").concat(this.coverMedia.previewPath):""}},methods:{select:function(){this.$emit("select",this.model.id)}}},v=f,p=i("2877"),m=i("6544"),g=i.n(m),x=i("b0af"),b=i("12b2"),_=i("a523"),y=i("0e8f"),C=i("adda"),$=i("a722"),w=Object(p["a"])(v,u,h,!1,null,null,null);w.options.__file="Box.vue";var I=w.exports;g()(w,{VCard:x["a"],VCardTitle:b["a"],VContainer:_["a"],VFlex:y["a"],VImg:C["a"],VLayout:$["a"]});var V=i("9420"),S=i("0feb"),B={name:"IndicatorsView",components:{"material-card":l["a"],"indicator-box":I,"table-pager":c["a"],Confirm:V["a"]},data:function(){return{params:{active:!0},pageList:{viewList:[]},activeOptions:S["a"].activeOptions(),itemKeys:new WeakMap,currentItemKey:0,orderChanged:!1}},computed:{},beforeMount:function(){this.fetchData()},methods:{init:function(){new s(document.getElementById("indicatorsList"),{draggable:".sortableRow",onEnd:this.onDragEnd})},fetchData:function(){var t=this;this.$store.commit(o["a"]),this.$store.dispatch(r["h"],this.params.active).then(function(e){t.pageList=e,t.init()}).catch(function(t){Bus.$emit("errors")})},itemKey:function(t){return this.itemKeys.has(t)||this.itemKeys.set(t,++this.currentItemKey),this.itemKeys.get(t)},onDragEnd:function(t){var e=t.oldIndex,i=t.newIndex,a=this.pageList.viewList.splice(e,1)[0];this.pageList.viewList.splice(i,0,a),this.orderChanged=!0},save:function(){var t=this;this.$store.commit(o["a"]);var e=this.pageList.viewList.map(function(t){return t.id});this.$store.dispatch(r["l"],e.join()).then(function(){t.orderChanged=!1,t.fetchData()}).catch(function(t){Bus.$emit("errors")})},create:function(){this.$router.push({path:"/indicators/create"})},edit:function(t){var e="/indicators/".concat(t);this.$router.push({path:e})},cancelEdit:function(){this.model=null,this.editting=!1},remove:function(){this.deleting=!0},submitDelete:function(){var t=this;this.$store.commit(o["a"]);var e=this.selected.map(function(t){return t.id});this.$store.dispatch(DELETE_STOCK,e.join(",")).then(function(){t.fetchData(),t.model=null,t.deleting=!1}).catch(function(t){Bus.$emit("errors")})},cancelDelete:function(){this.deleting=!1},submit:function(){var t=this;this.$store.commit(o["a"]);var e=this.model.id?UPDATE_STOCK:STORE_STOCK;this.$store.dispatch(e,this.model).then(function(){t.fetchData(),Bus.$emit("success"),t.model=null,t.editting=!1}).catch(function(e){e?t.$store.commit(o["f"],e):Bus.$emit("errors")})}}},P=B,O=i("8336"),k=i("99d9"),z=i("132d"),D=i("b56d"),L=i("3a2f"),E=Object(p["a"])(P,a,n,!1,null,null,null);E.options.__file="Indicators.vue";e["default"]=E.exports;g()(E,{VBtn:O["a"],VCardText:k["b"],VContainer:_["a"],VFlex:y["a"],VIcon:z["a"],VLayout:$["a"],VSelect:D["a"],VTooltip:L["a"]})}}]);
//# sourceMappingURL=chunk-7428fa18.c90a6276.js.map