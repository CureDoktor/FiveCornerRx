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
exports.id = "pages/api/order/get-orders";
exports.ids = ["pages/api/order/get-orders"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/order/get-orders.js":
/*!*******************************************!*\
  !*** ./src/pages/api/order/get-orders.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.trypureblue.com/order\", {\n        headers: {\n            // \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL29yZGVyL2dldC1vcmRlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFWCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCxpREFBUyxDQUFDLG1DQUFtQyxFQUFFO1FBQzdDSyxPQUFPLEVBQUU7WUFDUCxzQ0FBc0M7WUFDdEMsWUFBWSxFQUFFLFFBQVE7WUFDdEIsZUFBZSxFQUFFLFNBQVMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJLENBQUNDLEtBQUs7U0FDNUM7S0FDRixDQUFDLENBQ0NDLElBQUksQ0FBQyxDQUFDQyxPQUFPLEdBQUs7UUFDakJOLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7S0FDcEMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3RCWCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQztLQUM3QixDQUFDLENBQUM7Q0FDTiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvb3JkZXIvZ2V0LW9yZGVycy5qcz9hYjJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBBeGlvcy5nZXQoXCJodHRwczovL2FwaS50cnlwdXJlYmx1ZS5jb20vb3JkZXJcIiwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAvLyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJTaXRlLVRva2VuXCI6IFwiMTIzNDU2XCIsXHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHJlcS5ib2R5LlRva2VuLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbmQpID0+IHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uZC5kYXRhKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXQiLCJoZWFkZXJzIiwiYm9keSIsIlRva2VuIiwidGhlbiIsInJlc3BvbmQiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/order/get-orders.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/order/get-orders.js"));
module.exports = __webpack_exports__;

})();