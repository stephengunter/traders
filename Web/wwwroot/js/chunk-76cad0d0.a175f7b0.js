(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76cad0d0"],{"19f7":function(e,t,i){"use strict";var a=i("9850"),r=i.n(a);r.a},"22e5":function(e,t,i){},"50b5":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return 0===e.result?i("div",{staticClass:"container"},[e.emailSend?i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-alert",{staticClass:"title cn",attrs:{value:!0,type:"info"}},[i("span",{staticClass:"cn"},[e._v("\n             已經Email一封驗證信給您.  請查看您的Email來完成驗證.  \n            ")])])],1)],1):i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-alert",{staticClass:"title",attrs:{value:!0,color:"error",icon:"warning",outline:""}},[i("span",{staticClass:"cn"},[e._v("\n               您的Email尚未驗證\n            ")])])],1),i("v-flex",{attrs:{xs12:""}},[i("v-btn",{staticClass:"cn",staticStyle:{margin:"6px 0px"},attrs:{color:"info"},on:{click:e.sendEmail}},[e._v("\n           重發認證信\n         ")])],1)],1)],1):i("div",{staticClass:"container"},[e.register?i("div",[i("h1",{staticClass:"cn"},[e._v("註冊 - 建立您的會員資料")]),i("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[i("ErrorList",{attrs:{model:e.Errors}})],1),i("RegisterForm",{attrs:{model:e.registerModel},on:{submit:e.onSubmitRegister}})],1):i("div",[i("h1",{staticClass:"cn"},[e._v("登入")]),i("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[i("ErrorList",{attrs:{model:e.Errors}})],1),i("LoginForm",{on:{submit:e.onSubmit}}),i("v-layout",{staticClass:"mt-3 cn",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("FacebookLogin",{on:{success:e.handleFacebookLogin,failed:e.facebookLoginFailed}})],1),i("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[i("GoogleLogin",{on:{success:e.handleGoogleLogin,failed:e.googleLoginFailed}})],1),i("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[i("a",{staticClass:"links v-breadcrumbs__item",attrs:{href:"#/forgot-password"}},[e._v("忘記密碼")]),i("a",{staticClass:"links ml-5 v-breadcrumbs__item",attrs:{href:"#/register"}},[e._v("註冊新帳號")])])],1)],1)])},r=[],n=i("be94"),s=(i("cadf"),i("551c"),i("097d"),i("2f62")),o=i("bf31"),l=i("05b3"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.credentials.email,callback:function(t){e.$set(e.credentials,"email",t)},expression:"credentials.email"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:12",expression:"'required|max:12'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}}),i("v-layout",{staticClass:"mt-1",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("登入")])],1)],1)],1)},c=[],d={name:"LoginForm",data:function(){return{credentials:{email:"",password:""}}},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&e.$emit("submit",e.credentials)})}}},h=d,v=(i("91c2"),i("2877")),m=i("6544"),f=i.n(m),p=i("8336"),g=i("0e8f"),b=i("a722"),w=i("2677"),x=Object(v["a"])(h,u,c,!1,null,"4215e6f2",null);x.options.__file="Form.vue";var y=x.exports;f()(x,{VBtn:p["a"],VFlex:g["a"],VLayout:b["a"],VTextField:w["a"]});var A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"loginBtn loginBtn--facebook",on:{click:function(t){return t.preventDefault(),e.fbLogin(t)}}},[e._v("\n   使用 facebook 登入\n")])},$=[],C=i("e815"),S={name:"FacebookLogin",data:function(){return{authWindow:null}},created:function(){window.addEventListener?window.addEventListener("message",this.handleMessage.bind(this),!1):window.attachEvent("onmessage",this.handleMessage.bind(this))},methods:{fbLogin:function(){this.authWindow=window.open(C["b"],"","width=600,height=400")},handleMessage:function(e){if(e.origin===C["d"])try{var t=JSON.parse(e.data);"fbAuth"===t.type&&this.handleFBLogin(t)}catch(i){}},handleFBLogin:function(e){this.authWindow&&this.authWindow.close(),e.status?this.$emit("success",e.accessToken):this.$emit("failed")}}},k=S,_=Object(v["a"])(k,A,$,!1,null,null,null);_.options.__file="Facebook.vue";var E=_.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"loginBtn loginBtn--google"},[i("g-signin-button",{attrs:{params:e.googleSignInParams},on:{success:e.onSignInSuccess,error:e.onSignInError}},[e._v("\n   使用 google 登入\n   ")])],1)},V=[],F={name:"GoogleLogin",data:function(){return{googleSignInParams:{client_id:"".concat(C["c"].client_id,".apps.googleusercontent.com")}}},methods:{onSignInSuccess:function(e){this.$emit("success",e.getAuthResponse().id_token)},onSignInError:function(e){this.$emit("failed")}}},R=F,O=Object(v["a"])(R,L,V,!1,null,null,null);O.options.__file="Google.vue";var B=O.exports,q=i("a3b6"),I={name:"RwvLogin",components:{ErrorList:l["a"],LoginForm:y,FacebookLogin:E,GoogleLogin:B,RegisterForm:q["a"]},data:function(){return{credentials:null,result:-1,returnUrl:"",emailSend:!1,googleApiClientId:C["c"].client_id,authWindow:null,register:!1,registerModel:null}},computed:Object(n["a"])({},Object(s["c"])({Errors:function(e){return e.auth.errors}})),beforeMount:function(){this.returnUrl=this.$route.query.returnUrl},methods:{onSubmit:function(e){var t=this;this.credentials=e,this.$store.dispatch(o["f"],e).then(function(e){t.result=e,e>0&&t.onSuccess()})},onSuccess:function(){this.redirect()},redirect:function(){this.returnUrl?this.$router.push({path:this.returnUrl}):this.$router.push({name:"home"})},sendEmail:function(){var e=this;this.$store.dispatch(o["k"],this.credentials.email).then(function(){e.emailSend=!0})},googleLoginFailed:function(){Bus.$emit("errors",{msg:"登入失敗"})},handleGoogleLogin:function(e){var t=this;this.$store.dispatch(GOOGLE_LOGIN,e).then(function(e){e?t.initRegister(e):t.onSuccess()})},facebookLoginFailed:function(){Bus.$emit("errors",{msg:"登入失敗"})},handleFacebookLogin:function(e){var t=this;this.$store.dispatch(o["d"],result.accessToken).then(function(e){e?t.initRegister(e):t.onSuccess()})},initRegister:function(e){this.registerModel=e,this.register=!0},onSubmitRegister:function(e){alert("onSubmitRegister"),console.log(e)}}},U=I,D=(i("19f7"),i("0798")),j=Object(v["a"])(U,a,r,!1,null,"ae9c0dd2",null);j.options.__file="Login.vue";t["default"]=j.exports;f()(j,{VAlert:D["a"],VBtn:p["a"],VFlex:g["a"],VLayout:b["a"]})},"60d0":function(e,t,i){},"91c2":function(e,t,i){"use strict";var a=i("22e5"),r=i.n(a);r.a},"94a7":function(e,t,i){},9850:function(e,t,i){},a14d:function(e,t,i){},a3b6:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.oAuth?i("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("v-text-field",{attrs:{label:"Email",disabled:""},model:{value:e.oAuthUser.email,callback:function(t){e.$set(e.oAuthUser,"email",t)},expression:"oAuthUser.email"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"phone",expression:"'phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.oAuthUser.phone,callback:function(t){e.$set(e.oAuthUser,"phone",t)},expression:"oAuthUser.phone"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.oAuthUser.fullname,callback:function(t){e.$set(e.oAuthUser,"fullname",t)},expression:"oAuthUser.fullname"}}),i("v-radio-group",{attrs:{row:""},model:{value:e.oAuthUser.gender,callback:function(t){e.$set(e.oAuthUser,"gender",t)},expression:"oAuthUser.gender"}},e._l(e.genderOptions,function(e,t){return i("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1):i("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"phone",expression:"'phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),i("v-radio-group",{attrs:{row:""},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},e._l(e.genderOptions,function(e,t){return i("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1)},r=[],n=i("be94"),s=(i("cadf"),i("551c"),i("097d"),{name:"RegisterForm",props:{model:{type:Object,default:null}},data:function(){return{user:{email:"",password:"",confirmPassword:"",phone:"",fullname:"",gender:1},oAuthUser:{email:"",phone:"",fullname:"",gender:1},oAuth:!1,genderOptions:Helper.genderOptions()}},beforeMount:function(){null!=this.model&&(this.oAuthUser=Object(n["a"])({},this.model),this.oAuthUser.gender=Helper.tryParseInt(this.oAuthUser.gender),this.oAuth=!0)},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&(e.oAuth?e.$emit("submit",e.oAuthUser):e.$emit("submit",e.user))})}}}),o=s,l=i("2877"),u=i("6544"),c=i.n(u),d=i("8336"),h=(i("a14d"),i("9d26")),v=i("ba87"),m=i("b64a"),f=i("3ccf"),p=i("2b0e"),g=p["a"].extend({name:"rippleable",directives:{Ripple:f["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange:function(){}}}),b=i("6a18"),w=i("c37a"),x=i("80d2"),y=p["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:x["e"]}}}),A={name:"selectable",extends:w["a"],mixins:[g,y],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(e){return{lazyValue:e.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return e.valueComparator(i,t)}):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(e){this.lazyValue=e}},methods:{genLabel:function(){if(!this.hasLabel)return null;var e=w["a"].methods.genLabel.call(this);return e.data.on={click:this.onChange},e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var e=this;if(!this.isDisabled){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter(function(i){return!e.valueComparator(i,t)}),i.length===a&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}},$=i("94ab"),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e};function S(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var k={name:"v-radio",mixins:[m["a"],g,Object($["a"])("radio","v-radio","v-radio-group"),b["a"]],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:C({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var e,t=arguments.length,i=Array(t),a=0;a<t;a++)i[a]=arguments[a];return(e=A.methods.genInput).call.apply(e,[this].concat(S(i)))},genLabel:function(){return this.$createElement(v["a"],{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||!1,dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",C({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(h["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(){this.isFocused=!0},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(e){return e("div",this.computedData,[this.genRadio(),this.genLabel()])}},_=(i("94a7"),i("60d0"),{name:"v-radio-group",extends:w["a"],mixins:[y,Object($["b"])("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},w["a"].methods.genDefaultSlot.call(this))},onRadioChange:function(e){this.disabled||(this.hasInput=!0,this.internalValue=e,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(e){e.relatedTarget&&e.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",e))},register:function(e){e.isActive=this.valueComparator(this.internalValue,e.value),e.$on("change",this.onRadioChange),e.$on("blur",this.onRadioBlur),this.radios.push(e)},setErrorState:function(e){for(var t=this.radios.length;--t>=0;)this.radios[t].parentError=e},setActiveRadio:function(){for(var e=this.radios.length;--e>=0;){var t=this.radios[e];t.isActive=this.valueComparator(this.internalValue,t.value)}},unregister:function(e){e.$off("change",this.onRadioChange),e.$off("blur",this.onRadioBlur);var t=this.radios.findIndex(function(t){return t===e});t>-1&&this.radios.splice(t,1)}}}),E=i("2677"),L=Object(l["a"])(o,a,r,!1,null,null,null);L.options.__file="Form.vue";t["a"]=L.exports;c()(L,{VBtn:d["a"],VRadio:k,VRadioGroup:_,VTextField:E["a"]})}}]);
//# sourceMappingURL=chunk-76cad0d0.a175f7b0.js.map