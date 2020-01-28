(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"));
	else if(typeof define === 'function' && define.amd)
		define("ractive-dynamodb-json-editor", ["ractive"], factory);
	else if(typeof exports === 'object')
		exports["ractive-dynamodb-json-editor"] = factory(require("ractive"));
	else
		root["ractive-dynamodb-json-editor"] = factory(root["Ractive"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__14__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var IconTrash = exports.IconTrash = Ractive.extend({
	template: "\n\t\t<svg class='icon icon-trash' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z\"/></svg>\n\t"
});

var IconRight = exports.IconRight = Ractive.extend({
	template: "\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M192 128l128 128-128 128z\"/></svg>\n\t"
});

var IconDown = exports.IconDown = Ractive.extend({
	template: "\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M128 192l128 128 128-128z\"/></svg>\n\t"
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}} </div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<!-- <td class=\'jsoneditor-datatype\'>String</td> -->\n\t\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\' style=\'width: 100%;\'>\n\t\t\t\t\t\t\t\t{{#if editing}}\n\t\t\t\t\t\t\t\t\t<textarea class=\'jsoneditor-input jsoneditor-string\' style=\'height: {{textarea_height}}px;line-height: {{line_height}}px\' on-focus=\'focus\' on-blur=\'blur\' on-keyup=\'keyup\' value=\'{{value}}\'></textarea>\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t<input class=\'jsoneditor-input jsoneditor-string\' value=\'{{ JSON.stringify(value) }}\' readonly=\'true\' on-click=\'startEditing\' />\n\t\t\t\t\t\t\t\t\t<!--<div class=\'jsoneditor-value jsoneditor-string\' style=\'cursor: pointer;height: {{line_height}}px;line-height: {{line_height}}px;overflow: hidden;\' on-click=\'startEditing\'>{{ JSON.stringify(value) }}</div>-->\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t\t',
	data: function data() {
		return {
			line_height: 22,
			textarea_height: 22
		};
	},
	on: {
		startEditing: function startEditing(el) {
			var node = el.node.parentNode;
			this.set('editing', true);
			if (node.getElementsByTagName('textarea').length) node.getElementsByTagName('textarea')[0].focus();
		},
		focus: function focus() {

			var lines = this.get('value').split("\n").length;
			this.set('textarea_height', lines * this.get('line_height'));
		},
		blur: function blur() {
			this.set('editing', false);
		},
		keyup: function keyup() {
			var lines = this.get('value').split("\n").length;
			this.set('textarea_height', lines * this.get('line_height'));
		},
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		}
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t<tr>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<!--<td class=\'jsoneditor-datatype\'>Number</td>-->\n\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\' style=\'width: 100%;\'>\n\t\t\t\t\t\t\t<input type=\'number\' value=\'{{mirror_value}}\' class=\'jsoneditor-input jsoneditor-number\'  />\n\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t<div contenteditable=\'true\' spellcheck=\'false\' class=\'jsoneditor-value jsoneditor-number\' >{{ value }}</div>\n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t',
	data: function data() {
		return {
			mirror_value: ''
		};
	},
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		},
		init: function init() {
			var value = this.get('value');
			this.set('mirror_value', value);
			this.observe("mirror_value", function (n, o, kp) {
				this.set({ value: parseFloat(n) ? n.toString() : '' });
			});
		}
	}
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t<tr>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-datatype\'>Binary</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\' style=\'width: 100%;\'>\n\t\t\t\t\t\t\t<input value=\'{{updated_value}}\' class=\'jsoneditor-input jsoneditor-binary {{#if valid === false}}error{{/if}}\' on-keyup=\'validate\' on-blur=\'validate\' />\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t',
	data: function data() {
		return {
			updated_value: ''
		};
	},
	on: {
		init: function init() {
			var value = this.get('value');
			if (typeof value === "string") {
				this.set({ updated_value: JSON.parse(JSON.stringify(value)) });
				value = Uint8Array.from(atob(value), function (c) {
					return c.charCodeAt(0);
				});
				this.set({ value: value });
			}

			if (value instanceof Uint8Array) {
				this.set({ updated_value: btoa(String.fromCharCode.apply(null, value)) });

				// this would convert Uint8Array to b64, but for aws-sdk we need Uint8Array
				// value = btoa(String.fromCharCode.apply(null, value ))
				// this.set({value: value })
			}

			this.observe('updated_value', function (n, o, kp) {

				console.log('changed', n, o);

				if (typeof value === "string") return this.set('value', n);

				try {
					var new_ui8 = Uint8Array.from(atob(n), function (c) {
						return c.charCodeAt(0);
					});
					this.set({ value: new_ui8 });
					console.log(new_ui8);
				} catch (e) {}
			});
		},
		validate: function validate() {

			var valid = false;
			try {
				var new_ui8 = Uint8Array.from(atob(this.get('updated_value')), function (c) {
					return c.charCodeAt(0);
				});
				valid = true;
			} catch (e) {}

			this.set('valid', valid);
		},
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		}
	}
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t<tr>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<!--<td class=\'jsoneditor-datatype\'>Boolean</td> -->\n\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\' style=\'width: 100%;\'>\n\t\t\t\t\t\t\t<input value=\'{{value}}\' class=\'jsoneditor-input jsoneditor-boolean {{#if (value !== true ) && (value !== false) }}error{{/if}}\' on-keyup=\'validate\' on-blur=\'validate\' />\n\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t<div contenteditable=\'true\' spellcheck=\'false\' class=\'jsoneditor-value jsoneditor-boolean\' >{{ value ? true : false }}</div>\n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t',
	on: {
		init: function init() {},
		validate: function validate() {
			if (this.get('value') === 'true') this.set('value', true);

			if (this.get('value') === 'false') this.set('value', false);
		},
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		}
	}
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t<tr>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<!--<td class=\'jsoneditor-datatype\'>Null</td>-->\n\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div class=\'jsoneditor-input jsoneditor-null\' >null</div>\n\t\t\t\t\t\t\t<!--<div class=\'jsoneditor-value jsoneditor-null\' >null</div>-->\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\t',
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _S = __webpack_require__(1);

