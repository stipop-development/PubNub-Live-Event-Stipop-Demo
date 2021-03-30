webpackHotUpdate("main",{

/***/ "./src/components/MessageListPanel/MessageListPanel.tsx":
/*!**************************************************************!*\
  !*** ./src/components/MessageListPanel/MessageListPanel.tsx ***!
  \**************************************************************/
/*! exports provided: MessageListPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageListPanel\", function() { return MessageListPanel; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MessageListPanel_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageListPanel.styles */ \"./src/components/MessageListPanel/MessageListPanel.styles.tsx\");\n/* harmony import */ var _ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ComposeMessageBox/ComposeMessageBox.styles */ \"./src/components/ComposeMessageBox/ComposeMessageBox.styles.tsx\");\n/* harmony import */ var _MessageList_MessageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MessageList/MessageList */ \"./src/components/MessageList/MessageList.tsx\");\n/* harmony import */ var _AppStateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../AppStateContext */ \"./src/AppStateContext.tsx\");\n\n\n\n\n\n\nvar MessageListPanel = function MessageListPanel(props) {\n  var textAreaEl = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_AppStateContext__WEBPACK_IMPORTED_MODULE_5__[\"appStateReducer\"], _AppStateContext__WEBPACK_IMPORTED_MODULE_5__[\"appData\"]),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      isOpen = _useState2[0],\n      setIsOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      sticker = _useState4[0],\n      setSticker = _useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    fetch('/v1/package?userId=123&pageNumber=3&lang=en', {\n      // const response = fetch('/v1/package?userId=123&pageNumber=1&country=us', {\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n        'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'\n      },\n      method: \"get\"\n    }).then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      setSticker(json.body.packageList);\n    }); // .then((json) => setStickers(json.body.packageList))\n    // .then(json => console.log(json))\n    // .then((responseJson) => {console.log(responseJson)});\n    // console.log(response);\n  }, []);\n\n  var handleKeyDown = function handleKeyDown(event) {\n    if (event.key === 'Enter') {\n      if ((textAreaEl === null || textAreaEl === void 0 ? void 0 : textAreaEl.current) !== null) {\n        dispatch({\n          type: \"SEND_MESSAGE\",\n          payload: {\n            messageContent: textAreaEl.current.value\n          }\n        });\n        textAreaEl.current.value = \"\";\n        textAreaEl.current.blur();\n        console.log('do validate');\n      }\n    }\n  };\n\n  var handleClick = function handleClick(image) {\n    if (image) {\n      dispatch({\n        type: \"SEND_MESSAGE\",\n        payload: {\n          messageContent: image\n        }\n      });\n      console.log('do validate');\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageListPanel_styles__WEBPACK_IMPORTED_MODULE_2__[\"MessageListPanelWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MessageList_MessageList__WEBPACK_IMPORTED_MODULE_4__[\"MessageList\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"ComposeMessageBoxWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"UserImgWrapper\"], {\n    src: state.eventHostAvatar\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ComposeMessageBox_ComposeMessageBox_styles__WEBPACK_IMPORTED_MODULE_3__[\"MessageInputWrapper\"], {\n    autoComplete: \"off\",\n    onKeyPress: handleKeyDown,\n    ref: textAreaEl,\n    id: \"messageContent\" // onSubmitEditing={Keyboard.dismiss}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: '../../../../src/img/sticker.svg',\n    onClick: function onClick() {\n      return setIsOpen(!isOpen);\n    }\n  }), isOpen === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      width: '380px',\n      minWidth: '380px',\n      height: '430px',\n      backgroundColor: '#ffffff',\n      border: 'solid 1px #d9d9d9',\n      borderRadius: '6px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    style: {\n      width: '330px',\n      height: '26px',\n      margin: '10px 9px 11px 9px',\n      padding: '9px 14px',\n      objectFit: 'contain',\n      borderRadius: '18px',\n      border: 'solid 1px #d9d9d9',\n      backgroundColor: '#ffffff'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexWrap: 'wrap'\n    }\n  }, sticker && sticker.map(function (stickers, index) {\n    console.log(stickers);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      key: stickers.packageId\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      style: {\n        width: '72px',\n        height: '70px',\n        marginLeft: '20px',\n        marginTop: '10px'\n      },\n      src: stickers.packageImg,\n      onClick: function onClick() {\n        return handleClick(stickers.packageImg);\n      }\n    }));\n  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null))));\n};\n\n//# sourceURL=webpack:///./src/components/MessageListPanel/MessageListPanel.tsx?");

/***/ })

})