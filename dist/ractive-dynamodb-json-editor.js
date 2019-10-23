(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ractive"));
	else if(typeof define === 'function' && define.amd)
		define("ractive-dynamodb-json-editor", ["ractive"], factory);
	else if(typeof exports === 'object')
		exports["ractive-dynamodb-json-editor"] = factory(require("ractive"));
	else
		root["ractive-dynamodb-json-editor"] = factory(root["Ractive"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"ractive","commonjs2":"ractive","amd":"ractive","root":"Ractive"}
var external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_ = __webpack_require__(0);
var external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_);

// CONCATENATED MODULE: ./S.js
/* harmony default export */ var S = (Ractive.extend({
		template: "\
		<tr>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
			</td>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
			</td>\
			<td>\
				<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
					<tbody>\
						<tr>\
							<td class='jsoneditor-tree'>\
								<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
							</td>\
							<td class='jsoneditor-tree'>\
								<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}} </div>\
							</td>\
							<!-- <td class='jsoneditor-datatype'>String</td> -->\
							<td class='jsoneditor-separator'>:</td>\
							<td class='jsoneditor-tree' style='width: 100%;'>\
								{{#if editing}}\
									<textarea class='jsoneditor-input jsoneditor-string' style='height: {{textarea_height}}px;line-height: {{line_height}}px' on-focus='focus' on-blur='blur' on-keyup='keyup' value='{{value}}'></textarea>\
								{{else}}\
									<input class='jsoneditor-input jsoneditor-string' value='{{ JSON.stringify(value) }}' readonly='true' on-click='startEditing' /> \
									<!--<div class='jsoneditor-value jsoneditor-string' style='cursor: pointer;height: {{line_height}}px;line-height: {{line_height}}px;overflow: hidden;' on-click='startEditing'>{{ JSON.stringify(value) }}</div>-->\
								{{/if}}\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
			<td>\
				<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
					<div class='trash-solid icon'></div>\
				</button>\
			</td>\
		</tr>\
		",
		data: function() {
			return {
				line_height: 22,
				textarea_height: 22,
			}
		},
		on: {
			startEditing: function( el ) {
				var node = el.node.parentNode;
				this.set('editing',true)
				if (node.getElementsByTagName('textarea').length)
					node.getElementsByTagName('textarea')[0].focus()

			},
			focus: function() {

				var lines = this.get('value').split("\n").length
				this.set('textarea_height', lines * this.get('line_height') )
			},
			blur: function() {
				this.set('editing', false )
			},
			keyup: function() {
				var lines = this.get('value').split("\n").length
				this.set('textarea_height', lines * this.get('line_height') )
			},
			delete: function() {
				this.parent.delete_key( this.get('key') )
			}
		}
	}));

// CONCATENATED MODULE: ./N.js

/* harmony default export */ var N = (Ractive.extend({
	template: "\
	<tr>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<!--<td class='jsoneditor-datatype'>Number</td>-->\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input type='number' value='{{mirror_value}}' class='jsoneditor-input jsoneditor-number'  />\
							<!--\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-number' >{{ value }}</div>\
							-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
	",
	data: function() {
		return {
			mirror_value: '',
		}
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		init: function() {
			var value = this.get('value')
			this.set('mirror_value', value )
			this.observe("mirror_value", function( n, o, kp ) {
				this.set({value: parseFloat(n) ? n.toString() : '' })
			})
		},
	}
}));

// CONCATENATED MODULE: ./BOOL.js

/* harmony default export */ var BOOL = (Ractive.extend({
	template: "\
	<tr>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<!--<td class='jsoneditor-datatype'>Boolean</td> -->\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input value='{{value}}' class='jsoneditor-input jsoneditor-boolean {{#if (value !== true ) && (value !== false) }}error{{/if}}' on-keyup='validate' on-blur='validate' />\
							<!--\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-boolean' >{{ value ? true : false }}</div>\
							-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
	",
	on: {
		init: function() {
		},
		validate: function() {
			if (this.get('value') === 'true')
				this.set('value', true )

			if (this.get('value') === 'false')
				this.set('value', false )

		},
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
}));

// CONCATENATED MODULE: ./NULL.js

/* harmony default export */ var NULL = (Ractive.extend({
	template: "\
	<tr>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<!--<td class='jsoneditor-datatype'>Null</td>-->\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input value='null' class='jsoneditor-input jsoneditor-null' readonly='true' />\
							<!--<div class='jsoneditor-value jsoneditor-null' >null</div>-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
	",
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
}));

// CONCATENATED MODULE: ./B.js

/* harmony default export */ var B = (Ractive.extend({
	template: "\
	<tr>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>Binary</td>\
						<td class='jsoneditor-separator'>:</td>\
						<td class='jsoneditor-tree'>\
							<input value='{{updated_value}}' class='jsoneditor-input jsoneditor-binary' />\
							<!--\
							<div contenteditable='true' spellcheck='false' class='jsoneditor-value jsoneditor-binary' >{{ updated_value }}</div>\
							-->\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
	",
	data: function() {
		return {
			updated_value: '',
		}
	},
	on: {
		init: function() {
			var value = this.get('value')
			if ( typeof value === "string") {
				this.set({ updated_value: JSON.parse(JSON.stringify(value))})
				value = Uint8Array.from(atob(value), function(c) { return c.charCodeAt(0) })
				this.set({value: value })
			}

			if ( value instanceof Uint8Array ) {
				this.set({ updated_value: btoa(String.fromCharCode.apply(null, value )) })


				// this would convert Uint8Array to b64, but for aws-sdk we need Uint8Array
				// value = btoa(String.fromCharCode.apply(null, value ))
				// this.set({value: value })

			}


			this.observe('updated_value', function(n,o, kp ) {

				console.log('changed', n, o )

				if ( typeof value === "string")
					return this.set('value', n )

				try {
					var new_ui8 = Uint8Array.from(atob(n), function (c) { return c.charCodeAt(0) } );
					this.set({value: new_ui8 })
					console.log(new_ui8)
				} catch (e) {}



			})

		},
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
}));

// CONCATENATED MODULE: ./SS.js




/* harmony default export */ var SS = (Ractive.extend({
	components: {
		S: S,
	},
	template: "\
\
	<tr class=' jsoneditor-expandable'>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>StringSet[{{ value.length }}]</td>\
						<td class='jsoneditor-tree'></td>\
						<td class='jsoneditor-tree'>\
							<div class='jsoneditor-value jsoneditor-array'></div>\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
\
	{{#if open}}\
	<tr class='jsoneditor-appender'>\
		<td></td><td></td><td>\
			<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>\
		</td><td></td>\
	</tr>\
	{{#value}}\
		<S key={{@index}} value={{ . }} level='{{ level + 1 }}' />\
		<tr class='jsoneditor-appender'>\
			<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\
			</td><td></td>\
		</tr>\
	{{/value}}\
	{{/if}}\
\
	<tr class='jsoneditor-append'></tr>\
\
	",
	delete_key: function( key ) {
		var value = this.get('value')
		value = value.filter(function(v,idx,arr) { return idx !== key })
		this.set({value:value})
	},
	data: function() {
		return {
			open: false,
		}
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		prepend: function() {
			var value = this.get('value')
			value = [""].concat(value)
			this.set({value:value})
		},
		elementinsert: function(e) {
			var value = this.get('value')
			var idx = parseInt(e.resolve().split('.').pop())
			value.splice( idx+1, 0, "" )
			this.set({value:value})
		}
	}
}));

// CONCATENATED MODULE: ./NS.js




/* harmony default export */ var NS = (Ractive.extend({
	components: {
		N: N,
	},
	template: "\
\
	<tr class=' jsoneditor-expandable'>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>NumberSet[{{ value.length }}]</td>\
						<td class='jsoneditor-tree'></td>\
						<td class='jsoneditor-tree'>\
							<div class='jsoneditor-value jsoneditor-array'></div>\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
\
	{{#if open}}\
	<tr class='jsoneditor-appender'>\
		<td></td><td></td><td>\
			<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='prepend'></div>\
		</td><td></td>\
	</tr>\
	{{#value}}\
		{{#if !hide}}\
		<N key={{@index}} value={{ . }} level='{{ level + 1 }}' />\
		<tr class='jsoneditor-appender'>\
			<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\
			</td><td></td>\
		</tr>\
		{{/if}}\
	{{/value}}\
	{{/if}}\
\
	<tr class='jsoneditor-append'></tr>\
\
	",
	delete_key: function( key ) {
		var value = this.get('value')
		value = value.filter(function(v,idx,arr) { return idx !== key })
		this.set({value:value})
	},
	data: function() {
		return {
			open: false,
			hide: false, // used to hide and show elements to force re-render
		}
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		prepend: function() {
			var value = this.get('value')
			value = [""].concat(value)
			this.set({value:value})

			this.set('hide', true)
			this.set('hide', false )
		},
		elementinsert: function(e) {
			var value = this.get('value')
			var idx = parseInt(e.resolve().split('.').pop())
			value.splice( idx+1, 0, "" )
			this.set({value:value})

			this.set('hide', true)
			this.set('hide', false )

		}
	}
}));

// CONCATENATED MODULE: ./BS.js




/* harmony default export */ var BS = (Ractive.extend({
	components: {
		B: B,
	},
	template: "\
\
	<tr class=' jsoneditor-expandable'>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>BinarySet[{{ value.length }}]</td>\
						<td class='jsoneditor-tree'></td>\
						<td class='jsoneditor-tree'>\
							<div class='jsoneditor-value jsoneditor-array'></div>\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
\
	{{#if open}}\
		<tr class='jsoneditor-appender'>\
			<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;'  on-click='prepend'></div>\
			</td><td></td>\
		</tr>\
	{{#value}}\
		{{#if !hide}}\
		<B key={{@index}} value={{ . }} level='{{ level + 1 }}' />\
		<tr class='jsoneditor-appender'>\
			<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='elementinsert'></div>\
			</td><td></td>\
		</tr>\
		{{/if}}\
	{{/value}}\
	{{/if}}\
\
	<tr class='jsoneditor-append'></tr>\
\
	",
	delete_key: function( key ) {
		var value = this.get('value')
		value = value.filter(function(v,idx,arr) { return idx !== key })
		this.set({value:value})
	},
	data: function() {
		return {
			open: false,
			hide: false, // used to hide and show elements to force re-render
		}
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		},
		prepend: function() {
			var value = this.get('value')
			value = [ Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) ].concat(value)
			this.set({value:value})

			this.set('hide', true)
			this.set('hide', false )
		},
		elementinsert: function(e) {
			var value = this.get('value')
			var idx = parseInt(e.resolve().split('.').pop())
			value.splice( idx+1, 0, Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) )
			this.set({value:value})

			this.set('hide', true)
			this.set('hide', false )
		}
	}
}));

// CONCATENATED MODULE: ./M.js











//import M from './M';


var appender = Ractive.extend({
	template: "\
	{{#if type === null}}\
	<tr class='jsoneditor-appender'>\
		<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\
		</td><td></td>\
	</tr>\
	{{/if}}\
	\
	{{#if type !== null }}\
		<tr>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
			</td>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
			</td>\
			<td>\
				<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\
					<tbody>\
						<tr>\
							<td class='jsoneditor-tree'>\
								<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
							</td>\
							<td class='jsoneditor-tree'>\
								<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>\
									<input value={{field_name}} placeholder='Attribute Name' />\
								</div>\
							</td>\
							<td class='jsoneditor-separator'>:</td>\
							<td class='jsoneditor-tree' style='width: 100%;'>\
								<select value={{type}} on-change='typepicked'>\
									<option value='S'>String</option>\
									<option value='N'>Number</option>\
									<option value='BOOL'>Boolean</option>\
									<option value='NULL'>Null</option>\
									<option value='B'>Binary</option>\
									<option value='SS'>StringSet</option>\
									<option value='NS'>NumberSet</option>\
									<option value='BS'>BinarySet</option>\
									<option value='L'>List</option>\
									<option value='M'>Map</option>\
								</select>\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
			<td>\
				<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
					<div class='trash-solid icon'></div>\
				</button>\
			</td>\
		</tr>\
	{{/if}}\
	",
	data: function() {
		return {
			type: null,
			field_name: '',
		}
	},
	on: {
		delete: function() {
			this.set({type: null,})
		},
		pickatype: function() {
			this.set({type: ''})
		},
		typepicked: function() {
			this.parent.prepend_attribute( this.get('type'), this.get('index'), this.get('field_name'))
			this.set({type: null})
		}
	},
})

var M = Ractive.extend({
	components: {
		S: S,
		N: N,
		BOOL: BOOL,
		NULL: NULL,
		B: B,
		SS: SS,
		NS: NS,
		BS: BS,

		L: L_0,

		appender: appender,
	},

	onconfig: function(options) {
		this.components['M'] = M;
		this.components['L'] = L_0; // M doenst know L without this
	},

	template: "\
\
		<tr class=' jsoneditor-expandable'>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
			</td>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
			</td>\
			<td>\
				<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
					<tbody>\
						<tr>\
							<td class='jsoneditor-tree'>\
								<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\
							</td>\
							<td class='jsoneditor-tree'>\
								<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
							</td>\
							<td class='jsoneditor-datatype'>Map{{ '{' + Object.keys(value).length + '}' }}</td>\
							<td class='jsoneditor-tree'></td>\
							<td class='jsoneditor-tree'>\
								<div class='jsoneditor-value jsoneditor-object'></div>\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
			<td>\
				<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
					<div class='trash-solid icon'></div>\
				</button>\
			</td>\
		</tr>\
\
		{{#if open}}\
			<appender level={{level}} index={{null}}/>\
		{{#each value }}\
			{{#if .hasOwnProperty('S')}}\
				<S key={{@key}} value={{ .S }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('N')}}\
				<N key={{@key}} value={{ .N }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('BOOL')}}\
				<BOOL key={{@key}} value={{ .BOOL }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('NULL')}}\
				<NULL key={{@key}} level='1' level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('B')}}\
				<B key={{@key}} value={{ .B }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('L')}}\
				<L key={{@key}} value={{ .L }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('M')}}\
				<M key={{@key}} value={{ .M }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('SS')}}\
				<SS key={{@key}} value={{ .SS }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('NS')}}\
				<NS key={{@key}} value={{ .NS }} level='{{ level + 1 }}' />\
			{{/if}}\
\
			{{#if .hasOwnProperty('BS')}}\
				<BS key={{@key}} value={{ .BS }} level='{{ level + 1 }}' />\
			{{/if}}\
			<appender level={{level}} index={{@key}}/>\
\
		{{/each}}\
		{{/if}}\
\
\
		<tr class='jsoneditor-append'></tr>\
\
	",
	delete_key: function( key ) {
		var value = this.get('value')
		delete value[key]
		this.set({value:value})
	},
	data: function() {
		return {
			open: false,
		}
	},
	prepend_attribute: function( type, idx, field_name ) {
		console.log('prepend', type, idx, field_name )
		var value = this.get('value')

		var to_add;

		if (type === "S")
			to_add = {S: ""}

		if (type === "N")
			to_add = {N: ""}

		if (type === "BOOL")
			to_add = {BOOL: ""}

		if (type === "NULL")
			to_add = {NULL: "true"}

		if (type === "B")
			to_add = {B: Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) }

		if (type === "SS")
			to_add = {SS: []}

		if (type === "NS")
			to_add = {NS: []}

		if (type === "BS")
			to_add = {BS: []}

		if (type === "L")
			to_add = {L: []}

		if (type === "M")
			to_add = {M: {}}

		var newmap = {}

		if (idx === null) {
			newmap[field_name] = to_add
			Object.keys(value).map(function(k) {
				newmap[k] = value[k];
			})
		} else {
			Object.keys(value).map(function(k) {
				newmap[k] = value[k];
				if (k === idx)
					newmap[field_name] = to_add
			})
		}

		this.set({value: {}})
		this.set({value:newmap})

	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
})

/* harmony default export */ var M_0 = (M);

// CONCATENATED MODULE: ./L.js










//import L from './L';


var L_appender = Ractive.extend({
	template: "\
	{{#if type === null}}\
	<tr class='jsoneditor-appender'>\
		<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\
		</td><td></td>\
	</tr>\
	{{/if}}\
	\
	{{#if type !== null }}\
		<tr>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
			</td>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
			</td>\
			<td>\
				<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\
					<tbody>\
						<tr>\
							<td class='jsoneditor-tree'>\
								<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
							</td>\
							<td class='jsoneditor-tree'>\
								<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>*</div>\
							</td>\
							<td class='jsoneditor-separator'>:</td>\
							<td class='jsoneditor-tree' style='width: 100%;'>\
								<select value={{type}} on-change='typepicked'>\
									<option value='S'>String</option>\
									<option value='N'>Number</option>\
									<option value='BOOL'>Boolean</option>\
									<option value='NULL'>Null</option>\
									<option value='B'>Binary</option>\
									<option value='SS'>StringSet</option>\
									<option value='NS'>NumberSet</option>\
									<option value='BS'>BinarySet</option>\
									<option value='L'>List</option>\
									<option value='M'>Map</option>\
								</select>\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
			<td>\
				<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
					<div class='trash-solid icon'></div>\
				</button>\
			</td>\
		</tr>\
	{{/if}}\
	",
	data: function() {
		return {
			type: null,
		}
	},
	on: {
		delete: function() {
			this.set({type: null,})
		},
		pickatype: function() {
			this.set({type: ''})
		},
		typepicked: function() {
			this.parent.prepend_attribute( this.get('type'), this.get('index'))
			this.set({type: null})
		}
	},
})

var L = Ractive.extend({
	components: {
		S: S,
		N: N,
		BOOL: BOOL,
		NULL: NULL,
		B: B,
		SS: SS,
		NS: NS,
		BS: BS,

		//L: L,
		M: M_0,

		appender: L_appender,
	},

	onconfig: function(options) {
		this.components['L'] = L;
		//this.components['M'] = M;
	},

	template: "\
\
	<tr class=' jsoneditor-expandable'>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-dragarea'></button>\
		</td>\
		<td>\
			<button type='button' class='jsoneditor-button jsoneditor-contextmenu'></button>\
		</td>\
		<td>\
			<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ level * 24 }}px;'>\
				<tbody>\
					<tr>\
						<td class='jsoneditor-tree'>\
							<button type='button' class='jsoneditor-button {{#if open}}jsoneditor-expanded{{else}}jsoneditor-collapsed{{/if}}' on-click='@this.toggle('open')'></button>\
						</td>\
						<td class='jsoneditor-tree'>\
							<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>{{key}}</div>\
						</td>\
						<td class='jsoneditor-datatype'>List[{{ value.length }}]</td>\
						<td class='jsoneditor-tree'></td>\
						<td class='jsoneditor-tree'>\
							<div class='jsoneditor-value jsoneditor-array'></div>\
						</td>\
					</tr>\
				</tbody>\
			</table>\
		</td>\
		<td>\
			<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
				<div class='trash-solid icon'></div>\
			</button>\
		</td>\
	</tr>\
\
	{{#if open}}\
		<appender level={{level}} index={{null}}/>\
	{{#value}}\
		{{#if .hasOwnProperty('S')}}\
			<S key={{@index}} value={{ .S }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('N')}}\
			<N key={{@index}} value={{ .N }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('BOOL')}}\
			<BOOL key={{@index}} value={{ .BOOL }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('NULL')}}\
			<NULL key={{@index}} level='1' level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('B')}}\
			<B key={{@index}} value={{ .B }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('L')}}\
			<L key={{@index}} value={{ .L }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('M')}}\
			<M key={{@index}} value={{ .M }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('SS')}}\
			<SS key={{@index}} value={{ .SS }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('NS')}}\
			<NS key={{@index}} value={{ .NS }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		{{#if .hasOwnProperty('BS')}}\
			<BS key={{@index}} value={{ .BS }} level='{{ level + 1 }}' />\
		{{/if}}\
\
		<appender level={{level}} index={{@index}}/>\
		\
	{{/value}}\
	{{/if}}\
\
	<tr class='jsoneditor-append'></tr>\
\
	",
	delete_key: function( key ) {
		var value = this.get('value')
		value = value.filter(function(v,idx,arr) { return idx !== key })
		this.set({value:value})
	},
	data: function() {
		return {
			open: false,
		}
	},
	prepend_attribute: function( type, idx ) {

		var value = this.get('value')

		var to_add;

		if (type === "S")
			to_add = {S: ""}

		if (type === "N")
			to_add = {N: ""}

		if (type === "BOOL")
			to_add = {BOOL: ""}

		if (type === "NULL")
			to_add = {NULL: "true"}

		if (type === "B")
			to_add = {B: Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) }

		if (type === "SS")
			to_add = {SS: []}

		if (type === "NS")
			to_add = {NS: []}

		if (type === "BS")
			to_add = {BS: []}

		if (type === "L")
			to_add = {L: []}

		if (type === "M")
			to_add = {M: {}}


		if (idx === null) {
			value = [to_add].concat(value)
		} else {
			value.splice( idx+1, 0, to_add )
		}


		this.set({value:value})
	},
	on: {
		delete: function() {
			this.parent.delete_key( this.get('key') )
		}
	}
})
/* harmony default export */ var L_0 = (L);

// CONCATENATED MODULE: ./M_appender.js

/* harmony default export */ var M_appender = (Ractive.extend({
	template: "\
	{{#if type === null}}\
	<tr class='jsoneditor-appender'>\
		<td></td><td></td><td>\
				<div style='margin-left: {{ 24 * level + 40 }}px;' on-click='pickatype'></div>\
		</td><td></td>\
	</tr>\
	{{/if}}\
	\
	{{#if type !== null }}\
		<tr>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-dragarea' ></button>\
			</td>\
			<td>\
				<button type='button' class='jsoneditor-button jsoneditor-contextmenu' ></button>\
			</td>\
			<td>\
				<table class='jsoneditor-values' style='border-collapse: collapse; margin-left: {{ (level+1) * 24 }}px;'>\
					<tbody>\
						<tr>\
							<td class='jsoneditor-tree'>\
								<button type='button' class='jsoneditor-button jsoneditor-invisible' ></button>\
							</td>\
							<td class='jsoneditor-tree'>\
								<div contenteditable='false' spellcheck='false' class='jsoneditor-field'>\
									<input value={{field_name}} placeholder='Attribute Name' />\
								</div>\
							</td>\
							<td class='jsoneditor-separator'>:</td>\
							<td class='jsoneditor-tree' style='width: 100%;'>\
								<select value={{type}} on-change='typepicked'>\
									<option value='S'>String</option>\
									<option value='N'>Number</option>\
									<option value='BOOL'>Boolean</option>\
									<option value='NULL'>Null</option>\
									<option value='B'>Binary</option>\
									<option value='SS'>StringSet</option>\
									<option value='NS'>NumberSet</option>\
									<option value='BS'>BinarySet</option>\
									<option value='L'>List</option>\
									<option value='M'>Map</option>\
								</select>\
							</td>\
						</tr>\
					</tbody>\
				</table>\
			</td>\
			<td>\
				<button class='jsoneditor-button btn-delete-attribute' on-click='delete' >\
					<div class='trash-solid icon'></div>\
				</button>\
			</td>\
		</tr>\
	{{/if}}\
	",
	data: function() {
		return {
			type: null,
			field_name: '',
		}
	},
	on: {
		delete: function() {
			this.set({type: null,})
		},
		pickatype: function() {
			this.set({type: ''})
		},
		typepicked: function() {
			this.parent.prepend_attribute( this.get('type'), this.get('index'), this.get('field_name'))
			this.set({type: null})
		}
	},
}));

// CONCATENATED MODULE: ./dynamodb-json-editor.ractive.html












// the nested ones





/* harmony default export */ var dynamodb_json_editor_ractive = __webpack_exports__["default"] = (external_commonjs_ractive_commonjs2_ractive_amd_ractive_root_Ractive_default.a.extend({
	template: {v:4,t:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor",g:1},{n:"style",f:[{t:2,r:"style"}],t:13}],f:[{t:7,e:"div",m:[{n:"class",f:["jsoneditor-menu ",{t:2,rx:{r:".",m:[{r:[],s:"\"menu-class\""}]}}],t:13},{n:"style",f:[{t:2,rx:{r:".",m:[{r:[],s:"\"menu-style\""}]}}],t:13}],f:[{t:7,e:"select",m:[{n:"value",f:[{t:2,r:"mode"}],t:13},{n:"style",f:"height: 20px;margin: 6px;",t:13}],f:[{t:7,e:"option",m:[{n:"value",f:"tree",t:13}],f:["Tree"]}," ",{t:7,e:"option",m:[{n:"value",f:"code",t:13}],f:["Code"]}]}]}," ",{t:4,f:[{t:7,e:"div",m:[{n:"class",f:["jsoneditor-navbar ",{t:2,x:{r:["navbar","class"],s:"_0-_1"}}],t:13},{n:"style",f:[{t:2,rx:{r:".",m:[{r:[],s:"\"navbar-style\""}]}}],t:13}]}],n:50,x:{r:["mode","navigationBar"],s:"(_0===\"tree\")&&(_1===true)"}}," ",{t:7,e:"div",m:[{n:"class",f:["jsoneditor-outer has-main-menu-bar ",{t:4,f:["has-nav-bar"],n:50,x:{r:["mode","navigationBar"],s:"(_0===\"tree\")&&(_1===true)"}}],t:13}],f:[{t:4,f:[{t:7,e:"textarea",m:[{n:"style",f:"width: 100%;height: 100%;border: 0px;margin: 0px;padding: 0px;",t:13}],f:[{t:2,x:{r:["item"],s:"JSON.stringify(_0,null,\"\\t\")"}}]}],n:50,x:{r:["mode"],s:"_0===\"code\""}},{t:4,f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-tree-inner",g:1}],f:[{t:7,e:"table",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1},{n:"border",f:"0",t:13,g:1}],f:[{t:7,e:"colgroup",f:[{t:7,e:"col",m:[{n:"width",f:"24px",t:13,g:1}]},{t:7,e:"col",m:[{n:"width",f:"24px",t:13,g:1}]},{t:7,e:"col"}]}," ",{t:7,e:"tbody",f:[{t:7,e:"tr",m:[{t:13,n:"class",f:" jsoneditor-expandable",g:1}],f:[{t:7,e:"td"}," ",{t:7,e:"td",f:[{t:7,e:"button",m:[{t:13,n:"class",f:"jsoneditor-button jsoneditor-contextmenu",g:1},{n:"type",f:"button",t:13,g:1}]}]}," ",{t:7,e:"td",f:[{t:7,e:"table",m:[{t:13,n:"style",f:"border-collapse: collapse; margin-left: 0px;",g:1},{t:13,n:"class",f:"jsoneditor-values",g:1}],f:[{t:7,e:"tbody",f:[{t:7,e:"tr",f:[{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"button",m:[{n:"type",f:"button",t:13,g:1},{n:"class",f:["jsoneditor-button ",{t:4,f:["jsoneditor-expanded"],n:50,r:"open"},{t:4,f:["jsoneditor-collapsed"],n:51,l:1}],t:13},{n:["click"],t:70,f:{r:["@this"],s:"[_0.toggle(\"open\")]"}}]}]}," ",{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-readonly",g:1},{n:"contenteditable",f:"false",t:13}],f:["Item"]}]}," ",{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}]}," ",{t:7,e:"td",m:[{t:13,n:"class",f:"jsoneditor-tree",g:1}],f:[{t:7,e:"div",m:[{t:13,n:"class",f:"jsoneditor-value jsoneditor-object",g:1}],f:["{ ",{t:2,x:{r:["item"],s:"Object.keys(_0).length"}}," }"]}]}]}]}]}]}," ",{t:7,e:"td",f:[]}]}," ",{t:4,f:[{t:7,e:"appender",m:[{n:"level",f:[{t:2,x:{r:[],s:"0"}}],t:13},{n:"index",f:[{t:2,x:{r:[],s:"null"}}],t:13}]}," ",{t:4,f:[{t:4,f:[{t:7,e:"S",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".S"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"S\")"}}," ",{t:4,f:[{t:7,e:"N",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".N"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"N\")"}}," ",{t:4,f:[{t:7,e:"BOOL",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".BOOL"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"BOOL\")"}}," ",{t:4,f:[{t:7,e:"NULL",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"level",f:"1",t:13,g:1},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"NULL\")"}}," ",{t:4,f:[{t:7,e:"B",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".B"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"B\")"}}," ",{t:4,f:[{t:7,e:"L",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".L"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"L\")"}}," ",{t:4,f:[{t:7,e:"M",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".M"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"M\")"}}," ",{t:4,f:[{t:7,e:"SS",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".SS"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"SS\")"}}," ",{t:4,f:[{t:7,e:"NS",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".NS"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"NS\")"}}," ",{t:4,f:[{t:7,e:"BS",m:[{n:"key",f:[{t:2,r:"@key"}],t:13},{n:"value",f:[{t:2,r:".BS"}],t:13},{n:"level",f:"1",t:13,g:1}]}],n:50,x:{r:["."],s:"_0.hasOwnProperty(\"BS\")"}}," ",{t:7,e:"appender",m:[{n:"level",f:[{t:2,x:{r:[],s:"0"}}],t:13},{n:"index",f:[{t:2,r:"@key"}],t:13}]}],n:52,r:"item"}],n:50,r:"open"}]}]}]}]}],n:51,l:1}]}]}],e:{"0":function (){return(0);},"\"menu-class\"":function (){return("menu-class");},"\"menu-style\"":function (){return("menu-style");},"_0-_1":function (_0,_1){return(_0-_1);},"\"navbar-style\"":function (){return("navbar-style");},"(_0===\"tree\")&&(_1===true)":function (_0,_1){return((_0==="tree")&&(_1===true));},"JSON.stringify(_0,null,\"\\t\")":function (_0){return(JSON.stringify(_0,null,"\t"));},"_0===\"code\"":function (_0){return(_0==="code");},"[_0.toggle(\"open\")]":function (_0){return([_0.toggle("open")]);},"Object.keys(_0).length":function (_0){return(Object.keys(_0).length);},"null":function (){return(null);},"_0.hasOwnProperty(\"S\")":function (_0){return(_0.hasOwnProperty("S"));},"_0.hasOwnProperty(\"N\")":function (_0){return(_0.hasOwnProperty("N"));},"_0.hasOwnProperty(\"BOOL\")":function (_0){return(_0.hasOwnProperty("BOOL"));},"_0.hasOwnProperty(\"NULL\")":function (_0){return(_0.hasOwnProperty("NULL"));},"_0.hasOwnProperty(\"B\")":function (_0){return(_0.hasOwnProperty("B"));},"_0.hasOwnProperty(\"L\")":function (_0){return(_0.hasOwnProperty("L"));},"_0.hasOwnProperty(\"M\")":function (_0){return(_0.hasOwnProperty("M"));},"_0.hasOwnProperty(\"SS\")":function (_0){return(_0.hasOwnProperty("SS"));},"_0.hasOwnProperty(\"NS\")":function (_0){return(_0.hasOwnProperty("NS"));},"_0.hasOwnProperty(\"BS\")":function (_0){return(_0.hasOwnProperty("BS"));}}},
	components: {
		S: S,
		N: N,
		BOOL: BOOL,
		NULL: NULL,
		B: B,
		SS: SS,
		NS: NS,
		BS: BS,

		// the nexted ones
		L: L_0,
		M: M_0,

		appender: M_appender,
	},
	css: ".jsoneditor { display: 'inline-block'; color: #1a1a1a; border: thin solid #f4a460; box-sizing: border-box; width: 100%; height: 100%; position: relative; padding: 0; line-height: 100%; width: 534px; background-color: #fff; } .jsoneditor-menu { width: 100%; height: 35px; padding: 2px; margin: 0; box-sizing: border-box; color: #fff; border-bottom: 1px solid #3883fa; background-color: #f4a460; border-color: #f4a460; } .jsoneditor-navbar { width: 100%; height: 26px; line-height: 26px; padding: 0; margin: 0; box-sizing: border-box; color: grey; overflow: hidden; font-family: arial,sans-serif; font-size: 10pt; border-bottom: 1px solid #d3d3d3; background-color: #ebebeb; } .jsoneditor-outer { overflow: auto; position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; box-sizing: border-box; } .jsoneditor-outer.has-main-menu-bar { top: 35px; } .jsoneditor-outer.has-main-menu-bar.has-nav-bar { top: 61px; } .jsoneditor table { border-collapse: collapse; width: auto; } div.jsoneditor-tree table.jsoneditor-tree { border-collapse: collapse; border-spacing: 0; width: 100%; } div.jsoneditor td, div.jsoneditor th, div.jsoneditor tr { padding: 0;margin: 0; } div.jsoneditor tr:hover {background-color: #f0f0f0;} div.jsoneditor tr.jsoneditor-appender {} div.jsoneditor tr.jsoneditor-appender > td:nth-child(3) {position: relative;height: 4px;} div.jsoneditor tr.jsoneditor-appender > td:nth-child(3) > div {cursor: row-resize;} div.jsoneditor tr.jsoneditor-appender > td:nth-child(4) {width: 32px;} div.jsoneditor tr.jsoneditor-appender:hover {background-color: transparent;} div.jsoneditor tr.jsoneditor-appender:hover > td:nth-child(3) {} div.jsoneditor tr.jsoneditor-appender:hover > td:nth-child(3) > div {height: 4px;background-color: #000099} .jsoneditor-popover, .jsoneditor-schema-error, div.jsoneditor td, div.jsoneditor textarea, div.jsoneditor th, div.jsoneditor-field, div.jsoneditor-value, pre.jsoneditor-preview { font-family: \"dejavu sans mono\",\"droid sans mono\",consolas,monaco,\"lucida console\",\"courier new\",courier,monospace,sans-serif; font-size: 10pt; color: #1a1a1a; } div.jsoneditor-default, div.jsoneditor-field, div.jsoneditor-readonly, div.jsoneditor-value { border: 1px solid transparent; min-height: 16px; min-width: 32px; padding: 2px; margin: 1px; word-wrap: break-word; float: left; } div.jsoneditor td { vertical-align: top; } .jsoneditor td, .jsoneditor th { padding: 0; display: table-cell; text-align: left; vertical-align: inherit; border-radius: inherit; } div.jsoneditor-tree button.jsoneditor-contextmenu { background-position: -48px -72px; } /* buttons */ div.jsoneditor-tree button.jsoneditor-button { width: 24px; height: 24px; padding: 0; margin: 0; border: none; cursor: pointer; background-color: transparent; outline: none; } div.jsoneditor-tree button.jsoneditor-invisible { visibility: hidden; } div.jsoneditor-tree button.jsoneditor-expanded { background-color: '#4499ff'; position: relative; outline: none; } div.jsoneditor-tree button.jsoneditor-expanded:after { content: ' '; position: absolute; top: 9px; left: 9px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #000; } div.jsoneditor-tree button.jsoneditor-collapsed { background-color: '#4499ff'; position: relative; outline: none; } div.jsoneditor-tree button.jsoneditor-collapsed:after { content: ' '; position: absolute; top: 9px; left: 9px; width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid #000; } div.jsoneditor td.jsoneditor-tree { vertical-align: top; } div.jsoneditor td.jsoneditor-separator { padding: 3px 0; vertical-align: top; color: grey; } div.jsoneditor td.jsoneditor-separator { padding: 3px 0; vertical-align: top; color: grey; } div.jsoneditor td.jsoneditor-datatype { padding: 3px 0; vertical-align: top; color: grey; } .jsoneditor-contextmenu { position: absolute; box-sizing: content-box; z-index: 99; } div.jsoneditor-value.jsoneditor-string { color: #006000; } input.jsoneditor-input.jsoneditor-string { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #006000; } input.jsoneditor-input.jsoneditor-string:focus { background-color: #bcffa0; } textarea.jsoneditor-input.jsoneditor-string { border: 0px;padding: 0px;margin: 0px;outline: none;color: #006000; width:100%; box-sizing:border-box; display:block; max-width:100%; font:13px Tahoma, cursive; } textarea.jsoneditor-input.jsoneditor-string:focus { background-color: #bcffa0; } div.jsoneditor-value.jsoneditor-number { color: #ee422e; } input.jsoneditor-input.jsoneditor-number { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #ee422e; } input.jsoneditor-input.jsoneditor-number:focus { background-color: #bcffa0; } div.jsoneditor-value.jsoneditor-boolean { color: #ff8c00; } input.jsoneditor-input.jsoneditor-boolean { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #ff8c00; } input.jsoneditor-input.jsoneditor-boolean:focus { background-color: #bcffa0; } input.jsoneditor-input.jsoneditor-boolean.error { background-color: red !important; } div.jsoneditor-value.jsoneditor-binary { color: #004ed0; } input.jsoneditor-input.jsoneditor-binary { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #004ed0; } input.jsoneditor-input.jsoneditor-binary:focus { background-color: #bcffa0; } div.jsoneditor-value.jsoneditor-null { color: #004ed0; } input.jsoneditor-input.jsoneditor-null { border: 0px;padding: 0px;margin: 0px;font-size: 14px;vertical-align: sub;outline: none;color: #004ed0; } input.jsoneditor-input.jsoneditor-null:focus { background-color: #bcffa0; } /* icons and btns */ .btn-delete-attribute {display: none;} tr:hover .btn-delete-attribute {display: inline-block;} .trash-solid.icon { color: #aaa; position: absolute; margin-left: 5px; margin-top: 0px; width: 8px; height: 8px; border-left: solid 1px currentColor; border-right: solid 1px currentColor; border-bottom: solid 1px currentColor; border-radius: 0 0 2px 2px; background-color: currentColor; } .trash-solid.icon:hover {color: #999;} .trash-solid.icon:before { content: ''; position: absolute; left: -4px; top: -2px; width: 17px; height: 1px; background-color: currentColor; } .trash-solid.icon:after { content: ''; position: absolute; left: 0px; top: -5px; width: 7px; height: 2px; border-left: solid 1px currentColor; border-right: solid 1px currentColor; border-top: solid 1px currentColor; background-color: currentColor; border-radius: 4px 4px 0 0; } ",
	data: function() {
		return {
			open: true,
			mode: 'tree', // tree | view | form | code | text | preview
			mainMenuBar: true,
			navigationBar: true,
			statusBar: true,
		}
	},
	prepend_attribute: function( type, idx, field_name ) {
		console.log('prepend', type, idx, field_name )

		var value = this.get('item')

		var to_add;

		if (type === "S")
			to_add = {S: ""}

		if (type === "N")
			to_add = {N: ""}

		if (type === "BOOL")
			to_add = {BOOL: ""}

		if (type === "NULL")
			to_add = {NULL: "true"}

		if (type === "B")
			to_add = {B: Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) }

		if (type === "SS")
			to_add = {SS: []}

		if (type === "NS")
			to_add = {NS: []}

		if (type === "BS")
			to_add = {BS: []}

		if (type === "L")
			to_add = {L: []}

		if (type === "M")
			to_add = {M: {}}

		var newmap = {}

		if (idx === null) {
			newmap[field_name] = to_add
			Object.keys(value).map(function(k) {
				newmap[k] = value[k];
			})
		} else {
			Object.keys(value).map(function(k) {
				newmap[k] = value[k];
				if (k === idx)
					newmap[field_name] = to_add
			})
		}

		this.set({item: {}})
		this.set({item:newmap})


	},
	delegate: false,
	elToFocus: null,
	delete_key: function( key ) {
		var item = this.get('item')
		delete item[key]
		this.set({item:item})
	},
	on: {

	},
}));

/***/ })
/******/ ])["default"];
});