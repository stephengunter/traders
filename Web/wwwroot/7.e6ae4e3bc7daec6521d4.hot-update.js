webpackHotUpdate(7,{

/***/ "./src/models/strategy.js":
/*!********************************!*\
  !*** ./src/models/strategy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicator */ \"./src/models/indicator.js\");\n/* harmony import */ var _tradeManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tradeManager */ \"./src/models/tradeManager.js\");\n\n\n\n\n\n\n\nvar Strategy =\n/*#__PURE__*/\nfunction () {\n  function Strategy(data, indicators) {\n    var _this = this;\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Strategy);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"signals\", []);\n\n    this.tradeManager = new _tradeManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n    for (var property in data) {\n      this[property] = data[property];\n    }\n\n    this.indicators = indicators.map(function (indicator) {\n      var settings = _this.getIndicatorSettings(indicator.id);\n\n      var beginTimeIndex = _this.tradeManager.getTimeIndex(indicator.begin);\n\n      return new _indicator__WEBPACK_IMPORTED_MODULE_4__[\"default\"](indicator, settings.arg, beginTimeIndex);\n    });\n    this.endSignalTime = this.tradeManager.getTimeIndex(133000);\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Strategy, [{\n    key: \"addDataList\",\n    value: function addDataList(dataList) {\n      for (var i = 0; i < dataList.length; i++) {\n        var data = dataList[i];\n        var indicator = this.getIndicator(data.indicator);\n        indicator.data.push(data);\n      }\n    }\n  }, {\n    key: \"getIndicator\",\n    value: function getIndicator(entity) {\n      return this.indicators.find(function (i) {\n        return i.entity == entity;\n      });\n    }\n  }, {\n    key: \"getMainIndicators\",\n    value: function getMainIndicators() {\n      return this.indicators.filter(function (item) {\n        return item.main;\n      });\n    }\n  }, {\n    key: \"getSubIndicators\",\n    value: function getSubIndicators() {\n      return this.indicators.filter(function (item) {\n        return !item.main;\n      });\n    }\n  }, {\n    key: \"getIndicatorSettings\",\n    value: function getIndicatorSettings(id) {\n      return this.indicatorSettings.find(function (item) {\n        return item.indicatorId == id;\n      });\n    }\n  }, {\n    key: \"calculate\",\n    value: function calculate(quotes) {\n      var _this2 = this;\n\n      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      return new Promise(function (resolve, reject) {\n        try {\n          for (var i = 0; i < _this2.indicators.length; i++) {\n            _this2.indicators[i].calculate(quotes, startIndex);\n          }\n\n          for (var index = startIndex; index < quotes.length; index++) {\n            var dataList = [];\n\n            for (var j = 0; j < _this2.indicators.length; j++) {\n              var data = _this2.indicators[j].data[index];\n              dataList.push({\n                indicator: data.indicator,\n                signal: data.signal\n              });\n            }\n\n            _this2.calculateItem(index, dataList, quotes[index]);\n          }\n\n          resolve(true);\n        } catch (error) {\n          reject(error);\n        }\n      });\n    }\n  }, {\n    key: \"calculateItem\",\n    value: function calculateItem(index, dataList, quote) {\n      console.log(quote);\n      var signal = 0;\n\n      if (index < this.endSignalTime) {\n        var sum = 0;\n\n        for (var i = 0; i < dataList.length; i++) {\n          sum += dataList[i].signal;\n        }\n\n        if (sum == dataList.length) signal = 1;else if (sum == 0 - dataList.length) signal = -1;\n      }\n\n      this.tradeManager.onSignal(signal, index);\n    }\n  }, {\n    key: \"getIndicatorSignal\",\n    value: function getIndicatorSignal(entity, dataIndex) {\n      var indicator = this.getIndicator(entity);\n      return indicator.data[dataIndex].signal;\n    }\n  }, {\n    key: \"getTrades\",\n    value: function getTrades() {\n      return this.tradeManager.getTrades();\n    }\n  }, {\n    key: \"getPosition\",\n    value: function getPosition() {\n      return this.tradeManager.getTrades();\n    }\n  }]);\n\n  return Strategy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strategy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3N0cmF0ZWd5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zdHJhdGVneS5qcz9lZTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InO1xyXG5pbXBvcnQgVHJhZGVNYW5hZ2VyIGZyb20gJy4vdHJhZGVNYW5hZ2VyJztcclxuXHJcbmNsYXNzIFN0cmF0ZWd5IHtcclxuXHJcbiAgIHNpZ25hbHMgPSBbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGRhdGEsIGluZGljYXRvcnMpIHtcclxuICAgICAgdGhpcy50cmFkZU1hbmFnZXIgPSBuZXcgVHJhZGVNYW5hZ2VyKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBkYXRhKSB7XHJcbiAgICAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5kaWNhdG9ycyA9IGluZGljYXRvcnMubWFwKGluZGljYXRvciA9PiB7XHJcbiAgICAgICAgIGxldCBzZXR0aW5ncyA9IHRoaXMuZ2V0SW5kaWNhdG9yU2V0dGluZ3MoaW5kaWNhdG9yLmlkKTtcclxuICAgICAgICAgbGV0IGJlZ2luVGltZUluZGV4ID0gdGhpcy50cmFkZU1hbmFnZXIuZ2V0VGltZUluZGV4KGluZGljYXRvci5iZWdpbik7XHJcbiAgICAgICAgIHJldHVybiBuZXcgSW5kaWNhdG9yKGluZGljYXRvciwgc2V0dGluZ3MuYXJnLCBiZWdpblRpbWVJbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5lbmRTaWduYWxUaW1lID0gdGhpcy50cmFkZU1hbmFnZXIuZ2V0VGltZUluZGV4KDEzMzAwMCk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZERhdGFMaXN0KGRhdGFMaXN0KXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgZGF0YSA9IGRhdGFMaXN0W2ldO1xyXG4gICAgICAgICBsZXQgaW5kaWNhdG9yID0gdGhpcy5nZXRJbmRpY2F0b3IoZGF0YS5pbmRpY2F0b3IpO1xyXG4gICAgICAgICBpbmRpY2F0b3IuZGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldEluZGljYXRvcihlbnRpdHkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JzLmZpbmQoaSA9PiBpLmVudGl0eSA9PSBlbnRpdHkpO1xyXG4gICB9XHJcblxyXG4gICBnZXRNYWluSW5kaWNhdG9ycygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JzLmZpbHRlcihpdGVtID0+IGl0ZW0ubWFpbik7XHJcbiAgIH1cclxuXHJcbiAgIGdldFN1YkluZGljYXRvcnMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNhdG9ycy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5tYWluKTtcclxuICAgfVxyXG4gICAgICBcclxuXHJcbiAgIGdldEluZGljYXRvclNldHRpbmdzKGlkKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNhdG9yU2V0dGluZ3MuZmluZChpdGVtID0+IGl0ZW0uaW5kaWNhdG9ySWQgPT0gaWQpO1xyXG4gICB9XHJcblxyXG4gICBjYWxjdWxhdGUocXVvdGVzLCBzdGFydEluZGV4ID0gMCl7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICB0aGlzLmluZGljYXRvcnNbaV0uY2FsY3VsYXRlKHF1b3Rlcywgc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gc3RhcnRJbmRleDsgaW5kZXggPCBxdW90ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBkYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaW5kaWNhdG9ycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuaW5kaWNhdG9yc1tqXS5kYXRhW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgZGF0YUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogZGF0YS5pbmRpY2F0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgIHNpZ25hbCA6IGRhdGEuc2lnbmFsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUl0ZW0oaW5kZXgsIGRhdGFMaXN0LCBxdW90ZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpOyBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICB9XHJcblxyXG4gICBjYWxjdWxhdGVJdGVtKGluZGV4LCBkYXRhTGlzdCwgcXVvdGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhxdW90ZSk7XHJcbiAgICAgIGxldCBzaWduYWwgPSAwO1xyXG4gICAgICBpZihpbmRleCA8IHRoaXMuZW5kU2lnbmFsVGltZSl7XHJcbiAgICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSArPSBkYXRhTGlzdFtpXS5zaWduYWw7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmKHN1bSA9PSBkYXRhTGlzdC5sZW5ndGgpIHNpZ25hbCA9IDE7XHJcbiAgICAgICAgIGVsc2UgaWYoc3VtID09ICgwIC0gZGF0YUxpc3QubGVuZ3RoKSkgc2lnbmFsID0gLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhZGVNYW5hZ2VyLm9uU2lnbmFsKHNpZ25hbCwgaW5kZXgpO1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgZ2V0SW5kaWNhdG9yU2lnbmFsKGVudGl0eSwgZGF0YUluZGV4KXtcclxuICAgICAgbGV0IGluZGljYXRvciA9IHRoaXMuZ2V0SW5kaWNhdG9yKGVudGl0eSk7XHJcbiAgICAgIHJldHVybiBpbmRpY2F0b3IuZGF0YVtkYXRhSW5kZXhdLnNpZ25hbDtcclxuICAgfVxyXG5cclxuICAgZ2V0VHJhZGVzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRyYWRlTWFuYWdlci5nZXRUcmFkZXMoKTsgICAgICAgIFxyXG4gICB9XHJcblxyXG4gICBnZXRQb3NpdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy50cmFkZU1hbmFnZXIuZ2V0VHJhZGVzKCk7ICAgICAgICBcclxuICAgfVxyXG5cclxuICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJhdGVneTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/strategy.js\n");

/***/ })

})