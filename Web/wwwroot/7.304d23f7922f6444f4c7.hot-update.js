webpackHotUpdate(7,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/trades/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ \"./src/client/components/trades/Item.vue\");\n/* harmony import */ var _Total__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Total */ \"./src/client/components/trades/Total.vue\");\n\n\n\n\n\n\nvar _name$components$comp;\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_name$components$comp = {\n  name: 'TradeList',\n  components: {\n    'trade-item': _Item__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    'trade-total': _Total__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  },\n  computed: Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__[\"mapState\"])({\n    trades: function trades(state) {\n      return state.chart.trades;\n    }\n  })),\n  data: function data() {\n    return {};\n  }\n}, Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_name$components$comp, \"computed\", {\n  results: function results() {\n    if (!this.trades) {\n      return null;\n    }\n\n    var views = [];\n    var sum = 0;\n\n    for (var i = 0; i < this.trades.length; i++) {\n      if (i % 2 === 0) {\n        var inTrade = this.trades[i];\n        var outTrade = i === this.trades.length - 1 ? null : this.trades[i + 1];\n        if (outTrade) items.push(outTrade);\n        var item = {\n          val: inTrade.val,\n          inTrade: inTrade,\n          outTrade: outTrade,\n          result: ''\n        };\n\n        if (outTrade) {\n          if (inTrade.val > 0) {\n            item.result = outTrade.price - inTrade.price;\n          } else {\n            item.result = inTrade.price - outTrade.price;\n          }\n        }\n\n        if (item.result) {\n          sum += item.result;\n        }\n\n        views.push(item);\n      }\n    }\n\n    return {\n      views: views,\n      total: sum\n    };\n  }\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_name$components$comp, \"methods\", {}), _name$components$comp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdHJhZGVzL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9MaXN0LnZ1ZT85MTg1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgPHYtbGlzdCB2LWlmPVwicmVzdWx0c1wiIHR3by1saW5lPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCIodHJhZGUsIGluZGV4KSBpbiByZXN1bHRzLnZpZXdzXCI+XHJcbiAgICAgICAgIDx0cmFkZS1pdGVtIDptb2RlbD1cInRyYWRlXCIgOmluZGV4PVwiaW5kZXhcIiA6a2V5PVwiaW5kZXhcIiAvPlxyXG4gICAgICAgICA8di1kaXZpZGVyIHYtaWY9XCJpbmRleCArIDEgPCByZXN1bHRzLnZpZXdzLmxlbmd0aFwiIDprZXk9XCItMSAtIGluZGV4XCIvPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dHJhZGUtdG90YWwgdi1pZj1cInJlc3VsdHMudmlld3MubGVuZ3RoXCIgOnRvdGFsPVwicmVzdWx0cy50b3RhbFwiIC8+XHJcbiAgIDwvdi1saXN0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcclxuXHJcbmltcG9ydCBUcmFkZUl0ZW0gZnJvbSAnLi9JdGVtJztcclxuaW1wb3J0IFRyYWRlVG90YWwgZnJvbSAnLi9Ub3RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgIG5hbWU6ICdUcmFkZUxpc3QnLFxyXG4gICBjb21wb25lbnRzOiB7XHJcbiAgICAgICd0cmFkZS1pdGVtJyA6IFRyYWRlSXRlbSxcclxuICAgICAgJ3RyYWRlLXRvdGFsJyA6IFRyYWRlVG90YWxcclxuICAgfSxcclxuICAgY29tcHV0ZWQ6IHtcclxuICAgICAgLi4ubWFwU3RhdGUoe1xyXG4gICAgICAgICB0cmFkZXM6IHN0YXRlID0+IHN0YXRlLmNoYXJ0LnRyYWRlc1xyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgfSxcclxuICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgIH0sXHJcbiAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIHJlc3VsdHMoKXtcclxuICAgICAgICAgaWYoIXRoaXMudHJhZGVzKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGxldCB2aWV3cyA9IFtdO1xyXG4gICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihpICUgMiA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgIGxldCBpblRyYWRlID0gdGhpcy50cmFkZXNbaV07XHJcbiAgICAgICAgICAgICAgIGxldCBvdXRUcmFkZSA9IChpID09PSB0aGlzLnRyYWRlcy5sZW5ndGggLSAxKSA/IG51bGwgOiB0aGlzLnRyYWRlc1tpICsgMV07XHJcbiAgICAgICAgICAgICAgIGlmKG91dFRyYWRlKSBpdGVtcy5wdXNoKG91dFRyYWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICB2YWw6IGluVHJhZGUudmFsLFxyXG4gICAgICAgICAgICAgICAgICBpblRyYWRlOiBpblRyYWRlLFxyXG4gICAgICAgICAgICAgICAgICBvdXRUcmFkZTogb3V0VHJhZGUsXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdDogJydcclxuICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgIGlmKG91dFRyYWRlKXtcclxuICAgICAgICAgICAgICAgICAgaWYoaW5UcmFkZS52YWwgPiAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVzdWx0ID0gb3V0VHJhZGUucHJpY2UgLSBpblRyYWRlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZXN1bHQgPSBpblRyYWRlLnByaWNlIC0gb3V0VHJhZGUucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgaWYoaXRlbS5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgc3VtICs9IGl0ZW0ucmVzdWx0O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB2aWV3cy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZpZXdzOiB2aWV3cyxcclxuICAgICAgICAgICAgdG90YWw6IHN1bVxyXG4gICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICB9LFxyXG4gICBtZXRob2RzOiB7XHJcbiAgICAgIFxyXG4gICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUNBO0FBR0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXpDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=template&id=834cf200&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"c93332d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/trades/List.vue?vue&type=template&id=834cf200& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.results\n    ? _c(\n        \"v-list\",\n        { attrs: { \"two-line\": \"\" } },\n        [\n          _vm._l(_vm.results.views, function(trade, index) {\n            return [\n              _c(\"trade-item\", {\n                key: index,\n                attrs: { model: trade, index: index }\n              }),\n              index + 1 < _vm.results.views.length\n                ? _c(\"v-divider\", { key: -1 - index })\n                : _vm._e()\n            ]\n          }),\n          _vm.results.views.length\n            ? _c(\"trade-total\", { attrs: { total: _vm.results.total } })\n            : _vm._e()\n        ],\n        2\n      )\n    : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXNcXFxcLmNhY2hlXFxcXHZ1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYzkzMzMyZDYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NsaWVudC9jb21wb25lbnRzL3RyYWRlcy9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MzRjZjIwMCYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdHJhZGVzL0xpc3QudnVlP2ZhY2QiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ucmVzdWx0c1xuICAgID8gX2MoXG4gICAgICAgIFwidi1saXN0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgXCJ0d28tbGluZVwiOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0ucmVzdWx0cy52aWV3cywgZnVuY3Rpb24odHJhZGUsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcInRyYWRlLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbW9kZWw6IHRyYWRlLCBpbmRleDogaW5kZXggfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgaW5kZXggKyAxIDwgX3ZtLnJlc3VsdHMudmlld3MubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcInYtZGl2aWRlclwiLCB7IGtleTogLTEgLSBpbmRleCB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0ucmVzdWx0cy52aWV3cy5sZW5ndGhcbiAgICAgICAgICAgID8gX2MoXCJ0cmFkZS10b3RhbFwiLCB7IGF0dHJzOiB7IHRvdGFsOiBfdm0ucmVzdWx0cy50b3RhbCB9IH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=template&id=834cf200&\n");

/***/ })

})