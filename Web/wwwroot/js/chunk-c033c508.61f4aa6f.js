(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c033c508"],{"22e5":function(e,t,r){},"47ce":function(e,t,r){"use strict";var i=r("88c3"),a=r.n(i);a.a},"50b5":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return 0===e.result?r("div",{staticClass:"container"},[e.emailSend?r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-alert",{staticClass:"title cn",attrs:{value:!0,type:"info"}},[r("span",{staticClass:"cn"},[e._v("\n             已經Email一封驗證信給您.  請查看您的Email來完成驗證.  \n            ")])])],1)],1):r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-alert",{staticClass:"title",attrs:{value:!0,color:"error",icon:"warning",outline:""}},[r("span",{staticClass:"cn"},[e._v("\n               您的Email尚未驗證\n            ")])])],1),r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"cn",staticStyle:{margin:"6px 0px"},attrs:{color:"info"},on:{click:e.sendEmail}},[e._v("\n           重發認證信\n         ")])],1)],1)],1):r("div",{staticClass:"container"},[e.register?r("div",[r("h1",{staticClass:"cn"},[e._v("註冊 - 建立您的會員資料")]),r("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[r("ErrorList",{attrs:{model:e.Errors}})],1),r("RegisterForm",{attrs:{model:e.registerModel},on:{submit:e.onSubmitRegister}})],1):r("div",[r("h1",{staticClass:"cn"},[e._v("登入")]),r("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[r("ErrorList",{attrs:{model:e.Errors}})],1),r("LoginForm",{on:{submit:e.onSubmit}}),r("v-layout",{staticClass:"mt-3 cn",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("button",{staticClass:"loginBtn loginBtn--facebook",on:{click:function(t){return t.preventDefault(),e.fbLogin(t)}}},[e._v("\n               使用 facebook 登入\n            ")])]),r("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[r("button",{staticClass:"loginBtn loginBtn--google",on:{click:function(t){return t.preventDefault(),e.googleLogin(t)}}},[e._v("\n            使用 google 登入\n            ")])]),r("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[r("a",{staticClass:"links v-breadcrumbs__item",attrs:{href:"#/forgot-password"}},[e._v("忘記密碼")]),r("a",{staticClass:"links ml-5 v-breadcrumbs__item",attrs:{href:"#/register"}},[e._v("註冊新帳號")])])],1)],1)])},a=[],s=r("be94"),n=(r("cadf"),r("551c"),r("097d"),r("2f62")),o=r("bf31"),l=r("05b3"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.credentials.email,callback:function(t){e.$set(e.credentials,"email",t)},expression:"credentials.email"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:12",expression:"'required|max:12'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.credentials.password,callback:function(t){e.$set(e.credentials,"password",t)},expression:"credentials.password"}}),r("v-layout",{staticClass:"mt-1",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("登入")])],1)],1)],1)},c=[],d={name:"LoginForm",data:function(){return{credentials:{email:"",password:""}}},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&e.$emit("submit",e.credentials)})}}},h=d,v=(r("91c2"),r("2877")),m=r("6544"),f=r.n(m),p=r("8336"),g=r("0e8f"),b=r("a722"),x=r("2677"),w=Object(v["a"])(h,u,c,!1,null,"4215e6f2",null);w.options.__file="Form.vue";var y=w.exports;f()(w,{VBtn:p["a"],VFlex:g["a"],VLayout:b["a"],VTextField:x["a"]});var A=r("a3b6"),C=r("e815"),k={name:"RwvLogin",components:{ErrorList:l["a"],LoginForm:y,RegisterForm:A["a"]},data:function(){return{credentials:null,result:-1,returnUrl:"",emailSend:!1,authWindow:null,register:!1,registerModel:null}},computed:Object(s["a"])({},Object(n["c"])({Errors:function(e){return e.auth.errors}})),beforeMount:function(){this.returnUrl=this.$route.query.returnUrl},created:function(){window.addEventListener?window.addEventListener("message",this.handleMessage.bind(this),!1):window.attachEvent("onmessage",this.handleMessage.bind(this))},methods:{onSubmit:function(e){var t=this;this.credentials=e,this.$store.dispatch(o["f"],e).then(function(e){t.result=e,e>0&&t.onSuccess()})},onSuccess:function(){this.redirect()},redirect:function(){this.returnUrl?this.$router.push({path:this.returnUrl}):this.$router.push({name:"home"})},sendEmail:function(){var e=this;this.$store.dispatch(o["k"],this.credentials.email).then(function(){e.emailSend=!0})},googleLogin:function(){this.$gAuth.signIn().then(function(e){var t=googleUser.getAuthResponse().id_token;console.log("ID Token: "+t)}).catch(function(e){})},fbLogin:function(){this.handleFBLogin({status:!0,accessToken:"EAAEEC1Ln7uEBALHZC6M0y8WsFRRU6IYcP4nvRpqB7phjOMgpLF2ZAxP0EGkf9r0GghC034hTAviG1PO8bYJNzKyV2sarpMUSdR4ngSbi3pzkXULH2oZCBbgZB6xqmIknNmfm9cXpPIZCmlWHMDEAJ5Us77oSSbqJGkALZBQrv2zxZAVlEI38P6zjZCbmZBBWkK6oEWoXNQD9kawZDZD"})},handleMessage:function(e){if(e.origin===C["c"])try{var t=JSON.parse(e.data);"fbAuth"===t.type&&this.handleFBLogin(t)}catch(r){}},handleFBLogin:function(e){var t=this;this.authWindow&&this.authWindow.close(),e.status?this.$store.dispatch(o["d"],e.accessToken).then(function(e){e?t.initRegister(e):t.onSuccess()}):Bus.$emit("errors",{msg:"登入失敗"})},initRegister:function(e){this.registerModel=e,this.register=!0},onSubmitRegister:function(e){alert("onSubmitRegister"),console.log(e)}}},$=k,S=(r("47ce"),r("0798")),E=Object(v["a"])($,i,a,!1,null,"83c70206",null);E.options.__file="Login.vue";t["default"]=E.exports;f()(E,{VAlert:S["a"],VBtn:p["a"],VFlex:g["a"],VLayout:b["a"]})},"60d0":function(e,t,r){},"88c3":function(e,t,r){},"91c2":function(e,t,r){"use strict";var i=r("22e5"),a=r.n(i);a.a},"94a7":function(e,t,r){},a14d:function(e,t,r){},a3b6:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.oAuth?r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("v-text-field",{attrs:{label:"Email",disabled:""},model:{value:e.oAuthUser.email,callback:function(t){e.$set(e.oAuthUser,"email",t)},expression:"oAuthUser.email"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"phone",expression:"'phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.oAuthUser.phone,callback:function(t){e.$set(e.oAuthUser,"phone",t)},expression:"oAuthUser.phone"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.oAuthUser.fullname,callback:function(t){e.$set(e.oAuthUser,"fullname",t)},expression:"oAuthUser.fullname"}}),r("v-radio-group",{attrs:{row:""},model:{value:e.oAuthUser.gender,callback:function(t){e.$set(e.oAuthUser,"gender",t)},expression:"oAuthUser.gender"}},e._l(e.genderOptions,function(e,t){return r("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),r("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1):r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"phone",expression:"'phone'"}],attrs:{"error-messages":e.errors.collect("phone"),label:"手機","data-vv-name":"phone",required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":e.errors.collect("fullname"),label:"姓名","data-vv-name":"fullname",required:""},model:{value:e.user.fullname,callback:function(t){e.$set(e.user,"fullname",t)},expression:"user.fullname"}}),r("v-radio-group",{attrs:{row:""},model:{value:e.user.gender,callback:function(t){e.$set(e.user,"gender",t)},expression:"user.gender"}},e._l(e.genderOptions,function(e,t){return r("v-radio",{key:t,attrs:{label:e.text,value:e.value}})}),1),r("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("註冊")])],1)},a=[],s=r("be94"),n={name:"RegisterForm",props:{model:{type:Object,default:null}},data:function(){return{user:{email:"",password:"",confirmPassword:"",phone:"",fullname:"",gender:1},oAuthUser:{email:"",phone:"",fullname:"",gender:1},oAuth:!1,genderOptions:Helper.genderOptions()}},beforeMount:function(){null!=this.model&&(this.oAuthUser=Object(s["a"])({},this.model),this.oAuthUser.gender=Helper.tryParseInt(this.oAuthUser.gender),this.oAuth=!0)},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&(e.oAuth?e.$emit("submit",e.oAuthUser):e.$emit("submit",e.user))})}}},o=n,l=r("2877"),u=r("6544"),c=r.n(u),d=r("8336"),h=(r("a14d"),r("9d26")),v=r("ba87"),m=r("b64a"),f=r("3ccf"),p=r("2b0e"),g=p["a"].extend({name:"rippleable",directives:{Ripple:f["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),e.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",e)):null},onChange:function(){}}}),b=r("6a18"),x=r("c37a"),w=r("80d2"),y=p["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:w["e"]}}}),A={name:"selectable",extends:x["a"],mixins:[g,y],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(e){return{lazyValue:e.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,r=this.internalValue;return this.isMultiple?!!Array.isArray(r)&&r.some(function(r){return e.valueComparator(r,t)}):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,r):Boolean(r):this.valueComparator(r,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(e){this.lazyValue=e}},methods:{genLabel:function(){if(!this.hasLabel)return null;var e=x["a"].methods.genLabel.call(this);return e.data.on={click:this.onChange},e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var e=this;if(!this.isDisabled){var t=this.value,r=this.internalValue;if(this.isMultiple){Array.isArray(r)||(r=[]);var i=r.length;r=r.filter(function(r){return!e.valueComparator(r,t)}),r.length===i&&r.push(t)}else r=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(r,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(r,t)?null:t:!r;this.validate(!0,r),this.internalValue=r}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}},C=r("94ab"),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e};function $(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var S={name:"v-radio",mixins:[m["a"],g,Object(C["a"])("radio","v-radio","v-radio-group"),b["a"]],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var e,t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=A.methods.genInput).call.apply(e,[this].concat($(r)))},genLabel:function(){return this.$createElement(v["a"],{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||!1,dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",k({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(h["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(){this.isFocused=!0},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(e){return e("div",this.computedData,[this.genRadio(),this.genLabel()])}},E=(r("94a7"),r("60d0"),{name:"v-radio-group",extends:x["a"],mixins:[y,Object(C["b"])("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},x["a"].methods.genDefaultSlot.call(this))},onRadioChange:function(e){this.disabled||(this.hasInput=!0,this.internalValue=e,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(e){e.relatedTarget&&e.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",e))},register:function(e){e.isActive=this.valueComparator(this.internalValue,e.value),e.$on("change",this.onRadioChange),e.$on("blur",this.onRadioBlur),this.radios.push(e)},setErrorState:function(e){for(var t=this.radios.length;--t>=0;)this.radios[t].parentError=e},setActiveRadio:function(){for(var e=this.radios.length;--e>=0;){var t=this.radios[e];t.isActive=this.valueComparator(this.internalValue,t.value)}},unregister:function(e){e.$off("change",this.onRadioChange),e.$off("blur",this.onRadioBlur);var t=this.radios.findIndex(function(t){return t===e});t>-1&&this.radios.splice(t,1)}}}),V=r("2677"),_=Object(l["a"])(o,i,a,!1,null,null,null);_.options.__file="Form.vue";t["a"]=_.exports;c()(_,{VBtn:d["a"],VRadio:S,VRadioGroup:E,VTextField:V["a"]})}}]);
//# sourceMappingURL=chunk-c033c508.61f4aa6f.js.map