var _S2 = _interopRequireDefault(_S);

var _svgicons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		S: _S2.default,
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\n\t<tr class=\' jsoneditor-expandable\'>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}\' on-click=\'@this.toggle(\'open\')\'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-datatype\'>StringSet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'></td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div class=\'jsoneditor-value jsoneditor-array\'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t<tr class=\'jsoneditor-appender\'>\n\t\t<td></td><td></td><td>\n\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'prepend\'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{#value}}\n\t\t<S key={{@index}} value={{ . }} level=\'{{ level + 1 }}\' />\n\t\t<tr class=\'jsoneditor-appender\'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'elementinsert\'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class=\'jsoneditor-append\'></tr>\n\n\t',
	delete_key: function delete_key(key) {
		var value = this.get('value');
		value = value.filter(function (v, idx, arr) {
			return idx !== key;
		});
		this.set({ value: value });
	},
	data: function data() {
		return {
			open: false
		};
	},
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		},
		prepend: function prepend() {
			var value = this.get('value');
			value = [""].concat(value);
			this.set({ value: value });
		},
		elementinsert: function elementinsert(e) {
			var value = this.get('value');
			var idx = parseInt(e.resolve().split('.').pop());
			value.splice(idx + 1, 0, "");
			this.set({ value: value });
		}
	}
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _N = __webpack_require__(2);

var _N2 = _interopRequireDefault(_N);

