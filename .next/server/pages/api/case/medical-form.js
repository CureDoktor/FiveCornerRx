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
exports.id = "pages/api/case/medical-form";
exports.ids = ["pages/api/case/medical-form"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/case/medical-form.tsx":
/*!*********************************************!*\
  !*** ./src/pages/api/case/medical-form.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://api.trypureblue.com/case/medical-form\", req.body.payload, {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        return res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error.response.data);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Nhc2UvbWVkaWNhbC1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBUSxFQUFFQyxHQUFRLEVBQUU7SUFDbERILGtEQUFVLENBQ1IsK0NBQStDLEVBQy9DRSxHQUFHLENBQUNHLElBQUksQ0FBQ0MsT0FBTyxFQUNoQjtRQUNFQyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFlBQVksRUFBRSxRQUFRO1lBQ3RCLGVBQWUsRUFBRSxTQUFTLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRyxLQUFLO1NBQzVDO0tBQ0YsQ0FDRixDQUNFQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQ2pCLE9BQU9QLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7S0FDM0MsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3RCWixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7S0FDM0MsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2Nhc2UvbWVkaWNhbC1mb3JtLnRzeD84MWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgQXhpb3MucG9zdChcclxuICAgIFwiaHR0cHM6Ly9hcGkudHJ5cHVyZWJsdWUuY29tL2Nhc2UvbWVkaWNhbC1mb3JtXCIsXHJcbiAgICByZXEuYm9keS5wYXlsb2FkLFxyXG4gICAge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJTaXRlLVRva2VuXCI6IFwiMTIzNDU2XCIsXHJcbiAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgcmVxLmJvZHkuVG9rZW4sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbmQpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbmQuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb3N0IiwiYm9keSIsInBheWxvYWQiLCJoZWFkZXJzIiwiVG9rZW4iLCJ0aGVuIiwicmVzcG9uZCIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/case/medical-form.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/case/medical-form.tsx"));
module.exports = __webpack_exports__;

})();