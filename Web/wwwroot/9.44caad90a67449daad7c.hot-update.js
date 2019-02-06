webpackHotUpdate(9,{

/***/ "./src/models/indicator.js":
/*!*********************************!*\
  !*** ./src/models/indicator.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ \"./node_modules/core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\n\nvar Indicator =\n/*#__PURE__*/\nfunction () {\n  function Indicator(model, param, beginIndex) {\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Indicator);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"data\", []);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"param\", 0);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"beginTimeIndex\", 0);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"buySignalIndexes\", []);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"sellSignalIndexes\", []);\n\n    for (var property in model) {\n      this[property] = model[property];\n    }\n\n    if (param) this.param = param;else this.param = this.defaultParam;\n    this.beginTimeIndex = beginIndex;\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Indicator, [{\n    key: \"calculate\",\n    value: function calculate(quotes) {\n      if (this.entity === 'BlueChips' || this.entity === 'Powers') {\n        this.calculatePowers(quotes);\n      } else if (this.entity === 'Prices') {\n        for (var i = 0; i < this.data.length; i++) {\n          var item = this.data[i];\n\n          if (!this.isDataInTime(item)) {\n            item.val = 0;\n            item.signal = 0;\n          } else if (this.canCountAvg(i)) {\n            item.val = Number(item.val);\n            var avg = this.countAvg(i);\n            var val = quotes[i].price - avg;\n            item.result = Math.round(val * 100) / 100;\n            item.signal = this.createSignal(i);\n            console.log({\n              index: i,\n              price: quotes[i].price,\n              val: item.val,\n              result: item.result\n            });\n          } else {\n            item.val = 0;\n            item.signal = 0;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"calculatePowers\",\n    value: function calculatePowers(quotes) {\n      var sum = 0;\n\n      for (var i = 0; i < this.data.length; i++) {\n        var item = this.data[i];\n        sum += Number(item.val);\n\n        if (!this.isDataInTime(item)) {\n          item.val = 0;\n          item.avg = 0;\n          item.signal = 0;\n        } else if (this.canCountAvg(i)) {\n          item.val = sum;\n          item.avg = this.countAvg(i);\n          item.signal = this.createSignal(i);\n        } else {\n          item.val = sum;\n          item.avg = 0;\n          item.signal = 0;\n        }\n      }\n    }\n  }, {\n    key: \"isDataInTime\",\n    value: function isDataInTime(data) {\n      return data.time > this.begin && data.time <= this.end;\n    }\n  }, {\n    key: \"canCountAvg\",\n    value: function canCountAvg(index) {\n      return index >= this.beginTimeIndex + this.param;\n    }\n  }, {\n    key: \"countAvg\",\n    value: function countAvg(index) {\n      var startIndex = index - this.param + 1;\n      if (startIndex < 0) return 0;\n      var sum = 0;\n\n      for (var i = startIndex; i <= index; i++) {\n        sum += this.data[i].val;\n      }\n\n      return sum == 0 ? 0 : Math.round(sum / this.param * 100) / 100;\n    }\n  }, {\n    key: \"createSignal\",\n    value: function createSignal(index) {\n      var data = this.data[index];\n\n      if (this.entity === 'BlueChips' || this.entity === 'Powers') {\n        if (data.val > data.avg) {\n          this.buySignalIndexes.push(index);\n          return 1;\n        } else if (data.val < data.avg) {\n          this.sellSignalIndexes.push(index);\n          return -1;\n        } else return 0;\n      } else if (this.entity === 'Prices') {\n        if (data.result > 0) {\n          return 1;\n        } else return -1;\n      }\n    }\n  }]);\n\n  return Indicator;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Indicator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL2luZGljYXRvci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbHMvaW5kaWNhdG9yLmpzPzg4ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIEluZGljYXRvciB7XHJcbiAgIFxyXG4gICBkYXRhID0gW107XHJcbiAgIHBhcmFtID0gMDtcclxuXHJcbiAgIGJlZ2luVGltZUluZGV4ID0gMDtcclxuXHJcbiAgIGJ1eVNpZ25hbEluZGV4ZXMgPSBbXVxyXG4gICBzZWxsU2lnbmFsSW5kZXhlcyA9IFtdO1xyXG5cclxuICAgY29uc3RydWN0b3IobW9kZWwsIHBhcmFtLCBiZWdpbkluZGV4KSB7XHJcbiAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIG1vZGVsKSB7XHJcbiAgICAgICAgIHRoaXNbcHJvcGVydHldID0gbW9kZWxbcHJvcGVydHldO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHBhcmFtKSAgdGhpcy5wYXJhbSA9IHBhcmFtO1xyXG4gICAgICBlbHNlIHRoaXMucGFyYW0gPSB0aGlzLmRlZmF1bHRQYXJhbTtcclxuXHJcbiAgICAgIHRoaXMuYmVnaW5UaW1lSW5kZXggPSBiZWdpbkluZGV4O1xyXG4gICAgIFxyXG4gICB9XHJcbiAgIFxyXG4gICBcclxuXHJcbiAgIGNhbGN1bGF0ZShxdW90ZXMpe1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5lbnRpdHkgPT09ICdCbHVlQ2hpcHMnIHx8IHRoaXMuZW50aXR5ID09PSAnUG93ZXJzJyl7XHJcbiAgICAgICAgIHRoaXMuY2FsY3VsYXRlUG93ZXJzKHF1b3Rlcyk7XHJcbiAgICAgIH1lbHNlIGlmKHRoaXMuZW50aXR5ID09PSAnUHJpY2VzJyl7XHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNEYXRhSW5UaW1lKGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgaXRlbS52YWwgPSAwO1xyXG4gICAgICAgICAgICAgICBpdGVtLnNpZ25hbCA9IDA7ICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuY2FuQ291bnRBdmcoaSkpe1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgaXRlbS52YWwgPSBOdW1iZXIoaXRlbS52YWwpO1xyXG4gICAgICAgICAgICAgICBsZXQgYXZnID0gdGhpcy5jb3VudEF2ZyhpKTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCB2YWwgPSBxdW90ZXNbaV0ucHJpY2UgLSBhdmc7XHJcbiAgICAgICAgICAgICAgIGl0ZW0ucmVzdWx0ID0gTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICBpdGVtLnNpZ25hbCA9IHRoaXMuY3JlYXRlU2lnbmFsKGkpO1xyXG5cclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coe1xyXG4gICAgICAgICAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgICAgICAgICAgcHJpY2U6IHF1b3Rlc1tpXS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgdmFsIDogaXRlbS52YWwsXHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdDogaXRlbS5yZXN1bHRcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICBpdGVtLnZhbCA9IDA7XHJcbiAgICAgICAgICAgICAgIGl0ZW0uc2lnbmFsID0gMDsgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY2FsY3VsYXRlUG93ZXJzKHF1b3Rlcyl7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgICAgIHN1bSArPSBOdW1iZXIoaXRlbS52YWwpO1xyXG4gICAgICAgICBpZighdGhpcy5pc0RhdGFJblRpbWUoaXRlbSkpe1xyXG4gICAgICAgICAgICBpdGVtLnZhbCA9IDA7XHJcbiAgICAgICAgICAgIGl0ZW0uYXZnID0gMDtcclxuICAgICAgICAgICAgaXRlbS5zaWduYWwgPSAwOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIGlmKHRoaXMuY2FuQ291bnRBdmcoaSkpe1xyXG4gICAgICAgICAgICBpdGVtLnZhbCA9IHN1bTtcclxuICAgICAgICAgICAgaXRlbS5hdmcgPSB0aGlzLmNvdW50QXZnKGkpO1xyXG4gICAgICAgICAgICBpdGVtLnNpZ25hbCA9IHRoaXMuY3JlYXRlU2lnbmFsKGkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGl0ZW0udmFsID0gc3VtO1xyXG4gICAgICAgICAgICBpdGVtLmF2ZyA9IDA7XHJcbiAgICAgICAgICAgIGl0ZW0uc2lnbmFsID0gMDsgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpc0RhdGFJblRpbWUoZGF0YSl7XHJcbiAgICAgIHJldHVybiBkYXRhLnRpbWUgPiB0aGlzLmJlZ2luICYmIGRhdGEudGltZSA8PSB0aGlzLmVuZDtcclxuICAgfVxyXG5cclxuICAgY2FuQ291bnRBdmcoaW5kZXgpe1xyXG4gICAgICByZXR1cm4gaW5kZXggPj0gKHRoaXMuYmVnaW5UaW1lSW5kZXggKyB0aGlzLnBhcmFtKTtcclxuICAgfVxyXG5cclxuICAgY291bnRBdmcoaW5kZXgpe1xyXG4gICAgICBsZXQgc3RhcnRJbmRleCA9IGluZGV4IC0gdGhpcy5wYXJhbSArIDE7XHJcbiAgICAgIGlmKHN0YXJ0SW5kZXggPCAwKSByZXR1cm4gMDtcclxuXHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IobGV0IGkgPSBzdGFydEluZGV4OyBpIDw9IGluZGV4OyBpKyspe1xyXG4gICAgICAgICBzdW0gKz0gdGhpcy5kYXRhW2ldLnZhbDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHN1bSA9PSAwID8gMCA6IE1hdGgucm91bmQoKHN1bSAvIHRoaXMucGFyYW0pICogMTAwKSAvIDEwMDtcclxuICAgfVxyXG5cclxuICAgY3JlYXRlU2lnbmFsKGluZGV4KXtcclxuICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFbaW5kZXhdO1xyXG4gICAgICBpZih0aGlzLmVudGl0eSA9PT0gJ0JsdWVDaGlwcycgfHwgdGhpcy5lbnRpdHkgPT09ICdQb3dlcnMnKXtcclxuICAgICAgICAgaWYoZGF0YS52YWwgPiBkYXRhLmF2Zyl7XHJcbiAgICAgICAgICAgIHRoaXMuYnV5U2lnbmFsSW5kZXhlcy5wdXNoKGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGVsc2UgaWYoZGF0YS52YWwgPCBkYXRhLmF2Zyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsbFNpZ25hbEluZGV4ZXMucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgfSBcclxuICAgICAgICAgZWxzZSByZXR1cm4gMDtcclxuICAgICAgfWVsc2UgaWYodGhpcy5lbnRpdHkgPT09ICdQcmljZXMnKXtcclxuICAgICAgICAgaWYoZGF0YS5yZXN1bHQgPiAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgIH0gXHJcbiAgICAgICAgIGVsc2UgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgfVxyXG5cclxuICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRpY2F0b3I7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7Ozs7O0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/indicator.js\n");

/***/ })

})