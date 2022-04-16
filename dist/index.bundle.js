/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 100px 1fr 100px;\n    grid-template-columns: 400px 1fr;\n    height: 100vh;\n}\n\nheader {\n    place-self: center;\n    grid-column: span 2;\n}\n\nfooter {\n    grid-column: span 2;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 50px 1fr;\n}\n\n.add-project {\n    place-self: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    gap: 10px;\n    border-right: 1px solid grey;\n}\n\n.project-title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.5rem;\n    user-select: none;\n    max-width: 400px;\n    align-self: start;\n    width: 100%;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    border-bottom: 1px solid grey;\n    box-shadow: 0px 15px 10px -18px #111;\n    padding: 15px;\n}\n\n.item-title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.25rem;\n}\n\n.item-delete {\n    align-self: flex-start;\n}\n\n.item-container {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.view {\n    padding: 15px;\n}\n\n.project-form-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, .5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.3s ease;\n}\n\n.project-form-container.show {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.item-form-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, .5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.3s ease;\n}\n\n.item-form-container.show {\n    opacity: 1;\n    pointer-events: auto;\n}\n\nform {\n    display: grid;\n    grid-template-columns:  auto 1fr;\n    gap: 15px;\n    border: 1px solid black;\n    width: 700px;\n    padding: 40px;\n    border-radius: 10px;\n    background-color: #fff;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);\n    font-size: 1.5rem;\n    align-items: center;\n}\n\nbutton {\n    padding: 8px 32px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);\n    background-color: rgb(67, 146, 43);\n    border-radius: 10px;\n    border: 0;\n    cursor: pointer;\n    color: #fff;\n    font-weight: bold;\n}\n\n.item-delete,\n.project-delete {\n    background-color: red;\n    margin-bottom: 10px;\n}\n\n.item-cancel,\n.project-cancel {\n    display: grid;\n    grid-column: 2;\n    justify-self: right;\n    place-items: center;\n    padding: 0px 6px;\n    font-size: 2rem;\n    background-color: rgb(255, 0, 0);\n}\n\n.item-submit,\n.project-submit {\n    grid-column: span 2;\n    place-self: center;\n}\n\n.invalid {\n    grid-row: 1;\n    font-size: 1rem;\n    color: red;\n    justify-self: right;\n    font-style: italic;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,gCAAgC;IAChC,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,4BAA4B;AAChC;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,6BAA6B;IAC7B,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,UAAU;IACV,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,UAAU;IACV,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,yCAAyC;IACzC,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,yCAAyC;IACzC,kCAAkC;IAClC,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,WAAW;IACX,iBAAiB;AACrB;;AAEA;;IAEI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,gCAAgC;AACpC;;AAEA;;IAEI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,UAAU;IACV,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: grid;\n    grid-template-rows: 100px 1fr 100px;\n    grid-template-columns: 400px 1fr;\n    height: 100vh;\n}\n\nheader {\n    place-self: center;\n    grid-column: span 2;\n}\n\nfooter {\n    grid-column: span 2;\n}\n\n.main {\n    display: grid;\n    grid-template-rows: 50px 1fr;\n}\n\n.add-project {\n    place-self: center;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    max-width: 400px;\n    gap: 10px;\n    border-right: 1px solid grey;\n}\n\n.project-title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.5rem;\n    user-select: none;\n    max-width: 400px;\n    align-self: start;\n    width: 100%;\n}\n\n.project-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    border-bottom: 1px solid grey;\n    box-shadow: 0px 15px 10px -18px #111;\n    padding: 15px;\n}\n\n.item-title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.25rem;\n}\n\n.item-delete {\n    align-self: flex-start;\n}\n\n.item-container {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.view {\n    padding: 15px;\n}\n\n.project-form-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, .5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.3s ease;\n}\n\n.project-form-container.show {\n    opacity: 1;\n    pointer-events: auto;\n}\n\n.item-form-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0, 0, 0, .5);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.3s ease;\n}\n\n.item-form-container.show {\n    opacity: 1;\n    pointer-events: auto;\n}\n\nform {\n    display: grid;\n    grid-template-columns:  auto 1fr;\n    gap: 15px;\n    border: 1px solid black;\n    width: 700px;\n    padding: 40px;\n    border-radius: 10px;\n    background-color: #fff;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);\n    font-size: 1.5rem;\n    align-items: center;\n}\n\nbutton {\n    padding: 8px 32px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);\n    background-color: rgb(67, 146, 43);\n    border-radius: 10px;\n    border: 0;\n    cursor: pointer;\n    color: #fff;\n    font-weight: bold;\n}\n\n.item-delete,\n.project-delete {\n    background-color: red;\n    margin-bottom: 10px;\n}\n\n.item-cancel,\n.project-cancel {\n    display: grid;\n    grid-column: 2;\n    justify-self: right;\n    place-items: center;\n    padding: 0px 6px;\n    font-size: 2rem;\n    background-color: rgb(255, 0, 0);\n}\n\n.item-submit,\n.project-submit {\n    grid-column: span 2;\n    place-self: center;\n}\n\n.invalid {\n    grid-row: 1;\n    font-size: 1rem;\n    color: red;\n    justify-self: right;\n    font-style: italic;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory)
/* harmony export */ });
// This file will be used for application logic

