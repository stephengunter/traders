webpackHotUpdate("index",{

/***/ "./src/client/services/auth.js":
false,

/***/ "./src/client/store/auth.module.js":
/*!*****************************************!*\
  !*** ./src/client/store/auth.module.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.sub */ \"./node_modules/core-js/modules/es6.string.sub.js\");\n/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_baseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/baseService */ \"./src/common/baseService.js\");\n/* harmony import */ var _common_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/jwt */ \"./src/common/jwt.js\");\n/* harmony import */ var _common_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/errors */ \"./src/common/errors.js\");\n/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/helper */ \"./src/common/helper.js\");\n/* harmony import */ var _common_authService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/authService */ \"./src/common/authService.js\");\n/* harmony import */ var _common_authService__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_authService__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_oAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/oAuth */ \"./src/client/services/oAuth.js\");\n/* harmony import */ var _services_account__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/account */ \"./src/client/services/account.js\");\n/* harmony import */ var _services_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/password */ \"./src/client/services/password.js\");\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions.type */ \"./src/client/store/actions.type.js\");\n/* harmony import */ var _mutations_type__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mutations.type */ \"./src/client/store/mutations.type.js\");\n\n\n\nvar _actions, _mutations;\n\n\n\n\n\n\n\n\n\n\n\n\nvar state = {\n  errors: new _common_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"](),\n  user: {},\n  isAuthenticated: !!_common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getToken()\n};\nvar getters = {\n  currentUser: function currentUser(state) {\n    return state.user;\n  },\n  isAuthenticated: function isAuthenticated(state) {\n    return state.isAuthenticated;\n  }\n};\nvar actions = (_actions = {}, Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"LOGIN\"], function (context, credentials) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve) {\n    _common_authService__WEBPACK_IMPORTED_MODULE_7___default.a.login(credentials).then(function (model) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_AUTH\"], {\n        token: model.accessToken.token,\n        refreshToken: model.refreshToken\n      });\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      resolve(1);\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        if (errorData.hasOwnProperty('email_confirm')) {\n          resolve(0);\n        } else {\n          context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n        }\n      } else {\n        Bus.$emit('errors', error);\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"FB_LOGIN\"], function (context, token) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve) {\n    _services_oAuth__WEBPACK_IMPORTED_MODULE_8__[\"default\"].fbLogin(token).then(function (model) {\n      if (model.accessToken) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_AUTH\"], {\n          token: model.accessToken.token,\n          refreshToken: model.refreshToken\n        });\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n        resolve(null);\n      } else {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n        resolve(model);\n      }\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n      } else {\n        Bus.$emit('errors', error);\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"GOOGLE_LOGIN\"], function (context, token) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve) {\n    _services_oAuth__WEBPACK_IMPORTED_MODULE_8__[\"default\"].googleLogin(token).then(function (model) {\n      if (model.accessToken) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_AUTH\"], {\n          token: model.accessToken.token,\n          refreshToken: model.refreshToken\n        });\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n        resolve(null);\n      } else {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n        resolve(model);\n      }\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n      } else {\n        Bus.$emit('errors', error);\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"OAUTH_REGISTER\"], function (context, user) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve) {\n    _services_oAuth__WEBPACK_IMPORTED_MODULE_8__[\"default\"].register(user).then(function (model) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_AUTH\"], {\n        token: model.accessToken.token,\n        refreshToken: model.refreshToken\n      });\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      resolve(1);\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      Bus.$emit('errors', error);\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"LOGOUT\"], function (context) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"PURGE_AUTH\"]);\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"REGISTER\"], function (context, user) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve) {\n    _services_account__WEBPACK_IMPORTED_MODULE_9__[\"default\"].register(user).then(function () {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      resolve(true);\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n      } else {\n        Bus.$emit('errors', error);\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"SEND_CONFIRM_EMAIL\"], function (context, email) {\n  return new Promise(function (resolve) {\n    _services_account__WEBPACK_IMPORTED_MODULE_9__[\"default\"].sendConfirmEmail(email).then(function () {\n      resolve(true);\n    }).catch(function (error) {\n      Bus.$emit('errors', error);\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"CONFIRM_EMAIL\"], function (context, user) {\n  return new Promise(function (resolve) {\n    _services_account__WEBPACK_IMPORTED_MODULE_9__[\"default\"].confirmEmail(user).then(function () {\n      resolve(true);\n    }).catch(function (error) {\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        resolve(false);\n      } else {\n        Bus.$emit('errors', error);\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"CHECK_AUTH\"], function (context) {\n  return new Promise(function (resolve) {\n    var accessToken = _common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getToken();\n\n    if (accessToken) {\n      _common_baseService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setHeader();\n      var claims = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(accessToken);\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_USER\"], {\n        id: claims.id,\n        name: claims.sub\n      });\n      resolve(true);\n    } else {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"PURGE_AUTH\"]);\n      resolve(false);\n    }\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"REFRESH_TOKEN\"], function (context) {\n  return new Promise(function (resolve) {\n    var accessToken = _common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getToken();\n    var refreshToken = _common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getRefreshToken();\n\n    if (accessToken && refreshToken) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n      _common_authService__WEBPACK_IMPORTED_MODULE_7___default.a.refreshToken({\n        accessToken: accessToken,\n        refreshToken: refreshToken\n      }).then(function (model) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_AUTH\"], {\n          token: model.accessToken.token,\n          refreshToken: model.refreshToken\n        });\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n        resolve(true);\n      }).catch(function (err) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"PURGE_AUTH\"]);\n        resolve(false);\n      });\n    } else {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"PURGE_AUTH\"]);\n      resolve(false);\n    }\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"FORGOT_PASSWORD\"], function (context, user) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve, reject) {\n    _services_password__WEBPACK_IMPORTED_MODULE_10__[\"default\"].forgot(user).then(function () {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      resolve(true);\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n      } else {\n        Bus.$emit('errors', error);\n        reject();\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"RESET_PASSWORD\"], function (context, user) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve, reject) {\n    _services_password__WEBPACK_IMPORTED_MODULE_10__[\"default\"].reset(user).then(function () {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      resolve(true);\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n      } else {\n        Bus.$emit('errors', error);\n        reject();\n      }\n    });\n  });\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_actions, _actions_type__WEBPACK_IMPORTED_MODULE_11__[\"CHANGE_PASSWORD\"], function (context, user) {\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"]);\n  context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], true);\n  return new Promise(function (resolve, reject) {\n    _services_password__WEBPACK_IMPORTED_MODULE_10__[\"default\"].change(user).then(function () {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      resolve(true);\n    }).catch(function (error) {\n      context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_LOADING\"], false);\n      var errorData = _common_helper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].resolveErrorData(error);\n\n      if (errorData) {\n        context.commit(_mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], errorData);\n      } else {\n        Bus.$emit('errors', error);\n        reject();\n      }\n    });\n  });\n}), _actions);\nvar mutations = (_mutations = {}, Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mutations, _mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_ERROR\"], function (state, errors) {\n  state.errors.record(errors);\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mutations, _mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"CLEAR_ERROR\"], function (state) {\n  state.errors.clear();\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mutations, _mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_USER\"], function (state, user) {\n  state.user = user;\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mutations, _mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"SET_AUTH\"], function (state, model) {\n  _common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].saveToken(model.token, model.refreshToken);\n  var claims = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(model.token);\n  state.user = {\n    id: claims.id,\n    name: claims.sub\n  };\n  state.isAuthenticated = true;\n  state.errors = new _common_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n}), Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_mutations, _mutations_type__WEBPACK_IMPORTED_MODULE_12__[\"PURGE_AUTH\"], function (state) {\n  state.isAuthenticated = false;\n  state.user = {};\n  state.errors = new _common_errors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n  _common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].destroyToken();\n}), _mutations);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  actions: actions,\n  mutations: mutations,\n  getters: getters\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3N0b3JlL2F1dGgubW9kdWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9zdG9yZS9hdXRoLm1vZHVsZS5qcz9mZjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5pbXBvcnQgQmFzZVNlcnZpY2UgZnJvbSAnQC9jb21tb24vYmFzZVNlcnZpY2UnO1xyXG5pbXBvcnQgSnd0U2VydmljZSBmcm9tICdAL2NvbW1vbi9qd3QnO1xyXG5pbXBvcnQgRXJyb3JzIGZyb20gJ0AvY29tbW9uL2Vycm9ycyc7XHJcbmltcG9ydCBIZWxwZXIgZnJvbSAnQC9jb21tb24vaGVscGVyJztcclxuXHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tICdAL2NvbW1vbi9hdXRoU2VydmljZSc7XHJcbmltcG9ydCBPQXV0aFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvb0F1dGgnO1xyXG5pbXBvcnQgQWNjb3VudFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYWNjb3VudCc7XHJcbmltcG9ydCBQYXNzd29yZFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvcGFzc3dvcmQnO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgIEZCX0xPR0lOLFxyXG4gICBHT09HTEVfTE9HSU4sXHJcbiAgIExPR0lOLFxyXG4gICBMT0dPVVQsXHJcbiAgIE9BVVRIX1JFR0lTVEVSLFxyXG4gICBSRUdJU1RFUixcclxuICAgU0VORF9DT05GSVJNX0VNQUlMLFxyXG4gICBDT05GSVJNX0VNQUlMLFxyXG4gICBDSEVDS19BVVRILFxyXG4gICBGT1JHT1RfUEFTU1dPUkQsXHJcbiAgIFJFU0VUX1BBU1NXT1JELFxyXG4gICBDSEFOR0VfUEFTU1dPUkQsXHJcbiAgIFJFRlJFU0hfVE9LRU5cclxufSBmcm9tICcuL2FjdGlvbnMudHlwZSc7XHJcblxyXG5pbXBvcnQgeyBTRVRfQVVUSCwgUFVSR0VfQVVUSCwgU0VUX1VTRVIsIFxyXG4gICBTRVRfRVJST1IsIENMRUFSX0VSUk9SLCBTRVRfTE9BRElORyBcclxufSBmcm9tICcuL211dGF0aW9ucy50eXBlJztcclxuXHJcbiBcclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgIGVycm9yczogbmV3IEVycm9ycygpLFxyXG4gICB1c2VyOiB7fSxcclxuICAgaXNBdXRoZW50aWNhdGVkOiAhIUp3dFNlcnZpY2UuZ2V0VG9rZW4oKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0dGVycyA9IHtcclxuICAgY3VycmVudFVzZXIoc3RhdGUpIHtcclxuICAgICByZXR1cm4gc3RhdGUudXNlcjtcclxuICAgfSxcclxuICAgaXNBdXRoZW50aWNhdGVkKHN0YXRlKSB7XHJcbiAgICAgcmV0dXJuIHN0YXRlLmlzQXV0aGVudGljYXRlZDtcclxuICAgfVxyXG59O1xyXG5cclxuY29uc3QgYWN0aW9ucyA9IHtcclxuICAgW0xPR0lOXShjb250ZXh0LCBjcmVkZW50aWFscykge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdChDTEVBUl9FUlJPUik7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKGNyZWRlbnRpYWxzKVxyXG4gICAgICAgICAudGhlbihtb2RlbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9BVVRILCB7XHJcbiAgICAgICAgICAgICAgIHRva2VuOiBtb2RlbC5hY2Nlc3NUb2tlbi50b2tlbixcclxuICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBtb2RlbC5yZWZyZXNoVG9rZW5cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlKDEpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgIGxldCBlcnJvckRhdGEgPSBIZWxwZXIucmVzb2x2ZUVycm9yRGF0YShlcnJvcik7XHJcbiAgICAgICAgICAgIGlmKGVycm9yRGF0YSl7XHJcbiAgICAgICAgICAgICAgIGlmKGVycm9yRGF0YS5oYXNPd25Qcm9wZXJ0eSgnZW1haWxfY29uZmlybScpKXtcclxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgwKTtcclxuICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9FUlJPUiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgQnVzLiRlbWl0KCdlcnJvcnMnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgfSk7ICAgICBcclxuICAgfSxcclxuICAgW0ZCX0xPR0lOXShjb250ZXh0LCB0b2tlbikge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdChDTEVBUl9FUlJPUik7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgIE9BdXRoU2VydmljZS5mYkxvZ2luKHRva2VuKVxyXG4gICAgICAgICAudGhlbihtb2RlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZGVsLmFjY2Vzc1Rva2VuKXtcclxuICAgICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0FVVEgsIHtcclxuICAgICAgICAgICAgICAgICAgdG9rZW46IG1vZGVsLmFjY2Vzc1Rva2VuLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IG1vZGVsLnJlZnJlc2hUb2tlblxyXG4gICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKG1vZGVsKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7ICAgXHJcbiAgICAgICAgICAgIGxldCBlcnJvckRhdGEgPSBIZWxwZXIucmVzb2x2ZUVycm9yRGF0YShlcnJvcik7XHJcbiAgICAgICAgICAgIGlmKGVycm9yRGF0YSl7XHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9FUlJPUiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIEJ1cy4kZW1pdCgnZXJyb3JzJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pXHJcbiAgICAgIH0pOyAgICAgXHJcbiAgIH0sXHJcbiAgIFtHT09HTEVfTE9HSU5dKGNvbnRleHQsIHRva2VuKSB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KENMRUFSX0VSUk9SKTtcclxuICAgICAgY29udGV4dC5jb21taXQoU0VUX0xPQURJTkcsIHRydWUpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgT0F1dGhTZXJ2aWNlLmdvb2dsZUxvZ2luKHRva2VuKVxyXG4gICAgICAgICAudGhlbihtb2RlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1vZGVsLmFjY2Vzc1Rva2VuKXtcclxuICAgICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0FVVEgsIHtcclxuICAgICAgICAgICAgICAgICAgdG9rZW46IG1vZGVsLmFjY2Vzc1Rva2VuLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IG1vZGVsLnJlZnJlc2hUb2tlblxyXG4gICAgICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKG1vZGVsKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7ICBcclxuICAgICAgICAgICAgbGV0IGVycm9yRGF0YSA9IEhlbHBlci5yZXNvbHZlRXJyb3JEYXRhKGVycm9yKTtcclxuICAgICAgICAgICAgaWYoZXJyb3JEYXRhKXtcclxuICAgICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0VSUk9SLCBlcnJvckRhdGEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgQnVzLiRlbWl0KCdlcnJvcnMnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgfSk7ICAgICBcclxuICAgfSxcclxuICAgW09BVVRIX1JFR0lTVEVSXShjb250ZXh0LCB1c2VyKSB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KENMRUFSX0VSUk9SKTtcclxuICAgICAgY29udGV4dC5jb21taXQoU0VUX0xPQURJTkcsIHRydWUpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgT0F1dGhTZXJ2aWNlLnJlZ2lzdGVyKHVzZXIpXHJcbiAgICAgICAgIC50aGVuKG1vZGVsID0+IHtcclxuICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0FVVEgsIHtcclxuICAgICAgICAgICAgICAgdG9rZW46IG1vZGVsLmFjY2Vzc1Rva2VuLnRva2VuLFxyXG4gICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IG1vZGVsLnJlZnJlc2hUb2tlblxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoMSk7XHJcbiAgICAgICAgIH0pXHJcbiAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7ICAgXHJcbiAgICAgICAgICAgIEJ1cy4kZW1pdCgnZXJyb3JzJywgZXJyb3IpO1xyXG4gICAgICAgICB9KVxyXG4gICAgICB9KTsgICAgIFxyXG4gICB9LFxyXG4gICBbTE9HT1VUXShjb250ZXh0KSB7XHJcbiAgICAgXHRjb250ZXh0LmNvbW1pdChQVVJHRV9BVVRIKTtcclxuICAgfSxcclxuICAgW1JFR0lTVEVSXShjb250ZXh0LCB1c2VyKSB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KENMRUFSX0VSUk9SKTtcclxuICAgICAgY29udGV4dC5jb21taXQoU0VUX0xPQURJTkcsIHRydWUpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgQWNjb3VudFNlcnZpY2UucmVnaXN0ZXIodXNlcilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpOyAgIFxyXG4gICAgICAgICAgICAgICBsZXQgZXJyb3JEYXRhID0gSGVscGVyLnJlc29sdmVFcnJvckRhdGEoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICBpZihlcnJvckRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfRVJST1IsIGVycm9yRGF0YSk7XHJcbiAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBCdXMuJGVtaXQoJ2Vycm9ycycsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgfSxcclxuICAgW1NFTkRfQ09ORklSTV9FTUFJTF0oY29udGV4dCwgZW1haWwpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgIEFjY291bnRTZXJ2aWNlLnNlbmRDb25maXJtRW1haWwoZW1haWwpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgQnVzLiRlbWl0KCdlcnJvcnMnLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICB9LFxyXG4gICBbQ09ORklSTV9FTUFJTF0oY29udGV4dCwgdXNlcikge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgQWNjb3VudFNlcnZpY2UuY29uZmlybUVtYWlsKHVzZXIpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IGVycm9yRGF0YSA9IEhlbHBlci5yZXNvbHZlRXJyb3JEYXRhKGVycm9yKTtcclxuICAgICAgICAgICAgICAgaWYoZXJyb3JEYXRhKXtcclxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICBCdXMuJGVtaXQoJ2Vycm9ycycsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgfSxcclxuICAgW0NIRUNLX0FVVEhdKGNvbnRleHQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IEp3dFNlcnZpY2UuZ2V0VG9rZW4oKTtcclxuICAgICAgICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgICAgIEJhc2VTZXJ2aWNlLnNldEhlYWRlcigpO1xyXG4gICAgICAgICAgICBsZXQgY2xhaW1zID0gand0RGVjb2RlKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX1VTRVIsIHtcclxuICAgICAgICAgICAgICAgaWQ6IGNsYWltcy5pZCxcclxuICAgICAgICAgICAgICAgbmFtZTogY2xhaW1zLnN1YlxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFBVUkdFX0FVVEgpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfSxcclxuICAgW1JFRlJFU0hfVE9LRU5dKGNvbnRleHQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IEp3dFNlcnZpY2UuZ2V0VG9rZW4oKTtcclxuICAgICAgICAgbGV0IHJlZnJlc2hUb2tlbiA9IEp3dFNlcnZpY2UuZ2V0UmVmcmVzaFRva2VuKCk7XHJcbiAgICAgICAgIGlmIChhY2Nlc3NUb2tlbiAmJiByZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0xPQURJTkcsIHRydWUpO1xyXG4gICAgICAgICAgICBBdXRoU2VydmljZS5yZWZyZXNoVG9rZW4oeyBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuIH0pXHJcbiAgICAgICAgICAgIC50aGVuKG1vZGVsID0+IHtcclxuICAgICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0FVVEgsIHtcclxuICAgICAgICAgICAgICAgICAgdG9rZW46IG1vZGVsLmFjY2Vzc1Rva2VuLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IG1vZGVsLnJlZnJlc2hUb2tlblxyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgY29udGV4dC5jb21taXQoU0VUX0xPQURJTkcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFBVUkdFX0FVVEgpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdChQVVJHRV9BVVRIKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH0sXHJcbiAgIFtGT1JHT1RfUEFTU1dPUkRdKGNvbnRleHQsIHVzZXIpIHtcclxuICAgICAgY29udGV4dC5jb21taXQoQ0xFQVJfRVJST1IpO1xyXG4gICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgIFBhc3N3b3JkU2VydmljZS5mb3Jnb3QodXNlcilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgICAgIGxldCBlcnJvckRhdGEgPSBIZWxwZXIucmVzb2x2ZUVycm9yRGF0YShlcnJvcik7XHJcbiAgICAgICAgICAgICAgIGlmKGVycm9yRGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9FUlJPUiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIEJ1cy4kZW1pdCgnZXJyb3JzJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgfSxcclxuICAgW1JFU0VUX1BBU1NXT1JEXShjb250ZXh0LCB1c2VyKSB7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KENMRUFSX0VSUk9SKTtcclxuICAgICAgY29udGV4dC5jb21taXQoU0VUX0xPQURJTkcsIHRydWUpO1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICBQYXNzd29yZFNlcnZpY2UucmVzZXQodXNlcilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICBjb250ZXh0LmNvbW1pdChTRVRfTE9BRElORywgZmFsc2UpOyAgXHJcbiAgICAgICAgICAgICAgIGxldCBlcnJvckRhdGEgPSBIZWxwZXIucmVzb2x2ZUVycm9yRGF0YShlcnJvcik7XHJcbiAgICAgICAgICAgICAgIGlmKGVycm9yRGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9FUlJPUiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIEJ1cy4kZW1pdCgnZXJyb3JzJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgfSxcclxuICAgW0NIQU5HRV9QQVNTV09SRF0oY29udGV4dCwgdXNlcikge1xyXG4gICAgICBjb250ZXh0LmNvbW1pdChDTEVBUl9FUlJPUik7XHJcbiAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgUGFzc3dvcmRTZXJ2aWNlLmNoYW5nZSh1c2VyKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9MT0FESU5HLCBmYWxzZSk7ICAgXHJcbiAgICAgICAgICAgICAgIGxldCBlcnJvckRhdGEgPSBIZWxwZXIucmVzb2x2ZUVycm9yRGF0YShlcnJvcik7XHJcbiAgICAgICAgICAgICAgIGlmKGVycm9yRGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KFNFVF9FUlJPUiwgZXJyb3JEYXRhKTtcclxuICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIEJ1cy4kZW1pdCgnZXJyb3JzJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IG11dGF0aW9ucyA9IHtcclxuICAgW1NFVF9FUlJPUl0oc3RhdGUsIGVycm9ycykge1xyXG4gICAgICBzdGF0ZS5lcnJvcnMucmVjb3JkKGVycm9ycyk7XHJcbiAgIH0sXHJcbiAgIFtDTEVBUl9FUlJPUl0oc3RhdGUpIHtcclxuICAgICAgc3RhdGUuZXJyb3JzLmNsZWFyKCk7ICAgXHJcbiAgIH0sXHJcbiAgIFtTRVRfVVNFUl0oc3RhdGUsIHVzZXIpIHtcclxuICAgICAgc3RhdGUudXNlciA9IHVzZXI7XHJcbiAgIH0sXHJcbiAgIFtTRVRfQVVUSF0oc3RhdGUsIG1vZGVsKSB7XHJcbiAgICAgIFxyXG4gICAgICBKd3RTZXJ2aWNlLnNhdmVUb2tlbihtb2RlbC50b2tlbiwgbW9kZWwucmVmcmVzaFRva2VuKTtcclxuXHJcbiAgICAgIGxldCBjbGFpbXMgPSBqd3REZWNvZGUobW9kZWwudG9rZW4pO1xyXG4gICAgICBzdGF0ZS51c2VyID0ge1xyXG4gICAgICAgICBpZDogY2xhaW1zLmlkLFxyXG4gICAgICAgICBuYW1lOiBjbGFpbXMuc3ViXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XHJcbiAgICAgIFxyXG4gICB9LFxyXG4gICBbUFVSR0VfQVVUSF0oc3RhdGUpIHtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSB7fTtcclxuICAgIFxyXG4gICAgICBzdGF0ZS5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XHJcbiAgICAgIEp3dFNlcnZpY2UuZGVzdHJveVRva2VuKCk7XHJcbiAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgc3RhdGUsXHJcbiAgIGFjdGlvbnMsXHJcbiAgIG11dGF0aW9ucyxcclxuICAgZ2V0dGVyc1xyXG59O1xyXG4gIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFnQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/store/auth.module.js\n");

/***/ }),

/***/ "./src/common/config.js":
false

})