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
exports.id = "pages/api/user/getUserInfo";
exports.ids = ["pages/api/user/getUserInfo"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/user/getUserInfo.js":
/*!*******************************************!*\
  !*** ./src/pages/api/user/getUserInfo.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.trypureblue.com/user/user-profile\", {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            \"Site-Token\": \"123456\",\n            \"Authorization\": \"Bearer \" + req.body.Token\n        }\n    }).then((respond)=>{\n        res.status(200).json(respond.data);\n    }).catch(function(error) {\n        res.status(400).json(error);\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXIvZ2V0VXNlckluZm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFFWCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCxpREFBUyxDQUFDLCtDQUErQyxFQUFFO1FBQ3pESyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLFlBQVksRUFBRSxRQUFRO1lBQ3RCLGVBQWUsRUFBRSxTQUFTLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLO1NBQzVDO0tBQ0YsQ0FBQyxDQUNDQyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQ2pCTixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixPQUFPLENBQUNHLElBQUksQ0FBQyxDQUFDO0tBQ3BDLENBQUMsQ0FDREMsS0FBSyxDQUFDLFNBQVVDLEtBQUssRUFBRTtRQUN0QlgsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0NBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL3VzZXIvZ2V0VXNlckluZm8uanM/NGM4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgQXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudHJ5cHVyZWJsdWUuY29tL3VzZXIvdXNlci1wcm9maWxlXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiU2l0ZS1Ub2tlblwiOiBcIjEyMzQ1NlwiLFxyXG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyByZXEuYm9keS5Ub2tlbixcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25kKSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbmQuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbihlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZ2V0IiwiaGVhZGVycyIsImJvZHkiLCJUb2tlbiIsInRoZW4iLCJyZXNwb25kIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/user/getUserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/user/getUserInfo.js"));
module.exports = __webpack_exports__;

})();