const todoFactory = (title, description, dueDate, priority, notes) => {
    
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    }
}

const projectFactory = (title) => {
    const itemArray = []
    return {
        title,
        itemArray
    }
}

const addProject = (projectArray) => {
    const newProj = projectFactory(document.querySelector(`#project-title`).value)
    projectArray.push(newProj)
    // newProj.itemArray = []
}

const deleteProject = (event, projectArray) => {
    const projectIndex = event.target.getAttribute(`project-index`)
    projectArray.splice(projectIndex, 1)
}

const addTodo = (projectIndex, projectArray) => {
    const newItem = todoFactory(document.querySelector(`#item-title`).value, document.querySelector(`#item-description`).value, document.querySelector(`#item-dueDate`).value, document.querySelector(`#item-priority`).value, document.querySelector(`#item-notes`).value)
    const selectedProject = projectArray[projectIndex]
    selectedProject.itemArray.push(newItem)
}

const deleteTodo = (event, projectArray) => {
     // We go up parent elements from the delete button to select the project index div and get its correlated project index position
     const projectIndex = event.target.parentElement.getAttribute(`project-index`)
     // We select the delete button to get its correlated item index posiition
     const itemIndex = event.target.getAttribute(`item-index`)
     // Then we select the correct project object inside the project array
     const selectedProject = projectArray[projectIndex]
     // Finally we access the itemArray inside of the correct project and splice out the Todo item
     selectedProject.itemArray.splice(itemIndex, 1)
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
// This file will be used to manipulate DOM



// import icon from `../src/noun-down-arrow-1786976.png`

const content = document.querySelector(`.content`)
const projectFormContainer = document.querySelector(`.project-form-container`)
const itemFormContainer = document.querySelector(`.item-form-container`)
const view = document.querySelector(`.view`)
const invalidEntry = document.querySelectorAll(`.invalid`)
console.log(invalidEntry.item(1))

const defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(`Starting List`)
let projectArray = [defaultProject]


const display = () => {
    content.innerHTML = ``
    view.innerHTML = ``
    console.log(projectArray)

    projectArray.forEach((e, projectIndex) => {
        const projectContainer = document.createElement(`div`)
        projectContainer.setAttribute(`project-index`, projectIndex)
        projectContainer.classList.add(`project-container`)
        content.appendChild(projectContainer)

        const projectTitle = document.createElement(`div`)
        projectTitle.setAttribute(`project-index`, projectIndex)
        projectTitle.classList.add(`project-title`)
        projectContainer.appendChild(projectTitle)
            const titleText = document.createElement(`div`)
            titleText.setAttribute(`project-index`, projectIndex)
            titleText.classList.add(`project-title`)
            titleText.textContent = `${e.title} - ${e.itemArray.length} items`
            projectTitle.appendChild(titleText)
            // const dropdown = document.createElement(`img`)
            // dropdown.src = `../src/noun-down-arrow-1786976.png`
            // projectTitle.appendChild(dropdown)

        const itemContainer = document.createElement(`div`)
        itemContainer.setAttribute(`project-index`, projectIndex)
        itemContainer.classList.add(`item-container`)
        view.appendChild(itemContainer)

        const viewTitle = document.createElement(`div`)
        viewTitle.setAttribute(`project-index`, projectIndex)
        viewTitle.classList.add(`project-title`)
        viewTitle.textContent = e.title
        itemContainer.appendChild(viewTitle)

        const addItem = document.createElement(`button`)
        addItem.setAttribute(`project-index`, projectIndex)
        addItem.classList.add(`add-item`)
        addItem.textContent = `+Item`
        projectContainer.appendChild(addItem)

        const deleteProject = document.createElement(`button`)
        deleteProject.setAttribute(`project-index`, projectIndex)
        deleteProject.classList.add(`project-delete`)
        deleteProject.textContent = `Delete Project`
        projectContainer.appendChild(deleteProject)

        // Iterates through each project object's itemArray which contains the project's todos and then posts each todo property to the webpage.
        e.itemArray.forEach((e, itemIndex) => {
            const itemTitle = document.createElement(`div`)
            itemTitle.setAttribute(`item-index`, itemIndex)
            itemTitle.classList.add(`item-title`)
            itemTitle.textContent = e.title
            itemContainer.appendChild(itemTitle)

            if (e.description !== ``) {
                const itemDesc = document.createElement(`div`)
                itemDesc.setAttribute(`item-index`, itemIndex)
                itemDesc.setAttribute(`project-index`, projectIndex)
                itemDesc.classList.add(`item-description`)
                itemDesc.textContent = `Description: ${e.description}`
                itemContainer.appendChild(itemDesc)
            }
            
            if (e.dueDate !== ``) {
                const itemDue = document.createElement(`div`)
                itemDue.setAttribute(`item-index`, itemIndex)
                itemDue.setAttribute(`project-index`, projectIndex)
                itemDue.classList.add(`item-dueDate`)
                itemDue.textContent = `Due Date: ${e.dueDate}`
                itemContainer.appendChild(itemDue)
            }

            if (e.priority !== ``) {
                const itemPriority = document.createElement(`div`)
                itemPriority.setAttribute(`item-index`, itemIndex)
                itemPriority.setAttribute(`project-index`, projectIndex)
                itemPriority.classList.add(`item-priority`)
                itemPriority.textContent = `Priority: ${e.priority}`
                itemContainer.appendChild(itemPriority)
            }

            if (e.notes !== ``) {
                const itemNotes = document.createElement(`div`)
                itemNotes.setAttribute(`item-index`, itemIndex)
                itemNotes.setAttribute(`project-index`, projectIndex)
                itemNotes.classList.add(`item-notes`)
                itemNotes.textContent = `Notes: ${e.notes}`
                itemContainer.appendChild(itemNotes)
            }

            const itemDelete = document.createElement(`button`)
            itemDelete.setAttribute(`item-index`, itemIndex)
            itemDelete.setAttribute(`project-index`, projectIndex)
            itemDelete.classList.add(`item-delete`)
            itemDelete.textContent = `Delete Item`
            itemContainer.appendChild(itemDelete)
        })
    })
    // Hides all project items
    const itemContainerNode = document.querySelectorAll(`.item-container`)
    itemContainerNode.forEach((e) => {
        e.style.display = `none`
    })
}
display()

// Displays the project item(s) that was just manipulated
const displayCurrent = (event) => {
    const projectIndex = event.target.getAttribute(`project-index`)
    const itemContainerNode = document.querySelectorAll(`.item-container`)
    // Iterates through node list of item-containers until we reach the one we clicked on then executes our dropdown style change.
    itemContainerNode.forEach((e) => {
        if (e.getAttribute(`project-index`) === projectIndex){
            e.style.display  = `flex`
        }
        else {
            e.style.display = `none`
        }
    })
}

// When project/item form is submitted/cancelled out we run this function. Created this so that if future form cancel/submit logic needs to be changed it can all be done right here
const formOpenOrExit = (formContainer, addOrRemove) => {
    if (addOrRemove === `add`) {
        formContainer.classList.add(`show`)
    }
    if (addOrRemove === `remove`) {
        formContainer.classList.remove(`show`)
        if (formContainer === itemFormContainer) {
            // Each time item modal is displayed, a submit button is created. This makes sure it is deleted upon modal closure. This ensures that we dont keep adding submit buttons onto the modal infinitely.
            document.querySelector(`.item-submit`).remove()
        }
    }
}



document.querySelector(`.add-project`).addEventListener(`click`, () => {
    invalidEntry.item(0).style.display = `none`
    formOpenOrExit(projectFormContainer, `add`)
})
document.querySelector(`.project-submit`).addEventListener(`click`, () => {
    if (document.getElementById(`project-title`).value === ``) {
        invalidEntry.item(0).style.display = `grid`
    }
    else {
        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addProject)(projectArray)
        display()
        formOpenOrExit(projectFormContainer, `remove`)
    }
    
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-delete`)) {
        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(event, projectArray)
        display()
    }
})
document.querySelector(`.project-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(projectFormContainer, `remove`)
})

