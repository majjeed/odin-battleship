"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-BlackItalic.ttf */ "./src/Roboto-BlackItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icon.jpg */ "./src/icon.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */
@font-face {
  font-family: "MyFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 600;
  font-style: normal;
}

.hello {
  color: red;
  font-family: "MyFont";
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.board {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.row {
  display: flex;
}

.cell {
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cell.ship {
  background-color: lightblue; /* Color to indicate a ship's presence */
}

.cell.hit {
  background-color: red;
}

.cell.miss {
  background-color: gray;
}

.cell:hover:not(.hit, .miss) {
  background-color: rgba(128, 128, 128, 0.253);
}

.cell:active {
  scale: 1.1;
}

.placeableShip {
  cursor: grab;
  margin: 5px;
  padding: 5px;
  border: 1px solid #000;
  display: inline-block;
  background-color: lightgray;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,eAAe;AACf;EACE,qBAAqB;EACrB,+DAAuD;EACvD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,qBAAqB;EACrB,mDAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,2BAA2B,EAAE,wCAAwC;AACvE;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,qBAAqB;EACrB,2BAA2B;AAC7B","sourcesContent":["/* styles.css */\n@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./Roboto-BlackItalic.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\n.hello {\n  color: red;\n  font-family: \"MyFont\";\n  background: url(\"./icon.jpg\");\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n}\n\n.row {\n  display: flex;\n}\n\n.cell {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.cell.ship {\n  background-color: lightblue; /* Color to indicate a ship's presence */\n}\n\n.cell.hit {\n  background-color: red;\n}\n\n.cell.miss {\n  background-color: gray;\n}\n\n.cell:hover:not(.hit, .miss) {\n  background-color: rgba(128, 128, 128, 0.253);\n}\n\n.cell:active {\n  scale: 1.1;\n}\n\n.placeableShip {\n  cursor: grab;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid #000;\n  display: inline-block;\n  background-color: lightgray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Roboto-BlackItalic.ttf":
/*!************************************!*\
  !*** ./src/Roboto-BlackItalic.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd62a10743bd89a3d97c.ttf";

/***/ }),

/***/ "./src/icon.jpg":
/*!**********************!*\
  !*** ./src/icon.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24078d96ff07c5ca9514.jpg";

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMController: () => (/* binding */ DOMController)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
// domController.js




class DOMController {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameOver = false;
    this.shipsPlaced = 0;
    this.totalShips = 5; // Total number of ships to place for each player
    this.currentOrientation = "horizontal"; // Default to horizontal
    this.initializeGame();
  }

  initializeGame() {
    this.renderBoards();
    this.renderShips(); // Render ships after boards
    this.addEventListeners();
    this.setupDragAndDrop();
    this.placeComputerShips();
    this.setupOrientationToggle();
  }

  setupOrientationToggle() {
    const orientationToggle = document.getElementById("orientation-toggle");
    orientationToggle.addEventListener("change", (event) => {
      this.currentOrientation = event.target.value;
    });
  }

  renderBoards() {
    this.renderBoard(this.player1, "player1-board", true);
    this.renderBoard(this.player2, "player2-board", false);
  }

  renderShips() {
    const shipsContainer = document.getElementById("ships");
    shipsContainer.innerHTML = ""; // Clear existing ships

    const ships = [
      { id: "carrier", length: 5, name: "Carrier" },
      { id: "battleship", length: 4, name: "Battleship" },
      { id: "destroyer", length: 3, name: "Destroyer" },
      { id: "submarine", length: 3, name: "Submarine" },
      { id: "patrolBoat", length: 2, name: "Patrol Boat" },
    ];

    ships.forEach((ship) => {
      const shipElement = document.createElement("div");
      shipElement.id = ship.id;
      shipElement.className = "placeableShip";
      shipElement.draggable = true;
      shipElement.dataset.length = ship.length;
      shipElement.textContent = ship.name;

      shipsContainer.appendChild(shipElement);
    });
  }

  renderBoard(player, boardId, showShips) {
    const board = document.getElementById(boardId);
    board.innerHTML = "";

    for (let row = 0; row < player.gameboard.size; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";

      for (let col = 0; col < player.gameboard.size; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;

        const positionKey = `${row},${col}`;

        if (showShips && player.gameboard.board[positionKey] !== null) {
          cell.classList.add("ship");
        }

        if (player.gameboard.hits.has(positionKey)) {
          cell.classList.add("hit");
        } else if (player.gameboard.missedShots.has(positionKey)) {
          cell.classList.add("miss");
        }

        rowDiv.appendChild(cell);
      }

      board.appendChild(rowDiv);
    }
  }

  addEventListeners() {
    const player2Board = document.getElementById("player2-board");
    player2Board.addEventListener("click", this.handleAttack.bind(this));

    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", this.restartGame.bind(this));
  }

  handleAttack(event) {
    event.preventDefault();
    if (this.gameOver || this.shipsPlaced < this.totalShips) return; // Only allow attacks after all ships are placed

    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (!row || !col) return;

    const positionKey = `${row},${col}`;

    if (
      this.player2.gameboard.hits.has(positionKey) ||
      this.player2.gameboard.missedShots.has(positionKey)
    ) {
      return;
    }

    if (this.currentPlayer === this.player1) {
      this.player1Attack(row, col);
    }
  }

  player1Attack(row, col) {
    const hit = this.player2.gameboard.receiveAttack(row, col);
    this.updateBoard(this.player2, "player2-board", row, col, hit);

    if (this.player2.gameboard.allShipsSunk()) {
      alert(`${this.player1.name} wins!`);
      this.gameOver = true;
      return;
    }

    this.currentPlayer = this.player2;
    this.computerAttack();
  }

  computerAttack() {
    if (this.gameOver) return;

    let row, col, positionKey;
    do {
      row = Math.floor(Math.random() * this.player1.gameboard.size);
      col = Math.floor(Math.random() * this.player1.gameboard.size);
      positionKey = `${row},${col}`;
    } while (
      this.player1.gameboard.hits.has(positionKey) ||
      this.player1.gameboard.missedShots.has(positionKey)
    );

    const hit = this.player1.gameboard.receiveAttack(row, col);
    this.updateBoard(this.player1, "player1-board", row, col, hit);

    if (this.player1.gameboard.allShipsSunk()) {
      alert(`${this.player2.name} wins!`);
      this.gameOver = true;
      return;
    }

    this.currentPlayer = this.player1;
  }

  updateBoard(player, boardId, row, col, hit) {
    const board = document.getElementById(boardId);
    const cell = board.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    cell.className = hit ? "cell hit" : "cell miss";
  }

  restartGame() {
    this.player1.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(this.player1.gameboard.size);
    this.player2.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(this.player2.gameboard.size);

    this.currentPlayer = this.player1;
    this.gameOver = false;
    this.shipsPlaced = 0;

    this.initializeGame();
  }

  setupDragAndDrop() {
    const ships = document.querySelectorAll(".placeableShip");
    const board = document.getElementById("player1-board");

    ships.forEach((ship) => {
      ship.addEventListener("dragstart", this.dragStart);
    });

    board.addEventListener("dragover", this.dragOver);
    board.addEventListener("drop", this.drop.bind(this));
  }

  dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  dragOver(event) {
    event.preventDefault();
  }

  drop(event) {
    event.preventDefault();
    const shipId = event.dataTransfer.getData("text/plain");
    const shipElement = document.getElementById(shipId);
    const shipLength = parseInt(shipElement.dataset.length);
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    let num;
    if (shipId === "carrier") {
      num = 1;
    } else if (shipId === "battleship") {
      num = 2;
    } else if (shipId === "destroyer") {
      num = 3;
    } else if (shipId === "submarine") {
      num = 4;
    } else {
      num = 5;
    }
    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(num);

    // Check current orientation
    const horizontal = this.currentOrientation === "horizontal";

    if (this.player1.gameboard.placeShip(row, col, ship, !horizontal)) {
      this.renderBoard(this.player1, "player1-board", true);
      shipElement.remove();
      this.shipsPlaced++;

      if (this.shipsPlaced === this.totalShips) {
        this.startGame();
      }
    } else {
      alert("Invalid placement");
    }
  }

  placeComputerShips() {
    const ships = [
      new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(1),
      new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(2),
      new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(3),
      new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(4),
      new _ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(5),
    ];

    ships.forEach((ship) => {
      let placed = false;
      while (!placed) {
        const row = Math.floor(Math.random() * this.player2.gameboard.size);
        const col = Math.floor(Math.random() * this.player2.gameboard.size);
        const horizontal = Math.random() < 0.5;
        placed = this.player2.gameboard.placeShip(row, col, ship, horizontal);
      }
    });
  }

  startGame() {
    alert("All ships placed. The game begins!");
    // Any additional logic to start the game can be placed here
  }
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
  constructor(size) {
    this.size = size;
    this.board = {};
    this.missedShots = new Set();
    this.hits = new Set();
    this.ships = new Set();
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        this.board[`${row},${col}`] = null;
      }
    }
  }

  placeShip(row, col, ship, vertical = false) {
    let isOccupied = false;

    // Check if the ship fits within the board bounds
    if (vertical) {
      if (row + ship.length > this.size) return false;
    } else {
      if (col + ship.length > this.size) return false;
    }

    // Check if the space is already occupied
    if (vertical) {
      for (let length = 0; length < ship.length; length++) {
        if (this.board[`${row + length},${col}`] !== null) {
          isOccupied = true;
        }
      }
    } else {
      for (let length = 0; length < ship.length; length++) {
        if (this.board[`${row},${col + length}`] !== null) {
          isOccupied = true;
        }
      }
    }

    // Place the ship if the space is not occupied
    if (!isOccupied) {
      if (vertical) {
        for (let length = 0; length < ship.length; length++) {
          this.board[`${row + length},${col}`] = ship;
        }
      } else {
        for (let length = 0; length < ship.length; length++) {
          this.board[`${row},${col + length}`] = ship;
        }
      }
      this.ships.add(ship);
      return true;
    } else {
      return false;
    }
  }

  receiveAttack(row, col) {
    // Check if the attack is out of bounds
    const positionKey = `${row},${col}`;

    if (
      row < 0 ||
      row >= this.size ||
      col < 0 ||
      col >= this.size ||
      this.hits.has(positionKey) ||
      this.missedShots.has(positionKey)
    )
      return false;

    const ship = this.board[positionKey];

    if (ship !== null) {
      this.hits.add(positionKey);
      ship.hit();
      return true;
    } else {
      this.missedShots.add(positionKey);
      return false;
    }
  }

  allShipsSunk() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domController.js */ "./src/domController.js");
