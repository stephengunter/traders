webpackHotUpdate(7,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/trades/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ \"./src/client/components/trades/Item.vue\");\n/* harmony import */ var _Total__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Total */ \"./src/client/components/trades/Total.vue\");\n\n\n\n\n\n\nvar _name$components$comp;\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_name$components$comp = {\n  name: 'TradeList',\n  components: {\n    'trade-item': _Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    'trade-total': _Total__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  },\n  computed: Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__[\"mapState\"])({\n    trades: function trades(state) {\n      return state.chart.trades;\n    }\n  }), {\n    results: function results() {\n      if (!this.trades) {\n        return null;\n      }\n\n      var views = [];\n      var sum = 0;\n\n      for (var i = 0; i < this.trades.length; i++) {\n        if (i % 2 === 0) {\n          var inTrade = this.trades[i];\n          var outTrade = i === this.trades.length - 1 ? null : this.trades[i + 1];\n          if (outTrade) items.push(outTrade);\n          var item = {\n            val: inTrade.val,\n            inTrade: inTrade,\n            outTrade: outTrade,\n            result: ''\n          };\n\n          if (outTrade) {\n            if (inTrade.val > 0) {\n              item.result = outTrade.price - inTrade.price;\n            } else {\n              item.result = inTrade.price - outTrade.price;\n            }\n          }\n\n          if (item.result) {\n            sum += item.result;\n          }\n\n          views.push(item);\n        }\n      }\n\n      return {\n        views: views,\n        total: sum\n      };\n    }\n  }),\n  data: function data() {\n    return {};\n  }\n}, Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_name$components$comp, \"computed\", {\n  results: function results() {\n    if (!this.trades) {\n      return null;\n    }\n\n    var views = [];\n    var sum = 0;\n\n    for (var i = 0; i < this.trades.length; i++) {\n      if (i % 2 === 0) {\n        var inTrade = this.trades[i];\n        var outTrade = i === this.trades.length - 1 ? null : this.trades[i + 1];\n        if (outTrade) items.push(outTrade);\n        var item = {\n          val: inTrade.val,\n          inTrade: inTrade,\n          outTrade: outTrade,\n          result: ''\n        };\n\n        if (outTrade) {\n          if (inTrade.val > 0) {\n            item.result = outTrade.price - inTrade.price;\n          } else {\n            item.result = inTrade.price - outTrade.price;\n          }\n        }\n\n        if (item.result) {\n          sum += item.result;\n        }\n\n        views.push(item);\n      }\n    }\n\n    return {\n      views: views,\n      total: sum\n    };\n  }\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_name$components$comp, \"methods\", {}), _name$components$comp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdHJhZGVzL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9MaXN0LnZ1ZT85MTg1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgPHYtbGlzdCB2LWlmPVwicmVzdWx0c1wiIHR3by1saW5lPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCIodHJhZGUsIGluZGV4KSBpbiByZXN1bHRzLnZpZXdzXCI+XHJcbiAgICAgICAgIDx0cmFkZS1pdGVtIDptb2RlbD1cInRyYWRlXCIgOmluZGV4PVwiaW5kZXhcIiA6a2V5PVwiaW5kZXhcIiAvPlxyXG4gICAgICAgICA8di1kaXZpZGVyIHYtaWY9XCJpbmRleCArIDEgPCByZXN1bHRzLnZpZXdzLmxlbmd0aFwiIDprZXk9XCItMSAtIGluZGV4XCIvPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dHJhZGUtdG90YWwgdi1pZj1cInJlc3VsdHMudmlld3MubGVuZ3RoXCIgOnRvdGFsPVwicmVzdWx0cy50b3RhbFwiIC8+XHJcbiAgIDwvdi1saXN0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcclxuXHJcbmltcG9ydCBUcmFkZUl0ZW0gZnJvbSAnLi9JdGVtJztcclxuaW1wb3J0IFRyYWRlVG90YWwgZnJvbSAnLi9Ub3RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgIG5hbWU6ICdUcmFkZUxpc3QnLFxyXG4gICBjb21wb25lbnRzOiB7XHJcbiAgICAgICd0cmFkZS1pdGVtJyA6IFRyYWRlSXRlbSxcclxuICAgICAgJ3RyYWRlLXRvdGFsJyA6IFRyYWRlVG90YWxcclxuICAgfSxcclxuICAgY29tcHV0ZWQ6IHtcclxuICAgICAgLi4ubWFwU3RhdGUoe1xyXG4gICAgICAgICB0cmFkZXM6IHN0YXRlID0+IHN0YXRlLmNoYXJ0LnRyYWRlc1xyXG4gICAgICB9KSxcclxuICAgICAgcmVzdWx0cygpe1xyXG4gICAgICAgICBpZighdGhpcy50cmFkZXMpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgbGV0IHZpZXdzID0gW107XHJcbiAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGkgJSAyID09PSAwKXtcclxuICAgICAgICAgICAgICAgbGV0IGluVHJhZGUgPSB0aGlzLnRyYWRlc1tpXTtcclxuICAgICAgICAgICAgICAgbGV0IG91dFRyYWRlID0gKGkgPT09IHRoaXMudHJhZGVzLmxlbmd0aCAtIDEpID8gbnVsbCA6IHRoaXMudHJhZGVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgaWYob3V0VHJhZGUpIGl0ZW1zLnB1c2gob3V0VHJhZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbDogaW5UcmFkZS52YWwsXHJcbiAgICAgICAgICAgICAgICAgIGluVHJhZGU6IGluVHJhZGUsXHJcbiAgICAgICAgICAgICAgICAgIG91dFRyYWRlOiBvdXRUcmFkZSxcclxuICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnJ1xyXG4gICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgaWYob3V0VHJhZGUpe1xyXG4gICAgICAgICAgICAgICAgICBpZihpblRyYWRlLnZhbCA+IDAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZXN1bHQgPSBvdXRUcmFkZS5wcmljZSAtIGluVHJhZGUucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICBpdGVtLnJlc3VsdCA9IGluVHJhZGUucHJpY2UgLSBvdXRUcmFkZS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZihpdGVtLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICBzdW0gKz0gaXRlbS5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHZpZXdzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmlld3M6IHZpZXdzLFxyXG4gICAgICAgICAgICB0b3RhbDogc3VtXHJcbiAgICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgIH0sXHJcbiAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICBcclxuICAgICAgfVxyXG4gICB9LFxyXG4gICBjb21wdXRlZDoge1xyXG4gICAgICByZXN1bHRzKCl7XHJcbiAgICAgICAgIGlmKCF0aGlzLnRyYWRlcyl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBsZXQgdmlld3MgPSBbXTtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoaSAlIDIgPT09IDApe1xyXG4gICAgICAgICAgICAgICBsZXQgaW5UcmFkZSA9IHRoaXMudHJhZGVzW2ldO1xyXG4gICAgICAgICAgICAgICBsZXQgb3V0VHJhZGUgPSAoaSA9PT0gdGhpcy50cmFkZXMubGVuZ3RoIC0gMSkgPyBudWxsIDogdGhpcy50cmFkZXNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICBpZihvdXRUcmFkZSkgaXRlbXMucHVzaChvdXRUcmFkZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgdmFsOiBpblRyYWRlLnZhbCxcclxuICAgICAgICAgICAgICAgICAgaW5UcmFkZTogaW5UcmFkZSxcclxuICAgICAgICAgICAgICAgICAgb3V0VHJhZGU6IG91dFRyYWRlLFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQ6ICcnXHJcbiAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICBpZihvdXRUcmFkZSl7XHJcbiAgICAgICAgICAgICAgICAgIGlmKGluVHJhZGUudmFsID4gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgICBpdGVtLnJlc3VsdCA9IG91dFRyYWRlLnByaWNlIC0gaW5UcmFkZS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVzdWx0ID0gaW5UcmFkZS5wcmljZSAtIG91dFRyYWRlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKGl0ZW0ucmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgIHN1bSArPSBpdGVtLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgdmlld3MucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2aWV3czogdmlld3MsXHJcbiAgICAgICAgICAgIHRvdGFsOiBzdW1cclxuICAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgfSxcclxuICAgbWV0aG9kczoge1xyXG4gICAgICBcclxuICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQTVDQTtBQStDQTtBQUNBO0FBR0E7QUF6REE7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXpDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&\n");

/***/ })

})