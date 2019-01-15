webpackHotUpdate(3,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/spec/BlueChips.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/spec/BlueChips.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      headers: [{\n        sortable: false,\n        text: '商品',\n        value: 'symbol'\n      }, {\n        sortable: false,\n        text: '權重 (%)',\n        value: 'weight'\n      }, {\n        sortable: false,\n        text: '成交價',\n        value: 'price'\n      }, {\n        sortable: false,\n        text: '比例',\n        value: 'ratio'\n      }],\n      symbols: [{\n        symbol: '台積電',\n        weight: '21.1929',\n        price: 221,\n        ratio: 1\n      }, {\n        symbol: '鴻海',\n        weight: '4.2131',\n        price: 70.3,\n        ratio: 0\n      }, {\n        symbol: '台塑化',\n        weight: '3.7738',\n        price: 111,\n        ratio: 0\n      }]\n    };\n  },\n  methods: {\n    getRatio: function getRatio(item) {\n      if (item.ratio) return item.ratio;\n      var baseStock = this.symbols[0];\n      var ratio = item.price / baseStock.price * (item.weight / baseStock.weight);\n      return Math.round(ratio * 10000) / 10000;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvYWRtaW4vY29tcG9uZW50cy9zcGVjL0JsdWVDaGlwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0JsdWVDaGlwcy52dWU/MGE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgIDx2LWxheW91dCByb3cgd3JhcD5cclxuICAgICAgPHYtZmxleCBzbTEyPlxyXG4gICAgICAgICA8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVwiaGVhZGVyc1wiIDppdGVtcz1cInN5bWJvbHNcIiBoaWRlLWFjdGlvbnM+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiaGVhZGVyQ2VsbFwiIHNsb3Qtc2NvcGU9XCJ7IGhlYWRlciB9XCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ViaGVhZGluZyBmb250LXdlaWdodC1saWdodCB0ZXh0LXN1Y2Nlc3MgdGV4dC0tZGFya2VuLTMgY25cIj5cclxuICAgICAgICAgICAgICAgICAge3sgaGVhZGVyLnRleHQgfX1cclxuICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIml0ZW1zXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNuXCI+e3sgcHJvcHMuaXRlbS5zeW1ib2wgfX08L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS53ZWlnaHQgfX08L3RkPlxyXG4gICAgICAgICAgICAgICA8dGQ+e3sgcHJvcHMuaXRlbS5wcmljZSB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgIDx0ZCB2LXRleHQ9XCJnZXRSYXRpbyhwcm9wcy5pdGVtKVwiPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gICAgICA8L3YtZmxleD5cclxuICAgICAgPHYtZmxleCBzbTEyIGNsYXNzPVwiY25cIj5cclxuICAgICAgICAgPGgyIGNsYXNzPVwiZm9udC13ZWlnaHQtbGlnaHQgbWItNFwiPiA8c3BhbiBjbGFzcz1cImNuXCI+5qyK5YC86IKh5oyH5qiZPC9zcGFuPjwvaDI+XHJcbiAgICAgICAgIDxoNSBjbGFzcz1cImNuXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY25cIj7lrprnvqnoiIfoqqrmmI48L3NwYW4+IFxyXG4gICAgICAgICA8L2g1PlxyXG4gICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAg5Lul5Y+w56mN6Zu754K65Z+65rqWLOWPpumBuDQ55qqU5qyK5YC86IKhLOWFtuebuOWwjeaWvOWPsOepjembu+eahOavlOS+i+eCuiAo6IKh5YO5L+WPsOepjembu+iCoeWDuSkgeCAo5qyK5YC8L+WPsOepjembu+asiuWAvCkgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAg5Lul5LiK6KGo6bS75rW354K65L6LLOioiOeul+avlOS+i+W+l+WIsCAwLjA2MzIg5Y+v6Kej6YeL54K644CO5Lul5qyK5YC86KeS5bqm77yM5LiA5by16bS75rW355u455W25pa8MC4wNjMy5by15Y+w56mN6Zu744CPXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAg6KiY6YyE5qyK5YC86IKh55qE5q+P562G5aCx5YO5KFRpY2spLOWPr+W+l+WFtuOAjuWkmuaWuemHj+OAjyjlj4PnhafnrKzkuIDpoIHloLHlg7nos4fmlpnoqqrmmI4pXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAg5pyA5b6M6KiI566X5pa55byP77yM57Wm5a6a5LiA5YCL5pmC6ZaT56+E5ZyN5L6L5aaCIDEwOjMwOjAwIH4gMTA6MzE6MDDvvIzpoJDoqIjlm57lgrPlhanlgIvmlbjlrZfjgI7lpJrmlrnog73ph4/jgI/oiIfjgI7nqbrmlrnog73ph4/jgI9cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgPC91bD5cclxuICAgICAgPC92LWZsZXg+XHJcbiAgIDwvdi1sYXlvdXQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgIGRhdGEgKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aGVhZGVyczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHRleHQ6ICfllYblk4EnLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdzeW1ib2wnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuXHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdHRleHQ6ICfmrIrph40gKCUpJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnd2VpZ2h0J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0c29ydGFibGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0dGV4dDogJ+aIkOS6pOWDuScsXHJcblx0XHRcdFx0XHR2YWx1ZTogJ3ByaWNlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcblx0XHRcdFx0XHRzb3J0YWJsZTogZmFsc2UsXHJcblx0XHRcdFx0XHR0ZXh0OiAn5q+U5L6LJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAncmF0aW8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgXSxcclxuICAgICAgICAgc3ltYm9sczogW3tcclxuICAgICAgICAgICAgc3ltYm9sOiAn5Y+w56mN6Zu7JyxcclxuICAgICAgICAgICAgd2VpZ2h0OiAnMjEuMTkyOScsXHJcbiAgICAgICAgICAgIHByaWNlOiAyMjEsXHJcbiAgICAgICAgICAgIHJhdGlvOiAxXHJcbiAgICAgICAgIH0se1xyXG4gICAgICAgICAgICBzeW1ib2w6ICfptLvmtbcnLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6ICc0LjIxMzEnLFxyXG4gICAgICAgICAgICBwcmljZTogNzAuMyxcclxuICAgICAgICAgICAgcmF0aW86IDBcclxuICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgIHN5bWJvbDogJ+WPsOWhkeWMlicsXHJcbiAgICAgICAgICAgIHdlaWdodDogJzMuNzczOCcsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMTEsXHJcbiAgICAgICAgICAgIHJhdGlvOiAwXHJcbiAgICAgICAgIH1dXHJcblx0XHRcdFxyXG5cdFx0fVxyXG4gICB9LFxyXG4gICBtZXRob2RzOiB7XHJcblx0XHRnZXRSYXRpbyhpdGVtKXtcclxuICAgICAgICAgaWYoaXRlbS5yYXRpbykgcmV0dXJuIGl0ZW0ucmF0aW87XHJcbiAgICAgICAgIGxldCBiYXNlU3RvY2sgPSB0aGlzLnN5bWJvbHNbMF07XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBsZXQgcmF0aW8gPSAoaXRlbS5wcmljZSAvIGJhc2VTdG9jay5wcmljZSkgKiAoaXRlbS53ZWlnaHQgLyBiYXNlU3RvY2sud2VpZ2h0KTtcclxuICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQocmF0aW8gKiAxMDAwMCkvIDEwMDAwO1xyXG4gICAgICB9XHJcblx0fVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWpDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUEE7QUE1Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/spec/BlueChips.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/spec/BlueChips.vue?vue&type=template&id=45674789&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"c93332d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/components/spec/BlueChips.vue?vue&type=template&id=45674789& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-layout\",\n    { attrs: { row: \"\", wrap: \"\" } },\n    [\n      _c(\n        \"v-flex\",\n        { attrs: { sm12: \"\" } },\n        [\n          _c(\"v-data-table\", {\n            attrs: {\n              headers: _vm.headers,\n              items: _vm.symbols,\n              \"hide-actions\": \"\"\n            },\n            scopedSlots: _vm._u([\n              {\n                key: \"headerCell\",\n                fn: function(ref) {\n                  var header = ref.header\n                  return [\n                    _c(\n                      \"span\",\n                      {\n                        staticClass:\n                          \"subheading font-weight-light text-success text--darken-3 cn\"\n                      },\n                      [\n                        _vm._v(\n                          \"\\n               \" +\n                            _vm._s(header.text) +\n                            \"\\n            \"\n                        )\n                      ]\n                    )\n                  ]\n                }\n              },\n              {\n                key: \"items\",\n                fn: function(props) {\n                  return [\n                    _c(\"td\", { staticClass: \"cn\" }, [\n                      _vm._v(_vm._s(props.item.symbol))\n                    ]),\n                    _c(\"td\", [_vm._v(_vm._s(props.item.weight))]),\n                    _c(\"td\", [_vm._v(_vm._s(props.item.price))]),\n                    _c(\"td\", {\n                      domProps: {\n                        textContent: _vm._s(_vm.getRatio(props.item))\n                      }\n                    })\n                  ]\n                }\n              }\n            ])\n          })\n        ],\n        1\n      ),\n      _c(\"v-flex\", { staticClass: \"cn\", attrs: { sm12: \"\" } }, [\n        _c(\"h2\", { staticClass: \"font-weight-light mb-4\" }, [\n          _c(\"span\", { staticClass: \"cn\" }, [_vm._v(\"權值股指標\")])\n        ]),\n        _c(\"h5\", { staticClass: \"cn\" }, [\n          _c(\"span\", { staticClass: \"cn\" }, [_vm._v(\"定義與說明\")])\n        ]),\n        _c(\"ul\", [\n          _c(\"li\", [\n            _vm._v(\n              \"\\n            以台積電為基準,另選49檔權值股,其相對於台積電的比例為 (股價/台積電股價) x (權值/台積電權值) \\n         \"\n            )\n          ]),\n          _c(\"li\", [\n            _vm._v(\n              \"\\n            以上表鴻海為例,計算比例得到 0.0632 可解釋為『以權值角度，一張鴻海相當於0.0632張台積電』\\n         \"\n            )\n          ]),\n          _c(\"li\", [\n            _vm._v(\n              \"\\n            記錄權值股的每筆報價(Tick),可得其『多方量』(參照第一頁報價資料說明)\\n         \"\n            )\n          ]),\n          _c(\"li\", [\n            _vm._v(\n              \"\\n            最後計算方式，給定一個時間範圍例如 10:30:00 ~ 10:31:00，預計回傳兩個數字『多方能量』與『空方能量』\\n         \"\n            )\n          ])\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXNcXFxcLmNhY2hlXFxcXHZ1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiYzkzMzMyZDYtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWV0aWZ5LWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2FkbWluL2NvbXBvbmVudHMvc3BlYy9CbHVlQ2hpcHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1Njc0Nzg5Ji5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hZG1pbi9jb21wb25lbnRzL3NwZWMvQmx1ZUNoaXBzLnZ1ZT85OTM4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LWxheW91dFwiLFxuICAgIHsgYXR0cnM6IHsgcm93OiBcIlwiLCB3cmFwOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWZsZXhcIixcbiAgICAgICAgeyBhdHRyczogeyBzbTEyOiBcIlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgICAgICBpdGVtczogX3ZtLnN5bWJvbHMsXG4gICAgICAgICAgICAgIFwiaGlkZS1hY3Rpb25zXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJoZWFkZXJDZWxsXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgdmFyIGhlYWRlciA9IHJlZi5oZWFkZXJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1YmhlYWRpbmcgZm9udC13ZWlnaHQtbGlnaHQgdGV4dC1zdWNjZXNzIHRleHQtLWRhcmtlbi0zIGNuXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGhlYWRlci50ZXh0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJpdGVtc1wiLFxuICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocHJvcHMuaXRlbS5zeW1ib2wpKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhwcm9wcy5pdGVtLndlaWdodCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MocHJvcHMuaXRlbS5wcmljZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5nZXRSYXRpbyhwcm9wcy5pdGVtKSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcInYtZmxleFwiLCB7IHN0YXRpY0NsYXNzOiBcImNuXCIsIGF0dHJzOiB7IHNtMTI6IFwiXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1saWdodCBtYi00XCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNuXCIgfSwgW192bS5fdihcIuasiuWAvOiCoeaMh+aomVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiY25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY25cIiB9LCBbX3ZtLl92KFwi5a6a576p6IiH6Kqq5piOXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIOS7peWPsOepjembu+eCuuWfuua6lizlj6bpgbg0OeaqlOasiuWAvOiCoSzlhbbnm7jlsI3mlrzlj7DnqY3pm7vnmoTmr5TkvovngrogKOiCoeWDuS/lj7DnqY3pm7vogqHlg7kpIHggKOasiuWAvC/lj7DnqY3pm7vmrIrlgLwpIFxcbiAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAg5Lul5LiK6KGo6bS75rW354K65L6LLOioiOeul+avlOS+i+W+l+WIsCAwLjA2MzIg5Y+v6Kej6YeL54K644CO5Lul5qyK5YC86KeS5bqm77yM5LiA5by16bS75rW355u455W25pa8MC4wNjMy5by15Y+w56mN6Zu744CPXFxuICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICDoqJjpjITmrIrlgLzogqHnmoTmr4/nrYbloLHlg7koVGljayks5Y+v5b6X5YW244CO5aSa5pa56YeP44CPKOWPg+eFp+esrOS4gOmggeWgseWDueizh+aWmeiqquaYjilcXG4gICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIOacgOW+jOioiOeul+aWueW8j++8jOe1puWumuS4gOWAi+aZgumWk+evhOWcjeS+i+WmgiAxMDozMDowMCB+IDEwOjMxOjAw77yM6aCQ6KiI5Zue5YKz5YWp5YCL5pW45a2X44CO5aSa5pa56IO96YeP44CP6IiH44CO56m65pa56IO96YeP44CPXFxuICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules\\\\.cache\\\\vue-loader\",\"cacheIdentifier\":\"c93332d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/components/spec/BlueChips.vue?vue&type=template&id=45674789&\n");

/***/ })

})