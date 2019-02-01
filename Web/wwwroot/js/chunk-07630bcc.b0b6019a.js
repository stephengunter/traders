(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07630bcc"],{"0798":function(t,e,i){"use strict";i("a57f");var s=i("9d26"),n=i("b64a"),a=i("98a1"),r=i("00ab"),o=i("58df");e["a"]=Object(o["a"])(n["a"],a["a"],r["a"]).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(s["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(s["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,s=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[s]):s}})},"23bf":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["default"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],width:[Number,String]}})},"253d":function(t,e,i){},"3a2f":function(t,e,i){"use strict";i("60e8");var s=i("b64a"),n=i("163b"),a=i("c69d"),r=i("30d4"),o=i("b8d7"),c=i("98a1"),l=i("80d2");function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e["a"]={name:"v-tooltip",mixins:[s["a"],n["a"],a["a"],r["a"],o["a"],c["a"]],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,n=0;return this.top||this.bottom||s?n=e.left+e.width/2-i.width/2:(this.left||this.right)&&(n=e.left+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n)+"px"},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=0;return this.top||this.bottom?s=e.top+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=e.top+e.height/2-i.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":void 0},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(l["b"])(this.maxWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},mounted:function(){this.value&&this.callActivate()},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)}},render:function(t){var e,i=this,s=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(e={},u(e,this.contentClass,!0),u(e,"menuable__content__active",this.isActive),e),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[s]),t("span",{on:this.disabled?{}:{mouseenter:function(){i.runDelay("open")},mouseleave:function(){i.runDelay("close")}},ref:"activator"},this.$slots.activator)])}}},"4c34":function(t,e,i){},"4c94":function(t,e,i){},5368:function(t,e,i){"use strict";var s=i("c37a"),n=i("ad54"),a=i("5e28");e["a"]={name:"selectable",extends:s["a"],mixins:[n["a"],a["a"]],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some(function(i){return t.valueComparator(i,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var t=s["a"].methods.genLabel.call(this);return t.data.on={click:this.onChange},t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter(function(i){return!t.valueComparator(i,e)}),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}},"5e28":function(t,e,i){"use strict";var s=i("2b0e"),n=i("80d2");e["a"]=s["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["g"]}}})},"60e8":function(t,e,i){},"93aa":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-alert",{attrs:{value:t.hasErrors,color:"error",outline:""}},[t.hasErrors?i("ul",t._l(t.errorList.errors,function(e,s){return i("li",{key:s,domProps:{textContent:t._s(e[0])}})}),0):t._e()])},n=[],a=i("be94"),r=(i("cadf"),i("551c"),i("097d"),i("2f62")),o={name:"ErrorList",computed:Object(a["a"])({},Object(r["c"])({errorList:function(t){return t.app.errorList}}),{hasErrors:function(){return!!this.errorList&&this.errorList.any()}})},c=o,l=i("2877"),u=i("6544"),h=i.n(u),d=i("0798"),m=Object(l["a"])(c,s,n,!1,null,null,null);m.options.__file="ErrorList.vue";e["a"]=m.exports;h()(m,{VAlert:d["a"]})},"94a7":function(t,e,i){},"99d9":function(t,e,i){"use strict";var s=i("80d2"),n=i("b0af"),a=i("adda"),r=i("d9bd"),o=a["a"].extend({name:"v-card-media",mounted:function(){Object(r["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),c=i("12b2");i.d(e,"a",function(){return l}),i.d(e,"b",function(){return u});var l=Object(s["e"])("v-card__actions"),u=Object(s["e"])("v-card__text");n["a"],c["a"]},a57f:function(t,e,i){},ac7c:function(t,e,i){"use strict";i("94a7");var s=i("9d26"),n=i("5368"),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]={name:"v-checkbox",mixins:[n["a"]],props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(t){return{inputIndeterminate:t.indeterminate}},computed:{classes:function(){return{"v-input--selection-controls":!0,"v-input--checkbox":!0}},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon}},watch:{indeterminate:function(t){this.inputIndeterminate=t}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",a({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(s["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}},ad54:function(t,e,i){"use strict";var s=i("3ccf"),n=i("2b0e");e["a"]=n["default"].extend({name:"rippleable",directives:{Ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bf"),n=i("58df"),a=i("80d2"),r=Object(n["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:{height:Object(a["b"])(this.height),maxHeight:Object(a["b"])(this.maxHeight),maxWidth:Object(a["b"])(this.maxWidth),width:Object(a["b"])(this.width)},on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=r,c=i("d9bd");e["a"]=o.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(c["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,a=t.naturalWidth;n||a?e.calculatedAspectRatio=a/n:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b0af:function(t,e,i){"use strict";i("4c94");var s=i("b64a"),n=i("23bf"),a=i("0d01"),r=i("6a18"),o=i("80d2"),c=i("58df"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(c["a"])(s["a"],n["a"],a["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean,tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return l({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--raised":this.raised,"v-card--tile":this.tile},this.themeClasses)},styles:function(){var t={height:Object(o["b"])(this.height)};return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),this.height&&(t.height=Object(o["b"])(this.height)),this.maxHeight&&(t.maxHeight=Object(o["b"])(this.maxHeight)),this.maxWidth&&(t.maxWidth=Object(o["b"])(this.maxWidth)),this.width&&(t.width=Object(o["b"])(this.width)),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,s=e.data;return s.style=this.styles,t(i,this.setBackgroundColor(this.color,s),this.$slots.default)}})},b0e6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.editting,callback:function(e){t.editting=e},expression:"editting"}},[t.editting?i("strategy-edit",{attrs:{model:t.model},on:{submit:t.submit,cancel:t.cancelEdit}}):t._e()],1),i("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.edit(e)}}},[t._v("Edit")])],1)},n=[],a=(i("cadf"),i("551c"),i("097d"),i("c41f")),r=i("f721"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"cn",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("v-card",[i("v-card-title",[i("h1",{staticClass:"cn"},[t._v(" "+t._s(t.title)+" ")])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{label:"策略名稱","error-messages":t.errors.collect("name"),name:"name",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1)],1),i("v-layout",[i("v-list",[i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[t._v("藍籌股指標")])],1),i("v-list-tile-action",[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticStyle:{"margin-left":"3rem"},attrs:{label:"策略名稱","error-messages":t.errors.collect("name"),name:"name",required:""},model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),i("v-list-tile-avatar",[i("v-tooltip",{attrs:{top:""}},[i("v-btn",{attrs:{slot:"activator",small:"",flat:"",icon:"",color:"error"},slot:"activator"},[i("v-icon",[t._v("mdi-delete-circle")])],1),i("span",{staticClass:"cn"},[t._v("捨棄這個指標")])],1)],1)],1)],1)],1),i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],attrs:{label:"停損(點)","error-messages":t.errors.collect("stpl"),name:"stpl","data-vv-as":"停損",required:""},model:{value:t.model.stpl,callback:function(e){t.$set(t.model,"stpl",e)},expression:"model.stpl"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"numeric",expression:"'numeric'"}],attrs:{label:"停利(點)","error-messages":t.errors.collect("stpw"),name:"stpw","data-vv-as":"停利",required:""},model:{value:t.model.stpw,callback:function(e){t.$set(t.model,"stpw",e)},expression:"model.stpw"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[i("v-checkbox",{attrs:{label:"我的首選"},model:{value:t.model.isDefault,callback:function(e){t.$set(t.model,"isDefault",e)},expression:"model.isDefault"}})],1)],1),i("ErrorList")],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}},[t._v("Cancel")]),i("v-btn",{attrs:{type:"submit",color:"primary",flat:""},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Save")])],1)],1)],1)},c=[],l=(i("2f62"),i("93aa")),u={name:"StrategyEdit",components:{ErrorList:l["a"]},props:{model:{type:Object,default:null}},data:function(){return{notifications:!1,sound:!1,video:!1,invites:!1}},computed:{title:function(){return this.model&&this.model.id?"策略設定":"新增策略"}},beforeMount:function(){this.model.stpl||(this.model.stpl=""),this.model.stpw||(this.model.stpw="")},methods:{cancel:function(){this.$emit("cancel")},onSubmit:function(){var t=this;this.$validator.validate().then(function(e){e&&t.$emit("submit")})}}},h=u,d=i("2877"),m=i("6544"),f=i.n(m),v=i("8336"),p=i("b0af"),g=i("99d9"),b=i("12b2"),y=i("ac7c"),x=i("a523"),S=i("0e8f"),_=i("132d"),C=i("a722"),w=i("8860"),$=i("ba95"),k=i("40fe"),V=i("c954"),O=i("5d23"),I=i("9910"),L=i("2677"),j=i("3a2f"),A=Object(d["a"])(h,o,c,!1,null,null,null);A.options.__file="Edit.vue";var E=A.exports;f()(A,{VBtn:v["a"],VCard:p["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:b["a"],VCheckbox:y["a"],VContainer:x["a"],VFlex:S["a"],VIcon:_["a"],VLayout:C["a"],VList:w["a"],VListTile:$["a"],VListTileAction:k["a"],VListTileAvatar:V["a"],VListTileContent:O["a"],VListTileTitle:O["b"],VSpacer:I["a"],VTextField:L["a"],VTooltip:j["a"]});var z={name:"TestView",components:{"strategy-edit":E},data:function(){return{editting:!1,model:null}},methods:{edit:function(){var t=this;this.$store.commit(r["a"]),this.$store.dispatch(a["e"],1).then(function(e){t.model=e,t.editting=!0}).catch(function(t){Bus.$emit("errors")})},submit:function(){},cancelEdit:function(){this.model=null,this.editting=!1}}},B=z,T=i("169a"),D=Object(d["a"])(B,s,n,!1,null,null,null);D.options.__file="Test.vue";e["default"]=D.exports;f()(D,{VDialog:T["a"]})}}]);
//# sourceMappingURL=chunk-07630bcc.b0b6019a.js.map