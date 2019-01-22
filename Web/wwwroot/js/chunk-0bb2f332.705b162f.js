(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bb2f332"],{"0798":function(e,t,s){"use strict";s("a57f");var r=s("9d26"),i=s("b64a"),n=s("98a1"),o=s("00ab"),a=s("58df");t["a"]=Object(a["a"])(i["a"],n["a"],o["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(r["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var e=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){e.isActive=!1}}},[this.$createElement(r["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(e){var t=[this.genIcon(),e("div",this.$slots.default),this.genDismissible()],s=this.outline?this.setTextColor:this.setBackgroundColor,r=e("div",s(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),t);return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r}})},a57f:function(e,t,s){},bf75:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.ok?s("div",{staticClass:"container"},[s("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[s("span",{staticClass:"cn"},[e._v("\n      您的密碼已重設.\n      ")])])],1):s("div",{staticClass:"container"},[s("h1",{staticClass:"cn"},[e._v("重設密碼")]),s("v-alert",{attrs:{value:e.Errors.any(),color:"error",outline:""}},[s("ErrorList",{attrs:{model:e.Errors}})],1),s("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),s("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("確認")])],1)],1)},i=[],n=s("be94"),o=s("2f62"),a=s("c41f"),c=s("df21"),l={name:"RwvResetPassword",components:{ErrorList:c["a"]},data:function(){return{user:{email:"",password:"",confirmPassword:"",code:""},ok:!1}},computed:Object(n["a"])({},Object(o["c"])({Errors:function(e){return e.auth.errors}})),beforeMount:function(){this.$route.query.code&&(this.user.code=this.$route.query.code)},methods:{onSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&e.submit()})},submit:function(){var e=this;this.$store.dispatch(a["n"],this.user).then(function(){e.ok=!0})}}},u=l,d=s("2877"),m=s("6544"),v=s.n(m),f=s("0798"),p=s("8336"),h=s("2677"),w=Object(d["a"])(u,r,i,!1,null,null,null);w.options.__file="ResetPassword.vue";t["default"]=w.exports;v()(w,{VAlert:f["a"],VBtn:p["a"],VTextField:h["a"]})},df21:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.model?s("ul",e._l(e.model.errors,function(t,r){return s("li",{key:r,domProps:{textContent:e._s(t[0])}})}),0):e._e()},i=[],n={name:"ErrorList",props:{model:{type:Object,default:null}}},o=n,a=s("2877"),c=Object(a["a"])(o,r,i,!1,null,null,null);c.options.__file="Errors.vue";t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-0bb2f332.705b162f.js.map