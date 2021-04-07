webpackHotUpdate("main",{

/***/ "./src/components/LiveFeedPanelReactPlayer/LiveFeedPanelReactPlayer.tsx":
/*!******************************************************************************!*\
  !*** ./src/components/LiveFeedPanelReactPlayer/LiveFeedPanelReactPlayer.tsx ***!
  \******************************************************************************/
/*! exports provided: LiveFeedPanelReactPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveFeedPanelReactPlayer\", function() { return LiveFeedPanelReactPlayer; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LiveFeedPanelReactPlayer_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveFeedPanelReactPlayer.styles */ \"./src/components/LiveFeedPanelReactPlayer/LiveFeedPanelReactPlayer.styles.tsx\");\n\n\n\n\nvar theme = {\n  main: \"mediumseagreen\"\n};\nvar LiveFeedPanelReactPlayer = function LiveFeedPanelReactPlayer(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Event-00000-00000'),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      displayName = _useState2[0],\n      setDisplayName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Event-Location-00000-00001'),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      roomName = _useState4[0],\n      setRoomName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      password = _useState6[0],\n      setPassword = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      loader = _useState8[0],\n      setLoader = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      onCall = _useState10[0],\n      setOnCall = _useState10[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanelReactPlayer_styles__WEBPACK_IMPORTED_MODULE_3__[\"LiveFeedPanelReactPlayerWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    url: props.url,\n    width: \"100%\",\n    height: \"200%\",\n    display: \"flex\",\n    \"align-items\": \"center\",\n    \"justify-content\": \"center\",\n    \"flex-direction\": \"row\" //height=\"0px\"\n    // height={props.height}\n    ,\n    controls: true,\n    config: {\n      youtube: {\n        playerVars: {\n          showinfo: 1\n        }\n      }\n    }\n  }));\n};\n\nvar EventNameInput = function EventNameInput() {\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),\n      inputValue = _useState12[0],\n      setInputValue = _useState12[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    value: inputValue,\n    placeholder: \"Event name\",\n    onChange: function onChange(ev) {\n      return setInputValue(ev.target.value);\n    }\n  });\n};\n\nvar HostNameInput = function HostNameInput() {\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),\n      inputValue = _useState14[0],\n      setInputValue = _useState14[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    value: inputValue,\n    placeholder: \"Your host name\",\n    onChange: function onChange(ev) {\n      return setInputValue(ev.target.value);\n    }\n  });\n};\n\nfunction CreateEventButton() {\n  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement\n  var inputEl = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n\n  var onButtonClick = function onButtonClick() {\n    if (inputEl && inputEl.current) {\n      inputEl.current.focus();\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: onButtonClick\n  }, \"Focus the input\"));\n}\n\n//# sourceURL=webpack:///./src/components/LiveFeedPanelReactPlayer/LiveFeedPanelReactPlayer.tsx?");

/***/ })

})