(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30947838"],{"3a2f":function(t,e,i){"use strict";i("60e8");var a=i("b64a"),s=i("163b"),n=i("c69d"),o=i("30d4"),r=i("b8d7"),l=i("98a1"),c=i("80d2");function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-tooltip",mixins:[a["a"],s["a"],n["a"],o["a"],r["a"],l["a"]],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,a=!this.bottom&&!this.left&&!this.top&&!this.right,s=0;return this.top||this.bottom||a?s=e.left+e.width/2-i.width/2:(this.left||this.right)&&(s=e.left+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),this.calcXOverflow(s)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,a=0;return this.top||this.bottom?a=e.top+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=e.top+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),this.calcYOverflow(a+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":void 0},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(c["b"])(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},mounted:function(){this.value&&this.callActivate()},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)}},render:function(t){var e,i=this,a=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},d(e,this.contentClass,!0),d(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[a]),t("span",{on:this.disabled?{}:{mouseenter:function(){i.runDelay("open")},mouseleave:function(){i.runDelay("close")}},ref:"activator"},this.$slots.activator)])}}},"60e8":function(t,e,i){},9617:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"cn",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-card",[i("v-card-title",{staticClass:"mt-1"},[i("h3",[i("span",{staticClass:"cn"},[t._v(t._s(t.title))])])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"名稱","error-messages":t.errors.collect("name"),name:"name",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"代碼","error-messages":t.errors.collect("code"),name:"code",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"權重(%)","error-messages":t.errors.collect("weight"),name:"weight","data-vv-as":"權重",required:""},model:{value:t.model.weight,callback:function(e){t.$set(t.model,"weight",e)},expression:"model.weight"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"價格","error-messages":t.errors.collect("price"),name:"price","data-vv-as":"價格",required:""},model:{value:t.model.price,callback:function(e){t.$set(t.model,"price",e)},expression:"model.price"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-checkbox",{attrs:{label:"電信股"},model:{value:t.model.ignore,callback:function(e){t.$set(t.model,"ignore",e)},expression:"model.ignore"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),i("v-btn",{attrs:{type:"submit",color:"blue darken-1",flat:""},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Save")])],1)],1)],1)},s=[],n=(i("cadf"),i("551c"),i("097d"),{name:"StockEdit",props:{model:{type:Object,default:null}},data:function(){return{}},beforeMount:function(){this.model.weight||(this.model.weight=""),this.model.price||(this.model.price="")},computed:{title:function(){return this.model&&this.model.id?"編輯權值股":"新增權值股"}},methods:{cancel:function(){this.$emit("cancel")},onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.$emit("submit")})}}}),o=n,r=i("2877"),l=i("6544"),c=i.n(l),d=i("8336"),u=i("b0af"),h=i("99d9"),m=i("12b2"),v=i("ac7c"),f=i("a523"),p=i("0e8f"),b=i("a722"),g=i("9910"),x=i("2677"),k=Object(r["a"])(o,a,s,!1,null,null,null);k.options.__file="Edit.vue";e["a"]=k.exports;c()(k,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:m["a"],VCheckbox:v["a"],VContainer:f["a"],VFlex:p["a"],VLayout:b["a"],VSpacer:g["a"],VTextField:x["a"]})},eb96:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:"","grid-list-xl":"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("v-flex",{attrs:{xs12:""}},[i("material-card",[i("v-card-text",[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{sm6:""}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}})],1)]),i("v-flex",{staticClass:"text-lg-right",attrs:{sm6:""}},[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{staticClass:"mr-2",attrs:{slot:"activator",disabled:!t.canCreate,color:"info",icon:""},on:{click:function(e){return e.preventDefault(),t.create(e)}},slot:"activator"},[i("v-icon",[t._v("mdi-plus-circle")])],1),i("span",{staticClass:"cn"},[t._v("新增")])],1),i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("v-btn",{attrs:{slot:"activator",disabled:!t.canRemove,color:"error",icon:""},on:{click:function(e){return e.preventDefault(),t.remove(e)}},slot:"activator"},[i("v-icon",[t._v("mdi-delete-circle")])],1),i("span",{staticClass:"cn"},[t._v("刪除")])],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.editting,callback:function(e){t.editting=e},expression:"editting"}},[t.editting?i("stock-edit",{attrs:{model:t.model},on:{submit:t.submit,cancel:t.cancelEdit}}):t._e()],1)],1)],1),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{sm12:""}},[i("v-data-table",{attrs:{"select-all":"",headers:t.headers,items:t.stocks,"hide-actions":"","item-key":"id"},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[i("span",{staticClass:"subheading font-weight-light text-success text--darken-3 cn"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(a.text)+"\n\t\t\t\t\t\t\t\t\t\t")])]}},{key:"items",fn:function(e){return[i("td",[i("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(i){t.$set(e,"selected",i)},expression:"props.selected"}})],1),i("td",{staticClass:"cn"},[t._v(t._s(e.item.name)+"  "),e.item.ignore?i("v-icon",[t._v("mdi-cancel")]):t._e()],1),i("td",[t._v(t._s(e.item.code))]),i("td",[t._v(t._s(e.item.weight))]),i("td",[i("v-tooltip",{attrs:{top:"","content-class":"top"}},[i("a",{attrs:{slot:"activator",href:"#",icon:""},on:{click:function(i){i.preventDefault(),t.edit(e.item.id)}},slot:"activator"},[i("v-icon",{attrs:{small:"",color:"success"}},[t._v("mdi-pencil")])],1),i("span",{staticClass:"cn"},[t._v("編輯")])])],1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)],1)],1)],1)],1)},s=[],n=i("be94"),o=(i("cadf"),i("551c"),i("097d"),i("2f62")),r=i("f888"),l=i("dad0"),c=i("9617"),d={name:"StocksView",components:{"material-card":l["a"],"stock-edit":c["a"]},data:function(){return{params:{keyword:"",page:1,pageSize:10},headers:[{sortable:!1,text:"名稱",value:"name"},{sortable:!1,text:"代碼",value:"code"},{sortable:!1,text:"權重 (%)",value:"weight"},{sortable:!1,text:"",value:"",width:"50px"}],selected:[],editting:!1,model:null}},computed:Object(n["a"])({},Object(o["c"])({stocks:function(t){return t.stocks.stocks}}),{canRemove:function(){return!this.editting&&this.selected.length>0},canCreate:function(){return!this.editting}}),watch:{checkAll:function(t){alert(t)}},beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch(r["c"],this.params)},search:function(){this.fetchData()},create:function(){var t=this;this.selected=[],this.$store.dispatch(r["b"]).then(function(e){t.model=e,t.editting=!0})},edit:function(t){this.selected=[]},cancelEdit:function(){this.model=null,this.editting=!1},remove:function(){},submit:function(){}}},u=d,h=i("2877"),m=i("6544"),v=i.n(m),f=i("8336"),p=i("99d9"),b=i("ac7c"),g=i("a523"),x=i("8fea"),k=i("169a"),w=i("0e8f"),_=i("132d"),y=i("a722"),C=i("2677"),V=i("3a2f"),D=Object(h["a"])(u,a,s,!1,null,null,null);D.options.__file="Stocks.vue";e["default"]=D.exports;v()(D,{VBtn:f["a"],VCardText:p["b"],VCheckbox:b["a"],VContainer:g["a"],VDataTable:x["a"],VDialog:k["a"],VFlex:w["a"],VIcon:_["a"],VLayout:y["a"],VTextField:C["a"],VTooltip:V["a"]})}}]);
//# sourceMappingURL=chunk-30947838.4607166d.js.map