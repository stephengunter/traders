(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/views/Auth.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/views/Auth.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions.type */ \"./src/client/store/actions.type.js\");\n/* harmony import */ var _common_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/authService */ \"./src/common/authService.js\");\n/* harmony import */ var _common_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/jwt */ \"./src/common/jwt.js\");\n\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AuthView',\n  data: function data() {\n    return {\n      returnUrl: ''\n    };\n  },\n  computed: Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])(['isAuthenticated'])),\n  beforeMount: function beforeMount() {\n    var _this = this;\n\n    if (this.$route.query && this.$route.query.returnUrl) {\n      this.returnUrl = this.$route.query.returnUrl;\n    }\n\n    var tokenStatus = _common_jwt__WEBPACK_IMPORTED_MODULE_4__[\"default\"].tokenStatus();\n\n    if (tokenStatus === -1) {\n      //token過期\n      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_2__[\"REFRESH_TOKEN\"]).then(function (token) {\n        if (token) {\n          _this.redirect();\n        } else {\n          //REFRESH_TOKEN 失敗\n          _this.redirectToLogin();\n        }\n      });\n    } else if (tokenStatus === 0) {\n      //token 即將到期\n      this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_2__[\"REFRESH_TOKEN\"]).then(function (token) {\n        if (token) {\n          _this.redirect();\n        } else {\n          //REFRESH_TOKEN 失敗\n          _this.redirectToLogin();\n        }\n      });\n    } else {\n      //token正常\n      this.redirect();\n    }\n  },\n  methods: {\n    redirect: function redirect() {\n      if (this.returnUrl) this.$router.push({\n        path: this.returnUrl\n      });else this.$router.push({\n        name: 'home'\n      });\n    },\n    redirectToLogin: function redirectToLogin() {\n      if (this.returnUrl) {\n        this.$router.push({\n          path: '/login',\n          query: {\n            returnUrl: this.returnUrl\n          }\n        });\n      } else this.$router.push({\n        path: '/login'\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvY2xpZW50L3ZpZXdzL0F1dGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9BdXRoLnZ1ZT83ZGYxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICBcclxuICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XHJcblxyXG5pbXBvcnQgeyBSRUZSRVNIX1RPS0VOIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy50eXBlJztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJ0AvY29tbW9uL2F1dGhTZXJ2aWNlJztcclxuaW1wb3J0IEp3dFNlcnZpY2UgZnJvbSAnQC9jb21tb24vand0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgbmFtZTogJ0F1dGhWaWV3JyxcclxuICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgIHJldHVyblVybDogJydcclxuICAgICAgfVxyXG4gICB9LFxyXG4gICBjb21wdXRlZDoge1xyXG4gICAgICAuLi5tYXBHZXR0ZXJzKFsnaXNBdXRoZW50aWNhdGVkJ10pICAgICAgXHJcbiAgIH0sXHJcbiAgIGJlZm9yZU1vdW50KCl7XHJcbiAgICAgIGlmKHRoaXMuJHJvdXRlLnF1ZXJ5ICYmIHRoaXMuJHJvdXRlLnF1ZXJ5LnJldHVyblVybCl7XHJcbiAgICAgICAgIHRoaXMucmV0dXJuVXJsID0gdGhpcy4kcm91dGUucXVlcnkucmV0dXJuVXJsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdG9rZW5TdGF0dXMgPSBKd3RTZXJ2aWNlLnRva2VuU3RhdHVzKCk7XHJcbiAgICAgIGlmKHRva2VuU3RhdHVzID09PSAtMSl7XHJcbiAgICAgICAgIC8vdG9rZW7pgY7mnJ9cclxuICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goUkVGUkVTSF9UT0tFTikudGhlbih0b2tlbiA9PiB7XHRcclxuICAgICAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAvL1JFRlJFU0hfVE9LRU4g5aSx5pWXXHJcbiAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb0xvZ2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSlcdFxyXG4gICAgICB9ZWxzZSBpZih0b2tlblN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgICAvL3Rva2VuIOWNs+Wwh+WIsOacn1xyXG4gICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChSRUZSRVNIX1RPS0VOKS50aGVuKHRva2VuID0+IHtcdFxyXG4gICAgICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIC8vUkVGUkVTSF9UT0tFTiDlpLHmlZdcclxuICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvTG9naW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVx0ICAgXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAvL3Rva2Vu5q2j5bi4XHJcbiAgICAgICAgIHRoaXMucmVkaXJlY3QoKTtcclxuICAgICAgfVxyXG4gICB9LFxyXG4gICBtZXRob2RzOntcclxuICAgICAgcmVkaXJlY3QoKXtcclxuICAgICAgICAgaWYodGhpcy5yZXR1cm5VcmwpIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogdGhpcy5yZXR1cm5VcmwgfSk7XHJcbiAgICAgICAgIGVsc2UgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZScgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlZGlyZWN0VG9Mb2dpbigpe1xyXG4gICAgICAgICBpZih0aGlzLnJldHVyblVybCl7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogJy9sb2dpbicsICBxdWVyeTp7IHJldHVyblVybDogdGhpcy5yZXR1cm5VcmwgfX0pO1xyXG4gICAgICAgICB9IFxyXG4gICAgICAgICBlbHNlIHRoaXMuJHJvdXRlci5wdXNoKHsgcGF0aDogJy9sb2dpbicgfSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBVkE7QUF6Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/views/Auth.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"c93332d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container\" })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXNcXFxcLmNhY2hlXFxcXHZ1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYzkzMzMyZDYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NsaWVudC92aWV3cy9BdXRoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNmZjZDZmOCYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3ZpZXdzL0F1dGgudnVlPzlmZDQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&\n");

