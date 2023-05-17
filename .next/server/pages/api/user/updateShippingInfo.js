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
exports.id = "pages/api/user/updateShippingInfo";
exports.ids = ["pages/api/user/updateShippingInfo"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/user/updateShippingInfo.js":
/*!**************************************************!*\
  !*** ./src/pages/api/user/updateShippingInfo.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://api.trypureblue.com/user/shipping-info\", req.body.formData, {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        return res.status(200).json(respond.data);\n    }).catch(function(error) {\n        console.log(\"OVDE NE RADI\");\n        console.log(req.body.formData);\n        return res.status(400).json(error);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXIvdXBkYXRlU2hpcHBpbmdJbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRVgsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4Q0gsa0RBQVUsQ0FDUixnREFBZ0QsRUFDaERFLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQyxRQUFRLEVBQ2pCO1FBQ0VDLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsWUFBWSxFQUFFLFFBQVE7WUFDdEIsZUFBZSxFQUFFLFNBQVMsR0FBR0wsR0FBRyxDQUFDRyxJQUFJLENBQUNHLEtBQUs7U0FDNUM7S0FDRixDQUNGLENBQ0VDLElBQUksQ0FBQyxDQUFDQyxPQUFPLEdBQUs7UUFDakIsT0FBT1AsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsT0FBTyxDQUFDRyxJQUFJLENBQUMsQ0FBQztLQUMzQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2YsR0FBRyxDQUFDRyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLE9BQU9ILEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDO0tBQ3BDLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS91c2VyL3VwZGF0ZVNoaXBwaW5nSW5mby5qcz8yOGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBBeGlvcy5wb3N0KFxyXG4gICAgXCJodHRwczovL2FwaS50cnlwdXJlYmx1ZS5jb20vdXNlci9zaGlwcGluZy1pbmZvXCIsXHJcbiAgICByZXEuYm9keS5mb3JtRGF0YSxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiU2l0ZS1Ub2tlblwiOiBcIjEyMzQ1NlwiLFxyXG4gICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIHJlcS5ib2R5LlRva2VuLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25kKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25kLmRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJPVkRFIE5FIFJBRElcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LmZvcm1EYXRhKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb3N0IiwiYm9keSIsImZvcm1EYXRhIiwiaGVhZGVycyIsIlRva2VuIiwidGhlbiIsInJlc3BvbmQiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/user/updateShippingInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/user/updateShippingInfo.js"));
module.exports = __webpack_exports__;

})();