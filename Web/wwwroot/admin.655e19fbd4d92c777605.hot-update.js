webpackHotUpdate("admin",{

/***/ "./src/admin/router/app.js":
/*!*********************************!*\
  !*** ./src/admin/router/app.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar appRoutes = [{\n  name: '',\n  path: '/test',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../views/Test */ \"./src/admin/views/Test.vue\"));\n  },\n  meta: {\n    order: 0,\n    icon: '',\n    title: '',\n    menu: false\n  }\n}, {\n  name: 'auth',\n  path: '/auth',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../views/Auth */ \"./src/admin/views/Auth.vue\"));\n  },\n  meta: {\n    order: 0,\n    icon: '',\n    title: '',\n    menu: false\n  }\n}, {\n  name: 'home',\n  path: '/',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ../views/Dashboard */ \"./src/admin/views/Dashboard.vue\"));\n  },\n  meta: {\n    order: 0,\n    icon: 'mdi-view-dashboard',\n    title: '總覽',\n    menu: true\n  }\n}, {\n  name: 'users',\n  path: '/user',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../views/Users */ \"./src/admin/views/Users.vue\"));\n  },\n  meta: {\n    order: 0,\n    icon: 'mdi-account',\n    title: '會員管理',\n    menu: true\n  }\n}, {\n  name: 'stocks',\n  path: '/stocks',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ../views/Stocks */ \"./src/admin/views/Stocks.vue\"));\n  },\n  meta: {\n    order: 0,\n    icon: 'mdi-compass',\n    title: '權值股管理',\n    menu: true\n  }\n}, {\n  name: '',\n  path: '/spec',\n  component: function component() {\n    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! ../views/Spec */ \"./src/admin/views/Spec.vue\"));\n  },\n  meta: {\n    order: 0,\n    icon: 'mdi-file-document-outline',\n    title: '規格說明',\n    menu: true\n  }\n}];\n\nfor (var i = 0; i < appRoutes.length; i++) {\n  appRoutes[i].meta.order = i;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appRoutes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWRtaW4vcm91dGVyL2FwcC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hZG1pbi9yb3V0ZXIvYXBwLmpzPzE3NWIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGFwcFJvdXRlcyA9IFtcclxuICAge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcGF0aDogJy90ZXN0JyxcclxuICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL1Rlc3QnKSwgXHJcbiAgICAgIG1ldGE6IHsgXHJcbiAgICAgICAgIG9yZGVyOiAwLFxyXG4gICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICBtZW51OiBmYWxzZVxyXG4gICAgICB9ICAgICAgICBcclxuICAgfSxcclxuICAge1xyXG4gICAgICBuYW1lOiAnYXV0aCcsXHJcbiAgICAgIHBhdGg6ICcvYXV0aCcsXHJcbiAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9BdXRoJyksIFxyXG4gICAgICBtZXRhOiB7IFxyXG4gICAgICAgICBvcmRlcjogMCxcclxuICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgbWVudTogZmFsc2VcclxuICAgICAgfSAgICAgICAgXHJcbiAgIH0sXHJcbiAgIHtcclxuICAgICAgbmFtZTogJ2hvbWUnLFxyXG4gICAgICBwYXRoOiAnLycsXHJcbiAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9EYXNoYm9hcmQnKSwgXHJcbiAgICAgIG1ldGE6IHsgXHJcbiAgICAgICAgIG9yZGVyOiAwLFxyXG4gICAgICAgICBpY29uOiAnbWRpLXZpZXctZGFzaGJvYXJkJyxcclxuICAgICAgICAgdGl0bGU6ICfnuL3opr0nLFxyXG4gICAgICAgICBtZW51OiB0cnVlXHJcbiAgICAgIH0gICAgICAgIFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIG5hbWU6ICd1c2VycycsXHJcbiAgICAgIHBhdGg6ICcvdXNlcicsXHJcbiAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9Vc2VycycpLCBcclxuICAgICAgbWV0YTogeyBcclxuICAgICAgICAgb3JkZXI6IDAsXHJcbiAgICAgICAgIGljb246ICdtZGktYWNjb3VudCcsXHJcbiAgICAgICAgIHRpdGxlOiAn5pyD5ZOh566h55CGJyxcclxuICAgICAgICAgbWVudTogdHJ1ZVxyXG4gICAgICB9ICAgICAgICBcclxuICAgfSxcclxuICAge1xyXG4gICAgICBuYW1lOiAnc3RvY2tzJyxcclxuICAgICAgcGF0aDogJy9zdG9ja3MnLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU3RvY2tzJyksIFxyXG4gICAgICBtZXRhOiB7IFxyXG4gICAgICAgICBvcmRlcjogMCxcclxuICAgICAgICAgaWNvbjogJ21kaS1jb21wYXNzJyxcclxuICAgICAgICAgdGl0bGU6ICfmrIrlgLzogqHnrqHnkIYnLFxyXG4gICAgICAgICBtZW51OiB0cnVlXHJcbiAgICAgIH0gICAgICAgIFxyXG4gICB9LFxyXG4gICB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBwYXRoOiAnL3NwZWMnLFxyXG4gICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvU3BlYycpLCBcclxuICAgICAgbWV0YTogeyBcclxuICAgICAgICAgb3JkZXI6IDAsXHJcbiAgICAgICAgIGljb246ICdtZGktZmlsZS1kb2N1bWVudC1vdXRsaW5lJyxcclxuICAgICAgICAgdGl0bGU6ICfopo/moLzoqqrmmI4nLFxyXG4gICAgICAgICBtZW51OiB0cnVlXHJcbiAgICAgIH0gICAgICAgIFxyXG4gICB9LFxyXG5dO1xyXG5cclxuXHJcbmZvcihsZXQgaSA9IDA7IGkgPCBhcHBSb3V0ZXMubGVuZ3RoOyBpKyspe1xyXG4gICBhcHBSb3V0ZXNbaV0ubWV0YS5vcmRlciA9IGk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcFJvdXRlczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/admin/router/app.js\n");

/***/ })

})