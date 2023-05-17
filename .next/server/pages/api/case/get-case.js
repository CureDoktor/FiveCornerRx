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
exports.id = "pages/api/case/get-case";
exports.ids = ["pages/api/case/get-case"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/case/get-case.js":
/*!****************************************!*\
  !*** ./src/pages/api/case/get-case.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.trypureblue.com/case/case\", {\n        headers: {\n            // \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Nhc2UvZ2V0LWNhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFWCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCxpREFBUyxDQUFDLHVDQUF1QyxFQUFFO1FBQ2pESyxPQUFPLEVBQUU7WUFDUCxzQ0FBc0M7WUFDdEMsWUFBWSxFQUFFLFFBQVE7WUFDdEIsZUFBZSxFQUFFLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLEtBQUs7U0FDNUM7S0FDRixDQUFDLENBQ0NDLElBQUksQ0FBQyxDQUFDQyxPQUFPLEdBQUs7UUFDakJOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7S0FDcEMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3RCWCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvY2FzZS9nZXQtY2FzZS5qcz80ZDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBBeGlvcy5nZXQoXCJodHRwczovL2FwaS50cnlwdXJlYmx1ZS5jb20vY2FzZS9jYXNlXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgLy8gXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiU2l0ZS1Ub2tlblwiOiBcIjEyMzQ1NlwiLFxyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyByZXEuYm9keS5Ub2tlbixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25kKSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbmQuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsImJvZHkiLCJUb2tlbiIsInRoZW4iLCJyZXNwb25kIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/case/get-case.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/case/get-case.js"));
module.exports = __webpack_exports__;

})();