// index.js




// Create Players
const player1 = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player("Player 1", true, 10);
const player2 = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player("Computer", false, 10);

// Initialize DOM Controller
const domController = new _domController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController(player1, player2);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


class Player {
  constructor(name, isHuman, size) {
    this.name = name;
    this.type = isHuman;
    this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(size);
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value === true ? "human" : "computer";
  }

  get gameboard() {
    return this._gameboard;
  }

  set gameboard(value) {
    this._gameboard = value;
  }
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/*
    No  .Class of ship	Size
    1	Carrier	        5
    2	Battleship	    4
    3	Destroyer	    3
    4	Submarine	    3
    5	Patrol Boat	    2
*/

class Ship {
  constructor(num) {
    this.length = num;
    this.hits = 0;
    this.sunk = false;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    switch (value) {
      case 1:
        this._length = 5;
        break;
      case 2:
        this._length = 4;
        break;
      case 3:
        this._length = 3;
        break;
      case 4:
        this._length = 3;
        break;
      case 5:
        this._length = 2;
        break;
      default:
        this._length = 0;
        break;
    }
  }

  get hits() {
    return this._hits;
  }

  set hits(value) {
    this._hits = value;
  }

  get sunk() {
    return this._sunk;
  }

  set sunk(value) {
    this._sunk = value;
  }

