(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20edf5"],{b0e6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.editting,callback:function(e){t.editting=e},expression:"editting"}},[t.editting?i("strategy-edit",{attrs:{strategy:t.model.strategy,selected_indicators:t.model.selectedIndicators,indicators:t.model.indicators},on:{submit:t.submit,cancel:t.cancelEdit,remove:t.remove}}):t._e()],1),i("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.editStrategy(3)}}},[t._v("Edit")])],1)},n=[],o=(i("ac6a"),i("cadf"),i("551c"),i("097d"),i("c41f")),r=i("f721"),c=i("d04c"),a={name:"TestView",components:{"strategy-edit":c["a"]},data:function(){return{editting:!1,model:null}},methods:{createStrategy:function(){var t=this;this.$store.commit(r["a"]),this.$store.dispatch(o["d"]).then(function(e){t.model=e,t.editting=!0}).catch(function(t){Bus.$emit("errors")})},editStrategy:function(t){var e=this;this.$store.commit(r["a"]),this.$store.dispatch(o["f"],t).then(function(t){e.model=t,e.editting=!0}).catch(function(t){Bus.$emit("errors")})},submit:function(t){var e=this,i={strategy:this.model.strategy,selectedIndicators:t};i.strategy.indicatorSettings.forEach(function(t,e){t.order=e});var s=o["u"];i.strategy.id&&(s=o["v"]),this.$store.commit(r["a"]),this.$store.dispatch(s,i).then(function(t){e.onSuccess()}).catch(function(t){t?e.resolveError(t):Bus.$emit("errors")})},resolveError:function(t){t?this.$store.commit(r["f"],t):Bus.$emit("errors")},onSuccess:function(){Bus.$emit("success"),this.model=null,this.editting=!1},cancelEdit:function(){this.model=null,this.editting=!1},remove:function(){var t=this,e=this.model.strategy.id;this.$store.commit(r["a"]),this.$store.dispatch(o["e"],e).then(function(){t.model=null,t.editting=!1}).catch(function(e){e?t.resolveError(e):Bus.$emit("errors")})}}},d=a,u=i("2877"),l=i("6544"),m=i.n(l),h=i("169a"),f=Object(u["a"])(d,s,n,!1,null,null,null);f.options.__file="Test.vue";e["default"]=f.exports;m()(f,{VDialog:h["a"]})}}]);
//# sourceMappingURL=chunk-2d20edf5.009b8717.js.map