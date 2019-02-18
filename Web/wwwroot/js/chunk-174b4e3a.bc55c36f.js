(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-174b4e3a"],{"0798":function(t,e,i){"use strict";i("a57f");var n=i("9d26"),r=i("b64a"),a=i("98a1"),s=i("00ab"),o=i("58df");e["a"]=Object(o["a"])(r["a"],a["a"],s["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(n["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(n["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,n=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n}})},"11e9":function(t,e,i){var n=i("52a7"),r=i("4630"),a=i("6821"),s=i("6a99"),o=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=a(t),e=s(e,!0),c)try{return l(t,e)}catch(i){}if(o(t,e))return r(!n.f.call(t,e),t[e])}},"14a8":function(t,e,i){"use strict";var n=i("ac58"),r=i.n(n);r.a},2889:function(t,e,i){"use strict";var n=i("3c60"),r=i.n(n);r.a},"3c60":function(t,e,i){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5368:function(t,e,i){"use strict";var n=i("c37a"),r=i("ad54"),a=i("5e28");e["a"]={name:"selectable",extends:n["a"],mixins:[r["a"],a["a"]],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return t.valueComparator(i,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var t=n["a"].methods.genLabel.call(this);return t.data.on={click:this.onChange},t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter(function(i){return!t.valueComparator(i,e)}),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}},"5dbc":function(t,e,i){var n=i("d3f4"),r=i("8b97").set;t.exports=function(t,e,i){var a,s=e.constructor;return s!==i&&"function"==typeof s&&(a=s.prototype)!==i.prototype&&n(a)&&r&&r(t,a),t}},"5e28":function(t,e,i){"use strict";var n=i("2b0e"),r=i("80d2");e["a"]=n["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["g"]}}})},"607b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",{staticClass:"headline red lighten-1",attrs:{"primary-title":""}},[i("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n\t\t\t\t\tmdi-alert-circle\n\t\t\t\t")]),i("span",{staticClass:"errText cn"},[t._v("\n\t\t\t\t\tDamn\n\t\t\t\t")])],1),i("v-card-text"),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n            I accept\n          ")])],1)],1)},r=[],a=i("be94"),s=i("2f62"),o=i("f888"),c=i("dad0"),l=i("9617"),u={name:"TestView",components:{"material-card":c["a"],"stock-edit":l["a"]},data:function(){return{params:{keyword:"",page:1,pageSize:10},headers:[{sortable:!1,text:"名稱",value:"name"},{sortable:!1,text:"代碼",value:"code"},{sortable:!1,text:"權重 (%)",value:"weight"},{sortable:!1,text:"",value:"",width:"200px"}],editting:!1,model:null,tabs:0}},computed:Object(a["a"])({},Object(s["c"])({stocks:function(t){return t.stocks.stocks}})),beforeMount:function(){this.fetchData()},methods:{fetchData:function(){this.$store.dispatch(o["i"],this.params)},search:function(){this.fetchData()},create:function(){var t=this;this.$store.dispatch(o["c"]).then(function(e){t.model=e,t.editting=!0})},edit:function(){},cancelEdit:function(){this.model=null,this.editting=!1},submit:function(){}}},d=u,f=i("2877"),h=i("6544"),p=i.n(h),v=i("8336"),m=i("b0af"),b=i("99d9"),g=i("12b2"),x=i("ce7e"),y=i("132d"),_=i("9910"),C=Object(f["a"])(d,n,r,!1,null,null,null);C.options.__file="Test.vue";e["default"]=C.exports;p()(C,{VBtn:v["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:g["a"],VDivider:x["a"],VIcon:y["a"],VSpacer:_["a"]})},"8b97":function(t,e,i){var n=i("d3f4"),r=i("cb7c"),a=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,i){return a(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:a}},9093:function(t,e,i){var n=i("ce10"),r=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},"93aa":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?i("ul",t._l(t.errorList.errors,function(e,n){return i("li",{key:n,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},r=[],a=i("be94"),s=i("2f62"),o={name:"ErrorList",computed:Object(a["a"])({},Object(s["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},c=o,l=i("2877"),u=i("6544"),d=i.n(u),f=i("0798"),h=Object(l["a"])(c,n,r,!1,null,null,null);h.options.__file="ErrorList.vue";e["a"]=h.exports;d()(h,{VAlert:f["a"]})},"94a7":function(t,e,i){},9617:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"cn",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-card",[i("v-card-title",[i("h3",[i("span",{staticClass:"cn"},[t._v(t._s(t.title))])])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"名稱","error-messages":t.errors.collect("name"),name:"name",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"代碼","error-messages":t.errors.collect("code"),name:"code",required:""},model:{value:t.model.code,callback:function(e){t.$set(t.model,"code",e)},expression:"model.code"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"權重(%)","error-messages":t.errors.collect("weight"),name:"weight","data-vv-as":"權重",required:""},model:{value:t.model.weight,callback:function(e){t.$set(t.model,"weight",e)},expression:"model.weight"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|decimal",expression:"'required|decimal'"}],attrs:{label:"價格","error-messages":t.errors.collect("price"),name:"price","data-vv-as":"價格",required:""},model:{value:t.model.price,callback:function(e){t.$set(t.model,"price",e)},expression:"model.price"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-checkbox",{attrs:{label:"電信股"},model:{value:t.model.ignore,callback:function(e){t.$set(t.model,"ignore",e)},expression:"model.ignore"}})],1)],1),i("ErrorList")],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),i("v-btn",{attrs:{type:"submit",color:"primary",flat:""},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Save")])],1)],1)],1)},r=[],a=(i("2f62"),i("93aa")),s={name:"StockEdit",components:{ErrorList:a["a"]},props:{model:{type:Object,default:null}},data:function(){return{}},computed:{title:function(){return this.model&&this.model.id?"編輯權值股":"新增權值股"}},beforeMount:function(){this.model.weight||(this.model.weight=""),this.model.price||(this.model.price="")},methods:{cancel:function(){this.$emit("cancel")},onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.$emit("submit")})}}},o=s,c=i("2877"),l=i("6544"),u=i.n(l),d=i("8336"),f=i("b0af"),h=i("99d9"),p=i("12b2"),v=i("ac7c"),m=i("a523"),b=i("0e8f"),g=i("a722"),x=i("9910"),y=i("2677"),_=Object(c["a"])(o,n,r,!1,null,null,null);_.options.__file="Edit.vue";e["a"]=_.exports;u()(_,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:p["a"],VCheckbox:v["a"],VContainer:m["a"],VFlex:b["a"],VLayout:g["a"],VSpacer:x["a"],VTextField:y["a"]})},"99d9":function(t,e,i){"use strict";var n=i("80d2"),r=i("b0af"),a=i("adda"),s=i("d9bd"),o=a["a"].extend({name:"v-card-media",mounted:function(){Object(s["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),c=i("12b2");i.d(e,"a",function(){return l}),i.d(e,"b",function(){return u});var l=Object(n["e"])("v-card__actions"),u=Object(n["e"])("v-card__text");r["a"],c["a"]},a57f:function(t,e,i){},aa77:function(t,e,i){var n=i("5ca1"),r=i("be13"),a=i("79e5"),s=i("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(t,e,i){var r={},o=a(function(){return!!s[t]()||c[t]()!=c}),l=r[t]=o?e(f):s[t];i&&(r[i]=l),n(n.P+n.F*o,"String",r)},f=d.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},ac58:function(t,e,i){},ac7c:function(t,e,i){"use strict";i("94a7");var n=i("9d26"),r=i("5368"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};e["a"]={name:"v-checkbox",mixins:[r["a"]],props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(t){return{inputIndeterminate:t.indeterminate}},computed:{classes:function(){return{"v-input--selection-controls":!0,"v-input--checkbox":!0}},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon}},watch:{indeterminate:function(t){this.inputIndeterminate=t}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",a({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(n["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}},ad54:function(t,e,i){"use strict";var n=i("3ccf"),r=i("2b0e");e["a"]=r["default"].extend({name:"rippleable",directives:{Ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},c5f6:function(t,e,i){"use strict";var n=i("7726"),r=i("69a8"),a=i("2d95"),s=i("5dbc"),o=i("6a99"),c=i("79e5"),l=i("9093").f,u=i("11e9").f,d=i("86cc").f,f=i("aa77").trim,h="Number",p=n[h],v=p,m=p.prototype,b=a(i("2aeb")(m))==h,g="trim"in String.prototype,x=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():f(e,3);var i,n,r,a=e.charCodeAt(0);if(43===a||45===a){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>r)return NaN;return parseInt(c,n)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof p&&(b?c(function(){m.valueOf.call(i)}):a(i)!=h)?s(new v(x(e)),i,p):x(e)};for(var y,_=i("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;_.length>C;C++)r(v,y=_[C])&&!r(p,y)&&d(p,y,u(v,y));p.prototype=m,m.constructor=p,i("2aba")(n,h,p)}},dad0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?i("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):i("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?i("span",[i("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),i("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),i("v-card-text",[t._t("default")],2),t.$slots.actions?i("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?i("v-card-actions",[t._t("actions")],2):t._e()],1)},r=[],a=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)}),s=[],o={props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}},c=o,l=(i("2889"),i("2877")),u=Object(l["a"])(c,a,s,!1,null,null,null);u.options.__file="Offset.vue";var d=u.exports,f={inheritAttrs:!1,components:{"helper-offset":d},props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}},h=f,p=(i("14a8"),i("6544")),v=i.n(p),m=i("b0af"),b=i("99d9"),g=i("ce7e"),x=Object(l["a"])(h,n,r,!1,null,null,null);x.options.__file="Card.vue";e["a"]=x.exports;v()(x,{VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VDivider:g["a"]})},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-174b4e3a.bc55c36f.js.map