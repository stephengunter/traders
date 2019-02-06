webpackHotUpdate(9,{

/***/ "./src/models/indicator.js":
/*!*********************************!*\
  !*** ./src/models/indicator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\n\nvar Indicator =\n/*#__PURE__*/\nfunction () {\n  function Indicator(model, param, beginIndex) {\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Indicator);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"data\", []);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"param\", 0);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"beginTimeIndex\", 0);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"buySignalIndexes\", []);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"sellSignalIndexes\", []);\n\n    for (var property in model) {\n      this[property] = model[property];\n    }\n\n    if (param) this.param = param;else this.param = this.defaultParam;\n    this.beginTimeIndex = beginIndex;\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Indicator, [{\n    key: \"calculate\",\n    value: function calculate(quotes) {\n      if (this.entity === 'BlueChips' || this.entity === 'Powers') {\n        this.calculatePowers(quotes);\n      } else if (this.entity === 'Prices') {\n        for (var i = 0; i < this.data.length; i++) {\n          var item = this.data[i];\n\n          if (!this.isDataInTime(item)) {\n            item.val = 0;\n            item.avg = 0;\n            item.signal = 0;\n          } else if (this.canCountAvg(i)) {\n            item.val = Number(item.val);\n            var price = quotes[i].price;\n            var avg = this.countAvg(i);\n            console.log(item.val);\n            item.val = avg;\n            item.avg = avg;\n            item.signal = this.createSignal(i);\n          } else {\n            //let val = quotes[i].price - item.val;\n            //item.val = Math.round(val * 100) / 100;\n            item.avg = 0;\n            item.signal = 0;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"calculatePowers\",\n    value: function calculatePowers(quotes) {\n      var sum = 0;\n\n      for (var i = 0; i < this.data.length; i++) {\n        var item = this.data[i];\n        sum += Number(item.val);\n\n        if (!this.isDataInTime(item)) {\n          item.val = 0;\n          item.avg = 0;\n          item.signal = 0;\n        } else if (this.canCountAvg(i)) {\n          item.val = sum;\n          item.avg = this.countAvg(i);\n          item.signal = this.createSignal(i);\n        } else {\n          item.val = sum;\n          item.avg = 0;\n          item.signal = 0;\n        }\n      }\n    }\n  }, {\n    key: \"isDataInTime\",\n    value: function isDataInTime(data) {\n      return data.time > this.begin && data.time <= this.end;\n    }\n  }, {\n    key: \"canCountAvg\",\n    value: function canCountAvg(index) {\n      return index >= this.beginTimeIndex + this.param;\n    }\n  }, {\n    key: \"countAvg\",\n    value: function countAvg(index) {\n      var startIndex = index - this.param + 1;\n      if (startIndex < 0) return 0;\n      var sum = 0;\n\n      for (var i = startIndex; i <= index; i++) {\n        sum += this.data[i].val;\n      }\n\n      return sum == 0 ? 0 : Math.round(sum / this.param * 100) / 100;\n    }\n  }, {\n    key: \"createSignal\",\n    value: function createSignal(index) {\n      var data = this.data[index];\n\n      if (this.entity === 'BlueChips' || this.entity === 'Powers') {\n        if (data.val > data.avg) {\n          this.buySignalIndexes.push(index);\n          return 1;\n        } else if (data.val < data.avg) {\n          this.sellSignalIndexes.push(index);\n          return -1;\n        } else return 0;\n      } else if (this.entity === 'Prices') {\n        if (data.val > data.avg) {\n          this.buySignalIndexes.push(index);\n          return 1;\n        } else if (data.val < data.avg) {\n          this.sellSignalIndexes.push(index);\n          return -1;\n        } else return 0;\n      }\n    }\n  }]);\n\n  return Indicator;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Indicator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL2luZGljYXRvci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kaWNhdG9yLmpzPzg4ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIEluZGljYXRvciB7XHJcbiAgIFxyXG4gICBkYXRhID0gW107XHJcbiAgIHBhcmFtID0gMDtcclxuXHJcbiAgIGJlZ2luVGltZUluZGV4ID0gMDtcclxuXHJcbiAgIGJ1eVNpZ25hbEluZGV4ZXMgPSBbXVxyXG4gICBzZWxsU2lnbmFsSW5kZXhlcyA9IFtdO1xyXG5cclxuICAgY29uc3RydWN0b3IobW9kZWwsIHBhcmFtLCBiZWdpbkluZGV4KSB7XHJcbiAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIG1vZGVsKSB7XHJcbiAgICAgICAgIHRoaXNbcHJvcGVydHldID0gbW9kZWxbcHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBhcmFtKSAgdGhpcy5wYXJhbSA9IHBhcmFtO1xyXG4gICAgICBlbHNlIHRoaXMucGFyYW0gPSB0aGlzLmRlZmF1bHRQYXJhbTtcclxuXHJcbiAgICAgIHRoaXMuYmVnaW5UaW1lSW5kZXggPSBiZWdpbkluZGV4O1xyXG4gICAgIFxyXG4gICB9XHJcbiAgIFxyXG4gICBcclxuXHJcbiAgIGNhbGN1bGF0ZShxdW90ZXMpe1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5lbnRpdHkgPT09ICdCbHVlQ2hpcHMnIHx8IHRoaXMuZW50aXR5ID09PSAnUG93ZXJzJyl7XHJcbiAgICAgICAgIHRoaXMuY2FsY3VsYXRlUG93ZXJzKHF1b3Rlcyk7XHJcbiAgICAgIH1lbHNlIGlmKHRoaXMuZW50aXR5ID09PSAnUHJpY2VzJyl7XHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNEYXRhSW5UaW1lKGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgaXRlbS52YWwgPSAwO1xyXG4gICAgICAgICAgICAgICBpdGVtLmF2ZyA9IDA7XHJcbiAgICAgICAgICAgICAgIGl0ZW0uc2lnbmFsID0gMDsgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jYW5Db3VudEF2ZyhpKSl7XHJcbiAgICAgICAgICAgICAgIGl0ZW0udmFsID0gTnVtYmVyKGl0ZW0udmFsKTtcclxuICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcXVvdGVzW2ldLnByaWNlO1xyXG4gICAgICAgICAgICAgICBsZXQgYXZnID0gdGhpcy5jb3VudEF2ZyhpKTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS52YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgaXRlbS52YWwgPSBhdmc7XHJcbiAgICAgICAgICAgICAgIGl0ZW0uYXZnID0gYXZnO1xyXG4gICAgICAgICAgICAgICBpdGVtLnNpZ25hbCA9IHRoaXMuY3JlYXRlU2lnbmFsKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgIC8vbGV0IHZhbCA9IHF1b3Rlc1tpXS5wcmljZSAtIGl0ZW0udmFsO1xyXG4gICAgICAgICAgICAgICAvL2l0ZW0udmFsID0gTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICBpdGVtLmF2ZyA9IDA7XHJcbiAgICAgICAgICAgICAgIGl0ZW0uc2lnbmFsID0gMDsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZVBvd2VycyhxdW90ZXMpe1xyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCBpdGVtID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICAgICBzdW0gKz0gTnVtYmVyKGl0ZW0udmFsKTtcclxuICAgICAgICAgaWYoIXRoaXMuaXNEYXRhSW5UaW1lKGl0ZW0pKXtcclxuICAgICAgICAgICAgaXRlbS52YWwgPSAwO1xyXG4gICAgICAgICAgICBpdGVtLmF2ZyA9IDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2lnbmFsID0gMDsgICAgICAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSBpZih0aGlzLmNhbkNvdW50QXZnKGkpKXtcclxuICAgICAgICAgICAgaXRlbS52YWwgPSBzdW07XHJcbiAgICAgICAgICAgIGl0ZW0uYXZnID0gdGhpcy5jb3VudEF2ZyhpKTtcclxuICAgICAgICAgICAgaXRlbS5zaWduYWwgPSB0aGlzLmNyZWF0ZVNpZ25hbChpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpdGVtLnZhbCA9IHN1bTtcclxuICAgICAgICAgICAgaXRlbS5hdmcgPSAwO1xyXG4gICAgICAgICAgICBpdGVtLnNpZ25hbCA9IDA7ICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaXNEYXRhSW5UaW1lKGRhdGEpe1xyXG4gICAgICByZXR1cm4gZGF0YS50aW1lID4gdGhpcy5iZWdpbiAmJiBkYXRhLnRpbWUgPD0gdGhpcy5lbmQ7XHJcbiAgIH1cclxuXHJcbiAgIGNhbkNvdW50QXZnKGluZGV4KXtcclxuICAgICAgcmV0dXJuIGluZGV4ID49ICh0aGlzLmJlZ2luVGltZUluZGV4ICsgdGhpcy5wYXJhbSk7XHJcbiAgIH1cclxuXHJcbiAgIGNvdW50QXZnKGluZGV4KXtcclxuICAgICAgbGV0IHN0YXJ0SW5kZXggPSBpbmRleCAtIHRoaXMucGFyYW0gKyAxO1xyXG4gICAgICBpZihzdGFydEluZGV4IDwgMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgZm9yKGxldCBpID0gc3RhcnRJbmRleDsgaSA8PSBpbmRleDsgaSsrKXtcclxuICAgICAgICAgc3VtICs9IHRoaXMuZGF0YVtpXS52YWw7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBzdW0gPT0gMCA/IDAgOiBNYXRoLnJvdW5kKChzdW0gLyB0aGlzLnBhcmFtKSAqIDEwMCkgLyAxMDA7XHJcbiAgIH1cclxuXHJcbiAgIGNyZWF0ZVNpZ25hbChpbmRleCl7XHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhW2luZGV4XTtcclxuICAgICAgaWYodGhpcy5lbnRpdHkgPT09ICdCbHVlQ2hpcHMnIHx8IHRoaXMuZW50aXR5ID09PSAnUG93ZXJzJyl7XHJcbiAgICAgICAgIGlmKGRhdGEudmFsID4gZGF0YS5hdmcpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1eVNpZ25hbEluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBlbHNlIGlmKGRhdGEudmFsIDwgZGF0YS5hdmcpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGxTaWduYWxJbmRleGVzLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgICAgIH1lbHNlIGlmKHRoaXMuZW50aXR5ID09PSAnUHJpY2VzJyl7XHJcbiAgICAgICAgIGlmKGRhdGEudmFsID4gZGF0YS5hdmcpe1xyXG4gICAgICAgICAgICB0aGlzLmJ1eVNpZ25hbEluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBlbHNlIGlmKGRhdGEudmFsIDwgZGF0YS5hdmcpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGxTaWduYWxJbmRleGVzLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGVsc2UgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcblxyXG4gICB9XHJcblxyXG4gICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGljYXRvcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBOzs7Ozs7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/indicator.js\n");

/***/ })

})