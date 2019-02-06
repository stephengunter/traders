webpackHotUpdate(9,{

/***/ "./src/models/strategy.js":
/*!********************************!*\
  !*** ./src/models/strategy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ \"./node_modules/core-js/modules/es6.array.find.js\");\n/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicator */ \"./src/models/indicator.js\");\n/* harmony import */ var _tradeManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tradeManager */ \"./src/models/tradeManager.js\");\n\n\n\n\n\n\n\nvar Strategy =\n/*#__PURE__*/\nfunction () {\n  function Strategy(data, indicators) {\n    var _this = this;\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Strategy);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"signals\", []);\n\n    Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, \"endSignalTime\", '');\n\n    this.tradeManager = new _tradeManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\n    for (var property in data) {\n      this[property] = data[property];\n    }\n\n    this.indicators = indicators.map(function (indicator) {\n      var settings = _this.getIndicatorSettings(indicator.id);\n\n      var beginTimeIndex = _this.tradeManager.getTimeIndex(indicator.begin);\n\n      return new _indicator__WEBPACK_IMPORTED_MODULE_4__[\"default\"](indicator, settings.arg, beginTimeIndex);\n    });\n  }\n\n  Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Strategy, [{\n    key: \"addDataList\",\n    value: function addDataList(dataList) {\n      for (var i = 0; i < dataList.length; i++) {\n        var data = dataList[i];\n        var indicator = this.getIndicator(data.indicator);\n        indicator.data.push(data);\n      }\n    }\n  }, {\n    key: \"getIndicator\",\n    value: function getIndicator(entity) {\n      return this.indicators.find(function (i) {\n        return i.entity == entity;\n      });\n    }\n  }, {\n    key: \"getMainIndicators\",\n    value: function getMainIndicators() {\n      return this.indicators.filter(function (item) {\n        return item.main;\n      });\n    }\n  }, {\n    key: \"getSubIndicators\",\n    value: function getSubIndicators() {\n      return this.indicators.filter(function (item) {\n        return !item.main;\n      });\n    }\n  }, {\n    key: \"getIndicatorSettings\",\n    value: function getIndicatorSettings(id) {\n      return this.indicatorSettings.find(function (item) {\n        return item.indicatorId == id;\n      });\n    }\n  }, {\n    key: \"calculate\",\n    value: function calculate(quotes) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        try {\n          for (var i = 0; i < _this2.indicators.length; i++) {\n            _this2.indicators[i].calculate(quotes);\n          }\n\n          for (var index = 0; index < quotes.length; index++) {\n            var dataList = [];\n\n            for (var j = 0; j < _this2.indicators.length; j++) {\n              var data = _this2.indicators[j].data[index];\n              dataList.push({\n                indicator: data.indicator,\n                signal: data.signal\n              });\n            }\n\n            _this2.calculateItem(index, dataList);\n          }\n\n          resolve(true);\n        } catch (error) {\n          reject(error);\n        }\n      });\n    }\n  }, {\n    key: \"calculateItem\",\n    value: function calculateItem(index, dataList) {\n      var signal = 0;\n      var sum = 0;\n\n      for (var i = 0; i < dataList.length; i++) {\n        sum += dataList[i].signal;\n      }\n\n      if (sum == dataList.length) signal = 1;else if (sum == 0 - dataList.length) signal = -1;\n      this.tradeManager.onSignal(signal, index);\n    }\n  }, {\n    key: \"getIndicatorSignal\",\n    value: function getIndicatorSignal(entity, dataIndex) {\n      var indicator = this.getIndicator(entity);\n      return indicator.data[dataIndex].signal;\n    }\n  }, {\n    key: \"getTrades\",\n    value: function getTrades() {\n      return this.tradeManager.getTrades();\n    }\n  }]);\n\n  return Strategy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strategy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3N0cmF0ZWd5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9zdHJhdGVneS5qcz9lZTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi9pbmRpY2F0b3InO1xyXG5pbXBvcnQgVHJhZGVNYW5hZ2VyIGZyb20gJy4vdHJhZGVNYW5hZ2VyJztcclxuXHJcbmNsYXNzIFN0cmF0ZWd5IHtcclxuXHJcbiAgIHNpZ25hbHMgPSBbXTtcclxuXHJcbiAgIGVuZFNpZ25hbFRpbWUgPSAnJztcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGRhdGEsIGluZGljYXRvcnMpIHtcclxuICAgICAgdGhpcy50cmFkZU1hbmFnZXIgPSBuZXcgVHJhZGVNYW5hZ2VyKCk7XHJcblxyXG4gICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBkYXRhKSB7XHJcbiAgICAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5kaWNhdG9ycyA9IGluZGljYXRvcnMubWFwKGluZGljYXRvciA9PiB7XHJcbiAgICAgICAgIGxldCBzZXR0aW5ncyA9IHRoaXMuZ2V0SW5kaWNhdG9yU2V0dGluZ3MoaW5kaWNhdG9yLmlkKTtcclxuICAgICAgICAgbGV0IGJlZ2luVGltZUluZGV4ID0gdGhpcy50cmFkZU1hbmFnZXIuZ2V0VGltZUluZGV4KGluZGljYXRvci5iZWdpbik7XHJcbiAgICAgICAgIHJldHVybiBuZXcgSW5kaWNhdG9yKGluZGljYXRvciwgc2V0dGluZ3MuYXJnLCBiZWdpblRpbWVJbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIGFkZERhdGFMaXN0KGRhdGFMaXN0KXtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICBsZXQgZGF0YSA9IGRhdGFMaXN0W2ldO1xyXG4gICAgICAgICBsZXQgaW5kaWNhdG9yID0gdGhpcy5nZXRJbmRpY2F0b3IoZGF0YS5pbmRpY2F0b3IpO1xyXG4gICAgICAgICBpbmRpY2F0b3IuZGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldEluZGljYXRvcihlbnRpdHkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JzLmZpbmQoaSA9PiBpLmVudGl0eSA9PSBlbnRpdHkpO1xyXG4gICB9XHJcblxyXG4gICBnZXRNYWluSW5kaWNhdG9ycygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JzLmZpbHRlcihpdGVtID0+IGl0ZW0ubWFpbik7XHJcbiAgIH1cclxuXHJcbiAgIGdldFN1YkluZGljYXRvcnMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNhdG9ycy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5tYWluKTtcclxuICAgfVxyXG4gICAgICBcclxuXHJcbiAgIGdldEluZGljYXRvclNldHRpbmdzKGlkKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaW5kaWNhdG9yU2V0dGluZ3MuZmluZChpdGVtID0+IGl0ZW0uaW5kaWNhdG9ySWQgPT0gaWQpO1xyXG4gICB9XHJcblxyXG4gICBjYWxjdWxhdGUocXVvdGVzKXtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgdHJ5IHsgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yc1tpXS5jYWxjdWxhdGUocXVvdGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHF1b3Rlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgbGV0IGRhdGFMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pbmRpY2F0b3JzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5pbmRpY2F0b3JzW2pdLmRhdGFbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICBkYXRhTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBkYXRhLmluZGljYXRvcixcclxuICAgICAgICAgICAgICAgICAgICAgc2lnbmFsIDogZGF0YS5zaWduYWxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlSXRlbShpbmRleCwgZGF0YUxpc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7IFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIGNhbGN1bGF0ZUl0ZW0oaW5kZXgsIGRhdGFMaXN0KXtcclxuICAgICAgbGV0IHNpZ25hbCA9IDA7XHJcbiAgICAgXHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIHN1bSArPSBkYXRhTGlzdFtpXS5zaWduYWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHN1bSA9PSBkYXRhTGlzdC5sZW5ndGgpIHNpZ25hbCA9IDE7XHJcbiAgICAgIGVsc2UgaWYoc3VtID09ICgwIC0gZGF0YUxpc3QubGVuZ3RoKSkgc2lnbmFsID0gLTE7XHJcblxyXG4gICAgICB0aGlzLnRyYWRlTWFuYWdlci5vblNpZ25hbChzaWduYWwsIGluZGV4KTtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIGdldEluZGljYXRvclNpZ25hbChlbnRpdHksIGRhdGFJbmRleCl7XHJcbiAgICAgIGxldCBpbmRpY2F0b3IgPSB0aGlzLmdldEluZGljYXRvcihlbnRpdHkpO1xyXG4gICAgICByZXR1cm4gaW5kaWNhdG9yLmRhdGFbZGF0YUluZGV4XS5zaWduYWw7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRyYWRlcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy50cmFkZU1hbmFnZXIuZ2V0VHJhZGVzKCk7ICAgICAgICBcclxuICAgfVxyXG5cclxuICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHJhdGVneTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/strategy.js\n");

/***/ })

})