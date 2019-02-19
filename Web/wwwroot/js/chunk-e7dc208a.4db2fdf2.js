(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7dc208a"],{"0798":function(t,e,i){"use strict";i("a57f");var a=i("9d26"),n=i("b64a"),s=i("98a1"),r=i("00ab"),o=i("58df");e["a"]=Object(o["a"])(n["a"],s["a"],r["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(a["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(a["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,a=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[a]):a}})},"14a8":function(t,e,i){"use strict";var a=i("ac58"),n=i.n(a);n.a},2889:function(t,e,i){"use strict";var a=i("3c60"),n=i.n(a);n.a},"3c60":function(t,e,i){},5368:function(t,e,i){"use strict";var a=i("c37a"),n=i("ad54"),s=i("5e28");e["a"]={name:"selectable",extends:a["a"],mixins:[n["a"],s["a"]],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return t.valueComparator(i,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var t=a["a"].methods.genLabel.call(this);return t.data.on={click:this.onChange},t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter(function(i){return!t.valueComparator(i,e)}),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}},"5e28":function(t,e,i){"use strict";var a=i("2b0e"),n=i("80d2");e["a"]=a["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["g"]}}})},"607b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",{staticClass:"headline red lighten-1",attrs:{"primary-title":""}},[i("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\t\t\tmdi-alert-circle\n\t\t\t\t")]),i("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\tDamn\n\t\t\t\t")])],1),i("v-card-text"),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n            I accept\n          ")])],1)],1)},n=[],s=i("be94"),r=i("2f62"),o=i("f888"),l=i("dad0"),c=i("9617"),u={name:"TestView",components:{"material-card":l["a"],"stock-edit":c["a"]},data:function(){return{params:{keyword:"",page:1,pageSize:10},headers:[{sortable:!1,text:"名稱",value:"name"},{sortable:!1,text:"代碼",value:"code"},{sortable:!1,text:"權重 (%)",value:"weight"},{sortable:!1,text:"",value:"",width:"200px"}],editting:!1,model:null,tabs:0}},computed:Object(s["a"])({},Object(r["c"])({stocks:function(t){return t.stocks.stocks}})),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch(o["i"],this.params)},search:function(){this.fetchData()},create:function(){var t=this;this.$store.dispatch(o["c"]).then(function(e){t.model=e,t.editting=!0})},edit:function(){},cancelEdit:function(){this.model=null,this.editting=!1},submit:function(){}}},d=u,f=i("2877"),h=i("6544"),v=i.n(h),m=i("8336"),p=i("b0af"),b=i("99d9"),g=i("12b2"),x=i("ce7e"),y=i("132d"),C=i("9910"),_=Object(f["a"])(d,a,n,!1,null,null,null);_.options.__file="Test.vue";e["default"]=_.exports;v()(_,{VBtn:m["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:g["a"],VDivider:x["a"],VIcon:y["a"],VSpacer:C["a"]})},"93aa":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?i("ul",t._l(t.errorList.errors,function(e,a){return i("li",{key:a,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},n=[],s=i("be94"),r=i("2f62"),o={name:"ErrorList",computed:Object(s["a"])({},Object(r["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},l=o,c=i("2877"),u=i("6544"),d=i.n(u),f=i("0798"),h=Object(c["a"])(l,a,n,!1,null,null,null);h.options.__file="ErrorList.vue";e["a"]=h.exports;d()(h,{VAlert:f["a"]})},"94a7":function(t,e,i){},9617:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"cn",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-card",[i("v-card-title",[i("h3",[i("span",{staticClass:"cn"},[t._v(t._s(t.title))])])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"名稱","error-messages":t.errors.collect("name"),name:"name",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"代碼","error-messages":t.errors.collect("code"),name:"code",required:""},model:{value:t.model.code,callback:function(e){t.$set(t.model,"code",e)},expression:"model.code"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"權重(%)","error-messages":t.errors.collect("weight"),name:"weight","data-vv-as":"權重",required:""},model:{value:t.model.weight,callback:function(e){t.$set(t.model,"weight",e)},expression:"model.weight"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"價格","error-messages":t.errors.collect("price"),name:"price","data-vv-as":"價格",required:""},model:{value:t.model.price,callback:function(e){t.$set(t.model,"price",e)},expression:"model.price"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-checkbox",{attrs:{label:"電信股"},model:{value:t.model.ignore,callback:function(e){t.$set(t.model,"ignore",e)},expression:"model.ignore"}})],1)],1),i("ErrorList")],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),i("v-btn",{attrs:{type:"submit",color:"primary",flat:""},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Save")])],1)],1)],1)},n=[],s=(i("2f62"),i("93aa")),r={name:"StockEdit",components:{ErrorList:s["a"]},props:{model:{type:Object,default:null}},data:function(){return{}},computed:{title:function(){return this.model&&this.model.id?"編輯權值股":"新增權值股"}},beforeMount:function(){this.model.weight||(this.model.weight=""),this.model.price||(this.model.price="")},methods:{cancel:function(){this.$emit("cancel")},onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.$emit("submit")})}}},o=r,l=i("2877"),c=i("6544"),u=i.n(c),d=i("8336"),f=i("b0af"),h=i("99d9"),v=i("12b2"),m=i("ac7c"),p=i("a523"),b=i("0e8f"),g=i("a722"),x=i("9910"),y=i("2677"),C=Object(l["a"])(o,a,n,!1,null,null,null);C.options.__file="Edit.vue";e["a"]=C.exports;u()(C,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:v["a"],VCheckbox:m["a"],VContainer:p["a"],VFlex:b["a"],VLayout:g["a"],VSpacer:x["a"],VTextField:y["a"]})},"99d9":function(t,e,i){"use strict";var a=i("80d2"),n=i("b0af"),s=i("adda"),r=i("d9bd"),o=s["a"].extend({name:"v-card-media",mounted:function(){Object(r["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),l=i("12b2");i.d(e,"a",function(){return c}),i.d(e,"b",function(){return u});var c=Object(a["e"])("v-card__actions"),u=Object(a["e"])("v-card__text");n["a"],l["a"]},a57f:function(t,e,i){},ac58:function(t,e,i){},ac7c:function(t,e,i){"use strict";i("94a7");var a=i("9d26"),n=i("5368"),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]={name:"v-checkbox",mixins:[n["a"]],props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(t){return{inputIndeterminate:t.indeterminate}},computed:{classes:function(){return{"v-input--selection-controls":!0,"v-input--checkbox":!0}},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon}},watch:{indeterminate:function(t){this.inputIndeterminate=t}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",s({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(a["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}},ad54:function(t,e,i){"use strict";var a=i("3ccf"),n=i("2b0e");e["a"]=n["default"].extend({name:"rippleable",directives:{Ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},dad0:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?i("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):i("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?i("span",[i("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),i("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),i("v-card-text",[t._t("default")],2),t.$slots.actions?i("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?i("v-card-actions",[t._t("actions")],2):t._e()],1)},n=[],s=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)}),r=[],o={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},l=o,c=(i("2889"),i("2877")),u=Object(c["a"])(l,s,r,!1,null,null,null);u.options.__file="Offset.vue";var d=u.exports,f={inheritAttrs:!1,components:{"helper-offset":d},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},h=f,v=(i("14a8"),i("6544")),m=i.n(v),p=i("b0af"),b=i("99d9"),g=i("ce7e"),x=Object(c["a"])(h,a,n,!1,null,null,null);x.options.__file="Card.vue";e["a"]=x.exports;m()(x,{VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VDivider:g["a"]})}}]);
//# sourceMappingURL=chunk-e7dc208a.4db2fdf2.js.map