(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c556d9a"],{"11e9":function(t,e,a){var i=a("52a7"),n=a("4630"),s=a("6821"),o=a("6a99"),r=a("69a8"),c=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=s(t),e=o(e,!0),c)try{return l(t,e)}catch(a){}if(r(t,e))return n(!i.f.call(t,e),t[e])}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,a){var i=a("d3f4"),n=a("8b97").set;t.exports=function(t,e,a){var s,o=e.constructor;return o!==a&&"function"==typeof o&&(s=o.prototype)!==a.prototype&&i(s)&&n&&n(t,s),t}},"8b97":function(t,e,a){var i=a("d3f4"),n=a("cb7c"),s=function(t,e){if(n(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,a){return s(t,a),e?t.__proto__=a:i(t,a),t}}({},!1):void 0),check:s}},f1b4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("material-card",[a("v-card-text",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs6:"",sm6:"",md6:""}},[a("v-select",{attrs:{items:t.activeOptions,label:"狀態"},on:{change:t.fetchData},model:{value:t.params.active,callback:function(e){t.$set(t.params,"active",e)},expression:"params.active"}})],1),a("v-flex",{staticClass:"text-lg-right",attrs:{xs6:"",sm6:"",md6:""}},[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"mr-2",attrs:{slot:"activator",color:"info",icon:""},on:{click:function(e){return e.preventDefault(),t.create(e)}},slot:"activator"},[a("v-icon",[t._v("mdi-plus-circle")])],1),a("span",{staticClass:"cn"},[t._v("新增")])],1),a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{attrs:{slot:"activator",disabled:!t.orderChanged,color:"success",icon:""},on:{click:function(e){return e.preventDefault(),t.save(e)}},slot:"activator"},[a("v-icon",[t._v("mdi-content-save")])],1),a("span",{staticClass:"cn"},[t._v("存檔")])],1)],1)],1),a("v-layout",{attrs:{id:"indicatorsList",row:"",wrap:""}},t._l(t.pageList.viewList,function(e){return a("v-flex",{key:t.itemKey(e),staticClass:"sortableRow",attrs:{xs12:""}},[a("indicator-box",{attrs:{model:e},on:{select:t.edit}})],1)}),1),a("table-pager",{attrs:{model:t.pageList,canPage:!1}})],1)],1)],1)],1)],1)},n=[],s=(a("ac6a"),a("5df3"),a("10ad"),a("cadf"),a("551c"),a("097d"),a("53fe")),o=(a("2f62"),a("ce9b")),r=a("f888"),c=a("dad0"),l=a("37a2"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("v-card",[a("v-img",{staticClass:"white--text",attrs:{src:t.imageUrl,height:"200px"},on:{click:function(e){return e.preventDefault(),t.select(e)}}},[a("v-container",{attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[a("div",{staticClass:"headline "},[a("span",{staticClass:"cn"},[t._v(t._s(t.model.name))])])])],1)],1)],1),a("v-card-title",[a("div",[a("span",{staticClass:"cn"},[t._v(t._s(t.model.description))])])])],1):t._e()},d=[],f=a("a49b"),h={name:"IndicatorsBox",props:{model:{type:Object,default:null}},data:function(){return{}},computed:{coverMedia:function(){return this.model&&this.model.medias.length?this.model.medias[0]:null},imageUrl:function(){return this.coverMedia?"".concat(f["f"],"/").concat(this.coverMedia.previewPath):""}},methods:{select:function(){this.$emit("select",this.model.id)}}},p=h,m=a("2877"),v=a("6544"),g=a.n(v),b=a("b0af"),_=a("12b2"),x=a("a523"),y=a("0e8f"),w=a("adda"),C=a("a722"),$=Object(m["a"])(p,u,d,!1,null,null,null);$.options.__file="Box.vue";var L=$.exports;g()($,{VCard:b["a"],VCardTitle:_["a"],VContainer:x["a"],VFlex:y["a"],VImg:w["a"],VLayout:C["a"]});var D=a("9420"),O=a("0feb"),V={name:"IndicatorsView",components:{"material-card":c["a"],"indicator-box":L,"table-pager":l["a"],Confirm:D["a"]},data:function(){return{params:{active:!0},pageList:{viewList:[]},activeOptions:O["a"].activeOptions(),itemKeys:new WeakMap,currentItemKey:0,orderChanged:!1}},computed:{},beforeMount:function(){this.fetchData()},methods:{init:function(){new s(document.getElementById("indicatorsList"),{draggable:".sortableRow",onEnd:this.onDragEnd})},fetchData:function(){var t=this;this.$store.commit(o["a"]),this.$store.dispatch(r["h"],this.params.active).then(function(e){t.pageList=e,t.init()}).catch(function(t){Bus.$emit("errors")})},itemKey:function(t){return this.itemKeys.has(t)||this.itemKeys.set(t,++this.currentItemKey),this.itemKeys.get(t)},onDragEnd:function(t){var e=t.oldIndex,a=t.newIndex,i=this.pageList.viewList.splice(e,1)[0];this.pageList.viewList.splice(a,0,i),this.orderChanged=!0},save:function(){var t=this;this.$store.commit(o["a"]);var e=this.pageList.viewList.map(function(t){return t.id});this.$store.dispatch(r["l"],e.join()).then(function(){t.orderChanged=!1,t.fetchData()}).catch(function(t){Bus.$emit("errors")})},create:function(){this.$router.push({path:"/indicators/create"})},edit:function(t){var e="/indicators/".concat(t);this.$router.push({path:e})},cancelEdit:function(){this.model=null,this.editting=!1},remove:function(){this.deleting=!0},submitDelete:function(){var t=this;this.$store.commit(o["a"]);var e=this.selected.map(function(t){return t.id});this.$store.dispatch(DELETE_STOCK,e.join(",")).then(function(){t.fetchData(),t.model=null,t.deleting=!1}).catch(function(t){Bus.$emit("errors")})},cancelDelete:function(){this.deleting=!1},submit:function(){var t=this;this.$store.commit(o["a"]);var e=this.model.id?UPDATE_STOCK:STORE_STOCK;this.$store.dispatch(e,this.model).then(function(){t.fetchData(),Bus.$emit("success"),t.model=null,t.editting=!1}).catch(function(e){e?t.$store.commit(o["f"],e):Bus.$emit("errors")})}}},E=V,I=a("8336"),K=a("99d9"),k=a("132d"),T=a("b56d"),j=a("3a2f"),B=Object(m["a"])(E,i,n,!1,null,null,null);B.options.__file="Indicators.vue";e["default"]=B.exports;g()(B,{VBtn:I["a"],VCardText:K["b"],VContainer:x["a"],VFlex:y["a"],VIcon:k["a"],VLayout:C["a"],VSelect:T["a"],VTooltip:j["a"]})}}]);
//# sourceMappingURL=chunk-0c556d9a.a01097fa.js.map