/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_audioPlayer_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var components_audioVisualizer_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);



var audioPlayer = new components_audioPlayer_index_ts__WEBPACK_IMPORTED_MODULE_0__["default"]();
var audioVisalizer = new components_audioVisualizer_index_ts__WEBPACK_IMPORTED_MODULE_1__["default"]();
var requestId;

var initAudioPlayerMainLoop = function initAudioPlayerMainLoop() {
  audioPlayer.updateTime();
  audioVisalizer.drawChain(audioPlayer.returnCurrentData());
  requestId = window.requestAnimationFrame(initAudioPlayerMainLoop);
};

document.body.appendChild(audioPlayer.render(initAudioPlayerMainLoop, function () {
  audioVisalizer.drawChain(audioPlayer.returnCurrentData());
  window.cancelAnimationFrame(requestId);
}));
document.body.appendChild(audioVisalizer.render());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_createTimeString_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AudioPlayer =
/*#__PURE__*/
function () {
  function AudioPlayer() {
    _classCallCheck(this, AudioPlayer);
  }

  _createClass(AudioPlayer, [{
    key: "togglePlay",
    value: function togglePlay() {
      if (this.isPlaying) {
        this.audio.pause();
        this.togglePlayButton.setAttribute("class", "player__toggle-play-button");
      } else {
        this.audio.play();
        this.togglePlayButton.setAttribute("class", "player__toggle-play-button player__toggle-play-button--pause");
      }

      this.isPlaying = !this.isPlaying;
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      if (this.audio && this.audio.currentTime) {
        this.currentTime.innerHTML = Object(utils_createTimeString_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this.audio.currentTime);
      }
    }
  }, {
    key: "createFileInput",
    value: function createFileInput() {
      this.fileLabel = document.createElement("label");
      this.fileLabel.setAttribute("for", "file-input");
      this.fileInput = document.createElement("input");
      this.fileInput.setAttribute("id", "file-input");
      this.fileInput.setAttribute("type", "file");
      this.fileInput.setAttribute("class", "player__file-input");
      var addFileButton = document.createElement("div");
      addFileButton.setAttribute("class", "player__add-file-button");
      this.fileLabel.appendChild(this.fileInput);
      this.fileLabel.appendChild(addFileButton);
      return this.fileLabel;
    }
  }, {
    key: "createTogglePlayButton",
    value: function createTogglePlayButton() {
      var _this = this;

      this.togglePlayButton = document.createElement("button");
      this.togglePlayButton.setAttribute("type", "button");
      this.togglePlayButton.setAttribute("class", "player__toggle-play-button");
      this.togglePlayButton.addEventListener("click", function () {
        _this.togglePlay();
      });
      return this.togglePlayButton;
    }
  }, {
    key: "createStopButton",
    value: function createStopButton() {
      var _this2 = this;

      var stopButton = document.createElement("button");
      stopButton.setAttribute("type", "button");
      stopButton.setAttribute("class", "player__stop-button");
      stopButton.addEventListener("click", function () {
        _this2.audio.src = "";
        _this2.fileInput.value = "";
        _this2.trackLength.innerHTML = "00:00";
        _this2.currentTime.innerHTML = "00:00";
        _this2.rangeInput.max = 0;
        _this2.rangeInput.value = 0;

        _this2.togglePlayButton.setAttribute("class", "player__toggle-play-button");

        _this2.isStarted = false;
        _this2.isPlaying = false;
        _this2.dataArray = null;

        _this2.cancelAudioPlayerMainLoop();
      });
      return stopButton;
    }
  }, {
    key: "createRangeInput",
    value: function createRangeInput() {
      var _this3 = this;

      this.rangeInput = document.createElement("input");
      this.rangeInput.setAttribute("type", "range");
      this.rangeInput.setAttribute("min", "0");
      this.rangeInput.setAttribute("max", "0");
      this.rangeInput.setAttribute("step", "1");
      this.rangeInput.setAttribute("value", "0");
      this.rangeInput.setAttribute("class", "player__range-input");
      this.rangeInput.addEventListener("input", function (e) {
        _this3.currentTime.innerHTML = Object(utils_createTimeString_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target.value / 1000);
      });
      this.rangeInput.addEventListener("change", function (e) {
        _this3.audio.currentTime = e.target.value / 1000;
        _this3.rangeInput.value = _this3.audio.currentTime * 1000;
      });
      return this.rangeInput;
    }
  }, {
    key: "createCurrentTimeElement",
    value: function createCurrentTimeElement() {
      this.currentTime = document.createElement("div");
      this.currentTime.setAttribute("class", "player__time-element");
      this.currentTime.innerHTML = "00:00";
      return this.currentTime;
    }
  }, {
    key: "createTrackLengthElement",
    value: function createTrackLengthElement() {
      this.trackLength = document.createElement("div");
      this.trackLength.setAttribute("class", "player__time-element");
      this.trackLength.innerHTML = "00:00";
      return this.trackLength;
    }
  }, {
    key: "returnCurrentData",
    value: function returnCurrentData() {
      return {
        analyser: this.analyser,
        dataArray: this.dataArray
      };
    }
  }, {
    key: "initAudioPlayer",
    value: function initAudioPlayer(src) {
      var _this4 = this;

      var AudioContext = window.AudioContext || window.webkitAudioContext;
      var audioContext = new AudioContext();
      this.analyser = audioContext.createAnalyser();
      this.audio = new Audio();
      this.audio.src = src;
      var source = audioContext.createMediaElementSource(this.audio);
      source.connect(this.analyser);
      this.analyser.connect(audioContext.destination);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.bufferLength = this.analyser.frequencyBinCount;
      this.audio.addEventListener("canplay", function () {
        _this4.trackLength.innerHTML = Object(utils_createTimeString_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(_this4.audio.duration);
        _this4.rangeInput.max = _this4.audio.duration * 1000;

        if (!_this4.isStarted) {
          _this4.togglePlay();

          _this4.isStarted = true;
        }
      });
    }
  }, {
    key: "initPlayer",
    value: function initPlayer(initAudioPlayerMainLoop) {
      var _this5 = this;

      this.fileInput.addEventListener("change", function (e) {
        _this5.initAudioPlayer(URL.createObjectURL(e.target.files[0]));

        initAudioPlayerMainLoop();
      });
    }
  }, {
    key: "render",
    value: function render(initAudioPlayerMainLoop, cancelAudioPlayerMainLoop) {
      var player = document.createElement("div");
      player.setAttribute("class", "player");
      var timeContainer = document.createElement("div");
      timeContainer.setAttribute("class", "player__time-container");
      timeContainer.appendChild(this.createCurrentTimeElement());
      timeContainer.appendChild(this.createTrackLengthElement());
      player.appendChild(this.createFileInput());
      player.appendChild(this.createTogglePlayButton());
      player.appendChild(this.createStopButton());
      player.appendChild(this.createRangeInput());
      player.appendChild(timeContainer);
      this.cancelAudioPlayerMainLoop = cancelAudioPlayerMainLoop;
      this.initPlayer(initAudioPlayerMainLoop);
      return player;
    }
  }]);

  return AudioPlayer;
}();

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createTimeString = function createTimeString(duration) {
  var min = Math.floor(duration / 60);
  var secs = Math.floor(duration % 60);

  if (min < 10) {
    min = "0".concat(min);
  }

  if (secs < 10) {
    secs = "0".concat(secs);
  }

  return "".concat(min, ":").concat(secs);
};

/* harmony default export */ __webpack_exports__["default"] = (createTimeString);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".player {\n  width: 275px;\n  height: 155px;\n  padding: 10px;\n  position: absolute;\n  left: 50%;\n  bottom: 50px;\n  transform: translateX(-50%);\n  display: flex;\n  flex-wrap: wrap;\n  border: 2px solid #ffd700; }\n  .player__add-file-button {\n    width: 76px;\n    height: 76px;\n    margin-right: 15px;\n    position: relative;\n    border-radius: 100%;\n    border: 2px solid #ffd700;\n    background: transparent; }\n    .player__add-file-button::before, .player__add-file-button::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      background: #ffd700; }\n    .player__add-file-button::before {\n      width: 30px;\n      height: 5px; }\n    .player__add-file-button::after {\n      width: 5px;\n      height: 30px; }\n  .player__toggle-play-button {\n    width: 80px;\n    height: 80px;\n    margin-right: 15px;\n    position: relative;\n    border-radius: 100%;\n    border: 2px solid #ffd700;\n    background: transparent; }\n    .player__toggle-play-button::after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 0;\n      position: absolute;\n      top: 50%;\n      left: 55%;\n      transform: translate(-50%, -50%);\n      border-style: solid;\n      border-width: 20px 0 20px 30px;\n      border-color: transparent transparent transparent #ffd700;\n      background: transparent; }\n    .player__toggle-play-button--pause::before, .player__toggle-play-button--pause::after {\n      content: '';\n      display: block;\n      width: 5px;\n      height: 25px;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      background: #ffd700; }\n    .player__toggle-play-button--pause::after {\n      left: 40%;\n      border: none; }\n    .player__toggle-play-button--pause::before {\n      left: 55%; }\n  .player__stop-button {\n    width: 80px;\n    height: 80px;\n    position: relative;\n    border-radius: 100%;\n    border: 2px solid #ffd700;\n    background: transparent; }\n    .player__stop-button::after {\n      content: '';\n      display: block;\n      width: 25px;\n      height: 25px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      background: #ffd700; }\n  .player__time-container {\n    width: 100%;\n    height: 22px;\n    display: flex;\n    justify-content: flex-end; }\n  .player__time-element {\n    display: block;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n    color: #ffd700; }\n    .player__time-element:first-child {\n      margin-right: 5px; }\n  .player__file-input {\n    display: none; }\n  .player__range-input {\n    width: 100%;\n    margin: 15px 0;\n    -webkit-appearance: none;\n    background: transparent; }\n  .player__range-input::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  .player__range-input:focus {\n    outline: none; }\n  .player__range-input::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent; }\n  .player__range-input::-webkit-slider-thumb {\n    width: 16px;\n    height: 16px;\n    margin-top: -6px;\n    cursor: pointer;\n    -webkit-appearance: none;\n    border-radius: 100%;\n    border: 1px solid #000000;\n    background: #ffd700; }\n  .player__range-input::-moz-range-thumb {\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    border-radius: 100%;\n    border: 1px solid #000000;\n    background: #ffd700; }\n  .player__range-input::-ms-thumb {\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    border-radius: 100%;\n    border: 1px solid #000000;\n    background: #ffd700; }\n  .player__range-input::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: #ffd700; }\n  .player__range-input:focus::-webkit-slider-runnable-track {\n    background: #ffd700; }\n  .player__range-input::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: #ffd700; }\n  .player__range-input::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    border-width: 8px 0;\n    color: transparent; }\n  .player__range-input::-ms-fill-lower {\n    background: #ffd700; }\n  .player__range-input:focus::-ms-fill-lower {\n    background: #ffd700; }\n  .player__range-input::-ms-fill-upper {\n    background: #ffd700; }\n  .player__range-input:focus::-ms-fill-upper {\n    background: #ffd700; }\n", ""]);



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utils_scaleCanvas_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AudioVisalizer =
/*#__PURE__*/
function () {
  function AudioVisalizer() {
    _classCallCheck(this, AudioVisalizer);

    this.colorYellow = "#FFD700";
  }

  _createClass(AudioVisalizer, [{
    key: "drawChainElement",
    value: function drawChainElement(x1, y1, x2, y2, width, frequency) {
      this.ctx.beginPath();
      this.ctx.arc(x1, y1, frequency * 0.2 > 30 ? frequency * 0.2 : 30, 0, 2 * Math.PI);
      this.ctx.strokeStyle = this.colorYellow;
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
    }
  }, {
    key: "drawChain",
    value: function drawChain() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          analyser = _ref.analyser,
          dataArray = _ref.dataArray;

      var bars = 17;
      var barWidth = 2;
      var radius = 220;
      var centerX = 300;
      var centerY = 0;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);
      }

      for (var i = 0; i < bars; i += 1) {
        var rads = Math.PI / 16;
        var barHeight = dataArray && dataArray[i] * 0.7;
        var x = centerX + Math.cos(rads * i) * radius;
        var y = centerY + Math.sin(rads * i) * radius;
        var xEnd = centerX + Math.cos(rads * i) * (radius + barHeight);
        var yEnd = centerY + Math.sin(rads * i) * (radius + barHeight);
        this.drawChainElement(x, y, xEnd, yEnd, barWidth, dataArray && dataArray[i]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.canvas = document.createElement("canvas");
      this.canvas.setAttribute("class", "canvas");
      this.canvas.width = 600;
      this.canvas.height = 350;
      this.ctx = this.canvas.getContext("2d");
      Object(utils_scaleCanvas_ts__WEBPACK_IMPORTED_MODULE_0__["default"])(this.canvas, this.ctx, this.canvas.width, this.canvas.height);
      this.drawChain();
      return this.canvas;
    }
  }]);

  return AudioVisalizer;
}();

