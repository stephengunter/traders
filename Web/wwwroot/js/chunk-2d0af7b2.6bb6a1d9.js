(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af7b2"],{"0f06":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return e.ok?s("div",{staticClass:"container"},[s("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[s("span",{staticClass:"cn"},[e._v("\n      您的密碼已重設.\n      ")])])],1):s("div",{staticClass:"container"},[s("h1",{staticClass:"cn"},[e._v("重設密碼")]),s("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[s("ErrorList",{attrs:{model:e.Errors}})],1),s("form",{on:{submit:function(r){return r.preventDefault(),e.onSubmit(r)}}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}}),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}}),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.user.confirmPassword,callback:function(r){e.$set(e.user,"confirmPassword",r)},expression:"user.confirmPassword"}}),s("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(r){return r.preventDefault(),e.onSubmit(r)}}},[e._v("確認")])],1)],1)},a=[],o=s("be94"),i=s("2f62"),n=s("bf31"),l=s("05b3"),u={name:"RwvResetPassword",components:{ErrorList:l["a"]},data:function(){return{user:{email:"",password:"",confirmPassword:"",code:""},ok:!1}},computed:Object(o["a"])({},Object(i["c"])({Errors:function(e){return e.auth.errors}})),beforeMount:function(){this.$route.query.code&&(this.user.code=this.$route.query.code)},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(r){r&&e.submit()})},submit:function(){var e=this;this.$store.dispatch(n["j"],this.user).then(function(){e.ok=!0})}}},c=u,d=s("2877"),m=s("6544"),v=s.n(m),f=s("0798"),p=s("8336"),w=s("2677"),b=Object(d["a"])(c,t,a,!1,null,null,null);b.options.__file="ResetPassword.vue";r["default"]=b.exports;v()(b,{VAlert:f["a"],VBtn:p["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-2d0af7b2.6bb6a1d9.js.map