(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520a6f1e"],{"00ab":function(t,e,r){"use strict";var s=r("2b0e");e["a"]=s["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},"0798":function(t,e,r){"use strict";r("a57f");var s=r("9d26"),i=r("b64a"),n=r("98a1"),a=r("00ab"),o=r("58df");e["a"]=Object(o["a"])(i["a"],n["a"],a["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(s["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(s["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],r=this.outline?this.setTextColor:this.setBackgroundColor,s=t("div",r(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s}})},2677:function(t,e,r){"use strict";r.d(e,"a",function(){return u});var s=r("8654"),i=r("a844"),n=r("7cf7"),a=r("ab6d"),o=r("d9bd"),u={functional:!0,$_wrapperFor:s["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var r=e.props,c=e.data,l=e.slots,d=e.parent;Object(a["a"])(c);var h=Object(n["a"])(l(),t);return r.textarea&&Object(o["d"])("<v-text-field textarea>","<v-textarea outline>",u,d),r.multiLine&&Object(o["d"])("<v-text-field multi-line>","<v-textarea>",u,d),r.textarea||r.multiLine?(c.attrs.outline=r.textarea,t(i["a"],c,h)):t(s["a"],c,h)}}},"7e63":function(t,e,r){},"93aa":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?r("ul",t._l(t.errorList.errors,function(e,s){return r("li",{key:s,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},i=[],n=r("be94"),a=r("2f62"),o={name:"ErrorList",computed:Object(n["a"])({},Object(a["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},u=o,c=r("2877"),l=r("6544"),d=r.n(l),h=r("0798"),f=Object(c["a"])(u,s,i,!1,null,null,null);f.options.__file="ErrorList.vue";e["a"]=f.exports;d()(f,{VAlert:h["a"]})},a57f:function(t,e,r){},a844:function(t,e,r){"use strict";r("7e63");var s=r("8654"),i=r("d9bd"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t};e["a"]={name:"v-textarea",extends:s["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return n({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||s["a"].computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(i["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,r=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(r,e)+"px"}},genInput:function(){var t=s["a"].methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}},bf75:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.ok?r("div",{staticClass:"container"},[r("v-alert",{staticClass:"title",attrs:{value:!0,type:"success"}},[r("span",{staticClass:"cn"},[t._v("\n      您的密碼已重設.\n      ")])])],1):r("div",{staticClass:"container"},[r("h1",{staticClass:"cn"},[t._v("重設密碼")]),r("ErrorList"),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":t.errors.collect("email"),label:"Email","data-vv-name":"email",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:12",expression:"'required|min:6|max:12'"}],ref:"password",attrs:{type:"password",counter:12,"error-messages":t.errors.collect("password"),label:"密碼","data-vv-name":"password",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],attrs:{type:"password",counter:12,"error-messages":t.errors.collect("confirmPassword"),label:"確認密碼","data-vv-name":"confirmPassword",required:""},model:{value:t.user.confirmPassword,callback:function(e){t.$set(t.user,"confirmPassword",e)},expression:"user.confirmPassword"}}),r("v-btn",{staticClass:"cn",attrs:{type:"submit",color:"success"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("確認")])],1)],1)},i=[],n=(r("2f62"),r("c41f")),a=r("f721"),o=r("93aa"),u={name:"RwvResetPassword",components:{ErrorList:o["a"]},data:function(){return{user:{email:"",password:"",confirmPassword:"",code:""},ok:!1}},beforeMount:function(){this.$route.query.code&&(this.user.code=this.$route.query.code)},methods:{onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.submit()})},submit:function(){var t=this;this.$store.commit(a["b"]),this.$store.dispatch(n["w"],this.user).then(function(){t.ok=!0}).catch(function(e){e?t.$store.commit(a["g"],e):Bus.$emit("errors")})}}},c=u,l=r("2877"),d=r("6544"),h=r.n(d),f=r("0798"),m=r("8336"),p=r("2677"),v=Object(l["a"])(c,s,i,!1,null,null,null);v.options.__file="ResetPassword.vue";e["default"]=v.exports;h()(v,{VAlert:f["a"],VBtn:m["a"],VTextField:p["a"]})}}]);
//# sourceMappingURL=chunk-520a6f1e.9eb569a5.js.map