/***/ }),

/***/ "./src/client/views/Auth.vue":
/*!***********************************!*\
  !*** ./src/client/views/Auth.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.vue?vue&type=template&id=a6fcd6f8& */ \"./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&\");\n/* harmony import */ var _Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth.vue?vue&type=script&lang=js& */ \"./src/client/views/Auth.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (true) {\n  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ \"./node_modules/vue-hot-reload-api/dist/index.js\")\n  api.install(__webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\"))\n  if (api.compatible) {\n    module.hot.accept()\n    if (!module.hot.data) {\n      api.createRecord('a6fcd6f8', component.options)\n    } else {\n      api.reload('a6fcd6f8', component.options)\n    }\n    module.hot.accept(/*! ./Auth.vue?vue&type=template&id=a6fcd6f8& */ \"./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.vue?vue&type=template&id=a6fcd6f8& */ \"./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&\");\n(function () {\n      api.rerender('a6fcd6f8', {\n        render: _Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n        staticRenderFns: _Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]\n      })\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })\n  }\n}\ncomponent.options.__file = \"src/client/views/Auth.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3ZpZXdzL0F1dGgudnVlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC92aWV3cy9BdXRoLnZ1ZT9hNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXV0aC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTZmY2Q2ZjgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXV0aC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0F1dGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxTdGVwaGVuXFxcXHNvdXJjZVxcXFxyZXBvc1xcXFxUcmFkZXJzXFxcXFdlYlxcXFxyZXNvdXJjZXNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E2ZmNkNmY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E2ZmNkNmY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BdXRoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNmZjZDZmOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhNmZjZDZmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NsaWVudC92aWV3cy9BdXRoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/views/Auth.vue\n");

/***/ }),

/***/ "./src/client/views/Auth.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/client/views/Auth.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Auth.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/views/Auth.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3ZpZXdzL0F1dGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGllbnQvdmlld3MvQXV0aC52dWU/YjcwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0F1dGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVldGlmeS1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0F1dGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/views/Auth.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&":
/*!******************************************************************!*\
  !*** ./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c93332d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{\"cacheDirectory\":\"node_modules//.cache//vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Auth.vue?vue&type=template&id=a6fcd6f8& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules\\\\\\\\.cache\\\\\\\\vue-loader\\\",\\\"cacheIdentifier\\\":\\\"c93332d6-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c93332d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_c93332d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_template_id_a6fcd6f8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3ZpZXdzL0F1dGgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE2ZmNkNmY4Ji5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jbGllbnQvdmlld3MvQXV0aC52dWU/NWM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLSFjYWNoZS1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlc1xcXFxcXFxcLmNhY2hlXFxcXFxcXFx2dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiYzkzMzMyZDYtdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BdXRoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNmZjZDZmOCZcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/views/Auth.vue?vue&type=template&id=a6fcd6f8&\n");

/***/ })

}]);