webpackHotUpdate(7,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/trades/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ \"./src/client/components/trades/Item.vue\");\n/* harmony import */ var _Total__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Total */ \"./src/client/components/trades/Total.vue\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TradeList',\n  components: {\n    'trade-item': _Item__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    'trade-total': _Total__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  computed: Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__[\"mapState\"])({\n    trades: function trades(state) {\n      return state.chart.trades;\n    }\n  }), {\n    results: function results() {\n      if (!this.trades) {\n        return null;\n      }\n\n      var views = [];\n      var sum = 0;\n\n      for (var i = 0; i < this.trades.length; i++) {\n        if (i % 2 === 0) {\n          var inTrade = this.trades[i];\n          var outTrade = i === this.trades.length - 1 ? null : this.trades[i + 1];\n          var result = 0;\n\n          if (outTrade) {\n            if (inTrade.val > 0) {\n              result = outTrade.price - inTrade.price;\n            } else {\n              result = inTrade.price - outTrade.price;\n            }\n          }\n\n          if (result) {\n            sum += result;\n          }\n\n          var item = {\n            val: inTrade.val,\n            inTrade: inTrade,\n            outTrade: outTrade,\n            result: result\n          };\n          views.push(item);\n        }\n      }\n\n      return {\n        views: views,\n        total: sum\n      };\n    }\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdHJhZGVzL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9MaXN0LnZ1ZT85MTg1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgPHYtbGlzdCB2LWlmPVwicmVzdWx0c1wiIHR3by1saW5lPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCIodHJhZGUsIGluZGV4KSBpbiByZXN1bHRzLnZpZXdzXCI+XHJcbiAgICAgICAgIDx0cmFkZS1pdGVtIDptb2RlbD1cInRyYWRlXCIgOmluZGV4PVwiaW5kZXhcIiA6a2V5PVwiaW5kZXhcIiAvPlxyXG4gICAgICAgICA8di1kaXZpZGVyIHYtaWY9XCJpbmRleCArIDEgPCByZXN1bHRzLnZpZXdzLmxlbmd0aFwiIDprZXk9XCItMSAtIGluZGV4XCIvPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dHJhZGUtdG90YWwgdi1pZj1cInJlc3VsdHMudmlld3MubGVuZ3RoID4gMVwiIDp0b3RhbD1cInJlc3VsdHMudG90YWxcIiAvPlxyXG4gICA8L3YtbGlzdD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XHJcblxyXG5pbXBvcnQgVHJhZGVJdGVtIGZyb20gJy4vSXRlbSc7XHJcbmltcG9ydCBUcmFkZVRvdGFsIGZyb20gJy4vVG90YWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICBuYW1lOiAnVHJhZGVMaXN0JyxcclxuICAgY29tcG9uZW50czoge1xyXG4gICAgICAndHJhZGUtaXRlbScgOiBUcmFkZUl0ZW0sXHJcbiAgICAgICd0cmFkZS10b3RhbCcgOiBUcmFkZVRvdGFsXHJcbiAgIH0sXHJcbiAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIC4uLm1hcFN0YXRlKHtcclxuICAgICAgICAgdHJhZGVzOiBzdGF0ZSA9PiBzdGF0ZS5jaGFydC50cmFkZXNcclxuICAgICAgfSksXHJcbiAgICAgIHJlc3VsdHMoKXtcclxuICAgICAgICAgaWYoIXRoaXMudHJhZGVzKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGxldCB2aWV3cyA9IFtdO1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpICUgMiA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgIGxldCBpblRyYWRlID0gdGhpcy50cmFkZXNbaV07XHJcbiAgICAgICAgICAgICAgIGxldCBvdXRUcmFkZSA9IChpID09PSB0aGlzLnRyYWRlcy5sZW5ndGggLSAxKSA/IG51bGwgOiB0aGlzLnRyYWRlc1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICAgICAgICAgaWYob3V0VHJhZGUpe1xyXG4gICAgICAgICAgICAgICAgICBpZihpblRyYWRlLnZhbCA+IDAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gb3V0VHJhZGUucHJpY2UgLSBpblRyYWRlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaW5UcmFkZS5wcmljZSAtIG91dFRyYWRlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICBzdW0gKz0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgdmFsOiBpblRyYWRlLnZhbCxcclxuICAgICAgICAgICAgICAgICAgaW5UcmFkZTogaW5UcmFkZSxcclxuICAgICAgICAgICAgICAgICAgb3V0VHJhZGU6IG91dFRyYWRlLFxyXG4gICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHZpZXdzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmlld3M6IHZpZXdzLFxyXG4gICAgICAgICAgICB0b3RhbDogc3VtXHJcbiAgICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBN0NBO0FBTkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&\n");

/***/ })

})