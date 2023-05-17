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
exports.id = "pages/api/order/order-from-profile";
exports.ids = ["pages/api/order/order-from-profile"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/order/order-from-profile.js":
/*!***************************************************!*\
  !*** ./src/pages/api/order/order-from-profile.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://api.trypureblue.com/order/order-from-profile\", \"\", {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        return res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error.response.data);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL29yZGVyL29yZGVyLWZyb20tcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENILGtEQUFVLENBQUMsc0RBQXNELEVBQUUsRUFBRSxFQUFFO1FBQ3JFSyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFlBQVksRUFBRSxRQUFRO1lBQ3RCLGVBQWUsRUFBRSxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLO1NBQzVDO0tBQ0YsQ0FBQyxDQUNDQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQ2pCLE9BQU9OLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7S0FDM0MsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBVUMsS0FBSyxFQUFFO1FBQ3RCWCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7S0FDM0MsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL29yZGVyL29yZGVyLWZyb20tcHJvZmlsZS5qcz9jYWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBBeGlvcy5wb3N0KFwiaHR0cHM6Ly9hcGkudHJ5cHVyZWJsdWUuY29tL29yZGVyL29yZGVyLWZyb20tcHJvZmlsZVwiLCBcIlwiLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIlNpdGUtVG9rZW5cIjogXCIxMjM0NTZcIixcclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgcmVxLmJvZHkuVG9rZW4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uZCkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uZC5kYXRhKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBvc3QiLCJoZWFkZXJzIiwiYm9keSIsIlRva2VuIiwidGhlbiIsInJlc3BvbmQiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/order/order-from-profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/order/order-from-profile.js"));
module.exports = __webpack_exports__;

})();