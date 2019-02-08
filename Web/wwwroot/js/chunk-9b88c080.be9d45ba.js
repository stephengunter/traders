(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b88c080"],{"0798":function(t,e,i){"use strict";i("a57f");var s=i("9d26"),r=i("b64a"),n=i("98a1"),o=i("00ab"),a=i("58df");e["a"]=Object(a["a"])(r["a"],n["a"],o["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(s["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(s["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,s=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s}})},"93aa":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?i("ul",t._l(t.errorList.errors,function(e,s){return i("li",{key:s,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},r=[],n=i("be94"),o=(i("cadf"),i("551c"),i("097d"),i("2f62")),a={name:"ErrorList",computed:Object(n["a"])({},Object(o["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},c=a,l=i("2877"),u=i("6544"),m=i.n(u),h=i("0798"),f=Object(l["a"])(c,s,r,!1,null,null,null);f.options.__file="ErrorList.vue";e["a"]=f.exports;m()(f,{VAlert:h["a"]})},a57f:function(t,e,i){},c5fa:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ok?i("div",{staticClass:"container"},[i("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[i("span",{staticClass:"cn"},[t._v("\n      已經Email一封忘記密碼確認信給您.  請查看您的Email來啟動密碼重設程序.\n      ")])])],1):i("div",{staticClass:"container"},[i("h1",{staticClass:"cn"},[t._v("忘記密碼")]),i("ErrorList"),i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":t.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-btn",{staticClass:"cn",attrs:{type:"submit",color:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("確認")])],1)],1)},r=[],n=(i("2f62"),i("f721")),o=i("c41f"),a=i("93aa"),c={name:"RwvForgotPassword",components:{ErrorList:a["a"]},data:function(){return{email:"",ok:!1}},methods:{onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.submit()})},submit:function(){var t=this;this.$store.commit(n["b"]),this.$store.dispatch(o["i"],{email:this.email}).then(function(){t.ok=!0}).catch(function(e){e?t.$store.commit(n["g"],e):Bus.$emit("errors")})}}},l=c,u=i("2877"),m=i("6544"),h=i.n(m),f=i("0798"),v=i("8336"),d=i("2677"),p=Object(u["a"])(l,s,r,!1,null,null,null);p.options.__file="ForgotPassword.vue";e["default"]=p.exports;h()(p,{VAlert:f["a"],VBtn:v["a"],VTextField:d["a"]})}}]);
//# sourceMappingURL=chunk-9b88c080.be9d45ba.js.map