// Adding item takes far more code than adding project because there is only one add project button vs many add item buttons. We need to be able to tell addTodo() which project we are adding an item to
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`add-item`)) {
        invalidEntry.item(1).style.display = `none`
        // Prevents add item button from being accessed with spacebar whilst inside of modal
        document.querySelector(`.add-item`).disabled = true
        formOpenOrExit(itemFormContainer, `add`)
        const button = document.createElement(`button`)
        button.classList.add(`item-submit`)
        button.textContent = `Submit`
        button.type = `button`
        // We pass the project index value on from the add-item button to the newly created item-submit button.
        button.setAttribute(`project-index`, event.target.getAttribute(`project-index`))
        document.querySelector(`.item-form`).appendChild(button)
    }
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-submit`)) {
        const button = document.querySelector(`.item-submit`)
        const projectIndex = button.getAttribute(`project-index`)
        
        if (document.getElementById(`item-title`).value === ``) {
            invalidEntry.item(1).style.display = `grid`
        }
        // We use the previously created button value to tell addTodo() which project we are adding a todo item to.
        else {
            (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addTodo)(projectIndex, projectArray)
            display()
            displayCurrent(event)
            formOpenOrExit(itemFormContainer, `remove`)
        }
    }
})
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`item-delete`)) {
        (0,_todo__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(event, projectArray)
        display()
        displayCurrent(event)
    }
})
document.querySelector(`.item-cancel`).addEventListener(`click`, () => {
    formOpenOrExit(itemFormContainer, `remove`)
    document.querySelector(`.add-item`).disabled = false
})

// This controls dropdown functionality when clicking on a project
document.addEventListener(`click`, (event) => {
    if (event.target.classList.contains(`project-title`)) {
        const projectIndex = event.target.getAttribute(`project-index`)
        const itemContainerNode = document.querySelectorAll(`.item-container`)
        // Iterates through node list of item-containers until we reach the one we clicked on then executes our dropdown style change.
        itemContainerNode.forEach((e) => {
            if (e.getAttribute(`project-index`) === projectIndex){
                e.style.display  = `flex`
            }
            else {
                e.style.display = `none`
            }
        })
    }
})

// Disabled enter key
document.addEventListener(`keypress`, (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4Q0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxRQUFRLGlEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE4cHggIzExMTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uaXRlbS1kZWxldGUge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi52aWV3IHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIuc2hvdyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lci5zaG93IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCAxNDYsIDQzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLml0ZW0tZGVsZXRlLFxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLml0ZW0tY2FuY2VsLFxcbi5wcm9qZWN0LWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4uaXRlbS1zdWJtaXQsXFxuLnByb2plY3Qtc3VibWl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnIgMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JleTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE4cHggIzExMTtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uaXRlbS1kZWxldGUge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uaXRlbS1jb250YWluZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi52aWV3IHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIuc2hvdyB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lci5zaG93IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICBhdXRvIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCAxNDYsIDQzKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLml0ZW0tZGVsZXRlLFxcbi5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLml0ZW0tY2FuY2VsLFxcbi5wcm9qZWN0LWNhbmNlbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4uaXRlbS1zdWJtaXQsXFxuLnByb2plY3Qtc3VibWl0IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGlzIGZpbGUgd2lsbCBiZSB1c2VkIGZvciBhcHBsaWNhdGlvbiBsb2dpY1xuXG5leHBvcnQgY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBub3Rlc1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgaXRlbUFycmF5ID0gW11cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgaXRlbUFycmF5XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qID0gcHJvamVjdEZhY3RvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtdGl0bGVgKS52YWx1ZSlcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qKVxuICAgIC8vIG5ld1Byb2ouaXRlbUFycmF5ID0gW11cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZXZlbnQsIHByb2plY3RBcnJheSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgKVxuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKVxufVxuXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0SW5kZXgsIHByb2plY3RBcnJheSkgPT4ge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSB0b2RvRmFjdG9yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaXRlbS10aXRsZWApLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaXRlbS1kZXNjcmlwdGlvbmApLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaXRlbS1kdWVEYXRlYCkudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpdGVtLXByaW9yaXR5YCkudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNpdGVtLW5vdGVzYCkudmFsdWUpXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF1cbiAgICBzZWxlY3RlZFByb2plY3QuaXRlbUFycmF5LnB1c2gobmV3SXRlbSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvZG8gPSAoZXZlbnQsIHByb2plY3RBcnJheSkgPT4ge1xuICAgICAvLyBXZSBnbyB1cCBwYXJlbnQgZWxlbWVudHMgZnJvbSB0aGUgZGVsZXRlIGJ1dHRvbiB0byBzZWxlY3QgdGhlIHByb2plY3QgaW5kZXggZGl2IGFuZCBnZXQgaXRzIGNvcnJlbGF0ZWQgcHJvamVjdCBpbmRleCBwb3NpdGlvblxuICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgKVxuICAgICAvLyBXZSBzZWxlY3QgdGhlIGRlbGV0ZSBidXR0b24gdG8gZ2V0IGl0cyBjb3JyZWxhdGVkIGl0ZW0gaW5kZXggcG9zaWl0aW9uXG4gICAgIGNvbnN0IGl0ZW1JbmRleCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoYGl0ZW0taW5kZXhgKVxuICAgICAvLyBUaGVuIHdlIHNlbGVjdCB0aGUgY29ycmVjdCBwcm9qZWN0IG9iamVjdCBpbnNpZGUgdGhlIHByb2plY3QgYXJyYXlcbiAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF1cbiAgICAgLy8gRmluYWxseSB3ZSBhY2Nlc3MgdGhlIGl0ZW1BcnJheSBpbnNpZGUgb2YgdGhlIGNvcnJlY3QgcHJvamVjdCBhbmQgc3BsaWNlIG91dCB0aGUgVG9kbyBpdGVtXG4gICAgIHNlbGVjdGVkUHJvamVjdC5pdGVtQXJyYXkuc3BsaWNlKGl0ZW1JbmRleCwgMSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVGhpcyBmaWxlIHdpbGwgYmUgdXNlZCB0byBtYW5pcHVsYXRlIERPTVxuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5LCBhZGRUb2RvLCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBkZWxldGVUb2RvIH0gZnJvbSAnLi90b2RvJztcbi8vIGltcG9ydCBpY29uIGZyb20gYC4uL3NyYy9ub3VuLWRvd24tYXJyb3ctMTc4Njk3Ni5wbmdgXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGVudGApXG5jb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWZvcm0tY29udGFpbmVyYClcbmNvbnN0IGl0ZW1Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLml0ZW0tZm9ybS1jb250YWluZXJgKVxuY29uc3QgdmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC52aWV3YClcbmNvbnN0IGludmFsaWRFbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5pbnZhbGlkYClcbmNvbnNvbGUubG9nKGludmFsaWRFbnRyeS5pdGVtKDEpKVxuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KGBTdGFydGluZyBMaXN0YClcbmxldCBwcm9qZWN0QXJyYXkgPSBbZGVmYXVsdFByb2plY3RdXG5cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBgYFxuICAgIHZpZXcuaW5uZXJIVE1MID0gYGBcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG5cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgoZSwgcHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShgcHJvamVjdC1pbmRleGAsIHByb2plY3RJbmRleClcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0LWNvbnRhaW5lcmApXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCwgcHJvamVjdEluZGV4KVxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChgcHJvamVjdC10aXRsZWApXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgICAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICAgICAgICAgIHRpdGxlVGV4dC5zZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgLCBwcm9qZWN0SW5kZXgpXG4gICAgICAgICAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZChgcHJvamVjdC10aXRsZWApXG4gICAgICAgICAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBgJHtlLnRpdGxlfSAtICR7ZS5pdGVtQXJyYXkubGVuZ3RofSBpdGVtc2BcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpXG4gICAgICAgICAgICAvLyBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGltZ2ApXG4gICAgICAgICAgICAvLyBkcm9wZG93bi5zcmMgPSBgLi4vc3JjL25vdW4tZG93bi1hcnJvdy0xNzg2OTc2LnBuZ2BcbiAgICAgICAgICAgIC8vIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChkcm9wZG93bilcblxuICAgICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICAgICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgLCBwcm9qZWN0SW5kZXgpXG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChgaXRlbS1jb250YWluZXJgKVxuICAgICAgICB2aWV3LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpXG5cbiAgICAgICAgY29uc3Qgdmlld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICAgICAgdmlld1RpdGxlLnNldEF0dHJpYnV0ZShgcHJvamVjdC1pbmRleGAsIHByb2plY3RJbmRleClcbiAgICAgICAgdmlld1RpdGxlLmNsYXNzTGlzdC5hZGQoYHByb2plY3QtdGl0bGVgKVxuICAgICAgICB2aWV3VGl0bGUudGV4dENvbnRlbnQgPSBlLnRpdGxlXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodmlld1RpdGxlKVxuXG4gICAgICAgIGNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKVxuICAgICAgICBhZGRJdGVtLnNldEF0dHJpYnV0ZShgcHJvamVjdC1pbmRleGAsIHByb2plY3RJbmRleClcbiAgICAgICAgYWRkSXRlbS5jbGFzc0xpc3QuYWRkKGBhZGQtaXRlbWApXG4gICAgICAgIGFkZEl0ZW0udGV4dENvbnRlbnQgPSBgK0l0ZW1gXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkSXRlbSlcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYClcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgLCBwcm9qZWN0SW5kZXgpXG4gICAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChgcHJvamVjdC1kZWxldGVgKVxuICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gYERlbGV0ZSBQcm9qZWN0YFxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpXG5cbiAgICAgICAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBlYWNoIHByb2plY3Qgb2JqZWN0J3MgaXRlbUFycmF5IHdoaWNoIGNvbnRhaW5zIHRoZSBwcm9qZWN0J3MgdG9kb3MgYW5kIHRoZW4gcG9zdHMgZWFjaCB0b2RvIHByb3BlcnR5IHRvIHRoZSB3ZWJwYWdlLlxuICAgICAgICBlLml0ZW1BcnJheS5mb3JFYWNoKChlLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApXG4gICAgICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKGBpdGVtLWluZGV4YCwgaXRlbUluZGV4KVxuICAgICAgICAgICAgaXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoYGl0ZW0tdGl0bGVgKVxuICAgICAgICAgICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gZS50aXRsZVxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtVGl0bGUpXG5cbiAgICAgICAgICAgIGlmIChlLmRlc2NyaXB0aW9uICE9PSBgYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICAgICAgICAgICAgICBpdGVtRGVzYy5zZXRBdHRyaWJ1dGUoYGl0ZW0taW5kZXhgLCBpdGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgaXRlbURlc2Muc2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCwgcHJvamVjdEluZGV4KVxuICAgICAgICAgICAgICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoYGl0ZW0tZGVzY3JpcHRpb25gKVxuICAgICAgICAgICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke2UuZGVzY3JpcHRpb259YFxuICAgICAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2MpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLmR1ZURhdGUgIT09IGBgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApXG4gICAgICAgICAgICAgICAgaXRlbUR1ZS5zZXRBdHRyaWJ1dGUoYGl0ZW0taW5kZXhgLCBpdGVtSW5kZXgpXG4gICAgICAgICAgICAgICAgaXRlbUR1ZS5zZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgLCBwcm9qZWN0SW5kZXgpXG4gICAgICAgICAgICAgICAgaXRlbUR1ZS5jbGFzc0xpc3QuYWRkKGBpdGVtLWR1ZURhdGVgKVxuICAgICAgICAgICAgICAgIGl0ZW1EdWUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7ZS5kdWVEYXRlfWBcbiAgICAgICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EdWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLnByaW9yaXR5ICE9PSBgYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApXG4gICAgICAgICAgICAgICAgaXRlbVByaW9yaXR5LnNldEF0dHJpYnV0ZShgaXRlbS1pbmRleGAsIGl0ZW1JbmRleClcbiAgICAgICAgICAgICAgICBpdGVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCwgcHJvamVjdEluZGV4KVxuICAgICAgICAgICAgICAgIGl0ZW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKGBpdGVtLXByaW9yaXR5YClcbiAgICAgICAgICAgICAgICBpdGVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7ZS5wcmlvcml0eX1gXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpb3JpdHkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLm5vdGVzICE9PSBgYCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApXG4gICAgICAgICAgICAgICAgaXRlbU5vdGVzLnNldEF0dHJpYnV0ZShgaXRlbS1pbmRleGAsIGl0ZW1JbmRleClcbiAgICAgICAgICAgICAgICBpdGVtTm90ZXMuc2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCwgcHJvamVjdEluZGV4KVxuICAgICAgICAgICAgICAgIGl0ZW1Ob3Rlcy5jbGFzc0xpc3QuYWRkKGBpdGVtLW5vdGVzYClcbiAgICAgICAgICAgICAgICBpdGVtTm90ZXMudGV4dENvbnRlbnQgPSBgTm90ZXM6ICR7ZS5ub3Rlc31gXG4gICAgICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTm90ZXMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKVxuICAgICAgICAgICAgaXRlbURlbGV0ZS5zZXRBdHRyaWJ1dGUoYGl0ZW0taW5kZXhgLCBpdGVtSW5kZXgpXG4gICAgICAgICAgICBpdGVtRGVsZXRlLnNldEF0dHJpYnV0ZShgcHJvamVjdC1pbmRleGAsIHByb2plY3RJbmRleClcbiAgICAgICAgICAgIGl0ZW1EZWxldGUuY2xhc3NMaXN0LmFkZChgaXRlbS1kZWxldGVgKVxuICAgICAgICAgICAgaXRlbURlbGV0ZS50ZXh0Q29udGVudCA9IGBEZWxldGUgSXRlbWBcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlbGV0ZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIC8vIEhpZGVzIGFsbCBwcm9qZWN0IGl0ZW1zXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuaXRlbS1jb250YWluZXJgKVxuICAgIGl0ZW1Db250YWluZXJOb2RlLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gYG5vbmVgXG4gICAgfSlcbn1cbmRpc3BsYXkoKVxuXG4vLyBEaXNwbGF5cyB0aGUgcHJvamVjdCBpdGVtKHMpIHRoYXQgd2FzIGp1c3QgbWFuaXB1bGF0ZWRcbmNvbnN0IGRpc3BsYXlDdXJyZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShgcHJvamVjdC1pbmRleGApXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuaXRlbS1jb250YWluZXJgKVxuICAgIC8vIEl0ZXJhdGVzIHRocm91Z2ggbm9kZSBsaXN0IG9mIGl0ZW0tY29udGFpbmVycyB1bnRpbCB3ZSByZWFjaCB0aGUgb25lIHdlIGNsaWNrZWQgb24gdGhlbiBleGVjdXRlcyBvdXIgZHJvcGRvd24gc3R5bGUgY2hhbmdlLlxuICAgIGl0ZW1Db250YWluZXJOb2RlLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZ2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCkgPT09IHByb2plY3RJbmRleCl7XG4gICAgICAgICAgICBlLnN0eWxlLmRpc3BsYXkgID0gYGZsZXhgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlLnN0eWxlLmRpc3BsYXkgPSBgbm9uZWBcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIFdoZW4gcHJvamVjdC9pdGVtIGZvcm0gaXMgc3VibWl0dGVkL2NhbmNlbGxlZCBvdXQgd2UgcnVuIHRoaXMgZnVuY3Rpb24uIENyZWF0ZWQgdGhpcyBzbyB0aGF0IGlmIGZ1dHVyZSBmb3JtIGNhbmNlbC9zdWJtaXQgbG9naWMgbmVlZHMgdG8gYmUgY2hhbmdlZCBpdCBjYW4gYWxsIGJlIGRvbmUgcmlnaHQgaGVyZVxuY29uc3QgZm9ybU9wZW5PckV4aXQgPSAoZm9ybUNvbnRhaW5lciwgYWRkT3JSZW1vdmUpID0+IHtcbiAgICBpZiAoYWRkT3JSZW1vdmUgPT09IGBhZGRgKSB7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChgc2hvd2ApXG4gICAgfVxuICAgIGlmIChhZGRPclJlbW92ZSA9PT0gYHJlbW92ZWApIHtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGBzaG93YClcbiAgICAgICAgaWYgKGZvcm1Db250YWluZXIgPT09IGl0ZW1Gb3JtQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyBFYWNoIHRpbWUgaXRlbSBtb2RhbCBpcyBkaXNwbGF5ZWQsIGEgc3VibWl0IGJ1dHRvbiBpcyBjcmVhdGVkLiBUaGlzIG1ha2VzIHN1cmUgaXQgaXMgZGVsZXRlZCB1cG9uIG1vZGFsIGNsb3N1cmUuIFRoaXMgZW5zdXJlcyB0aGF0IHdlIGRvbnQga2VlcCBhZGRpbmcgc3VibWl0IGJ1dHRvbnMgb250byB0aGUgbW9kYWwgaW5maW5pdGVseS5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pdGVtLXN1Ym1pdGApLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkLXByb2plY3RgKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICBpbnZhbGlkRW50cnkuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gYG5vbmVgXG4gICAgZm9ybU9wZW5PckV4aXQocHJvamVjdEZvcm1Db250YWluZXIsIGBhZGRgKVxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LXN1Ym1pdGApLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC10aXRsZWApLnZhbHVlID09PSBgYCkge1xuICAgICAgICBpbnZhbGlkRW50cnkuaXRlbSgwKS5zdHlsZS5kaXNwbGF5ID0gYGdyaWRgXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhZGRQcm9qZWN0KHByb2plY3RBcnJheSlcbiAgICAgICAgZGlzcGxheSgpXG4gICAgICAgIGZvcm1PcGVuT3JFeGl0KHByb2plY3RGb3JtQ29udGFpbmVyLCBgcmVtb3ZlYClcbiAgICB9XG4gICAgXG59KVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgcHJvamVjdC1kZWxldGVgKSkge1xuICAgICAgICBkZWxldGVQcm9qZWN0KGV2ZW50LCBwcm9qZWN0QXJyYXkpXG4gICAgICAgIGRpc3BsYXkoKVxuICAgIH1cbn0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1jYW5jZWxgKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsICgpID0+IHtcbiAgICBmb3JtT3Blbk9yRXhpdChwcm9qZWN0Rm9ybUNvbnRhaW5lciwgYHJlbW92ZWApXG59KVxuXG4vLyBBZGRpbmcgaXRlbSB0YWtlcyBmYXIgbW9yZSBjb2RlIHRoYW4gYWRkaW5nIHByb2plY3QgYmVjYXVzZSB0aGVyZSBpcyBvbmx5IG9uZSBhZGQgcHJvamVjdCBidXR0b24gdnMgbWFueSBhZGQgaXRlbSBidXR0b25zLiBXZSBuZWVkIHRvIGJlIGFibGUgdG8gdGVsbCBhZGRUb2RvKCkgd2hpY2ggcHJvamVjdCB3ZSBhcmUgYWRkaW5nIGFuIGl0ZW0gdG9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYGFkZC1pdGVtYCkpIHtcbiAgICAgICAgaW52YWxpZEVudHJ5Lml0ZW0oMSkuc3R5bGUuZGlzcGxheSA9IGBub25lYFxuICAgICAgICAvLyBQcmV2ZW50cyBhZGQgaXRlbSBidXR0b24gZnJvbSBiZWluZyBhY2Nlc3NlZCB3aXRoIHNwYWNlYmFyIHdoaWxzdCBpbnNpZGUgb2YgbW9kYWxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFkZC1pdGVtYCkuZGlzYWJsZWQgPSB0cnVlXG4gICAgICAgIGZvcm1PcGVuT3JFeGl0KGl0ZW1Gb3JtQ29udGFpbmVyLCBgYWRkYClcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYClcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYGl0ZW0tc3VibWl0YClcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gYFN1Ym1pdGBcbiAgICAgICAgYnV0dG9uLnR5cGUgPSBgYnV0dG9uYFxuICAgICAgICAvLyBXZSBwYXNzIHRoZSBwcm9qZWN0IGluZGV4IHZhbHVlIG9uIGZyb20gdGhlIGFkZC1pdGVtIGJ1dHRvbiB0byB0aGUgbmV3bHkgY3JlYXRlZCBpdGVtLXN1Ym1pdCBidXR0b24uXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoYHByb2plY3QtaW5kZXhgLCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCkpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pdGVtLWZvcm1gKS5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgfVxufSlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYGl0ZW0tc3VibWl0YCkpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLml0ZW0tc3VibWl0YClcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gYnV0dG9uLmdldEF0dHJpYnV0ZShgcHJvamVjdC1pbmRleGApXG4gICAgICAgIFxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGl0ZW0tdGl0bGVgKS52YWx1ZSA9PT0gYGApIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeS5pdGVtKDEpLnN0eWxlLmRpc3BsYXkgPSBgZ3JpZGBcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSB1c2UgdGhlIHByZXZpb3VzbHkgY3JlYXRlZCBidXR0b24gdmFsdWUgdG8gdGVsbCBhZGRUb2RvKCkgd2hpY2ggcHJvamVjdCB3ZSBhcmUgYWRkaW5nIGEgdG9kbyBpdGVtIHRvLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRvZG8ocHJvamVjdEluZGV4LCBwcm9qZWN0QXJyYXkpXG4gICAgICAgICAgICBkaXNwbGF5KClcbiAgICAgICAgICAgIGRpc3BsYXlDdXJyZW50KGV2ZW50KVxuICAgICAgICAgICAgZm9ybU9wZW5PckV4aXQoaXRlbUZvcm1Db250YWluZXIsIGByZW1vdmVgKVxuICAgICAgICB9XG4gICAgfVxufSlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYGl0ZW0tZGVsZXRlYCkpIHtcbiAgICAgICAgZGVsZXRlVG9kbyhldmVudCwgcHJvamVjdEFycmF5KVxuICAgICAgICBkaXNwbGF5KClcbiAgICAgICAgZGlzcGxheUN1cnJlbnQoZXZlbnQpXG4gICAgfVxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pdGVtLWNhbmNlbGApLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICAgIGZvcm1PcGVuT3JFeGl0KGl0ZW1Gb3JtQ29udGFpbmVyLCBgcmVtb3ZlYClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYWRkLWl0ZW1gKS5kaXNhYmxlZCA9IGZhbHNlXG59KVxuXG4vLyBUaGlzIGNvbnRyb2xzIGRyb3Bkb3duIGZ1bmN0aW9uYWxpdHkgd2hlbiBjbGlja2luZyBvbiBhIHByb2plY3RcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYHByb2plY3QtdGl0bGVgKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YClcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuaXRlbS1jb250YWluZXJgKVxuICAgICAgICAvLyBJdGVyYXRlcyB0aHJvdWdoIG5vZGUgbGlzdCBvZiBpdGVtLWNvbnRhaW5lcnMgdW50aWwgd2UgcmVhY2ggdGhlIG9uZSB3ZSBjbGlja2VkIG9uIHRoZW4gZXhlY3V0ZXMgb3VyIGRyb3Bkb3duIHN0eWxlIGNoYW5nZS5cbiAgICAgICAgaXRlbUNvbnRhaW5lck5vZGUuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZ2V0QXR0cmlidXRlKGBwcm9qZWN0LWluZGV4YCkgPT09IHByb2plY3RJbmRleCl7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ICA9IGBmbGV4YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gYG5vbmVgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuLy8gRGlzYWJsZWQgZW50ZXIga2V5XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGBrZXlwcmVzc2AsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=