webpackHotUpdate(12,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/views/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/admin/views/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _store_actions_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions.type */ \"./src/admin/store/actions.type.js\");\n/* harmony import */ var _components_material_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/material/Card */ \"./src/admin/components/material/Card.vue\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'UserView',\n  components: {\n    'material-card': _components_material_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      page: 1,\n      keyword: '',\n      table: {\n        pagination: {},\n        headers: [{\n          sortable: false,\n          text: '姓名',\n          value: 'name'\n        }, {\n          sortable: false,\n          text: 'Email',\n          value: 'email'\n        }, {\n          sortable: false,\n          text: '手機',\n          value: 'phone'\n        }]\n      }\n    };\n  },\n  computed: Object(C_Users_Stephen_source_repos_Traders_Web_resources_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapState\"])({\n    responsive: function responsive(state) {\n      return state.app.responsive;\n    },\n    pageList: function pageList(state) {\n      return state.users.pageList;\n    }\n  }), {\n    users: function users() {\n      if (this.pageList) {\n        return this.pageList.viewList;\n      } else {\n        return [];\n      }\n    }\n  }),\n  watch: {\n    // 'page' (val) {\n    //    alert(val);\n    // },\n    pagination: {\n      handler: function handler() {\n        var _this = this;\n\n        this.getDataFromApi().then(function (data) {\n          _this.desserts = data.items;\n          _this.totalDesserts = data.total;\n        });\n      },\n      deep: true\n    }\n  },\n  beforeMount: function beforeMount() {\n    this.$store.dispatch(_store_actions_type__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_USERS\"], {});\n  },\n  methods: {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZXRpZnktbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvYWRtaW4vdmlld3MvVXNlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Vc2Vycy52dWU/ZmFjZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHYtY29udGFpbmVyIGZsdWlkIGdyaWQtbGlzdC14bCBmaWxsLWhlaWdodD5cclxuICAgICA8di1sYXlvdXQganVzdGlmeS1jZW50ZXIgIGFsaWduLWNlbnRlcj5cclxuXHRcdFx0PHYtZmxleCB4czEyPlxyXG5cdFx0XHRcdDxtYXRlcmlhbC1jYXJkICBjb2xvcj1cImdyZWVuXCI+XHJcblx0XHRcdFx0XHQ8di1jYXJkLXRleHQ+XHJcblx0XHRcdFx0XHRcdDx2LWxheW91dCByb3c+XHJcblx0XHRcdFx0XHRcdFx0PHYtZmxleCBzbTY+XHJcbiAgICAgICAgICAgICAgXHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8L3YtZmxleD5cclxuXHRcdFx0XHRcdFx0XHQ8di1mbGV4IHNtNj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2LXRleHQtZmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImtleXdvcmRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcHBlbmQtaWNvbj1cIm1kaS1tYWduaWZ5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaW5nbGUtbGluZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoaWRlLWRldGFpbHNcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC92LWZsZXg+XHJcblx0XHRcdFx0XHRcdDwvdi1sYXlvdXQ+XHJcblx0XHRcdFx0XHRcdDx2LWxheW91dCByb3cgd3JhcD5cclxuXHRcdFx0XHRcdFx0XHQ8di1mbGV4IHNtMTI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8di1kYXRhLXRhYmxlIDpoZWFkZXJzPVwidGFibGUuaGVhZGVyc1wiIDppdGVtcz1cInVzZXJzXCIgY2xhc3M9XCJlbGV2YXRpb24tMVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6cGFnaW5hdGlvbi5zeW5jPVwicGFnaW5hdGlvblwiIDpoaWRlLWFjdGlvbnM9XCJ1c2Vycy5sZW5ndGggPT0gMFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwiaGVhZGVyQ2VsbFwiIHNsb3Qtc2NvcGU9XCJ7IGhlYWRlciB9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdWJoZWFkaW5nIGZvbnQtd2VpZ2h0LWxpZ2h0IHRleHQtc3VjY2VzcyB0ZXh0LS1kYXJrZW4tMyBjblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgaGVhZGVyLnRleHQgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwiaXRlbXNcIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3sgcHJvcHMuaXRlbS5wcm9maWxlLmZ1bGxuYW1lIH19PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3sgcHJvcHMuaXRlbS5lbWFpbCB9fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPnt7IHByb3BzLml0ZW0ucGhvbmUgfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92LWRhdGEtdGFibGU+XHJcblx0XHRcdFx0XHRcdFx0PC92LWZsZXg+XHJcblx0XHRcdFx0XHRcdDwvdi1sYXlvdXQ+XHJcblx0XHRcdFx0XHRcdDx2LWxheW91dCB2LWlmPVwiIXJlc3BvbnNpdmVcIiB2LXNob3c9XCJ1c2Vycy5sZW5ndGggPiAwXCIgcm93PlxyXG5cdFx0XHRcdFx0XHRcdDx2LWZsZXggc20xMj5cclxuICAgICAgICAgICAgICBcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1yLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxLTUgb2YgMTBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8di1wYWdpbmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cInBhZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDpsZW5ndGg9XCIxNVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OnRvdGFsLXZpc2libGU9XCI3XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvdi1mbGV4PlxyXG5cdFx0XHRcdFx0XHQ8L3YtbGF5b3V0Plx0XHJcblx0XHRcdFx0XHQ8L3YtY2FyZC10ZXh0PlxyXG5cdFx0XHRcdDwvbWF0ZXJpYWwtY2FyZD5cclxuXHRcdFx0PC92LWZsZXg+XHJcbiAgICAgPC92LWxheW91dD5cclxuXHQ8L3YtY29udGFpbmVyPlxyXG4gICAgXHJcblx0XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xyXG5pbXBvcnQgeyBGRVRDSF9VU0VSUyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMudHlwZSc7XHJcblxyXG5pbXBvcnQgTWF0ZXJpYWxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbWF0ZXJpYWwvQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ1VzZXJWaWV3JyxcclxuXHRjb21wb25lbnRzOiB7XHJcblx0XHQnbWF0ZXJpYWwtY2FyZCcgOiBNYXRlcmlhbENhcmRcclxuXHR9LFxyXG5cdGRhdGEgKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0a2V5d29yZDogJycsXHJcblx0XHRcdHRhYmxlOntcclxuXHRcdFx0XHRwYWdpbmF0aW9uOiB7fSxcclxuXHRcdFx0XHRoZWFkZXJzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+Wnk+WQjScsXHJcblx0XHRcdFx0XHRcdHZhbHVlOiAnbmFtZSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ0VtYWlsJyxcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICdlbWFpbCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHNvcnRhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0dGV4dDogJ+aJi+apnycsXHJcblx0XHRcdFx0XHRcdHZhbHVlOiAncGhvbmUnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuICAgICAgLi4ubWFwU3RhdGUoe1xyXG5cdFx0XHRyZXNwb25zaXZlOiBzdGF0ZSA9PiBzdGF0ZS5hcHAucmVzcG9uc2l2ZSxcclxuXHRcdFx0cGFnZUxpc3Q6IHN0YXRlID0+IHN0YXRlLnVzZXJzLnBhZ2VMaXN0LFxyXG5cdFx0fSksXHJcblx0XHR1c2Vycygpe1xyXG5cdFx0XHRpZih0aGlzLnBhZ2VMaXN0KXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wYWdlTGlzdC52aWV3TGlzdFxyXG5cdFx0XHR9ZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgIH0sXHJcblx0d2F0Y2g6IHtcclxuICAgICAgLy8gJ3BhZ2UnICh2YWwpIHtcclxuICAgICAgLy8gICAgYWxlcnQodmFsKTtcclxuXHRcdC8vIH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGhhbmRsZXIgKCkge1xyXG5cdFx0XHRcdHRoaXMuZ2V0RGF0YUZyb21BcGkoKVxyXG5cdFx0XHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmRlc3NlcnRzID0gZGF0YS5pdGVtc1xyXG5cdFx0XHRcdFx0dGhpcy50b3RhbERlc3NlcnRzID0gZGF0YS50b3RhbFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVlcDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgIH0sXHJcblx0YmVmb3JlTW91bnQoKXtcclxuXHRcdHRoaXMuJHN0b3JlLmRpc3BhdGNoKEZFVENIX1VTRVJTLCB7fSk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRcclxuXHR9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQUhBO0FBeUJBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFKQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBL0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/admin/views/Users.vue?vue&type=script&lang=js&\n");

/***/ })

})