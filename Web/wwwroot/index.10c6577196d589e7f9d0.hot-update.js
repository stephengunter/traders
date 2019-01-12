webpackHotUpdate("index",{

/***/ "./src/common/baseService.js":
/*!***********************************!*\
  !*** ./src/common/baseService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ \"./src/common/jwt.js\");\n/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/helper */ \"./src/common/helper.js\");\n\n\n\nvar BaseService = {\n  setHeader: function setHeader() {\n    var token = _jwt__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getToken();\n    if (!token) token = '';\n    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = \"Bearer \".concat(token);\n  },\n  fetch: function fetch(url, params) {\n    if (params) url = _common_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].buildQuery(url, params);\n    return new Promise(function (resolve, reject) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {\n        resolve(response.data);\n      }).catch(function (error) {\n        reject(error);\n      });\n    });\n  },\n  submit: function submit(requestType, url, data) {\n    return new Promise(function (resolve, reject) {\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a[requestType](url, data).then(function (response) {\n        resolve(response.data);\n      }).catch(function (error) {\n        reject(error.response);\n      });\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseService);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2Jhc2VTZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9iYXNlU2VydmljZS5qcz9lZTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBKd3RTZXJ2aWNlIGZyb20gJy4vand0JztcclxuaW1wb3J0IEhlbHBlciBmcm9tICdAL2NvbW1vbi9oZWxwZXInO1xyXG5cclxuY29uc3QgQmFzZVNlcnZpY2UgPSB7XHRcclxuXHRzZXRIZWFkZXIoKSB7XHJcblx0XHRsZXQgdG9rZW4gPSBKd3RTZXJ2aWNlLmdldFRva2VuKCk7XHJcblx0XHRpZighdG9rZW4pIHRva2VuID0gJyc7XHJcblx0XHRheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHRcdFxyXG5cdH0sXHJcbiAgIGZldGNoKHVybCwgcGFyYW1zKXtcclxuXHRcdGlmKHBhcmFtcykgdXJsID0gSGVscGVyLmJ1aWxkUXVlcnkodXJsLCBwYXJhbXMpO1xyXG4gICAgIFxyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRheGlvcy5nZXQodXJsKVxyXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcclxuXHRcdFx0XHR9KVxyXG4gICAgICB9KVxyXG4gICB9LFxyXG4gICBcclxuICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwsIGRhdGEpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0YXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgZGF0YSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNhdGNoKGVycm9yID0+IHtcclxuXHRcdFx0XHRcdHJlamVjdChlcnJvci5yZXNwb25zZSk7XHJcblx0XHRcdFx0fSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlU2VydmljZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQWtDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/baseService.js\n");

/***/ })

})