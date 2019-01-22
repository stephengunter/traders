(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d93104c"],{"0798":function(e,t,i){"use strict";i("a57f");var r=i("9d26"),a=i("b64a"),s=i("98a1"),n=i("00ab"),o=i("58df");t["a"]=Object(o["a"])(a["a"],s["a"],n["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(r["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var e=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){e.isActive=!1}}},[this.$createElement(r["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(e){var t=[this.genIcon(),e("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,r=e("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),t);return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r}})},5368:function(e,t,i){"use strict";var r=i("c37a"),a=i("ad54"),s=i("5e28");t["a"]={name:"selectable",extends:r["a"],mixins:[a["a"],s["a"]],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(e){return{lazyValue:e.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return e.valueComparator(i,t)}):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(e){this.lazyValue=e}},methods:{genLabel:function(){if(!this.hasLabel)return null;var e=r["a"].methods.genLabel.call(this);return e.data.on={click:this.onChange},e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var e=this;if(!this.isDisabled){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var r=i.length;i=i.filter(function(i){return!e.valueComparator(i,t)}),i.length===r&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}},"5e28":function(e,t,i){"use strict";var r=i("2b0e"),a=i("80d2");t["a"]=r["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["g"]}}})},"60d0":function(e,t,i){},"802f":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.oAuth?i("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("v-text-field",{attrs:{label:"Email",disabled:""},model:{value:e.oAuthUser.email,callback:function(t){e.$set(e.oAuthUser,"email",t)},expression:"oAuthUser.email"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"phone",expression:"'phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.oAuthUser.phone,callback:function(t){e.$set(e.oAuthUser,"phone",t)},expression:"oAuthUser.phone"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.oAuthUser.fullname,callback:function(t){e.$set(e.oAuthUser,"fullname",t)},expression:"oAuthUser.fullname"}}),i("v-radio-group",{attrs:{row:""},model:{value:e.oAuthUser.gender,callback:function(t){e.$set(e.oAuthUser,"gender",t)},expression:"oAuthUser.gender"}},e._l(e.genderOptions,function(e,t){return i("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1):i("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"phone",expression:"'phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),i("v-radio-group",{attrs:{row:""},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},e._l(e.genderOptions,function(e,t){return i("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1)},a=[],s=i("be94"),n=(i("cadf"),i("551c"),i("097d"),{name:"RegisterForm",props:{model:{type:Object,default:null}},data:function(){return{user:{email:"",password:"",confirmPassword:"",phone:"",fullname:"",gender:1},oAuthUser:{email:"",phone:"",fullname:"",gender:1},oAuth:!1,genderOptions:Helper.genderOptions()}},beforeMount:function(){null!=this.model&&(this.oAuthUser=Object(s["a"])({},this.model),this.oAuthUser.gender=Helper.tryParseInt(this.oAuthUser.gender),this.oAuth=!0)},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&(e.oAuth?e.$emit("submit",e.oAuthUser):e.$emit("submit",e.user))})}}}),o=n,l=i("2877"),u=i("6544"),c=i.n(u),d=i("8336"),h=(i("a14d"),i("9d26")),v=i("ba87"),f=i("b64a"),p=i("ad54"),m=i("6a18"),g=i("5368"),b=i("94ab"),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};function A(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var w={name:"v-radio",mixins:[f["a"],p["a"],Object(b["a"])("radio","v-radio","v-radio-group"),m["a"]],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:y({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var e,t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];return(e=g["a"].methods.genInput).call.apply(e,[this].concat(A(i)))},genLabel:function(){return this.$createElement(v["a"],{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||!1,dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",y({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(h["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(){this.isFocused=!0},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(e){return e("div",this.computedData,[this.genRadio(),this.genLabel()])}},x=(i("94a7"),i("60d0"),i("c37a")),$=i("5e28"),C={name:"v-radio-group",extends:x["a"],mixins:[$["a"],Object(b["b"])("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},x["a"].methods.genDefaultSlot.call(this))},onRadioChange:function(e){this.disabled||(this.hasInput=!0,this.internalValue=e,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(e){e.relatedTarget&&e.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",e))},register:function(e){e.isActive=this.valueComparator(this.internalValue,e.value),e.$on("change",this.onRadioChange),e.$on("blur",this.onRadioBlur),this.radios.push(e)},setErrorState:function(e){for(var t=this.radios.length;--t>=0;)this.radios[t].parentError=e},setActiveRadio:function(){for(var e=this.radios.length;--e>=0;){var t=this.radios[e];t.isActive=this.valueComparator(this.internalValue,t.value)}},unregister:function(e){e.$off("change",this.onRadioChange),e.$off("blur",this.onRadioBlur);var t=this.radios.findIndex(function(t){return t===e});t>-1&&this.radios.splice(t,1)}}},k=i("2677"),S=Object(l["a"])(o,r,a,!1,null,null,null);S.options.__file="Form.vue";t["a"]=S.exports;c()(S,{VBtn:d["a"],VRadio:w,VRadioGroup:C,VTextField:k["a"]})},"94a7":function(e,t,i){},a14d:function(e,t,i){},a57f:function(e,t,i){},ad54:function(e,t,i){"use strict";var r=i("3ccf"),a=i("2b0e");t["a"]=a["default"].extend({name:"rippleable",directives:{Ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange:function(){}}})},df21:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.model?i("ul",e._l(e.model.errors,function(t,r){return i("li",{key:r,domProps:{textContent:e._s(t[0])}})}),0):e._e()},a=[],s={name:"ErrorList",props:{model:{type:Object,default:null}}},n=s,o=i("2877"),l=Object(o["a"])(n,r,a,!1,null,null,null);l.options.__file="Errors.vue";t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-2d93104c.a71dff51.js.map