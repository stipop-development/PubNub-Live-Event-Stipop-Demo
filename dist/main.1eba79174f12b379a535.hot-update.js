webpackHotUpdate("main",{

/***/ "./src/components/EventDetailsBottom/EventDetailsBottom.tsx":
/*!******************************************************************!*\
  !*** ./src/components/EventDetailsBottom/EventDetailsBottom.tsx ***!
  \******************************************************************/
/*! exports provided: EventDetailsBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventDetailsBottom\", function() { return EventDetailsBottom; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDetailsBottom.styles */ \"./src/components/EventDetailsBottom/EventDetailsBottom.styles.tsx\");\n/* harmony import */ var _AppStateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppStateContext */ \"./src/AppStateContext.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\n\n\n\nvar EventDetailsBottom = function EventDetailsBottom() {\n  var _useAppState = Object(_AppStateContext__WEBPACK_IMPORTED_MODULE_3__[\"useAppState\"])(),\n      state = _useAppState.state;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      laugh = _useState2[0],\n      setLaugh = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      thumbUp = _useState4[0],\n      setThumbUp = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      love = _useState6[0],\n      setLove = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      mad = _useState8[0],\n      setMad = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      sad = _useState10[0],\n      setSad = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(100),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),\n      opacity = _useState12[0],\n      setOpacity = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),\n      beginning = _useState14[0],\n      setBeginning = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState15, 2),\n      sticker = _useState16[0],\n      setSticker = _useState16[1];\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(100),\n      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState17, 2),\n      transparent = _useState18[0],\n      setTransparent = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState19, 2),\n      full = _useState20[0],\n      setFull = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState21, 2),\n      full2 = _useState22[0],\n      setFull2 = _useState22[1];\n\n  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState24 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState23, 2),\n      full3 = _useState24[0],\n      setFull3 = _useState24[1];\n\n  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState26 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState25, 2),\n      full4 = _useState26[0],\n      setFull4 = _useState26[1];\n\n  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState28 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState27, 2),\n      full5 = _useState28[0],\n      setFull5 = _useState28[1];\n\n  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState30 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState29, 2),\n      wiggle = _useState30[0],\n      setWiggle = _useState30[1];\n\n  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useAnimation\"])();\n  var x = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useMotionValue\"])(0);\n  var container = {\n    hidden: {\n      opacity: 0\n    },\n    show: {\n      opacity: 1\n    }\n  };\n  var config = {\n    headers: {\n      'Content-Type': 'application/json',\n      'Accept': 'application/json',\n      'Access-Control-Allow-Origin': '*',\n      'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'\n    }\n  };\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    fetch('/v1/sticker/reaction?userId=123', {\n      // const response = fetch('/v1/package?userId=123&pageNumber=1&country=us', {\n      headers: {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json',\n        'Access-Control-Allow-Origin': '*',\n        'apiKey': 'c61fc5d0a6b7600ccb94edbca4e86a8a'\n      },\n      method: \"get\"\n    }).then(function (response) {\n      return console.log(response);\n    }).then(function (json) {\n      setSticker(json);\n    }); // .then((json) => setStickers(json.body.packageList))\n    // .then(json => console.log(json))\n    // .then((responseJson) => {console.log(responseJson)});\n\n    console.log('json: ', json);\n  }, []);\n\n  var between = function between(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventDetailsBottomWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"HostImageWrapper\"], {\n    src: state.eventAvatar\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventInfoWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"HostNameWrapper\"], null, state.eventName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventIDWrapper\"], null, \"Event  ID: \", state.eventId))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventButtonsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    onClick: function onClick() {\n      // floating({\n      //   content: '<img src=\"https://img.stipop.io/2021/3/11/1615393182701_ByRaNm3vxi.gif\" />',\n      //   // content: \"🙋\",\n      //   number: 1,\n      //   // direction: 'reverse',\n      //   size: [1,10]\n      // });\n      setTransparent(100);\n      var wayUp = between(-170, -190);\n      var isFull = between(1, 10);\n      var leftRight = between(-20, 20);\n      setWiggle(leftRight);\n      setFull(isFull);\n      setLove(wayUp);\n    },\n    src: sticker.length > 0 && sticker[0].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    onClick: function onClick() {\n      // floating({\n      //   content: '<img src=\"https://img.stipop.io/2021/3/10/1615387332944_6mixifGcUS.png\" />',\n      //   // content: \"🙋\",\n      //   number: 1,\n      //   // direction: 'reverse',\n      //   size: [1,10]\n      // });\n      var wayUp = between(-280, -260);\n      var isFull = between(1, 10);\n      setFull2(isFull);\n      setLaugh(wayUp);\n    },\n    src: sticker.length > 0 && sticker[1].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    onClick: function onClick() {\n      // floating({\n      //   content: '<img src=\"https://img.stipop.io/2021/3/10/1615379395254_yricRq7WQI.png\" />',\n      //   // content: \"🙋\",\n      //   number: 1,\n      //   // direction: 'reverse',\n      //   size: [1,10]\n      // });\n      var wayUp = between(-280, -260);\n      var isFull = between(1, 10);\n      setFull3(isFull);\n      setThumbUp(wayUp);\n    },\n    src: sticker.length > 0 && sticker[2].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    onClick: function onClick() {\n      // floating({\n      //   content: '<img src=\"https://img.stipop.io/2021/3/10/1615369378339_SNCtCQNERT.gif\" />',\n      //   // content: \"🙋\",\n      //   number: 1,\n      //   // direction: 'reverse',\n      //   size: [1,10]\n      // });\n      var wayUp = between(-280, -260);\n      var isFull = between(1, 10);\n      setFull4(isFull);\n      setMad(wayUp);\n    },\n    src: sticker.length > 0 && sticker[3].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    onClick: function onClick() {\n      // floating({\n      //   content: '<img src=\"https://img.stipop.io/2021/3/10/1615364413991_1afxMIWNhA.png\" />',\n      //   // content: \"🙋\",\n      //   number: 1,\n      //   // direction: 'reverse',\n      //   size: [1,10]\n      // });\n      var wayUp = between(-280, -260);\n      var isFull = between(1, 10);\n      setFull5(isFull);\n      setSad(wayUp);\n    },\n    src: sticker.length > 0 && sticker[4].stickerImg\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"EventButtonsWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionsWrapper2\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"] // animate={{x: [wiggle, 0, wiggle, 0], y: [0, love], opacity: [full, 0]}}\n  , {\n    animate: {\n      x: [wiggle, 0, wiggle, 0],\n      y: [0, love],\n      opacity: [1, 1]\n    },\n    drag: \"x\",\n    dragConstraints: {\n      left: -100,\n      right: 100\n    },\n    transition: {\n      ease: \"easeOut\",\n      duration: 4\n    },\n    src: sticker.length > 0 && sticker[0].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, laugh],\n      opacity: [full2, 0]\n    },\n    transition: {\n      ease: \"easeOut\",\n      duration: 4\n    },\n    src: sticker.length > 0 && sticker[1].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, thumbUp],\n      opacity: [full3, 0]\n    },\n    transition: {\n      ease: \"easeOut\",\n      duration: 2\n    },\n    src: sticker.length > 0 && sticker[2].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, mad],\n      opacity: [full4, 0]\n    },\n    transition: {\n      ease: \"easeOut\",\n      duration: 2\n    },\n    src: sticker.length > 0 && sticker[3].stickerImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EventDetailsBottom_styles__WEBPACK_IMPORTED_MODULE_2__[\"ReactionButtonWrapper\"], {\n    animate: {\n      y: [0, sad],\n      opacity: [full5, 0]\n    },\n    transition: {\n      ease: \"easeOut\",\n      duration: 2\n    },\n    src: sticker.length > 0 && sticker[4].stickerImg\n  })))));\n};\n\n//# sourceURL=webpack:///./src/components/EventDetailsBottom/EventDetailsBottom.tsx?");

/***/ })

})