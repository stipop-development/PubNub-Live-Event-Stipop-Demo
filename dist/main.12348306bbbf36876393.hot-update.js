webpackHotUpdate("main",{

/***/ "./src/components/EventDetailsBottom/EventDetailsBottom.tsx":
/*!******************************************************************!*\
  !*** ./src/components/EventDetailsBottom/EventDetailsBottom.tsx ***!
  \******************************************************************/
/*! exports provided: EventDetailsBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventDetailsBottom\", function() { return EventDetailsBottom; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDetailsBottom.styles */ \"./src/components/EventDetailsBottom/EventDetailsBottom.styles.tsx\");\n/* harmony import */ var _AppStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppStateContext */ \"./src/AppStateContext.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\n\n\nvar EventDetailsBottom = function EventDetailsBottom() {\n  var _useAppState = Object(_AppStateContext__WEBPACK_IMPORTED_MODULE_3__[\"useAppState\"])(),\n      state = _useAppState.state;\n\n  var shouldReduceMotion = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useReducedMotion\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      laugh = _useState2[0],\n      setLaugh = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      thumbUp = _useState4[0],\n      setThumbUp = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      love = _useState6[0],\n      setLove = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      mad = _useState8[0],\n      setMad = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      sad = _useState10[0],\n      setSad = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(100),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),\n      opacity = _useState12[0],\n      setOpacity = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),\n      beginning = _useState14[0],\n      setBeginning = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState15, 2),\n      sticker = _useState16[0],\n      setSticker = _useState16[1];\n\n  var animate;\n  var config = {\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json',\n      'Access-Control-Allow-Origin': '*',\n      'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'\n    }\n  };\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    fetch('/v1/package?userId=123&pageNumber=1&country=us', {\n      // const response = fetch('/v1/package?userId=123&pageNumber=1&country=us', {\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n        'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'\n      },\n      method: \"get\"\n    }).then(function (response) {\n      return response.json();\n    }).then(function (json) {\n      setSticker(json.body.packageList);\n    }); // .then((json) => setStickers(json.body.packageList))\n    // .then(json => console.log(json))\n    // .then((responseJson) => {console.log(responseJson)});\n    // console.log(response);\n  }, []);\n  console.log(\"Sticker: \", sticker);\n\n  var between = function between(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventDetailsBottomWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"HostImageWrapper\"], {\n    src: state.eventAvatar\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventInfoWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"HostNameWrapper\"], null, state.eventName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventIDWrapper\"], null, \"Event  ID: \", state.eventId))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventButtonsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      var transparent = 0;\n      setOpacity(transparent);\n      setLove(wayUp);\n    },\n    src: sticker.length > 0 && sticker[0].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, laugh]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setLaugh(wayUp);\n    },\n    src: sticker.length > 0 && sticker[1].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, thumbUp]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setThumbUp(wayUp);\n    },\n    src: sticker.length > 0 && sticker[2].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, mad]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setMad(wayUp);\n    },\n    src: sticker.length > 0 && sticker[3].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, sad]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setSad(wayUp);\n    },\n    src: sticker.length > 0 && sticker[4].packageImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventButtonsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, love],\n      opacity: [100]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      animate = shouldReduceMotion ? {\n        opacity: 1\n      } : {\n        y: 0\n      };\n      setLove(wayUp);\n    },\n    src: sticker.length > 0 && sticker[0].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, laugh]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setLaugh(wayUp);\n    },\n    src: sticker.length > 0 && sticker[1].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, thumbUp]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setThumbUp(wayUp);\n    },\n    src: sticker.length > 0 && sticker[2].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, mad]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setMad(wayUp);\n    },\n    src: sticker.length > 0 && sticker[3].packageImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, sad]\n    },\n    onClick: function onClick() {\n      var wayUp = between(-280, -260);\n      setSad(wayUp);\n    },\n    src: sticker.length > 0 && sticker[4].packageImg\n  })))));\n};\n\n//# sourceURL=webpack:///./src/components/EventDetailsBottom/EventDetailsBottom.tsx?");

/***/ })

})