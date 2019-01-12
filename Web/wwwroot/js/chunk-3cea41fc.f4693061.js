(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cea41fc"],{"60d0":function(e,t,i){},"94a7":function(e,t,i){},a14d:function(e,t,i){},a5a8:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h1",{staticClass:"cn"},[e._v("註冊")]),i("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[i("ErrorList",{attrs:{model:e.Errors}})],1),i("registerForm",{on:{submit:e.onSubmit}})],1)},a=[],s=i("be94"),n=i("2f62"),o=i("bf31"),l=i("05b3"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|phone",expression:"'required|phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),i("v-radio-group",{attrs:{row:""},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},e._l(e.genderOptions,function(e,t){return i("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1)},d=[],c={name:"RegisterForm",data:function(){return{user:{email:"",password:"",confirmPassword:"",phone:"",fullname:"",gender:1},genderOptions:Helper.genderOptions()}},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&e.$emit("submit",e.user)})}}},h=c,v=i("2877"),p=i("6544"),f=i.n(p),m=i("8336"),g=(i("a14d"),i("9d26")),b=i("ba87"),y=i("b64a"),w=i("3ccf"),x=i("2b0e"),C=x["a"].extend({name:"rippleable",directives:{Ripple:w["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange:function(){}}}),$=i("6a18"),A=i("c37a"),V=i("80d2"),S=x["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:V["e"]}}}),R={name:"selectable",extends:A["a"],mixins:[C,S],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(e){return{lazyValue:e.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return e.valueComparator(i,t)}):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(e){this.lazyValue=e}},methods:{genLabel:function(){if(!this.hasLabel)return null;var e=A["a"].methods.genLabel.call(this);return e.data.on={click:this.onChange},e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var e=this;if(!this.isDisabled){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var r=i.length;i=i.filter(function(i){return!e.valueComparator(i,t)}),i.length===r&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}},k=i("94ab"),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};function O(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var _={name:"v-radio",mixins:[y["a"],C,Object(k["a"])("radio","v-radio","v-radio-group"),$["a"]],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:E({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var e,t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];return(e=R.methods.genInput).call.apply(e,[this].concat(O(i)))},genLabel:function(){return this.$createElement(b["a"],{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||!1,dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",E({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(g["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(){this.isFocused=!0},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(e){return e("div",this.computedData,[this.genRadio(),this.genLabel()])}},q=(i("94a7"),i("60d0"),{name:"v-radio-group",extends:A["a"],mixins:[S,Object(k["b"])("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},A["a"].methods.genDefaultSlot.call(this))},onRadioChange:function(e){this.disabled||(this.hasInput=!0,this.internalValue=e,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(e){e.relatedTarget&&e.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",e))},register:function(e){e.isActive=this.valueComparator(this.internalValue,e.value),e.$on("change",this.onRadioChange),e.$on("blur",this.onRadioBlur),this.radios.push(e)},setErrorState:function(e){for(var t=this.radios.length;--t>=0;)this.radios[t].parentError=e},setActiveRadio:function(){for(var e=this.radios.length;--e>=0;){var t=this.radios[e];t.isActive=this.valueComparator(this.internalValue,t.value)}},unregister:function(e){e.$off("change",this.onRadioChange),e.$off("blur",this.onRadioBlur);var t=this.radios.findIndex(function(t){return t===e});t>-1&&this.radios.splice(t,1)}}}),B=i("2677"),F=Object(v["a"])(h,u,d,!1,null,null,null);F.options.__file="Form.vue";var D=F.exports;f()(F,{VBtn:m["a"],VRadio:_,VRadioGroup:q,VTextField:B["a"]});var I={name:"RwvRegister",components:{ErrorList:l["a"],RegisterForm:D},data:function(){return{}},computed:Object(s["a"])({},Object(n["c"])({Errors:function(e){return e.auth.errors}})),methods:{onSubmit:function(e){var t=this;this.$store.dispatch(o["h"],e).then(function(){t.$store.dispatch(o["e"],{email:e.email,password:e.password}).then(function(){return t.redirect()})})},redirect:function(){this.$router.push({name:"home"})}}},j=I,L=i("0798"),P=Object(v["a"])(j,r,a,!1,null,null,null);P.options.__file="Register.vue";t["default"]=P.exports;f()(P,{VAlert:L["a"]})}}]);
//# sourceMappingURL=chunk-3cea41fc.f4693061.js.map