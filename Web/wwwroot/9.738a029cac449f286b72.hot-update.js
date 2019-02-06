webpackHotUpdate(9,{

/***/ "./src/models/strategy.js":
/*!********************************!*\
  !*** ./src/models/strategy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicator */ \"./src/models/indicator.js\");\n/* harmony import */ var _tradeManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tradeManager */ \"./src/models/tradeManager.js\");\n\n\n\n\n\n\n\nvar Strategy =\n/*#__PURE__*/\nfunction () {\n  function Strategy(data, indicators) {\n    var _this = this;\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Strategy);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"signals\", []);\n\n    this.tradeManager = new _tradeManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n    for (var property in data) {\n      this[property] = data[property];\n    }\n\n    this.indicators = indicators.map(function (indicator) {\n      var settings = _this.getIndicatorSettings(indicator.id);\n\n      var beginTimeIndex = _this.tradeManager.getTimeIndex(indicator.begin);\n\n      return new _indicator__WEBPACK_IMPORTED_MODULE_4__[\"default\"](indicator, settings.arg, beginTimeIndex);\n    });\n    this.endSignalTime = this.tradeManager.getTimeIndex(133000);\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Strategy, [{\n    key: \"addDataList\",\n    value: function addDataList(dataList) {\n      for (var i = 0; i < dataList.length; i++) {\n        var data = dataList[i];\n        var indicator = this.getIndicator(data.indicator);\n        indicator.data.push(data);\n      }\n    }\n  }, {\n    key: \"getIndicator\",\n    value: function getIndicator(entity) {\n      return this.indicators.find(function (i) {\n        return i.entity == entity;\n      });\n    }\n  }, {\n    key: \"getMainIndicators\",\n    value: function getMainIndicators() {\n      return this.indicators.filter(function (item) {\n        return item.main;\n      });\n    }\n  }, {\n    key: \"getSubIndicators\",\n    value: function getSubIndicators() {\n      return this.indicators.filter(function (item) {\n        return !item.main;\n      });\n    }\n  }, {\n    key: \"getIndicatorSettings\",\n    value: function getIndicatorSettings(id) {\n      return this.indicatorSettings.find(function (item) {\n        return item.indicatorId == id;\n      });\n    }\n  }, {\n    key: \"calculate\",\n    value: function calculate(quotes) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        try {\n          for (var i = 0; i < _this2.indicators.length; i++) {\n            _this2.indicators[i].calculate(quotes);\n          }\n\n          for (var index = 0; index < quotes.length; index++) {\n            var dataList = [];\n\n            for (var j = 0; j < _this2.indicators.length; j++) {\n              var data = _this2.indicators[j].data[index];\n              dataList.push({\n                indicator: data.indicator,\n                signal: data.signal\n              });\n            }\n\n            _this2.calculateItem(index, dataList);\n          }\n\n          resolve(true);\n        } catch (error) {\n          reject(error);\n        }\n      });\n    }\n  }, {\n    key: \"calculateItem\",\n    value: function calculateItem(index, dataList) {\n      var signal = 0;\n\n      if (index >= this.endSignalTime) {\n        var sum = 0;\n\n        for (var i = 0; i < dataList.length; i++) {\n          sum += dataList[i].signal;\n        }\n\n        if (sum == dataList.length) signal = 1;else if (sum == 0 - dataList.length) signal = -1;\n      }\n\n      this.tradeManager.onSignal(signal, index);\n    }\n  }, {\n    key: \"getIndicatorSignal\",\n    value: function getIndicatorSignal(entity, dataIndex) {\n      var indicator = this.getIndicator(entity);\n      return indicator.data[dataIndex].signal;\n    }\n  }, {\n    key: \"getTrades\",\n    value: function getTrades() {\n      return this.tradeManager.getTrades();\n    }\n  }]);\n\n  return Strategy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strategy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3N0cmF0ZWd5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zdHJhdGVneS5qcz9lZTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InO1xyXG5pbXBvcnQgVHJhZGVNYW5hZ2VyIGZyb20gJy4vdHJhZGVNYW5hZ2VyJztcclxuXHJcbmNsYXNzIFN0cmF0ZWd5IHtcclxuXHJcbiAgIHNpZ25hbHMgPSBbXTtcclxuXHJcbiAgIFxyXG5cclxuICAgY29uc3RydWN0b3IoZGF0YSwgaW5kaWNhdG9ycykge1xyXG4gICAgICB0aGlzLnRyYWRlTWFuYWdlciA9IG5ldyBUcmFkZU1hbmFnZXIoKTtcclxuXHJcbiAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIGRhdGEpIHtcclxuICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBkYXRhW3Byb3BlcnR5XTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbmRpY2F0b3JzID0gaW5kaWNhdG9ycy5tYXAoaW5kaWNhdG9yID0+IHtcclxuICAgICAgICAgbGV0IHNldHRpbmdzID0gdGhpcy5nZXRJbmRpY2F0b3JTZXR0aW5ncyhpbmRpY2F0b3IuaWQpO1xyXG4gICAgICAgICBsZXQgYmVnaW5UaW1lSW5kZXggPSB0aGlzLnRyYWRlTWFuYWdlci5nZXRUaW1lSW5kZXgoaW5kaWNhdG9yLmJlZ2luKTtcclxuICAgICAgICAgcmV0dXJuIG5ldyBJbmRpY2F0b3IoaW5kaWNhdG9yLCBzZXR0aW5ncy5hcmcsIGJlZ2luVGltZUluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmVuZFNpZ25hbFRpbWUgPSB0aGlzLnRyYWRlTWFuYWdlci5nZXRUaW1lSW5kZXgoMTMzMDAwKTtcclxuICAgfVxyXG5cclxuICAgYWRkRGF0YUxpc3QoZGF0YUxpc3Qpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIGxldCBkYXRhID0gZGF0YUxpc3RbaV07XHJcbiAgICAgICAgIGxldCBpbmRpY2F0b3IgPSB0aGlzLmdldEluZGljYXRvcihkYXRhLmluZGljYXRvcik7XHJcbiAgICAgICAgIGluZGljYXRvci5kYXRhLnB1c2goZGF0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0SW5kaWNhdG9yKGVudGl0eSl7XHJcbiAgICAgIHJldHVybiB0aGlzLmluZGljYXRvcnMuZmluZChpID0+IGkuZW50aXR5ID09IGVudGl0eSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldE1haW5JbmRpY2F0b3JzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmluZGljYXRvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5tYWluKTtcclxuICAgfVxyXG5cclxuICAgZ2V0U3ViSW5kaWNhdG9ycygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JzLmZpbHRlcihpdGVtID0+ICFpdGVtLm1haW4pO1xyXG4gICB9XHJcbiAgICAgIFxyXG5cclxuICAgZ2V0SW5kaWNhdG9yU2V0dGluZ3MoaWQpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JTZXR0aW5ncy5maW5kKGl0ZW0gPT4gaXRlbS5pbmRpY2F0b3JJZCA9PSBpZCk7XHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZShxdW90ZXMpe1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICB0cnkgeyBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JzW2ldLmNhbGN1bGF0ZShxdW90ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcXVvdGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICBsZXQgZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmluZGljYXRvcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmluZGljYXRvcnNbal0uZGF0YVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IGRhdGEuaW5kaWNhdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICBzaWduYWwgOiBkYXRhLnNpZ25hbFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVJdGVtKGluZGV4LCBkYXRhTGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgY2FsY3VsYXRlSXRlbShpbmRleCwgZGF0YUxpc3Qpe1xyXG4gICAgICBsZXQgc2lnbmFsID0gMDtcclxuICAgICAgaWYoaW5kZXggPj0gdGhpcy5lbmRTaWduYWxUaW1lKXtcclxuICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgc3VtICs9IGRhdGFMaXN0W2ldLnNpZ25hbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoc3VtID09IGRhdGFMaXN0Lmxlbmd0aCkgc2lnbmFsID0gMTtcclxuICAgICAgZWxzZSBpZihzdW0gPT0gKDAgLSBkYXRhTGlzdC5sZW5ndGgpKSBzaWduYWwgPSAtMTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgIHRoaXMudHJhZGVNYW5hZ2VyLm9uU2lnbmFsKHNpZ25hbCwgaW5kZXgpO1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgZ2V0SW5kaWNhdG9yU2lnbmFsKGVudGl0eSwgZGF0YUluZGV4KXtcclxuICAgICAgbGV0IGluZGljYXRvciA9IHRoaXMuZ2V0SW5kaWNhdG9yKGVudGl0eSk7XHJcbiAgICAgIHJldHVybiBpbmRpY2F0b3IuZGF0YVtkYXRhSW5kZXhdLnNpZ25hbDtcclxuICAgfVxyXG5cclxuICAgZ2V0VHJhZGVzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRyYWRlTWFuYWdlci5nZXRUcmFkZXMoKTsgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmF0ZWd5OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQU1BO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/strategy.js\n");

/***/ })

})