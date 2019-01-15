webpackHotUpdate("admin",{

/***/ "./src/common/authService.js":
/*!***********************************!*\
  !*** ./src/common/authService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseService */ \"./src/common/baseService.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/common/config.js\");\n\n\nvar source = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__[\"API_URL\"], \"/auth\");\nvar AuthService = {\n  refreshToken: function refreshToken(credentials) {\n    var url = \"\".concat(source, \"/RefreshToken\");\n    var method = 'post';\n    return _baseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submit(method, url, credentials);\n  },\n  login: function login(credentials) {\n    var url = \"\".concat(source, \"/login\");\n    var method = 'post';\n    return _baseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].submit(method, url, credentials);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthService);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2F1dGhTZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hdXRoU2VydmljZS5qcz8yNzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU2VydmljZSBmcm9tICcuL2Jhc2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IHNvdXJjZSA9IGAke0FQSV9VUkx9L2F1dGhgO1xyXG5cclxuY29uc3QgQXV0aFNlcnZpY2UgPSB7XHJcbiAgIHJlZnJlc2hUb2tlbihjcmVkZW50aWFscyl7XHJcbiAgICAgIGxldCB1cmwgPSBgJHtzb3VyY2V9L1JlZnJlc2hUb2tlbmA7XHJcbiAgICAgIGxldCBtZXRob2QgPSAncG9zdCc7XHJcbiAgICAgIHJldHVybiBCYXNlU2VydmljZS5zdWJtaXQobWV0aG9kLCB1cmwsIGNyZWRlbnRpYWxzKTtcclxuICAgfSxcclxuICAgbG9naW4oY3JlZGVudGlhbHMpIHtcclxuICAgICAgbGV0IHVybCA9IGAke3NvdXJjZX0vbG9naW5gO1xyXG4gICAgICBsZXQgbWV0aG9kID0gJ3Bvc3QnO1xyXG4gICAgICByZXR1cm4gQmFzZVNlcnZpY2Uuc3VibWl0KG1ldGhvZCwgdXJsLCBjcmVkZW50aWFscyk7XHJcbiAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoU2VydmljZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/authService.js\n");

/***/ })

})