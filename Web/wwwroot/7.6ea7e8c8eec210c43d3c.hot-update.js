webpackHotUpdate(7,{

/***/ "./src/models/tradeManager.js":
/*!************************************!*\
  !*** ./src/models/tradeManager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar TradeManager =\n/*#__PURE__*/\nfunction () {\n  function TradeManager() {\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TradeManager);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"times\", []);\n\n    this.trades = [];\n    this.position = 0;\n    var time = 84600;\n\n    while (time <= 134500) {\n      if (time === 86000) time = 90000;else if (time === 96000) time = 100000;else if (time === 106000) time = 110000;else if (time === 116000) time = 120000;else if (time === 126000) time = 130000;\n      this.times.push(time);\n      time += 100;\n    }\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TradeManager, [{\n    key: \"getTimeIndex\",\n    value: function getTimeIndex(time) {\n      return this.times.indexOf(time);\n    }\n  }, {\n    key: \"getTrades\",\n    value: function getTrades() {\n      return this.trades;\n    }\n  }, {\n    key: \"onSignal\",\n    value: function onSignal(signal, dataIndex) {\n      if (signal > 0) {\n        this.onBuy(dataIndex);\n      } else if (signal < 0) {\n        this.onSell(dataIndex);\n      }\n    }\n  }, {\n    key: \"onBuy\",\n    value: function onBuy(dataIndex) {\n      if (this.position > 0) return;\n\n      if (this.position < 0) {\n        this.out(dataIndex);\n      }\n\n      this.in(dataIndex, 1);\n    }\n  }, {\n    key: \"onSell\",\n    value: function onSell(dataIndex) {\n      if (this.position < 0) return;\n\n      if (this.position > 0) {\n        this.out(dataIndex);\n      }\n\n      this.in(dataIndex, -1);\n    } //平倉出場\n\n  }, {\n    key: \"out\",\n    value: function out(dataIndex) {\n      this.addTrade({\n        index: dataIndex,\n        val: 0,\n        text: ''\n      });\n      this.position = 0;\n    } //進場\n\n  }, {\n    key: \"in\",\n    value: function _in(dataIndex, val) {\n      this.addTrade({\n        index: dataIndex,\n        val: val,\n        text: ''\n      });\n      this.position = val;\n    }\n  }, {\n    key: \"addTrade\",\n    value: function addTrade(trade) {\n      console.log('addTrade', this.tradeManager.getTrades());\n      this.trades.push(trade);\n    }\n  }]);\n\n  return TradeManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradeManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3RyYWRlTWFuYWdlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdHJhZGVNYW5hZ2VyLmpzPzJiMGIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhZGVNYW5hZ2VyIHtcclxuICAgXHJcbiAgIHRpbWVzID0gW107XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy50cmFkZXMgPSBbXTtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICBsZXQgdGltZSA9IDg0NjAwO1xyXG4gICAgICB3aGlsZSAodGltZSA8PSAxMzQ1MDApIHtcclxuICAgICAgICAgaWYodGltZSA9PT0gODYwMDApIHRpbWUgPSA5MDAwMDtcclxuICAgICAgICAgZWxzZSBpZih0aW1lID09PSA5NjAwMCkgdGltZSA9IDEwMDAwMDtcclxuICAgICAgICAgZWxzZSBpZih0aW1lID09PSAxMDYwMDApIHRpbWUgPSAxMTAwMDA7XHJcbiAgICAgICAgIGVsc2UgaWYodGltZSA9PT0gMTE2MDAwKSB0aW1lID0gMTIwMDAwO1xyXG4gICAgICAgICBlbHNlIGlmKHRpbWUgPT09IDEyNjAwMCkgdGltZSA9IDEzMDAwMDtcclxuXHJcbiAgICAgICAgIHRoaXMudGltZXMucHVzaCh0aW1lKTtcclxuICAgICAgICAgdGltZSArPSAxMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbWVJbmRleCh0aW1lKXtcclxuICAgIHJldHVybiB0aGlzLnRpbWVzLmluZGV4T2YodGltZSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRyYWRlcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy50cmFkZXM7XHJcbiAgIH1cclxuXHJcbiAgIG9uU2lnbmFsKHNpZ25hbCwgZGF0YUluZGV4KXtcclxuICAgICAgaWYoc2lnbmFsID4gMCl7XHJcbiAgICAgICAgIHRoaXMub25CdXkoZGF0YUluZGV4KTtcclxuICAgICAgfWVsc2UgaWYoc2lnbmFsIDwgMCl7XHJcbiAgICAgICAgIHRoaXMub25TZWxsKGRhdGFJbmRleCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgb25CdXkoZGF0YUluZGV4KXtcclxuICAgICAgaWYodGhpcy5wb3NpdGlvbiA+IDApIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMucG9zaXRpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5vdXQoZGF0YUluZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbihkYXRhSW5kZXgsIDEpO1xyXG5cclxuICAgfVxyXG5cclxuICAgb25TZWxsKGRhdGFJbmRleCl7XHJcbiAgICAgIGlmKHRoaXMucG9zaXRpb24gPCAwKSByZXR1cm47XHJcblxyXG4gICAgICBpZih0aGlzLnBvc2l0aW9uID4gMCl7XHJcbiAgICAgICAgIHRoaXMub3V0KGRhdGFJbmRleCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW4oZGF0YUluZGV4LCAtMSk7XHJcbiAgIH1cclxuXHJcbiAgIC8v5bmz5YCJ5Ye65aC0XHJcbiAgIG91dChkYXRhSW5kZXgpe1xyXG4gICAgICB0aGlzLmFkZFRyYWRlKHtcclxuICAgICAgICAgaW5kZXg6IGRhdGFJbmRleCxcclxuICAgICAgICAgdmFsOiAwLFxyXG4gICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICB9KTsgIFxyXG4gICAgICB0aGlzLnBvc2l0aW9uID0gMDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIC8v6YCy5aC0XHJcbiAgIGluKGRhdGFJbmRleCwgdmFsKXtcclxuICAgICAgdGhpcy5hZGRUcmFkZSh7XHJcbiAgICAgICAgIGluZGV4OiBkYXRhSW5kZXgsXHJcbiAgICAgICAgIHZhbDogdmFsLFxyXG4gICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHZhbDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIGFkZFRyYWRlKHRyYWRlKXtcclxuICAgICAgY29uc29sZS5sb2coJ2FkZFRyYWRlJyx0aGlzLnRyYWRlTWFuYWdlci5nZXRUcmFkZXMoKSk7XHJcbiAgICAgIHRoaXMudHJhZGVzLnB1c2godHJhZGUpO1xyXG4gICB9XHJcblxyXG5cclxuXHJcbiAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhZGVNYW5hZ2VyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBUUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/tradeManager.js\n");

/***/ })

})