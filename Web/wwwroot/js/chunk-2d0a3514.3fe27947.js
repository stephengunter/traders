(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3514"],{"0251":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("h1",{staticClass:"cn"},[t._v("註冊 - 建立您的會員資料")]),e("v-alert",{attrs:{value:t.Errors.any(),color:"error",outline:""}},[e("ErrorList",{attrs:{model:t.Errors}})],1),e("registerForm",{on:{submit:t.onSubmit}})],1)},o=[],s=e("be94"),i=e("2f62"),a=e("c41f"),c=e("df21"),u=e("802f"),l={name:"RwvRegister",components:{ErrorList:c["a"],RegisterForm:u["a"]},data:function(){return{}},computed:Object(s["a"])({},Object(i["c"])({Errors:function(t){return t.auth.errors}})),methods:{onSubmit:function(t){var r=this;this.$store.dispatch(a["k"],t).then(function(){r.$store.dispatch(a["g"],{email:t.email,password:t.password}).then(function(){return r.redirect()})})},redirect:function(){this.$router.push({name:"home"})}}},d=l,f=e("2877"),h=e("6544"),m=e.n(h),p=e("0798"),b=Object(f["a"])(d,n,o,!1,null,null,null);b.options.__file="Register.vue";r["default"]=b.exports;m()(b,{VAlert:p["a"]})}}]);
//# sourceMappingURL=chunk-2d0a3514.3fe27947.js.map