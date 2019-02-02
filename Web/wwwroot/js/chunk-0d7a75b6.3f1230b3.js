(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d7a75b6"],{8457:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.result.emailUnConfirmed?n("register-un-confirmed",{attrs:{email:t.credentials.email}}):n("div",{staticClass:"container"},[t.register?n("div",[n("h1",{staticClass:"cn"},[t._v("註冊 - 建立您的會員資料")]),n("ErrorList"),n("RegisterForm",{attrs:{model:t.registerModel},on:{submit:t.onSubmitRegister}})],1):n("div",[n("h1",{staticClass:"cn"},[t._v("登入")]),n("ErrorList"),n("LoginForm",{on:{submit:t.onSubmit}}),n("v-layout",{staticClass:"mt-3 cn",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("FacebookLogin",{on:{success:t.onFBLoginSuccess,failed:t.oAuthLoginFailed}})],1),n("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[n("GoogleLogin",{on:{success:t.onGoogleLoginSuccess,failed:t.oAuthLoginFailed}})],1),n("v-flex",{staticClass:"mt-3",attrs:{xs12:""}},[n("a",{staticClass:"links v-breadcrumbs__item",attrs:{href:"#/forgot-password"}},[t._v("忘記密碼")]),n("a",{staticClass:"links ml-5 v-breadcrumbs__item",attrs:{href:"#/register"}},[t._v("註冊新帳號")])])],1)],1)])},i=[],o=(n("2f62"),n("f721")),r=n("c41f"),a=n("a49b"),c=n("93aa"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":t.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:t.credentials.email,callback:function(e){t.$set(t.credentials,"email",e)},expression:"credentials.email"}}),n("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:12",expression:"'required|max:12'"}],attrs:{type:"password",counter:12,"error-messages":t.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:t.credentials.password,callback:function(e){t.$set(t.credentials,"password",e)},expression:"credentials.password"}}),n("v-layout",{staticClass:"mt-1",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"cn",attrs:{type:"submit",color:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("登入")])],1)],1)],1)},u=[],m={name:"LoginForm",data:function(){return{credentials:{email:"",password:""}}},methods:{onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.$emit("submit",t.credentials)})}}},d=m,f=n("2877"),g=n("6544"),h=n.n(g),v=n("8336"),p=n("0e8f"),b=n("a722"),S=n("2677"),_=Object(f["a"])(d,l,u,!1,null,null,null);_.options.__file="Form.vue";var L=_.exports;h()(_,{VBtn:v["a"],VFlex:p["a"],VLayout:b["a"],VTextField:S["a"]});var $=n("3841"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"loginBtn loginBtn--facebook"},[n("fb-signin-button",{attrs:{params:t.fbSignInParams},on:{success:t.onSignInSuccess,error:t.onSignInError}},[t._v("\n   使用 facebook 登入\n   ")])],1)},x=[],F={name:"FacebookLogin",data:function(){return{fbSignInParams:{scope:"email",return_scopes:!0}}},created:function(){},methods:{onSignInSuccess:function(t){var e=t.authResponse.accessToken;this.$emit("success",e)},onSignInError:function(t){this.$emit("failed")}}},k=F,C=Object(f["a"])(k,w,x,!1,null,null,null);C.options.__file="Facebook.vue";var E=C.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"loginBtn loginBtn--google"},[n("g-signin-button",{attrs:{params:t.googleSignInParams},on:{success:t.onSignInSuccess,error:t.onSignInError}},[t._v("\n   使用 google 登入\n   ")])],1)},A=[],B={name:"GoogleLogin",data:function(){return{googleSignInParams:{client_id:"".concat(a["c"].client_id,".apps.googleusercontent.com")}}},methods:{onSignInSuccess:function(t){this.$emit("success",t.getAuthResponse().id_token)},onSignInError:function(t){this.$emit("failed")}}},R=B,U=Object(f["a"])(R,I,A,!1,null,null,null);U.options.__file="Google.vue";var y=U.exports,q=n("802f"),G={name:"RwvLogin",components:{ErrorList:c["a"],LoginForm:L,FacebookLogin:E,GoogleLogin:y,RegisterForm:q["a"],"register-un-confirmed":$["a"]},data:function(){return{credentials:null,returnUrl:"",register:!1,registerModel:null,result:{emailUnConfirmed:!1}}},beforeMount:function(){this.returnUrl=this.$route.query.returnUrl},methods:{onSubmit:function(t){var e=this;this.credentials=t,this.$store.commit(o["a"]),this.$store.dispatch(r["l"],t).then(function(){e.onSuccess()}).catch(function(t){t?e.resolveError(t):Bus.$emit("errors")})},resolveError:function(t){t.hasOwnProperty("email_confirm")?this.result.emailUnConfirmed=!0:this.$store.commit(o["f"],t)},onSuccess:function(){this.redirect()},redirect:function(){this.returnUrl?"admin"===this.returnUrl?window.location=a["a"]:this.$router.push({path:this.returnUrl}):this.$router.push({name:"home"})},oAuthLoginFailed:function(){Bus.$emit("errors",{msg:"登入失敗"})},oAuthLoginSuccess:function(t){t?this.initRegister(t):this.onSuccess()},onGoogleLoginSuccess:function(t){var e=this;this.$store.commit(o["a"]),this.$store.dispatch(r["i"],t).then(function(t){e.oAuthLoginSuccess(t)}).catch(function(t){e.oAuthLoginFailed()})},onFBLoginSuccess:function(t){var e=this;this.$store.commit(o["a"]),this.$store.dispatch(r["f"],t).then(function(t){e.oAuthLoginSuccess(t)}).catch(function(t){e.oAuthLoginFailed()})},initRegister:function(t){this.registerModel=t,this.register=!0},onSubmitRegister:function(t){var e=this;this.$store.commit(o["a"]),this.$store.dispatch(r["n"],t).then(function(){e.onSuccess()}).catch(function(t){e.oAuthLoginFailed()})}}},V=G,O=(n("8dd1"),Object(f["a"])(V,s,i,!1,null,"837143ba",null));O.options.__file="Login.vue";e["default"]=O.exports;h()(O,{VFlex:p["a"],VLayout:b["a"]})},"8dd1":function(t,e,n){"use strict";var s=n("d53a"),i=n.n(s);i.a},d53a:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0d7a75b6.3f1230b3.js.map