var _svgicons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		N: _N2.default,
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\n\t<tr class=\' jsoneditor-expandable\'>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}\' on-click=\'@this.toggle(\'open\')\'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-datatype\'>NumberSet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'></td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div class=\'jsoneditor-value jsoneditor-array\'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t<tr class=\'jsoneditor-appender\'>\n\t\t<td></td><td></td><td>\n\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'prepend\'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{#value}}\n\t\t{{#if !hide}}\n\t\t<N key={{@index}} value={{ . }} level=\'{{ level + 1 }}\' />\n\t\t<tr class=\'jsoneditor-appender\'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'elementinsert\'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t\t{{/if}}\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class=\'jsoneditor-append\'></tr>\n\n\t',
	delete_key: function delete_key(key) {
		var value = this.get('value');
		value = value.filter(function (v, idx, arr) {
			return idx !== key;
		});
		this.set({ value: value });
	},
	data: function data() {
		return {
			open: false,
			hide: false // used to hide and show elements to force re-render
		};
	},
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		},
		prepend: function prepend() {
			var value = this.get('value');
			value = [""].concat(value);
			this.set({ value: value });

			this.set('hide', true);
			this.set('hide', false);
		},
		elementinsert: function elementinsert(e) {
			var value = this.get('value');
			var idx = parseInt(e.resolve().split('.').pop());
			value.splice(idx + 1, 0, "");
			this.set({ value: value });

			this.set('hide', true);
			this.set('hide', false);
		}
	}
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _B = __webpack_require__(3);

var _B2 = _interopRequireDefault(_B);

