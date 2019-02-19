(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bae8234"],{"00ab":function(t,e,s){"use strict";var r=s("2b0e");e["a"]=r["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(t,e,s){"use strict";s("a57f");var r=s("9d26"),i=s("b64a"),n=s("98a1"),o=s("00ab"),a=s("58df");e["a"]=Object(a["a"])(i["a"],n["a"],o["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(r["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(r["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],s=this.outline?this.setTextColor:this.setBackgroundColor,r=t("div",s(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r}})},2677:function(t,e,s){"use strict";s.d(e,"a",function(){return c});var r=s("8654"),i=s("a844"),n=s("7cf7"),o=s("ab6d"),a=s("d9bd"),c={functional:!0,$_wrapperFor:r["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var s=e.props,u=e.data,l=e.slots,d=e.parent;Object(o["a"])(u);var h=Object(n["a"])(l(),t);return s.textarea&&Object(a["d"])("<v-text-field textarea>","<v-textarea outline>",c,d),s.multiLine&&Object(a["d"])("<v-text-field multi-line>","<v-textarea>",c,d),s.textarea||s.multiLine?(u.attrs.outline=s.textarea,t(i["a"],u,h)):t(r["a"],u,h)}}},"7e63":function(t,e,s){},"93aa":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?s("ul",t._l(t.errorList.errors,function(e,r){return s("li",{key:r,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},i=[],n=s("be94"),o=s("2f62"),a={name:"ErrorList",computed:Object(n["a"])({},Object(o["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},c=a,u=s("2877"),l=s("6544"),d=s.n(l),h=s("0798"),m=Object(u["a"])(c,r,i,!1,null,null,null);m.options.__file="ErrorList.vue";e["a"]=m.exports;d()(m,{VAlert:h["a"]})},a57f:function(t,e,s){},a844:function(t,e,s){"use strict";s("7e63");var r=s("8654"),i=s("d9bd"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t};e["a"]={name:"v-textarea",extends:r["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return n({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||r["a"].computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(i["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=r["a"].methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}},d5fb:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.result.success?s("div",[s("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[s("span",{staticClass:"cn"},[t._v("\n            "+t._s(t.result.msg)+"\n         ")])])],1):t._e(),t.model?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.result.success,expression:"!result.success"}]},[s("h1",{staticClass:"cn"},[t._v(t._s(t.title))]),s("ErrorList"),s("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.hasOldPassword?s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"password",counter:12,"error-messages":t.errors.collect("oldPassword"),label:"舊密碼","data-vv-name":"oldPassword",required:""},model:{value:t.model.oldPassword,callback:function(e){t.$set(t.model,"oldPassword",e)},expression:"model.oldPassword"}}):t._e(),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":t.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}}),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":t.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:t.model.confirmPassword,callback:function(e){t.$set(t.model,"confirmPassword",e)},expression:"model.confirmPassword"}}),s("v-btn",{staticClass:"cn",attrs:{type:"submit",color:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("確認")])],1)],1):t._e()])},i=[],n=s("f721"),o=s("c41f"),a=s("93aa"),c={name:"RwvChangePassword",components:{ErrorList:a["a"]},data:function(){return{model:null,result:{success:!1,msg:""}}},computed:{hasOldPassword:function(){return!!this.model&&this.model.hasOwnProperty("oldPassword")},title:function(){return this.hasOldPassword?"變更密碼":"設定密碼"},action:function(){return this.hasOldPassword?o["a"]:o["x"]}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit(n["b"]),this.$store.dispatch(o["o"]).then(function(e){t.model=e}).catch(function(t){Bus.$emit("errors")})},onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.submit()})},onSuccess:function(){this.result={success:!0,msg:this.hasOldPassword?"密碼變更成功":"密碼設定成功"}},submit:function(){var t=this;this.$store.commit(n["b"]),this.$store.dispatch(this.action,this.model).then(function(){t.onSuccess()}).catch(function(e){e?t.$store.commit(n["g"],e):Bus.$emit("errors")})}}},u=c,l=s("2877"),d=s("6544"),h=s.n(d),m=s("0798"),f=s("8336"),p=s("2677"),v=Object(l["a"])(u,r,i,!1,null,null,null);v.options.__file="ChangePassword.vue";e["default"]=v.exports;h()(v,{VAlert:m["a"],VBtn:f["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-6bae8234.4d49dac0.js.map