(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-102c9062"],{"00ab":function(t,e,s){"use strict";var i=s("2b0e");e["a"]=i["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(t,e,s){"use strict";s("a57f");var i=s("9d26"),n=s("b64a"),r=s("98a1"),o=s("00ab"),a=s("58df");e["a"]=Object(a["a"])(n["a"],r["a"],o["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(i["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(i["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],s=this.outline?this.setTextColor:this.setBackgroundColor,i=t("div",s(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i}})},"5b6e":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ready?s("div",{staticClass:"container"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-alert",{staticClass:"title cn",attrs:{value:!0,type:t.alert.type}},[s("span",{staticClass:"cn"},[t._v("\n            "+t._s(t.alert.msg)+"         \n            ")]),"success"===t.alert.type?s("span",{staticClass:"cn"},[s("em",{attrs:{id:"seconds"}},[t._v(t._s(t.seconds))]),t._v(" 秒後重新導向登入頁面\n            ")]):t._e()])],1)],1)],1):t._e()},n=[],r=s("c41f"),o={name:"RwvConfirmEmail",data:function(){return{ready:!1,alert:{type:"error",msg:"Email確認失敗."},user:{id:"",code:""},seconds:3}},beforeMount:function(){this.$route.query.user&&(this.user.id=this.$route.query.user),this.$route.query.code&&(this.user.code=this.$route.query.code),this.user.id&&this.user.code&&this.submit()},methods:{submit:function(){var t=this;this.$store.dispatch(r["c"],this.user).then(function(e){e?(t.alert.type="success",t.alert.msg="Email確認成功.",t.ready=!0,t.onSuccess()):t.ready=!0})},onSuccess:function(){var t=this;window.setInterval(function(){t.seconds>1?t.seconds--:t.$router.push({name:"login"})},1e3)}}},a=o,c=s("2877"),u=s("6544"),l=s.n(u),h=s("0798"),d=s("0e8f"),f=s("a722"),m=Object(c["a"])(a,i,n,!1,null,null,null);m.options.__file="ConfirmEmail.vue";e["default"]=m.exports;l()(m,{VAlert:h["a"],VFlex:d["a"],VLayout:f["a"]})},a57f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-102c9062.43ec20db.js.map