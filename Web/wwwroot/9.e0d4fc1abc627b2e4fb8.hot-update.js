webpackHotUpdate(9,{

/***/ "./src/models/tradeManager.js":
/*!************************************!*\
  !*** ./src/models/tradeManager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n\nvar TradeManager =\n/*#__PURE__*/\nfunction () {\n  function TradeManager() {\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TradeManager);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"times\", []);\n\n    this.trades = [];\n    this.position = 0;\n    var time = 84600;\n    var times = [];\n\n    while (time <= 90000) {\n      times.push(time);\n      time += 100;\n    }\n\n    for (var i = 0; i < dataList.length; i++) {}\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TradeManager, [{\n    key: \"getTrades\",\n    value: function getTrades() {\n      return this.trades;\n    }\n  }, {\n    key: \"onSignal\",\n    value: function onSignal(signal, dataIndex) {\n      if (signal > 0) {\n        this.onBuy(dataIndex);\n      } else if (signal < 0) {\n        this.onSell(dataIndex);\n      }\n    }\n  }, {\n    key: \"onBuy\",\n    value: function onBuy(dataIndex) {\n      if (this.position > 0) return;\n\n      if (this.position < 0) {\n        this.out(dataIndex);\n      }\n\n      this.in(dataIndex, 1);\n    }\n  }, {\n    key: \"onSell\",\n    value: function onSell(dataIndex) {\n      if (this.position < 0) return;\n\n      if (this.position > 0) {\n        this.out(dataIndex);\n      }\n\n      this.in(dataIndex, -1);\n    } //平倉出場\n\n  }, {\n    key: \"out\",\n    value: function out(dataIndex) {\n      this.addTrade({\n        index: dataIndex,\n        val: 0\n      });\n      this.position = 0;\n    } //進場\n\n  }, {\n    key: \"in\",\n    value: function _in(dataIndex, val) {\n      this.addTrade({\n        index: dataIndex,\n        val: val\n      });\n      this.position = val;\n    }\n  }, {\n    key: \"addTrade\",\n    value: function addTrade(trade) {\n      this.trades.push(trade);\n    }\n  }]);\n\n  return TradeManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TradeManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3RyYWRlTWFuYWdlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdHJhZGVNYW5hZ2VyLmpzPzJiMGIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVHJhZGVNYW5hZ2VyIHtcclxuICAgXHJcbiAgIHRpbWVzID0gW107XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy50cmFkZXMgPSBbXTtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XHJcblxyXG4gICAgICBsZXQgdGltZSA9IDg0NjAwO1xyXG4gICAgICBsZXQgdGltZXMgPSBbXTtcclxuICAgICAgd2hpbGUgKHRpbWUgPD0gOTAwMDApIHtcclxuICAgICAgICAgdGltZXMucHVzaCh0aW1lKTtcclxuICAgICAgICAgdGltZSArPSAxMDA7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgfVxyXG5cclxuICAgZ2V0VHJhZGVzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRyYWRlcztcclxuICAgfVxyXG5cclxuICAgb25TaWduYWwoc2lnbmFsLCBkYXRhSW5kZXgpe1xyXG4gICAgICBpZihzaWduYWwgPiAwKXtcclxuICAgICAgICAgdGhpcy5vbkJ1eShkYXRhSW5kZXgpO1xyXG4gICAgICB9ZWxzZSBpZihzaWduYWwgPCAwKXtcclxuICAgICAgICAgdGhpcy5vblNlbGwoZGF0YUluZGV4KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBvbkJ1eShkYXRhSW5kZXgpe1xyXG4gICAgICBpZih0aGlzLnBvc2l0aW9uID4gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodGhpcy5wb3NpdGlvbiA8IDApe1xyXG4gICAgICAgICB0aGlzLm91dChkYXRhSW5kZXgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmluKGRhdGFJbmRleCwgMSk7XHJcblxyXG4gICB9XHJcblxyXG4gICBvblNlbGwoZGF0YUluZGV4KXtcclxuICAgICAgaWYodGhpcy5wb3NpdGlvbiA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMucG9zaXRpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5vdXQoZGF0YUluZGV4KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbihkYXRhSW5kZXgsIC0xKTtcclxuICAgfVxyXG5cclxuICAgLy/lubPlgInlh7rloLRcclxuICAgb3V0KGRhdGFJbmRleCl7XHJcbiAgICAgIHRoaXMuYWRkVHJhZGUoe1xyXG4gICAgICAgICBpbmRleDogZGF0YUluZGV4LFxyXG4gICAgICAgICB2YWw6IDBcclxuICAgICAgfSk7ICBcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7ICAgIFxyXG4gICB9XHJcblxyXG4gICAvL+mAsuWgtFxyXG4gICBpbihkYXRhSW5kZXgsIHZhbCl7XHJcbiAgICAgIHRoaXMuYWRkVHJhZGUoe1xyXG4gICAgICAgICBpbmRleDogZGF0YUluZGV4LFxyXG4gICAgICAgICB2YWw6IHZhbFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHZhbDsgICAgXHJcbiAgIH1cclxuXHJcbiAgIGFkZFRyYWRlKHRyYWRlKXtcclxuICAgICAgdGhpcy50cmFkZXMucHVzaCh0cmFkZSk7XHJcbiAgIH1cclxuXHJcblxyXG5cclxuICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFkZU1hbmFnZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/tradeManager.js\n");

/***/ })

})