var _svgicons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Ractive.extend({
	components: {
		B: _B2.default,
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\n\t<tr class=\' jsoneditor-expandable\'>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}\' on-click=\'@this.toggle(\'open\')\'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-datatype\'>BinarySet[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'></td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div class=\'jsoneditor-value jsoneditor-array\'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t\t<tr class=\'jsoneditor-appender\'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\'  on-click=\'prepend\'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t{{#value}}\n\t\t{{#if !hide}}\n\t\t<B key={{@index}} value={{ . }} level=\'{{ level + 1 }}\' />\n\t\t<tr class=\'jsoneditor-appender\'>\n\t\t\t<td></td><td></td><td>\n\t\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'elementinsert\'></div>\n\t\t\t</td><td></td>\n\t\t</tr>\n\t\t{{/if}}\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class=\'jsoneditor-append\'></tr>\n\n\t',
	delete_key: function delete_key(key) {
		var value = this.get('value');
		value = value.filter(function (v, idx, arr) {
			return idx !== key;
		});
		this.set({ value: value });
	},
	data: function data() {
		return {
			open: false,
			hide: false // used to hide and show elements to force re-render
		};
	},
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		},
		prepend: function prepend() {
			var value = this.get('value');
			value = [Uint8Array.from(atob("InsertBase64Here"), function (c) {
				return c.charCodeAt(0);
			})].concat(value);
			this.set({ value: value });

			this.set('hide', true);
			this.set('hide', false);
		},
		elementinsert: function elementinsert(e) {
			var value = this.get('value');
			var idx = parseInt(e.resolve().split('.').pop());
			value.splice(idx + 1, 0, Uint8Array.from(atob("InsertBase64Here"), function (c) {
				return c.charCodeAt(0);
			}));
			this.set({ value: value });

			this.set('hide', true);
			this.set('hide', false);
		}
	}
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _S = __webpack_require__(1);

var _S2 = _interopRequireDefault(_S);

var _N = __webpack_require__(2);

var _N2 = _interopRequireDefault(_N);

var _BOOL = __webpack_require__(4);

var _BOOL2 = _interopRequireDefault(_BOOL);

var _NULL = __webpack_require__(5);

var _NULL2 = _interopRequireDefault(_NULL);

var _B = __webpack_require__(3);

var _B2 = _interopRequireDefault(_B);

var _SS = __webpack_require__(6);

var _SS2 = _interopRequireDefault(_SS);

var _NS = __webpack_require__(7);

var _NS2 = _interopRequireDefault(_NS);

var _BS = __webpack_require__(8);

var _BS2 = _interopRequireDefault(_BS);

var _M = __webpack_require__(10);

var _M2 = _interopRequireDefault(_M);

var _L_appender = __webpack_require__(15);

var _L_appender2 = _interopRequireDefault(_L_appender);

var _svgicons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var L = Ractive.extend({
	components: {
		S: _S2.default,
		N: _N2.default,
		BOOL: _BOOL2.default,
		NULL: _NULL2.default,
		B: _B2.default,
		SS: _SS2.default,
		NS: _NS2.default,
		BS: _BS2.default,

		//L: L,
		M: _M2.default,

		appender: _L_appender2.default,
		'icon-trash': _svgicons.IconTrash
	},

	onconfig: function onconfig(options) {
		this.components['L'] = L;
		//this.components['M'] = M;
	},

	template: '\n\n\t<tr class=\' jsoneditor-expandable\'>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\'></button>\n\t\t</td>\n\t\t<td>\n\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}\' on-click=\'@this.toggle(\'open\')\'></button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-datatype\'>List[{{ value.length }}]</td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'></td>\n\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t<div class=\'jsoneditor-value jsoneditor-array\'></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t<icon-trash />\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n\n\t{{#if open}}\n\t\t<appender level={{level}} index={{null}}/>\n\t{{#value}}\n\t\t{{#if .hasOwnProperty(\'S\')}}\n\t\t\t<S key={{@index}} value={{ .S }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'N\')}}\n\t\t\t<N key={{@index}} value={{ .N }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'BOOL\')}}\n\t\t\t<BOOL key={{@index}} value={{ .BOOL }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'NULL\')}}\n\t\t\t<NULL key={{@index}} level=\'1\' level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'B\')}}\n\t\t\t<B key={{@index}} value={{ .B }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'L\')}}\n\t\t\t<L key={{@index}} value={{ .L }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'M\')}}\n\t\t\t<M key={{@index}} value={{ .M }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'SS\')}}\n\t\t\t<SS key={{@index}} value={{ .SS }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'NS\')}}\n\t\t\t<NS key={{@index}} value={{ .NS }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t{{#if .hasOwnProperty(\'BS\')}}\n\t\t\t<BS key={{@index}} value={{ .BS }} level=\'{{ level + 1 }}\' />\n\t\t{{/if}}\n\n\t\t<appender level={{level}} index={{@index}}/>\n\n\t{{/value}}\n\t{{/if}}\n\n\t<tr class=\'jsoneditor-append\'></tr>\n\n\t',
	delete_key: function delete_key(key) {
		var value = this.get('value');
		value = value.filter(function (v, idx, arr) {
			return idx !== key;
		});
		this.set({ value: value });
	},
	data: function data() {
		return {
			open: false
		};
	},
	prepend_attribute: function prepend_attribute(type, idx) {

		var value = this.get('value');

		var to_add;

		if (type === "S") to_add = { S: "" };

		if (type === "N") to_add = { N: "" };

		if (type === "BOOL") to_add = { BOOL: "" };

		if (type === "NULL") to_add = { NULL: true };

		if (type === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
				return c.charCodeAt(0);
			}) };

		if (type === "SS") to_add = { SS: [] };

		if (type === "NS") to_add = { NS: [] };

		if (type === "BS") to_add = { BS: [] };

		if (type === "L") to_add = { L: [] };

		if (type === "M") to_add = { M: {} };

		if (idx === null) {
			value = [to_add].concat(value);
		} else {
			value.splice(idx + 1, 0, to_add);
		}

		this.set({ value: value });
	},
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		}
	}
});

//import L from './L';
exports.default = L;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _S = __webpack_require__(1);

var _S2 = _interopRequireDefault(_S);

var _N = __webpack_require__(2);

var _N2 = _interopRequireDefault(_N);

var _BOOL = __webpack_require__(4);

var _BOOL2 = _interopRequireDefault(_BOOL);

var _NULL = __webpack_require__(5);

var _NULL2 = _interopRequireDefault(_NULL);

var _B = __webpack_require__(3);

var _B2 = _interopRequireDefault(_B);

