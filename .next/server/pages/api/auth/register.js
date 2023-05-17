"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/register";
exports.ids = ["pages/api/auth/register"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/register.tsx":
/*!*****************************************!*\
  !*** ./src/pages/api/auth/register.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction Register(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://api.trypureblue.com/auth/register\", req.body, {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\"\n        }\n    }).then((respond)=>{\n        res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error.response.data);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRVgsU0FBU0MsUUFBUSxDQUFDQyxHQUFRLEVBQUVDLEdBQVEsRUFBRTtJQUNuREgsa0RBQVUsQ0FBQywyQ0FBMkMsRUFBRUUsR0FBRyxDQUFDRyxJQUFJLEVBQUU7UUFDaEVDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsWUFBWSxFQUFFLFFBQVE7U0FDdkI7S0FDRixDQUFDLENBQ0NDLElBQUksQ0FBQyxDQUFDQyxPQUFPLEdBQUs7UUFDakJMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7S0FDcEMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3RCVixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7S0FDM0MsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2F1dGgvcmVnaXN0ZXIudHN4PzI1ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgQXhpb3MucG9zdChcImh0dHBzOi8vYXBpLnRyeXB1cmVibHVlLmNvbS9hdXRoL3JlZ2lzdGVyXCIsIHJlcS5ib2R5LCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIlNpdGUtVG9rZW5cIjogXCIxMjM0NTZcIixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25kKSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbmQuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsIlJlZ2lzdGVyIiwicmVxIiwicmVzIiwicG9zdCIsImJvZHkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbmQiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/register.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/register.tsx"));
module.exports = __webpack_exports__;

})();