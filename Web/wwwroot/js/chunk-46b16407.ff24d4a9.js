(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46b16407"],{"0798":function(t,e,i){"use strict";i("a57f");var s=i("9d26"),n=i("b64a"),r=i("98a1"),o=i("00ab"),a=i("58df");e["a"]=Object(a["a"])(n["a"],r["a"],o["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(s["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(s["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,s=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s}})},a57f:function(t,e,i){},c5fa:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ok?i("div",{staticClass:"container"},[i("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[i("span",{staticClass:"cn"},[t._v("\n      已經Email一封忘記密碼確認信給您.  請查看您的Email來啟動密碼重設程序.\n      ")])])],1):i("div",{staticClass:"container"},[i("h1",{staticClass:"cn"},[t._v("忘記密碼")]),i("v-alert",{attrs:{value:t.Errors.any(),color:"error",outline:""}},[i("ErrorList",{attrs:{model:t.Errors}})],1),i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":t.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-btn",{staticClass:"cn",attrs:{color:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("確認")])],1)],1)},n=[],r=i("be94"),o=i("2f62"),a=i("c41f"),c=i("df21"),l={name:"RwvForgotPassword",components:{ErrorList:c["a"]},data:function(){return{email:"",ok:!1}},computed:Object(r["a"])({},Object(o["c"])({Errors:function(t){return t.auth.errors}})),methods:{onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.submit()})},submit:function(){var t=this;this.$store.dispatch(a["f"],{email:this.email}).then(function(){t.ok=!0})}}},u=l,m=i("2877"),d=i("6544"),f=i.n(d),v=i("0798"),h=i("8336"),p=i("2677"),b=Object(m["a"])(u,s,n,!1,null,null,null);b.options.__file="ForgotPassword.vue";e["default"]=b.exports;f()(b,{VAlert:v["a"],VBtn:h["a"],VTextField:p["a"]})},df21:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.model?i("ul",t._l(t.model.errors,function(e,s){return i("li",{key:s,domProps:{textContent:t._s(e[0])}})}),0):t._e()},n=[],r={name:"ErrorList",props:{model:{type:Object,default:null}}},o=r,a=i("2877"),c=Object(a["a"])(o,s,n,!1,null,null,null);c.options.__file="Errors.vue";e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-46b16407.ff24d4a9.js.map