  hit() {
    this.hits += 1;
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1CbGFja0l0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ljb24uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3R5bGVzLmNzcyAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uaGVsbG8ge1xuICBjb2xvcjogcmVkO1xuICBmb250LWZhbWlseTogXCJNeUZvbnRcIjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2VsbCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZWxsLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7IC8qIENvbG9yIHRvIGluZGljYXRlIGEgc2hpcCdzIHByZXNlbmNlICovXG59XG5cbi5jZWxsLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNlbGwubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbi5jZWxsOmhvdmVyOm5vdCguaGl0LCAubWlzcykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUzKTtcbn1cblxuLmNlbGw6YWN0aXZlIHtcbiAgc2NhbGU6IDEuMTtcbn1cblxuLnBsYWNlYWJsZVNoaXAge1xuICBjdXJzb3I6IGdyYWI7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGVBQWU7QUFDZjtFQUNFLHFCQUFxQjtFQUNyQiwrREFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsbURBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCLEVBQUUsd0NBQXdDO0FBQ3ZFOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3R5bGVzLmNzcyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vUm9ib3RvLUJsYWNrSXRhbGljLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5oZWxsbyB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ljb24uanBnXFxcIik7XFxufVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgLyogQ29sb3IgdG8gaW5kaWNhdGUgYSBzaGlwJ3MgcHJlc2VuY2UgKi9cXG59XFxuXFxuLmNlbGwuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGwubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uY2VsbDpob3Zlcjpub3QoLmhpdCwgLm1pc3MpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNTMpO1xcbn1cXG5cXG4uY2VsbDphY3RpdmUge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLnBsYWNlYWJsZVNoaXAge1xcbiAgY3Vyc29yOiBncmFiO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBkb21Db250cm9sbGVyLmpzXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuY2xhc3MgRE9NQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgIHRoaXMucGxheWVyMiA9IHBsYXllcjI7XG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gcGxheWVyMTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwc1BsYWNlZCA9IDA7XG4gICAgdGhpcy50b3RhbFNoaXBzID0gNTsgLy8gVG90YWwgbnVtYmVyIG9mIHNoaXBzIHRvIHBsYWNlIGZvciBlYWNoIHBsYXllclxuICAgIHRoaXMuY3VycmVudE9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7IC8vIERlZmF1bHQgdG8gaG9yaXpvbnRhbFxuICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemVHYW1lKCkge1xuICAgIHRoaXMucmVuZGVyQm9hcmRzKCk7XG4gICAgdGhpcy5yZW5kZXJTaGlwcygpOyAvLyBSZW5kZXIgc2hpcHMgYWZ0ZXIgYm9hcmRzXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0dXBEcmFnQW5kRHJvcCgpO1xuICAgIHRoaXMucGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgdGhpcy5zZXR1cE9yaWVudGF0aW9uVG9nZ2xlKCk7XG4gIH1cblxuICBzZXR1cE9yaWVudGF0aW9uVG9nZ2xlKCkge1xuICAgIGNvbnN0IG9yaWVudGF0aW9uVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmllbnRhdGlvbi10b2dnbGVcIik7XG4gICAgb3JpZW50YXRpb25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudE9yaWVudGF0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQm9hcmRzKCkge1xuICAgIHRoaXMucmVuZGVyQm9hcmQodGhpcy5wbGF5ZXIxLCBcInBsYXllcjEtYm9hcmRcIiwgdHJ1ZSk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZCh0aGlzLnBsYXllcjIsIFwicGxheWVyMi1ib2FyZFwiLCBmYWxzZSk7XG4gIH1cblxuICByZW5kZXJTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHNcIik7XG4gICAgc2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3Rpbmcgc2hpcHNcblxuICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgeyBpZDogXCJjYXJyaWVyXCIsIGxlbmd0aDogNSwgbmFtZTogXCJDYXJyaWVyXCIgfSxcbiAgICAgIHsgaWQ6IFwiYmF0dGxlc2hpcFwiLCBsZW5ndGg6IDQsIG5hbWU6IFwiQmF0dGxlc2hpcFwiIH0sXG4gICAgICB7IGlkOiBcImRlc3Ryb3llclwiLCBsZW5ndGg6IDMsIG5hbWU6IFwiRGVzdHJveWVyXCIgfSxcbiAgICAgIHsgaWQ6IFwic3VibWFyaW5lXCIsIGxlbmd0aDogMywgbmFtZTogXCJTdWJtYXJpbmVcIiB9LFxuICAgICAgeyBpZDogXCJwYXRyb2xCb2F0XCIsIGxlbmd0aDogMiwgbmFtZTogXCJQYXRyb2wgQm9hdFwiIH0sXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBFbGVtZW50LmlkID0gc2hpcC5pZDtcbiAgICAgIHNoaXBFbGVtZW50LmNsYXNzTmFtZSA9IFwicGxhY2VhYmxlU2hpcFwiO1xuICAgICAgc2hpcEVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIHNoaXBFbGVtZW50LmRhdGFzZXQubGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgICBzaGlwRWxlbWVudC50ZXh0Q29udGVudCA9IHNoaXAubmFtZTtcblxuICAgICAgc2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hpcEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyQm9hcmQocGxheWVyLCBib2FyZElkLCBzaG93U2hpcHMpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvYXJkSWQpO1xuICAgIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBwbGF5ZXIuZ2FtZWJvYXJkLnNpemU7IHJvdysrKSB7XG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93RGl2LmNsYXNzTmFtZSA9IFwicm93XCI7XG5cbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHBsYXllci5nYW1lYm9hcmQuc2l6ZTsgY29sKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjZWxsXCI7XG4gICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3c7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2w7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb25LZXkgPSBgJHtyb3d9LCR7Y29sfWA7XG5cbiAgICAgICAgaWYgKHNob3dTaGlwcyAmJiBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW3Bvc2l0aW9uS2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5oaXRzLmhhcyhwb3NpdGlvbktleSkpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmdhbWVib2FyZC5taXNzZWRTaG90cy5oYXMocG9zaXRpb25LZXkpKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvd0Rpdi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cblxuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93RGl2KTtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjItYm9hcmRcIik7XG4gICAgcGxheWVyMkJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUF0dGFjay5iaW5kKHRoaXMpKTtcblxuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnQtYnV0dG9uXCIpO1xuICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucmVzdGFydEdhbWUuYmluZCh0aGlzKSk7XG4gIH1cblxuICBoYW5kbGVBdHRhY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmdhbWVPdmVyIHx8IHRoaXMuc2hpcHNQbGFjZWQgPCB0aGlzLnRvdGFsU2hpcHMpIHJldHVybjsgLy8gT25seSBhbGxvdyBhdHRhY2tzIGFmdGVyIGFsbCBzaGlwcyBhcmUgcGxhY2VkXG5cbiAgICBjb25zdCByb3cgPSBldmVudC50YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgY29uc3QgY29sID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sO1xuXG4gICAgaWYgKCFyb3cgfHwgIWNvbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcG9zaXRpb25LZXkgPSBgJHtyb3d9LCR7Y29sfWA7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmhpdHMuaGFzKHBvc2l0aW9uS2V5KSB8fFxuICAgICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5taXNzZWRTaG90cy5oYXMocG9zaXRpb25LZXkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxKSB7XG4gICAgICB0aGlzLnBsYXllcjFBdHRhY2socm93LCBjb2wpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXllcjFBdHRhY2socm93LCBjb2wpIHtcbiAgICBjb25zdCBoaXQgPSB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2wpO1xuICAgIHRoaXMudXBkYXRlQm9hcmQodGhpcy5wbGF5ZXIyLCBcInBsYXllcjItYm9hcmRcIiwgcm93LCBjb2wsIGhpdCk7XG5cbiAgICBpZiAodGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgYWxlcnQoYCR7dGhpcy5wbGF5ZXIxLm5hbWV9IHdpbnMhYCk7XG4gICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjI7XG4gICAgdGhpcy5jb21wdXRlckF0dGFjaygpO1xuICB9XG5cbiAgY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHJldHVybjtcblxuICAgIGxldCByb3csIGNvbCwgcG9zaXRpb25LZXk7XG4gICAgZG8ge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5zaXplKTtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyMS5nYW1lYm9hcmQuc2l6ZSk7XG4gICAgICBwb3NpdGlvbktleSA9IGAke3Jvd30sJHtjb2x9YDtcbiAgICB9IHdoaWxlIChcbiAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQuaGl0cy5oYXMocG9zaXRpb25LZXkpIHx8XG4gICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmhhcyhwb3NpdGlvbktleSlcbiAgICApO1xuXG4gICAgY29uc3QgaGl0ID0gdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICB0aGlzLnVwZGF0ZUJvYXJkKHRoaXMucGxheWVyMSwgXCJwbGF5ZXIxLWJvYXJkXCIsIHJvdywgY29sLCBoaXQpO1xuXG4gICAgaWYgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGFsZXJ0KGAke3RoaXMucGxheWVyMi5uYW1lfSB3aW5zIWApO1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXIxO1xuICB9XG5cbiAgdXBkYXRlQm9hcmQocGxheWVyLCBib2FyZElkLCByb3csIGNvbCwgaGl0KSB7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib2FyZElkKTtcbiAgICBjb25zdCBjZWxsID0gYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCk7XG4gICAgY2VsbC5jbGFzc05hbWUgPSBoaXQgPyBcImNlbGwgaGl0XCIgOiBcImNlbGwgbWlzc1wiO1xuICB9XG5cbiAgcmVzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5zaXplKTtcbiAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCh0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnNpemUpO1xuXG4gICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXIxO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBzUGxhY2VkID0gMDtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZUdhbWUoKTtcbiAgfVxuXG4gIHNldHVwRHJhZ0FuZERyb3AoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYWNlYWJsZVNoaXBcIik7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjEtYm9hcmRcIik7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgdGhpcy5kcmFnU3RhcnQpO1xuICAgIH0pO1xuXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuZHJhZ092ZXIpO1xuICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIHRoaXMuZHJvcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBldmVudC50YXJnZXQuaWQpO1xuICB9XG5cbiAgZHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZHJvcChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2hpcElkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xuICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcElkKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGFyc2VJbnQoc2hpcEVsZW1lbnQuZGF0YXNldC5sZW5ndGgpO1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY29sID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuY29sKTtcblxuICAgIGxldCBudW07XG4gICAgaWYgKHNoaXBJZCA9PT0gXCJjYXJyaWVyXCIpIHtcbiAgICAgIG51bSA9IDE7XG4gICAgfSBlbHNlIGlmIChzaGlwSWQgPT09IFwiYmF0dGxlc2hpcFwiKSB7XG4gICAgICBudW0gPSAyO1xuICAgIH0gZWxzZSBpZiAoc2hpcElkID09PSBcImRlc3Ryb3llclwiKSB7XG4gICAgICBudW0gPSAzO1xuICAgIH0gZWxzZSBpZiAoc2hpcElkID09PSBcInN1Ym1hcmluZVwiKSB7XG4gICAgICBudW0gPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBudW0gPSA1O1xuICAgIH1cbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobnVtKTtcblxuICAgIC8vIENoZWNrIGN1cnJlbnQgb3JpZW50YXRpb25cbiAgICBjb25zdCBob3Jpem9udGFsID0gdGhpcy5jdXJyZW50T3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiO1xuXG4gICAgaWYgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2VTaGlwKHJvdywgY29sLCBzaGlwLCAhaG9yaXpvbnRhbCkpIHtcbiAgICAgIHRoaXMucmVuZGVyQm9hcmQodGhpcy5wbGF5ZXIxLCBcInBsYXllcjEtYm9hcmRcIiwgdHJ1ZSk7XG4gICAgICBzaGlwRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIHRoaXMuc2hpcHNQbGFjZWQrKztcblxuICAgICAgaWYgKHRoaXMuc2hpcHNQbGFjZWQgPT09IHRoaXMudG90YWxTaGlwcykge1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIkludmFsaWQgcGxhY2VtZW50XCIpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgIG5ldyBTaGlwKDEpLFxuICAgICAgbmV3IFNoaXAoMiksXG4gICAgICBuZXcgU2hpcCgzKSxcbiAgICAgIG5ldyBTaGlwKDQpLFxuICAgICAgbmV3IFNoaXAoNSksXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyMi5nYW1lYm9hcmQuc2l6ZSk7XG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyMi5nYW1lYm9hcmQuc2l6ZSk7XG4gICAgICAgIGNvbnN0IGhvcml6b250YWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgICAgICBwbGFjZWQgPSB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnBsYWNlU2hpcChyb3csIGNvbCwgc2hpcCwgaG9yaXpvbnRhbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgYWxlcnQoXCJBbGwgc2hpcHMgcGxhY2VkLiBUaGUgZ2FtZSBiZWdpbnMhXCIpO1xuICAgIC8vIEFueSBhZGRpdGlvbmFsIGxvZ2ljIHRvIHN0YXJ0IHRoZSBnYW1lIGNhbiBiZSBwbGFjZWQgaGVyZVxuICB9XG59XG5cbmV4cG9ydCB7IERPTUNvbnRyb2xsZXIgfTtcbiIsImNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMuYm9hcmQgPSB7fTtcbiAgICB0aGlzLm1pc3NlZFNob3RzID0gbmV3IFNldCgpO1xuICAgIHRoaXMuaGl0cyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnNoaXBzID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgICB0aGlzLmJvYXJkW2Ake3Jvd30sJHtjb2x9YF0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChyb3csIGNvbCwgc2hpcCwgdmVydGljYWwgPSBmYWxzZSkge1xuICAgIGxldCBpc09jY3VwaWVkID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBmaXRzIHdpdGhpbiB0aGUgYm9hcmQgYm91bmRzXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBpZiAocm93ICsgc2hpcC5sZW5ndGggPiB0aGlzLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbCArIHNoaXAubGVuZ3RoID4gdGhpcy5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHNwYWNlIGlzIGFscmVhZHkgb2NjdXBpZWRcbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGZvciAobGV0IGxlbmd0aCA9IDA7IGxlbmd0aCA8IHNoaXAubGVuZ3RoOyBsZW5ndGgrKykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtgJHtyb3cgKyBsZW5ndGh9LCR7Y29sfWBdICE9PSBudWxsKSB7XG4gICAgICAgICAgaXNPY2N1cGllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgbGVuZ3RoID0gMDsgbGVuZ3RoIDwgc2hpcC5sZW5ndGg7IGxlbmd0aCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2Ake3Jvd30sJHtjb2wgKyBsZW5ndGh9YF0gIT09IG51bGwpIHtcbiAgICAgICAgICBpc09jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBsYWNlIHRoZSBzaGlwIGlmIHRoZSBzcGFjZSBpcyBub3Qgb2NjdXBpZWRcbiAgICBpZiAoIWlzT2NjdXBpZWQpIHtcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSAwOyBsZW5ndGggPCBzaGlwLmxlbmd0aDsgbGVuZ3RoKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2Ake3JvdyArIGxlbmd0aH0sJHtjb2x9YF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBsZW5ndGggPSAwOyBsZW5ndGggPCBzaGlwLmxlbmd0aDsgbGVuZ3RoKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2Ake3Jvd30sJHtjb2wgKyBsZW5ndGh9YF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNoaXBzLmFkZChzaGlwKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBhdHRhY2sgaXMgb3V0IG9mIGJvdW5kc1xuICAgIGNvbnN0IHBvc2l0aW9uS2V5ID0gYCR7cm93fSwke2NvbH1gO1xuXG4gICAgaWYgKFxuICAgICAgcm93IDwgMCB8fFxuICAgICAgcm93ID49IHRoaXMuc2l6ZSB8fFxuICAgICAgY29sIDwgMCB8fFxuICAgICAgY29sID49IHRoaXMuc2l6ZSB8fFxuICAgICAgdGhpcy5oaXRzLmhhcyhwb3NpdGlvbktleSkgfHxcbiAgICAgIHRoaXMubWlzc2VkU2hvdHMuaGFzKHBvc2l0aW9uS2V5KVxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3Bvc2l0aW9uS2V5XTtcblxuICAgIGlmIChzaGlwICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhpdHMuYWRkKHBvc2l0aW9uS2V5KTtcbiAgICAgIHNoaXAuaGl0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5hZGQocG9zaXRpb25LZXkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGxldCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiLy8gaW5kZXguanNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IERPTUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kb21Db250cm9sbGVyLmpzXCI7XG5cbi8vIENyZWF0ZSBQbGF5ZXJzXG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihcIlBsYXllciAxXCIsIHRydWUsIDEwKTtcbmNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIiwgZmFsc2UsIDEwKTtcblxuLy8gSW5pdGlhbGl6ZSBET00gQ29udHJvbGxlclxuY29uc3QgZG9tQ29udHJvbGxlciA9IG5ldyBET01Db250cm9sbGVyKHBsYXllcjEsIHBsYXllcjIpO1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzSHVtYW4sIHNpemUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IGlzSHVtYW47XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHNpemUpO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgc2V0IHR5cGUodmFsdWUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWUgPT09IHRydWUgPyBcImh1bWFuXCIgOiBcImNvbXB1dGVyXCI7XG4gIH1cblxuICBnZXQgZ2FtZWJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lYm9hcmQ7XG4gIH1cblxuICBzZXQgZ2FtZWJvYXJkKHZhbHVlKSB7XG4gICAgdGhpcy5fZ2FtZWJvYXJkID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCIvKlxuICAgIE5vICAuQ2xhc3Mgb2Ygc2hpcFx0U2l6ZVxuICAgIDFcdENhcnJpZXJcdCAgICAgICAgNVxuICAgIDJcdEJhdHRsZXNoaXBcdCAgICA0XG4gICAgM1x0RGVzdHJveWVyXHQgICAgM1xuICAgIDRcdFN1Ym1hcmluZVx0ICAgIDNcbiAgICA1XHRQYXRyb2wgQm9hdFx0ICAgIDJcbiovXG5cbmNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihudW0pIHtcbiAgICB0aGlzLmxlbmd0aCA9IG51bTtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICB9XG5cbiAgc2V0IGxlbmd0aCh2YWx1ZSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICB0aGlzLl9sZW5ndGggPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpdHM7XG4gIH1cblxuICBzZXQgaGl0cyh2YWx1ZSkge1xuICAgIHRoaXMuX2hpdHMgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzdW5rKCkge1xuICAgIHJldHVybiB0aGlzLl9zdW5rO1xuICB9XG5cbiAgc2V0IHN1bmsodmFsdWUpIHtcbiAgICB0aGlzLl9zdW5rID0gdmFsdWU7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN1bms7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9