/* harmony default export */ __webpack_exports__["default"] = (AudioVisalizer);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// https://gist.github.com/callumlocke/cc258a193839691f60dd
var scaleCanvas = function scaleCanvas(canvas, context, width, height) {
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  var ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = "".concat(width, "px");
    canvas.style.height = "".concat(height, "px");
  } else {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = "";
    canvas.style.height = "";
  }

  context.scale(ratio, ratio);
};

/* harmony default export */ __webpack_exports__["default"] = (scaleCanvas);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".canvas {\n  margin: 0 auto;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%); }\n", ""]);



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  color: #FFFFFF;\n  background: #000000; }\n  body:before {\n    content: '';\n    width: 280px;\n    height: 180px;\n    position: absolute;\n    top: -120px;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 10;\n    border-radius: 100%;\n    background: #96725E; }\n", ""]);



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1ZGlvUGxheWVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jcmVhdGVUaW1lU3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1ZGlvUGxheWVyL2luZGV4LnNjc3M/ZWFhMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpb1BsYXllci9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW9WaXN1YWxpemVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zY2FsZUNhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdWRpb1Zpc3VhbGl6ZXIvaW5kZXguc2Nzcz9hNTg1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1ZGlvVmlzdWFsaXplci9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3M/YWRlZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbImF1ZGlvUGxheWVyIiwiQXVkaW9QbGF5ZXIiLCJhdWRpb1Zpc2FsaXplciIsIkF1ZGlvVmlzYWxpemVyIiwicmVxdWVzdElkIiwiaW5pdEF1ZGlvUGxheWVyTWFpbkxvb3AiLCJ1cGRhdGVUaW1lIiwiZHJhd0NoYWluIiwicmV0dXJuQ3VycmVudERhdGEiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXNQbGF5aW5nIiwiYXVkaW8iLCJwYXVzZSIsInRvZ2dsZVBsYXlCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJwbGF5IiwiY3VycmVudFRpbWUiLCJpbm5lckhUTUwiLCJjcmVhdGVUaW1lU3RyaW5nIiwiZmlsZUxhYmVsIiwiY3JlYXRlRWxlbWVudCIsImZpbGVJbnB1dCIsImFkZEZpbGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlUGxheSIsInN0b3BCdXR0b24iLCJzcmMiLCJ2YWx1ZSIsInRyYWNrTGVuZ3RoIiwicmFuZ2VJbnB1dCIsIm1heCIsImlzU3RhcnRlZCIsImRhdGFBcnJheSIsImNhbmNlbEF1ZGlvUGxheWVyTWFpbkxvb3AiLCJlIiwidGFyZ2V0IiwiYW5hbHlzZXIiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJhdWRpb0NvbnRleHQiLCJjcmVhdGVBbmFseXNlciIsIkF1ZGlvIiwic291cmNlIiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwiVWludDhBcnJheSIsImZyZXF1ZW5jeUJpbkNvdW50IiwiYnVmZmVyTGVuZ3RoIiwiZHVyYXRpb24iLCJpbml0QXVkaW9QbGF5ZXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmaWxlcyIsInBsYXllciIsInRpbWVDb250YWluZXIiLCJjcmVhdGVDdXJyZW50VGltZUVsZW1lbnQiLCJjcmVhdGVUcmFja0xlbmd0aEVsZW1lbnQiLCJjcmVhdGVGaWxlSW5wdXQiLCJjcmVhdGVUb2dnbGVQbGF5QnV0dG9uIiwiY3JlYXRlU3RvcEJ1dHRvbiIsImNyZWF0ZVJhbmdlSW5wdXQiLCJpbml0UGxheWVyIiwibWluIiwiTWF0aCIsImZsb29yIiwic2VjcyIsImNvbG9yWWVsbG93IiwieDEiLCJ5MSIsIngyIiwieTIiLCJ3aWR0aCIsImZyZXF1ZW5jeSIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJiYXJzIiwiYmFyV2lkdGgiLCJyYWRpdXMiLCJjZW50ZXJYIiwiY2VudGVyWSIsImZpbGxSZWN0IiwiY2FudmFzIiwiaGVpZ2h0IiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJpIiwicmFkcyIsImJhckhlaWdodCIsIngiLCJjb3MiLCJ5Iiwic2luIiwieEVuZCIsInlFbmQiLCJkcmF3Q2hhaW5FbGVtZW50IiwiZ2V0Q29udGV4dCIsInNjYWxlQ2FudmFzIiwiY29udGV4dCIsImRldmljZVBpeGVsUmF0aW8iLCJiYWNraW5nU3RvcmVSYXRpbyIsIndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwibXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwib0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwicmF0aW8iLCJzdHlsZSIsInNjYWxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLElBQUlDLHVFQUFKLEVBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQUlDLDJFQUFKLEVBQXZCO0FBRUEsSUFBSUMsU0FBSjs7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDcENMLGFBQVcsQ0FBQ00sVUFBWjtBQUNBSixnQkFBYyxDQUFDSyxTQUFmLENBQXlCUCxXQUFXLENBQUNRLGlCQUFaLEVBQXpCO0FBQ0FKLFdBQVMsR0FBR0ssTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkwsdUJBQTdCLENBQVo7QUFDRCxDQUpEOztBQU1BTSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUNFYixXQUFXLENBQUNjLE1BQVosQ0FBbUJULHVCQUFuQixFQUE0QyxZQUFNO0FBQ2hESCxnQkFBYyxDQUFDSyxTQUFmLENBQXlCUCxXQUFXLENBQUNRLGlCQUFaLEVBQXpCO0FBQ0FDLFFBQU0sQ0FBQ00sb0JBQVAsQ0FBNEJYLFNBQTVCO0FBQ0QsQ0FIRCxDQURGO0FBTUFPLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCWCxjQUFjLENBQUNZLE1BQWYsRUFBMUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7SUFFTWIsVzs7Ozs7Ozs7O2lDQWVTO0FBQ1gsVUFBSSxLQUFLZSxTQUFULEVBQW9CO0FBQ2xCLGFBQUtDLEtBQUwsQ0FBV0MsS0FBWDtBQUNBLGFBQUtDLGdCQUFMLENBQXNCQyxZQUF0QixDQUFtQyxPQUFuQyxFQUE0Qyw0QkFBNUM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLSCxLQUFMLENBQVdJLElBQVg7QUFDQSxhQUFLRixnQkFBTCxDQUFzQkMsWUFBdEIsQ0FDRSxPQURGLEVBRUUsOERBRkY7QUFJRDs7QUFDRCxXQUFLSixTQUFMLEdBQWlCLENBQUMsS0FBS0EsU0FBdkI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSSxLQUFLQyxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXSyxXQUE3QixFQUEwQztBQUN4QyxhQUFLQSxXQUFMLENBQWlCQyxTQUFqQixHQUE2QkMseUVBQWdCLENBQUMsS0FBS1AsS0FBTCxDQUFXSyxXQUFaLENBQTdDO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixXQUFLRyxTQUFMLEdBQWlCZCxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxXQUFLRCxTQUFMLENBQWVMLFlBQWYsQ0FBNEIsS0FBNUIsRUFBbUMsWUFBbkM7QUFFQSxXQUFLTyxTQUFMLEdBQWlCaEIsUUFBUSxDQUFDZSxhQUFULENBQXVCLE9BQXZCLENBQWpCO0FBQ0EsV0FBS0MsU0FBTCxDQUFlUCxZQUFmLENBQTRCLElBQTVCLEVBQWtDLFlBQWxDO0FBQ0EsV0FBS08sU0FBTCxDQUFlUCxZQUFmLENBQTRCLE1BQTVCLEVBQW9DLE1BQXBDO0FBQ0EsV0FBS08sU0FBTCxDQUFlUCxZQUFmLENBQTRCLE9BQTVCLEVBQXFDLG9CQUFyQztBQUVBLFVBQU1RLGFBQTBCLEdBQUdqQixRQUFRLENBQUNlLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkM7QUFDQUUsbUJBQWEsQ0FBQ1IsWUFBZCxDQUEyQixPQUEzQixFQUFvQyx5QkFBcEM7QUFFQSxXQUFLSyxTQUFMLENBQWVaLFdBQWYsQ0FBMkIsS0FBS2MsU0FBaEM7QUFDQSxXQUFLRixTQUFMLENBQWVaLFdBQWYsQ0FBMkJlLGFBQTNCO0FBRUEsYUFBTyxLQUFLSCxTQUFaO0FBQ0Q7Ozs2Q0FFd0I7QUFBQTs7QUFDdkIsV0FBS04sZ0JBQUwsR0FBd0JSLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBLFdBQUtQLGdCQUFMLENBQXNCQyxZQUF0QixDQUFtQyxNQUFuQyxFQUEyQyxRQUEzQztBQUNBLFdBQUtELGdCQUFMLENBQXNCQyxZQUF0QixDQUFtQyxPQUFuQyxFQUE0Qyw0QkFBNUM7QUFFQSxXQUFLRCxnQkFBTCxDQUFzQlUsZ0JBQXRCLENBQXVDLE9BQXZDLEVBQWdELFlBQU07QUFDcEQsYUFBSSxDQUFDQyxVQUFMO0FBQ0QsT0FGRDtBQUlBLGFBQU8sS0FBS1gsZ0JBQVo7QUFDRDs7O3VDQUVrQjtBQUFBOztBQUNqQixVQUFNWSxVQUF1QixHQUFHcEIsUUFBUSxDQUFDZSxhQUFULENBQXVCLFFBQXZCLENBQWhDO0FBQ0FLLGdCQUFVLENBQUNYLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0MsUUFBaEM7QUFDQVcsZ0JBQVUsQ0FBQ1gsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxxQkFBakM7QUFFQVcsZ0JBQVUsQ0FBQ0YsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6QyxjQUFJLENBQUNaLEtBQUwsQ0FBV2UsR0FBWCxHQUFpQixFQUFqQjtBQUNBLGNBQUksQ0FBQ0wsU0FBTCxDQUFlTSxLQUFmLEdBQXVCLEVBQXZCO0FBQ0EsY0FBSSxDQUFDQyxXQUFMLENBQWlCWCxTQUFqQixHQUE2QixPQUE3QjtBQUNBLGNBQUksQ0FBQ0QsV0FBTCxDQUFpQkMsU0FBakIsR0FBNkIsT0FBN0I7QUFDQSxjQUFJLENBQUNZLFVBQUwsQ0FBZ0JDLEdBQWhCLEdBQXNCLENBQXRCO0FBQ0EsY0FBSSxDQUFDRCxVQUFMLENBQWdCRixLQUFoQixHQUF3QixDQUF4Qjs7QUFDQSxjQUFJLENBQUNkLGdCQUFMLENBQXNCQyxZQUF0QixDQUFtQyxPQUFuQyxFQUE0Qyw0QkFBNUM7O0FBQ0EsY0FBSSxDQUFDaUIsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGNBQUksQ0FBQ3JCLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxjQUFJLENBQUNzQixTQUFMLEdBQWlCLElBQWpCOztBQUNBLGNBQUksQ0FBQ0MseUJBQUw7QUFDRCxPQVpEO0FBY0EsYUFBT1IsVUFBUDtBQUNEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLFdBQUtJLFVBQUwsR0FBa0J4QixRQUFRLENBQUNlLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUFDQSxXQUFLUyxVQUFMLENBQWdCZixZQUFoQixDQUE2QixNQUE3QixFQUFxQyxPQUFyQztBQUNBLFdBQUtlLFVBQUwsQ0FBZ0JmLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLEdBQXBDO0FBQ0EsV0FBS2UsVUFBTCxDQUFnQmYsWUFBaEIsQ0FBNkIsS0FBN0IsRUFBb0MsR0FBcEM7QUFDQSxXQUFLZSxVQUFMLENBQWdCZixZQUFoQixDQUE2QixNQUE3QixFQUFxQyxHQUFyQztBQUNBLFdBQUtlLFVBQUwsQ0FBZ0JmLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLEdBQXRDO0FBQ0EsV0FBS2UsVUFBTCxDQUFnQmYsWUFBaEIsQ0FBNkIsT0FBN0IsRUFBc0MscUJBQXRDO0FBRUEsV0FBS2UsVUFBTCxDQUFnQk4sZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUFXLENBQUMsRUFBSTtBQUM3QyxjQUFJLENBQUNsQixXQUFMLENBQWlCQyxTQUFqQixHQUE2QkMseUVBQWdCLENBQUNnQixDQUFDLENBQUNDLE1BQUYsQ0FBU1IsS0FBVCxHQUFpQixJQUFsQixDQUE3QztBQUNELE9BRkQ7QUFJQSxXQUFLRSxVQUFMLENBQWdCTixnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkMsVUFBQVcsQ0FBQyxFQUFJO0FBQzlDLGNBQUksQ0FBQ3ZCLEtBQUwsQ0FBV0ssV0FBWCxHQUF5QmtCLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixLQUFULEdBQWlCLElBQTFDO0FBQ0EsY0FBSSxDQUFDRSxVQUFMLENBQWdCRixLQUFoQixHQUF3QixNQUFJLENBQUNoQixLQUFMLENBQVdLLFdBQVgsR0FBeUIsSUFBakQ7QUFDRCxPQUhEO0FBS0EsYUFBTyxLQUFLYSxVQUFaO0FBQ0Q7OzsrQ0FFMEI7QUFDekIsV0FBS2IsV0FBTCxHQUFtQlgsUUFBUSxDQUFDZSxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsV0FBS0osV0FBTCxDQUFpQkYsWUFBakIsQ0FBOEIsT0FBOUIsRUFBdUMsc0JBQXZDO0FBQ0EsV0FBS0UsV0FBTCxDQUFpQkMsU0FBakIsR0FBNkIsT0FBN0I7QUFFQSxhQUFPLEtBQUtELFdBQVo7QUFDRDs7OytDQUUwQjtBQUN6QixXQUFLWSxXQUFMLEdBQW1CdkIsUUFBUSxDQUFDZSxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0EsV0FBS1EsV0FBTCxDQUFpQmQsWUFBakIsQ0FBOEIsT0FBOUIsRUFBdUMsc0JBQXZDO0FBQ0EsV0FBS2MsV0FBTCxDQUFpQlgsU0FBakIsR0FBNkIsT0FBN0I7QUFFQSxhQUFPLEtBQUtXLFdBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPO0FBQ0xRLGdCQUFRLEVBQUUsS0FBS0EsUUFEVjtBQUVMSixpQkFBUyxFQUFFLEtBQUtBO0FBRlgsT0FBUDtBQUlEOzs7b0NBRWVOLEcsRUFBVTtBQUFBOztBQUN4QixVQUFNVyxZQUFpQixHQUFHbEMsTUFBTSxDQUFDa0MsWUFBUCxJQUF1QmxDLE1BQU0sQ0FBQ21DLGtCQUF4RDtBQUNBLFVBQU1DLFlBQWlCLEdBQUcsSUFBSUYsWUFBSixFQUExQjtBQUNBLFdBQUtELFFBQUwsR0FBZ0JHLFlBQVksQ0FBQ0MsY0FBYixFQUFoQjtBQUNBLFdBQUs3QixLQUFMLEdBQWEsSUFBSThCLEtBQUosRUFBYjtBQUNBLFdBQUs5QixLQUFMLENBQVdlLEdBQVgsR0FBaUJBLEdBQWpCO0FBQ0EsVUFBTWdCLE1BQVcsR0FBR0gsWUFBWSxDQUFDSSx3QkFBYixDQUFzQyxLQUFLaEMsS0FBM0MsQ0FBcEI7QUFDQStCLFlBQU0sQ0FBQ0UsT0FBUCxDQUFlLEtBQUtSLFFBQXBCO0FBQ0EsV0FBS0EsUUFBTCxDQUFjUSxPQUFkLENBQXNCTCxZQUFZLENBQUNNLFdBQW5DO0FBQ0EsV0FBS2IsU0FBTCxHQUFpQixJQUFJYyxVQUFKLENBQWUsS0FBS1YsUUFBTCxDQUFjVyxpQkFBN0IsQ0FBakI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLEtBQUtaLFFBQUwsQ0FBY1csaUJBQWxDO0FBRUEsV0FBS3BDLEtBQUwsQ0FBV1ksZ0JBQVgsQ0FBNEIsU0FBNUIsRUFBdUMsWUFBTTtBQUMzQyxjQUFJLENBQUNLLFdBQUwsQ0FBaUJYLFNBQWpCLEdBQTZCQyx5RUFBZ0IsQ0FBQyxNQUFJLENBQUNQLEtBQUwsQ0FBV3NDLFFBQVosQ0FBN0M7QUFDQSxjQUFJLENBQUNwQixVQUFMLENBQWdCQyxHQUFoQixHQUFzQixNQUFJLENBQUNuQixLQUFMLENBQVdzQyxRQUFYLEdBQXNCLElBQTVDOztBQUNBLFlBQUksQ0FBQyxNQUFJLENBQUNsQixTQUFWLEVBQXFCO0FBQ25CLGdCQUFJLENBQUNQLFVBQUw7O0FBQ0EsZ0JBQUksQ0FBQ08sU0FBTCxHQUFpQixJQUFqQjtBQUNEO0FBQ0YsT0FQRDtBQVFEOzs7K0JBRVVoQyx1QixFQUFtQztBQUFBOztBQUM1QyxXQUFLc0IsU0FBTCxDQUFlRSxnQkFBZixDQUFnQyxRQUFoQyxFQUEwQyxVQUFBVyxDQUFDLEVBQUk7QUFDN0MsY0FBSSxDQUFDZ0IsZUFBTCxDQUFxQkMsR0FBRyxDQUFDQyxlQUFKLENBQW9CbEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNrQixLQUFULENBQWUsQ0FBZixDQUFwQixDQUFyQjs7QUFDQXRELCtCQUF1QjtBQUN4QixPQUhEO0FBSUQ7OzsyQkFHQ0EsdUIsRUFDQWtDLHlCLEVBQ0E7QUFDQSxVQUFNcUIsTUFBbUIsR0FBR2pELFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixLQUF2QixDQUE1QjtBQUNBa0MsWUFBTSxDQUFDeEMsWUFBUCxDQUFvQixPQUFwQixFQUE2QixRQUE3QjtBQUVBLFVBQU15QyxhQUEwQixHQUFHbEQsUUFBUSxDQUFDZSxhQUFULENBQXVCLEtBQXZCLENBQW5DO0FBQ0FtQyxtQkFBYSxDQUFDekMsWUFBZCxDQUEyQixPQUEzQixFQUFvQyx3QkFBcEM7QUFDQXlDLG1CQUFhLENBQUNoRCxXQUFkLENBQTBCLEtBQUtpRCx3QkFBTCxFQUExQjtBQUNBRCxtQkFBYSxDQUFDaEQsV0FBZCxDQUEwQixLQUFLa0Qsd0JBQUwsRUFBMUI7QUFFQUgsWUFBTSxDQUFDL0MsV0FBUCxDQUFtQixLQUFLbUQsZUFBTCxFQUFuQjtBQUNBSixZQUFNLENBQUMvQyxXQUFQLENBQW1CLEtBQUtvRCxzQkFBTCxFQUFuQjtBQUNBTCxZQUFNLENBQUMvQyxXQUFQLENBQW1CLEtBQUtxRCxnQkFBTCxFQUFuQjtBQUNBTixZQUFNLENBQUMvQyxXQUFQLENBQW1CLEtBQUtzRCxnQkFBTCxFQUFuQjtBQUNBUCxZQUFNLENBQUMvQyxXQUFQLENBQW1CZ0QsYUFBbkI7QUFFQSxXQUFLdEIseUJBQUwsR0FBaUNBLHlCQUFqQztBQUNBLFdBQUs2QixVQUFMLENBQWdCL0QsdUJBQWhCO0FBRUEsYUFBT3VELE1BQVA7QUFDRDs7Ozs7O0FBR1kzRCwwRUFBZixFOzs7Ozs7O0FDNUxBO0FBQUEsSUFBTXVCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQytCLFFBQUQsRUFBc0I7QUFDN0MsTUFBSWMsR0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2hCLFFBQVEsR0FBRyxFQUF0QixDQUFsQjtBQUNBLE1BQUlpQixJQUFZLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXaEIsUUFBUSxHQUFHLEVBQXRCLENBQW5COztBQUNBLE1BQUljLEdBQUcsR0FBRyxFQUFWLEVBQWM7QUFDWkEsT0FBRyxjQUFPQSxHQUFQLENBQUg7QUFDRDs7QUFDRCxNQUFJRyxJQUFJLEdBQUcsRUFBWCxFQUFlO0FBQ2JBLFFBQUksY0FBT0EsSUFBUCxDQUFKO0FBQ0Q7O0FBQ0QsbUJBQVVILEdBQVYsY0FBaUJHLElBQWpCO0FBQ0QsQ0FWRDs7QUFZZWhELCtFQUFmLEU7Ozs7Ozs7QUNYQSxjQUFjLG1CQUFPLENBQUMsQ0FBNkc7O0FBRW5JLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxDQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7O0FDbkJmLDJCQUEyQixtQkFBTyxDQUFDLENBQXNEO0FBQ3pGO0FBQ0EsY0FBYyxRQUFTLFlBQVksaUJBQWlCLGtCQUFrQixrQkFBa0IsdUJBQXVCLGNBQWMsaUJBQWlCLGdDQUFnQyxrQkFBa0Isb0JBQW9CLDhCQUE4QixFQUFFLDhCQUE4QixrQkFBa0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsMEJBQTBCLGdDQUFnQyw4QkFBOEIsRUFBRSx5RUFBeUUsb0JBQW9CLHVCQUF1QiwyQkFBMkIsaUJBQWlCLGtCQUFrQix5Q0FBeUMsNEJBQTRCLEVBQUUsd0NBQXdDLG9CQUFvQixvQkFBb0IsRUFBRSx1Q0FBdUMsbUJBQW1CLHFCQUFxQixFQUFFLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsMEJBQTBCLGdDQUFnQyw4QkFBOEIsRUFBRSwwQ0FBMEMsb0JBQW9CLHVCQUF1QixpQkFBaUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHlDQUF5Qyw0QkFBNEIsdUNBQXVDLGtFQUFrRSxnQ0FBZ0MsRUFBRSw2RkFBNkYsb0JBQW9CLHVCQUF1QixtQkFBbUIscUJBQXFCLDJCQUEyQixpQkFBaUIsb0NBQW9DLDRCQUE0QixFQUFFLGlEQUFpRCxrQkFBa0IscUJBQXFCLEVBQUUsa0RBQWtELGtCQUFrQixFQUFFLDBCQUEwQixrQkFBa0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLDhCQUE4QixFQUFFLG1DQUFtQyxvQkFBb0IsdUJBQXVCLG9CQUFvQixxQkFBcUIsMkJBQTJCLGlCQUFpQixrQkFBa0IseUNBQXlDLDRCQUE0QixFQUFFLDZCQUE2QixrQkFBa0IsbUJBQW1CLG9CQUFvQixnQ0FBZ0MsRUFBRSwyQkFBMkIscUJBQXFCLHNCQUFzQix3Q0FBd0MscUJBQXFCLEVBQUUseUNBQXlDLDBCQUEwQixFQUFFLHlCQUF5QixvQkFBb0IsRUFBRSwwQkFBMEIsa0JBQWtCLHFCQUFxQiwrQkFBK0IsOEJBQThCLEVBQUUsZ0RBQWdELCtCQUErQixFQUFFLGdDQUFnQyxvQkFBb0IsRUFBRSxxQ0FBcUMsa0JBQWtCLHNCQUFzQiw4QkFBOEIsZ0NBQWdDLHlCQUF5QixFQUFFLGdEQUFnRCxrQkFBa0IsbUJBQW1CLHVCQUF1QixzQkFBc0IsK0JBQStCLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLEVBQUUsNENBQTRDLGtCQUFrQixtQkFBbUIsc0JBQXNCLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLEVBQUUscUNBQXFDLGtCQUFrQixtQkFBbUIsc0JBQXNCLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLEVBQUUseURBQXlELGtCQUFrQixrQkFBa0Isc0JBQXNCLDBCQUEwQixFQUFFLCtEQUErRCwwQkFBMEIsRUFBRSw0Q0FBNEMsa0JBQWtCLGtCQUFrQixzQkFBc0IsMEJBQTBCLEVBQUUscUNBQXFDLGtCQUFrQixrQkFBa0Isc0JBQXNCLDhCQUE4QixnQ0FBZ0MsMEJBQTBCLHlCQUF5QixFQUFFLDBDQUEwQywwQkFBMEIsRUFBRSxnREFBZ0QsMEJBQTBCLEVBQUUsMENBQTBDLDBCQUEwQixFQUFFLGdEQUFnRCwwQkFBMEIsRUFBRTs7Ozs7Ozs7O0FDRmhnSjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsQ0FBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7QUNuQmYsMkJBQTJCLG1CQUFPLENBQUMsQ0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsWUFBWSxtQkFBbUIsdUJBQXVCLGNBQWMsV0FBVyxnQ0FBZ0MsRUFBRTs7Ozs7Ozs7O0FDRHhJLGNBQWMsbUJBQU8sQ0FBQyxFQUF3Rzs7QUFFOUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLENBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7QUNuQmYsMkJBQTJCLG1CQUFPLENBQUMsQ0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsK0RBQStEOztBQUV0RjtBQUNBLGNBQWMsUUFBUyxTQUFTLGNBQWMsZUFBZSxxQkFBcUIsbUJBQW1CLHdCQUF3QixFQUFFLGlCQUFpQixrQkFBa0IsbUJBQW1CLG9CQUFvQix5QkFBeUIsa0JBQWtCLGdCQUFnQixrQ0FBa0Msa0JBQWtCLDBCQUEwQiwwQkFBMEIsRUFBRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEF1ZGlvUGxheWVyIGZyb20gXCJjb21wb25lbnRzL2F1ZGlvUGxheWVyL2luZGV4LnRzXCI7XG5pbXBvcnQgQXVkaW9WaXNhbGl6ZXIgZnJvbSBcImNvbXBvbmVudHMvYXVkaW9WaXN1YWxpemVyL2luZGV4LnRzXCI7XG5pbXBvcnQgXCJzdHlsZXMvc3R5bGVzLnNjc3NcIjtcblxuY29uc3QgYXVkaW9QbGF5ZXIgPSBuZXcgQXVkaW9QbGF5ZXIoKTtcbmNvbnN0IGF1ZGlvVmlzYWxpemVyID0gbmV3IEF1ZGlvVmlzYWxpemVyKCk7XG5cbmxldCByZXF1ZXN0SWQ6IG51bWJlcjtcblxuY29uc3QgaW5pdEF1ZGlvUGxheWVyTWFpbkxvb3AgPSAoKSA9PiB7XG4gIGF1ZGlvUGxheWVyLnVwZGF0ZVRpbWUoKTtcbiAgYXVkaW9WaXNhbGl6ZXIuZHJhd0NoYWluKGF1ZGlvUGxheWVyLnJldHVybkN1cnJlbnREYXRhKCkpO1xuICByZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluaXRBdWRpb1BsYXllck1haW5Mb29wKTtcbn07XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4gIGF1ZGlvUGxheWVyLnJlbmRlcihpbml0QXVkaW9QbGF5ZXJNYWluTG9vcCwgKCkgPT4ge1xuICAgIGF1ZGlvVmlzYWxpemVyLmRyYXdDaGFpbihhdWRpb1BsYXllci5yZXR1cm5DdXJyZW50RGF0YSgpKTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKVxuICB9KVxuKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXVkaW9WaXNhbGl6ZXIucmVuZGVyKCkpO1xuIiwiaW1wb3J0IGNyZWF0ZVRpbWVTdHJpbmcgZnJvbSBcInV0aWxzL2NyZWF0ZVRpbWVTdHJpbmcudHNcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5jbGFzcyBBdWRpb1BsYXllciB7XG4gIGFuYWx5c2VyOiBhbnk7XG4gIGF1ZGlvOiBhbnk7XG4gIGJ1ZmZlckxlbmd0aDogbnVtYmVyO1xuICBjYW5jZWxBdWRpb1BsYXllck1haW5Mb29wOiBGdW5jdGlvbjtcbiAgY3VycmVudFRpbWU6IEhUTUxFbGVtZW50O1xuICBkYXRhQXJyYXk6IEFycmF5PG51bWJlcj47XG4gIGZpbGVJbnB1dDogSFRNTEVsZW1lbnQ7XG4gIGZpbGVMYWJlbDogSFRNTEVsZW1lbnQ7XG4gIGlzUGxheWluZzogYm9vbGVhbjtcbiAgaXNTdGFydGVkOiBib29sZWFuO1xuICByYW5nZUlucHV0OiBIVE1MRWxlbWVudDtcbiAgdG9nZ2xlUGxheUJ1dHRvbjogSFRNTEVsZW1lbnQ7XG4gIHRyYWNrTGVuZ3RoOiBIVE1MRWxlbWVudDtcblxuICB0b2dnbGVQbGF5KCkge1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgdGhpcy50b2dnbGVQbGF5QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGxheWVyX190b2dnbGUtcGxheS1idXR0b25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgICAgdGhpcy50b2dnbGVQbGF5QnV0dG9uLnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJjbGFzc1wiLFxuICAgICAgICBcInBsYXllcl9fdG9nZ2xlLXBsYXktYnV0dG9uIHBsYXllcl9fdG9nZ2xlLXBsYXktYnV0dG9uLS1wYXVzZVwiXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmlzUGxheWluZyA9ICF0aGlzLmlzUGxheWluZztcbiAgfVxuXG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgaWYgKHRoaXMuYXVkaW8gJiYgdGhpcy5hdWRpby5jdXJyZW50VGltZSkge1xuICAgICAgdGhpcy5jdXJyZW50VGltZS5pbm5lckhUTUwgPSBjcmVhdGVUaW1lU3RyaW5nKHRoaXMuYXVkaW8uY3VycmVudFRpbWUpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUZpbGVJbnB1dCgpIHtcbiAgICB0aGlzLmZpbGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aGlzLmZpbGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmaWxlLWlucHV0XCIpO1xuXG4gICAgdGhpcy5maWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy5maWxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaWxlLWlucHV0XCIpO1xuICAgIHRoaXMuZmlsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICAgIHRoaXMuZmlsZUlucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGxheWVyX19maWxlLWlucHV0XCIpO1xuXG4gICAgY29uc3QgYWRkRmlsZUJ1dHRvbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEZpbGVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX2FkZC1maWxlLWJ1dHRvblwiKTtcblxuICAgIHRoaXMuZmlsZUxhYmVsLmFwcGVuZENoaWxkKHRoaXMuZmlsZUlucHV0KTtcbiAgICB0aGlzLmZpbGVMYWJlbC5hcHBlbmRDaGlsZChhZGRGaWxlQnV0dG9uKTtcblxuICAgIHJldHVybiB0aGlzLmZpbGVMYWJlbDtcbiAgfVxuXG4gIGNyZWF0ZVRvZ2dsZVBsYXlCdXR0b24oKSB7XG4gICAgdGhpcy50b2dnbGVQbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0aGlzLnRvZ2dsZVBsYXlCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICB0aGlzLnRvZ2dsZVBsYXlCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX3RvZ2dsZS1wbGF5LWJ1dHRvblwiKTtcblxuICAgIHRoaXMudG9nZ2xlUGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50b2dnbGVQbGF5KCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy50b2dnbGVQbGF5QnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlU3RvcEJ1dHRvbigpIHtcbiAgICBjb25zdCBzdG9wQnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RvcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIHN0b3BCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX3N0b3AtYnV0dG9uXCIpO1xuXG4gICAgc3RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5hdWRpby5zcmMgPSBcIlwiO1xuICAgICAgdGhpcy5maWxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgdGhpcy50cmFja0xlbmd0aC5pbm5lckhUTUwgPSBcIjAwOjAwXCI7XG4gICAgICB0aGlzLmN1cnJlbnRUaW1lLmlubmVySFRNTCA9IFwiMDA6MDBcIjtcbiAgICAgIHRoaXMucmFuZ2VJbnB1dC5tYXggPSAwO1xuICAgICAgdGhpcy5yYW5nZUlucHV0LnZhbHVlID0gMDtcbiAgICAgIHRoaXMudG9nZ2xlUGxheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInBsYXllcl9fdG9nZ2xlLXBsYXktYnV0dG9uXCIpO1xuICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRhdGFBcnJheSA9IG51bGw7XG4gICAgICB0aGlzLmNhbmNlbEF1ZGlvUGxheWVyTWFpbkxvb3AoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdG9wQnV0dG9uO1xuICB9XG5cbiAgY3JlYXRlUmFuZ2VJbnB1dCgpIHtcbiAgICB0aGlzLnJhbmdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGhpcy5yYW5nZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbiAgICB0aGlzLnJhbmdlSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMFwiKTtcbiAgICB0aGlzLnJhbmdlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMFwiKTtcbiAgICB0aGlzLnJhbmdlSW5wdXQuc2V0QXR0cmlidXRlKFwic3RlcFwiLCBcIjFcIik7XG4gICAgdGhpcy5yYW5nZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMFwiKTtcbiAgICB0aGlzLnJhbmdlSW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX3JhbmdlLWlucHV0XCIpO1xuXG4gICAgdGhpcy5yYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUuaW5uZXJIVE1MID0gY3JlYXRlVGltZVN0cmluZyhlLnRhcmdldC52YWx1ZSAvIDEwMDApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gZS50YXJnZXQudmFsdWUgLyAxMDAwO1xuICAgICAgdGhpcy5yYW5nZUlucHV0LnZhbHVlID0gdGhpcy5hdWRpby5jdXJyZW50VGltZSAqIDEwMDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5nZUlucHV0O1xuICB9XG5cbiAgY3JlYXRlQ3VycmVudFRpbWVFbGVtZW50KCkge1xuICAgIHRoaXMuY3VycmVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuY3VycmVudFRpbWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX3RpbWUtZWxlbWVudFwiKTtcbiAgICB0aGlzLmN1cnJlbnRUaW1lLmlubmVySFRNTCA9IFwiMDA6MDBcIjtcblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgY3JlYXRlVHJhY2tMZW5ndGhFbGVtZW50KCkge1xuICAgIHRoaXMudHJhY2tMZW5ndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMudHJhY2tMZW5ndGguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX3RpbWUtZWxlbWVudFwiKTtcbiAgICB0aGlzLnRyYWNrTGVuZ3RoLmlubmVySFRNTCA9IFwiMDA6MDBcIjtcblxuICAgIHJldHVybiB0aGlzLnRyYWNrTGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuQ3VycmVudERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFuYWx5c2VyOiB0aGlzLmFuYWx5c2VyLFxuICAgICAgZGF0YUFycmF5OiB0aGlzLmRhdGFBcnJheVxuICAgIH07XG4gIH1cblxuICBpbml0QXVkaW9QbGF5ZXIoc3JjOiBhbnkpIHtcbiAgICBjb25zdCBBdWRpb0NvbnRleHQ6IGFueSA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBjb25zdCBhdWRpb0NvbnRleHQ6IGFueSA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICB0aGlzLmFuYWx5c2VyID0gYXVkaW9Db250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgIHRoaXMuYXVkaW8uc3JjID0gc3JjO1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSh0aGlzLmF1ZGlvKTtcbiAgICBzb3VyY2UuY29ubmVjdCh0aGlzLmFuYWx5c2VyKTtcbiAgICB0aGlzLmFuYWx5c2VyLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLmRhdGFBcnJheSA9IG5ldyBVaW50OEFycmF5KHRoaXMuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gdGhpcy5hbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcblxuICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgKCkgPT4ge1xuICAgICAgdGhpcy50cmFja0xlbmd0aC5pbm5lckhUTUwgPSBjcmVhdGVUaW1lU3RyaW5nKHRoaXMuYXVkaW8uZHVyYXRpb24pO1xuICAgICAgdGhpcy5yYW5nZUlucHV0Lm1heCA9IHRoaXMuYXVkaW8uZHVyYXRpb24gKiAxMDAwO1xuICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBsYXkoKTtcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdFBsYXllcihpbml0QXVkaW9QbGF5ZXJNYWluTG9vcDogRnVuY3Rpb24pIHtcbiAgICB0aGlzLmZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xuICAgICAgdGhpcy5pbml0QXVkaW9QbGF5ZXIoVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpO1xuICAgICAgaW5pdEF1ZGlvUGxheWVyTWFpbkxvb3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcihcbiAgICBpbml0QXVkaW9QbGF5ZXJNYWluTG9vcDogRnVuY3Rpb24sXG4gICAgY2FuY2VsQXVkaW9QbGF5ZXJNYWluTG9vcDogRnVuY3Rpb25cbiAgKSB7XG4gICAgY29uc3QgcGxheWVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicGxheWVyXCIpO1xuXG4gICAgY29uc3QgdGltZUNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpbWVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwbGF5ZXJfX3RpbWUtY29udGFpbmVyXCIpO1xuICAgIHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDdXJyZW50VGltZUVsZW1lbnQoKSk7XG4gICAgdGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRyYWNrTGVuZ3RoRWxlbWVudCgpKTtcblxuICAgIHBsYXllci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUZpbGVJbnB1dCgpKTtcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2dnbGVQbGF5QnV0dG9uKCkpO1xuICAgIHBsYXllci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVN0b3BCdXR0b24oKSk7XG4gICAgcGxheWVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUmFuZ2VJbnB1dCgpKTtcbiAgICBwbGF5ZXIuYXBwZW5kQ2hpbGQodGltZUNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmNhbmNlbEF1ZGlvUGxheWVyTWFpbkxvb3AgPSBjYW5jZWxBdWRpb1BsYXllck1haW5Mb29wO1xuICAgIHRoaXMuaW5pdFBsYXllcihpbml0QXVkaW9QbGF5ZXJNYWluTG9vcCk7XG5cbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvUGxheWVyO1xuIiwiY29uc3QgY3JlYXRlVGltZVN0cmluZyA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gIGxldCBtaW46IG51bWJlciA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyA2MCk7XG4gIGxldCBzZWNzOiBudW1iZXIgPSBNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApO1xuICBpZiAobWluIDwgMTApIHtcbiAgICBtaW4gPSBgMCR7bWlufWA7XG4gIH1cbiAgaWYgKHNlY3MgPCAxMCkge1xuICAgIHNlY3MgPSBgMCR7c2Vjc31gO1xuICB9XG4gIHJldHVybiBgJHttaW59OiR7c2Vjc31gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGltZVN0cmluZztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBsYXllciB7XFxuICB3aWR0aDogMjc1cHg7XFxuICBoZWlnaHQ6IDE1NXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvdHRvbTogNTBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZkNzAwOyB9XFxuICAucGxheWVyX19hZGQtZmlsZS1idXR0b24ge1xcbiAgICB3aWR0aDogNzZweDtcXG4gICAgaGVpZ2h0OiA3NnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZDcwMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnBsYXllcl9fYWRkLWZpbGUtYnV0dG9uOjpiZWZvcmUsIC5wbGF5ZXJfX2FkZC1maWxlLWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcbiAgICAucGxheWVyX19hZGQtZmlsZS1idXR0b246OmJlZm9yZSB7XFxuICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgaGVpZ2h0OiA1cHg7IH1cXG4gICAgLnBsYXllcl9fYWRkLWZpbGUtYnV0dG9uOjphZnRlciB7XFxuICAgICAgd2lkdGg6IDVweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7IH1cXG4gIC5wbGF5ZXJfX3RvZ2dsZS1wbGF5LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZkNzAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgICAucGxheWVyX190b2dnbGUtcGxheS1idXR0b246OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDU1JTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgIGJvcmRlci13aWR0aDogMjBweCAwIDIwcHggMzBweDtcXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmQ3MDA7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnBsYXllcl9fdG9nZ2xlLXBsYXktYnV0dG9uLS1wYXVzZTo6YmVmb3JlLCAucGxheWVyX190b2dnbGUtcGxheS1idXR0b24tLXBhdXNlOjphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IDVweDtcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZkNzAwOyB9XFxuICAgIC5wbGF5ZXJfX3RvZ2dsZS1wbGF5LWJ1dHRvbi0tcGF1c2U6OmFmdGVyIHtcXG4gICAgICBsZWZ0OiA0MCU7XFxuICAgICAgYm9yZGVyOiBub25lOyB9XFxuICAgIC5wbGF5ZXJfX3RvZ2dsZS1wbGF5LWJ1dHRvbi0tcGF1c2U6OmJlZm9yZSB7XFxuICAgICAgbGVmdDogNTUlOyB9XFxuICAucGxheWVyX19zdG9wLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZDcwMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLnBsYXllcl9fc3RvcC1idXR0b246OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogMjVweDtcXG4gICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZkNzAwOyB9XFxuICAucGxheWVyX190aW1lLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cXG4gIC5wbGF5ZXJfX3RpbWUtZWxlbWVudCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICNmZmQ3MDA7IH1cXG4gICAgLnBsYXllcl9fdGltZS1lbGVtZW50OmZpcnN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgLnBsYXllcl9fZmlsZS1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5wbGF5ZXJfX3JhbmdlLWlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMTVweCAwO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuICAucGxheWVyX19yYW5nZS1pbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG4gIC5wbGF5ZXJfX3JhbmdlLWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Oi1tcy10cmFjayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gIC5wbGF5ZXJfX3JhbmdlLWlucHV0Ojotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IC02cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZkNzAwOyB9XFxuICAucGxheWVyX19yYW5nZS1pbnB1dDo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Oi1tcy10aHVtYiB7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNmZmQ3MDA7IH1cXG4gIC5wbGF5ZXJfX3JhbmdlLWlucHV0OmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmQ3MDA7IH1cXG4gIC5wbGF5ZXJfX3JhbmdlLWlucHV0OjotbW96LXJhbmdlLXRyYWNrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICNmZmQ3MDA7IH1cXG4gIC5wbGF5ZXJfX3JhbmdlLWlucHV0OjotbXMtdHJhY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogOHB4IDA7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Oi1tcy1maWxsLXVwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcbiAgLnBsYXllcl9fcmFuZ2UtaW5wdXQ6Zm9jdXM6Oi1tcy1maWxsLXVwcGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZDcwMDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgc2NhbGVDYW52YXMgZnJvbSBcInV0aWxzL3NjYWxlQ2FudmFzLnRzXCI7XG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuY2xhc3MgQXVkaW9WaXNhbGl6ZXIge1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgY29sb3JZZWxsb3c6IHN0cmluZyA9IFwiI0ZGRDcwMFwiO1xuXG4gIGRyYXdDaGFpbkVsZW1lbnQoXG4gICAgeDE6IG51bWJlcixcbiAgICB5MTogbnVtYmVyLFxuICAgIHgyOiBudW1iZXIsXG4gICAgeTI6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGZyZXF1ZW5jeTogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmFyYyhcbiAgICAgIHgxLFxuICAgICAgeTEsXG4gICAgICBmcmVxdWVuY3kgKiAwLjIgPiAzMCA/IGZyZXF1ZW5jeSAqIDAuMiA6IDMwLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3JZZWxsb3c7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gNjtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdDaGFpbih7XG4gICAgYW5hbHlzZXIsXG4gICAgZGF0YUFycmF5XG4gIH06IHsgYW5hbHlzZXI6IGFueTsgZGF0YUFycmF5OiBBcnJheTxudW1iZXI+IH0gPSB7fSkge1xuICAgIGNvbnN0IGJhcnM6IG51bWJlciA9IDE3O1xuICAgIGNvbnN0IGJhcldpZHRoOiBudW1iZXIgPSAyO1xuICAgIGNvbnN0IHJhZGl1czogbnVtYmVyID0gMjIwO1xuICAgIGNvbnN0IGNlbnRlclg6IG51bWJlciA9IDMwMDtcbiAgICBjb25zdCBjZW50ZXJZOiBudW1iZXIgPSAwO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIGlmIChhbmFseXNlciAmJiBkYXRhQXJyYXkpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFyczsgaSArPSAxKSB7XG4gICAgICBjb25zdCByYWRzOiBudW1iZXIgPSBNYXRoLlBJIC8gMTY7XG4gICAgICBjb25zdCBiYXJIZWlnaHQ6IG51bWJlciA9IGRhdGFBcnJheSAmJiBkYXRhQXJyYXlbaV0gKiAwLjc7XG4gICAgICBjb25zdCB4OiBudW1iZXIgPSBjZW50ZXJYICsgTWF0aC5jb3MocmFkcyAqIGkpICogcmFkaXVzO1xuICAgICAgY29uc3QgeTogbnVtYmVyID0gY2VudGVyWSArIE1hdGguc2luKHJhZHMgKiBpKSAqIHJhZGl1cztcbiAgICAgIGNvbnN0IHhFbmQ6IG51bWJlciA9IGNlbnRlclggKyBNYXRoLmNvcyhyYWRzICogaSkgKiAocmFkaXVzICsgYmFySGVpZ2h0KTtcbiAgICAgIGNvbnN0IHlFbmQ6IG51bWJlciA9IGNlbnRlclkgKyBNYXRoLnNpbihyYWRzICogaSkgKiAocmFkaXVzICsgYmFySGVpZ2h0KTtcbiAgICAgIHRoaXMuZHJhd0NoYWluRWxlbWVudChcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgeEVuZCxcbiAgICAgICAgeUVuZCxcbiAgICAgICAgYmFyV2lkdGgsXG4gICAgICAgIGRhdGFBcnJheSAmJiBkYXRhQXJyYXlbaV1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDYwMDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAzNTA7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgc2NhbGVDYW52YXModGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmRyYXdDaGFpbigpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvVmlzYWxpemVyO1xuIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY2FsbHVtbG9ja2UvY2MyNThhMTkzODM5NjkxZjYwZGRcblxuY29uc3Qgc2NhbGVDYW52YXMgPSAoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXJcbikgPT4ge1xuICBjb25zdCBkZXZpY2VQaXhlbFJhdGlvOiBudW1iZXIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICBjb25zdCBiYWNraW5nU3RvcmVSYXRpbzogbnVtYmVyID1cbiAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICBjb250ZXh0Lm1zQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxuICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcbiAgICAxO1xuICBjb25zdCByYXRpbzogbnVtYmVyID0gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xuICBpZiAoZGV2aWNlUGl4ZWxSYXRpbyAhPT0gYmFja2luZ1N0b3JlUmF0aW8pIHtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aCAqIHJhdGlvO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQgKiByYXRpbztcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gIH0gZWxzZSB7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSBcIlwiO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICB9XG4gIGNvbnRleHQuc2NhbGUocmF0aW8sIHJhdGlvKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjYWxlQ2FudmFzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FudmFzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XCIsIFwiXCJdKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwOyB9XFxuICBib2R5OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzk2NzI1RTsgfVxcblwiLCBcIlwiXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=