var _SS = __webpack_require__(6);

var _SS2 = _interopRequireDefault(_SS);

var _NS = __webpack_require__(7);

var _NS2 = _interopRequireDefault(_NS);

var _BS = __webpack_require__(8);

var _BS2 = _interopRequireDefault(_BS);

var _L = __webpack_require__(9);

var _L2 = _interopRequireDefault(_L);

var _M_appender = __webpack_require__(11);

var _M_appender2 = _interopRequireDefault(_M_appender);

var _svgicons = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import M from './M';

var M = Ractive.extend({
	components: {
		S: _S2.default,
		N: _N2.default,
		BOOL: _BOOL2.default,
		NULL: _NULL2.default,
		B: _B2.default,
		SS: _SS2.default,
		NS: _NS2.default,
		BS: _BS2.default,

		L: _L2.default,

		appender: _M_appender2.default,
		'icon-trash': _svgicons.IconTrash
	},

	onconfig: function onconfig(options) {
		this.components['M'] = M;
		this.components['L'] = _L2.default; // M doenst know L without this
	},

	template: '\n\n\t\t<tr class=\' jsoneditor-expandable\'>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\'></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ level * 24 }}px;\'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}\' on-click=\'@this.toggle(\'open\')\'></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>{{key}}</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-datatype\'>Map{{ \'{\' + Object.keys(value).length + \'}\' }}</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'></td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<div class=\'jsoneditor-value jsoneditor-object\'></div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\n\t\t{{#if open}}\n\t\t\t<appender level={{level}} index={{null}}/>\n\t\t{{#each value }}\n\t\t\t{{#if .hasOwnProperty(\'S\')}}\n\t\t\t\t<S key={{@key}} value={{ .S }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'N\')}}\n\t\t\t\t<N key={{@key}} value={{ .N }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'BOOL\')}}\n\t\t\t\t<BOOL key={{@key}} value={{ .BOOL }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'NULL\')}}\n\t\t\t\t<NULL key={{@key}} level=\'1\' level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'B\')}}\n\t\t\t\t<B key={{@key}} value={{ .B }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'L\')}}\n\t\t\t\t<L key={{@key}} value={{ .L }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'M\')}}\n\t\t\t\t<M key={{@key}} value={{ .M }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'SS\')}}\n\t\t\t\t<SS key={{@key}} value={{ .SS }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'NS\')}}\n\t\t\t\t<NS key={{@key}} value={{ .NS }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\n\t\t\t{{#if .hasOwnProperty(\'BS\')}}\n\t\t\t\t<BS key={{@key}} value={{ .BS }} level=\'{{ level + 1 }}\' />\n\t\t\t{{/if}}\n\t\t\t<appender level={{level}} index={{@key}}/>\n\n\t\t{{/each}}\n\t\t{{/if}}\n\n\n\t\t<tr class=\'jsoneditor-append\'></tr>\n\n\t',
	delete_key: function delete_key(key) {
		var value = this.get('value');
		delete value[key];
		this.set({ value: value });
	},
	data: function data() {
		return {
			open: false
		};
	},
	prepend_attribute: function prepend_attribute(type, idx, field_name) {
		console.log('prepend', type, idx, field_name);
		var value = this.get('value');

		var to_add;

		if (type === "S") to_add = { S: "" };

		if (type === "N") to_add = { N: "" };

		if (type === "BOOL") to_add = { BOOL: "" };

		if (type === "NULL") to_add = { NULL: true };

		if (type === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
				return c.charCodeAt(0);
			}) };

		if (type === "SS") to_add = { SS: [] };

		if (type === "NS") to_add = { NS: [] };

		if (type === "BS") to_add = { BS: [] };

		if (type === "L") to_add = { L: [] };

		if (type === "M") to_add = { M: {} };

		var newmap = {};

		if (idx === null) {
			newmap[field_name] = to_add;
			Object.keys(value).map(function (k) {
				newmap[k] = value[k];
			});
		} else {
			Object.keys(value).map(function (k) {
				newmap[k] = value[k];
				if (k === idx) newmap[field_name] = to_add;
			});
		}

		this.set({ value: {} });
		this.set({ value: newmap });
	},
	on: {
		delete: function _delete() {
			this.parent.delete_key(this.get('key'));
		}
	}
});

