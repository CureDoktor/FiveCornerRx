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
exports.id = "pages/api/case/get-questions";
exports.ids = ["pages/api/case/get-questions"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/case/get-questions.js":
/*!*********************************************!*\
  !*** ./src/pages/api/case/get-questions.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.trypureblue.com/case/get-questions\", {\n        headers: {\n            // \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Nhc2UvZ2V0LXF1ZXN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUVYLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENILGlEQUFTLENBQUMsZ0RBQWdELEVBQUU7UUFDMURLLE9BQU8sRUFBRTtZQUNQLHNDQUFzQztZQUN0QyxZQUFZLEVBQUUsUUFBUTtZQUN0QixlQUFlLEVBQUUsU0FBUyxHQUFHSCxHQUFHLENBQUNJLElBQUksQ0FBQ0MsS0FBSztTQUM1QztLQUNGLENBQUMsQ0FDQ0MsSUFBSSxDQUFDLENBQUNDLE9BQU8sR0FBSztRQUNqQk4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsT0FBTyxDQUFDRyxJQUFJLENBQUMsQ0FBQztLQUNwQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7UUFDdEJYLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDO0tBQzdCLENBQUMsQ0FBQztDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL3BhZ2VzL2FwaS9jYXNlL2dldC1xdWVzdGlvbnMuanM/ZWY1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgQXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudHJ5cHVyZWJsdWUuY29tL2Nhc2UvZ2V0LXF1ZXN0aW9uc1wiLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIC8vIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIlNpdGUtVG9rZW5cIjogXCIxMjM0NTZcIixcclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgcmVxLmJvZHkuVG9rZW4sXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uZCkgPT4ge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25kLmRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImdldCIsImhlYWRlcnMiLCJib2R5IiwiVG9rZW4iLCJ0aGVuIiwicmVzcG9uZCIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/case/get-questions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/case/get-questions.js"));
module.exports = __webpack_exports__;

})();