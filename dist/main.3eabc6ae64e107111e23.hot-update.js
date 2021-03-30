webpackHotUpdate("main",{

/***/ "./src/components/Message/Message.tsx":
/*!********************************************!*\
  !*** ./src/components/Message/Message.tsx ***!
  \********************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Message_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.styles */ \"./src/components/Message/Message.styles.tsx\");\n\n\nvar Message = function Message(props) {\n  var checkImage = function checkImage(message) {\n    console.log('message: ', message);\n\n    if (/\\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(message)) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageMessageWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        style: {\n          height: '20%',\n          width: '20%'\n        },\n        src: message\n      }));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageMessageWrapper\"], null, message);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"MessageWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"AvatarWrapper\"], {\n    src: props.message.UserAvatar\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_styles__WEBPACK_IMPORTED_MODULE_1__[\"SenderNameWrapper\"], null, props.message.senderName), checkImage(props.message.message));\n};\n\n//# sourceURL=webpack:///./src/components/Message/Message.tsx?");

/***/ })

})