exports.default = M;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t{{#if type === null}}\n\t<tr class=\'jsoneditor-appender\'>\n\t\t<td></td><td></td><td>\n\t\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'pickatype\'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{/if}}\n\n\t{{#if type !== null }}\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;\'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<input value={{field_name}} placeholder=\'Attribute Name\' style=\'margin-top: 3px;\' />\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\' style=\'width: 100%;\'>\n\t\t\t\t\t\t\t\t<select value={{type}} on-change=\'typepicked\' style=\'margin-top: 3px;\' disabled={{type_disabled}}>\n\t\t\t\t\t\t\t\t\t<option value=\'\'>Select Data Type</option>\n\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t<option value=\'BOOL\'>Boolean</option>\n\t\t\t\t\t\t\t\t\t<option value=\'NULL\'>Null</option>\n\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t<option value=\'SS\'>StringSet</option>\n\t\t\t\t\t\t\t\t\t<option value=\'NS\'>NumberSet</option>\n\t\t\t\t\t\t\t\t\t<option value=\'BS\'>BinarySet</option>\n\t\t\t\t\t\t\t\t\t<option value=\'L\'>List</option>\n\t\t\t\t\t\t\t\t\t<option value=\'M\'>Map</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t{{/if}}\n\t',
	data: function data() {
		return {
			type: null,
			field_name: '',
			type_disabled: true
		};
	},
	on: {
		init: function init() {
			this.observe('field_name', function (n, o, kp) {
				if (n.trim()) {
					this.set({ type_disabled: false });
				} else {
					this.set({ type_disabled: true });
				}
			});
		},
		delete: function _delete() {
			this.set({ type: null });
		},
		pickatype: function pickatype() {
			this.set({ type: '' });
		},
		typepicked: function typepicked() {
			if (!this.get('type')) return;

			if (!this.get('field_name').trim()) return;

			this.parent.prepend_attribute(this.get('type'), this.get('index'), this.get('field_name'));
			this.set({ type: null });
		}
	}
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(13);

var _ractive = __webpack_require__(14);

var _ractive2 = _interopRequireDefault(_ractive);

var _S = __webpack_require__(1);

var _S2 = _interopRequireDefault(_S);

var _N = __webpack_require__(2);

var _N2 = _interopRequireDefault(_N);

var _BOOL = __webpack_require__(4);

var _BOOL2 = _interopRequireDefault(_BOOL);

var _NULL = __webpack_require__(5);

var _NULL2 = _interopRequireDefault(_NULL);

var _B = __webpack_require__(3);

var _B2 = _interopRequireDefault(_B);

var _SS = __webpack_require__(6);

var _SS2 = _interopRequireDefault(_SS);

var _NS = __webpack_require__(7);

var _NS2 = _interopRequireDefault(_NS);

var _BS = __webpack_require__(8);

var _BS2 = _interopRequireDefault(_BS);

var _L = __webpack_require__(9);

var _L2 = _interopRequireDefault(_L);

var _M = __webpack_require__(10);

var _M2 = _interopRequireDefault(_M);

var _M_appender = __webpack_require__(11);

var _M_appender2 = _interopRequireDefault(_M_appender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ractive2.default.extend({
	template: '\n\n\t\t<div class="awspilot-dynamodb-json-editor jsoneditor" style="{{style}}">\n\t\t\t<div class="jsoneditor-menu {{.[\'menu-class\']}}" style="{{.[\'menu-style\']}}">\n\t\t\t\t<select value=\'{{mode}}\' style="height: 20px;margin: 6px;">\n\t\t\t\t\t<option value=\'tree\'>Tree</option>\n\t\t\t\t\t<option value=\'code\'>Code</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t{{#if ((mode === \'tree\') && (navigationBar === true)) }}\n\t\t\t\t<div class="jsoneditor-navbar {{navbar-class}}" style={{.[\'navbar-style\']}}></div>\n\t\t\t{{/if}}\n\n\t\t\t<div class="jsoneditor-outer has-main-menu-bar {{#if ((mode === \'tree\') && (navigationBar === true)) }}has-nav-bar{{/if}}">\n\t\t\t\t{{#if mode === \'code\'}}\n\t\t\t\t\t<textarea style="width: 100%;height: 100%;border: 0px;margin: 0px;padding: 0px;">{{ JSON.stringify(item, null, "\\t") }}</textarea>\n\t\t\t\t{{else}}\n\t\t\t\t<div class="jsoneditor-tree">\n\t\t\t\t\t<div class="jsoneditor-tree-inner">\n\n\t\t\t\t\t\t<table border=0 class="jsoneditor-tree">\n\t\t\t\t\t\t\t<colgroup><col width="24px"><col width="24px"><col></colgroup>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr class=" jsoneditor-expandable">\n\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t<td><button type="button" class="jsoneditor-button jsoneditor-contextmenu"></button></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<table class="jsoneditor-values" style="border-collapse: collapse; margin-left: 0px;">\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree"><button type="button" class="jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}" on-click=\'@this.toggle(\'open\')\' ></button></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div contenteditable="false" class="jsoneditor-readonly">Item</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree"></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="jsoneditor-tree">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="jsoneditor-value jsoneditor-object">{ {{ Object.keys(item).length }} }</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t{{#if open}}\n\t\t\t\t\t\t\t\t\t<appender level={{0}} index={{null}}/>\n\t\t\t\t\t\t\t\t{{#each item }}\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'S\')}}\n\t\t\t\t\t\t\t\t\t\t<S key={{@key}} value={{ .S }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'N\')}}\n\t\t\t\t\t\t\t\t\t\t<N key={{@key}} value={{ .N }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'BOOL\')}}\n\t\t\t\t\t\t\t\t\t\t<BOOL key={{@key}} value={{ .BOOL }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'NULL\')}}\n\t\t\t\t\t\t\t\t\t\t<NULL key={{@key}} level="1" level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'B\')}}\n\t\t\t\t\t\t\t\t\t\t<B key={{@key}} value={{ .B }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'L\')}}\n\t\t\t\t\t\t\t\t\t\t<L key={{@key}} value={{ .L }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'M\')}}\n\t\t\t\t\t\t\t\t\t\t<M key={{@key}} value={{ .M }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'SS\')}}\n\t\t\t\t\t\t\t\t\t\t<SS key={{@key}} value={{ .SS }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'NS\')}}\n\t\t\t\t\t\t\t\t\t\t<NS key={{@key}} value={{ .NS }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t\t{{#if .hasOwnProperty(\'BS\')}}\n\t\t\t\t\t\t\t\t\t\t<BS key={{@key}} value={{ .BS }} level="1" />\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t<appender level={{0}} index={{@key}}/>\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t',
	components: {
		S: _S2.default,
		N: _N2.default,
		BOOL: _BOOL2.default,
		NULL: _NULL2.default,
		B: _B2.default,
		SS: _SS2.default,
		NS: _NS2.default,
		BS: _BS2.default,

		// the nexted ones
		L: _L2.default,
		M: _M2.default,

		appender: _M_appender2.default
	},

	data: function data() {
		return {
			open: true,
			mode: 'tree', // tree | view | form | code | text | preview
			mainMenuBar: true,
			navigationBar: true,
			statusBar: true
		};
	},
	prepend_attribute: function prepend_attribute(type, idx, field_name) {
		console.log('prepend', type, idx, field_name);

		var value = this.get('item');

		var to_add;

		if (type === "S") to_add = { S: "" };

		if (type === "N") to_add = { N: "" };

		if (type === "BOOL") to_add = { BOOL: "" };

		if (type === "NULL") to_add = { NULL: true };

		if (type === "B") to_add = { B: Uint8Array.from(atob("InsertBase64Here"), function (c) {
				return c.charCodeAt(0);
			}) };

		if (type === "SS") to_add = { SS: [] };

		if (type === "NS") to_add = { NS: [] };

		if (type === "BS") to_add = { BS: [] };

		if (type === "L") to_add = { L: [] };

		if (type === "M") to_add = { M: {} };

		var newmap = {};

		if (idx === null) {
			newmap[field_name] = to_add;
			Object.keys(value).map(function (k) {
				newmap[k] = value[k];
			});
		} else {
			Object.keys(value).map(function (k) {
				newmap[k] = value[k];
				if (k === idx) newmap[field_name] = to_add;
			});
		}

		this.set({ item: {} });
		this.set({ item: newmap });
	},
	delegate: false,
	elToFocus: null,
	delete_key: function delete_key(key) {
		var item = this.get('item');
		delete item[key];
		this.set({ item: item });
	},
	on: {}
});

// the nested ones

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _svgicons = __webpack_require__(0);

exports.default = Ractive.extend({
	components: {
		'icon-trash': _svgicons.IconTrash
	},
	template: '\n\t{{#if type === null}}\n\t<tr class=\'jsoneditor-appender\'>\n\t\t<td></td><td></td><td>\n\t\t\t\t<div style=\'margin-left: {{ 24 * level + 40 }}px;\' on-click=\'pickatype\'></div>\n\t\t</td><td></td>\n\t</tr>\n\t{{/if}}\n\n\t{{#if type !== null }}\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-dragarea\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-contextmenu\' ></button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<table class=\'jsoneditor-values\' style=\'border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;\'>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<button type=\'button\' class=\'jsoneditor-button jsoneditor-invisible\' ></button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\'>\n\t\t\t\t\t\t\t\t<div contenteditable=\'false\' spellcheck=\'false\' class=\'jsoneditor-field\'>*</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-separator\'>:</td>\n\t\t\t\t\t\t\t<td class=\'jsoneditor-tree\' style=\'width: 100%;\'>\n\t\t\t\t\t\t\t\t<select value={{type}} on-change=\'typepicked\' style=\'margin-top: 3px;\'>\n\t\t\t\t\t\t\t\t\t<option value=\'\'>Select Data Type</option>\n\t\t\t\t\t\t\t\t\t<option value=\'S\'>String</option>\n\t\t\t\t\t\t\t\t\t<option value=\'N\'>Number</option>\n\t\t\t\t\t\t\t\t\t<option value=\'BOOL\'>Boolean</option>\n\t\t\t\t\t\t\t\t\t<option value=\'NULL\'>Null</option>\n\t\t\t\t\t\t\t\t\t<option value=\'B\'>Binary</option>\n\t\t\t\t\t\t\t\t\t<option value=\'SS\'>StringSet</option>\n\t\t\t\t\t\t\t\t\t<option value=\'NS\'>NumberSet</option>\n\t\t\t\t\t\t\t\t\t<option value=\'BS\'>BinarySet</option>\n\t\t\t\t\t\t\t\t\t<option value=\'L\'>List</option>\n\t\t\t\t\t\t\t\t\t<option value=\'M\'>Map</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class=\'jsoneditor-button btn-delete-attribute\' on-click=\'delete\' >\n\t\t\t\t\t<icon-trash />\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t{{/if}}\n\t',
	data: function data() {
		return {
			type: null
		};
	},
	on: {
		delete: function _delete() {
			this.set({ type: null });
		},
		pickatype: function pickatype() {
			this.set({ type: '' });
		},
		typepicked: function typepicked() {
			if (!this.get('type')) return;

			this.parent.prepend_attribute(this.get('type'), this.get('index'));
			this.set({ type: null });
		}
	}
});

/***/ })
/******/ ])["default"];
});