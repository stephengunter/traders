webpackHotUpdate(7,{

/***/ "./src/models/tradeManager.js":
/*!************************************!*\
  !*** ./src/models/tradeManager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar TradeManager =\n/*#__PURE__*/\nfunction () {\n  function TradeManager() {\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TradeManager);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"times\", []);\n\n    this.trades = [];\n    this.position = 0;\n    var time = 84600;\n\n    while (time <= 134500) {\n      if (time === 86000) time = 90000;else if (time === 96000) time = 100000;else if (time === 106000) time = 110000;else if (time === 116000) time = 120000;else if (time === 126000) time = 130000;\n      this.times.push(time);\n      time += 100;\n    }\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TradeManager, [{\n    key: \"getTimeIndex\",\n    value: function getTimeIndex(time) {\n      return this.times.indexOf(time);\n    }\n  }, {\n    key: \"getTrades\",\n    value: function getTrades() {\n      return this.trades;\n    }\n  }, {\n    key: \"getPosition\",\n    value: function getPosition(index) {\n      var trades = this.trades.filter(function (item) {\n        return item.index <= index;\n      });\n\n      if (trades) {\n        return trades[trades.length - 1].val;\n      } else {\n        return 0;\n      }\n    }\n  }, {\n    key: \"onSignal\",\n    value: function onSignal(signal, dataIndex) {\n      if (signal > 0) {\n        this.onBuy(dataIndex);\n      } else if (signal < 0) {\n        this.onSell(dataIndex);\n      }\n    }\n  }, {\n    key: \"onBuy\",\n    value: function onBuy(dataIndex) {\n      if (this.position > 0) return;\n\n      if (this.position < 0) {\n        this.out(dataIndex);\n      }\n\n      this.in(dataIndex, 1);\n    }\n  }, {\n    key: \"onSell\",\n    value: function onSell(dataIndex) {\n      if (this.position < 0) return;\n\n      if (this.position > 0) {\n        this.out(dataIndex);\n      }\n\n      this.in(dataIndex, -1);\n    } //平倉出場\n\n  }, {\n    key: \"out\",\n    value: function out(dataIndex) {\n      this.addTrade({\n        index: dataIndex,\n        val: 0,\n        text: ''\n      });\n      this.position = 0;\n    } //進場\n\n  }, {\n    key: \"in\",\n    value: function _in(dataIndex, val) {\n      this.addTrade({\n        index: dataIndex,\n        val: val,\n        text: ''\n      });\n      this.position = val;\n    }\n  }, {\n    key: \"addTrade\",\n    value: function addTrade(trade) {\n      this.trades.push(trade);\n    }\n  }]);\n\n  return TradeManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradeManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3RyYWRlTWFuYWdlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdHJhZGVNYW5hZ2VyLmpzPzJiMGIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhZGVNYW5hZ2VyIHtcclxuICAgXHJcbiAgIHRpbWVzID0gW107XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy50cmFkZXMgPSBbXTtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICBsZXQgdGltZSA9IDg0NjAwO1xyXG4gICAgICB3aGlsZSAodGltZSA8PSAxMzQ1MDApIHtcclxuICAgICAgICAgaWYodGltZSA9PT0gODYwMDApIHRpbWUgPSA5MDAwMDtcclxuICAgICAgICAgZWxzZSBpZih0aW1lID09PSA5NjAwMCkgdGltZSA9IDEwMDAwMDtcclxuICAgICAgICAgZWxzZSBpZih0aW1lID09PSAxMDYwMDApIHRpbWUgPSAxMTAwMDA7XHJcbiAgICAgICAgIGVsc2UgaWYodGltZSA9PT0gMTE2MDAwKSB0aW1lID0gMTIwMDAwO1xyXG4gICAgICAgICBlbHNlIGlmKHRpbWUgPT09IDEyNjAwMCkgdGltZSA9IDEzMDAwMDtcclxuXHJcbiAgICAgICAgIHRoaXMudGltZXMucHVzaCh0aW1lKTtcclxuICAgICAgICAgdGltZSArPSAxMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbWVJbmRleCh0aW1lKXtcclxuICAgIHJldHVybiB0aGlzLnRpbWVzLmluZGV4T2YodGltZSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRyYWRlcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy50cmFkZXM7XHJcbiAgIH1cclxuXHJcbiAgIGdldFBvc2l0aW9uKGluZGV4KXtcclxuICAgICAgbGV0IHRyYWRlcyA9IHRoaXMudHJhZGVzLmZpbHRlcihpdGVtID0+IGl0ZW0uaW5kZXggPD0gaW5kZXgpO1xyXG4gICAgICBpZih0cmFkZXMpe1xyXG4gICAgICAgICByZXR1cm4gdHJhZGVzW3RyYWRlcy5sZW5ndGggLSAxXS52YWw7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgb25TaWduYWwoc2lnbmFsLCBkYXRhSW5kZXgpe1xyXG4gICAgICBpZihzaWduYWwgPiAwKXtcclxuICAgICAgICAgdGhpcy5vbkJ1eShkYXRhSW5kZXgpO1xyXG4gICAgICB9ZWxzZSBpZihzaWduYWwgPCAwKXtcclxuICAgICAgICAgdGhpcy5vblNlbGwoZGF0YUluZGV4KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBvbkJ1eShkYXRhSW5kZXgpe1xyXG4gICAgICBpZih0aGlzLnBvc2l0aW9uID4gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodGhpcy5wb3NpdGlvbiA8IDApe1xyXG4gICAgICAgICB0aGlzLm91dChkYXRhSW5kZXgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmluKGRhdGFJbmRleCwgMSk7XHJcblxyXG4gICB9XHJcblxyXG4gICBvblNlbGwoZGF0YUluZGV4KXtcclxuICAgICAgaWYodGhpcy5wb3NpdGlvbiA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMucG9zaXRpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5vdXQoZGF0YUluZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbihkYXRhSW5kZXgsIC0xKTtcclxuICAgfVxyXG5cclxuICAgLy/lubPlgInlh7rloLRcclxuICAgb3V0KGRhdGFJbmRleCl7XHJcbiAgICAgIHRoaXMuYWRkVHJhZGUoe1xyXG4gICAgICAgICBpbmRleDogZGF0YUluZGV4LFxyXG4gICAgICAgICB2YWw6IDAsXHJcbiAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgIH0pOyAgXHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSAwOyAgICBcclxuICAgfVxyXG5cclxuICAgLy/pgLLloLRcclxuICAgaW4oZGF0YUluZGV4LCB2YWwpe1xyXG4gICAgICB0aGlzLmFkZFRyYWRlKHtcclxuICAgICAgICAgaW5kZXg6IGRhdGFJbmRleCxcclxuICAgICAgICAgdmFsOiB2YWwsXHJcbiAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnBvc2l0aW9uID0gdmFsOyAgICBcclxuICAgfVxyXG5cclxuICAgYWRkVHJhZGUodHJhZGUpe1xyXG4gICAgICB0aGlzLnRyYWRlcy5wdXNoKHRyYWRlKTtcclxuICAgfVxyXG5cclxuXHJcblxyXG4gICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYWRlTWFuYWdlcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/tradeManager.js\n");

/***/ })

})