webpackHotUpdate(9,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/components/trades/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./src/client/components/trades/Item.vue\");\n/* harmony import */ var _Total__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Total */ \"./src/client/components/trades/Total.vue\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'TradeList',\n  components: {\n    'trade-item': _Item__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'trade-total': _Total__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  computed: Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapState\"])({\n    trades: function trades(state) {\n      return state.chart.trades;\n    }\n  }), {\n    tradeViewList: function tradeViewList() {\n      if (!this.trades.length) return [];\n      var views = [];\n\n      for (var i = 0; i < this.trades.length; i++) {\n        if (i % 2 === 0) {\n          var inTrade = this.trades[i];\n          var outTrade = i === this.trades.length - 1 ? null : this.trades[i + 1];\n          var items = [inTrade];\n          if (outTrade) items.push(outTrade);\n          var item = {\n            val: inTrade.val,\n            items: items\n          };\n\n          if (outTrade) {\n            if (inTrade.val > 0) {\n              item.result = outTrade.price - inTrade.price;\n            } else {\n              item.result = inTrade.price - outTrade.price;\n            }\n          } else item.result = '';\n\n          views.push(item);\n        }\n      }\n\n      return views;\n    }\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvdHJhZGVzL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9MaXN0LnZ1ZT85MTg1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgPHYtbGlzdCB0d28tbGluZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKHRyYWRlLCBpbmRleCkgaW4gdHJhZGVWaWV3TGlzdFwiPlxyXG4gICAgICAgICA8dHJhZGUtaXRlbSA6dHJhZGU9XCJ0cmFkZVwiIDppbmRleD1cImluZGV4XCIgOmtleT1cImluZGV4XCIgLz4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgPHYtZGl2aWRlciB2LWlmPVwiaW5kZXggKyAxIDwgdHJhZGVWaWV3TGlzdC5sZW5ndGhcIiA6a2V5PVwiLTEgLSBpbmRleFwiLz5cclxuICAgICAgICAgXHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0cmFkZS10b3RhbCA6dG90YWw9XCIzMlwiIC8+XHJcbiAgIDwvdi1saXN0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcclxuXHJcbmltcG9ydCBUcmFkZUl0ZW0gZnJvbSAnLi9JdGVtJztcclxuaW1wb3J0IFRyYWRlVG90YWwgZnJvbSAnLi9Ub3RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgIG5hbWU6ICdUcmFkZUxpc3QnLFxyXG4gICBjb21wb25lbnRzOiB7XHJcbiAgICAgICd0cmFkZS1pdGVtJyA6IFRyYWRlSXRlbSxcclxuICAgICAgJ3RyYWRlLXRvdGFsJyA6IFRyYWRlVG90YWxcclxuICAgfSxcclxuICAgY29tcHV0ZWQ6IHtcclxuICAgICAgLi4ubWFwU3RhdGUoe1xyXG4gICAgICAgICB0cmFkZXM6IHN0YXRlID0+IHN0YXRlLmNoYXJ0LnRyYWRlc1xyXG4gICAgICB9KSxcclxuICAgICAgdHJhZGVWaWV3TGlzdCgpe1xyXG4gICAgICAgICBpZighdGhpcy50cmFkZXMubGVuZ3RoKSByZXR1cm4gW107XHJcbiAgICAgICAgIGxldCB2aWV3cyA9IFtdO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGkgJSAyID09PSAwKXtcclxuICAgICAgICAgICAgICAgbGV0IGluVHJhZGUgPSB0aGlzLnRyYWRlc1tpXTtcclxuICAgICAgICAgICAgICAgbGV0IG91dFRyYWRlID0gKGkgPT09IHRoaXMudHJhZGVzLmxlbmd0aCAtIDEpID8gbnVsbCA6IHRoaXMudHJhZGVzW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gW2luVHJhZGVdO1xyXG4gICAgICAgICAgICAgICBpZihvdXRUcmFkZSkgaXRlbXMucHVzaChvdXRUcmFkZSk7XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgICAgdmFsOiBpblRyYWRlLnZhbCxcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXHJcbiAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICBpZihvdXRUcmFkZSl7XHJcbiAgICAgICAgICAgICAgICAgIGlmKGluVHJhZGUudmFsID4gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgICBpdGVtLnJlc3VsdCA9IG91dFRyYWRlLnByaWNlIC0gaW5UcmFkZS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVzdWx0ID0gaW5UcmFkZS5wcmljZSAtIG91dFRyYWRlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1lbHNlICBpdGVtLnJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgdmlld3MucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiB2aWV3cztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9CQTtBQU5BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/components/trades/List.vue?vue&type=script&lang=js&\n");

/***/ })

})