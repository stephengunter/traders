(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13c8af60"],{"0798":function(e,s,t){"use strict";t("a57f");var r=t("9d26"),i=t("b64a"),o=t("98a1"),n=t("00ab"),a=t("58df");s["a"]=Object(a["a"])(i["a"],o["a"],n["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(r["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var e=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){e.isActive=!1}}},[this.$createElement(r["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(e){var s=[this.genIcon(),e("div",this.$slots.default),this.genDismissible()],t=this.outline?this.setTextColor:this.setBackgroundColor,r=e("div",t(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),s);return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r}})},"93aa":function(e,s,t){"use strict";var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-alert",{attrs:{value:e.hasErrors,color:"error",outline:""}},[e.hasErrors?t("ul",e._l(e.errorList.errors,function(s,r){return t("li",{key:r,domProps:{textContent:e._s(s[0])}})}),0):e._e()])},i=[],o=t("be94"),n=(t("cadf"),t("551c"),t("097d"),t("2f62")),a={name:"ErrorList",computed:Object(o["a"])({},Object(n["c"])({errorList:function(e){return e.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},c=a,l=t("2877"),u=t("6544"),d=t.n(u),m=t("0798"),h=Object(l["a"])(c,r,i,!1,null,null,null);h.options.__file="ErrorList.vue";s["a"]=h.exports;d()(h,{VAlert:m["a"]})},a57f:function(e,s,t){},d5fb:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container"},[e.result.success?t("div",[t("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[t("span",{staticClass:"cn"},[e._v("\n            "+e._s(e.result.msg)+"\n         ")])])],1):e._e(),e.model?t("div",{directives:[{name:"show",rawName:"v-show",value:!e.result.success,expression:"!result.success"}]},[t("h1",{staticClass:"cn"},[e._v(e._s(e.title))]),t("ErrorList"),t("form",{on:{submit:function(s){return s.preventDefault(),e.onSubmit(s)}}},[e.hasOldPassword?t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("oldPassword"),label:"舊密碼","data-vv-name":"oldPassword",required:""},model:{value:e.model.oldPassword,callback:function(s){e.$set(e.model,"oldPassword",s)},expression:"model.oldPassword"}}):e._e(),t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":e.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:e.model.password,callback:function(s){e.$set(e.model,"password",s)},expression:"model.password"}}),t("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":e.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:e.model.confirmPassword,callback:function(s){e.$set(e.model,"confirmPassword",s)},expression:"model.confirmPassword"}}),t("v-btn",{staticClass:"cn",attrs:{type:"submit",color:"success"},on:{click:function(s){return s.preventDefault(),e.onSubmit(s)}}},[e._v("確認")])],1)],1):e._e()])},i=[],o=(t("cadf"),t("551c"),t("097d"),t("f721")),n=t("c41f"),a=t("93aa"),c={name:"RwvChangePassword",components:{ErrorList:a["a"]},data:function(){return{model:null,result:{success:!1,msg:""}}},computed:{hasOldPassword:function(){return!!this.model&&this.model.hasOwnProperty("oldPassword")},title:function(){return this.hasOldPassword?"變更密碼":"設定密碼"},action:function(){return this.hasOldPassword?n["a"]:n["s"]}},beforeMount:function(){this.init()},methods:{init:function(){var e=this;this.$store.commit(o["a"]),this.$store.dispatch(n["j"]).then(function(s){e.model=s}).catch(function(e){Bus.$emit("errors")})},onSubmit:function(){var e=this;this.$validator.validate().then(function(s){s&&e.submit()})},onSuccess:function(){this.result={success:!0,msg:this.hasOldPassword?"密碼變更成功":"密碼設定成功"}},submit:function(){var e=this;this.$store.commit(o["a"]),this.$store.dispatch(this.action,this.model).then(function(){e.onSuccess()}).catch(function(s){s?e.$store.commit(o["f"],s):Bus.$emit("errors")})}}},l=c,u=t("2877"),d=t("6544"),m=t.n(d),h=t("0798"),f=t("8336"),v=t("2677"),p=Object(u["a"])(l,r,i,!1,null,null,null);p.options.__file="ChangePassword.vue";s["default"]=p.exports;m()(p,{VAlert:h["a"],VBtn:f["a"],VTextField:v["a"]})}}]);
//# sourceMappingURL=chunk-13c8af60.6e3334f8.js.map