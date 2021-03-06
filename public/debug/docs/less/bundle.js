webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(311);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */,
/* 4 */
56,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  guid: __webpack_require__(125),
	  classSet: __webpack_require__(123),
	  joinClasses: __webpack_require__(126),
	  KeyCode: __webpack_require__(121),
	  PureRenderMixin: __webpack_require__(122),
	  shallowEqual: __webpack_require__(47),
	  createChainedFunction: __webpack_require__(124),
	  Dom: {
	    addEventListener: __webpack_require__(119),
	    contains: __webpack_require__(120)
	  },
	  Children: {
	    toArray: __webpack_require__(118),
	    mapSelf: __webpack_require__(117)
	  }
	};


/***/ },
/* 6 */,
/* 7 */
153,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function deprecate(fn, message) {
	  return function () {
	    _warning2['default'](false, '[history] ' + message);
	    return fn.apply(this, arguments);
	  };
	}
	
	exports['default'] = deprecate;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = mixin;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	/**
	 * The simple mixin helper for ES6 class extends mixins(mixna, minxb)
	 * @param  {...Object} mixins
	 * @return {React.Component}
	 */
	
	function mixin() {
	  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	    mixins[_key] = arguments[_key];
	  }
	
	  return _react2['default'].createClass({
	    mixins: [].concat(mixins),
	
	    // So that React doesn't complain :)
	    render: function render() {
	      return null;
	    }
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;
	
	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}
	
	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}
	
	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}
	
	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}
	
	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}
	
	function go(n) {
	  if (n) window.history.go(n);
	}
	
	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */
	
	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	
	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 14 */
258,
/* 15 */
52,
/* 16 */
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);
	
		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}
	
		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};


/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _environment = __webpack_require__(25);
	
	var bind = _environment.canUseEventListeners && window.addEventListener ? 'addEventListener' : 'attachEvent';
	var unbind = _environment.canUseEventListeners && window.removeEventListener ? 'removeEventListener' : 'detachEvent';
	var canEventHasCapture = bind === 'addEventListener';
	var prefix = bind !== 'addEventListener' ? 'on' : '';
	
	var Events = {
	
	  /**
	   * Bind to DOM events during the bubble phase.
	   *
	   * @param  {DOMEventTarget} target DOM element to register listener on.
	   * @param  {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param  {function} callback Callback function.
	   * @param  {Boolean} is event capture phase.
	   * @return {object} Object with a `remove` method.
	   */
	  on: function on(target, eventType, eventListener, capture) {
	    if (!_environment.canUseEventListeners) return;
	    if (capture === true && !canEventHasCapture) {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        off: function noop() {}
	      };
	    }
	
	    target[bind](prefix + eventType, eventListener, capture || false);
	    return {
	      off: function off() {
	        target[unbind](prefix + eventType, eventListener, capture || false);
	      }
	    };
	  },
	
	  /**
	   * Unbind to DOM events during the bubble phase.
	   *
	   * @param  {DOMEventTarget} target DOM element to register listener on.
	   * @param  {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param  {function} callback Callback function.
	   * @param  {Boolean} is event capture phase.
	   * @return {Function}
	   */
	  off: function off(target, eventType, eventListener, capture) {
	    if (!_environment.canUseEventListeners) return;
	    target[unbind](prefix + eventType, eventListener, capture || false);
	    return eventListener;
	  },
	
	  one: function one(node, eventNames, eventListener) {
	    if (!_environment.canUseEventListeners) return;
	    var typeArray = eventNames.split(' ');
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return eventListener(e);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      Events.on(node, typeArray[i], recursiveFunction);
	    }
	  },
	
	  getEvent: function getEvent(event) {
	    return event || window.event;
	  },
	
	  getTarget: function getTarget(event) {
	    event = Events.getEvent(event);
	    return event.target || event.srcElement;
	  },
	
	  preventDefault: function preventDefault(event) {
	    event = Events.getEvent(event);
	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	  },
	
	  stopPropagation: function stopPropagation(event) {
	    event = Events.getEvent(event);
	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	  },
	
	  getCharCode: function getCharCode(event) {
	    event = Events.getEvent(event);
	    if (typeof event.charCode == 'number') {
	      return event.charCode;
	    } else {
	      return event.keyCode;
	    }
	  },
	
	  //simple abstraction for dragging events names
	  eventsFor: {
	    mouse: {
	      start: 'mousedown',
	      move: 'mousemove',
	      end: 'mouseup'
	    },
	    touch: {
	      start: 'touchstart',
	      move: 'touchmove',
	      end: 'touchend'
	    }
	  },
	
	  // Default to mouse events
	  dragEventFor: function dragEventFor(isTouchDevice) {
	    return isTouchDevice ? Events.eventsFor.touch : Events.eventsFor.mouse;
	  }
	
	};
	
	exports['default'] = Events;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(79);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var nsPrefix = _constants2['default'].NAMESPACE ? _constants2['default'].NAMESPACE + '-' : '';
	
	var ClassNameMixin = {
	
	  getClassSet: function getClassSet(ignorePrefix) {
	
	    var classNames = {};
	    // uses `.am-` as prefix if `classPrefix` is not defined
	    var prefix = nsPrefix;
	
	    if (this.props.classPrefix) {
	
	      var classPrefix = this.setClassNamespace();
	
	      prefix = classPrefix + '-';
	
	      // don't return prefix if flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }
	
	    // style, theme, size.
	    var _props = this.props;
	    var iSize = _props.iSize;
	    var iStyle = _props.iStyle;
	    var iTheme = _props.iTheme;
	
	    if (iSize) {
	      classNames[prefix + iSize] = true;
	    }
	
	    if (iStyle) {
	      classNames[prefix + iStyle] = true;
	    }
	
	    // add theme className for widgets
	    if (iTheme) {
	      classNames[prefix + iTheme] = true;
	    }
	
	    // states
	    classNames[_constants2['default'].CLASSES.active] = !this.props.disabled && this.props.active;
	    classNames[_constants2['default'].CLASSES.disabled] = this.props.disabled;
	
	    // shape
	    classNames[_constants2['default'].CLASSES.radius] = this.props.radius;
	    classNames[_constants2['default'].CLASSES.round] = this.props.round;
	
	    // clearfix
	    classNames[_constants2['default'].CLASSES.cf] = this.props.cf;
	
	    // divider
	    if (this.props.classPrefix !== 'divider') {
	      classNames[_constants2['default'].CLASSES.divider] = this.props.divider;
	    }
	
	    return classNames;
	  },
	  // add namespace to classPrefix
	  setClassNamespace: function setClassNamespace(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';
	    // the root prefix class usually used to parent component.
	    var rootPrefix = this.props.classRootPrefix || '';
	    if (rootPrefix) {
	      return nsPrefix + rootPrefix + '-' + prefix;
	    }
	    return nsPrefix + prefix;
	  },
	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNamespace() + '-' + subClass;
	  }
	};
	
	exports['default'] = ClassNameMixin;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var toString = Object.prototype.toString;
	var hasOwnProperty = hasOwnProperty;
	var nativeIsArray = Array.isArray;
	
	// extract some undercore utilities here.
	var _ = {
	  isArray: nativeIsArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	  },
	  isUndefined: function isUndefined(obj) {
	    return obj === void 0;
	  },
	  now: Date.now || function () {
	    return new Date().getTime();
	  },
	  isObject: function isObject(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  }
	};
	
	// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'].forEach(function (name) {
	  _['is' + name] = function (obj) {
	    return toString.call(obj) === '[object ' + name + ']';
	  };
	});
	
	// attach react related helper methods.
	Object.assign(_, {
	  // empty function.
	  noop: function noop() {},
	
	  // simple check property has existed.
	  has: function has(o, k) {
	    return o ? hasOwnProperty.call(o, k) : false;
	  }
	});
	
	exports['default'] = _;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(105);

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var SEARCH_DOCS = 'SEARCH_DOCS';
	exports.SEARCH_DOCS = SEARCH_DOCS;
	var SHOW_DOC_DETAIL = 'SHOW_DOC_DETAIL';
	exports.SHOW_DOC_DETAIL = SHOW_DOC_DETAIL;
	var LOAD_DOC_CATALOGS = 'LOAD_DOC_CATALOGS';
	exports.LOAD_DOC_CATALOGS = LOAD_DOC_CATALOGS;

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * The helper for check if we can use DOM,
	 * we can also used to check if current is Node Environment.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	var Environment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen
	
	};
	
	exports['default'] = Environment;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * The current browser platform information
	 * @return {Object} browser info
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var platform = function platform() {
	  // for server rendering.
	  if (typeof navigator === 'undefined') return {};
	  var ua = navigator.userAgent.toLowerCase();
	
	  var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
	
	  var matched = {
	    browser: match[1] || "",
	    version: match[2] || "0"
	  };
	  var browser = {};
	  if (matched.browser) {
	    browser[matched.browser] = true;
	    browser.version = matched.version;
	  }
	
	  // Chrome is Webkit, but Webkit is also Safari.
	  if (browser.chrome) {
	    browser.webkit = true;
	  } else if (browser.webkit) {
	    browser.safari = true;
	  }
	  return browser;
	};
	
	exports["default"] = platform();
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);
	
	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead');
	  }
	}
	
	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var now = Date.now();
	exports['default'] = {
	  noop: function noop() {},
	
	  getKeyFromChildrenIndex: function getKeyFromChildrenIndex(child, menuEventKey, index) {
	    var prefix = menuEventKey || '';
	    return child.key || prefix + 'item_' + now + '_' + index;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 29 */,
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Menu = __webpack_require__(109);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(112);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(110);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(111);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(108);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	_Menu2['default'].SubMenu = _SubMenu2['default'];
	_Menu2['default'].Item = _MenuItem2['default'];
	_Menu2['default'].ItemGroup = _MenuItemGroup2['default'];
	_Menu2['default'].Divider = _Divider2['default'];
	
	exports['default'] = _Menu2['default'];
	module.exports = exports['default'];

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsClassNameMixin = __webpack_require__(19);
	
	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);
	
	var Icon = (function (_mixin) {
	  _inherits(Icon, _mixin);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var classes = this.getClassSet(true);
	      var props = this.props;
	      var Component = props.href ? 'a' : props.componentTag;
	      var prefixClass = this.prefixClass;
	      var setClassNamespace = this.setClassNamespace;
	
	      //glyph-icon
	      classes['glyph-icon'] = true;
	
	      // glyph-[iconName]
	      classes[prefixClass(props.icon)] = true;
	
	      // glyph-btn
	      classes[prefixClass('btn')] = props.button;
	
	      // button style
	      props.button && props.iStyle && (classes[setClassNamespace(props.iStyle)] = true);
	
	      // glyph-fw
	      classes[prefixClass('fw')] = props.fw;
	
	      // glyph-spin
	      classes[prefixClass('spin')] = props.spin;
	
	      return _react2['default'].createElement(
	        Component,
	        _extends({}, props, {
	          className: (0, _classnames2['default'])(classes, this.props.className) }),
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      iStyle: _react2['default'].PropTypes.string,
	      iSize: _react2['default'].PropTypes.string,
	      fw: _react2['default'].PropTypes.bool,
	      spin: _react2['default'].PropTypes.bool,
	      button: _react2['default'].PropTypes.bool,
	      href: _react2['default'].PropTypes.string,
	      componentTag: _react2['default'].PropTypes.node.isRequired,
	      icon: _react2['default'].PropTypes.string.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      classPrefix: 'glyph',
	      componentTag: 'i'
	    },
	    enumerable: true
	  }]);
	
	  return Icon;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wurl = __webpack_require__(161);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _sharedReactUtilsLang = __webpack_require__(20);
	
	var _sharedReactUtilsLang2 = _interopRequireDefault(_sharedReactUtilsLang);
	
	var _sharedReactUtilsPath = __webpack_require__(59);
	
	var _sharedReactUtilsPath2 = _interopRequireDefault(_sharedReactUtilsPath);
	
	var _sharedReactUtilsString = __webpack_require__(60);
	
	var _sharedReactUtilsString2 = _interopRequireDefault(_sharedReactUtilsString);
	
	var URI = {
	  /**
	   * Get current base url http://example.com
	   * @param  {String} path  the url path '/workspace/list'
	   * @param  {Object} query parameters {root:''}
	   * @return {String}       the final path
	   */
	  getUrl: function getUrl(path, query) {
	    var port = (0, _wurl2['default'])('port'); // 443, 80.
	    var hostname = (0, _wurl2['default'])('hostname');
	    var protocol = (0, _wurl2['default'])('protocol');
	    var finalPath = _sharedReactUtilsString2['default'].stringFormat('{0}://{1}{2}{3}', protocol, hostname, port === 443 || port === 80 ? '' : ':' + port, _sharedReactUtilsPath2['default'].normalizePath(path));
	    if (_sharedReactUtilsLang2['default'].isObject(query)) {
	      var queryPath = [];
	      Object.keys(query).forEach(function (key) {
	        queryPath.push(key + '=' + query[key]);
	      });
	      return finalPath + '?' + queryPath.join('&').replace(/^&+/, '');
	    } else {
	      return finalPath;
	    }
	  },
	  /**
	   * get url path.
	   * @param  {String} path  the url path '/workspace/list'
	   * @param  {Object} query parameters {root:''}
	   * @return {String}       the final path
	   */
	  getYunRoot: function getYunRoot(path, query) {
	    return getUrl(path, query);
	  },
	
	  getWorkspaceRoot: function getWorkspaceRoot(path, query) {
	    return getYunRoot(_sharedReactUtilsPath2['default'].normalizePath('/workspace', path), query);
	  },
	
	  getDocumentRoot: function getDocumentRoot(path, query) {
	    return getYunRoot(_sharedReactUtilsPath2['default'].normalizePath('/document', path), query);
	  }
	};
	
	exports['default'] = URI;
	module.exports = exports['default'];

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	// default meta.
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var meta = {
	  title: 'The React, Less Docs',
	  description: 'show user documents for react ui components',
	  canonical: 'http://yingchun.com/docs',
	  meta: {
	    name: {
	      keywords: 'react ui, react components, react widgets, react component docs'
	    }
	  }
	};
	
	exports['default'] = meta;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsEvents = __webpack_require__(18);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var LayoutSplitter = (function (_React$Component) {
	  _inherits(LayoutSplitter, _React$Component);
	
	  _createClass(LayoutSplitter, null, [{
	    key: 'propTypes',
	    value: {
	      orientation: _react.PropTypes.string,
	      hideSelection: _react.PropTypes.func,
	      getPreviousLayout: _react.PropTypes.func,
	      getNextLayout: _react.PropTypes.func,
	      // You can only specify layoutHeight or layoutWidth at a single level
	      // In most case we need to s
	      layoutWidth: _react.PropTypes.number,
	      layoutHeight: _react.PropTypes.number
	    },
	    enumerable: true
	  }]);
	
	  function LayoutSplitter(props) {
	    var _this = this;
	
	    _classCallCheck(this, LayoutSplitter);
	
	    _get(Object.getPrototypeOf(LayoutSplitter.prototype), 'constructor', this).call(this, props);
	
	    this.onMouseDown = function (e) {
	      // Prevent 'ghost click' which happens 300ms after touchstart if the event isn't cancelled.
	      // We don't cancel the event on touchstart because of #37; we might want to make a scrollable item draggable.
	      // More on ghost clicks: http://ariatemplates.com/blog/2014/05/ghost-clicks-in-mobile-browsers/
	      if (_utilsEvents2['default'].dragEventFor === _utilsEvents2['default'].eventsFor.touch) {
	        return e.preventDefault();
	      }
	
	      return _this.handleDragStart(e);
	    };
	
	    this.handleDragStart = function (e) {
	      var _props = _this.props;
	      var orientation = _props.orientation;
	      var getPreviousLayout = _props.getPreviousLayout;
	      var getNextLayout = _props.getNextLayout;
	
	      var downPosition = orientation === 'horizontal' ? e.clientX : e.clientY;
	      var layoutProp = orientation === 'horizontal' ? 'layoutWidth' : 'layoutHeight';
	      var updateFunctionName = orientation === 'horizontal' ? 'setWidth' : 'setHeight';
	
	      var layout1 = getPreviousLayout();
	      var layout2 = getNextLayout();
	
	      if (layout1.props.layoutWidth === 'flex' && layout2.props.layoutWidth === 'flex' || layout1.props.layoutHeight === 'flex' && layout2.props.layoutHeight === 'flex') {
	        throw new Error('You cannot place a LayoutSplitter between two flex Layouts');
	      }
	
	      if (layout1 && layout2) {
	        _this.props.hideSelection();
	        var isLayout1Flex = layout1.props[layoutProp] === 'flex';
	        var isLayout2Flex = layout2.props[layoutProp] === 'flex';
	        var newPositionHandler = undefined;
	
	        if (isLayout1Flex && isLayout2Flex) {
	          throw new Error('Do not support resizing two flex Layouts');
	        } else if (isLayout1Flex || isLayout2Flex) {
	          (function () {
	
	            // Layout 1 has fixed size
	            var originalSize1 = layout1.state[layoutProp];
	
	            var originalSize2 = layout2.state[layoutProp];
	
	            newPositionHandler = function (currentPosition) {
	              var delta1 = currentPosition - downPosition;
	              var newSize1 = originalSize1 + delta1;
	              layout1[updateFunctionName](newSize1);
	
	              var delta2 = downPosition - currentPosition;
	              var newSize2 = originalSize2 + delta2;
	              layout2[updateFunctionName](newSize2);
	            };
	          })();
	        } else {
	          (function () {
	            // Both are fixed width
	            var originalSize1 = layout1.state[layoutProp];
	            var originalSize2 = layout2.state[layoutProp];
	            newPositionHandler = function (currentPosition) {
	              var delta = currentPosition - downPosition;
	              layout1[updateFunctionName](originalSize1 + delta);
	              layout2[updateFunctionName](originalSize2 - delta);
	            };
	          })();
	        }
	
	        // force render.
	        _this.setState({
	          active: true,
	          newPositionHandler: newPositionHandler
	        });
	      }
	
	      _utilsEvents2['default'].on(_this.document, 'mouseup', _this.handleDragEnd);
	      _utilsEvents2['default'].on(_this.document, 'mousemove', _this.handleDrag);
	    };
	
	    this.handleDragEnd = function (e) {
	      if (_this.state.active) {
	        _this.setState({ active: false });
	        _this.props.restoreSelection();
	      }
	    };
	
	    this.handleDrag = function (e) {
	      if (_this.state.active) {
	        var currentPosition = _this.props.orientation === 'horizontal' ? e.clientX : e.clientY;
	        _this.state.newPositionHandler(currentPosition);
	      }
	    };
	
	    this.document = props.document || document;
	
	    this.state = {
	      active: false
	    };
	  }
	
	  _createClass(LayoutSplitter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props2 = this.props;
	      var splitterSize = _props2.splitterSize;
	      var orientation = _props2.orientation;
	      var layoutWidth = _props2.layoutWidth;
	      var layoutHeight = _props2.layoutHeight;
	      var layoutChanged = _props2.layoutChanged;
	
	      // The weight of splitter.
	      var splitterWeight = 11;
	      if (orientation === 'horizontal') {
	        this.state.layoutWidth = layoutWidth || splitterWeight;
	        layoutChanged();
	      } else if (orientation === 'vertical') {
	        this.state.layoutHeight = layoutHeight || splitterWeight;
	        layoutChanged();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _utilsEvents2['default'].off(this.document, 'mouseup', this.handleDragEnd);
	      _utilsEvents2['default'].off(this.document, 'mousemove', this.handleDrag);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //let orientation = this.props.orientation;
	      var classes = ['layout-splitter', this.props.orientation];
	      var style = {
	        width: this.state.layoutWidth || this.props.containerWidth,
	        height: this.state.layoutHeight || this.props.containerHeight
	      };
	
	      return _react2['default'].createElement('div', { className: (0, _classnames2['default'])(classes), style: style,
	        onMouseDown: this.onMouseDown,
	        onMouseUp: this.handleDragEnd });
	    }
	  }]);
	
	  return LayoutSplitter;
	})(_react2['default'].Component);
	
	exports.LayoutSplitter = LayoutSplitter;
	exports['default'] = LayoutSplitter;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcMenu = __webpack_require__(30);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var _utilsPlatform = __webpack_require__(26);
	
	var _utilsPlatform2 = _interopRequireDefault(_utilsPlatform);
	
	var msie = _utilsPlatform2['default'].msie;
	var version = _utilsPlatform2['default'].version;
	
	var disableVelocityAnimation = msie && parseInt(version) < 9;
	
	var animation = undefined;
	if (true) {
	  __webpack_require__(89);
	  // ie9+
	  if (!disableVelocityAnimation) {
	    animation = __webpack_require__(77);
	  }
	}
	
	var Menu = (function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu() {
	    _classCallCheck(this, Menu);
	
	    _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Menu, [{
	    key: 'render',
	    value: function render() {
	      var openAnimation = '';
	      switch (this.props.mode) {
	        case 'horizontal':
	          openAnimation = 'slide-up';
	          break;
	        case 'vertical':
	          openAnimation = 'zoom-big';
	          break;
	        case 'inline':
	          openAnimation = animation;
	          if (disableVelocityAnimation) {
	            openAnimation = '';
	          }
	          break;
	        default:
	      }
	
	      if (this.props.mode === 'inline') {
	        if (disableVelocityAnimation) {
	          return _react2['default'].createElement(_rcMenu2['default'], _extends({}, this.props, { openTransitionName: openAnimation }));
	        } else {
	          return _react2['default'].createElement(_rcMenu2['default'], _extends({}, this.props, { openAnimation: openAnimation }));
	        }
	      } else {
	        return _react2['default'].createElement(_rcMenu2['default'], _extends({}, this.props, { openTransitionName: openAnimation }));
	      }
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      prefixCls: 'menu'
	    },
	    enumerable: true
	  }]);
	
	  return Menu;
	})(_react.Component);
	
	Menu.Divider = _rcMenu2['default'].Divider;
	Menu.Item = _rcMenu2['default'].Item;
	Menu.SubMenu = _rcMenu2['default'].SubMenu;
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _environment = __webpack_require__(25);
	
	function isWindow(obj) {
	  return obj != null && obj === obj.window;
	}
	
	function offset(elem) {
	  var box = { top: 0, left: 0 };
	  var doc = elem && elem.ownerDocument;
	  if (!doc) {
	    return;
	  }
	  var docElem = doc.documentElement;
	
	  // Support: BlackBerry 5, iOS 3 (original iPhone)
	  // If we don't have gBCR, just use 0,0 rather than error
	  if (typeof elem.getBoundingClientRect !== "undefined") {
	    box = elem.getBoundingClientRect();
	  }
	
	  function getWindow(elem) {
	    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	  };
	
	  var win = getWindow(doc);
	
	  return {
	    top: box.top + win.pageYOffset - docElem.clientTop,
	    left: box.left + win.pageXOffset - docElem.clientLeft
	  };
	}
	
	function getStyles(elem) {
	  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	  // IE throws on elements created in popups
	  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	  if (elem.ownerDocument.defaultView.opener) {
	    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
	  }
	
	  return window.getComputedStyle(elem, null);
	}
	
	function accessProperty(elem, propName) {
	  elem = elem || window;
	  // console.log("dom.accessProperty->", propName);
	  if (isWindow(elem)) {
	    // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	    // isn't a whole lot we can do. See pull request at this URL for discussion:
	    // https://github.com/jquery/jquery/pull/764
	    return elem.document.documentElement["client" + propName];
	  }
	
	  // Get document width or height
	  if (elem.nodeType === 9) {
	    var doc = elem.documentElement;
	
	    // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
	    // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
	    return Math.max(elem.body["scroll" + propName], doc["scroll" + propName], elem.body["offset" + propName], doc["offset" + propName], doc["client" + propName]);
	  }
	  // Get width or height on the element, requesting but not forcing parseFloat
	  return parseInt(getStyles(elem)[propName.toLowerCase()]) || 0;
	};
	/**
	 * The helper utilites for html dom operating..
	 */
	var dom = {
	  contains: function contains(root, node) {
	    while (node) {
	      if (node === root) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  },
	  getWidth: function getWidth(elem) {
	    return accessProperty(elem, "Width");
	  },
	  getHeight: function getHeight(elem) {
	    return accessProperty(elem, "Height");
	  },
	  offset: offset,
	  /**
	   * isInViewport
	   *
	   * @desc determine if any part of the element is visible in the viewport
	   * @reference https://github.com/Josh-Miller/isInViewport
	   * @param {HTMLElement} element
	   * @returns {boolean}
	   */
	
	  isInViewport: function isInViewport(element) {
	    if (!_environment.canUseDOM) {
	      return false;
	    }
	    var top = element.offsetTop;
	    var left = element.offsetLeft;
	    var width = element.offsetWidth;
	    var height = element.offsetHeight;
	
	    while (element.offsetParent) {
	      element = element.offsetParent;
	      top += element.offsetTop;
	      left += element.offsetLeft;
	    }
	
	    return top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
	  }
	};
	
	exports["default"] = dom;
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	/*eslint-disable no-empty */
	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';
	
	function createKey(key) {
	  return KeyPrefix + key;
	}
	
	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === QuotaExceededError || window.sessionStorage.length === 0) {
	      // Probably in Safari "private mode" where sessionStorage quota is 0. #42
	      _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode');
	
	      return;
	    }
	
	    throw error;
	  }
	}
	
	function readState(key) {
	  var json = window.sessionStorage.getItem(createKey(key));
	
	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }
	
	  return null;
	}

/***/ },
/* 40 */
[469, 15, 14, 13, 41],
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _deepEqual = __webpack_require__(99);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _AsyncUtils = __webpack_require__(90);
	
	var _Actions = __webpack_require__(7);
	
	var _runTransitionHook = __webpack_require__(27);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _deprecate = __webpack_require__(11);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}
	
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);
	
	  return string.substring(match[0].length);
	}
	
	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}
	
	var DefaultKeyLength = 6;
	
	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;
	
	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;
	
	  var transitionHooks = [];
	
	  function listenBefore(hook) {
	    transitionHooks.push(hook);
	
	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }
	
	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;
	
	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }
	
	  function updateLocation(newLocation) {
	    var current = getCurrent();
	
	    location = newLocation;
	
	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }
	
	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }
	
	  function listen(listener) {
	    changeListeners.push(listener);
	
	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }
	
	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }
	
	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }
	
	  var pendingLocation = undefined;
	
	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.
	
	    pendingLocation = nextLocation;
	
	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.
	
	      if (ok) {
	        finishTransition(nextLocation);
	        updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }
	
	  function pushState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
	  }
	
	  function replaceState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
	  }
	
	  function goBack() {
	    go(-1);
	  }
	
	  function goForward() {
	    go(1);
	  }
	
	  function createKey() {
	    return createRandomKey(keyLength);
	  }
	
	  function createPath(path) {
	    return path;
	  }
	
	  function createHref(path) {
	    return path;
	  }
	
	  function createLocation() {
	    var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	    var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];
	
	    var pathname = extractPath(path);
	    var search = '';
	    var hash = '';
	
	    var hashIndex = pathname.indexOf('#');
	    if (hashIndex !== -1) {
	      hash = pathname.substring(hashIndex);
	      pathname = pathname.substring(0, hashIndex);
	    }
	
	    var searchIndex = pathname.indexOf('?');
	    if (searchIndex !== -1) {
	      search = pathname.substring(searchIndex);
	      pathname = pathname.substring(0, searchIndex);
	    }
	
	    if (pathname === '') pathname = '/';
	
	    return {
	      pathname: pathname,
	      search: search,
	      hash: hash,
	      state: state,
	      action: action,
	      key: key
	    };
	  }
	
	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }
	
	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }
	
	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,
	
	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
	  };
	}
	
	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ExecutionEnvironment = __webpack_require__(14);
	
	var _DOMUtils = __webpack_require__(13);
	
	var _deprecate = __webpack_require__(11);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();
	
	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }
	
	  _DOMUtils.addEventListener(window, 'beforeunload', listener);
	
	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}
	
	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);
	
	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];
	
	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;
	
	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }
	
	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);
	
	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          _warning2['default'](false, 'listenBeforeUnload only works in DOM environments');
	        }
	      }
	
	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }
	
	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);
	
	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }
	
	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }
	
	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,
	
	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}
	
	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _qs = __webpack_require__(102);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _runTransitionHook = __webpack_require__(27);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	function defaultStringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}
	
	function defaultParseQueryString(queryString) {
	  return _qs2['default'].parse(queryString);
	}
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;
	
	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);
	
	    var history = createHistory(historyOptions);
	
	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
	
	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;
	
	    function addQuery(location) {
	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
	
	      return location;
	    }
	
	    function appendQuery(pathname, query) {
	      var queryString = undefined;
	      if (query && (queryString = stringifyQuery(query)) !== '') return pathname + (pathname.indexOf('?') === -1 ? '?' : '&') + queryString;
	
	      return pathname;
	    }
	
	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }
	
	    // Override all write methods with query-aware versions.
	    function pushState(state, pathname, query) {
	      return history.pushState(state, appendQuery(pathname, query));
	    }
	
	    function replaceState(state, pathname, query) {
	      return history.replaceState(state, appendQuery(pathname, query));
	    }
	
	    function createPath(pathname, query) {
	      return history.createPath(appendQuery(pathname, query));
	    }
	
	    function createHref(pathname, query) {
	      return history.createHref(appendQuery(pathname, query));
	    }
	
	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      pushState: pushState,
	      replaceState: replaceState,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	}
	
	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 44 */
260,
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(5);
	
	var _domScrollIntoView = __webpack_require__(84);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _objectAssign = __webpack_require__(16);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(28);
	
	function getActiveKey(props) {
	  var activeKey = props.activeKey;
	  var children = props.children;
	  var eventKey = props.eventKey;
	  if (activeKey) {
	    var found = undefined;
	    _react2['default'].Children.forEach(children, function (c, i) {
	      if (!c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    _react2['default'].Children.forEach(children, function (c, i) {
	      if (!activeKey && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(name, c) {
	  if (c) {
	    this.instanceArray.push(c);
	  }
	}
	
	var MenuMixin = {
	  propTypes: {
	    focusable: _react2['default'].PropTypes.bool,
	    multiple: _react2['default'].PropTypes.bool,
	    style: _react2['default'].PropTypes.object,
	    defaultActiveFirst: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    activeKey: _react2['default'].PropTypes.string,
	    selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultOpenKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-menu',
	      className: '',
	      mode: 'vertical',
	      level: 1,
	      inlineIndent: 24,
	      visible: true,
	      focusable: true,
	      style: {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      activeKey: getActiveKey(props)
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('activeKey' in nextProps) {
	      props.activeKey = getActiveKey(nextProps);
	    }
	    this.setState(props);
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.instanceArray = [];
	  },
	
	  // all keyboard events callbacks run from here at first
	  onKeyDown: function onKeyDown(e) {
	    var _this = this;
	
	    var keyCode = e.keyCode;
	    var handled = undefined;
	    this.instanceArray.forEach(function (obj) {
	      if (obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = undefined;
	    switch (keyCode) {
	      case _rcUtil.KeyCode.UP:
	        activeItem = this.step(-1);
	        break;
	      case _rcUtil.KeyCode.DOWN:
	        activeItem = this.step(1);
	        break;
	      default:
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        (0, _domScrollIntoView2['default'])(_react2['default'].findDOMNode(activeItem), _react2['default'].findDOMNode(_this), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    }
	  },
	
	  onCommonItemHover: function onCommonItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key;
	    var hover = e.hover;
	    var trigger = e.trigger;
	
	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty
	
	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.instanceArray.filter(function (c) {
	        return c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        this.onOpenChange({
	          item: activeItem,
	          key: activeItem.props.eventKey,
	          open: false
	        });
	      }
	    }
	  },
	
	  renderCommonMenuItem: function renderCommonMenuItem(child, i, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var newChildProps = (0, _objectAssign2['default'])({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      ref: (0, _rcUtil.createChainedFunction)(child.ref, saveRef.bind(this, key)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && key === state.activeKey,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2['default'].cloneElement(child, newChildProps);
	  },
	
	  renderRoot: function renderRoot(props) {
	    var _classes;
	
	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _rcUtil.classSet)(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return _react2['default'].createElement(
	      'ul',
	      _extends({ style: props.style,
	        'data-visible': props.visible
	      }, domProps),
	      _react2['default'].Children.map(props.children, this.renderMenuItem)
	    );
	  },
	
	  step: function step(direction) {
	    var children = this.instanceArray;
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  }
	};
	
	exports['default'] = MenuMixin;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */
	
	"use strict";
	
	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = shallowEqual;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDomServer = __webpack_require__(132);
	
	var _exenv = __webpack_require__(128);
	
	var _reactSideEffect = __webpack_require__(129);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _utils = __webpack_require__(127);
	
	function reducePropsTostate(propsList) {
	  var props = {};
	
	  var extend = true;
	
	  for (var i = propsList.length - 1; extend && i >= 0; i--) {
	    var _props = (0, _utils.clone)(propsList[i]);
	
	    if (_props.hasOwnProperty('description')) {
	      (0, _utils.defaults)(_props, { meta: { name: { description: _props.description } } });
	    }
	    if (_props.hasOwnProperty('canonical')) {
	      (0, _utils.defaults)(_props, { link: { rel: { canonical: _props.canonical } } });
	    }
	
	    (0, _utils.defaults)(props, _props);
	    extend = _props.hasOwnProperty('extend');
	  }
	
	  if (props.auto) {
	    autoProps(props);
	  }
	
	  return props;
	}
	
	function autoProps(props) {
	  if (props.auto.ograph === true) {
	    ograph(props);
	  }
	
	  return props;
	}
	
	function handleStateChangeOnClient(props) {
	  if (_exenv.canUseDOM) {
	    document.title = props.title || '';
	    insertDocumentMeta(props);
	  }
	}
	
	function ograph(p) {
	  if (!p.meta) {
	    p.meta = {};
	  }
	  if (!p.meta.property) {
	    p.meta.property = {};
	  }
	
	  var group = p.meta.property;
	  if (group) {
	    if (p.title && !group['og:title']) {
	      group['og:title'] = p.title;
	    }
	    if (p.hasOwnProperty('description') && !group['og:description']) {
	      group['og:description'] = p.description;
	    }
	    if (p.hasOwnProperty('canonical') && !group['og:url']) {
	      group['og:url'] = p.canonical;
	    }
	  }
	  return p;
	}
	
	function parseTags(tagName) {
	  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var tags = [];
	  var contentKey = tagName === 'link' ? 'href' : 'content';
	  Object.keys(props).forEach(function (groupKey) {
	    var group = props[groupKey];
	    if (typeof group === 'string') {
	      tags.push(_defineProperty({
	        tagName: tagName
	      }, groupKey, group));
	      return;
	    }
	    Object.keys(group).forEach(function (key) {
	      var values = Array.isArray(group[key]) ? group[key] : [group[key]];
	      values.forEach(function (value) {
	        var _tags$push2;
	
	        if (value === null) {
	          return;
	        }
	        tags.push((_tags$push2 = {
	          tagName: tagName
	        }, _defineProperty(_tags$push2, groupKey, key), _defineProperty(_tags$push2, contentKey, value), _tags$push2));
	      });
	    });
	  });
	  return tags;
	}
	
	function getTags(_props) {
	  return [].concat(parseTags('meta', _props.meta), parseTags('link', _props.link));
	}
	
	function removeNode(node) {
	  node.parentNode.removeChild(node);
	}
	
	function removeDocumentMeta() {
	  (0, _utils.forEach)(document.querySelectorAll('head [data-rdm]'), removeNode);
	}
	
	function insertDocumentMetaNode(entry) {
	  var tagName = entry.tagName;
	
	  var attr = _objectWithoutProperties(entry, ['tagName']);
	
	  var newNode = document.createElement(tagName);
	  for (var prop in attr) {
	    if (entry.hasOwnProperty(prop)) {
	      newNode.setAttribute(prop, entry[prop]);
	    }
	  }
	  newNode.setAttribute('data-rdm', '');
	  document.getElementsByTagName('head')[0].appendChild(newNode);
	}
	
	function insertDocumentMeta(props) {
	  removeDocumentMeta();
	
	  (0, _utils.forEach)(getTags(props), insertDocumentMetaNode);
	}
	
	function render(meta, opts) {
	  if (meta === undefined) meta = {};
	
	  if (typeof opts !== 'object') {
	    return meta;
	  }
	  var i = 0;
	  var tags = [];
	
	  function renderTag(entry) {
	    var tagName = entry.tagName;
	
	    var attr = _objectWithoutProperties(entry, ['tagName']);
	
	    if (tagName === 'meta') {
	      return _react2['default'].createElement('meta', _extends({}, attr, { key: i++, 'data-rdm': true }));
	    }
	    if (tagName === 'link') {
	      return _react2['default'].createElement('link', _extends({}, attr, { key: i++, 'data-rdm': true }));
	    }
	    return null;
	  }
	
	  if (meta.title) {
	    tags.push(_react2['default'].createElement(
	      'title',
	      { key: i++ },
	      meta.title
	    ));
	  }
	
	  getTags(meta).reduce(function (acc, entry) {
	    tags.push(renderTag(entry));
	    return tags;
	  }, tags);
	
	  if (opts.asReact) {
	    return tags;
	  }
	
	  return (0, _reactDomServer.renderToStaticMarkup)(_react2['default'].createElement(
	    'div',
	    null,
	    tags
	  )).replace(/(^<div>|<\/div>$)/g, '');
	}
	
	var DocumentMeta = _react2['default'].createClass({
	  displayName: 'DocumentMeta',
	
	  propTypes: {
	    title: _react2['default'].PropTypes.string,
	    description: _react2['default'].PropTypes.string,
	    canonical: _react2['default'].PropTypes.string,
	    meta: _react2['default'].PropTypes.objectOf(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.objectOf(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)]))])),
	    link: _react2['default'].PropTypes.objectOf(_react2['default'].PropTypes.objectOf(_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string)]))),
	    auto: _react2['default'].PropTypes.objectOf(_react2['default'].PropTypes.bool)
	  },
	
	  render: function render() {
	    return this.props.children ? _react2['default'].Children.only(this.props.children) : null;
	  }
	});
	
	var DocumentMetaWithSideEffect = (0, _reactSideEffect2['default'])(reducePropsTostate, handleStateChangeOnClient)(DocumentMeta);
	
	DocumentMetaWithSideEffect.renderAsReact = function rewindAsReact() {
	  return render(DocumentMetaWithSideEffect.rewind(), { asReact: true });
	};
	
	DocumentMetaWithSideEffect.renderAsHTML = function rewindAsHTML() {
	  return render(DocumentMetaWithSideEffect.rewind(), { asHtml: true });
	};
	
	exports['default'] = DocumentMetaWithSideEffect;
	module.exports = exports['default'];


/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(17);
	
	var _RouteLink = __webpack_require__(65);
	
	var _RouteLink2 = _interopRequireDefault(_RouteLink);
	
	var _ThemeSelector = __webpack_require__(66);
	
	var _ThemeSelector2 = _interopRequireDefault(_ThemeSelector);
	
	var Header = (function (_Component) {
	  _inherits(Header, _Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	
	      return _react2['default'].createElement(
	        'header',
	        { className: 'topbar topbar-inverse' },
	        _react2['default'].createElement(
	          'h1',
	          { className: 'topbar-brand' },
	          _react2['default'].createElement(
	            'a',
	            { href: '/docs', className: 'text-ir', to: '/docs' },
	            'RUI'
	          ),
	          _react2['default'].createElement(
	            'span',
	            { className: 'badge badge-warning' },
	            'React'
	          )
	        ),
	        _react2['default'].createElement(
	          'ul',
	          { className: 'nav nav-pills topbar-nav' },
	          _react2['default'].createElement(
	            _RouteLink2['default'],
	            { refresh: true, match: '/docs/less/*', to: '/docs/less', activeClassName: 'active' },
	            'LESS UI'
	          ),
	          _react2['default'].createElement(
	            _RouteLink2['default'],
	            { refresh: true, match: '/docs/react/*', to: '/docs/react/layout/flexlayout', activeClassName: 'active' },
	            'React UI'
	          ),
	          _react2['default'].createElement(
	            _RouteLink2['default'],
	            { refresh: true, match: '/docs/mobile/*', to: '/docs/mobile', activeClassName: 'active' },
	            'React Mobile'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'topbar-right' },
	          _react2['default'].createElement(_ThemeSelector2['default'], null)
	        )
	      );
	    }
	  }]);
	
	  return Header;
	})(_react.Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Layout = __webpack_require__(78);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _LayoutSplitter = __webpack_require__(36);
	
	var _LayoutSplitter2 = _interopRequireDefault(_LayoutSplitter);
	
	if (true) {
	  __webpack_require__(88);
	}
	exports['default'] = {
	  Layout: _Layout2['default'],
	  LayoutSplitter: _LayoutSplitter2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _platform = __webpack_require__(26);
	
	var _platform2 = _interopRequireDefault(_platform);
	
	var _environment = __webpack_require__(25);
	
	var STYLE = {
	  /**
	   * Get browser vendor prefix. chrome return 'webkit'
	   * @return {String} the prefix of vendor.
	   */
	  getVendorPrefix: function getVendorPrefix() {
	    if (!_environment.canUseDOM) return '';
	
	    var msie = _platform2['default'].msie;
	    var version = _platform2['default'].version;
	
	    if (msie && parseInt(version) <= 9) {
	      return '';
	    }
	    // Thanks David Walsh
	    var styles = window.getComputedStyle(document.documentElement, '');
	    var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
	    // short circuit - Jest, why?
	    if (typeof pre === 'undefined') return '';
	    // // 'ms' is not titlecased
	    if (pre === 'ms') return pre;
	    return pre.slice(0, 1).toUpperCase() + pre.slice(1);
	  },
	
	  /**
	   * adds browserPrefix to the select style
	   * @return {String} browser prefixed select style
	   */
	  selectStyle: function selectStyle() {
	
	    // Useful for preventing blue highlights all over everything when dragging.
	    var userSelectStyle = ';user-select: none;';
	    var browserPrefix = STYLE.getVendorPrefix(window);
	
	    if (browserPrefix) {
	      userSelectStyle += '-' + browserPrefix.toLowerCase() + '-user-select: none;';
	    }
	
	    return userSelectStyle;
	  },
	
	  createCSSTransform: function createCSSTransform(style) {
	    // Replace unitless items with px
	    var x = style.x + 'px';
	    var y = style.y + 'px';
	    var out = {
	      transform: 'translate(' + x + ',' + y + ')'
	    };
	    var browserPrefix = STYLE.getVendorPrefix();
	
	    // Add single prefixed property as well
	    if (browserPrefix) {
	      out[browserPrefix + 'Transform'] = out.transform;
	    }
	    return out;
	  }
	};
	
	exports['default'] = STYLE;
	module.exports = exports['default'];

/***/ },
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var path = {
	  /**
	   * Normallize url path, note only can handler url path e.g. /workspace/list
	   * Dont handle protocol port (http://)
	   * @param  {...paths} paths provider path serialized paramter.
	   * @return {String}
	   */
	  normalizePath: function normalizePath() {
	    for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
	      paths[_key] = arguments[_key];
	    }
	
	    var result = [];
	    paths.forEach(function (path) {
	      result.push(path ? path.replace(/^\/+|\/+$/ig, '') : '');
	    });
	    var path = '/' + result.join('/');
	
	    return path.replace(/^\/+/ig, '/');
	  }
	};
	
	exports['default'] = path;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lang = __webpack_require__(20);
	
	var _lang2 = _interopRequireDefault(_lang);
	
	var string = {
	  /**
	   * string formatter, _.stringFormat('my name is {0}{1}', 'yingchun', 'tian')
	   * @param  {...[string]} args
	   * @return {String}      the formatted string.
	   */
	  stringFormat: function stringFormat() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    // use this string as the format,Note {x},x start from 0,1,2
	    // walk through each argument passed in
	    var fmt = args[0];
	
	    for (var ndx = 1; ndx < args.length; ++ndx) {
	      // replace {1} with argument[1], {2} with argument[2], etc.
	      var argVal = _lang2['default'].isObject(args[ndx]) ? JSON.stringify(args[ndx]) : args[ndx];
	      fmt = fmt.replace(new RegExp('\\{' + (ndx - 1) + '\\}', "g"), argVal);
	    }
	    // return the formatted string
	    return fmt;
	  }
	};
	
	exports['default'] = string;
	module.exports = exports['default'];

/***/ },
/* 61 */,
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(9);
	
	var _reduxLogger = __webpack_require__(160);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxThunk = __webpack_require__(137);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxSimplePromise = __webpack_require__(23);
	
	var _reduxSimplePromise2 = _interopRequireDefault(_reduxSimplePromise);
	
	var _reducers = __webpack_require__(70);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var loggerMiddleware = (0, _reduxLogger2['default'])({
	  collapsed: false,
	  predicate: function predicate() {
	    return (/*getState, action*/'production' !== ("development")
	    );
	  }
	});
	
	// the production middlewares, performace optimazation.
	var middlewares = [(0, _reduxSimplePromise2['default'])(), _reduxThunk2['default']];
	var finalCreateStore = undefined;
	
	if (false) {
	  // Production and broswer mode.
	  finalCreateStore = _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore);
	} else if (typeof window !== 'undefined') {
	  // Development and broswer mode
	  finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares.concat([loggerMiddleware])))(_redux.createStore);
	} else {
	  // for Node Env
	  finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares))(_redux.createStore);
	}
	
	/**
	 * Creates a preconfigured store for this example.
	 * @param  {St} moduleName    the reducer module name
	 * @param  {Any} initialState initialState values for reducer.
	 * @return {Object}           store
	 */
	
	function configureStore(moduleName, initialState) {
	
	  var moduleReducers = (0, _reducers2['default'])(moduleName);
	  // store.
	  var store = finalCreateStore(moduleReducers, initialState);
	
	  return store;
	}
	
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NoMatch = (function (_React$Component) {
	  _inherits(NoMatch, _React$Component);
	
	  function NoMatch() {
	    _classCallCheck(this, NoMatch);
	
	    _get(Object.getPrototypeOf(NoMatch.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NoMatch, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'No match.'
	      );
	    }
	  }]);
	
	  return NoMatch;
	})(_react2['default'].Component);
	
	exports['default'] = NoMatch;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(17);
	
	var _utilsURI = __webpack_require__(33);
	
	var _utilsURI2 = _interopRequireDefault(_utilsURI);
	
	var RouteLink = _react2['default'].createClass({
	  displayName: 'RouteLink',
	
	  mixins: [_reactRouter.History],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      refresh: false
	    };
	  },
	  getPropTypes: function getPropTypes() {
	    return {
	      // for refresh page, the whole page reload.
	      refresh: _react2['default'].PropTypes.bool,
	      // cutomized regex match to test if current RouteLink is `active` state.
	      match: _react2['default'].PropTypes.string
	    };
	  },
	
	  render: function render() {
	    // Note there is an bug in ie <=11, this.history is undefined.
	    // the mixin has some problem in windows <IE10 use ES5 instead.
	    var _props = this.props;
	    var to = _props.to;
	    var match = _props.match;
	    var refresh = _props.refresh;
	
	    var isActive = undefined;
	    var currentURL = window.location.href;
	    var currentHash = currentURL.replace(_utilsURI2['default'].getUrl(), '/');
	
	    if (match) {
	      var regExpStr = match.replace(/\//g, '\/');
	      isActive = new RegExp(regExpStr).test(currentHash);
	    } else {
	      isActive = this.history.isActive(to, this.props.query);
	    }
	
	    var className = isActive ? 'active' : '';
	    if (refresh === true) {
	      if (className) {
	        return _react2['default'].createElement(
	          'li',
	          { className: className },
	          _react2['default'].createElement(
	            'a',
	            null,
	            this.props.children
	          )
	        );
	      } else {
	        return _react2['default'].createElement(
	          'li',
	          { className: className },
	          _react2['default'].createElement(
	            'a',
	            { href: this.props.to },
	            this.props.children
	          )
	        );
	      }
	    } else {
	      return _react2['default'].createElement(
	        'li',
	        { className: className },
	        _react2['default'].createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: null }))
	      );
	    }
	  }
	});
	
	module.exports = RouteLink;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sharedReactComponentsMenu = __webpack_require__(37);
	
	var _sharedReactComponentsMenu2 = _interopRequireDefault(_sharedReactComponentsMenu);
	
	var _sharedReactComponentsIcon = __webpack_require__(32);
	
	var _sharedReactComponentsIcon2 = _interopRequireDefault(_sharedReactComponentsIcon);
	
	var _utilsURI = __webpack_require__(33);
	
	var _utilsURI2 = _interopRequireDefault(_utilsURI);
	
	var SubMenu = _sharedReactComponentsMenu2['default'].SubMenu;
	
	var ThemeSelector = (function (_Component) {
	  _inherits(ThemeSelector, _Component);
	
	  function ThemeSelector() {
	    var _this = this;
	
	    _classCallCheck(this, ThemeSelector);
	
	    _get(Object.getPrototypeOf(ThemeSelector.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      current: 'default'
	    };
	
	    this.handleClick = function (e) {
	      var theme = e.key;
	      var link = _this.getThemeLink(theme);
	      // dynamic replace `common` link style.
	      _this.switchStyle('common', link);
	      _this.setState({
	        current: theme
	      });
	    };
	  }
	
	  _createClass(ThemeSelector, [{
	    key: 'switchStyle',
	    value: function switchStyle(newLinkName, newLinkHref) {
	      if (!newLinkHref || !newLinkName) {
	        console.warn('switch theme style must provider two parameters!');
	        return;
	      }
	      var link_tag = document.getElementsByTagName("link");
	      var found = null;
	      for (var i = 0; i <= link_tag.length; i++) {
	        var link = link_tag[i];
	        if (link && link.rel && link.rel.indexOf("stylesheet") != -1) {
	          var linkName = link.getAttribute("name");
	          var linkHref = link.getAttribute("href");
	          if (linkName == newLinkName) {
	            found = link;
	            break;
	          }
	        }
	      }
	      if (found) {
	        if (newLinkHref !== found.getAttribute('href')) {
	          found.setAttribute('href', newLinkHref);
	        }
	      } else {
	        var head = document.head || document.getElementsByTagName('head')[0];
	        var newLinkTag = document.createElement('link');
	        newLinkTag.setAttribute('rel', 'stylesheet');
	        newLinkTag.setAttribute('type', 'text/css');
	        newLinkTag.setAttribute('name', newLinkName);
	        newLinkTag.setAttribute('href', newLinkHref);
	        head.appendChild(newLinkTag);
	      }
	    }
	  }, {
	    key: 'getThemeLink',
	    value: function getThemeLink(theme) {
	      var link = '/shared/less/public/common.css';
	      switch (theme) {
	        case 'glodonyun':
	          link = '/shared/less/public/themes/jr-pc/common.css';
	          break;
	      }
	      return _utilsURI2['default'].getUrl(link);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2['default'].createElement(
	        _sharedReactComponentsMenu2['default'],
	        { onClick: this.handleClick, selectedKeys: [this.state.current], mode: 'horizontal' },
	        _react2['default'].createElement(
	          SubMenu,
	          { title: _react2['default'].createElement(
	              'span',
	              null,
	              _react2['default'].createElement('i', { className: 'glyph-icon glyph-menu' }),
	              'The Themes'
	            ) },
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'default' },
	            'Default Theme'
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'glodonyun' },
	            'Gldon Yun'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ThemeSelector;
	})(_react.Component);
	
	exports['default'] = ThemeSelector;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDocumentMeta = __webpack_require__(48);
	
	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);
	
	var _headerHeader = __webpack_require__(50);
	
	var _headerHeader2 = _interopRequireDefault(_headerHeader);
	
	var _meta = __webpack_require__(35);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _sharedReactComponentsLayout = __webpack_require__(51);
	
	var _sharedReactComponentsLayout2 = _interopRequireDefault(_sharedReactComponentsLayout);
	
	var Layout = _sharedReactComponentsLayout2['default'].Layout;
	var LayoutSplitter = _sharedReactComponentsLayout2['default'].LayoutSplitter;
	
	// import doc styles for all sub modules.
	if (true) {
	  __webpack_require__(87);
	}
	
	var BaseLayout = (function (_Component) {
	  _inherits(BaseLayout, _Component);
	
	  function BaseLayout() {
	    _classCallCheck(this, BaseLayout);
	
	    _get(Object.getPrototypeOf(BaseLayout.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(BaseLayout, [{
	    key: 'render',
	    value: function render() {
	
	      var Header = this.props.header || _react2['default'].createElement(Header, null);
	      var classes = {
	        'wrapper': true
	      };
	      return _react2['default'].createElement(
	        'div',
	        { className: (0, _classnames2['default'])(classes, this.props.className) },
	        _react2['default'].createElement(_reactDocumentMeta2['default'], this.props.meta || _meta2['default']),
	        _react2['default'].createElement(
	          Layout,
	          { fill: 'window', className: 'doc-page' },
	          _react2['default'].createElement(
	            Layout,
	            { layoutHeight: 50, className: 'layout-topnav' },
	            Header
	          ),
	          _react2['default'].createElement(
	            Layout,
	            { layoutHeight: 'flex', className: 'page-body container' },
	            this.props.children
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      meta: _react2['default'].PropTypes.object,
	      // react element <Header />
	      header: _react2['default'].PropTypes.element
	    },
	    enumerable: true
	  }]);
	
	  return BaseLayout;
	})(_react.Component);
	
	exports['default'] = BaseLayout;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.homeStaticIntroduction = homeStaticIntroduction;
	
	function homeStaticIntroduction(state, action) {
	  if (state === undefined) state = null;
	
	  return state;
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(9);
	
	var _homeDoc = __webpack_require__(68);
	
	var homeDocReducers = _interopRequireWildcard(_homeDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, homeDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = findReducers;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(9);
	
	var _home = __webpack_require__(69);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _less = __webpack_require__(71);
	
	var _less2 = _interopRequireDefault(_less);
	
	var _react = __webpack_require__(75);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mobile = __webpack_require__(73);
	
	var _mobile2 = _interopRequireDefault(_mobile);
	
	function findReducers(moduleName) {
	  if (!moduleName) {
	    throw new Error('we must specific `moduleName` to construct corresponding final reducers');
	  }
	  switch (moduleName) {
	    case 'home':
	      return _home2['default'];
	    case 'less':
	      return _less2['default'];
	    case 'react':
	      return _react2['default'];
	    case 'mobile':
	      return _mobile2['default'];
	
	    default:
	      throw new Error('can not find \'' + moduleName + '\' final reducers');
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(9);
	
	var _lessDoc = __webpack_require__(72);
	
	var lessDocReducers = _interopRequireWildcard(_lessDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, lessDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.docDetails = docDetails;
	exports.docSearchResult = docSearchResult;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _constantsDocActionTypes = __webpack_require__(24);
	
	var DocActionTypes = _interopRequireWildcard(_constantsDocActionTypes);
	
	var _reduxSimplePromise = __webpack_require__(23);
	
	var initialState = {
	  isLoading: false,
	  data: {}
	};
	
	function docDetails(state, action) {
	  if (state === undefined) state = initialState;
	
	  switch (action.type) {
	    case DocActionTypes.SHOW_DOC_DETAIL:
	      return Object.assign({}, initialState, {
	        isLoading: true
	      });
	
	    case (0, _reduxSimplePromise.resolve)(DocActionTypes.SHOW_DOC_DETAIL):
	    case (0, _reduxSimplePromise.reject)(DocActionTypes.SHOW_DOC_DETAIL):
	      return Object.assign({}, initialState, {
	        isLoading: false,
	        data: action.payload
	      });
	
	    default:
	      return state;
	  }
	}
	
	;
	
	var searchResultState = {
	  isLoading: false,
	  data: []
	};
	
	function docSearchResult(state, action) {
	  if (state === undefined) state = searchResultState;
	
	  switch (action.type) {
	    case DocActionTypes.SEARCH_DOCS:
	      return object.assign({}, searchResultState, action.payload);
	
	    default:
	      return state;
	  }
	}
	
	;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(9);
	
	var _mobileDoc = __webpack_require__(74);
	
	var mobileDocReducers = _interopRequireWildcard(_mobileDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, mobileDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.mobileTest = mobileTest;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _constantsDocActionTypes = __webpack_require__(24);
	
	var DocActionTypes = _interopRequireWildcard(_constantsDocActionTypes);
	
	var _reduxSimplePromise = __webpack_require__(23);
	
	var initialState = {
	  isLoading: false,
	  data: {}
	};
	
	function mobileTest(state, action) {
	  if (state === undefined) state = initialState;
	
	  return state;
	}
	
	;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(9);
	
	var _reactDoc = __webpack_require__(76);
	
	var reactDocReducers = _interopRequireWildcard(_reactDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, reactDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.docDetail = docDetail;
	exports.docMenu = docMenu;
	exports.docSearchResult = docSearchResult;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _constantsDocActionTypes = __webpack_require__(24);
	
	var DocActionTypes = _interopRequireWildcard(_constantsDocActionTypes);
	
	var _reduxSimplePromise = __webpack_require__(23);
	
	var initialState = {
	  isLoading: false,
	  component: '',
	  data: null
	};
	
	// used to simplePromiseMiddleWare.
	
	function docDetail(state, action) {
	  if (state === undefined) state = initialState;
	
	  switch (action.type) {
	    case DocActionTypes.SHOW_DOC_DETAIL:
	      return Object.assign({}, initialState, {
	        isLoading: true
	      });
	
	    case (0, _reduxSimplePromise.resolve)(DocActionTypes.SHOW_DOC_DETAIL):
	    case (0, _reduxSimplePromise.reject)(DocActionTypes.SHOW_DOC_DETAIL):
	      return Object.assign({}, {
	        isLoading: false,
	        data: action.payload
	      });
	
	    default:
	      return state;
	  }
	}
	
	;
	
	var initialDocMenuState = {
	  isLoading: true,
	  data: []
	};
	
	function docMenu(state, action) {
	  if (state === undefined) state = initialDocMenuState;
	
	  switch (action.type) {
	    // loaded doc catalog for react.
	    case DocActionTypes.LOAD_DOC_CATALOGS:
	      return Object.assign({}, {
	        isLoading: false,
	        data: action.payload
	      });
	
	    default:
	      return state;
	  }
	}
	
	;
	
	var searchResultState = {
	  isLoading: false,
	  data: []
	};
	
	function docSearchResult(state, action) {
	  if (state === undefined) state = searchResultState;
	
	  switch (action.type) {
	    case DocActionTypes.SEARCH_DOCS:
	      return object.assign({}, searchResultState, action.payload);
	
	    default:
	      return state;
	  }
	}
	
	;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	if (true) {
	  // for node environment, we should load velocity.
	  var velocity = __webpack_require__(138);
	}
	
	function animate(node, show, transitionName, done) {
	  var ok = undefined;
	
	  function complete() {
	    if (!ok) {
	      ok = true;
	      done();
	    }
	  }
	
	  // Fix safari flash bug
	  node.style.display = show ? 'block' : 'none';
	  velocity(node, transitionName, {
	    duration: 200,
	    complete: complete,
	    easing: 'easeInOutQuad'
	  });
	  return {
	    stop: function stop() {
	      velocity(node, 'finish');
	      complete();
	    }
	  };
	}
	
	var animation = {
	  enter: function enter(node, done) {
	    return animate(node, false, 'slideDown', done);
	  },
	  leave: function leave(node, done) {
	    return animate(node, true, 'slideUp', done);
	  },
	  appear: function appear(node, done) {
	    return animate(node, false, 'slideDown', done);
	  }
	};
	
	exports['default'] = animation;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _LayoutSplitter = __webpack_require__(36);
	
	var _LayoutSplitter2 = _interopRequireDefault(_LayoutSplitter);
	
	var _utilsDom = __webpack_require__(38);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsStyle = __webpack_require__(55);
	
	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);
	
	var _utilsEvents = __webpack_require__(18);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _utilsLang = __webpack_require__(20);
	
	var _utilsLang2 = _interopRequireDefault(_utilsLang);
	
	/**
	 * The flex layout component only suite for desktop,
	 * don't support touch device.
	 */
	
	var Layout = (function (_Component) {
	  _inherits(Layout, _Component);
	
	  _createClass(Layout, null, [{
	    key: 'propTypes',
	    value: {
	      /**
	       * Called when Layout have been changed.
	       * @param layoutInfo (the width or height of current `Layout`)
	       */
	      onLayoutChanged: _react.PropTypes.func,
	      /**
	       * By default, we add 'user-select:none' attributes to the document body
	       * to prevent ugly text selection during drag. If this is causing problems
	       * for your app, set this to `false`.
	       */
	      enableUserSelectHack: _react.PropTypes.bool,
	
	      // You can only specify layoutHeight or layoutWidth at a single level
	      // for horizontal layout. px(number), 'flex'(string)
	      layoutWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	      // for vertical layout.   px(number), 'flex'(string)
	      layoutHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      enableUserSelectHack: true,
	      onLayoutChanged: _utilsLang.noop
	    },
	    enumerable: true
	  }]);
	
	  function Layout(props) {
	    var _this = this;
	
	    _classCallCheck(this, Layout);
	
	    _get(Object.getPrototypeOf(Layout.prototype), 'constructor', this).call(this, props);
	
	    this.handleResize = function () {
	      if (_this.props.fill === 'window' && window) {
	        // for ie8, ie9.
	        _this.state.layoutWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	        _this.state.layoutHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	        _this.setState(_this.state);
	      } else if (!_this.props.layoutWidth && !_this.props.layoutHeight) {
	        var domNode = _reactDom2['default'].findDOMNode(_this);
	        _this.state.layoutWidth = domNode.parentElement.clientWidth;
	        _this.state.layoutHeight = domNode.parentElement.clientHeight;
	        _this.setState(_this.state);
	      }
	
	      _this.onNotifyLayoutChanged({
	        layoutWidth: _this.getWidth(),
	        layoutHeight: _this.getHeight()
	      });
	    };
	
	    this.childLayoutChanged = function () {
	      // State hasn't changed but render relies on child properties
	      _this.setState(_this.state);
	    };
	
	    this.addUserSelectStyles = function () {
	      if (_this.props.enableUserSelectHack) {
	        var style = document.body.getAttribute('style') || '';
	        document.body.setAttribute('style', style + _utilsStyle2['default'].selectStyle());
	      } else {
	        console.warn('UserSelectHack is not enabled');
	      }
	    };
	
	    this.removeUserSelectStyles = function () {
	      if (_this.props.enableUserSelectHack) {
	        var style = document.body.getAttribute('style') || '';
	        document.body.setAttribute('style', style.replace(_utilsStyle2['default'].selectStyle(), ''));
	      } else {
	        console.warn('UserSelectHack is not enabled');
	      }
	    };
	
	    this.state = {};
	
	    if (props.layoutWidth !== 'flex') {
	      if (props.layoutWidth && !_utilsLang2['default'].isNumber(props.layoutWidth)) {
	        throw new Error('layoutWidth should be a number or flex');
	      }
	      this.state.layoutWidth = props.layoutWidth;
	    }
	    if (props.layoutHeight !== 'flex') {
	      if (props.layoutHeight && !_utilsLang2['default'].isNumber(props.layoutHeight)) {
	        throw new Error('layoutHeight should be a number or flex');
	      }
	      this.state.layoutHeight = props.layoutHeight;
	    }
	  }
	
	  _createClass(Layout, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('`Layout` component did mount');
	      _utilsEvents2['default'].on(window, 'resize', this.handleResize);
	      // auto trigger onece.
	      this.handleResize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _utilsEvents2['default'].off(window, 'resize', this.handleResize);
	    }
	  }, {
	    key: 'onNotifyLayoutChanged',
	
	    /**
	     * The layout information notification
	     * @param  {Object} The {layoutWidth, layoutHeight}
	     */
	    value: function onNotifyLayoutChanged(layoutInfo) {
	      if (this.props.onLayoutChanged) {
	        this.props.onLayoutChanged(layoutInfo);
	      }
	    }
	  }, {
	    key: 'setWidth',
	    value: function setWidth(newWidth) {
	      this.state.layoutWidth = newWidth;
	      // notify layout changed.
	      this.onNotifyLayoutChanged({ layoutWidth: newWidth });
	      this.setState(this.state);
	      if (this.props.layoutChanged) {
	        this.props.layoutChanged();
	      }
	    }
	  }, {
	    key: 'setHeight',
	    value: function setHeight(newHeight) {
	      this.state.layoutHeight = newHeight;
	      // notify layout changed.
	      this.onNotifyLayoutChanged({ layoutHeight: newHeight });
	      this.setState(this.state);
	      if (this.props.layoutChanged) {
	        this.props.layoutChanged();
	      }
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      if (this.props.layoutWidth === 'flex') {
	        this.state.layoutWidth = this.props.calculatedFlexWidth;
	      }
	      return this.state.layoutWidth || this.props.containerWidth;
	
	      // return  this.props.layoutWidth === 'flex'
	      //   ? this.props.calculatedFlexWidth
	      //   : (this.state.layoutWidth || this.props.containerWidth);
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      if (this.props.layoutHeight === 'flex') {
	        this.state.layoutHeight = this.props.calculatedFlexHeight;
	      }
	      return this.state.layoutHeight || this.props.containerHeight;
	
	      // return this.props.layoutHeight === 'flex'
	      //   ? this.props.calculatedFlexHeight
	      //   : (this.state.layoutHeight || this.props.containerHeight);
	    }
	  }, {
	    key: 'recalculateFlexLayout',
	    value: function recalculateFlexLayout() {
	      var _this2 = this;
	
	      var newFlexDimentions = {};
	      if (this.props.children) {
	        var thisWidth;
	        var thisHeight;
	
	        (function () {
	          var numberOfFlexWidths = 0;
	          var totalAllocatedWidth = 0;
	          var numberOfFlexHeights = 0;
	          var totalAllocatedHeight = 0;
	          var i = 0;
	          _react2['default'].Children.map(_this2.props.children, function (childDefinition) {
	            var childType = childDefinition.type;
	            if (childType === Layout && !childDefinition.props.layoutWidth && !childDefinition.props.layoutHeight) {
	              throw new Error('Child Layouts must have either layoutWidth or layoutHeight set');
	            }
	
	            if (childType === Layout || childType === _LayoutSplitter2['default']) {
	              var child = _this2.refs['layout' + i];
	
	              //horizontal
	              if (childDefinition.props.layoutWidth === 'flex') {
	                numberOfFlexWidths++;
	              } else if (!child && _utilsLang2['default'].isNumber(childDefinition.props.layoutWidth)) {
	                totalAllocatedWidth += childDefinition.props.layoutWidth;
	              } else if (child && _utilsLang2['default'].isNumber(child.state.layoutWidth)) {
	                totalAllocatedWidth += child.state.layoutWidth;
	              }
	
	              //vertical
	              if (childDefinition.props.layoutHeight === 'flex') {
	                numberOfFlexHeights++;
	              } else if (!child && _utilsLang2['default'].isNumber(childDefinition.props.layoutHeight)) {
	                totalAllocatedHeight += childDefinition.props.layoutHeight;
	              } else if (child && _utilsLang2['default'].isNumber(child.state.layoutHeight)) {
	                totalAllocatedHeight += child.state.layoutHeight;
	              }
	            }
	            i++;
	          });
	
	          if (numberOfFlexHeights > 0 && numberOfFlexWidths > 0) {
	            throw new Error('Cannot have layout children with both flex widths and heights');
	          }
	          if (numberOfFlexWidths > 0) {
	            thisWidth = _this2.state.layoutWidth || _this2.props.containerWidth;
	
	            newFlexDimentions.width = (thisWidth - totalAllocatedWidth) / numberOfFlexWidths;
	          } else if (numberOfFlexHeights > 0) {
	            thisHeight = _this2.state.layoutHeight || _this2.props.containerHeight;
	
	            newFlexDimentions.height = (thisHeight - totalAllocatedHeight) / numberOfFlexHeights;
	          }
	
	          var isHorizontal = numberOfFlexWidths > 0 || totalAllocatedWidth > 0;
	          var isVertical = numberOfFlexHeights > 0 || totalAllocatedHeight > 0;
	          if (isHorizontal && isVertical) {
	            throw new Error('You can only specify layoutHeight or layoutWidth at a single level');
	          } else if (isHorizontal) {
	            newFlexDimentions.orientation = 'horizontal';
	          } else if (isVertical) {
	            newFlexDimentions.orientation = 'vertical';
	          }
	        })();
	      }
	
	      return newFlexDimentions;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      console.log('`Layout` component rendering!');
	      var width = this.getWidth();
	      var height = this.getHeight();
	
	      if (!width || !height) {
	        // We don't know our size yet (maybe initial render)
	        return _react2['default'].createElement('div', null);
	      }
	
	      var count = -1;
	      var calculatedFlexDimentions = this.recalculateFlexLayout();
	      var children = _react2['default'].Children.map(this.props.children, function (child) {
	        count++;
	        if (child.type === Layout) {
	          var newProps = {
	            layoutChanged: _this3.childLayoutChanged,
	            calculatedFlexWidth: calculatedFlexDimentions.width,
	            calculatedFlexHeight: calculatedFlexDimentions.height,
	            containerHeight: height,
	            containerWidth: width,
	            ref: 'layout' + count
	          };
	
	          if (calculatedFlexDimentions.orientation === 'horizontal') {
	            var childStyle = child.props.style || {};
	            childStyle.float = 'left';
	            newProps.style = childStyle;
	          }
	
	          return _react2['default'].cloneElement(child, newProps);
	        } else if (child.type === _LayoutSplitter2['default']) {
	          var newProps = {
	            layoutChanged: _this3.childLayoutChanged,
	            orientation: calculatedFlexDimentions.orientation,
	            containerHeight: height,
	            containerWidth: width,
	            ref: 'layout' + count,
	            hideSelection: function hideSelection() {
	              _this3.addUserSelectStyles();
	            },
	            restoreSelection: function restoreSelection() {
	              _this3.removeUserSelectStyles();
	            },
	            getPreviousLayout: function getPreviousLayout() {
	              var index = _this3.props.children.indexOf(child);
	              return _this3.refs['layout' + (index - 1)];
	            },
	            getNextLayout: function getNextLayout() {
	              var index = _this3.props.children.indexOf(child);
	              return _this3.refs['layout' + (index + 1)];
	            }
	          };
	          return _react2['default'].cloneElement(child, newProps);
	        };
	        return child;
	      });
	
	      var className = _defineProperty({}, this.props.className, !!this.props.className);
	
	      var style = Object.assign({}, {
	        // Note. normally we should using scrollArea component to each layout container
	        // So set overflow: hidden;
	        overflow: 'hidden',
	        width: width,
	        height: height
	      }, this.props.style || {});
	
	      if (this.props.fill === 'window') {
	        Object.assign(style, {
	          position: 'absolute',
	          top: 0,
	          left: 0
	        });
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { style: style, className: (0, _classnames2['default'])(className) },
	        children
	      );
	    }
	
	    /**
	     * add 'user-select:none' attributes to the document body
	     * to prevent ugly text selection during drag.
	     */
	  }]);
	
	  return Layout;
	})(_react.Component);
	
	exports['default'] = Layout;
	module.exports = exports['default'];

	/**
	 * remove 'user-select:none' attributes to the document body
	 * to prevent ugly text selection during drag.
	 */

/***/ },
/* 79 */
/***/ function(module, exports) {

	//no namespacing.
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var NAMESPACE = '';
	
	var CLASSES = {
	  active: 'active',
	  disabled: 'disabled',
	  round: 'round',
	  radius: 'radius',
	  square: 'square',
	  circle: 'circle',
	  divider: 'divider',
	  cf: 'cf',
	  fl: 'fl',
	  fr: 'fr'
	};
	var STYLES = {
	  'default': 'default',
	  primary: 'primary',
	  secondary: 'secondary',
	  success: 'success',
	  warning: 'warning',
	  danger: 'danger'
	};
	var SIZES = {};
	
	exports['default'] = {
	  NAMESPACE: NAMESPACE,
	  CLASSES: CLASSES,
	  STYLES: STYLES,
	  SIZES: SIZES
	};
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _history = __webpack_require__(97);
	
	var _sharedReactUtilsPlatform = __webpack_require__(26);
	
	var _sharedReactUtilsPlatform2 = _interopRequireDefault(_sharedReactUtilsPlatform);
	
	var autoHistory = function autoHistory() {
	  var msie = _sharedReactUtilsPlatform2['default'].msie;
	  var version = _sharedReactUtilsPlatform2['default'].version;
	
	  if (msie && parseInt(version) <= 9) {
	    // see 'history' package
	    // HTML5 gives us the `pushState` method and the `popstate` event,
	    // but in older browsers the only thing we have is the URL.
	    // So, when using hash history, you'll see an extra item in your query string that looks something like `_k=123abc`.
	    // This is a key that `history` uses to look up persistent state data in `window.sessionStorage` between page loads.
	    //  If you prefer to use a different query parameter, or to opt-out of this behavior entirely, use the `queryKey` configuration option.
	    return (0, _history.createHashHistory)({ queryKey: false });
	  }
	  return (0, _history.createHistory)();
	};
	var history = autoHistory();
	
	exports.browser = _sharedReactUtilsPlatform2['default'];
	exports.history = history;

/***/ },
/* 81 */
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(82);
	var Css = __webpack_require__(81);
	var isCssAnimationSupported = Event.endEvents.length !== 0;
	
	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	module.exports = cssAnimation;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(85);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(86);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset, ch, cw, containerScroll,
	    diffTop, diffBottom, win,
	    winScroll, ww, wh;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left,
	      top: elemOffset.top - winScroll.top
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww),
	      top: elemOffset.top + eh - (winScroll.top + wh)
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left +
	      (parseFloat(util.css(container, 'borderLeftWidth')) || 0)),
	      top: elemOffset.top - (containerOffset.top +
	      (parseFloat(util.css(container, 'borderTopWidth')) || 0))
	    };
	    diffBottom = {
	      left: elemOffset.left + ew -
	      (containerOffset.left + cw +
	      (parseFloat(util.css(container, 'borderRightWidth')) || 0)),
	      top: elemOffset.top + eh -
	      (containerOffset.top + ch +
	      (parseFloat(util.css(container, 'borderBottomWidth')) || 0))
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;


/***/ },
/* 86 */
/***/ function(module, exports) {

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box, x, y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {left: x, top: y};
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    //ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      //quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle) {
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if ((computedStyle = (computedStyle || d.defaultView.getComputedStyle(elem, null)))) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/,
	  CURRENT_STYLE = 'currentStyle',
	  RUNTIME_STYLE = 'runtimeStyle',
	  LEFT = 'left',
	  PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style,
	      left = style[LEFT],
	      rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : (ret || 0);
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem),
	    ret = {},
	    current, key;
	
	  for (key in offset) {
	    current = parseFloat(css(elem, key)) || 0;
	    ret[key] = current + offset[key] - old[key];
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'],
	  CONTENT_INDEX = -1,
	  PADDING_INDEX = 2,
	  BORDER_INDEX = 1,
	  MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {},
	    style = elem.style,
	    name;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    old[name] = style[name];
	    style[name] = options[name];
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    style[name] = old[name];
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0, prop, j, i;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /*jshint eqeqeq:false*/
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	      //firefox chrome documentElement.scrollHeight< body.scrollHeight
	      //ie standard mode : documentElement.scrollHeight> body.scrollHeight
	      d.documentElement['scroll' + name],
	      //quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	      d.body['scroll' + name],
	      domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name,
	      doc = win.document,
	      body = doc.body,
	      documentElement = doc.documentElement,
	      documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp ||
	      body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
	    borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || (Number(cssBoxValue)) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'],
	          which, computedStyle);
	    } else {
	      return cssBoxValue;
	    }
	  } else if (borderBoxValueOrIsBorderBox) {
	    return val + (extra === BORDER_INDEX ? 0 :
	        (extra === PADDING_INDEX ?
	          -getPBMWidth(elem, ['border'], which, computedStyle) :
	          getPBMWidth(elem, ['margin'], which, computedStyle)));
	  } else {
	    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra),
	        which, computedStyle);
	  }
	}
	
	var cssShow = {position: 'absolute', visibility: 'hidden', display: 'block'};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val, args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function css(el, name, value) {
	  if (typeof name === 'object') {
	    for (var i in name) {
	      css(el, i, name[i]);
	    }
	    return;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	  } else {
	    return getComputedStyleX(el, name);
	  }
	}
	
	function mix(to, from) {
	  for (var i in from) {
	    to[i] = from[i];
	  }
	  return to;
	}
	
	var utils = module.exports = {
	  getWindow: function (node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function (el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function (obj) {
	    var ret = {};
	    for (var i in obj) {
	      ret[i] = obj[i];
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        ret.overflow[i] = obj.overflow[i];
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  scrollLeft: function (w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      } else {
	        window.scrollTo(v, getScrollTop(w));
	      }
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      } else {
	        w.scrollLeft = v;
	      }
	    }
	  },
	  scrollTop: function (w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      } else {
	        window.scrollTo(getScrollLeft(w), v);
	      }
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      } else {
	        w.scrollTop = v;
	      }
	    }
	  },
	  merge: function () {
	    var ret = {};
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, arguments[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);


/***/ },
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 88 */
87,
/* 89 */
87,
/* 90 */
370,
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(15);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(7);
	
	var _ExecutionEnvironment = __webpack_require__(14);
	
	var _DOMUtils = __webpack_require__(13);
	
	var _DOMStateStorage = __webpack_require__(39);
	
	var _createDOMHistory = __webpack_require__(40);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory(options) {
	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Browser history needs a DOM');
	
	  var isSupported = _DOMUtils.supportsHistory();
	
	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};
	
	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;
	
	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	
	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }
	
	    return history.createLocation(path, state, undefined, key);
	  }
	
	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.
	
	      transitionTo(getCurrentLocation(event.state));
	    }
	
	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    _DOMStateStorage.saveState(key, state);
	
	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };
	
	    if (action === _Actions.PUSH) {
	      if (isSupported) {
	        window.history.pushState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.href = path;
	      }
	    } else {
	      // REPLACE
	      if (isSupported) {
	        window.history.replaceState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.replace(path);
	      }
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopPopStateListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopPopStateListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(15);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(7);
	
	var _ExecutionEnvironment = __webpack_require__(14);
	
	var _DOMUtils = __webpack_require__(13);
	
	var _DOMStateStorage = __webpack_require__(39);
	
	var _createDOMHistory = __webpack_require__(40);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}
	
	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();
	
	  if (isAbsolutePath(path)) return true;
	
	  _DOMUtils.replaceHashPath('/' + path);
	
	  return false;
	}
	
	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}
	
	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}
	
	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}
	
	var DefaultQueryKey = '_k';
	
	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Hash history needs a DOM');
	
	  var queryKey = options.queryKey;
	
	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;
	
	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();
	
	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);
	
	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }
	
	    return history.createLocation(path, state, undefined, key);
	  }
	
	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;
	
	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.
	
	      transitionTo(getCurrentLocation());
	    }
	
	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);
	
	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }
	
	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    var path = (basename || '') + pathname + search;
	
	    if (queryKey) path = addQueryStringValueToPath(path, queryKey, key);
	
	    if (path === _DOMUtils.getHashPath()) {
	      _warning2['default'](false, 'You cannot %s the same path using hash history', action);
	    } else {
	      if (queryKey) {
	        _DOMStateStorage.saveState(key, state);
	      } else {
	        // Drop key and state.
	        location.key = location.state = null;
	      }
	
	      if (action === _Actions.PUSH) {
	        window.location.hash = path;
	      } else {
	        // REPLACE
	        _DOMUtils.replaceHashPath(path);
	      }
	    }
	  }
	
	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));
	
	  var listenerCount = 0,
	      stopHashChangeListener = undefined;
	
	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listenBefore(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }
	
	  function pushState(state, path) {
	    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');
	
	    history.pushState(state, path);
	  }
	
	  function replaceState(state, path) {
	    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');
	
	    history.replaceState(state, path);
	  }
	
	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();
	
	  function go(n) {
	    _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
	
	    history.go(n);
	  }
	
	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }
	
	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);
	
	    history.registerTransitionHook(hook);
	  }
	
	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);
	
	    if (--listenerCount === 0) stopHashChangeListener();
	  }
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    createHref: createHref,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}
	
	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(4);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _deprecate = __webpack_require__(11);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _Actions = __webpack_require__(7);
	
	function extractPath(string) {
	  var match = string.match(/https?:\/\/[^\/]*/);
	
	  if (match == null) return string;
	
	  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);
	
	  return string.substring(match[0].length);
	}
	
	function createLocation() {
	  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
	  path = extractPath(path);
	
	  var pathname = path;
	  var search = '';
	  var hash = '';
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}
	
	exports['default'] = _deprecate2['default'](createLocation, 'Calling createLocation statically is deprecated; instead call the history.createLocation method - see docs/Location.md');
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(15);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(7);
	
	var _createHistory = __webpack_require__(41);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}
	
	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }
	
	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));
	
	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;
	
	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }
	
	  entries = entries.map(function (entry) {
	    var key = history.createKey();
	
	    if (typeof entry === 'string') return { pathname: entry, key: key };
	
	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });
	
	    _invariant2['default'](false, 'Unable to create history entry from %s', entry);
	  });
	
	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    _invariant2['default'](current >= 0 && current < entries.length, 'Current index must be >= 0 and < %s, was %s', entries.length, current);
	  }
	
	  var storage = createStateStorage(entries);
	
	  function saveState(key, state) {
	    storage[key] = state;
	  }
	
	  function readState(key) {
	    return storage[key];
	  }
	
	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;
	
	    var path = (basename || '') + pathname + (search || '');
	
	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }
	
	    return history.createLocation(path, state, undefined, key);
	  }
	
	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }
	
	  function go(n) {
	    if (n) {
	      _invariant2['default'](canGo(n), 'Cannot go(%s) there is not enough history', n);
	
	      current += n;
	
	      var currentLocation = getCurrentLocation();
	
	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }
	
	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;
	
	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);
	
	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }
	
	  return history;
	}
	
	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(11);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useBeforeUnload = __webpack_require__(42);
	
	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
	
	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _deprecate = __webpack_require__(11);
	
	var _deprecate2 = _interopRequireDefault(_deprecate);
	
	var _useQueries = __webpack_require__(43);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createBrowserHistory = __webpack_require__(91);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	exports.createHistory = _createBrowserHistory2['default'];
	
	var _createHashHistory2 = __webpack_require__(92);
	
	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
	
	exports.createHashHistory = _createHashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(94);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];
	
	var _useBasename2 = __webpack_require__(98);
	
	var _useBasename3 = _interopRequireDefault(_useBasename2);
	
	exports.useBasename = _useBasename3['default'];
	
	var _useBeforeUnload2 = __webpack_require__(42);
	
	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
	
	exports.useBeforeUnload = _useBeforeUnload3['default'];
	
	var _useQueries2 = __webpack_require__(43);
	
	var _useQueries3 = _interopRequireDefault(_useQueries2);
	
	exports.useQueries = _useQueries3['default'];
	
	var _Actions2 = __webpack_require__(7);
	
	var _Actions3 = _interopRequireDefault(_Actions2);
	
	exports.Actions = _Actions3['default'];
	
	// deprecated
	
	var _createLocation2 = __webpack_require__(93);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	exports.createLocation = _createLocation3['default'];
	
	var _enableBeforeUnload2 = __webpack_require__(95);
	
	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
	
	exports.enableBeforeUnload = _enableBeforeUnload3['default'];
	
	var _enableQueries2 = __webpack_require__(96);
	
	var _enableQueries3 = _interopRequireDefault(_enableQueries2);
	
	exports.enableQueries = _enableQueries3['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var _runTransitionHook = __webpack_require__(27);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;
	
	    var historyOptions = _objectWithoutProperties(options, ['basename']);
	
	    var history = createHistory(historyOptions);
	
	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;
	
	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }
	
	      return location;
	    }
	
	    function prependBasename(path) {
	      return basename ? basename + path : path;
	    }
	
	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }
	
	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }
	
	    // Override all write methods with basename-aware versions.
	    function pushState(state, path) {
	      history.pushState(state, prependBasename(path));
	    }
	
	    function replaceState(state, path) {
	      history.replaceState(state, prependBasename(path));
	    }
	
	    function createPath(path) {
	      return history.createPath(prependBasename(path));
	    }
	
	    function createHref(path) {
	      return history.createHref(prependBasename(path));
	    }
	
	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }
	
	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      pushState: pushState,
	      replaceState: replaceState,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	}
	
	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 99 */
[470, 101, 100],
/* 100 */
377,
/* 101 */
378,
/* 102 */
[471, 104, 103],
/* 103 */
[472, 44],
/* 104 */
[473, 44],
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(107);
	
	var _ChildrenUtils2 = _interopRequireDefault(_ChildrenUtils);
	
	var _AnimateChild = __webpack_require__(106);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(45);
	
	var _util2 = _interopRequireDefault(_util);
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (c) {
	        return !!c.props[showProp];
	      });
	    }
	    children.forEach(function (c) {
	      _this.performAppear(c.key);
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    var showProp = props.showProp;
	    var exclusive = props.exclusive;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    // exclusive needs immediate response
	    var currentChildren = this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	    } else {
	      newChildren = _ChildrenUtils2['default'].mergeChildren(currentChildren, nextChildren);
	    }
	
	    // exclusive needs immediate response
	    if (exclusive) {
	      Object.keys(currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	      currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (c) {
	      var key = c.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = c.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (c) {
	      var key = c.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = c.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(
	          _AnimateChild2['default'],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(
	        Component,
	        this.props,
	        children
	      );
	    }
	    return children[0] || null;
	  },
	
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  }
	});
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cssAnimation = __webpack_require__(83);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(45);
	
	var _util2 = _interopRequireDefault(_util);
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _react2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	
	  stop: function stop() {
	    if (this.stopper) {
	      this.stopper.stop();
	      this.stopper = null;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var utils = {
	  toArrayChildren: function toArrayChildren(children) {
	    var ret = [];
	    _react2['default'].Children.forEach(children, function (c) {
	      ret.push(c);
	    });
	    return ret;
	  },
	
	  findChildInChildrenByKey: function findChildInChildrenByKey(children, key) {
	    var ret = null;
	    if (children) {
	      children.forEach(function (c) {
	        if (ret) {
	          return;
	        }
	        if (c.key === key) {
	          ret = c;
	        }
	      });
	    }
	    return ret;
	  },
	
	  findShownChildInChildrenByKey: function findShownChildInChildrenByKey(children, key, showProp) {
	    var ret = null;
	    if (children) {
	      children.forEach(function (c) {
	        if (c.key === key && c.props[showProp]) {
	          if (ret) {
	            throw new Error('two child with same key for <rc-animate> children');
	          }
	          ret = c;
	        }
	      });
	    }
	    return ret;
	  },
	
	  findHiddenChildInChildrenByKey: function findHiddenChildInChildrenByKey(children, key, showProp) {
	    var found = 0;
	    if (children) {
	      children.forEach(function (c) {
	        if (found) {
	          return;
	        }
	        found = c.key === key && !c.props[showProp];
	      });
	    }
	    return found;
	  },
	
	  isSameChildren: function isSameChildren(c1, c2, showProp) {
	    var same = c1.length === c2.length;
	    if (same) {
	      c1.forEach(function (child, i) {
	        var child2 = c2[i];
	        if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      });
	    }
	    return same;
	  },
	
	  mergeChildren: function mergeChildren(prev, next) {
	    var ret = [];
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextChildrenPending = {};
	    var pendingChildren = [];
	    prev.forEach(function (c) {
	      if (utils.findChildInChildrenByKey(next, c.key)) {
	        if (pendingChildren.length) {
	          nextChildrenPending[c.key] = pendingChildren;
	          pendingChildren = [];
	        }
	      } else {
	        pendingChildren.push(c);
	      }
	    });
	
	    next.forEach(function (c) {
	      if (nextChildrenPending.hasOwnProperty(c.key)) {
	        ret = ret.concat(nextChildrenPending[c.key]);
	      }
	      ret.push(c);
	    });
	
	    ret = ret.concat(pendingChildren);
	
	    return ret;
	  }
	};
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Divider = (function (_React$Component) {
	  _inherits(Divider, _React$Component);
	
	  function Divider() {
	    _classCallCheck(this, Divider);
	
	    _get(Object.getPrototypeOf(Divider.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Divider, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = props.className || '';
	      var rootPrefixCls = props.rootPrefixCls;
	      className += ' ' + (rootPrefixCls + '-item-divider');
	      return _react2['default'].createElement('li', _extends({}, props, { className: className }));
	    }
	  }]);
	
	  return Divider;
	})(_react2['default'].Component);
	
	Divider.defaultProps = {
	  disabled: true
	};
	
	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MenuMixin = __webpack_require__(46);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _objectAssign = __webpack_require__(16);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(28);
	
	var Menu = _react2['default'].createClass({
	  displayName: 'Menu',
	
	  propTypes: {
	    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultOpenKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    mode: _react2['default'].PropTypes.string,
	    onClick: _react2['default'].PropTypes.func,
	    onSelect: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    openTransitionName: _react2['default'].PropTypes.string,
	    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    level: _react2['default'].PropTypes.number,
	    eventKey: _react2['default'].PropTypes.string,
	    selectable: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      openSubMenuOnMouseEnter: true,
	      closeSubMenuOnMouseLeave: true,
	      selectable: true,
	      onClick: _util.noop,
	      onSelect: _util.noop,
	      onOpen: _util.noop,
	      onClose: _util.noop,
	      onDeselect: _util.noop,
	      defaultSelectedKeys: [],
	      defaultOpenKeys: []
	    };
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	    return {
	      selectedKeys: selectedKeys, openKeys: openKeys
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }
	    this.setState(props);
	  },
	
	  onDestroy: function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  },
	
	  onItemHover: function onItemHover(e) {
	    var _this = this;
	
	    var item = e.item;
	
	    // special for top sub menu
	    if (this.props.mode !== 'inline' && !this.props.closeSubMenuOnMouseLeave && item.isSubMenu) {
	      (function () {
	        var activeKey = _this.state.activeKey;
	        var activeItem = _this.instanceArray.filter(function (c) {
	          return c.props.eventKey === activeKey;
	        })[0];
	        if (activeItem && activeItem.props.open) {
	          _this.onOpenChange({
	            key: item.props.eventKey,
	            item: e.item,
	            open: true
	          });
	        }
	      })();
	    }
	
	    this.onCommonItemHover(e);
	  },
	
	  onSelect: function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _objectAssign2['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	
	  onClick: function onClick(e) {
	    var props = this.props;
	    props.onClick(e);
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    var openKeys = this.state.openKeys;
	    var props = this.props;
	    var changed = true;
	    if (e.open) {
	      changed = openKeys.indexOf(e.key) === -1;
	      if (changed) {
	        openKeys = openKeys.concat(e.key);
	      }
	    } else {
	      var index = openKeys.indexOf(e.key);
	      changed = index !== -1;
	      if (changed) {
	        openKeys = openKeys.concat();
	        openKeys.splice(index, 1);
	      }
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        // hack: batch does not update state
	        this.state.openKeys = openKeys;
	        this.setState({ openKeys: openKeys });
	      }
	      var info = (0, _objectAssign2['default'])({ openKeys: openKeys }, e);
	      if (e.open) {
	        props.onOpen(info);
	      } else {
	        props.onClose(info);
	      }
	    }
	  },
	
	  onDeselect: function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _objectAssign2['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	
	  getOpenTransitionName: function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  },
	
	  renderMenuItem: function renderMenuItem(c, i) {
	    var key = (0, _util.getKeyFromChildrenIndex)(c, this.props.eventKey, i);
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      open: state.openKeys.indexOf(key) !== -1,
	      selectedKeys: state.selectedKeys,
	      selected: state.selectedKeys.indexOf(key) !== -1,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, extraProps);
	  },
	
	  render: function render() {
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  },
	
	  isInlineMode: function isInlineMode() {
	    return this.props.mode === 'inline';
	  },
	
	  lastOpenSubMenu: function lastOpenSubMenu() {
	    var _this2 = this;
	
	    var lastOpen = [];
	    if (this.state.openKeys.length) {
	      lastOpen = this.instanceArray.filter(function (c) {
	        return _this2.state.openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  }
	});
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(5);
	
	var MenuItem = (function (_React$Component) {
	  _inherits(MenuItem, _React$Component);
	
	  function MenuItem(props) {
	    var _this = this;
	
	    _classCallCheck(this, MenuItem);
	
	    _get(Object.getPrototypeOf(MenuItem.prototype), 'constructor', this).call(this, props);
	    ['onKeyDown', 'onMouseLeave', 'onMouseEnter', 'onClick'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	  }
	
	  _createClass(MenuItem, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var props = this.props;
	      if (props.onDestroy) {
	        props.onDestroy(props.eventKey);
	      }
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      var keyCode = e.keyCode;
	      if (keyCode === _rcUtil.KeyCode.ENTER) {
	        this.onClick(e);
	        return true;
	      }
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave() {
	      var eventKey = this.props.eventKey;
	      this.props.onItemHover({
	        key: eventKey,
	        item: this,
	        hover: false,
	        trigger: 'mouseleave'
	      });
	    }
	  }, {
	    key: 'onMouseEnter',
	    value: function onMouseEnter() {
	      var props = this.props;
	      var eventKey = props.eventKey;
	      props.onItemHover({
	        key: eventKey,
	        item: this,
	        hover: true,
	        trigger: 'mouseenter'
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      var props = this.props;
	      var eventKey = props.eventKey;
	      var info = {
	        key: eventKey,
	        keyPath: [eventKey],
	        item: this,
	        domEvent: e
	      };
	      props.onClick(info);
	      if (props.multiple) {
	        if (props.selected) {
	          props.onDeselect(info);
	        } else {
	          props.onSelect(info);
	        }
	      } else if (!props.selected) {
	        props.onSelect(info);
	      }
	    }
	  }, {
	    key: 'getPrefixCls',
	    value: function getPrefixCls() {
	      return this.props.rootPrefixCls + '-item';
	    }
	  }, {
	    key: 'getActiveClassName',
	    value: function getActiveClassName() {
	      return this.getPrefixCls() + '-active';
	    }
	  }, {
	    key: 'getSelectedClassName',
	    value: function getSelectedClassName() {
	      return this.getPrefixCls() + '-selected';
	    }
	  }, {
	    key: 'getDisabledClassName',
	    value: function getDisabledClassName() {
	      return this.getPrefixCls() + '-disabled';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var classes = {};
	      classes[this.getActiveClassName()] = !props.disabled && props.active;
	      classes[this.getSelectedClassName()] = props.selected;
	      classes[this.getDisabledClassName()] = props.disabled;
	      classes[this.getPrefixCls()] = true;
	      var attrs = {
	        title: props.title,
	        className: (0, _rcUtil.joinClasses)(props.className, (0, _rcUtil.classSet)(classes)),
	        role: 'menuitem',
	        'aria-selected': props.selected,
	        'aria-disabled': props.disabled
	      };
	      var mouseEvent = {};
	      if (!props.disabled) {
	        mouseEvent = {
	          onClick: this.onClick,
	          onMouseLeave: this.onMouseLeave,
	          onMouseEnter: this.onMouseEnter
	        };
	      }
	      var style = {};
	      if (props.mode === 'inline') {
	        style.paddingLeft = props.inlineIndent * props.level;
	      }
	      return _react2['default'].createElement(
	        'li',
	        _extends({ style: style
	        }, attrs, mouseEvent),
	        props.children
	      );
	    }
	  }]);
	
	  return MenuItem;
	})(_react2['default'].Component);
	
	MenuItem.propTypes = {
	  rootPrefixCls: _react2['default'].PropTypes.string,
	  eventKey: _react2['default'].PropTypes.string,
	  active: _react2['default'].PropTypes.bool,
	  selected: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool,
	  title: _react2['default'].PropTypes.string,
	  onSelect: _react2['default'].PropTypes.func,
	  onClick: _react2['default'].PropTypes.func,
	  onDeselect: _react2['default'].PropTypes.func,
	  onItemHover: _react2['default'].PropTypes.func,
	  onDestroy: _react2['default'].PropTypes.func
	};
	
	MenuItem.defaultProps = {
	  onSelect: function onSelect() {},
	  onMouseEnter: function onMouseEnter() {}
	};
	
	exports['default'] = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var MenuItemGroup = (function (_React$Component) {
	  _inherits(MenuItemGroup, _React$Component);
	
	  function MenuItemGroup() {
	    _classCallCheck(this, MenuItemGroup);
	
	    _get(Object.getPrototypeOf(MenuItemGroup.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(MenuItemGroup, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var className = props.className || '';
	      var rootPrefixCls = props.rootPrefixCls;
	      className += ' ' + rootPrefixCls + '-item-group';
	      var titleClassName = rootPrefixCls + '-item-group-title';
	      var listClassName = rootPrefixCls + '-item-group-list';
	      return _react2['default'].createElement(
	        'li',
	        { className: className },
	        _react2['default'].createElement(
	          'div',
	          { className: titleClassName },
	          props.title
	        ),
	        _react2['default'].createElement(
	          'ul',
	          { className: listClassName },
	          _react2['default'].Children.map(props.children, props.renderMenuItem)
	        )
	      );
	    }
	  }]);
	
	  return MenuItemGroup;
	})(_react2['default'].Component);
	
	MenuItemGroup.defaultProps = {
	  // skip key down loop
	  disabled: true
	};
	
	exports['default'] = MenuItemGroup;
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _SubPopupMenu = __webpack_require__(114);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(5);
	
	var _objectAssign = __webpack_require__(16);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var SubMenu = _react2['default'].createClass({
	  displayName: 'SubMenu',
	
	  propTypes: {
	    title: _react2['default'].PropTypes.node,
	    onClick: _react2['default'].PropTypes.func,
	    onOpenChange: _react2['default'].PropTypes.func,
	    rootPrefixCls: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.string,
	    multiple: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    open: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
	    onDeselect: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    onItemHover: _react2['default'].PropTypes.func
	  },
	
	  mixins: [__webpack_require__(113)],
	
	  getInitialState: function getInitialState() {
	    this.isSubMenu = 1;
	    return {
	      defaultActiveFirst: false
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      title: ''
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	  },
	
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	
	    if (keyCode === _rcUtil.KeyCode.ENTER) {
	      this.onClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }
	
	    if (keyCode === _rcUtil.KeyCode.RIGHT) {
	      if (this.props.open) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _rcUtil.KeyCode.LEFT) {
	      var handled = undefined;
	      if (this.props.open) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (this.props.open && (keyCode === _rcUtil.KeyCode.UP || keyCode === _rcUtil.KeyCode.DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  },
	
	  onSubTreeMouseEnter: function onSubTreeMouseEnter() {
	    if (this.leaveTimer) {
	      clearTimeout(this.leaveTimer);
	      this.leaveTimer = null;
	    }
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    if (this.leaveTimer) {
	      clearTimeout(this.leaveTimer);
	      this.leaveTimer = null;
	    }
	    var props = this.props;
	    props.onItemHover({
	      key: this.props.eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      this.triggerOpenChange(true);
	    }
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    var _this = this;
	
	    // prevent popup menu and submenu gap
	    this.leaveTimer = setTimeout(function () {
	      // leave whole sub tree
	      // still active
	      if (_this.isMounted() && _this.props.active) {
	        _this.props.onItemHover({
	          key: _this.props.eventKey,
	          item: _this,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	      if (_this.isMounted() && _this.props.open) {
	        if (_this.props.closeSubMenuOnMouseLeave) {
	          _this.triggerOpenChange(false);
	        }
	      }
	    }, 100);
	  },
	
	  onClick: function onClick() {
	    if (this.props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.props.open, 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	
	  onSubMenuClick: function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  },
	
	  onSelect: function onSelect(info) {
	    this.props.onSelect(info);
	  },
	
	  onDeselect: function onDeselect(info) {
	    this.props.onDeselect(info);
	  },
	
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	
	  getOpenClassName: function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  },
	
	  renderChildren: function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: props.open,
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2['default'].createElement(
	      _SubPopupMenu2['default'],
	      baseProps,
	      children
	    );
	  },
	
	  render: function render() {
	    var _classes;
	
	    this.haveOpen = this.haveOpen || this.props.open;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);
	
	    classes[this.getOpenClassName()] = this.props.open;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    this._menuId = this._menuId || (0, _rcUtil.guid)();
	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var clickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      clickEvents = {
	        onClick: this.onClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onSubTreeMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement(
	      'li',
	      _extends({ className: (0, _rcUtil.classSet)(classes) }, mouseEvents),
	      _react2['default'].createElement(
	        'div',
	        _extends({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, clickEvents, {
	          'aria-open': props.open,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  },
	
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	
	  addKeyPath: function addKeyPath(info) {
	    return (0, _objectAssign2['default'])({}, info, {
	      keyPath: info.keyPath.concat(this.props.eventKey)
	    });
	  },
	
	  triggerOpenChange: function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  }
	});
	
	exports['default'] = SubMenu;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcUtil = __webpack_require__(5);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	exports['default'] = {
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.mode !== 'inline') {
	      if (this.props.open) {
	        this.bindRootCloseHandlers();
	      } else {
	        this.unbindRootCloseHandlers();
	      }
	    }
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === _rcUtil.KeyCode.ESC) {
	      this.props.onItemHover({
	        key: this.props.eventKey,
	        item: this,
	        hover: false
	      });
	    }
	  },
	
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if (_rcUtil2['default'].Dom.contains(_react2['default'].findDOMNode(this), e.target)) {
	      return;
	    }
	    var props = this.props;
	    props.onItemHover({
	      hover: false,
	      item: this,
	      key: this.props.eventKey
	    });
	    this.triggerOpenChange(false);
	  },
	
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    if (!this._onDocumentClickListener) {
	      this._onDocumentClickListener = _rcUtil2['default'].Dom.addEventListener(document, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = _rcUtil2['default'].Dom.addEventListener(document, 'keyup', this.handleDocumentKeyUp);
	    }
	  },
	
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	      this._onDocumentClickListener = null;
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	      this._onDocumentKeyupListener = null;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MenuMixin = __webpack_require__(46);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _objectAssign = __webpack_require__(16);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(28);
	
	var _rcAnimate = __webpack_require__(21);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var SubPopupMenu = _react2['default'].createClass({
	  displayName: 'SubPopupMenu',
	
	  propTypes: {
	    onSelect: _react2['default'].PropTypes.func,
	    onClick: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    onOpenChange: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    openTransitionName: _react2['default'].PropTypes.string,
	    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  onDeselect: function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  },
	
	  onSelect: function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  },
	
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	
	  onItemHover: function onItemHover(e) {
	    this.onCommonItemHover(e);
	  },
	
	  getOpenTransitionName: function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  },
	
	  renderMenuItem: function renderMenuItem(c, i) {
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(c, props.eventKey, i);
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      open: props.openKeys.indexOf(key) !== -1,
	      selected: props.selectedKeys.indexOf(key) !== -1,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, extraProps);
	  },
	
	  render: function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if (typeof props.openAnimation === 'object') {
	      animProps.animation = (0, _objectAssign2['default'])({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      _extends({}, animProps, {
	        showProp: 'data-visible',
	        component: '',
	        transitionAppear: transitionAppear }),
	      this.renderRoot(props)
	    );
	  }
	});
	
	exports['default'] = SubPopupMenu;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var OptGroup = (function (_React$Component) {
	  _inherits(OptGroup, _React$Component);
	
	  function OptGroup() {
	    _classCallCheck(this, OptGroup);
	
	    _get(Object.getPrototypeOf(OptGroup.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return OptGroup;
	})(_react2['default'].Component);
	
	exports['default'] = OptGroup;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.getSelectKeys = getSelectKeys;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcMenu = __webpack_require__(30);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function getValuePropValue(c) {
	  var props = c.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (c.key) {
	    return c.key;
	  }
	  throw new Error('no key or value for ' + c);
	}
	
	function getPropValue(c, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(c);
	  }
	  return c.props[prop];
	}
	
	function isCombobox(props) {
	  return props.combobox;
	}
	
	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}
	
	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}
	
	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}
	
	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}
	
	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2['default'].Children.forEach(menuItems, function (item) {
	    if (item.type === _rcMenu.ItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (value.indexOf(itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function mirror(o) {
	  return o;
	}
	
	module.exports = function (children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	module.exports = function (children) {
	  var ret = [];
	  React.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	};


/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = function (target, eventType, callback) {
	  if (target.addEventListener) {
	    target.addEventListener(eventType, callback, false);
	    return {
	      remove: function () {
	        target.removeEventListener(eventType, callback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, callback);
	    return {
	      remove: function () {
	        target.detachEvent('on' + eventType, callback);
	      }
	    };
	  }
	};


/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = function (root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};


/***/ },
/* 121 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	      // Function keys don't generate text
	    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO &&
	    keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO &&
	    keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A &&
	    keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactComponentWithPureRenderMixin
	*/
	
	"use strict";
	
	var shallowEqual = __webpack_require__(47);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/vendor/stubs/cx.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  if (typeof classNames === 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}
	
	module.exports = cx;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = arguments;
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;


/***/ },
/* 125 */
/***/ function(module, exports) {

	var seed = 0;
	module.exports = function () {
	  return Date.now() + '_' + (seed++);
	};


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This file contains an unmodified version of:
	 * https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	 *
	 * This source code is licensed under the BSD-style license found here:
	 * https://github.com/facebook/react/blob/v0.12.0/LICENSE
	 * An additional grant of patent rights can be found here:
	 * https://github.com/facebook/react/blob/v0.12.0/PATENTS
	 */
	
	"use strict";
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	
	function joinClasses(className /*, ... */ ) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * Tools
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.clone = clone;
	exports.defaults = defaults;
	exports.forEach = forEach;
	exports.removeDocumentMeta = removeDocumentMeta;
	
	function clone(source) {
	  return source ? JSON.parse(JSON.stringify(source)) : {};
	}
	
	function defaults(target, source) {
	  return Object.keys(source).reduce(function (acc, key) {
	    if (!target.hasOwnProperty(key)) {
	      target[key] = source[key];
	    } else if (typeof target[key] === 'object' && !Array.isArray(target[key]) && target[key]) {
	      defaults(target[key], source[key]);
	    }
	
	    return target;
	  }, target);
	}
	
	function forEach(arr, fn) {
	  Array.prototype.slice.call(arr || []).forEach(fn);
	}
	
	/**
	 * Validation
	 */
	
	// const VALID_PROPS = ['title', 'description', 'canonical', 'meta', 'link'];
	
	// export function isValidProp ( propKey ) {
	//   return ~VALID_PROPS.indexOf( propKey );
	// }
	
	/**
	 * Document manipulation
	 */
	
	function removeNode(node) {
	  node.parentNode.removeChild(node);
	}
	
	function removeDocumentMeta() {
	  forEach(document.querySelectorAll('head [data-rdm]'), removeNode);
	}


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fbjsLibExecutionEnvironment = __webpack_require__(130);
	
	var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);
	
	var _fbjsLibShallowEqual = __webpack_require__(131);
	
	var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = undefined;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = (function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        _Component.apply(this, arguments);
	      }
	
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may ony call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !_fbjsLibShallowEqual2['default'](nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2['default'].createElement(WrappedComponent, this.props);
	      };
	
	      _createClass(SideEffect, null, [{
	        key: 'displayName',
	
	        // Try to use displayName of wrapped component
	        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',
	
	        // Expose canUseDOM so tests can monkeypatch it
	        enumerable: true
	      }, {
	        key: 'canUseDOM',
	        value: _fbjsLibExecutionEnvironment2['default'].canUseDOM,
	        enumerable: true
	      }]);
	
	      return SideEffect;
	    })(_react.Component);
	
	    return SideEffect;
	  };
	};

/***/ },
/* 130 */
22,
/* 131 */
294,
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(156);


/***/ },
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	
	/*************************
	   Velocity jQuery Shim
	*************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	
	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	;(function (window) {
	    /***************
	         Setup
	    ***************/
	
	    /* If jQuery is already loaded, there's no point in loading this shim. */
	    if (window.jQuery) {
	        return;
	    }
	
	    /* jQuery base. */
	    var $ = function (selector, context) {
	        return new $.fn.init(selector, context);
	    };
	
	    /********************
	       Private Methods
	    ********************/
	
	    /* jQuery */
	    $.isWindow = function (obj) {
	        /* jshint eqeqeq: false */
	        return obj != null && obj == obj.window;
	    };
	
	    /* jQuery */
	    $.type = function (obj) {
	        if (obj == null) {
	            return obj + "";
	        }
	
	        return typeof obj === "object" || typeof obj === "function" ?
	            class2type[toString.call(obj)] || "object" :
	            typeof obj;
	    };
	
	    /* jQuery */
	    $.isArray = Array.isArray || function (obj) {
	        return $.type(obj) === "array";
	    };
	
	    /* jQuery */
	    function isArraylike (obj) {
	        var length = obj.length,
	            type = $.type(obj);
	
	        if (type === "function" || $.isWindow(obj)) {
	            return false;
	        }
	
	        if (obj.nodeType === 1 && length) {
	            return true;
	        }
	
	        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
	    }
	
	    /***************
	       $ Methods
	    ***************/
	
	    /* jQuery: Support removed for IE<9. */
	    $.isPlainObject = function (obj) {
	        var key;
	
	        if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
	            return false;
	        }
	
	        try {
	            if (obj.constructor &&
	                !hasOwn.call(obj, "constructor") &&
	                !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
	                return false;
	            }
	        } catch (e) {
	            return false;
	        }
	
	        for (key in obj) {}
	
	        return key === undefined || hasOwn.call(obj, key);
	    };
	
	    /* jQuery */
	    $.each = function(obj, callback, args) {
	        var value,
	            i = 0,
	            length = obj.length,
	            isArray = isArraylike(obj);
	
	        if (args) {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.apply(obj[i], args);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.apply(obj[i], args);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	
	        } else {
	            if (isArray) {
	                for (; i < length; i++) {
	                    value = callback.call(obj[i], i, obj[i]);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in obj) {
	                    value = callback.call(obj[i], i, obj[i]);
	
	                    if (value === false) {
	                        break;
	                    }
	                }
	            }
	        }
	
	        return obj;
	    };
	
	    /* Custom */
	    $.data = function (node, key, value) {
	        /* $.getData() */
	        if (value === undefined) {
	            var id = node[$.expando],
	                store = id && cache[id];
	
	            if (key === undefined) {
	                return store;
	            } else if (store) {
	                if (key in store) {
	                    return store[key];
	                }
	            }
	        /* $.setData() */
	        } else if (key !== undefined) {
	            var id = node[$.expando] || (node[$.expando] = ++$.uuid);
	
	            cache[id] = cache[id] || {};
	            cache[id][key] = value;
	
	            return value;
	        }
	    };
	
	    /* Custom */
	    $.removeData = function (node, keys) {
	        var id = node[$.expando],
	            store = id && cache[id];
	
	        if (store) {
	            $.each(keys, function(_, key) {
	                delete store[key];
	            });
	        }
	    };
	
	    /* jQuery */
	    $.extend = function () {
	        var src, copyIsArray, copy, name, options, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false;
	
	        if (typeof target === "boolean") {
	            deep = target;
	
	            target = arguments[i] || {};
	            i++;
	        }
	
	        if (typeof target !== "object" && $.type(target) !== "function") {
	            target = {};
	        }
	
	        if (i === length) {
	            target = this;
	            i--;
	        }
	
	        for (; i < length; i++) {
	            if ((options = arguments[i]) != null) {
	                for (name in options) {
	                    src = target[name];
	                    copy = options[name];
	
	                    if (target === copy) {
	                        continue;
	                    }
	
	                    if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
	                        if (copyIsArray) {
	                            copyIsArray = false;
	                            clone = src && $.isArray(src) ? src : [];
	
	                        } else {
	                            clone = src && $.isPlainObject(src) ? src : {};
	                        }
	
	                        target[name] = $.extend(deep, clone, copy);
	
	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }
	
	        return target;
	    };
	
	    /* jQuery 1.4.3 */
	    $.queue = function (elem, type, data) {
	        function $makeArray (arr, results) {
	            var ret = results || [];
	
	            if (arr != null) {
	                if (isArraylike(Object(arr))) {
	                    /* $.merge */
	                    (function(first, second) {
	                        var len = +second.length,
	                            j = 0,
	                            i = first.length;
	
	                        while (j < len) {
	                            first[i++] = second[j++];
	                        }
	
	                        if (len !== len) {
	                            while (second[j] !== undefined) {
	                                first[i++] = second[j++];
	                            }
	                        }
	
	                        first.length = i;
	
	                        return first;
	                    })(ret, typeof arr === "string" ? [arr] : arr);
	                } else {
	                    [].push.call(ret, arr);
	                }
	            }
	
	            return ret;
	        }
	
	        if (!elem) {
	            return;
	        }
	
	        type = (type || "fx") + "queue";
	
	        var q = $.data(elem, type);
	
	        if (!data) {
	            return q || [];
	        }
	
	        if (!q || $.isArray(data)) {
	            q = $.data(elem, type, $makeArray(data));
	        } else {
	            q.push(data);
	        }
	
	        return q;
	    };
	
	    /* jQuery 1.4.3 */
	    $.dequeue = function (elems, type) {
	        /* Custom: Embed element iteration. */
	        $.each(elems.nodeType ? [ elems ] : elems, function(i, elem) {
	            type = type || "fx";
	
	            var queue = $.queue(elem, type),
	                fn = queue.shift();
	
	            if (fn === "inprogress") {
	                fn = queue.shift();
	            }
	
	            if (fn) {
	                if (type === "fx") {
	                    queue.unshift("inprogress");
	                }
	
	                fn.call(elem, function() {
	                    $.dequeue(elem, type);
	                });
	            }
	        });
	    };
	
	    /******************
	       $.fn Methods
	    ******************/
	
	    /* jQuery */
	    $.fn = $.prototype = {
	        init: function (selector) {
	            /* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
	            if (selector.nodeType) {
	                this[0] = selector;
	
	                return this;
	            } else {
	                throw new Error("Not a DOM node.");
	            }
	        },
	
	        offset: function () {
	            /* jQuery altered code: Dropped disconnected DOM node checking. */
	            var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
	
	            return {
	                top: box.top + (window.pageYOffset || document.scrollTop  || 0)  - (document.clientTop  || 0),
	                left: box.left + (window.pageXOffset || document.scrollLeft  || 0) - (document.clientLeft || 0)
	            };
	        },
	
	        position: function () {
	            /* jQuery */
	            function offsetParent() {
	                var offsetParent = this.offsetParent || document;
	
	                while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
	                    offsetParent = offsetParent.offsetParent;
	                }
	
	                return offsetParent || document;
	            }
	
	            /* Zepto */
	            var elem = this[0],
	                offsetParent = offsetParent.apply(elem),
	                offset = this.offset(),
	                parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()
	
	            offset.top -= parseFloat(elem.style.marginTop) || 0;
	            offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
	            if (offsetParent.style) {
	                parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
	                parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
	            }
	
	            return {
	                top: offset.top - parentOffset.top,
	                left: offset.left - parentOffset.left
	            };
	        }
	    };
	
	    /**********************
	       Private Variables
	    **********************/
	
	    /* For $.data() */
	    var cache = {};
	    $.expando = "velocity" + (new Date().getTime());
	    $.uuid = 0;
	
	    /* For $.queue() */
	    var class2type = {},
	        hasOwn = class2type.hasOwnProperty,
	        toString = class2type.toString;
	
	    var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	    for (var i = 0; i < types.length; i++) {
	        class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
	    }
	
	    /* Makes $(node) possible, without having to call init. */
	    $.fn.init.prototype = $.fn;
	
	    /* Globalize Velocity onto the window, and assign its Utilities property. */
	    window.Velocity = { Utilities: $ };
	})(window);
	
	/******************
	    Velocity.js
	******************/
	
	;(function (factory) {
	    /* CommonJS module. */
	    if (typeof module === "object" && typeof module.exports === "object") {
	        module.exports = factory();
	    /* AMD module. */
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    /* Browser globals. */
	    } else {
	        factory();
	    }
	}(function() {
	return function (global, window, document, undefined) {
	
	    /***************
	        Summary
	    ***************/
	
	    /*
	    - CSS: CSS stack that works independently from the rest of Velocity.
	    - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
	      - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
	      - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
	                  Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
	      - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	    - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
	    - completeCall(): Handles the cleanup process for each Velocity call.
	    */
	
	    /*********************
	       Helper Functions
	    *********************/
	
	    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
	    var IE = (function() {
	        if (document.documentMode) {
	            return document.documentMode;
	        } else {
	            for (var i = 7; i > 4; i--) {
	                var div = document.createElement("div");
	
	                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
	                if (div.getElementsByTagName("span").length) {
	                    div = null;
	
	                    return i;
	                }
	            }
	        }
	
	        return undefined;
	    })();
	
	    /* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
	    var rAFShim = (function() {
	        var timeLast = 0;
	
	        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
	            var timeCurrent = (new Date()).getTime(),
	                timeDelta;
	
	            /* Dynamically set delay on a per-tick basis to match 60fps. */
	            /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
	            timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
	            timeLast = timeCurrent + timeDelta;
	
	            return setTimeout(function() { callback(timeCurrent + timeDelta); }, timeDelta);
	        };
	    })();
	
	    /* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
	    function compactSparseArray (array) {
	        var index = -1,
	            length = array ? array.length : 0,
	            result = [];
	
	        while (++index < length) {
	            var value = array[index];
	
	            if (value) {
	                result.push(value);
	            }
	        }
	
	        return result;
	    }
	
	    function sanitizeElements (elements) {
	        /* Unwrap jQuery/Zepto objects. */
	        if (Type.isWrapped(elements)) {
	            elements = [].slice.call(elements);
	        /* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
	        } else if (Type.isNode(elements)) {
	            elements = [ elements ];
	        }
	
	        return elements;
	    }
	
	    var Type = {
	        isString: function (variable) {
	            return (typeof variable === "string");
	        },
	        isArray: Array.isArray || function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Array]";
	        },
	        isFunction: function (variable) {
	            return Object.prototype.toString.call(variable) === "[object Function]";
	        },
	        isNode: function (variable) {
	            return variable && variable.nodeType;
	        },
	        /* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
	        isNodeList: function (variable) {
	            return typeof variable === "object" &&
	                /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
	                variable.length !== undefined &&
	                (variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
	        },
	        /* Determine if variable is a wrapped jQuery or Zepto element. */
	        isWrapped: function (variable) {
	            return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
	        },
	        isSVG: function (variable) {
	            return window.SVGElement && (variable instanceof window.SVGElement);
	        },
	        isEmptyObject: function (variable) {
	            for (var name in variable) {
	                return false;
	            }
	
	            return true;
	        }
	    };
	
	    /*****************
	       Dependencies
	    *****************/
	
	    var $,
	        isJQuery = false;
	
	    if (global.fn && global.fn.jquery) {
	        $ = global;
	        isJQuery = true;
	    } else {
	        $ = window.Velocity.Utilities;
	    }
	
	    if (IE <= 8 && !isJQuery) {
	        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
	    } else if (IE <= 7) {
	        /* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
	        jQuery.fn.velocity = jQuery.fn.animate;
	
	        /* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
	        return;
	    }
	
	    /*****************
	        Constants
	    *****************/
	
	    var DURATION_DEFAULT = 400,
	        EASING_DEFAULT = "swing";
	
	    /*************
	        State
	    *************/
	
	    var Velocity = {
	        /* Container for page-wide Velocity state data. */
	        State: {
	            /* Detect mobile devices to determine if mobileHA should be turned on. */
	            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	            /* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
	            isAndroid: /Android/i.test(navigator.userAgent),
	            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
	            isChrome: window.chrome,
	            isFirefox: /Firefox/i.test(navigator.userAgent),
	            /* Create a cached element for re-use when checking for CSS property prefixes. */
	            prefixElement: document.createElement("div"),
	            /* Cache every prefix match to avoid repeating lookups. */
	            prefixMatches: {},
	            /* Cache the anchor used for animating window scrolling. */
	            scrollAnchor: null,
	            /* Cache the browser-specific property names associated with the scroll anchor. */
	            scrollPropertyLeft: null,
	            scrollPropertyTop: null,
	            /* Keep track of whether our RAF tick is running. */
	            isTicking: false,
	            /* Container for every in-progress call to Velocity. */
	            calls: []
	        },
	        /* Velocity's custom CSS stack. Made global for unit testing. */
	        CSS: { /* Defined below. */ },
	        /* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
	        Utilities: $,
	        /* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
	        Redirects: { /* Manually registered by the user. */ },
	        Easings: { /* Defined below. */ },
	        /* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
	        Promise: window.Promise,
	        /* Velocity option defaults, which can be overriden by the user. */
	        defaults: {
	            queue: "",
	            duration: DURATION_DEFAULT,
	            easing: EASING_DEFAULT,
	            begin: undefined,
	            complete: undefined,
	            progress: undefined,
	            display: undefined,
	            visibility: undefined,
	            loop: false,
	            delay: false,
	            mobileHA: true,
	            /* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
	            _cacheValues: true
	        },
	        /* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
	        init: function (element) {
	            $.data(element, "velocity", {
	                /* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
	                isSVG: Type.isSVG(element),
	                /* Keep track of whether the element is currently being animated by Velocity.
	                   This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
	                isAnimating: false,
	                /* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	                computedStyle: null,
	                /* Tween data is cached for each animation on the element so that data can be passed across calls --
	                   in particular, end values are used as subsequent start values in consecutive Velocity calls. */
	                tweensContainer: null,
	                /* The full root property values of each CSS hook being animated on this element are cached so that:
	                   1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
	                   2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
	                rootPropertyValueCache: {},
	                /* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
	                transformCache: {}
	            });
	        },
	        /* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
	        hook: null, /* Defined below. */
	        /* Velocity-wide animation time remapping for testing purposes. */
	        mock: false,
	        version: { major: 1, minor: 2, patch: 2 },
	        /* Set to 1 or 2 (most verbose) to output debug info to console. */
	        debug: false
	    };
	
	    /* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
	    if (window.pageYOffset !== undefined) {
	        Velocity.State.scrollAnchor = window;
	        Velocity.State.scrollPropertyLeft = "pageXOffset";
	        Velocity.State.scrollPropertyTop = "pageYOffset";
	    } else {
	        Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
	        Velocity.State.scrollPropertyLeft = "scrollLeft";
	        Velocity.State.scrollPropertyTop = "scrollTop";
	    }
	
	    /* Shorthand alias for jQuery's $.data() utility. */
	    function Data (element) {
	        /* Hardcode a reference to the plugin name. */
	        var response = $.data(element, "velocity");
	
	        /* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
	        return response === null ? undefined : response;
	    };
	
	    /**************
	        Easing
	    **************/
	
	    /* Step easing generator. */
	    function generateStep (steps) {
	        return function (p) {
	            return Math.round(p * steps) * (1 / steps);
	        };
	    }
	
	    /* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    function generateBezier (mX1, mY1, mX2, mY2) {
	        var NEWTON_ITERATIONS = 4,
	            NEWTON_MIN_SLOPE = 0.001,
	            SUBDIVISION_PRECISION = 0.0000001,
	            SUBDIVISION_MAX_ITERATIONS = 10,
	            kSplineTableSize = 11,
	            kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
	            float32ArraySupported = "Float32Array" in window;
	
	        /* Must contain four arguments. */
	        if (arguments.length !== 4) {
	            return false;
	        }
	
	        /* Arguments must be numbers. */
	        for (var i = 0; i < 4; ++i) {
	            if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
	                return false;
	            }
	        }
	
	        /* X values must be in the [0, 1] range. */
	        mX1 = Math.min(mX1, 1);
	        mX2 = Math.min(mX2, 1);
	        mX1 = Math.max(mX1, 0);
	        mX2 = Math.max(mX2, 0);
	
	        var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
	        function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
	        function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
	        function C (aA1)      { return 3.0 * aA1; }
	
	        function calcBezier (aT, aA1, aA2) {
	            return ((A(aA1, aA2)*aT + B(aA1, aA2))*aT + C(aA1))*aT;
	        }
	
	        function getSlope (aT, aA1, aA2) {
	            return 3.0 * A(aA1, aA2)*aT*aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	        }
	
	        function newtonRaphsonIterate (aX, aGuessT) {
	            for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	                var currentSlope = getSlope(aGuessT, mX1, mX2);
	
	                if (currentSlope === 0.0) return aGuessT;
	
	                var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	                aGuessT -= currentX / currentSlope;
	            }
	
	            return aGuessT;
	        }
	
	        function calcSampleValues () {
	            for (var i = 0; i < kSplineTableSize; ++i) {
	                mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	            }
	        }
	
	        function binarySubdivide (aX, aA, aB) {
	            var currentX, currentT, i = 0;
	
	            do {
	                currentT = aA + (aB - aA) / 2.0;
	                currentX = calcBezier(currentT, mX1, mX2) - aX;
	                if (currentX > 0.0) {
	                  aB = currentT;
	                } else {
	                  aA = currentT;
	                }
	            } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
	            return currentT;
	        }
	
	        function getTForX (aX) {
	            var intervalStart = 0.0,
	                currentSample = 1,
	                lastSample = kSplineTableSize - 1;
	
	            for (; currentSample != lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
	                intervalStart += kSampleStepSize;
	            }
	
	            --currentSample;
	
	            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample+1] - mSampleValues[currentSample]),
	                guessForT = intervalStart + dist * kSampleStepSize,
	                initialSlope = getSlope(guessForT, mX1, mX2);
	
	            if (initialSlope >= NEWTON_MIN_SLOPE) {
	                return newtonRaphsonIterate(aX, guessForT);
	            } else if (initialSlope == 0.0) {
	                return guessForT;
	            } else {
	                return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
	            }
	        }
	
	        var _precomputed = false;
	
	        function precompute() {
	            _precomputed = true;
	            if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
	        }
	
	        var f = function (aX) {
	            if (!_precomputed) precompute();
	            if (mX1 === mY1 && mX2 === mY2) return aX;
	            if (aX === 0) return 0;
	            if (aX === 1) return 1;
	
	            return calcBezier(getTForX(aX), mY1, mY2);
	        };
	
	        f.getControlPoints = function() { return [{ x: mX1, y: mY1 }, { x: mX2, y: mY2 }]; };
	
	        var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
	        f.toString = function () { return str; };
	
	        return f;
	    }
	
	    /* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
	    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
	       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
	    var generateSpringRK4 = (function () {
	        function springAccelerationForState (state) {
	            return (-state.tension * state.x) - (state.friction * state.v);
	        }
	
	        function springEvaluateStateWithDerivative (initialState, dt, derivative) {
	            var state = {
	                x: initialState.x + derivative.dx * dt,
	                v: initialState.v + derivative.dv * dt,
	                tension: initialState.tension,
	                friction: initialState.friction
	            };
	
	            return { dx: state.v, dv: springAccelerationForState(state) };
	        }
	
	        function springIntegrateState (state, dt) {
	            var a = {
	                    dx: state.v,
	                    dv: springAccelerationForState(state)
	                },
	                b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
	                c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
	                d = springEvaluateStateWithDerivative(state, dt, c),
	                dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
	                dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
	            state.x = state.x + dxdt * dt;
	            state.v = state.v + dvdt * dt;
	
	            return state;
	        }
	
	        return function springRK4Factory (tension, friction, duration) {
	
	            var initState = {
	                    x: -1,
	                    v: 0,
	                    tension: null,
	                    friction: null
	                },
	                path = [0],
	                time_lapsed = 0,
	                tolerance = 1 / 10000,
	                DT = 16 / 1000,
	                have_duration, dt, last_state;
	
	            tension = parseFloat(tension) || 500;
	            friction = parseFloat(friction) || 20;
	            duration = duration || null;
	
	            initState.tension = tension;
	            initState.friction = friction;
	
	            have_duration = duration !== null;
	
	            /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
	            if (have_duration) {
	                /* Run the simulation without a duration. */
	                time_lapsed = springRK4Factory(tension, friction);
	                /* Compute the adjusted time delta. */
	                dt = time_lapsed / duration * DT;
	            } else {
	                dt = DT;
	            }
	
	            while (true) {
	                /* Next/step function .*/
	                last_state = springIntegrateState(last_state || initState, dt);
	                /* Store the position. */
	                path.push(1 + last_state.x);
	                time_lapsed += 16;
	                /* If the change threshold is reached, break. */
	                if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
	                    break;
	                }
	            }
	
	            /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
	               computed path and returns a snapshot of the position according to a given percentComplete. */
	            return !have_duration ? time_lapsed : function(percentComplete) { return path[ (percentComplete * (path.length - 1)) | 0 ]; };
	        };
	    }());
	
	    /* jQuery easings. */
	    Velocity.Easings = {
	        linear: function(p) { return p; },
	        swing: function(p) { return 0.5 - Math.cos( p * Math.PI ) / 2 },
	        /* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
	        spring: function(p) { return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6)); }
	    };
	
	    /* CSS3 and Robert Penner easings. */
	    $.each(
	        [
	            [ "ease", [ 0.25, 0.1, 0.25, 1.0 ] ],
	            [ "ease-in", [ 0.42, 0.0, 1.00, 1.0 ] ],
	            [ "ease-out", [ 0.00, 0.0, 0.58, 1.0 ] ],
	            [ "ease-in-out", [ 0.42, 0.0, 0.58, 1.0 ] ],
	            [ "easeInSine", [ 0.47, 0, 0.745, 0.715 ] ],
	            [ "easeOutSine", [ 0.39, 0.575, 0.565, 1 ] ],
	            [ "easeInOutSine", [ 0.445, 0.05, 0.55, 0.95 ] ],
	            [ "easeInQuad", [ 0.55, 0.085, 0.68, 0.53 ] ],
	            [ "easeOutQuad", [ 0.25, 0.46, 0.45, 0.94 ] ],
	            [ "easeInOutQuad", [ 0.455, 0.03, 0.515, 0.955 ] ],
	            [ "easeInCubic", [ 0.55, 0.055, 0.675, 0.19 ] ],
	            [ "easeOutCubic", [ 0.215, 0.61, 0.355, 1 ] ],
	            [ "easeInOutCubic", [ 0.645, 0.045, 0.355, 1 ] ],
	            [ "easeInQuart", [ 0.895, 0.03, 0.685, 0.22 ] ],
	            [ "easeOutQuart", [ 0.165, 0.84, 0.44, 1 ] ],
	            [ "easeInOutQuart", [ 0.77, 0, 0.175, 1 ] ],
	            [ "easeInQuint", [ 0.755, 0.05, 0.855, 0.06 ] ],
	            [ "easeOutQuint", [ 0.23, 1, 0.32, 1 ] ],
	            [ "easeInOutQuint", [ 0.86, 0, 0.07, 1 ] ],
	            [ "easeInExpo", [ 0.95, 0.05, 0.795, 0.035 ] ],
	            [ "easeOutExpo", [ 0.19, 1, 0.22, 1 ] ],
	            [ "easeInOutExpo", [ 1, 0, 0, 1 ] ],
	            [ "easeInCirc", [ 0.6, 0.04, 0.98, 0.335 ] ],
	            [ "easeOutCirc", [ 0.075, 0.82, 0.165, 1 ] ],
	            [ "easeInOutCirc", [ 0.785, 0.135, 0.15, 0.86 ] ]
	        ], function(i, easingArray) {
	            Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
	        });
	
	    /* Determine the appropriate easing type given an easing input. */
	    function getEasing(value, duration) {
	        var easing = value;
	
	        /* The easing option can either be a string that references a pre-registered easing,
	           or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
	        if (Type.isString(value)) {
	            /* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
	            if (!Velocity.Easings[value]) {
	                easing = false;
	            }
	        } else if (Type.isArray(value) && value.length === 1) {
	            easing = generateStep.apply(null, value);
	        } else if (Type.isArray(value) && value.length === 2) {
	            /* springRK4 must be passed the animation's duration. */
	            /* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
	               function generated with default tension and friction values. */
	            easing = generateSpringRK4.apply(null, value.concat([ duration ]));
	        } else if (Type.isArray(value) && value.length === 4) {
	            /* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
	            easing = generateBezier.apply(null, value);
	        } else {
	            easing = false;
	        }
	
	        /* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
	           if the Velocity-wide default has been incorrectly modified. */
	        if (easing === false) {
	            if (Velocity.Easings[Velocity.defaults.easing]) {
	                easing = Velocity.defaults.easing;
	            } else {
	                easing = EASING_DEFAULT;
	            }
	        }
	
	        return easing;
	    }
	
	    /*****************
	        CSS Stack
	    *****************/
	
	    /* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
	       It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
	    /* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
	    var CSS = Velocity.CSS = {
	
	        /*************
	            RegEx
	        *************/
	
	        RegEx: {
	            isHex: /^#([A-f\d]{3}){1,2}$/i,
	            /* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
	            valueUnwrap: /^[A-z]+\((.*)\)$/i,
	            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
	            /* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
	            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
	        },
	
	        /************
	            Lists
	        ************/
	
	        Lists: {
	            colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
	            transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
	            transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
	        },
	
	        /************
	            Hooks
	        ************/
	
	        /* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
	           (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
	        /* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
	           tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
	        Hooks: {
	            /********************
	                Registration
	            ********************/
	
	            /* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
	            /* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
	            templates: {
	                "textShadow": [ "Color X Y Blur", "black 0px 0px 0px" ],
	                "boxShadow": [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
	                "clip": [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
	                "backgroundPosition": [ "X Y", "0% 0%" ],
	                "transformOrigin": [ "X Y Z", "50% 50% 0px" ],
	                "perspectiveOrigin": [ "X Y", "50% 50%" ]
	            },
	
	            /* A "registered" hook is one that has been converted from its template form into a live,
	               tweenable property. It contains data to associate it with its root property. */
	            registered: {
	                /* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
	                   which consists of the subproperty's name, the associated root property's name,
	                   and the subproperty's position in the root's value. */
	            },
	            /* Convert the templates into individual hooks then append them to the registered object above. */
	            register: function () {
	                /* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
	                   currently set to "transparent" default to their respective template below when color-animated,
	                   and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
	                   which is almost always set closer to black than white. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
	                    CSS.Hooks.templates[CSS.Lists.colors[i]] = [ "Red Green Blue Alpha", rgbComponents ];
	                }
	
	                var rootProperty,
	                    hookTemplate,
	                    hookNames;
	
	                /* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
	                   Thus, we re-arrange the templates accordingly. */
	                if (IE) {
	                    for (rootProperty in CSS.Hooks.templates) {
	                        hookTemplate = CSS.Hooks.templates[rootProperty];
	                        hookNames = hookTemplate[0].split(" ");
	
	                        var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
	                        if (hookNames[0] === "Color") {
	                            /* Reposition both the hook's name and its default value to the end of their respective strings. */
	                            hookNames.push(hookNames.shift());
	                            defaultValues.push(defaultValues.shift());
	
	                            /* Replace the existing template for the hook's root property. */
	                            CSS.Hooks.templates[rootProperty] = [ hookNames.join(" "), defaultValues.join(" ") ];
	                        }
	                    }
	                }
	
	                /* Hook registration. */
	                for (rootProperty in CSS.Hooks.templates) {
	                    hookTemplate = CSS.Hooks.templates[rootProperty];
	                    hookNames = hookTemplate[0].split(" ");
	
	                    for (var i in hookNames) {
	                        var fullHookName = rootProperty + hookNames[i],
	                            hookPosition = i;
	
	                        /* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
	                           and the hook's position in its template's default value string. */
	                        CSS.Hooks.registered[fullHookName] = [ rootProperty, hookPosition ];
	                    }
	                }
	            },
	
	            /*****************************
	               Injection and Extraction
	            *****************************/
	
	            /* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
	            /* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
	            getRoot: function (property) {
	                var hookData = CSS.Hooks.registered[property];
	
	                if (hookData) {
	                    return hookData[0];
	                } else {
	                    /* If there was no hook match, return the property name untouched. */
	                    return property;
	                }
	            },
	            /* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
	               the targeted hook can be injected or extracted at its standard position. */
	            cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
	                /* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
	                if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
	                    rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
	                }
	
	                /* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
	                   default to the root's default value as defined in CSS.Hooks.templates. */
	                /* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
	                   zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
	                if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
	                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                }
	
	                return rootPropertyValue;
	            },
	            /* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
	            extractValue: function (fullHookName, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];
	
	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1];
	
	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
	                    /* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
	                    return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            },
	            /* Inject the hook's value into its root property's value. This is used to piece back together the root property
	               once Velocity has updated one of its individually hooked values through tweening. */
	            injectValue: function (fullHookName, hookValue, rootPropertyValue) {
	                var hookData = CSS.Hooks.registered[fullHookName];
	
	                if (hookData) {
	                    var hookRoot = hookData[0],
	                        hookPosition = hookData[1],
	                        rootPropertyValueParts,
	                        rootPropertyValueUpdated;
	
	                    rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
	                    /* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
	                       then reconstruct the rootPropertyValue string. */
	                    rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
	                    rootPropertyValueParts[hookPosition] = hookValue;
	                    rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
	                    return rootPropertyValueUpdated;
	                } else {
	                    /* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
	                    return rootPropertyValue;
	                }
	            }
	        },
	
	        /*******************
	           Normalizations
	        *******************/
	
	        /* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
	           and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
	        Normalizations: {
	            /* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
	               the targeted element (which may need to be queried), and the targeted property value. */
	            registered: {
	                clip: function (type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return "clip";
	                        /* Clip needs to be unwrapped and stripped of its commas during extraction. */
	                        case "extract":
	                            var extracted;
	
	                            /* If Velocity also extracted this value, skip extraction. */
	                            if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                extracted = propertyValue;
	                            } else {
	                                /* Remove the "rect()" wrapper. */
	                                extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
	                                /* Strip off commas. */
	                                extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
	                            }
	
	                            return extracted;
	                        /* Clip needs to be re-wrapped during injection. */
	                        case "inject":
	                            return "rect(" + propertyValue + ")";
	                    }
	                },
	
	                blur: function(type, element, propertyValue) {
	                    switch (type) {
	                        case "name":
	                            return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
	                        case "extract":
	                            var extracted = parseFloat(propertyValue);
	
	                            /* If extracted is NaN, meaning the value isn't already extracted. */
	                            if (!(extracted || extracted === 0)) {
	                                var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
	                                /* If the filter string had a blur component, return just the blur value and unit type. */
	                                if (blurComponent) {
	                                    extracted = blurComponent[1];
	                                /* If the component doesn't exist, default blur to 0. */
	                                } else {
	                                    extracted = 0;
	                                }
	                            }
	
	                            return extracted;
	                        /* Blur needs to be re-wrapped during injection. */
	                        case "inject":
	                            /* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
	                            if (!parseFloat(propertyValue)) {
	                                return "none";
	                            } else {
	                                return "blur(" + propertyValue + ")";
	                            }
	                    }
	                },
	
	                /* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
	                opacity: function (type, element, propertyValue) {
	                    if (IE <= 8) {
	                        switch (type) {
	                            case "name":
	                                return "filter";
	                            case "extract":
	                                /* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
	                                   Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
	                                var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
	                                if (extracted) {
	                                    /* Convert to decimal value. */
	                                    propertyValue = extracted[1] / 100;
	                                } else {
	                                    /* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
	                                    propertyValue = 1;
	                                }
	
	                                return propertyValue;
	                            case "inject":
	                                /* Opacified elements are required to have their zoom property set to a non-zero value. */
	                                element.style.zoom = 1;
	
	                                /* Setting the filter property on elements with certain font property combinations can result in a
	                                   highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
	                                   value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
	                                if (parseFloat(propertyValue) >= 1) {
	                                    return "";
	                                } else {
	                                  /* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
	                                  return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
	                                }
	                        }
	                    /* With all other browsers, normalization is not required; return the same values that were passed in. */
	                    } else {
	                        switch (type) {
	                            case "name":
	                                return "opacity";
	                            case "extract":
	                                return propertyValue;
	                            case "inject":
	                                return propertyValue;
	                        }
	                    }
	                }
	            },
	
	            /*****************************
	                Batched Registrations
	            *****************************/
	
	            /* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
	            register: function () {
	
	                /*****************
	                    Transforms
	                *****************/
	
	                /* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
	                   so that they can be referenced in a properties map by their individual names. */
	                /* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
	                   setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
	                   Transform setting is batched in this way to improve performance: the transform style only needs to be updated
	                   once when multiple transform subproperties are being animated simultaneously. */
	                /* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
	                   transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
	                   from being normalized for these browsers so that tweening skips these properties altogether
	                   (since it will ignore them as being unsupported by the browser.) */
	                if (!(IE <= 9) && !Velocity.State.isGingerbread) {
	                    /* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
	                    share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
	                    CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
	                }
	
	                for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
	                    paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
	                    (function() {
	                        var transformName = CSS.Lists.transformsBase[i];
	
	                        CSS.Normalizations.registered[transformName] = function (type, element, propertyValue) {
	                            switch (type) {
	                                /* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
	                                case "name":
	                                    return "transform";
	                                /* Transform values are cached onto a per-element transformCache object. */
	                                case "extract":
	                                    /* If this transform has yet to be assigned a value, return its null value. */
	                                    if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
	                                        /* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
	                                        return /^scale/i.test(transformName) ? 1 : 0;
	                                    /* When transform values are set, they are wrapped in parentheses as per the CSS spec.
	                                       Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
	                                    } else {
	                                        return Data(element).transformCache[transformName].replace(/[()]/g, "");
	                                    }
	                                case "inject":
	                                    var invalid = false;
	
	                                    /* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
	                                       Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
	                                    /* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
	                                    switch (transformName.substr(0, transformName.length - 1)) {
	                                        /* Whitelist unit types for each transform. */
	                                        case "translate":
	                                            invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
	                                            break;
	                                        /* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
	                                        case "scal":
	                                        case "scale":
	                                            /* Chrome on Android has a bug in which scaled elements blur if their initial scale
	                                               value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
	                                               and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
	                                            if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
	                                                propertyValue = 1;
	                                            }
	
	                                            invalid = !/(\d)$/i.test(propertyValue);
	                                            break;
	                                        case "skew":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                        case "rotate":
	                                            invalid = !/(deg|\d)$/i.test(propertyValue);
	                                            break;
	                                    }
	
	                                    if (!invalid) {
	                                        /* As per the CSS spec, wrap the value in parentheses. */
	                                        Data(element).transformCache[transformName] = "(" + propertyValue + ")";
	                                    }
	
	                                    /* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
	                                    return Data(element).transformCache[transformName];
	                            }
	                        };
	                    })();
	                }
	
	                /*************
	                    Colors
	                *************/
	
	                /* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
	                   Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
	                for (var i = 0; i < CSS.Lists.colors.length; i++) {
	                    /* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
	                       (Otherwise, all functions would take the final for loop's colorName.) */
	                    (function () {
	                        var colorName = CSS.Lists.colors[i];
	
	                        /* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
	                        CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
	                            switch (type) {
	                                case "name":
	                                    return colorName;
	                                /* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
	                                case "extract":
	                                    var extracted;
	
	                                    /* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
	                                    if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
	                                        extracted = propertyValue;
	                                    } else {
	                                        var converted,
	                                            colorNames = {
	                                                black: "rgb(0, 0, 0)",
	                                                blue: "rgb(0, 0, 255)",
	                                                gray: "rgb(128, 128, 128)",
	                                                green: "rgb(0, 128, 0)",
	                                                red: "rgb(255, 0, 0)",
	                                                white: "rgb(255, 255, 255)"
	                                            };
	
	                                        /* Convert color names to rgb. */
	                                        if (/^[A-z]+$/i.test(propertyValue)) {
	                                            if (colorNames[propertyValue] !== undefined) {
	                                                converted = colorNames[propertyValue]
	                                            } else {
	                                                /* If an unmatched color name is provided, default to black. */
	                                                converted = colorNames.black;
	                                            }
	                                        /* Convert hex values to rgb. */
	                                        } else if (CSS.RegEx.isHex.test(propertyValue)) {
	                                            converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
	                                        /* If the provided color doesn't match any of the accepted color formats, default to black. */
	                                        } else if (!(/^rgba?\(/i.test(propertyValue))) {
	                                            converted = colorNames.black;
	                                        }
	
	                                        /* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
	                                           repeated spaces (in case the value included spaces to begin with). */
	                                        extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
	                                    }
	
	                                    /* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    if (!(IE <= 8) && extracted.split(" ").length === 3) {
	                                        extracted += " 1";
	                                    }
	
	                                    return extracted;
	                                case "inject":
	                                    /* If this is IE<=8 and an alpha component exists, strip it off. */
	                                    if (IE <= 8) {
	                                        if (propertyValue.split(" ").length === 4) {
	                                            propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
	                                        }
	                                    /* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
	                                    } else if (propertyValue.split(" ").length === 3) {
	                                        propertyValue += " 1";
	                                    }
	
	                                    /* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
	                                       on all values but the fourth (R, G, and B only accept whole numbers). */
	                                    return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
	                            }
	                        };
	                    })();
	                }
	            }
	        },
	
	        /************************
	           CSS Property Names
	        ************************/
	
	        Names: {
	            /* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
	               Camelcasing is used to normalize property names between and across calls. */
	            camelCase: function (property) {
	                return property.replace(/-(\w)/g, function (match, subMatch) {
	                    return subMatch.toUpperCase();
	                });
	            },
	
	            /* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
	            SVGAttribute: function (property) {
	                var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
	                /* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
	                if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
	                    SVGAttributes += "|transform";
	                }
	
	                return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
	            },
	
	            /* Determine whether a property should be set with a vendor prefix. */
	            /* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
	               If the property is not at all supported by the browser, return a false flag. */
	            prefixCheck: function (property) {
	                /* If this property has already been checked, return the cached value. */
	                if (Velocity.State.prefixMatches[property]) {
	                    return [ Velocity.State.prefixMatches[property], true ];
	                } else {
	                    var vendors = [ "", "Webkit", "Moz", "ms", "O" ];
	
	                    for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
	                        var propertyPrefixed;
	
	                        if (i === 0) {
	                            propertyPrefixed = property;
	                        } else {
	                            /* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
	                            propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) { return match.toUpperCase(); });
	                        }
	
	                        /* Check if the browser supports this property as prefixed. */
	                        if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
	                            /* Cache the match. */
	                            Velocity.State.prefixMatches[property] = propertyPrefixed;
	
	                            return [ propertyPrefixed, true ];
	                        }
	                    }
	
	                    /* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
	                    return [ property, false ];
	                }
	            }
	        },
	
	        /************************
	           CSS Property Values
	        ************************/
	
	        Values: {
	            /* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
	            hexToRgb: function (hex) {
	                var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
	                    longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
	                    rgbParts;
	
	                hex = hex.replace(shortformRegex, function (m, r, g, b) {
	                    return r + r + g + g + b + b;
	                });
	
	                rgbParts = longformRegex.exec(hex);
	
	                return rgbParts ? [ parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16) ] : [ 0, 0, 0 ];
	            },
	
	            isCSSNullValue: function (value) {
	                /* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
	                   Thus, we check for both falsiness and these special strings. */
	                /* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
	                   templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
	                /* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
	                return (value == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
	            },
	
	            /* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
	            getUnitType: function (property) {
	                if (/^(rotate|skew)/i.test(property)) {
	                    return "deg";
	                } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
	                    /* The above properties are unitless. */
	                    return "";
	                } else {
	                    /* Default to px for all other properties. */
	                    return "px";
	                }
	            },
	
	            /* HTML elements default to an associated display type when they're not set to display:none. */
	            /* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
	            getDisplayType: function (element) {
	                var tagName = element && element.tagName.toString().toLowerCase();
	
	                if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
	                    return "inline";
	                } else if (/^(li)$/i.test(tagName)) {
	                    return "list-item";
	                } else if (/^(tr)$/i.test(tagName)) {
	                    return "table-row";
	                } else if (/^(table)$/i.test(tagName)) {
	                    return "table";
	                } else if (/^(tbody)$/i.test(tagName)) {
	                    return "table-row-group";
	                /* Default to "block" when no match is found. */
	                } else {
	                    return "block";
	                }
	            },
	
	            /* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
	            addClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.add(className);
	                } else {
	                    element.className += (element.className.length ? " " : "") + className;
	                }
	            },
	
	            removeClass: function (element, className) {
	                if (element.classList) {
	                    element.classList.remove(className);
	                } else {
	                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
	                }
	            }
	        },
	
	        /****************************
	           Style Getting & Setting
	        ****************************/
	
	        /* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        getPropertyValue: function (element, property, rootPropertyValue, forceStyleLookup) {
	            /* Get an element's computed property value. */
	            /* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
	               style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
	               *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
	            function computePropertyValue (element, property) {
	                /* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
	                   element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
	                   offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
	                   We subtract border and padding to get the sum of interior + scrollbar. */
	                var computedValue = 0;
	
	                /* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
	                   of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
	                   codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
	                   Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
	                if (IE <= 8) {
	                    computedValue = $.css(element, property); /* GET */
	                /* All other browsers support getComputedStyle. The returned live object reference is cached onto its
	                   associated element so that it does not need to be refetched upon every GET. */
	                } else {
	                    /* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
	                       toggle display to the element type's default value. */
	                    var toggleDisplay = false;
	
	                    if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
	                        toggleDisplay = true;
	                        CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
	                    }
	
	                    function revertDisplay () {
	                        if (toggleDisplay) {
	                            CSS.setPropertyValue(element, "display", "none");
	                        }
	                    }
	
	                    if (!forceStyleLookup) {
	                        if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
	                            revertDisplay();
	
	                            return contentBoxHeight;
	                        } else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
	                            var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
	                            revertDisplay();
	
	                            return contentBoxWidth;
	                        }
	                    }
	
	                    var computedStyle;
	
	                    /* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
	                       of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
	                    if (Data(element) === undefined) {
	                        computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If the computedStyle object has yet to be cached, do so now. */
	                    } else if (!Data(element).computedStyle) {
	                        computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
	                    /* If computedStyle is cached, use it. */
	                    } else {
	                        computedStyle = Data(element).computedStyle;
	                    }
	
	                    /* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
	                       Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
	                       So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
	                    if (property === "borderColor") {
	                        property = "borderTopColor";
	                    }
	
	                    /* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
	                       instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
	                    if (IE === 9 && property === "filter") {
	                        computedValue = computedStyle.getPropertyValue(property); /* GET */
	                    } else {
	                        computedValue = computedStyle[property];
	                    }
	
	                    /* Fall back to the property's style value (if defined) when computedValue returns nothing,
	                       which can happen when the element hasn't been painted. */
	                    if (computedValue === "" || computedValue === null) {
	                        computedValue = element.style[property];
	                    }
	
	                    revertDisplay();
	                }
	
	                /* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
	                   defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
	                   effect as being set to 0, so no conversion is necessary.) */
	                /* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
	                   property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
	                   to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
	                if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
	                    var position = computePropertyValue(element, "position"); /* GET */
	
	                    /* For absolute positioning, jQuery's $.position() only returns values for top and left;
	                       right and bottom will have their "auto" value reverted to 0. */
	                    /* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
	                       Not a big deal since we're currently in a GET batch anyway. */
	                    if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
	                        /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
	                        computedValue = $(element).position()[property] + "px"; /* GET */
	                    }
	                }
	
	                return computedValue;
	            }
	
	            var propertyValue;
	
	            /* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
	               extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
	            if (CSS.Hooks.registered[property]) {
	                var hook = property,
	                    hookRoot = CSS.Hooks.getRoot(hook);
	
	                /* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
	                   query the DOM for the root property's value. */
	                if (rootPropertyValue === undefined) {
	                    /* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
	                    rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
	                }
	
	                /* If this root has a normalization registered, peform the associated normalization extraction. */
	                if (CSS.Normalizations.registered[hookRoot]) {
	                    rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
	                }
	
	                /* Extract the hook's value. */
	                propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
	            /* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
	               normalize the property's name and value, and handle the special case of transforms. */
	            /* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
	               numerical and therefore do not require normalization extraction. */
	            } else if (CSS.Normalizations.registered[property]) {
	                var normalizedPropertyName,
	                    normalizedPropertyValue;
	
	                normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
	                /* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
	                   At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
	                   This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
	                   thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
	                if (normalizedPropertyName !== "transform") {
	                    normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
	                    /* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
	                    if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
	                        normalizedPropertyValue = CSS.Hooks.templates[property][1];
	                    }
	                }
	
	                propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
	            }
	
	            /* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
	            if (!/^[\d-]/.test(propertyValue)) {
	                /* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
	                   their HTML attribute values instead of their CSS style values. */
	                if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                    /* Since the height/width attribute values must be set manually, they don't reflect computed values.
	                       Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
	                    if (/^(height|width)$/i.test(property)) {
	                        /* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
	                        try {
	                            propertyValue = element.getBBox()[property];
	                        } catch (error) {
	                            propertyValue = 0;
	                        }
	                    /* Otherwise, access the attribute value directly. */
	                    } else {
	                        propertyValue = element.getAttribute(property);
	                    }
	                } else {
	                    propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
	                }
	            }
	
	            /* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
	               convert CSS null-values to an integer of value 0. */
	            if (CSS.Values.isCSSNullValue(propertyValue)) {
	                propertyValue = 0;
	            }
	
	            if (Velocity.debug >= 2) console.log("Get " + property + ": " + propertyValue);
	
	            return propertyValue;
	        },
	
	        /* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
	        setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
	            var propertyName = property;
	
	            /* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
	            if (property === "scroll") {
	                /* If a container option is present, scroll the container instead of the browser window. */
	                if (scrollData.container) {
	                    scrollData.container["scroll" + scrollData.direction] = propertyValue;
	                /* Otherwise, Velocity defaults to scrolling the browser window. */
	                } else {
	                    if (scrollData.direction === "Left") {
	                        window.scrollTo(propertyValue, scrollData.alternateValue);
	                    } else {
	                        window.scrollTo(scrollData.alternateValue, propertyValue);
	                    }
	                }
	            } else {
	                /* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
	                   Thus, for now, we merely cache transforms being SET. */
	                if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
	                    /* Perform a normalization injection. */
	                    /* Note: The normalization logic handles the transformCache updating. */
	                    CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
	                    propertyName = "transform";
	                    propertyValue = Data(element).transformCache[property];
	                } else {
	                    /* Inject hooks. */
	                    if (CSS.Hooks.registered[property]) {
	                        var hookName = property,
	                            hookRoot = CSS.Hooks.getRoot(property);
	
	                        /* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
	                        rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
	                        propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
	                        property = hookRoot;
	                    }
	
	                    /* Normalize names and values. */
	                    if (CSS.Normalizations.registered[property]) {
	                        propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
	                        property = CSS.Normalizations.registered[property]("name", element);
	                    }
	
	                    /* Assign the appropriate vendor prefix before performing an official style update. */
	                    propertyName = CSS.Names.prefixCheck(property)[0];
	
	                    /* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
	                       Try/catch is avoided for other browsers since it incurs a performance overhead. */
	                    if (IE <= 8) {
	                        try {
	                            element.style[propertyName] = propertyValue;
	                        } catch (error) { if (Velocity.debug) console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]"); }
	                    /* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
	                    /* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
	                    } else if (Data(element) && Data(element).isSVG && CSS.Names.SVGAttribute(property)) {
	                        /* Note: For SVG attributes, vendor-prefixed property names are never used. */
	                        /* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
	                        element.setAttribute(property, propertyValue);
	                    } else {
	                        element.style[propertyName] = propertyValue;
	                    }
	
	                    if (Velocity.debug >= 2) console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
	                }
	            }
	
	            /* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
	            return [ propertyName, propertyValue ];
	        },
	
	        /* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
	        /* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
	        flushTransformCache: function(element) {
	            var transformString = "";
	
	            /* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
	               (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
	            if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && Data(element).isSVG) {
	                /* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
	                   Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
	                function getTransformFloat (transformProperty) {
	                    return parseFloat(CSS.getPropertyValue(element, transformProperty));
	                }
	
	                /* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
	                   we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
	                var SVGTransforms = {
	                    translate: [ getTransformFloat("translateX"), getTransformFloat("translateY") ],
	                    skewX: [ getTransformFloat("skewX") ], skewY: [ getTransformFloat("skewY") ],
	                    /* If the scale property is set (non-1), use that value for the scaleX and scaleY values
	                       (this behavior mimics the result of animating all these properties at once on HTML elements). */
	                    scale: getTransformFloat("scale") !== 1 ? [ getTransformFloat("scale"), getTransformFloat("scale") ] : [ getTransformFloat("scaleX"), getTransformFloat("scaleY") ],
	                    /* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
	                       defining the rotation's origin point. We ignore the origin values (default them to 0). */
	                    rotate: [ getTransformFloat("rotateZ"), 0, 0 ]
	                };
	
	                /* Iterate through the transform properties in the user-defined property map order.
	                   (This mimics the behavior of non-SVG transform animation.) */
	                $.each(Data(element).transformCache, function(transformName) {
	                    /* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
	                       properties so that they match up with SVG's accepted transform properties. */
	                    if (/^translate/i.test(transformName)) {
	                        transformName = "translate";
	                    } else if (/^scale/i.test(transformName)) {
	                        transformName = "scale";
	                    } else if (/^rotate/i.test(transformName)) {
	                        transformName = "rotate";
	                    }
	
	                    /* Check that we haven't yet deleted the property from the SVGTransforms container. */
	                    if (SVGTransforms[transformName]) {
	                        /* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
	                        transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
	                        /* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
	                           re-insert the same master property if we encounter another one of its axis-specific properties. */
	                        delete SVGTransforms[transformName];
	                    }
	                });
	            } else {
	                var transformValue,
	                    perspective;
	
	                /* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
	                $.each(Data(element).transformCache, function(transformName) {
	                    transformValue = Data(element).transformCache[transformName];
	
	                    /* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
	                    if (transformName === "transformPerspective") {
	                        perspective = transformValue;
	                        return true;
	                    }
	
	                    /* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
	                    if (IE === 9 && transformName === "rotateZ") {
	                        transformName = "rotate";
	                    }
	
	                    transformString += transformName + transformValue + " ";
	                });
	
	                /* If present, set the perspective subproperty first. */
	                if (perspective) {
	                    transformString = "perspective" + perspective + " " + transformString;
	                }
	            }
	
	            CSS.setPropertyValue(element, "transform", transformString);
	        }
	    };
	
	    /* Register hooks and normalizations. */
	    CSS.Hooks.register();
	    CSS.Normalizations.register();
	
	    /* Allow hook setting in the same fashion as jQuery's $.css(). */
	    Velocity.hook = function (elements, arg2, arg3) {
	        var value = undefined;
	
	        elements = sanitizeElements(elements);
	
	        $.each(elements, function(i, element) {
	            /* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }
	
	            /* Get property value. If an element set was passed in, only return the value for the first element. */
	            if (arg3 === undefined) {
	                if (value === undefined) {
	                    value = Velocity.CSS.getPropertyValue(element, arg2);
	                }
	            /* Set property value. */
	            } else {
	                /* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
	                var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
	
	                /* Transform properties don't automatically set. They have to be flushed to the DOM. */
	                if (adjustedSet[0] === "transform") {
	                    Velocity.CSS.flushTransformCache(element);
	                }
	
	                value = adjustedSet;
	            }
	        });
	
	        return value;
	    };
	
	    /*****************
	        Animation
	    *****************/
	
	    var animate = function() {
	
	        /******************
	            Call Chain
	        ******************/
	
	        /* Logic for determining what to return to the call stack when exiting out of Velocity. */
	        function getChain () {
	            /* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
	               default to null instead of returning the targeted elements so that utility function's return value is standardized. */
	            if (isUtility) {
	                return promiseData.promise || null;
	            /* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
	            } else {
	                return elementsWrapped;
	            }
	        }
	
	        /*************************
	           Arguments Assignment
	        *************************/
	
	        /* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
	           objects are defined on a container object that's passed in as Velocity's sole argument. */
	        /* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
	        var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
	            /* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
	            isUtility,
	            /* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
	               passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
	            elementsWrapped,
	            argumentIndex;
	
	        var elements,
	            propertiesMap,
	            options;
	
	        /* Detect jQuery/Zepto elements being animated via the $.fn method. */
	        if (Type.isWrapped(this)) {
	            isUtility = false;
	
	            argumentIndex = 0;
	            elements = this;
	            elementsWrapped = this;
	        /* Otherwise, raw elements are being animated via the utility function. */
	        } else {
	            isUtility = true;
	
	            argumentIndex = 1;
	            elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
	        }
	
	        elements = sanitizeElements(elements);
	
	        if (!elements) {
	            return;
	        }
	
	        if (syntacticSugar) {
	            propertiesMap = arguments[0].properties || arguments[0].p;
	            options = arguments[0].options || arguments[0].o;
	        } else {
	            propertiesMap = arguments[argumentIndex];
	            options = arguments[argumentIndex + 1];
	        }
	
	        /* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
	           single raw DOM element is passed in (which doesn't contain a length property). */
	        var elementsLength = elements.length,
	            elementsIndex = 0;
	
	        /***************************
	            Argument Overloading
	        ***************************/
	
	        /* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
	           Overloading is detected by checking for the absence of an object being passed into options. */
	        /* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
	        if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
	            /* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
	            var startingArgumentPosition = argumentIndex + 1;
	
	            options = {};
	
	            /* Iterate through all options arguments */
	            for (var i = startingArgumentPosition; i < arguments.length; i++) {
	                /* Treat a number as a duration. Parse it out. */
	                /* Note: The following RegEx will return true if passed an array with a number as its first item.
	                   Thus, arrays are skipped from this check. */
	                if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
	                    options.duration = arguments[i];
	                /* Treat strings and arrays as easings. */
	                } else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
	                    options.easing = arguments[i];
	                /* Treat a function as a complete callback. */
	                } else if (Type.isFunction(arguments[i])) {
	                    options.complete = arguments[i];
	                }
	            }
	        }
	
	        /***************
	            Promises
	        ***************/
	
	        var promiseData = {
	                promise: null,
	                resolver: null,
	                rejecter: null
	            };
	
	        /* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
	           promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
	           method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
	           call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
	        /* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
	           triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
	           grouped together for the purposes of resolving and rejecting a promise. */
	        if (isUtility && Velocity.Promise) {
	            promiseData.promise = new Velocity.Promise(function (resolve, reject) {
	                promiseData.resolver = resolve;
	                promiseData.rejecter = reject;
	            });
	        }
	
	        /*********************
	           Action Detection
	        *********************/
	
	        /* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
	           or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
	           first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
	        var action;
	
	        switch (propertiesMap) {
	            case "scroll":
	                action = "scroll";
	                break;
	
	            case "reverse":
	                action = "reverse";
	                break;
	
	            case "finish":
	            case "finishAll":
	            case "stop":
	                /*******************
	                    Action: Stop
	                *******************/
	
	                /* Clear the currently-active delay on each targeted element. */
	                $.each(elements, function(i, element) {
	                    if (Data(element) && Data(element).delayTimer) {
	                        /* Stop the timer from triggering its cached next() function. */
	                        clearTimeout(Data(element).delayTimer.setTimeout);
	
	                        /* Manually call the next() function so that the subsequent queue items can progress. */
	                        if (Data(element).delayTimer.next) {
	                            Data(element).delayTimer.next();
	                        }
	
	                        delete Data(element).delayTimer;
	                    }
	
	                    /* If we want to finish everything in the queue, we have to iterate through it
	                       and call each function. This will make them active calls below, which will
	                       cause them to be applied via the duration setting. */
	                    if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
	                        /* Iterate through the items in the element's queue. */
	                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                            /* The queue array can contain an "inprogress" string, which we skip. */
	                            if (Type.isFunction(item)) {
	                                item();
	                            }
	                        });
	
	                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                        $.queue(element, Type.isString(options) ? options : "", []);
	                    }
	                });
	
	                var callsToStop = [];
	
	                /* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
	                   been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
	                   is stopped, the next item in its animation queue is immediately triggered. */
	                /* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
	                   or a custom queue string can be passed in. */
	                /* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
	                   regardless of the element's current queue state. */
	
	                /* Iterate through every active call. */
	                $.each(Velocity.State.calls, function(i, activeCall) {
	                    /* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
	                    if (activeCall) {
	                        /* Iterate through the active call's targeted elements. */
	                        $.each(activeCall[1], function(k, activeElement) {
	                            /* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
	                               clear calls associated with the relevant queue. */
	                            /* Call stopping logic works as follows:
	                               - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
	                               - options === undefined --> stop current queue:"" call and all queue:false calls.
	                               - options === false --> stop only queue:false calls.
	                               - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
	                            var queueName = (options === undefined) ? "" : options;
	
	                            if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
	                                return true;
	                            }
	
	                            /* Iterate through the calls targeted by the stop command. */
	                            $.each(elements, function(l, element) {
	                                /* Check that this call was applied to the target element. */
	                                if (element === activeElement) {
	                                    /* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
	                                       due to the queue-clearing above. */
	                                    if (options === true || Type.isString(options)) {
	                                        /* Iterate through the items in the element's queue. */
	                                        $.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
	                                            /* The queue array can contain an "inprogress" string, which we skip. */
	                                            if (Type.isFunction(item)) {
	                                                /* Pass the item's callback a flag indicating that we want to abort from the queue call.
	                                                   (Specifically, the queue will resolve the call's associated promise then abort.)  */
	                                                item(null, true);
	                                            }
	                                        });
	
	                                        /* Clearing the $.queue() array is achieved by resetting it to []. */
	                                        $.queue(element, Type.isString(options) ? options : "", []);
	                                    }
	
	                                    if (propertiesMap === "stop") {
	                                        /* Since "reverse" uses cached start values (the previous call's endValues), these values must be
	                                           changed to reflect the final value that the elements were actually tweened to. */
	                                        /* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
	                                           object. Also, queue:false animations can't be reversed. */
	                                        if (Data(element) && Data(element).tweensContainer && queueName !== false) {
	                                            $.each(Data(element).tweensContainer, function(m, activeTween) {
	                                                activeTween.endValue = activeTween.currentValue;
	                                            });
	                                        }
	
	                                        callsToStop.push(i);
	                                    } else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
	                                        /* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
	                                        they finish upon the next rAf tick then proceed with normal call completion logic. */
	                                        activeCall[2].duration = 1;
	                                    }
	                                }
	                            });
	                        });
	                    }
	                });
	
	                /* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
	                   that the complete callback and display:none setting should be skipped since we're completing prematurely. */
	                if (propertiesMap === "stop") {
	                    $.each(callsToStop, function(i, j) {
	                        completeCall(j, true);
	                    });
	
	                    if (promiseData.promise) {
	                        /* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
	                        promiseData.resolver(elements);
	                    }
	                }
	
	                /* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
	                return getChain();
	
	            default:
	                /* Treat a non-empty plain object as a literal properties map. */
	                if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
	                    action = "start";
	
	                /****************
	                    Redirects
	                ****************/
	
	                /* Check if a string matches a registered redirect (see Redirects above). */
	                } else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
	                    var opts = $.extend({}, options),
	                        durationOriginal = opts.duration,
	                        delayOriginal = opts.delay || 0;
	
	                    /* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
	                    if (opts.backwards === true) {
	                        elements = $.extend(true, [], elements).reverse();
	                    }
	
	                    /* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
	                    $.each(elements, function(elementIndex, element) {
	                        /* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
	                        if (parseFloat(opts.stagger)) {
	                            opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
	                        } else if (Type.isFunction(opts.stagger)) {
	                            opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
	                        }
	
	                        /* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
	                           the duration of each element's animation, using floors to prevent producing very short durations. */
	                        if (opts.drag) {
	                            /* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
	                            opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
	                            /* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
	                               B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
	                               The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
	                            opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex/elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
	                        }
	
	                        /* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
	                           reduce the opts checking logic required inside the redirect. */
	                        Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
	                    });
	
	                    /* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
	                       (The performance overhead up to this point is virtually non-existant.) */
	                    /* Note: The jQuery call chain is kept intact by returning the complete element set. */
	                    return getChain();
	                } else {
	                    var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
	                    if (promiseData.promise) {
	                        promiseData.rejecter(new Error(abortError));
	                    } else {
	                        console.log(abortError);
	                    }
	
	                    return getChain();
	                }
	        }
	
	        /**************************
	            Call-Wide Variables
	        **************************/
	
	        /* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
	           being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
	           avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
	           conversion metrics across Velocity animations that are not immediately consecutively chained. */
	        var callUnitConversionData = {
	                lastParent: null,
	                lastPosition: null,
	                lastFontSize: null,
	                lastPercentToPxWidth: null,
	                lastPercentToPxHeight: null,
	                lastEmToPx: null,
	                remToPx: null,
	                vwToPx: null,
	                vhToPx: null
	            };
	
	        /* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
	           Velocity.State.calls array that is processed during animation ticking. */
	        var call = [];
	
	        /************************
	           Element Processing
	        ************************/
	
	        /* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
	           1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
	           2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
	           3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
	        */
	
	        function processElement () {
	
	            /*************************
	               Part I: Pre-Queueing
	            *************************/
	
	            /***************************
	               Element-Wide Variables
	            ***************************/
	
	            var element = this,
	                /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
	                opts = $.extend({}, Velocity.defaults, options),
	                /* A container for the processed data associated with each property in the propertyMap.
	                   (Each property in the map produces its own "tween".) */
	                tweensContainer = {},
	                elementUnitConversionData;
	
	            /******************
	               Element Init
	            ******************/
	
	            if (Data(element) === undefined) {
	                Velocity.init(element);
	            }
	
	            /******************
	               Option: Delay
	            ******************/
	
	            /* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
	            /* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
	               (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
	            if (parseFloat(opts.delay) && opts.queue !== false) {
	                $.queue(element, opts.queue, function(next) {
	                    /* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;
	
	                    /* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
	                       The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
	                    Data(element).delayTimer = {
	                        setTimeout: setTimeout(next, parseFloat(opts.delay)),
	                        next: next
	                    };
	                });
	            }
	
	            /*********************
	               Option: Duration
	            *********************/
	
	            /* Support for jQuery's named durations. */
	            switch (opts.duration.toString().toLowerCase()) {
	                case "fast":
	                    opts.duration = 200;
	                    break;
	
	                case "normal":
	                    opts.duration = DURATION_DEFAULT;
	                    break;
	
	                case "slow":
	                    opts.duration = 600;
	                    break;
	
	                default:
	                    /* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
	                    opts.duration = parseFloat(opts.duration) || 1;
	            }
	
	            /************************
	               Global Option: Mock
	            ************************/
	
	            if (Velocity.mock !== false) {
	                /* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
	                   Alternatively, a multiplier can be passed in to time remap all delays and durations. */
	                if (Velocity.mock === true) {
	                    opts.duration = opts.delay = 1;
	                } else {
	                    opts.duration *= parseFloat(Velocity.mock) || 1;
	                    opts.delay *= parseFloat(Velocity.mock) || 1;
	                }
	            }
	
	            /*******************
	               Option: Easing
	            *******************/
	
	            opts.easing = getEasing(opts.easing, opts.duration);
	
	            /**********************
	               Option: Callbacks
	            **********************/
	
	            /* Callbacks must functions. Otherwise, default to null. */
	            if (opts.begin && !Type.isFunction(opts.begin)) {
	                opts.begin = null;
	            }
	
	            if (opts.progress && !Type.isFunction(opts.progress)) {
	                opts.progress = null;
	            }
	
	            if (opts.complete && !Type.isFunction(opts.complete)) {
	                opts.complete = null;
	            }
	
	            /*********************************
	               Option: Display & Visibility
	            *********************************/
	
	            /* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
	            /* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
	            if (opts.display !== undefined && opts.display !== null) {
	                opts.display = opts.display.toString().toLowerCase();
	
	                /* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
	                if (opts.display === "auto") {
	                    opts.display = Velocity.CSS.Values.getDisplayType(element);
	                }
	            }
	
	            if (opts.visibility !== undefined && opts.visibility !== null) {
	                opts.visibility = opts.visibility.toString().toLowerCase();
	            }
	
	            /**********************
	               Option: mobileHA
	            **********************/
	
	            /* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
	               on animating elements. HA is removed from the element at the completion of its animation. */
	            /* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
	            /* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
	            opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
	            /***********************
	               Part II: Queueing
	            ***********************/
	
	            /* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
	               In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
	            /* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
	               the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
	            function buildQueue (next) {
	
	                /*******************
	                   Option: Begin
	                *******************/
	
	                /* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
	                if (opts.begin && elementsIndex === 0) {
	                    /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                    try {
	                        opts.begin.call(elements, elements);
	                    } catch (error) {
	                        setTimeout(function() { throw error; }, 1);
	                    }
	                }
	
	                /*****************************************
	                   Tween Data Construction (for Scroll)
	                *****************************************/
	
	                /* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
	                if (action === "scroll") {
	                    /* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
	                    var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
	                        scrollOffset = parseFloat(opts.offset) || 0,
	                        scrollPositionCurrent,
	                        scrollPositionCurrentAlternate,
	                        scrollPositionEnd;
	
	                    /* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
	                       as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
	                    if (opts.container) {
	                        /* Ensure that either a jQuery object or a raw DOM element was passed in. */
	                        if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
	                            /* Extract the raw DOM element from the jQuery wrapper. */
	                            opts.container = opts.container[0] || opts.container;
	                            /* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
	                               (due to the user's natural interaction with the page). */
	                            scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
	                            /* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
	                               -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
	                               the scroll container's current scroll position. */
	                            scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
	                        /* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
	                        } else {
	                            opts.container = null;
	                        }
	                    } else {
	                        /* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
	                           the appropriate cached property names (which differ based on browser type). */
	                        scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
	                        /* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
	                        scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
	                        /* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
	                           and therefore end values do not need to be compounded onto current values. */
	                        scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
	                    }
	
	                    /* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
	                    tweensContainer = {
	                        scroll: {
	                            rootPropertyValue: false,
	                            startValue: scrollPositionCurrent,
	                            currentValue: scrollPositionCurrent,
	                            endValue: scrollPositionEnd,
	                            unitType: "",
	                            easing: opts.easing,
	                            scrollData: {
	                                container: opts.container,
	                                direction: scrollDirection,
	                                alternateValue: scrollPositionCurrentAlternate
	                            }
	                        },
	                        element: element
	                    };
	
	                    if (Velocity.debug) console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
	
	                /******************************************
	                   Tween Data Construction (for Reverse)
	                ******************************************/
	
	                /* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
	                   that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
	                   the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
	                /* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
	                /* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
	                   there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
	                   as reverting to the element's values as they were prior to the previous *Velocity* call. */
	                } else if (action === "reverse") {
	                    /* Abort if there is no prior animation data to reverse to. */
	                    if (!Data(element).tweensContainer) {
	                        /* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
	                        $.dequeue(element, opts.queue);
	
	                        return;
	                    } else {
	                        /*********************
	                           Options Parsing
	                        *********************/
	
	                        /* If the element was hidden via the display option in the previous call,
	                           revert display to "auto" prior to reversal so that the element is visible again. */
	                        if (Data(element).opts.display === "none") {
	                            Data(element).opts.display = "auto";
	                        }
	
	                        if (Data(element).opts.visibility === "hidden") {
	                            Data(element).opts.visibility = "visible";
	                        }
	
	                        /* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
	                           Further, remove the previous call's callback options; typically, users do not want these to be refired. */
	                        Data(element).opts.loop = false;
	                        Data(element).opts.begin = null;
	                        Data(element).opts.complete = null;
	
	                        /* Since we're extending an opts object that has already been extended with the defaults options object,
	                           we remove non-explicitly-defined properties that are auto-assigned values. */
	                        if (!options.easing) {
	                            delete opts.easing;
	                        }
	
	                        if (!options.duration) {
	                            delete opts.duration;
	                        }
	
	                        /* The opts object used for reversal is an extension of the options object optionally passed into this
	                           reverse call plus the options used in the previous Velocity call. */
	                        opts = $.extend({}, Data(element).opts, opts);
	
	                        /*************************************
	                           Tweens Container Reconstruction
	                        *************************************/
	
	                        /* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
	                        var lastTweensContainer = $.extend(true, {}, Data(element).tweensContainer);
	
	                        /* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
	                        for (var lastTween in lastTweensContainer) {
	                            /* In addition to tween data, tweensContainers contain an element property that we ignore here. */
	                            if (lastTween !== "element") {
	                                var lastStartValue = lastTweensContainer[lastTween].startValue;
	
	                                lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
	                                lastTweensContainer[lastTween].endValue = lastStartValue;
	
	                                /* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
	                                   Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
	                                   The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
	                                if (!Type.isEmptyObject(options)) {
	                                    lastTweensContainer[lastTween].easing = opts.easing;
	                                }
	
	                                if (Velocity.debug) console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
	                            }
	                        }
	
	                        tweensContainer = lastTweensContainer;
	                    }
	
	                /*****************************************
	                   Tween Data Construction (for Start)
	                *****************************************/
	
	                } else if (action === "start") {
	
	                    /*************************
	                        Value Transferring
	                    *************************/
	
	                    /* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
	                       while the element was in the process of being animated by Velocity, then this current call is safe to use
	                       the end values from the prior call as its start values. Velocity attempts to perform this value transfer
	                       process whenever possible in order to avoid requerying the DOM. */
	                    /* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
	                       then the DOM is queried for the element's current values as a last resort. */
	                    /* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	                    var lastTweensContainer;
	
	                    /* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
	                       to transfer over end values to use as start values. If it's set to true and there is a previous
	                       Velocity call to pull values from, do so. */
	                    if (Data(element).tweensContainer && Data(element).isAnimating === true) {
	                        lastTweensContainer = Data(element).tweensContainer;
	                    }
	
	                    /***************************
	                       Tween Data Calculation
	                    ***************************/
	
	                    /* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
	                    /* Property map values can either take the form of 1) a single value representing the end value,
	                       or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
	                       The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
	                       the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
	                    function parsePropertyValue (valueData, skipResolvingEasing) {
	                        var endValue = undefined,
	                            easing = undefined,
	                            startValue = undefined;
	
	                        /* Handle the array format, which can be structured as one of three potential overloads:
	                           A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
	                        if (Type.isArray(valueData)) {
	                            /* endValue is always the first item in the array. Don't bother validating endValue's value now
	                               since the ensuing property cycling logic does that. */
	                            endValue = valueData[0];
	
	                            /* Two-item array format: If the second item is a number, function, or hex string, treat it as a
	                               start value since easings can only be non-hex strings or arrays. */
	                            if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
	                                startValue = valueData[1];
	                            /* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
	                            } else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
	                                easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
	                                /* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
	                                if (valueData[2] !== undefined) {
	                                    startValue = valueData[2];
	                                }
	                            }
	                        /* Handle the single-value format. */
	                        } else {
	                            endValue = valueData;
	                        }
	
	                        /* Default to the call's easing if a per-property easing type was not defined. */
	                        if (!skipResolvingEasing) {
	                            easing = easing || opts.easing;
	                        }
	
	                        /* If functions were passed in as values, pass the function the current element as its context,
	                           plus the element's index and the element set's size as arguments. Then, assign the returned value. */
	                        if (Type.isFunction(endValue)) {
	                            endValue = endValue.call(element, elementsIndex, elementsLength);
	                        }
	
	                        if (Type.isFunction(startValue)) {
	                            startValue = startValue.call(element, elementsIndex, elementsLength);
	                        }
	
	                        /* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
	                        return [ endValue || 0, easing, startValue ];
	                    }
	
	                    /* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
	                       colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
	                    $.each(propertiesMap, function(property, value) {
	                        /* Find shorthand color properties that have been passed a hex string. */
	                        if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(property)) {
	                            /* Parse the value data for each shorthand. */
	                            var valueData = parsePropertyValue(value, true),
	                                endValue = valueData[0],
	                                easing = valueData[1],
	                                startValue = valueData[2];
	
	                            if (CSS.RegEx.isHex.test(endValue)) {
	                                /* Convert the hex strings into their RGB component arrays. */
	                                var colorComponents = [ "Red", "Green", "Blue" ],
	                                    endValueRGB = CSS.Values.hexToRgb(endValue),
	                                    startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
	                                /* Inject the RGB component tweens into propertiesMap. */
	                                for (var i = 0; i < colorComponents.length; i++) {
	                                    var dataArray = [ endValueRGB[i] ];
	
	                                    if (easing) {
	                                        dataArray.push(easing);
	                                    }
	
	                                    if (startValueRGB !== undefined) {
	                                        dataArray.push(startValueRGB[i]);
	                                    }
	
	                                    propertiesMap[property + colorComponents[i]] = dataArray;
	                                }
	
	                                /* Remove the intermediary shorthand property entry now that we've processed it. */
	                                delete propertiesMap[property];
	                            }
	                        }
	                    });
	
	                    /* Create a tween out of each property, and append its associated data to tweensContainer. */
	                    for (var property in propertiesMap) {
	
	                        /**************************
	                           Start Value Sourcing
	                        **************************/
	
	                        /* Parse out endValue, easing, and startValue from the property's data. */
	                        var valueData = parsePropertyValue(propertiesMap[property]),
	                            endValue = valueData[0],
	                            easing = valueData[1],
	                            startValue = valueData[2];
	
	                        /* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
	                           we force the property to its camelCase styling to normalize it for manipulation. */
	                        property = CSS.Names.camelCase(property);
	
	                        /* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
	                        var rootProperty = CSS.Hooks.getRoot(property),
	                            rootPropertyValue = false;
	
	                        /* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
	                           inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
	                           Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
	                        /* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
	                           there is no way to check for their explicit browser support, and so we skip skip this check for them. */
	                        if (!Data(element).isSVG && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
	                            if (Velocity.debug) console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
	
	                            continue;
	                        }
	
	                        /* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
	                           animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
	                           a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
	                        if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
	                            startValue = 0;
	                        }
	
	                        /* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
	                           for all of the current call's properties that were *also* animated in the previous call. */
	                        /* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
	                        if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
	                            if (startValue === undefined) {
	                                startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
	                            }
	
	                            /* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
	                               instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
	                               attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
	                            rootPropertyValue = Data(element).rootPropertyValueCache[rootProperty];
	                        /* If values were not transferred from a previous Velocity call, query the DOM as needed. */
	                        } else {
	                            /* Handle hooked properties. */
	                            if (CSS.Hooks.registered[property]) {
	                               if (startValue === undefined) {
	                                    rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
	                                    /* Note: The following getPropertyValue() call does not actually trigger a DOM query;
	                                       getPropertyValue() will extract the hook from rootPropertyValue. */
	                                    startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
	                                /* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
	                                   just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
	                                   root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
	                                   to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
	                                } else {
	                                    /* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
	                                    rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
	                                }
	                            /* Handle non-hooked properties that haven't already been defined via forcefeeding. */
	                            } else if (startValue === undefined) {
	                                startValue = CSS.getPropertyValue(element, property); /* GET */
	                            }
	                        }
	
	                        /**************************
	                           Value Data Extraction
	                        **************************/
	
	                        var separatedValue,
	                            endValueUnitType,
	                            startValueUnitType,
	                            operator = false;
	
	                        /* Separates a property value into its numeric value and its unit type. */
	                        function separateValue (property, value) {
	                            var unitType,
	                                numericValue;
	
	                            numericValue = (value || "0")
	                                .toString()
	                                .toLowerCase()
	                                /* Match the unit type at the end of the value. */
	                                .replace(/[%A-z]+$/, function(match) {
	                                    /* Grab the unit type. */
	                                    unitType = match;
	
	                                    /* Strip the unit type off of value. */
	                                    return "";
	                                });
	
	                            /* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
	                            if (!unitType) {
	                                unitType = CSS.Values.getUnitType(property);
	                            }
	
	                            return [ numericValue, unitType ];
	                        }
	
	                        /* Separate startValue. */
	                        separatedValue = separateValue(property, startValue);
	                        startValue = separatedValue[0];
	                        startValueUnitType = separatedValue[1];
	
	                        /* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
	                        separatedValue = separateValue(property, endValue);
	                        endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
	                            operator = subMatch;
	
	                            /* Strip the operator off of the value. */
	                            return "";
	                        });
	                        endValueUnitType = separatedValue[1];
	
	                        /* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
	                        startValue = parseFloat(startValue) || 0;
	                        endValue = parseFloat(endValue) || 0;
	
	                        /***************************************
	                           Property-Specific Value Conversion
	                        ***************************************/
	
	                        /* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
	                        if (endValueUnitType === "%") {
	                            /* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
	                               which is identical to the em unit's behavior, so we piggyback off of that. */
	                            if (/^(fontSize|lineHeight)$/.test(property)) {
	                                /* Convert % into an em decimal value. */
	                                endValue = endValue / 100;
	                                endValueUnitType = "em";
	                            /* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
	                            } else if (/^scale/.test(property)) {
	                                endValue = endValue / 100;
	                                endValueUnitType = "";
	                            /* For RGB components, take the defined percentage of 255 and strip off the unit type. */
	                            } else if (/(Red|Green|Blue)$/i.test(property)) {
	                                endValue = (endValue / 100) * 255;
	                                endValueUnitType = "";
	                            }
	                        }
	
	                        /***************************
	                           Unit Ratio Calculation
	                        ***************************/
	
	                        /* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
	                           %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
	                           for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
	                           from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
	                           1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
	                           2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
	                        /* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
	                           setting values with the target unit type then comparing the returned pixel value. */
	                        /* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
	                           of batching the SETs and GETs together upfront outweights the potential overhead
	                           of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
	                        /* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
	                        function calculateUnitRatios () {
	
	                            /************************
	                                Same Ratio Checks
	                            ************************/
	
	                            /* The properties below are used to determine whether the element differs sufficiently from this call's
	                               previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
	                               of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
	                               this is done to minimize DOM querying. */
	                            var sameRatioIndicators = {
	                                    myParent: element.parentNode || document.body, /* GET */
	                                    position: CSS.getPropertyValue(element, "position"), /* GET */
	                                    fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
	                                },
	                                /* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
	                                samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
	                                /* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
	                                sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
	                            /* Store these ratio indicators call-wide for the next element to compare against. */
	                            callUnitConversionData.lastParent = sameRatioIndicators.myParent;
	                            callUnitConversionData.lastPosition = sameRatioIndicators.position;
	                            callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
	                            /***************************
	                               Element-Specific Units
	                            ***************************/
	
	                            /* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
	                               of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
	                            var measurement = 100,
	                                unitRatios = {};
	
	                            if (!sameEmRatio || !samePercentRatio) {
	                                var dummy = Data(element).isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
	                                Velocity.init(dummy);
	                                sameRatioIndicators.myParent.appendChild(dummy);
	
	                                /* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
	                                   Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
	                                /* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
	                                $.each([ "overflow", "overflowX", "overflowY" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, "hidden");
	                                });
	                                Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
	                                Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
	                                Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
	                                /* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
	                                $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(i, property) {
	                                    Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
	                                });
	                                /* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
	                                Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
	                                /* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
	                                sameRatioIndicators.myParent.removeChild(dummy);
	                            } else {
	                                unitRatios.emToPx = callUnitConversionData.lastEmToPx;
	                                unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
	                                unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
	                            }
	
	                            /***************************
	                               Element-Agnostic Units
	                            ***************************/
	
	                            /* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
	                               once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
	                               that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
	                               so we calculate it now. */
	                            if (callUnitConversionData.remToPx === null) {
	                                /* Default to browsers' default fontSize of 16px in the case of 0. */
	                                callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
	                            }
	
	                            /* Similarly, viewport units are %-relative to the window's inner dimensions. */
	                            if (callUnitConversionData.vwToPx === null) {
	                                callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
	                                callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
	                            }
	
	                            unitRatios.remToPx = callUnitConversionData.remToPx;
	                            unitRatios.vwToPx = callUnitConversionData.vwToPx;
	                            unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
	                            if (Velocity.debug >= 1) console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
	
	                            return unitRatios;
	                        }
	
	                        /********************
	                           Unit Conversion
	                        ********************/
	
	                        /* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
	                        if (/[\/*]/.test(operator)) {
	                            endValueUnitType = startValueUnitType;
	                        /* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
	                           is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
	                           on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
	                           would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
	                        /* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
	                        } else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
	                            /* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
	                            /* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
	                               match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
	                               which remains past the point of the animation's completion. */
	                            if (endValue === 0) {
	                                endValueUnitType = startValueUnitType;
	                            } else {
	                                /* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
	                                   If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
	                                elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
	                                /* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
	                                /* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
	                                var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
	
	                                /* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
	                                   1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
	                                switch (startValueUnitType) {
	                                    case "%":
	                                        /* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
	                                           Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
	                                           to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
	                                        startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;
	
	                                    case "px":
	                                        /* px acts as our midpoint in the unit conversion process; do nothing. */
	                                        break;
	
	                                    default:
	                                        startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
	                                }
	
	                                /* Invert the px ratios to convert into to the target unit. */
	                                switch (endValueUnitType) {
	                                    case "%":
	                                        startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
	                                        break;
	
	                                    case "px":
	                                        /* startValue is already in px, do nothing; we're done. */
	                                        break;
	
	                                    default:
	                                        startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
	                                }
	                            }
	                        }
	
	                        /*********************
	                           Relative Values
	                        *********************/
	
	                        /* Operator logic must be performed last since it requires unit-normalized start and end values. */
	                        /* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
	                           to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
	                           50 points is added on top of the current % value. */
	                        switch (operator) {
	                            case "+":
	                                endValue = startValue + endValue;
	                                break;
	
	                            case "-":
	                                endValue = startValue - endValue;
	                                break;
	
	                            case "*":
	                                endValue = startValue * endValue;
	                                break;
	
	                            case "/":
	                                endValue = startValue / endValue;
	                                break;
	                        }
	
	                        /**************************
	                           tweensContainer Push
	                        **************************/
	
	                        /* Construct the per-property tween object, and push it to the element's tweensContainer. */
	                        tweensContainer[property] = {
	                            rootPropertyValue: rootPropertyValue,
	                            startValue: startValue,
	                            currentValue: startValue,
	                            endValue: endValue,
	                            unitType: endValueUnitType,
	                            easing: easing
	                        };
	
	                        if (Velocity.debug) console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
	                    }
	
	                    /* Along with its property data, store a reference to the element itself onto tweensContainer. */
	                    tweensContainer.element = element;
	                }
	
	                /*****************
	                    Call Push
	                *****************/
	
	                /* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
	                   being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
	                if (tweensContainer.element) {
	                    /* Apply the "velocity-animating" indicator class. */
	                    CSS.Values.addClass(element, "velocity-animating");
	
	                    /* The call array houses the tweensContainers for each element being animated in the current call. */
	                    call.push(tweensContainer);
	
	                    /* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
	                    if (opts.queue === "") {
	                        Data(element).tweensContainer = tweensContainer;
	                        Data(element).opts = opts;
	                    }
	
	                    /* Switch on the element's animating flag. */
	                    Data(element).isAnimating = true;
	
	                    /* Once the final element in this call's element set has been processed, push the call array onto
	                       Velocity.State.calls for the animation tick to immediately begin processing. */
	                    if (elementsIndex === elementsLength - 1) {
	                        /* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
	                           Anything on this call container is subjected to tick() processing. */
	                        Velocity.State.calls.push([ call, elements, opts, null, promiseData.resolver ]);
	
	                        /* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
	                        if (Velocity.State.isTicking === false) {
	                            Velocity.State.isTicking = true;
	
	                            /* Start the tick loop. */
	                            tick();
	                        }
	                    } else {
	                        elementsIndex++;
	                    }
	                }
	            }
	
	            /* When the queue option is set to false, the call skips the element's queue and fires immediately. */
	            if (opts.queue === false) {
	                /* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
	                   we manually inject the delay property here with an explicit setTimeout. */
	                if (opts.delay) {
	                    setTimeout(buildQueue, opts.delay);
	                } else {
	                    buildQueue();
	                }
	            /* Otherwise, the call undergoes element queueing as normal. */
	            /* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
	            } else {
	                $.queue(element, opts.queue, function(next, clearQueue) {
	                    /* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
	                       so it's fine if this is repeatedly triggered for each element in the associated call.) */
	                    if (clearQueue === true) {
	                        if (promiseData.promise) {
	                            promiseData.resolver(elements);
	                        }
	
	                        /* Do not continue with animation queueing. */
	                        return true;
	                    }
	
	                    /* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
	                       See completeCall() for further details. */
	                    Velocity.velocityQueueEntryFlag = true;
	
	                    buildQueue(next);
	                });
	            }
	
	            /*********************
	                Auto-Dequeuing
	            *********************/
	
	            /* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
	               must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
	               for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
	               queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
	               first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
	            /* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
	               each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
	            /* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
	               Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
	            if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
	                $.dequeue(element);
	            }
	        }
	
	        /**************************
	           Element Set Iteration
	        **************************/
	
	        /* If the "nodeType" property exists on the elements variable, we're animating a single element.
	           Place it in an array so that $.each() can iterate over it. */
	        $.each(elements, function(i, element) {
	            /* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
	            if (Type.isNode(element)) {
	                processElement.call(element);
	            }
	        });
	
	        /******************
	           Option: Loop
	        ******************/
	
	        /* The loop option accepts an integer indicating how many times the element should loop between the values in the
	           current call's properties map and the element's property values prior to this call. */
	        /* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
	           to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
	           which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
	        var opts = $.extend({}, Velocity.defaults, options),
	            reverseCallsCount;
	
	        opts.loop = parseInt(opts.loop);
	        reverseCallsCount = (opts.loop * 2) - 1;
	
	        if (opts.loop) {
	            /* Double the loop count to convert it into its appropriate number of "reverse" calls.
	               Subtract 1 from the resulting value since the current call is included in the total alternation count. */
	            for (var x = 0; x < reverseCallsCount; x++) {
	                /* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
	                   isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
	                   call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
	                var reverseOptions = {
	                    delay: opts.delay,
	                    progress: opts.progress
	                };
	
	                /* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
	                   so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
	                if (x === reverseCallsCount - 1) {
	                    reverseOptions.display = opts.display;
	                    reverseOptions.visibility = opts.visibility;
	                    reverseOptions.complete = opts.complete;
	                }
	
	                animate(elements, "reverse", reverseOptions);
	            }
	        }
	
	        /***************
	            Chaining
	        ***************/
	
	        /* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
	        return getChain();
	    };
	
	    /* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
	    Velocity = $.extend(animate, Velocity);
	    /* For legacy support, also expose the literal animate method. */
	    Velocity.animate = animate;
	
	    /**************
	        Timing
	    **************/
	
	    /* Ticker function. */
	    var ticker = window.requestAnimationFrame || rAFShim;
	
	    /* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
	       To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
	       devices to avoid wasting battery power on inactive tabs. */
	    /* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
	    if (!Velocity.State.isMobile && document.hidden !== undefined) {
	        document.addEventListener("visibilitychange", function() {
	            /* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
	            if (document.hidden) {
	                ticker = function(callback) {
	                    /* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
	                    return setTimeout(function() { callback(true) }, 16);
	                };
	
	                /* The rAF loop has been paused by the browser, so we manually restart the tick. */
	                tick();
	            } else {
	                ticker = window.requestAnimationFrame || rAFShim;
	            }
	        });
	    }
	
	    /************
	        Tick
	    ************/
	
	    /* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
	    function tick (timestamp) {
	        /* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
	           We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
	           the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
	           calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
	           the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
	           by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
	        if (timestamp) {
	            /* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
	               under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
	            var timeCurrent = (new Date).getTime();
	
	            /********************
	               Call Iteration
	            ********************/
	
	            var callsLength = Velocity.State.calls.length;
	
	            /* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
	               when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
	               has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
	            if (callsLength > 10000) {
	                Velocity.State.calls = compactSparseArray(Velocity.State.calls);
	            }
	
	            /* Iterate through each active call. */
	            for (var i = 0; i < callsLength; i++) {
	                /* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
	                if (!Velocity.State.calls[i]) {
	                    continue;
	                }
	
	                /************************
	                   Call-Wide Variables
	                ************************/
	
	                var callContainer = Velocity.State.calls[i],
	                    call = callContainer[0],
	                    opts = callContainer[2],
	                    timeStart = callContainer[3],
	                    firstTick = !!timeStart,
	                    tweenDummyValue = null;
	
	                /* If timeStart is undefined, then this is the first time that this call has been processed by tick().
	                   We assign timeStart now so that its value is as close to the real animation start time as possible.
	                   (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
	                   between that time and now would cause the first few frames of the tween to be skipped since
	                   percentComplete is calculated relative to timeStart.) */
	                /* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
	                   first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
	                   same style value as the element's current value. */
	                if (!timeStart) {
	                    timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
	                }
	
	                /* The tween's completion percentage is relative to the tween's start time, not the tween's start value
	                   (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
	                   Accordingly, we ensure that percentComplete does not exceed 1. */
	                var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
	
	                /**********************
	                   Element Iteration
	                **********************/
	
	                /* For every call, iterate through each of the elements in its set. */
	                for (var j = 0, callLength = call.length; j < callLength; j++) {
	                    var tweensContainer = call[j],
	                        element = tweensContainer.element;
	
	                    /* Check to see if this element has been deleted midway through the animation by checking for the
	                       continued existence of its data cache. If it's gone, skip animating this element. */
	                    if (!Data(element)) {
	                        continue;
	                    }
	
	                    var transformPropertyExists = false;
	
	                    /**********************************
	                       Display & Visibility Toggling
	                    **********************************/
	
	                    /* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
	                       (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
	                    if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
	                        if (opts.display === "flex") {
	                            var flexValues = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
	
	                            $.each(flexValues, function(i, flexValue) {
	                                CSS.setPropertyValue(element, "display", flexValue);
	                            });
	                        }
	
	                        CSS.setPropertyValue(element, "display", opts.display);
	                    }
	
	                    /* Same goes with the visibility option, but its "none" equivalent is "hidden". */
	                    if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                        CSS.setPropertyValue(element, "visibility", opts.visibility);
	                    }
	
	                    /************************
	                       Property Iteration
	                    ************************/
	
	                    /* For every element, iterate through each property. */
	                    for (var property in tweensContainer) {
	                        /* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
	                        if (property !== "element") {
	                            var tween = tweensContainer[property],
	                                currentValue,
	                                /* Easing can either be a pre-genereated function or a string that references a pre-registered easing
	                                   on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
	                                easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
	                            /******************************
	                               Current Value Calculation
	                            ******************************/
	
	                            /* If this is the last tick pass (if we've reached 100% completion for this tween),
	                               ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
	                            if (percentComplete === 1) {
	                                currentValue = tween.endValue;
	                            /* Otherwise, calculate currentValue based on the current delta from startValue. */
	                            } else {
	                                var tweenDelta = tween.endValue - tween.startValue;
	                                currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
	                                /* If no value change is occurring, don't proceed with DOM updating. */
	                                if (!firstTick && (currentValue === tween.currentValue)) {
	                                    continue;
	                                }
	                            }
	
	                            tween.currentValue = currentValue;
	
	                            /* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
	                               it can be passed into the progress callback. */
	                            if (property === "tween") {
	                                tweenDummyValue = currentValue;
	                            } else {
	                                /******************
	                                   Hooks: Part I
	                                ******************/
	
	                                /* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
	                                   for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
	                                   rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
	                                   updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
	                                   subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
	                                if (CSS.Hooks.registered[property]) {
	                                    var hookRoot = CSS.Hooks.getRoot(property),
	                                        rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
	                                    if (rootPropertyValueCache) {
	                                        tween.rootPropertyValue = rootPropertyValueCache;
	                                    }
	                                }
	
	                                /*****************
	                                    DOM Update
	                                *****************/
	
	                                /* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
	                                /* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
	                                var adjustedSetData = CSS.setPropertyValue(element, /* SET */
	                                                                           property,
	                                                                           tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
	                                                                           tween.rootPropertyValue,
	                                                                           tween.scrollData);
	
	                                /*******************
	                                   Hooks: Part II
	                                *******************/
	
	                                /* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
	                                if (CSS.Hooks.registered[property]) {
	                                    /* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
	                                    if (CSS.Normalizations.registered[hookRoot]) {
	                                        Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
	                                    } else {
	                                        Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
	                                    }
	                                }
	
	                                /***************
	                                   Transforms
	                                ***************/
	
	                                /* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
	                                if (adjustedSetData[0] === "transform") {
	                                    transformPropertyExists = true;
	                                }
	
	                            }
	                        }
	                    }
	
	                    /****************
	                        mobileHA
	                    ****************/
	
	                    /* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
	                       It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
	                    if (opts.mobileHA) {
	                        /* Don't set the null transform hack if we've already done so. */
	                        if (Data(element).transformCache.translate3d === undefined) {
	                            /* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
	                            Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
	                            transformPropertyExists = true;
	                        }
	                    }
	
	                    if (transformPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	                }
	
	                /* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
	                   Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
	                if (opts.display !== undefined && opts.display !== "none") {
	                    Velocity.State.calls[i][2].display = false;
	                }
	                if (opts.visibility !== undefined && opts.visibility !== "hidden") {
	                    Velocity.State.calls[i][2].visibility = false;
	                }
	
	                /* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
	                if (opts.progress) {
	                    opts.progress.call(callContainer[1],
	                                       callContainer[1],
	                                       percentComplete,
	                                       Math.max(0, (timeStart + opts.duration) - timeCurrent),
	                                       timeStart,
	                                       tweenDummyValue);
	                }
	
	                /* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
	                if (percentComplete === 1) {
	                    completeCall(i);
	                }
	            }
	        }
	
	        /* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
	        if (Velocity.State.isTicking) {
	            ticker(tick);
	        }
	    }
	
	    /**********************
	        Call Completion
	    **********************/
	
	    /* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
	    function completeCall (callIndex, isStopped) {
	        /* Ensure the call exists. */
	        if (!Velocity.State.calls[callIndex]) {
	            return false;
	        }
	
	        /* Pull the metadata from the call. */
	        var call = Velocity.State.calls[callIndex][0],
	            elements = Velocity.State.calls[callIndex][1],
	            opts = Velocity.State.calls[callIndex][2],
	            resolver = Velocity.State.calls[callIndex][4];
	
	        var remainingCallsExist = false;
	
	        /*************************
	           Element Finalization
	        *************************/
	
	        for (var i = 0, callLength = call.length; i < callLength; i++) {
	            var element = call[i].element;
	
	            /* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
	            /* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
	            /* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
	            if (!isStopped && !opts.loop) {
	                if (opts.display === "none") {
	                    CSS.setPropertyValue(element, "display", opts.display);
	                }
	
	                if (opts.visibility === "hidden") {
	                    CSS.setPropertyValue(element, "visibility", opts.visibility);
	                }
	            }
	
	            /* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
	               a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
	               an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
	               we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
	               is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
	            if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
	                /* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
	                if (Data(element)) {
	                    Data(element).isAnimating = false;
	                    /* Clear the element's rootPropertyValueCache, which will become stale. */
	                    Data(element).rootPropertyValueCache = {};
	
	                    var transformHAPropertyExists = false;
	                    /* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
	                    $.each(CSS.Lists.transforms3D, function(i, transformName) {
	                        var defaultValue = /^scale/.test(transformName) ? 1 : 0,
	                            currentValue = Data(element).transformCache[transformName];
	
	                        if (Data(element).transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
	                            transformHAPropertyExists = true;
	
	                            delete Data(element).transformCache[transformName];
	                        }
	                    });
	
	                    /* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
	                    if (opts.mobileHA) {
	                        transformHAPropertyExists = true;
	                        delete Data(element).transformCache.translate3d;
	                    }
	
	                    /* Flush the subproperty removals to the DOM. */
	                    if (transformHAPropertyExists) {
	                        CSS.flushTransformCache(element);
	                    }
	
	                    /* Remove the "velocity-animating" indicator class. */
	                    CSS.Values.removeClass(element, "velocity-animating");
	                }
	            }
	
	            /*********************
	               Option: Complete
	            *********************/
	
	            /* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
	            /* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
	            if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
	                /* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
	                try {
	                    opts.complete.call(elements, elements);
	                } catch (error) {
	                    setTimeout(function() { throw error; }, 1);
	                }
	            }
	
	            /**********************
	               Promise Resolving
	            **********************/
	
	            /* Note: Infinite loops don't return promises. */
	            if (resolver && opts.loop !== true) {
	                resolver(elements);
	            }
	
	            /****************************
	               Option: Loop (Infinite)
	            ****************************/
	
	            if (Data(element) && opts.loop === true && !isStopped) {
	                /* If a rotateX/Y/Z property is being animated to 360 deg with loop:true, swap tween start/end values to enable
	                   continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
	                $.each(Data(element).tweensContainer, function(propertyName, tweenContainer) {
	                    if (/^rotate/.test(propertyName) && parseFloat(tweenContainer.endValue) === 360) {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 360;
	                    }
	
	                    if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
	                        tweenContainer.endValue = 0;
	                        tweenContainer.startValue = 100;
	                    }
	                });
	
	                Velocity(element, "reverse", { loop: true, delay: opts.delay });
	            }
	
	            /***************
	               Dequeueing
	            ***************/
	
	            /* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
	               which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
	               $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
	            if (opts.queue !== false) {
	                $.dequeue(element, opts.queue);
	            }
	        }
	
	        /************************
	           Calls Array Cleanup
	        ************************/
	
	        /* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
	          (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
	        Velocity.State.calls[callIndex] = false;
	
	        /* Iterate through the calls array to determine if this was the final in-progress animation.
	           If so, set a flag to end ticking and clear the calls array. */
	        for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
	            if (Velocity.State.calls[j] !== false) {
	                remainingCallsExist = true;
	
	                break;
	            }
	        }
	
	        if (remainingCallsExist === false) {
	            /* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
	            Velocity.State.isTicking = false;
	
	            /* Clear the calls array so that its length is reset. */
	            delete Velocity.State.calls;
	            Velocity.State.calls = [];
	        }
	    }
	
	    /******************
	        Frameworks
	    ******************/
	
	    /* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
	       If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
	       also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
	       accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
	       (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
	    global.Velocity = Velocity;
	
	    if (global !== window) {
	        /* Assign the element function to Velocity's core animate() method. */
	        global.fn.velocity = animate;
	        /* Assign the object function's defaults to Velocity's global defaults object. */
	        global.fn.velocity.defaults = Velocity.defaults;
	    }
	
	    /***********************
	       Packaged Redirects
	    ***********************/
	
	    /* slideUp, slideDown */
	    $.each([ "Down", "Up" ], function(i, direction) {
	        Velocity.Redirects["slide" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                begin = opts.begin,
	                complete = opts.complete,
	                computedValues = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
	                inlineValues = {};
	
	            if (opts.display === undefined) {
	                /* Show the element before slideDown begins and hide the element after slideUp completes. */
	                /* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
	                opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
	            }
	
	            opts.begin = function() {
	                /* If the user passed in a begin callback, fire it now. */
	                begin && begin.call(elements, elements);
	
	                /* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
	                for (var property in computedValues) {
	                    inlineValues[property] = element.style[property];
	
	                    /* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
	                       use forcefeeding to start from computed values and animate down to 0. */
	                    var propertyValue = Velocity.CSS.getPropertyValue(element, property);
	                    computedValues[property] = (direction === "Down") ? [ propertyValue, 0 ] : [ 0, propertyValue ];
	                }
	
	                /* Force vertical overflow content to clip so that sliding works as expected. */
	                inlineValues.overflow = element.style.overflow;
	                element.style.overflow = "hidden";
	            }
	
	            opts.complete = function() {
	                /* Reset element to its pre-slide inline values once its slide animation is complete. */
	                for (var property in inlineValues) {
	                    element.style[property] = inlineValues[property];
	                }
	
	                /* If the user passed in a complete callback, fire it now. */
	                complete && complete.call(elements, elements);
	                promiseData && promiseData.resolver(elements);
	            };
	
	            Velocity(element, computedValues, opts);
	        };
	    });
	
	    /* fadeIn, fadeOut */
	    $.each([ "In", "Out" ], function(i, direction) {
	        Velocity.Redirects["fade" + direction] = function (element, options, elementsIndex, elementsSize, elements, promiseData) {
	            var opts = $.extend({}, options),
	                propertiesMap = { opacity: (direction === "In") ? 1 : 0 },
	                originalComplete = opts.complete;
	
	            /* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
	               callbacks by firing them only when the final element has been reached. */
	            if (elementsIndex !== elementsSize - 1) {
	                opts.complete = opts.begin = null;
	            } else {
	                opts.complete = function() {
	                    if (originalComplete) {
	                        originalComplete.call(elements, elements);
	                    }
	
	                    promiseData && promiseData.resolver(elements);
	                }
	            }
	
	            /* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
	            /* Note: We allow users to pass in "null" to skip display setting altogether. */
	            if (opts.display === undefined) {
	                opts.display = (direction === "In" ? "auto" : "none");
	            }
	
	            Velocity(this, propertiesMap, opts);
	        };
	    });
	
	    return Velocity;
	}((window.jQuery || window.Zepto || window), window, document);
	}));
	
	/******************
	   Known Issues
	******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ReactIScroll = __webpack_require__(144);
	
	var _ReactIScroll2 = _interopRequireDefault(_ReactIScroll);
	
	var _iScroll = undefined;
	// for server rendering..
	if (true) {
	  // https://github.com/schovi/react-iscroll
	  _iScroll = __webpack_require__(150);
	}
	
	// Note, it only support ie9+, if you want to support ie8, please tranfer to
	// `scrollArea`.
	//
	
	var IScroll = (function (_Component) {
	  _inherits(IScroll, _Component);
	
	  function IScroll() {
	    var _this = this;
	
	    _classCallCheck(this, IScroll);
	
	    _get(Object.getPrototypeOf(IScroll.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {};
	
	    this.onRefresh = function (iScrollInstance) {
	      var yScroll = iScrollInstance.y;
	      if (_this.state.y != yScroll) {
	        _this.setState({ y: yScroll });
	      }
	    };
	  }
	
	  _createClass(IScroll, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _ReactIScroll2['default'],
	        {
	          iscroll: _iScroll,
	          onRefresh: this.onRefresh },
	        this.props.children
	      );
	    }
	  }]);
	
	  return IScroll;
	})(_react.Component);
	
	exports['default'] = IScroll;
	module.exports = exports['default'];

/***/ },
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Button = __webpack_require__(182);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ButtonToolbar = __webpack_require__(183);
	
	var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);
	
	exports['default'] = {
	  Button: _Button2['default'],
	  ButtonToolbar: _ButtonToolbar2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _deepEqual = __webpack_require__(147);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	// Events available on iScroll instance
	// [`iscroll event name`, `react component event name`]
	var availableEvents = [['beforeScrollStart', "onBeforeScrollStart"], ['scrollCancel', "onScrollCancel"], ['scrollStart', "onScrollStart"], ['scroll', "onScroll"], ['scrollEnd', "onScrollEnd"], ['flick', "onFlick"], ['zoomStart', "onZoomStart"], ['zoomEnd', "onZoomEnd"]];
	
	// Generate propTypes with event function validating
	var propTypes = {
	  defer: _react.PropTypes.number,
	  options: _react.PropTypes.object,
	  iscroll: function iscroll(props, propName, componentName) {
	    var iscroll = props[propName];
	    var proto = iscroll && iscroll.prototype;
	
	    if (!iscroll || !proto || !proto.version || !proto.scrollTo) {
	      return new Error(componentName + ": iscroll not passed to component props.");
	    } else {
	      if (!/^5\..*/.test(proto.version)) {
	        console.warn(componentName + ": different version than 5.x.y of iscroll is loaded. Some features won't work properly.");
	      }
	
	      if (props.options && props.options.zoom && !proto.zoom) {
	        console.warn(componentName + ": options.zoom is set, but iscroll-zoom version is not loaded. This feature won't works properly.");
	      }
	    }
	  },
	  onRefresh: _react.PropTypes.func
	};
	
	for (var i = 0; i < availableEvents.length; i++) {
	  propTypes[availableEvents[i][1]] = _react.PropTypes.func;
	}
	
	var ReactIScroll = (function (_Component) {
	  _inherits(ReactIScroll, _Component);
	
	  _createClass(ReactIScroll, null, [{
	    key: 'displayName',
	    value: 'ReactIScroll',
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: propTypes,
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      defer: 0,
	      options: {},
	      style: {
	        position: "relative",
	        height: "100%",
	        width: "100%",
	        overflow: "hidden"
	      }
	    },
	    enumerable: true
	  }]);
	
	  function ReactIScroll(props) {
	    _classCallCheck(this, ReactIScroll);
	
	    _get(Object.getPrototypeOf(ReactIScroll.prototype), 'constructor', this).call(this, props);
	    this._queuedCallbacks = [];
	    this._iScrollBindedEvents = {};
	  }
	
	  _createClass(ReactIScroll, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._initializeIScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._teardownIScroll();
	    }
	
	    // There is no state, we can compare only props.
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _deepEqual2['default'])(this.props, nextProps);
	    }
	
	    // Check if iscroll options has changed and recreate instance with new one
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _this = this;
	
	      // If options are same, iscroll behaviour will not change. Just refresh events and trigger refresh
	      if ((0, _deepEqual2['default'])(prevProps.options, this.props.options)) {
	        this._updateIScrollEvents(prevProps, this.props);
	        this.refresh();
	
	        // If options changed, we will destroy iScroll instance and create new one with same scroll position
	        // TODO test if this will work with indicators
	      } else {
	          this.withIScroll(true, function (iScrollInstance) {
	            // Save current state
	            var x = iScrollInstance.x;
	            var y = iScrollInstance.y;
	            var scale = iScrollInstance.scale;
	
	            // Destroy current and Create new instance of iscroll
	            _this._teardownIScroll();
	            _this._initializeIScroll();
	
	            _this.withIScroll(true, function (newIScrollInstance) {
	              // Restore previous state
	              if (scale && newIScrollInstance.zoom) {
	                newIScrollInstance.zoom(scale, 0, 0, 0);
	              }
	
	              newIScrollInstance.scrollTo(x, y);
	            });
	          });
	        }
	    }
	  }, {
	    key: 'getIScroll',
	    value: function getIScroll() {
	      return this._iScrollInstance;
	    }
	  }, {
	    key: 'getIScrollInstance',
	    value: function getIScrollInstance() {
	      console.warn("Function 'getIScrollInstance' is deprecated. Instead use 'getIScroll'");
	      return this._iScrollInstance;
	    }
	  }, {
	    key: 'withIScroll',
	    value: function withIScroll(waitForInit, callback) {
	      if (!callback && typeof waitForInit == "function") {
	        callback = waitForInit;
	      }
	
	      if (this.getIScroll()) {
	        callback(this.getIScroll());
	      } else if (waitForInit === true) {
	        this._queuedCallbacks.push(callback);
	      }
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      this.withIScroll(function (iScroll) {
	        return iScroll.refresh();
	      });
	    }
	  }, {
	    key: '_initializeIScroll',
	    value: function _initializeIScroll() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var iScroll = _props.iscroll;
	      var options = _props.options;
	      var defer = _props.defer;
	
	      setTimeout(function () {
	        // Create iScroll instance with given options
	        var iScrollInstance = new iScroll(_reactDom2['default'].findDOMNode(_this2), options);
	        _this2._iScrollInstance = iScrollInstance;
	
	        // TODO there should be new event 'onInitialize'
	        _this2._triggerRefreshEvent();
	
	        // Patch iscroll instance .refresh() function to trigger our onRefresh event
	        var origRefresh = iScrollInstance.refresh;
	
	        iScrollInstance.refresh = function () {
	          origRefresh.apply(iScrollInstance);
	          _this2._triggerRefreshEvent();
	        };
	
	        // Bind iScroll events
	        _this2._bindIScrollEvents();
	
	        _this2._callQueuedCallbacks();
	      }, defer);
	    }
	  }, {
	    key: '_callQueuedCallbacks',
	    value: function _callQueuedCallbacks() {
	      var callbacks = this._queuedCallbacks,
	          len = callbacks.length;
	
	      this._queuedCallbacks = [];
	
	      for (var _i = 0; _i < len; _i++) {
	        callbacks[_i](this.getIScroll());
	      }
	    }
	  }, {
	    key: '_teardownIScroll',
	    value: function _teardownIScroll() {
	      this._iScrollInstance.destroy();
	      this._iScrollInstance = undefined;
	    }
	  }, {
	    key: '_bindIScrollEvents',
	    value: function _bindIScrollEvents() {
	      // Bind events on iScroll instance
	      this._iScrollBindedEvents = {};
	      this._updateIScrollEvents({}, this.props);
	    }
	
	    // Iterate through available events and update one by one
	  }, {
	    key: '_updateIScrollEvents',
	    value: function _updateIScrollEvents(prevProps, nextProps) {
	      var len = availableEvents.length;
	
	      for (var _i2 = 0; _i2 < len; _i2++) {
	        var _availableEvents$_i2 = _slicedToArray(availableEvents[_i2], 2);
	
	        var iScrollEventName = _availableEvents$_i2[0];
	        var reactEventName = _availableEvents$_i2[1];
	
	        this._updateIScrollEvent(iScrollEventName, prevProps[reactEventName], nextProps[reactEventName]);
	      }
	    }
	
	    // Unbind and/or Bind event if it was changed during update
	  }, {
	    key: '_updateIScrollEvent',
	    value: function _updateIScrollEvent(iScrollEventName, prevEvent, currentEvent) {
	      var _this3 = this;
	
	      if (prevEvent !== currentEvent) {
	        this.withIScroll(true, function (iScrollInstance) {
	          var currentEvents = _this3._iScrollBindedEvents;
	
	          if (prevEvent) {
	            iScrollInstance.off(iScrollEventName, currentEvents[iScrollEventName]);
	            currentEvents[iScrollEventName] = undefined;
	          }
	
	          if (currentEvent) {
	            var wrappedCallback = function wrappedCallback() {
	              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	              }
	
	              currentEvent.apply(undefined, [iScrollInstance].concat(args));
	            };
	
	            iScrollInstance.on(iScrollEventName, wrappedCallback);
	            currentEvents[iScrollEventName] = wrappedCallback;
	          }
	        });
	      }
	    }
	  }, {
	    key: '_triggerRefreshEvent',
	    value: function _triggerRefreshEvent() {
	      var onRefresh = this.props.onRefresh;
	
	      if (onRefresh) {
	        this.withIScroll(function (iScrollInstance) {
	          return onRefresh(iScrollInstance);
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: this.props.className, style: this.props.style },
	        _react2['default'].createElement(
	          'div',
	          { style: this.props.scrollerStyle },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return ReactIScroll;
	})(_react.Component);
	
	exports['default'] = ReactIScroll;
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcNotification = __webpack_require__(213);
	
	var _rcNotification2 = _interopRequireDefault(_rcNotification);
	
	if (true) {
	  __webpack_require__(196);
	}
	var defaultDuration = 1.5;
	var top = undefined;
	var messageInstance = undefined;
	var key = 1;
	
	function getMessageInstance() {
	  messageInstance = messageInstance || _rcNotification2['default'].newInstance({
	    prefixCls: 'message',
	    transitionName: 'move-up',
	    style: {
	      top: top
	    }
	  });
	  return messageInstance;
	}
	
	function notice(content, duration, type, onClose) {
	  if (duration === undefined) duration = defaultDuration;
	
	  var iconClass = ({
	    'info': 'glyph-notification message-info',
	    'success': 'glyph-notification message-success',
	    'danger': 'glyph-notification message-danger',
	    'loading': 'glyph-spinner glyph-spin message-loading'
	  })[type];
	
	  var instance = getMessageInstance();
	  var noticeContent = _react2['default'].createElement(
	    'div',
	    { className: 'message-custom-content' },
	    _react2['default'].createElement('i', { className: 'glyph-icon ' + iconClass }),
	    _react2['default'].createElement(
	      'span',
	      null,
	      content
	    )
	  );
	
	  instance.notice({
	    key: key,
	    duration: duration,
	    style: {},
	    content: noticeContent,
	    onClose: onClose
	  });
	
	  return (function () {
	    var target = key++;
	    return function () {
	      instance.removeNotice(target);
	    };
	  })();
	}
	
	exports['default'] = {
	  info: function info(content, duration, onClose) {
	    return notice(content, duration, 'info', onClose);
	  },
	  success: function success(content, duration, onClose) {
	    return notice(content, duration, 'success', onClose);
	  },
	  error: function error(content, duration, onClose) {
	    return notice(content, duration, 'danger', onClose);
	  },
	  loading: function loading(content, duration, onClose) {
	    return notice(content, duration, 'loading', onClose);
	  },
	  config: function config(options) {
	    if (options.top) {
	      top = options.top;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(21);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	if (true) {
	  __webpack_require__(202);
	}
	
	var TagItem = (function (_Component) {
	  _inherits(TagItem, _Component);
	
	  function TagItem() {
	    var _this = this;
	
	    _classCallCheck(this, TagItem);
	
	    _get(Object.getPrototypeOf(TagItem.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      closing: false,
	      closed: false
	    };
	
	    this.close = function (e) {
	      var dom = _reactDom2['default'].findDOMNode(_this);
	      dom.style.width = dom.offsetWidth + 'px';
	      // It's Magic Code, don't know why
	      dom.style.width = dom.offsetWidth + 'px';
	      _this.setState({
	        closing: true
	      });
	    };
	  }
	
	  _createClass(TagItem, [{
	    key: 'animationEnd',
	    value: function animationEnd() {
	      // invoke delete while animation ending.
	      this.props.onDelete.call(this, e);
	      this.setState({
	        closed: true,
	        closing: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var close = this.props.closable ? _react2['default'].createElement('i', { className: 'glyph-icon glyph-cancel-circle', onClick: this.close }) : '';
	
	      var themeClass = this.props.amStyle ? this.props.prefixCls + '-' + this.props.amStyle : '';
	      var className = this.props.prefixCls + ' ' + themeClass;
	      className = this.state.closing ? className + ' ' + this.props.prefixCls + '-close' : className;
	
	      return this.state.closed ? null : _react2['default'].createElement(
	        _rcAnimate2['default'],
	        { component: '',
	          showProp: 'data-show',
	          transitionName: 'zoom-tag',
	          onEnd: this.animationEnd.bind(this) },
	        _react2['default'].createElement(
	          'div',
	          { 'data-show': !this.state.closing, className: className },
	          _react2['default'].createElement(
	            'a',
	            { className: this.props.prefixCls + '-text' },
	            this.props.children
	          ),
	          close
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      prefixCls: 'tag',
	      closable: false,
	      amStyle: '',
	      onDelete: function onDelete() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      closale: _react2['default'].PropTypes.bool,
	      amStyle: _react2['default'].PropTypes.oneOf(['', 'default', 'primary', 'secondary', 'success', 'warning', 'danger']),
	      onDelete: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }]);
	
	  return TagItem;
	})(_react.Component);
	
	exports['default'] = TagItem;
	module.exports = exports['default'];

/***/ },
/* 147 */
[470, 149, 148],
/* 148 */
377,
/* 149 */
378,
/* 150 */
/***/ function(module, exports) {

	/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };
	
	var utils = (function () {
		var me = {};
	
		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
	
			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}
	
			return false;
		})();
	
		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}
	
		me.getTime = Date.now || function getTime () { return new Date().getTime(); };
	
		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};
	
		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};
	
		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};
	
		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ? 
				'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10):
				pointerEvent;
		};
	
		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;
	
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
	
			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;
	
			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}
	
			return {
				destination: Math.round(destination),
				duration: duration
			};
		};
	
		var _transform = _prefixStyle('transform');
	
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});
	
		// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !(/Chrome\/\d/.test(window.navigator.appVersion));
	
		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});
	
		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};
	
		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}
	
			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};
	
		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}
	
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};
	
		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
	
			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084
	
			return {
				left: left,
				top: top
			};
		};
	
		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}
	
			return false;
		};
	
		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,
	
			mousedown: 2,
			mousemove: 2,
			mouseup: 2,
	
			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,
	
			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});
	
		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;
	
					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }
	
					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});
	
		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};
	
		me.click = function (e) {
			var target = e.target,
				ev;
	
			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);
	
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};
	
		return me;
	})();
	
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance
	
		this.options = {
	
	// INSERT POINT: OPTIONS 
	
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
	
			bounce: true,
			bounceTime: 600,
			bounceEasing: '',
	
			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
	
			HWCompositing: true,
			useTransition: true,
			useTransform: true
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
	
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
	
		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
	
		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
	
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
	
		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}
	
	// INSERT POINT: NORMALIZATION
	
		// Some defaults	
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
	
	// INSERT POINT: DEFAULTS
	
		this._init();
		this.refresh();
	
		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}
	
	IScroll.prototype = {
		version: '5.1.3',
	
		_init: function () {
			this._initEvents();
	
	// INSERT POINT: _init
	
		},
	
		destroy: function () {
			this._initEvents(true);
	
			this._execEvent('destroy');
		},
	
		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}
	
			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},
	
		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
				if ( e.button !== 0 ) {
					return;
				}
			}
	
			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.touches ? e.touches[0] : e,
				pos;
	
			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
	
			this._transitionTime();
	
			this.startTime = utils.getTime();
	
			if ( this.options.useTransition && this.isInTransition ) {
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}
	
			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;
	
			this._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}
	
			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;
	
			this.pointX		= point.pageX;
			this.pointY		= point.pageY;
	
			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);
	
			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}
	
			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}
	
			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}
	
				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}
	
				deltaX = 0;
			}
	
			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}
	
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			this._translate(newX, newY);
	
	/* REPLACE START: _move */
	
			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}
	
	/* REPLACE END: _move */
	
		},
	
		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';
	
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
	
			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}
	
			this.scrollTo(newX, newY);	// ensures that the last position is rounded
	
			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}
	
				if ( this.options.click ) {
					utils.click(e);
				}
	
				this._execEvent('scrollCancel');
				return;
			}
	
			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}
	
			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}
	
	// INSERT POINT: _end
	
			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}
	
				this.scrollTo(newX, newY, time, easing);
				return;
			}
	
			this._execEvent('scrollEnd');
		},
	
		_resize: function () {
			var that = this;
	
			clearTimeout(this.resizeTimeout);
	
			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},
	
		resetPosition: function (time) {
			var x = this.x,
				y = this.y;
	
			time = time || 0;
	
			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			if ( x == this.x && y == this.y ) {
				return false;
			}
	
			this.scrollTo(x, y, time, this.options.bounceEasing);
	
			return true;
		},
	
		disable: function () {
			this.enabled = false;
		},
	
		enable: function () {
			this.enabled = true;
		},
	
		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow
	
			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;
	
	/* REPLACE START: refresh */
	
			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;
	
			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;
	
	/* REPLACE END: refresh */
	
			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
	
			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}
	
			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}
	
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
	
			this.wrapperOffset = utils.offset(this.wrapper);
	
			this._execEvent('refresh');
	
			this.resetPosition();
	
	// INSERT POINT: _refresh
	
		},
	
		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}
	
			this._events[type].push(fn);
		},
	
		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}
	
			var index = this._events[type].indexOf(fn);
	
			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},
	
		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}
	
			var i = 0,
				l = this._events[type].length;
	
			if ( !l ) {
				return;
			}
	
			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},
	
		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
	
			this.scrollTo(x, y, time, easing);
		},
	
		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;
	
			this.isInTransition = this.options.useTransition && time > 0;
	
			if ( !time || (this.options.useTransition && easing.style) ) {
				this._transitionTimingFunction(easing.style);
				this._transitionTime(time);
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},
	
		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);
	
			if ( !el ) {
				return;
			}
	
			var pos = utils.offset(el);
	
			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;
	
			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}
	
			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;
	
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;
	
			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;
	
			this.scrollTo(pos.left, pos.top, time, easing);
		},
	
		_transitionTime: function (time) {
			time = time || 0;
	
			this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
			}
	
	// INSERT POINT: _transitionTime
	
		},
	
		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
	
	// INSERT POINT: _transitionTimingFunction
	
		},
	
		_translate: function (x, y) {
			if ( this.options.useTransform ) {
	
	/* REPLACE START: _translate */
	
				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	
	/* REPLACE END: _translate */
	
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}
	
			this.x = x;
			this.y = y;
	
	// INSERT POINT: _translate
	
		},
	
		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;
	
			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);
	
			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}
	
			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}
	
			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}
	
			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}
	
			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},
	
		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;
	
			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}
	
			return { x: x, y: y };
		},
	
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;
	
			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;
	
				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);
	
					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}
	
					return;
				}
	
				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);
	
				if ( that.isAnimating ) {
					rAF(step);
				}
			}
	
			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	IScroll.utils = utils;
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else {
		window.IScroll = IScroll;
	}
	
	})(window, document, Math);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(224);

/***/ },
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(21);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsClassNameMixin = __webpack_require__(19);
	
	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);
	
	if (process.env.BROSWER) {
	  __webpack_require__(193);
	}
	
	var Alert = (function (_mixin) {
	  _inherits(Alert, _mixin);
	
	  function Alert() {
	    var _this = this;
	
	    _classCallCheck(this, Alert);
	
	    _get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      closed: false,
	      closing: true
	    };
	
	    this.handleClose = function (e) {
	
	      _this.setState({
	        closing: false
	      });
	
	      if (_this.props.onClose) {
	        _this.props.onClose.call(_this, e);
	      }
	    };
	
	    this.animationEnd = function () {
	      _this.setState({
	        closed: true,
	        closing: true
	      });
	    };
	  }
	
	  _createClass(Alert, [{
	    key: 'renderCloseBtn',
	    value: function renderCloseBtn() {
	      return _react2['default'].createElement(
	        'button',
	        {
	          type: 'button',
	          className: this.setClassNamespace('close'),
	          onClick: this.handleClose },
	        '×'
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classSet = this.getClassSet();
	      var isCloseable = !!this.props.onClose;
	
	      if (this.props.iStyle) {
	        classSet[this.prefixClass(this.props.iStyle)] = true;
	      }
	
	      classSet[this.prefixClass('closeable')] = isCloseable;
	
	      if (this.state.closed) {
	        return null;
	      } else {
	        var alertHtml = _react2['default'].createElement(
	          'div',
	          _extends({}, this.props, {
	            visible: this.state.closing,
	            className: (0, _classnames2['default'])(this.props.className, classSet) }),
	          isCloseable ? this.renderCloseBtn() : null,
	          this.props.children
	        );
	        if (isCloseable) {
	          return _react2['default'].createElement(
	            _rcAnimate2['default'],
	            {
	              component: '',
	              showProp: 'visible',
	              transitionName: 'fade',
	              onEnd: this.animationEnd },
	            alertHtml
	          );
	        } else {
	          return alertHtml;
	        }
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      classPrefix: _react2['default'].PropTypes.string.isRequired,
	      iStyle: _react2['default'].PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),
	      onClose: _react2['default'].PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      classPrefix: 'alert'
	    },
	    enumerable: true
	  }]);
	
	  return Alert;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	exports['default'] = Alert;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(205)))

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixinsClassNameMixin = __webpack_require__(19);
	
	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var BreadcrumbItem = (function (_mixin) {
	  _inherits(BreadcrumbItem, _mixin);
	
	  function BreadcrumbItem() {
	    _classCallCheck(this, BreadcrumbItem);
	
	    _get(Object.getPrototypeOf(BreadcrumbItem.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(BreadcrumbItem, [{
	    key: 'renderAnchor',
	    value: function renderAnchor(classes) {
	      return _react2['default'].createElement(
	        'li',
	        _extends({}, this.props, { className: classes }),
	        _react2['default'].createElement(
	          'a',
	          {
	            href: this.props.href,
	            title: this.props.title,
	            target: this.props.target },
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])(this.getClassSet(), this.props.className);
	
	      if (this.props.href) {
	        return this.renderAnchor(classes);
	      }
	
	      return _react2['default'].createElement(
	        'li',
	        _extends({}, this.props, {
	          className: classes }),
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      active: _react2['default'].PropTypes.bool,
	      href: _react2['default'].PropTypes.string,
	      title: _react2['default'].PropTypes.string,
	      target: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }]);
	
	  return BreadcrumbItem;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	var Breadcrumb = (function (_mixin2) {
	  _inherits(Breadcrumb, _mixin2);
	
	  function Breadcrumb() {
	    _classCallCheck(this, Breadcrumb);
	
	    _get(Object.getPrototypeOf(Breadcrumb.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Breadcrumb, [{
	    key: 'render',
	    value: function render() {
	      var classes = this.getClassSet();
	      var Component = this.props.componentTag;
	
	      classes[this.prefixClass('slash')] = this.props.slash;
	      return _react2['default'].createElement(
	        Component,
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(classes, this.props.className) }),
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      slash: _react2['default'].PropTypes.bool,
	      componentTag: _react2['default'].PropTypes.node.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      classPrefix: 'breadcrumb',
	      componentTag: 'ul'
	    },
	    enumerable: true
	  }]);
	
	  return Breadcrumb;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	Breadcrumb.Item = BreadcrumbItem;
	
	exports['default'] = Breadcrumb;
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _draggable = __webpack_require__(184);
	
	var _draggable2 = _interopRequireDefault(_draggable);
	
	if (true) {
	  __webpack_require__(194);
	}
	
	exports['default'] = _draggable2['default'];
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcDropdown = __webpack_require__(211);
	
	var _rcDropdown2 = _interopRequireDefault(_rcDropdown);
	
	if (true) {
	  __webpack_require__(195);
	}
	
	var Dropdown = (function (_Component) {
	  _inherits(Dropdown, _Component);
	
	  function Dropdown() {
	    _classCallCheck(this, Dropdown);
	
	    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Dropdown, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_rcDropdown2['default'], this.props);
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      transitionName: 'slide-up',
	      prefixCls: 'dropdown'
	    },
	    enumerable: true
	  }]);
	
	  return Dropdown;
	})(_react.Component);
	
	exports['default'] = Dropdown;
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTooltip = __webpack_require__(151);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	var prefixCls = 'popover';
	
	if (true) {
	  __webpack_require__(197);
	}
	
	var Popconfirm = (function (_Component) {
	  _inherits(Popconfirm, _Component);
	
	  function Popconfirm() {
	    var _this = this;
	
	    _classCallCheck(this, Popconfirm);
	
	    _get(Object.getPrototypeOf(Popconfirm.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      visible: false
	    };
	
	    this.confirm = function () {
	      _this.props.onConfirm.call(_this);
	      _this.setState({
	        visible: false
	      });
	    };
	
	    this.cancel = function () {
	      _this.props.onCancel.call(_this);
	      _this.setState({
	        visible: false
	      });
	    };
	
	    this.onVisibleChange = function (v) {
	      _this.setState({
	        visible: v
	      });
	    };
	  }
	
	  _createClass(Popconfirm, [{
	    key: 'render',
	    value: function render() {
	      var overlay = _react2['default'].createElement(
	        'div',
	        { className: prefixCls + '-content' },
	        _react2['default'].createElement(
	          'p',
	          { className: prefixCls + '-message' },
	          _react2['default'].createElement('i', { className: 'glyph-icon glyph-notification' }),
	          this.props.title
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: prefixCls + '-buttons' },
	          _react2['default'].createElement(
	            'button',
	            { onClick: this.cancel, className: 'btn btn-default btn-xs' },
	            '取 消'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { onClick: this.confirm, className: 'btn btn-primary btn-xs' },
	            '确 定'
	          )
	        )
	      );
	
	      var transitionName = ({
	        top: 'zoom-down',
	        bottom: 'zoom-up',
	        left: 'zoom-right',
	        right: 'zoom-left'
	      })[this.props.placement];
	
	      return _react2['default'].createElement(
	        _rcTooltip2['default'],
	        { placement: this.props.placement,
	          overlayStyle: this.props.overlayStyle,
	          prefixCls: prefixCls,
	          onVisibleChange: this.onVisibleChange,
	          transitionName: transitionName,
	          visible: this.state.visible,
	          trigger: this.props.trigger,
	          overlay: overlay },
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      transitionName: '',
	      placement: 'top',
	      trigger: 'click',
	      overlayStyle: {},
	      onConfirm: function onConfirm() {},
	      onCancel: function onCancel() {}
	    },
	    enumerable: true
	  }]);
	
	  return Popconfirm;
	})(_react.Component);
	
	exports['default'] = Popconfirm;
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _scrollArea = __webpack_require__(187);
	
	var _scrollArea2 = _interopRequireDefault(_scrollArea);
	
	if (true) {
	  __webpack_require__(198);
	}
	exports['default'] = _scrollArea2['default'];
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _geminiScrollbar = __webpack_require__(204);
	
	var _geminiScrollbar2 = _interopRequireDefault(_geminiScrollbar);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	if (true) {
	  __webpack_require__(199);
	}
	
	var Scrollbar = (function (_Component) {
	  _inherits(Scrollbar, _Component);
	
	  function Scrollbar() {
	    _classCallCheck(this, Scrollbar);
	
	    _get(Object.getPrototypeOf(Scrollbar.prototype), 'constructor', this).apply(this, arguments);
	
	    this.scrollbar = null;
	  }
	
	  _createClass(Scrollbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scrollbar = new _geminiScrollbar2['default']({
	        element: _reactDom2['default'].findDOMNode(this),
	        autoshow: this.props.autoshow,
	        createElements: false
	      }).create();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.scrollbar.update();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.scrollbar.destroy();
	      this.scrollbar = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var children = _props.children;
	
	      var other = _objectWithoutProperties(_props, ['className', 'children']);
	
	      var classes = _defineProperty({
	        'gm-scrollbar-container': true
	      }, className, !!className);
	
	      return _react2['default'].createElement(
	        'div',
	        _extends({}, other, { className: (0, _classnames2['default'])(classes) }),
	        _react2['default'].createElement(
	          'div',
	          { className: 'gm-scrollbar -vertical' },
	          _react2['default'].createElement('div', { className: 'thumb' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'gm-scrollbar -horizontal' },
	          _react2['default'].createElement('div', { className: 'thumb' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'gm-scroll-view', ref: 'scroll-view' },
	          children
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      autoshow: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      autoshow: false
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'GeminiScrollbar',
	
	    /**
	     * Holds the reference to the GeminiScrollbar instance.
	     * @property scrollbar <public> [Object]
	     */
	    enumerable: true
	  }]);
	
	  return Scrollbar;
	})(_react.Component);
	
	exports['default'] = Scrollbar;
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcSelect = __webpack_require__(218);
	
	var _rcSelect2 = _interopRequireDefault(_rcSelect);
	
	if (true) {
	  __webpack_require__(200);
	}
	
	var Select = (function (_Component) {
	  _inherits(Select, _Component);
	
	  function Select() {
	    _classCallCheck(this, Select);
	
	    _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Select, [{
	    key: 'render',
	    value: function render() {
	      var sizeClass = '';
	      if (this.props.size === 'large') {
	        sizeClass = 'select-lg';
	      } else if (this.props.size === 'small') {
	        sizeClass = 'select-sm';
	      }
	      var className = this.props.className || ' ';
	      var notFoundContent = this.props.notFoundContent;
	      if (this.props.combobox) {
	        notFoundContent = null;
	      }
	      return _react2['default'].createElement(_rcSelect2['default'], _extends({}, this.props, { className: className + sizeClass, notFoundContent: notFoundContent }));
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      prefixCls: 'select',
	      transitionName: 'slide-up',
	      optionLabelProp: 'children',
	      showSearch: false
	    },
	    enumerable: true
	  }]);
	
	  return Select;
	})(_react.Component);
	
	Select.Option = _rcSelect2['default'].Option;
	Select.OptGroup = _rcSelect2['default'].OptGroup;
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsClassNameMixin = __webpack_require__(19);
	
	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);
	
	var Table = (function (_mixin) {
	  _inherits(Table, _mixin);
	
	  function Table() {
	    _classCallCheck(this, Table);
	
	    _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Table, [{
	    key: 'render',
	    value: function render() {
	      var classSet = this.getClassSet();
	      var responsive = this.props.responsive;
	
	      classSet[this.prefixClass('bordered')] = this.props.bordered;
	      classSet[this.prefixClass('compact')] = this.props.compact;
	      classSet[this.prefixClass('hover')] = this.props.hover;
	      classSet[this.prefixClass('striped')] = this.props.striped;
	      classSet[this.prefixClass('radius')] = this.props.radius;
	      classSet[this.prefixClass('centered')] = this.props.centered;
	
	      // add `.text-nowrap` to responsive table
	      classSet[this.setClassNamespace('text-nowrap')] = responsive;
	
	      var table = _react2['default'].createElement(
	        'table',
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(this.props.className, classSet) }),
	        this.props.children
	      );
	
	      return responsive ? _react2['default'].createElement(
	        'div',
	        { className: this.setClassNamespace('scrollable-horizontal') },
	        table
	      ) : table;
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      classPrefix: _react2['default'].PropTypes.string.isRequired,
	      bordered: _react2['default'].PropTypes.bool,
	      compact: _react2['default'].PropTypes.bool,
	      hover: _react2['default'].PropTypes.bool,
	      striped: _react2['default'].PropTypes.bool,
	      radius: _react2['default'].PropTypes.bool,
	      centered: _react2['default'].PropTypes.bool,
	      responsive: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      classPrefix: 'table'
	    },
	    enumerable: true
	  }]);
	
	  return Table;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	exports['default'] = Table;
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _TagItem = __webpack_require__(146);
	
	var _TagItem2 = _interopRequireDefault(_TagItem);
	
	var _ReactTags = __webpack_require__(189);
	
	var _ReactTags2 = _interopRequireDefault(_ReactTags);
	
	exports['default'] = {
	  Tag: _TagItem2['default'],
	  ReactTags: _ReactTags2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _components = __webpack_require__(186);
	
	var _components2 = _interopRequireDefault(_components);

	exports['default'] = _extends({}, _components2['default']);
	module.exports = exports['default'];

/***/ },
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _objectOmit = __webpack_require__(206);
	
	var _objectOmit2 = _interopRequireDefault(_objectOmit);
	
	var _mixinsClassNameMixin = __webpack_require__(19);
	
	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);
	
	var Button = (function (_mixin) {
	  _inherits(Button, _mixin);
	
	  function Button() {
	    _classCallCheck(this, Button);
	
	    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Button, [{
	    key: 'renderAnchor',
	
	    // state = {
	    //   loading: this.props.loading
	    // }
	
	    value: function renderAnchor(classSet) {
	      var Component = this.props.componentTag || 'a';
	      var href = this.props.href || '#';
	      var props = (0, _objectOmit2['default'])(this.props, 'type');
	
	      return _react2['default'].createElement(
	        Component,
	        _extends({}, props, {
	          href: href,
	          className: (0, _classnames2['default'])(this.props.className, classSet),
	          role: 'button' }),
	        this.props.children
	      );
	    }
	  }, {
	    key: 'renderButton',
	    value: function renderButton(classSet) {
	      var Component = this.props.componentTag || 'button';
	
	      return _react2['default'].createElement(
	        Component,
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(this.props.className, classSet) }),
	        this.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classSet = this.getClassSet();
	      var renderType = this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
	      // block button
	      this.props.block && (classSet[this.prefixClass('block')] = true);
	
	      return this[renderType](classSet);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      classPrefix: _react2['default'].PropTypes.string.isRequired,
	      active: _react2['default'].PropTypes.bool,
	      block: _react2['default'].PropTypes.bool,
	      disabled: _react2['default'].PropTypes.bool,
	      radius: _react2['default'].PropTypes.bool,
	      round: _react2['default'].PropTypes.bool,
	      componentTag: _react2['default'].PropTypes.node,
	      href: _react2['default'].PropTypes.string,
	      target: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      classPrefix: 'btn',
	      type: 'button',
	      iStyle: 'default'
	    },
	    enumerable: true
	  }]);
	
	  return Button;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsClassNameMixin = __webpack_require__(19);
	
	var _mixinsClassNameMixin2 = _interopRequireDefault(_mixinsClassNameMixin);
	
	var ButtonToolbar = (function (_mixin) {
	  _inherits(ButtonToolbar, _mixin);
	
	  function ButtonToolbar() {
	    _classCallCheck(this, ButtonToolbar);
	
	    _get(Object.getPrototypeOf(ButtonToolbar.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ButtonToolbar, [{
	    key: 'render',
	    value: function render() {
	      var classSet = this.getClassSet();
	
	      return _react2['default'].createElement(
	        'div',
	        _extends({}, this.props, {
	          className: (0, _classnames2['default'])(this.props.className, classSet) }),
	        this.props.children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      classPrefix: _react2['default'].PropTypes.string.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      classPrefix: 'btn-toolbar'
	    },
	    enumerable: true
	  }]);
	
	  return ButtonToolbar;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	exports['default'] = ButtonToolbar;
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/* eslint react/no-set-state:0  */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _helper = __webpack_require__(185);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _utilsDom = __webpack_require__(38);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsStyle = __webpack_require__(55);
	
	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);
	
	var _utilsEvents = __webpack_require__(18);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _utilsLang = __webpack_require__(20);
	
	var _utilsLang2 = _interopRequireDefault(_utilsLang);
	
	//
	// Define <Draggable>
	
	var Draggable = (function (_React$Component) {
	  _inherits(Draggable, _React$Component);
	
	  _createClass(Draggable, null, [{
	    key: 'propTypes',
	    value: {
	      /**
	       * `axis` determines which axis the draggable can move.
	       *
	       * 'both' allows movement horizontally and vertically.
	       * 'x' limits movement to horizontal axis.
	       * 'y' limits movement to vertical axis.
	       *
	       * Defaults to 'both'.
	       */
	      axis: _react.PropTypes.oneOf(['both', 'x', 'y']),
	
	      /**
	       * `bounds` determines the range of movement available to the element.
	       * Available values are:
	       *
	       * 'parent' restricts movement within the Draggable's parent node.
	       *
	       * Alternatively, pass an object with the following properties, all of which are optional:
	       *
	       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
	       *
	       * All values are in px.
	       *
	       * Example:
	       *
	       * ```jsx
	       *   class App extends Component {
	       *       render() {
	       *         return (
	       *            <Draggable bounds={{right: 300, bottom: 300}}>
	       *              <div>Content</div>
	       *           </Draggable>
	       *         );
	       *       }
	       *   });
	       * ```
	       */
	      bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	        left: _react.PropTypes.number,
	        right: _react.PropTypes.number,
	        top: _react.PropTypes.number,
	        bottom: _react.PropTypes.number
	      }), _react.PropTypes.oneOf(['parent', false])]),
	
	      /**
	       * By default, we add 'user-select:none' attributes to the document body
	       * to prevent ugly text selection during drag. If this is causing problems
	       * for your app, set this to `false`.
	       */
	      enableUserSelectHack: _react.PropTypes.bool,
	
	      /**
	       * `handle` specifies a selector to be used as the handle that initiates drag.
	       *
	       * Example:
	       *
	       * ```jsx
	       *   class App extends Component {
	       *       render() {
	       *         return (
	       *            <Draggable handle=".handle">
	       *              <div>
	       *                  <div className="handle">Click me to drag</div>
	       *                  <div>This is some other content</div>
	       *              </div>
	       *           </Draggable>
	       *         );
	       *       }
	       *   }
	       * ```
	       */
	      handle: _react.PropTypes.string,
	
	      /**
	       * `cancel` specifies a selector to be used to prevent drag initialization.
	       *
	       * Example:
	       *
	       * ```jsx
	       *   class App extends Component {
	       *       render() {
	       *           return(
	       *               <Draggable cancel=".cancel">
	       *                   <div>
	       *                     <div className="cancel">You can't drag from here</div>
	       *            <div>Dragging here works fine</div>
	       *                   </div>
	       *               </Draggable>
	       *           );
	       *       }
	       *   }
	       * ```
	       */
	      cancel: _react.PropTypes.string,
	
	      /**
	       * `grid` specifies the x and y that dragging should snap to.
	       *
	       * Example:
	       *
	       * ```jsx
	       *   class App extends Component {
	       *       render() {
	       *           return (
	       *               <Draggable grid={[25, 25]}>
	       *                   <div>I snap to a 25 x 25 grid</div>
	       *               </Draggable>
	       *           );
	       *       }
	       *   }
	       * ```
	       */
	      grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
	
	      /**
	       * `start` specifies the x and y that the dragged item should start at
	       *
	       * Example:
	       *
	       * ```jsx
	       *      class App extends Component {
	       *          render() {
	       *              return (
	       *                  <Draggable start={{x: 25, y: 25}}>
	       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
	       *                  </Draggable>
	       *              );
	       *          }
	       *      }
	       * ```
	       */
	      start: _react.PropTypes.shape({
	        x: _react.PropTypes.number,
	        y: _react.PropTypes.number
	      }),
	
	      /**
	       * `moveOnStartChange`, if true (default false) will move the element if the `start`
	       * property changes.
	       */
	      moveOnStartChange: _react.PropTypes.bool,
	
	      /**
	       * `zIndex` specifies the zIndex to use while dragging.
	       *
	       * Example:
	       *
	       * ```jsx
	       *   class App extends Component {
	       *       render() {
	       *           return (
	       *               <Draggable zIndex={100}>
	       *                   <div>I have a zIndex</div>
	       *               </Draggable>
	       *           );
	       *       }
	       *   }
	       * ```
	       */
	      zIndex: _react.PropTypes.number,
	
	      /**
	       * Called when dragging starts.
	       * If this function returns the boolean false, dragging will be canceled.
	       *
	       * Example:
	       *
	       * ```js
	       *  function (event, ui) {}
	       * ```
	       *
	       * `event` is the Event that was triggered.
	       * `ui` is an object:
	       *
	       * ```js
	       *  {
	       *    position: {top: 0, left: 0}
	       *  }
	       * ```
	       */
	      onStart: _react.PropTypes.func,
	
	      /**
	       * Called while dragging.
	       * If this function returns the boolean false, dragging will be canceled.
	       *
	       * Example:
	       *
	       * ```js
	       *  function (event, ui) {}
	       * ```
	       *
	       * `event` is the Event that was triggered.
	       * `ui` is an object:
	       *
	       * ```js
	       *  {
	       *    position: {top: 0, left: 0}
	       *  }
	       * ```
	       */
	      onDrag: _react.PropTypes.func,
	
	      /**
	       * Called when dragging stops.
	       *
	       * Example:
	       *
	       * ```js
	       *  function (event, ui) {}
	       * ```
	       *
	       * `event` is the Event that was triggered.
	       * `ui` is an object:
	       *
	       * ```js
	       *  {
	       *    position: {top: 0, left: 0}
	       *  }
	       * ```
	       */
	      onStop: _react.PropTypes.func,
	
	      /**
	       * A workaround option which can be passed if onMouseDown needs to be accessed,
	       * since it'll always be blocked (due to that there's internal use of onMouseDown)
	       */
	      onMouseDown: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      axis: 'both',
	      bounds: false,
	      handle: null,
	      cancel: null,
	      grid: null,
	      moveOnStartChange: false,
	      start: {
	        x: 0,
	        y: 0
	      },
	      zIndex: NaN,
	      enableUserSelectHack: true,
	      onStart: _utilsLang.noop,
	      onDrag: _utilsLang.noop,
	      onStop: _utilsLang.noop,
	      onMouseDown: _utilsLang.noop
	    },
	    enumerable: true
	  }]);
	
	  function Draggable() {
	    var _this = this;
	
	    _classCallCheck(this, Draggable);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    _get(Object.getPrototypeOf(Draggable.prototype), 'constructor', this).apply(this, args);
	    // Default is desktop.
	    this.state = {
	      // Whether or not we are currently dragging.
	      dragging: false,
	
	      // Offset between start top/left and mouse top/left while dragging.
	      offsetX: 0,
	      offsetY: 0,
	
	      // Current transform x and y.
	      clientX: this.props.start.x,
	      clientY: this.props.start.y
	    };
	
	    this.handleDragStart = function (e) {
	      // Set touch identifier in component state if this is a touch event
	      if (e.targetTouches) {
	        _this.setState({ touchIdentifier: e.targetTouches[0].identifier });
	      }
	
	      // Make it possible to attach event handlers on top of this one
	      _this.props.onMouseDown(e);
	
	      // Short circuit if handle or cancel prop was provided and selector doesn't match
	      if (_this.props.handle && !_helper2['default'].matchesSelector(e.target, _this.props.handle) || _this.props.cancel && _helper2['default'].matchesSelector(e.target, _this.props.cancel)) {
	        return;
	      }
	
	      // Call event handler. If it returns explicit false, cancel.
	      var shouldStart = _this.props.onStart(e, _helper2['default'].createUIEvent(_this));
	      if (shouldStart === false) return;
	
	      var dragPoint = _this.getControlPosition(e);
	
	      // Add a style to the body to disable user-select. This prevents text from
	      // being selected all over the page.
	      _this.addUserSelectStyles(_this);
	
	      // Initiate dragging. Set the current x and y as offsets
	      // so we know how much we've moved during the drag. This allows us
	      // to drag elements around even if they have been moved, without issue.
	      _this.setState({
	        dragging: true,
	        offsetX: dragPoint.clientX - _this.state.clientX,
	        offsetY: dragPoint.clientY - _this.state.clientY,
	        scrollX: document.body.scrollLeft,
	        scrollY: document.body.scrollTop
	      });
	
	      // Add event handlers
	      _utilsEvents2['default'].on(document, 'scroll', _this.handleScroll, true);
	      _utilsEvents2['default'].on(document, _utilsEvents2['default'].dragEventFor(_this.isTouchDevice).move, _this.handleDrag, true);
	      _utilsEvents2['default'].on(document, _utilsEvents2['default'].dragEventFor(_this.isTouchDevice).end, _this.handleDragEnd, true);
	    };
	
	    this.handleDragEnd = function (e) {
	      // Short circuit if not currently dragging
	      if (!_this.state.dragging) {
	        return;
	      }
	
	      // Short circuit if this is not the correct touch event
	      if (e.changedTouches && e.changedTouches[0].identifier != _this.state.touchIdentifier) {
	        return;
	      }
	
	      _this.removeUserSelectStyles(_this);
	
	      // Turn off dragging
	      _this.setState({
	        dragging: false
	      });
	
	      // Call event handler
	      _this.props.onStop(e, _helper2['default'].createUIEvent(_this));
	
	      // Remove event handlers
	      _utilsEvents2['default'].off(document, 'scroll', _this.handleScroll, true);
	      _utilsEvents2['default'].off(document, _utilsEvents2['default'].dragEventFor(_this.isTouchDevice).move, _this.handleDrag, true);
	      _utilsEvents2['default'].off(document, _utilsEvents2['default'].dragEventFor(_this.isTouchDevice).end, _this.handleDragEnd, true);
	    };
	
	    this.addUserSelectStyles = function () {
	      if (_this.props.enableUserSelectHack) {
	        var style = document.body.getAttribute('style') || '';
	        document.body.setAttribute('style', style + _utilsStyle2['default'].selectStyle());
	      } else {
	        console.warn('UserSelectHack is not enabled');
	      }
	    };
	
	    this.removeUserSelectStyles = function () {
	      if (_this.props.enableUserSelectHack) {
	        var style = document.body.getAttribute('style') || '';
	        document.body.setAttribute('style', style.replace(_utilsStyle2['default'].selectStyle(), ''));
	      } else {
	        console.warn('UserSelectHack is not enabled');
	      }
	    };
	
	    this.snapToGrid = function (grid, pendingX, pendingY) {
	      var x = Math.round(pendingX / grid[0]) * grid[0];
	      var y = Math.round(pendingY / grid[1]) * grid[1];
	      return [x, y];
	    };
	
	    this.getControlPosition = function (e) {
	      var position = e.targetTouches && e.targetTouches[0] || e;
	      return {
	        clientX: position.clientX,
	        clientY: position.clientY
	      };
	    };
	
	    this.handleDrag = function (e) {
	      // Return if this is a touch event, but not the correct one for this element
	      if (e.targetTouches && e.targetTouches[0].identifier != _this.state.touchIdentifier) {
	        return;
	      }
	      var dragPoint = _this.getControlPosition(e);
	
	      // Calculate X and Y
	      var clientX = dragPoint.clientX - _this.state.offsetX;
	      var clientY = dragPoint.clientY - _this.state.offsetY;
	
	      // Snap to grid if prop has been provided
	      if (Array.isArray(_this.props.grid)) {
	        var coords = _this.snapToGrid(_this.props.grid, clientX, clientY);
	        clientX = coords[0];
	        clientY = coords[1];
	      }
	
	      if (_this.props.bounds) {
	        var pos = _helper2['default'].getBoundPosition(_this, clientX, clientY);
	        clientX = pos[0];
	        clientY = pos[1];
	      }
	
	      // Call event handler. If it returns explicit false, cancel.
	      var shouldUpdate = _this.props.onDrag(e, _helper2['default'].createUIEvent(_this));
	      if (shouldUpdate === false) return _this.handleDragEnd.call(_this);
	
	      // Update transform
	      _this.setState({
	        clientX: clientX,
	        clientY: clientY
	      });
	    };
	
	    this.handleScroll = function () {
	      var s = _this.state,
	          x = document.body.scrollLeft,
	          y = document.body.scrollTop;
	      var offsetX = x - s.scrollX,
	          offsetY = y - s.scrollY;
	      _this.setState({
	        scrollX: x,
	        scrollY: y,
	        clientX: s.clientX + offsetX,
	        clientY: s.clientY + offsetY,
	        offsetX: s.offsetX - offsetX,
	        offsetY: s.offsetY - offsetY
	      });
	    };
	
	    this.onMouseDown = function (e) {
	      // Prevent 'ghost click' which happens 300ms after touchstart if the event isn't cancelled.
	      // We don't cancel the event on touchstart because of #37; we might want to make a scrollable item draggable.
	      // More on ghost clicks: http://ariatemplates.com/blog/2014/05/ghost-clicks-in-mobile-browsers/
	      if (_utilsEvents2['default'].dragEventFor === _utilsEvents2['default'].eventsFor.touch) {
	        return e.preventDefault();
	      }
	
	      return _this.handleDragStart(e);
	    };
	
	    this.onTouchStart = function (e) {
	      // We're on a touch device now, so change the event handlers
	      // Set isTouchDevice true.
	      _this.isTouchDevice = true;
	
	      return _this.handleDragStart(e);
	    };
	
	    this.resetState = function () {
	      _this.setState({
	        offsetX: 0, offsetY: 0, clientX: 0, clientY: 0
	      });
	    };
	
	    this.isTouchDevice = false;
	  }
	
	  _createClass(Draggable, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      // React to changes in the 'start' param.
	      if (newProps.moveOnStartChange && newProps.start) {
	        this.setState(newProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove any leftover event handlers
	      _utilsEvents2['default'].off(document, _utilsEvents2['default'].dragEventFor(this.isTouchDevice).move, this.handleDrag, true);
	      _utilsEvents2['default'].off(document, _utilsEvents2['default'].dragEventFor(this.isTouchDevice).end, this.handleDragEnd, true);
	      this.removeUserSelectStyles(this);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return _helper2['default'].shallowCompare(this, nextProps, nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      // Create style object. We extend from existing styles so we don't
	      // remove anything already set (like background, color, etc).
	      var childStyle = this.props.children.props.style || {};
	
	      // Add a CSS transform to move the element around. This allows us to move the element around
	      // without worrying about whether or not it is relatively or absolutely positioned.
	      // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
	      // has a clean slate.
	
	      var transform = _utilsStyle2['default'].createCSSTransform({
	        // Set left if horizontal drag is enabled
	        x: _helper2['default'].canDragX(this) ? this.state.clientX : this.props.start.x,
	
	        // Set top if vertical drag is enabled
	        y: _helper2['default'].canDragY(this) ? this.state.clientY : this.props.start.y
	      });
	
	      // Workaround IE pointer events; see #51
	      // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
	      var touchHacks = {
	        touchAction: 'none'
	      };
	
	      var style = Object.assign({}, childStyle, transform, touchHacks);
	
	      // Set zIndex if currently dragging and prop has been provided
	      if (this.state.dragging && !isNaN(this.props.zIndex)) {
	        style.zIndex = this.props.zIndex;
	      }
	
	      var className = (0, _classnames2['default'])(this.props.children.props.className || '', 'draggable', {
	        'draggable-dragging': this.state.dragging,
	        'draggable-dragged': this.state.dragged
	      });
	
	      // Reuse the child provided
	      // This makes it flexible to use whatever element is wanted (div, ul, etc)
	      return _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), {
	        style: style,
	        className: className,
	
	        onMouseDown: this.onMouseDown,
	        onTouchStart: this.onTouchStart,
	        onMouseUp: this.handleDragEnd,
	        onTouchEnd: this.handleDragEnd
	      });
	    }
	  }]);
	
	  return Draggable;
	})(_react2['default'].Component);
	
	exports['default'] = Draggable;
	module.exports = exports['default'];

	/**
	* snap the x,y coords to a grid
	* @param  {Array}  grid     x,y snap bounds
	* @param  {Number} pendingX potential x value
	* @param  {Number} pendingY potential y value
	* @return {Array}           tuple of actual x,y
	*/

	/**
	* get {clientX, clientY} positions of control
	* */

	// Intended for use by a parent component. Resets internal state on this component. Useful for
	// <Resizable> and other components in case this element is manually resized and start/moveOnStartChange
	// don't work for you.

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	//
	// Helpers.
	//
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _fbjsLibShallowEqual = __webpack_require__(203);
	
	var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var Helper = (function () {
	  function Helper() {
	    _classCallCheck(this, Helper);
	  }
	
	  _createClass(Helper, null, [{
	    key: 'shallowCompare',
	    value: function shallowCompare(instance, nextProps, nextState) {
	      return !(0, _fbjsLibShallowEqual2['default'])(instance.props, nextProps) || !(0, _fbjsLibShallowEqual2['default'])(instance.state, nextState);
	    }
	  }, {
	    key: 'createUIEvent',
	    value: function value(draggable) {
	      // State changes are often (but not always!) async. We want the latest value.
	      var state = draggable._pendingState || draggable.state;
	      return {
	        node: _reactDom2['default'].findDOMNode(draggable),
	        position: {
	          top: state.clientY,
	          left: state.clientX
	        }
	      };
	    },
	    enumerable: true
	  }, {
	    key: 'getBoundPosition',
	    value: function value(draggable, clientX, clientY) {
	      var bounds = JSON.parse(JSON.stringify(draggable.props.bounds));
	      var node = _reactDom2['default'].findDOMNode(draggable);
	      var parent = node.parentNode;
	
	      if (bounds === 'parent') {
	        var nodeStyle = window.getComputedStyle(node);
	        var parentStyle = window.getComputedStyle(parent);
	        // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
	        bounds = {
	          left: -node.offsetLeft + Helper.int(parentStyle.paddingLeft) + Helper.int(nodeStyle.borderLeftWidth) + Helper.int(nodeStyle.marginLeft),
	          top: -node.offsetTop + Helper.int(parentStyle.paddingTop) + Helper.int(nodeStyle.borderTopWidth) + Helper.int(nodeStyle.marginTop),
	          right: Helper.innerWidth(parent) - Helper.outerWidth(node) - node.offsetLeft,
	          bottom: Helper.innerHeight(parent) - Helper.outerHeight(node) - node.offsetTop
	        };
	      }
	
	      // Keep x and y below right and bottom limits...
	      if (Helper.isNum(bounds.right)) clientX = Math.min(clientX, bounds.right);
	      if (Helper.isNum(bounds.bottom)) clientY = Math.min(clientY, bounds.bottom);
	
	      // But above left and top limits.
	      if (Helper.isNum(bounds.left)) clientX = Math.max(clientX, bounds.left);
	      if (Helper.isNum(bounds.top)) clientY = Math.max(clientY, bounds.top);
	
	      return [clientX, clientY];
	    },
	    enumerable: true
	  }, {
	    key: 'outerHeight',
	    value: function value(node) {
	      // This is deliberately excluding margin for our calculations, since we are using
	      // offsetTop which is including margin. See Helpers.Ui.getBoundPosition
	      var height = node.clientHeight;
	      var computedStyle = window.getComputedStyle(node);
	      height += Helper.int(computedStyle.borderTopWidth || 0);
	      height += Helper.int(computedStyle.borderBottomWidth || 0);
	      return height;
	    },
	    enumerable: true
	  }, {
	    key: 'outerWidth',
	    value: function value(node) {
	      // This is deliberately excluding margin for our calculations, since we are using
	      // offsetLeft which is including margin. See Helpers.Ui.getBoundPosition
	      var width = node.clientWidth;
	      var computedStyle = window.getComputedStyle(node);
	      width += Helper.int(computedStyle.borderLeftWidth || 0);
	      width += Helper.int(computedStyle.borderRightWidth || 0);
	      return width;
	    },
	    enumerable: true
	  }, {
	    key: 'innerHeight',
	    value: function value(node) {
	      var height = node.clientHeight;
	      var computedStyle = window.getComputedStyle(node);
	      height -= Helper.int(computedStyle.paddingTop || 0);
	      height -= Helper.int(computedStyle.paddingBottom || 0);
	      return height;
	    },
	    enumerable: true
	  }, {
	    key: 'innerWidth',
	    value: function value(node) {
	      var width = node.clientWidth;
	      var computedStyle = window.getComputedStyle(node);
	      width -= Helper.int(computedStyle.paddingLeft || 0);
	      width -= Helper.int(computedStyle.paddingRight || 0);
	      return width;
	    },
	    enumerable: true
	  }, {
	    key: 'isNum',
	    value: function value(num) {
	      return typeof num === 'number' && !isNaN(num);
	    },
	    enumerable: true
	  }, {
	    key: 'int',
	    value: function value(a) {
	      return parseInt(a, 10);
	    },
	    enumerable: true
	  }, {
	    key: 'isFunction',
	    value: function value(func) {
	      return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
	    },
	    enumerable: true
	  }, {
	    key: 'canDragX',
	    value: function value(draggable) {
	      return draggable.props.axis === 'both' || draggable.props.axis === 'x';
	    },
	    enumerable: true
	  }, {
	    key: 'canDragY',
	    value: function value(draggable) {
	      return draggable.props.axis === 'both' || draggable.props.axis === 'y';
	    },
	
	    // @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
	    enumerable: true
	  }, {
	    key: 'findInArray',
	    value: function value(array, callback) {
	      for (var i = 0, _length = array.length; i < _length; i++) {
	        if (callback.apply(callback, [array[i], i, array])) {
	          return array[i];
	        }
	      }
	    },
	    enumerable: true
	  }, {
	    key: 'matchesSelector',
	    value: function value(el, selector) {
	      var matchesSelectorFunc = Helper.findInArray(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
	        return Helper.isFunction(el[method]);
	      });
	
	      return el[matchesSelectorFunc].call(el, selector);
	    },
	    enumerable: true
	  }]);
	
	  return Helper;
	})();
	
	exports['default'] = Helper;
	
	//
	// End Helper.
	//
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// Layouts
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _layout = __webpack_require__(51);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _scrollarea = __webpack_require__(167);
	
	var _scrollarea2 = _interopRequireDefault(_scrollarea);
	
	var _scrollbar = __webpack_require__(168);
	
	var _scrollbar2 = _interopRequireDefault(_scrollbar);
	
	var _iscroll = __webpack_require__(139);
	
	var _iscroll2 = _interopRequireDefault(_iscroll);
	
	// Elements
	
	var _button = __webpack_require__(143);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _table = __webpack_require__(170);
	
	var _table2 = _interopRequireDefault(_table);
	
	// Navs
	
	var _menu = __webpack_require__(37);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _breadcrumb = __webpack_require__(163);
	
	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);
	
	// Commons
	
	var _icon = __webpack_require__(32);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	// Interactive
	
	var _draggable = __webpack_require__(164);
	
	var _draggable2 = _interopRequireDefault(_draggable);
	
	var _message = __webpack_require__(145);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _tags = __webpack_require__(171);
	
	var _tags2 = _interopRequireDefault(_tags);
	
	var _dropdown = __webpack_require__(165);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _select = __webpack_require__(169);
	
	var _select2 = _interopRequireDefault(_select);
	
	var _popconfirm = __webpack_require__(166);
	
	var _popconfirm2 = _interopRequireDefault(_popconfirm);
	
	var _alert = __webpack_require__(162);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	exports['default'] = {
	  // Layouts
	  Layout: _layout2['default'],
	  ScrollArea: _scrollarea2['default'],
	  Scrollbar: _scrollbar2['default'],
	  IScroll: _iscroll2['default'],
	
	  // Elements
	  Button: _button2['default'],
	  Table: _table2['default'],
	
	  // Navs
	  Menu: _menu2['default'],
	  Breadcrumb: _breadcrumb2['default'],
	
	  // Commons
	  Icon: _icon2['default'],
	
	  // Interactive
	  Draggable: _draggable2['default'],
	  Message: _message2['default'],
	  Tag: _tags2['default'],
	  Dropdown: _dropdown2['default'],
	  Select: _select2['default'],
	  Alert: _alert2['default']
	  // Others
	};
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDom = __webpack_require__(38);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsMixin = __webpack_require__(12);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsPureRenderMixin = __webpack_require__(191);
	
	var _mixinsPureRenderMixin2 = _interopRequireDefault(_mixinsPureRenderMixin);
	
	var _scrollBar = __webpack_require__(188);
	
	var _scrollBar2 = _interopRequireDefault(_scrollBar);
	
	var _utilsEvents = __webpack_require__(18);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var ScrollArea = (function (_mixin) {
	  _inherits(ScrollArea, _mixin);
	
	  function ScrollArea() {
	    var _this = this;
	
	    _classCallCheck(this, ScrollArea);
	
	    _get(Object.getPrototypeOf(ScrollArea.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      topPosition: 0,
	      leftPosition: 0,
	      realHeight: 0,
	      containerWidth: 0,
	      containerHeight: 0,
	      realWidth: 0,
	      scrollableX: false,
	      scrollableY: false,
	      // for scrollarea we need to specific fixed width and height in order to calculate the scrollSize.
	      // Maybe we can get the height and width via Layout conponent 'onLayoutChanged' event.
	      // Normally, it scrollarea nested in `Layout` component, we should not specificed width and height.
	      fixedContainerHeight: this.props.fixedHeight || 0,
	      fixedContainerWidth: this.props.fixedWidth || 0
	    };
	
	    this.handleMove = function (deltaY, deltaX) {
	      var newState = _this.computeSizes();
	      if (_this.canScrollY(newState)) {
	        newState.topPosition = _this.computeTopPosition(deltaY, newState);
	      }
	      if (_this.canScrollX(newState)) {
	        newState.leftPosition = _this.computeLeftPosition(deltaX, newState);
	      }
	      _this.setState(newState);
	    };
	
	    this.handleWheel = function (e) {
	      var newState = _this.computeSizes();
	      var deltaY = e.deltaY * _this.props.speed;
	      var deltaX = e.deltaX * _this.props.speed;
	
	      if (_this.canScrollY(newState)) {
	        newState.topPosition = _this.computeTopPosition(-deltaY, newState);
	      }
	
	      if (_this.canScrollX(newState)) {
	        newState.leftPosition = _this.computeLeftPosition(-deltaX, newState);
	      }
	
	      if (_this.state.topPosition !== newState.topPosition || _this.state.leftPosition !== newState.leftPosition) {
	        _utilsEvents2['default'].preventDefault(e);
	      }
	      newState = Object.assign({}, _this.state, newState);
	      _this.setState(newState);
	    };
	
	    this.bindedHandleWindowResize = function () {
	      var newState = _this.computeSizes();
	      var bottomPosition = newState.realHeight - newState.containerHeight;
	      if (-_this.state.topPosition >= bottomPosition) {
	        newState.topPosition = _this.canScrollY(newState) ? -bottomPosition : 0;
	      }
	
	      var rightPosition = newState.realWidth - newState.containerWidth;
	      if (-_this.state.leftPosition >= rightPosition) {
	        newState.leftPosition = _this.canScrollX(newState) ? -rightPosition : 0;
	      }
	
	      _this.setState(newState);
	    };
	  }
	
	  _createClass(ScrollArea, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _utilsEvents2['default'].on(window, "resize", this.bindedHandleWindowResize);
	
	      this.setSizesToState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _utilsEvents2['default'].off(window, "resize", this.bindedHandleWindowResize);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setSizesToState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setSizesToState();
	    }
	
	    /**
	     * Sometimes we need to reset scrollarea width and height manully.
	     * @public
	     * @param  {Object} containerInfo {width:px, height: px}
	     */
	  }, {
	    key: 'resetScrollArea',
	    value: function resetScrollArea(containerInfo) {
	      if (containerInfo) {
	        var bound = {
	          fixedContainerWidth: containerInfo.width || this.state.fixedContainerWidth,
	          fixedContainerHeight: containerInfo.height || this.state.fixedContainerHeight
	        };
	        // console.log('resetScrollArea', containerInfo, bound);
	        var newState = Object.assign({}, this.state, bound);
	        this.setState(newState);
	
	        // this.setSizesToState();
	      }
	    }
	  }, {
	    key: 'computeTopPosition',
	    value: function computeTopPosition(deltaY, sizes) {
	      var newTopPosition = this.state.topPosition + deltaY;
	
	      if (-newTopPosition > sizes.realHeight - sizes.containerHeight) {
	        newTopPosition = -(sizes.realHeight - sizes.containerHeight);
	      }
	      if (newTopPosition > 0) {
	        newTopPosition = 0;
	      }
	      return newTopPosition;
	    }
	  }, {
	    key: 'computeLeftPosition',
	    value: function computeLeftPosition(deltaX, sizes) {
	      var newLeftPosition = this.state.leftPosition + deltaX;
	      if (-newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	        newLeftPosition = -(sizes.realWidth - sizes.containerWidth);
	      } else if (newLeftPosition > 0) {
	        newLeftPosition = 0;
	      }
	
	      return newLeftPosition;
	    }
	  }, {
	    key: 'computeSizes',
	    value: function computeSizes() {
	      var realHeight = _utilsDom2['default'].getHeight(this.refs.content);
	      var containerHeight = _reactDom2['default'].findDOMNode(this).offsetHeight;
	      var realWidth = _utilsDom2['default'].getWidth(this.refs.content.firstChild);
	      var containerWidth = _reactDom2['default'].findDOMNode(this).offsetWidth;
	      // console.log(realHeight, containerHeight, realWidth, containerWidth)
	      var scrollableY = realHeight > containerHeight || this.state.topPosition != 0;
	      var scrollableX = realWidth > containerWidth || this.state.leftPosition != 0;
	
	      // if we don't have providered fixed width and height for scrollArea container.
	      // try to fetch parent offetWidth, offsetHeight.
	      var pNode = _reactDom2['default'].findDOMNode(this).parentElement;
	      var fixedContainerHeight = this.props.fixedHeight || pNode.offsetHeight;
	      var fixedContainerWidth = this.props.fixedWidth || pNode.offsetWidth;
	
	      return {
	        realHeight: realHeight + this.props.offsetYPadding,
	        containerHeight: containerHeight,
	        realWidth: realWidth,
	        containerWidth: containerWidth,
	        scrollableX: scrollableX,
	        scrollableY: scrollableY,
	        fixedContainerHeight: fixedContainerHeight,
	        fixedContainerWidth: fixedContainerWidth
	      };
	    }
	  }, {
	    key: 'setSizesToState',
	    value: function setSizesToState() {
	      var sizes = this.computeSizes();
	      if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth || sizes.containerHeight !== this.state.containerHeight || sizes.containerWidth !== this.state.containerWidth || sizes.fixedContainerHeight !== this.state.fixedContainerHeight || sizes.fixedContainerWidth !== this.state.fixedContainerWidth) {
	
	        this.setState(sizes);
	      }
	    }
	  }, {
	    key: 'scrollTop',
	    value: function scrollTop() {
	      this.setState({
	        topPosition: 0
	      });
	    }
	  }, {
	    key: 'scrollBottom',
	    value: function scrollBottom() {
	      this.setState({
	        topPosition: -(this.state.realHeight - this.state.containerHeight)
	      });
	    }
	  }, {
	    key: 'canScrollY',
	    value: function canScrollY() {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	      return state.scrollableY && this.props.vertical;
	    }
	  }, {
	    key: 'canScrollX',
	    value: function canScrollX() {
	      var state = arguments.length <= 0 || arguments[0] === undefined ? this.state : arguments[0];
	
	      return state.scrollableX && this.props.horizontal;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log('`scrollArea` component rendering..');
	      var _props = this.props;
	      var amSize = _props.amSize;
	      var className = _props.className;
	      var contentClassName = _props.contentClassName;
	      var _state = this.state;
	      var realWidth = _state.realWidth;
	      var realHeight = _state.realHeight;
	      var fixedContainerHeight = _state.fixedContainerHeight;
	      var fixedContainerWidth = _state.fixedContainerWidth;
	      var containerWidth = _state.containerWidth;
	      var containerHeight = _state.containerHeight;
	      var topPosition = _state.topPosition;
	      var leftPosition = _state.leftPosition;
	
	      var scrollbarY = this.canScrollY() ? _react2['default'].createElement(_scrollBar2['default'], {
	        realSize: realHeight,
	        containerSize: containerHeight,
	        position: -topPosition,
	        onMove: this.handleMove,
	        type: 'vertical',
	        amSize: amSize }) : null;
	
	      var scrollbarX = this.canScrollX() ? _react2['default'].createElement(_scrollBar2['default'], {
	        realSize: realWidth,
	        containerSize: containerWidth,
	        position: -leftPosition,
	        onMove: this.handleMove,
	        type: 'horizontal',
	        amSize: amSize }) : null;
	      console.log(realWidth, realHeight);
	      var style = {
	        marginTop: this.state.topPosition,
	        marginLeft: this.state.leftPosition
	      };
	
	      var scrollAreaStyle = {
	        width: fixedContainerWidth,
	        height: fixedContainerHeight
	      };
	      if (!fixedContainerWidth) {
	        delete scrollAreaStyle.width;
	      }
	      if (!fixedContainerHeight) {
	        delete scrollAreaStyle.height;
	      }
	      var classes = (0, _classnames2['default'])('scrollarea', className);
	      var contentClasses = (0, _classnames2['default'])('scrollarea-content', contentClassName);
	
	      return _react2['default'].createElement(
	        'div',
	        { className: classes, style: scrollAreaStyle, onWheel: this.handleWheel },
	        _react2['default'].createElement(
	          'div',
	          { ref: 'content', style: style, className: contentClasses },
	          this.props.children
	        ),
	        scrollbarY,
	        ' ',
	        scrollbarX
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      className: _react2['default'].PropTypes.string,
	      speed: _react2['default'].PropTypes.number,
	      contentClassName: _react2['default'].PropTypes.string,
	      vertical: _react2['default'].PropTypes.bool,
	      horizontal: _react2['default'].PropTypes.bool,
	      // the fixedHeight of scrollArea container.
	      fixedHeight: _react2['default'].PropTypes.number,
	      // the width of scrollArea container.
	      fixedWidth: _react2['default'].PropTypes.number,
	
	      // veritcal scroll (top + bottom) padding.
	      offsetYPadding: _react2['default'].PropTypes.number,
	
	      amSize: _react2['default'].PropTypes.oneOf(['sm', 'md']) // only small size(sm) and normal size(default)
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      speed: 1,
	      vertical: true,
	      horizontal: true,
	      offsetYPadding: 10
	    },
	    enumerable: true
	  }]);
	
	  return ScrollArea;
	})((0, _utilsMixin2['default'])(_mixinsPureRenderMixin2['default']));
	
	exports['default'] = ScrollArea;
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsEvents = __webpack_require__(18);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var ScrollBar = (function (_React$Component) {
	  _inherits(ScrollBar, _React$Component);
	
	  function ScrollBar(props) {
	    var _this = this;
	
	    _classCallCheck(this, ScrollBar);
	
	    _get(Object.getPrototypeOf(ScrollBar.prototype), 'constructor', this).call(this, props);
	
	    this.bindedHandleMouseUp = function (e) {
	      _this.setState({
	        isDragging: false
	      });
	    };
	
	    this.bindedHandleMouseMove = function (e) {
	      var _props = _this.props;
	      var type = _props.type;
	      var containerSize = _props.containerSize;
	      var realSize = _props.realSize;
	
	      var multiplier = containerSize / realSize;
	
	      if (_this.state.isDragging) {
	        _utilsEvents2['default'].preventDefault(e);
	
	        if (type === 'vertical') {
	          var deltaY = _this.state.lastClientPosition - e.clientY;
	          _this.setState({
	            lastClientPosition: e.clientY
	          });
	          _this.props.onMove(deltaY / multiplier, 0);
	        } else {
	          var deltaX = _this.state.lastClientPosition - e.clientX;
	          _this.setState({
	            lastClientPosition: e.clientX
	          });
	          _this.props.onMove(0, deltaX / multiplier);
	        }
	      }
	    };
	
	    this.handleMouseDown = function (e) {
	      var lastClientPosition = _this.props.type === 'vertical' ? e.clientY : e.clientX;
	      _this.setState({
	        isDragging: true,
	        lastClientPosition: lastClientPosition
	      });
	    };
	
	    var newState = this.calculateState(props);
	    this.state = {
	      position: newState.position,
	      scrollSize: newState.scrollSize,
	      isDragging: false,
	      lastClientPosition: 0
	    };
	  }
	
	  _createClass(ScrollBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _utilsEvents2['default'].on(document, "mousemove", this.bindedHandleMouseMove);
	      _utilsEvents2['default'].on(document, "mouseup", this.bindedHandleMouseUp);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setState(this.calculateState(nextProps));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _utilsEvents2['default'].off(document, "mousemove", this.bindedHandleMouseMove);
	      _utilsEvents2['default'].off(document, "mouseup", this.bindedHandleMouseUp);
	    }
	  }, {
	    key: 'calculateState',
	    value: function calculateState(props) {
	      var scrollSize = props.containerSize * props.containerSize / props.realSize;
	      var multiplier = props.containerSize / props.realSize;
	      var position = props.position * multiplier;
	
	      return {
	        scrollSize: scrollSize,
	        position: position
	      };
	    }
	  }, {
	    key: 'createScrollStyles',
	    value: function createScrollStyles() {
	      if (this.props.type === 'vertical') {
	        return {
	          height: this.state.scrollSize,
	          marginTop: this.state.position
	        };
	      } else {
	        return {
	          width: this.state.scrollSize,
	          marginLeft: this.state.position
	        };
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var scrollStyle = this.createScrollStyles();
	
	      var scrollbarClasses = ['scrollbar-container', 'scrollbar-' + this.props.amSize || 'md', {
	        'active': this.state.isDragging,
	        'horizontal': this.props.type === 'horizontal',
	        'vertical': this.props.type === 'vertical'
	      }];
	
	      return _react2['default'].createElement(
	        'div',
	        { className: (0, _classnames2['default'])(scrollbarClasses) },
	        _react2['default'].createElement('div', { className: 'scrollbar', style: scrollStyle, onMouseDown: this.handleMouseDown })
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      onMove: _react2['default'].PropTypes.func,
	      realSize: _react2['default'].PropTypes.number,
	      containerSize: _react2['default'].PropTypes.number,
	      position: _react2['default'].PropTypes.number,
	      type: _react2['default'].PropTypes.oneOf(['vertical', 'horizontal']),
	      amSize: _react2['default'].PropTypes.oneOf(['sm', 'md']) // only small amSize(`sm`) and normal amSize `md` (default)
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      type: 'vertical',
	      amSize: 'md'
	    },
	    enumerable: true
	  }]);
	
	  return ScrollBar;
	})(_react2['default'].Component);
	
	exports['default'] = ScrollBar;
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TagItem = __webpack_require__(146);
	
	var _TagItem2 = _interopRequireDefault(_TagItem);
	
	var _Suggestions = __webpack_require__(190);
	
	var _Suggestions2 = _interopRequireDefault(_Suggestions);
	
	// Constants
	var Keys = {
	  ENTER: 13,
	  TAB: 9,
	  BACKSPACE: 8,
	  UP_ARROW: 38,
	  DOWN_ARROW: 40,
	  ESCAPE: 27
	};
	
	var ReactTags = (function (_Component) {
	  _inherits(ReactTags, _Component);
	
	  function ReactTags() {
	    var _this = this;
	
	    _classCallCheck(this, ReactTags);
	
	    _get(Object.getPrototypeOf(ReactTags.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      suggestions: this.props.suggestions,
	      query: "",
	      selectedIndex: -1,
	      selectionMode: false
	    };
	
	    this.handleDelete = function (i, e) {
	      this.props.handleDelete(i);
	      this.setState({
	        query: ""
	      });
	    };
	
	    this.handleChange = function (e) {
	      var query = e.target.value.trim();
	      var suggestions = _this.props.suggestions.filter(function (item) {
	        return item.toLowerCase().search(query.toLowerCase()) === 0;
	      });
	
	      _this.setState({
	        query: query,
	        suggestions: suggestions
	      });
	    };
	
	    this.handleKeyDown = function (e) {
	      var _state = _this.state;
	      var query = _state.query;
	      var selectedIndex = _state.selectedIndex;
	      var suggestions = _state.suggestions;
	
	      // hide suggestions menu on escape
	      if (e.keyCode === Keys.ESCAPE) {
	        e.preventDefault();
	        _this.setState({
	          selectedIndex: -1,
	          selectionMode: false,
	          suggestions: []
	        });
	      }
	
	      // when enter or tab is pressed add query to tags
	      if ((e.keyCode === Keys.ENTER || e.keyCode === Keys.TAB) && query != "") {
	        e.preventDefault();
	        if (_this.state.selectionMode) {
	          query = _this.state.suggestions[_this.state.selectedIndex];
	        }
	        _this.addTag(query);
	      }
	      var inputVal = _this.refs.input.value;
	
	      // when backspace key is pressed and query is blank, delete tag
	      if (e.keyCode === Keys.BACKSPACE && query == "" && inputVal === "" && _this.props.allowDeleteFromEmptyInput) {
	        //
	        _this.handleDelete(_this.props.tags.length - 1);
	      }
	
	      // up arrow
	      if (e.keyCode === Keys.UP_ARROW) {
	        e.preventDefault();
	        var _selectedIndex = _this.state.selectedIndex;
	        // last item, cycle to the top
	        if (_selectedIndex <= 0) {
	          _this.setState({
	            selectedIndex: _this.state.suggestions.length - 1,
	            selectionMode: true
	          });
	        } else {
	          _this.setState({
	            selectedIndex: _selectedIndex - 1,
	            selectionMode: true
	          });'';
	        }
	      }
	
	      // down arrow
	      if (e.keyCode === Keys.DOWN_ARROW) {
	        e.preventDefault();
	        _this.setState({
	          selectedIndex: (_this.state.selectedIndex + 1) % suggestions.length,
	          selectionMode: true
	        });
	      }
	    };
	
	    this.addTag = function (tag) {
	      var input = _this.refs.input;
	
	      // call method to add
	      _this.props.handleAddition(tag);
	
	      // reset the state
	      _this.setState({
	        query: "",
	        selectionMode: false,
	        selectedIndex: -1
	      });
	
	      // focus back on the input box
	      input.value = "";
	      input.focus();
	    };
	
	    this.handleSuggestionClick = function (i, e) {
	      _this.addTag(_this.state.suggestions[i]);
	    };
	
	    this.handleSuggestionHover = function (i, e) {
	      _this.setState({
	        selectedIndex: i,
	        selectionMode: true
	      });
	    };
	  }
	
	  _createClass(ReactTags, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autofocus) {
	        this.refs.input.focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var tagItems = this.props.tags.map(function (tagData, i) {
	        return _react2['default'].createElement(
	          _TagItem2['default'],
	          { key: tagData.id,
	            closable: true,
	            amStyle: _this2.props.amStyle,
	            onDelete: _this2.handleDelete.bind(_this2, i) },
	          tagData[_this2.props.labelField]
	        );
	      });
	
	      // get the suggestions for the given query
	      var query = this.state.query.trim(),
	          selectedIndex = this.state.selectedIndex,
	          suggestions = this.state.suggestions,
	          placeholder = this.props.placeholder;
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'tags-container' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'tags-selected-list' },
	          tagItems
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'tags-input' },
	          _react2['default'].createElement('input', { ref: 'input', type: 'text', placeholder: placeholder,
	            onChange: this.handleChange,
	            onKeyDown: this.handleKeyDown }),
	          _react2['default'].createElement(_Suggestions2['default'], { query: query,
	            suggestions: suggestions,
	            selectedIndex: selectedIndex,
	            handleClick: this.handleSuggestionClick,
	            handleHover: this.handleSuggestionHover })
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      tags: _react2['default'].PropTypes.array,
	      placeholder: _react2['default'].PropTypes.string,
	      labelField: _react2['default'].PropTypes.string,
	      amStyle: _react2['default'].PropTypes.string,
	      suggestions: _react2['default'].PropTypes.array,
	      autofocus: _react2['default'].PropTypes.bool,
	      handleDelete: _react2['default'].PropTypes.func.isRequired,
	      handleAddition: _react2['default'].PropTypes.func.isRequired,
	      allowDeleteFromEmptyInput: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      placeholder: 'Add new tag',
	      tags: [],
	      suggestions: [],
	      autofocus: true,
	      labelField: 'text',
	      allowDeleteFromEmptyInput: true
	    },
	    enumerable: true
	  }]);
	
	  return ReactTags;
	})(_react.Component);
	
	exports['default'] = ReactTags;
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	if (true) {
	  __webpack_require__(201);
	}
	// determines the min query length for which
	// suggestions are displayed
	var MIN_QUERY_LENGTH = 2;
	
	var Suggestions = (function (_Component) {
	  _inherits(Suggestions, _Component);
	
	  function Suggestions() {
	    _classCallCheck(this, Suggestions);
	
	    _get(Object.getPrototypeOf(Suggestions.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Suggestions, [{
	    key: 'markIt',
	    value: function markIt(input, query) {
	      var escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
	      var r = RegExp(escapedRegex, "gi");
	      return {
	        __html: input.replace(r, "<mark>$&</mark>")
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var props = this.props;
	      var suggestions = props.suggestions.map(function (item, i) {
	        return _react2['default'].createElement(
	          'li',
	          { key: i,
	            onClick: props.handleClick.bind(null, i),
	            onMouseOver: props.handleHover.bind(null, i),
	            className: i == props.selectedIndex ? "active" : "" },
	          _react2['default'].createElement('span', { dangerouslySetInnerHTML: _this.markIt(item, props.query) })
	        );
	      });
	
	      if (suggestions.length === 0 || props.query.length < MIN_QUERY_LENGTH) {
	        return _react2['default'].createElement(
	          'div',
	          { className: 'tags-suggestions' },
	          ' '
	        );
	      }
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'tags-suggestions' },
	        _react2['default'].createElement(
	          'ul',
	          null,
	          ' ',
	          suggestions,
	          ' '
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      query: _react2['default'].PropTypes.string.isRequired,
	      selectedIndex: _react2['default'].PropTypes.number.isRequired,
	      suggestions: _react2['default'].PropTypes.array.isRequired,
	      handleClick: _react2['default'].PropTypes.func.isRequired,
	      handleHover: _react2['default'].PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  return Suggestions;
	})(_react.Component);
	
	exports['default'] = Suggestions;
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsShallowEqual = __webpack_require__(192);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	//backport PureRenderEqual
	exports['default'] = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    var update = !(0, _utilsShallowEqual2['default'])(this.props, nextProps) || !(0, _utilsShallowEqual2['default'])(this.state, nextState);
	    console.log('shouldComponentUpdate check result is :' + update);
	    return update;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 *
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	function isShallowEqual(objA, objB) {
	  if (objA === objB) return true;
	  if (objA instanceof Date && objB instanceof Date) return objA.getTime() === objB.getTime();
	
	  if (typeof objA !== 'object' && typeof objB !== 'object') return objA === objB;
	  if (typeof objA !== typeof objB) return false;
	
	  return shallowEqual(objA, objB);
	}
	module.exports = isShallowEqual;

/***/ },
/* 193 */
87,
/* 194 */
87,
/* 195 */
87,
/* 196 */
87,
/* 197 */
87,
/* 198 */
87,
/* 199 */
87,
/* 200 */
87,
/* 201 */
87,
/* 202 */
87,
/* 203 */
294,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * gemini-scrollbar
	 * @version 1.2.9
	 * @link http://noeldelgado.github.io/gemini-scrollbar/
	 * @license MIT
	 */
	(function() {
	    var SCROLLBAR_WIDTH, CLASSNAMES, addClass, removeClass, getScrollbarWidth;
	
	    CLASSNAMES = {
	        element: 'gm-scrollbar-container',
	        verticalScrollbar: 'gm-scrollbar -vertical',
	        horizontalScrollbar: 'gm-scrollbar -horizontal',
	        thumb: 'thumb',
	        view: 'gm-scroll-view',
	        autoshow: 'gm-autoshow',
	        disable: 'gm-scrollbar-disable-selection',
	        prevented: 'gm-prevented',
	        scrollbarWidthTest: 'gm-test'
	    };
	
	    getScrollbarWidth = function getScrollbarWidth() {
	        var scrollDiv = document.createElement("div");
	        scrollDiv.className = CLASSNAMES.scrollbarWidthTest;
	        document.body.appendChild(scrollDiv);
	
	        var scrollbarWidth = (scrollDiv.offsetWidth - scrollDiv.clientWidth);
	        document.body.removeChild(scrollDiv);
	
	        return scrollbarWidth;
	    };
	
	    addClass = function addClass(el, classNames) {
	        if (el.classList) {
	            return classNames.forEach(function(cl) {
	                el.classList.add(cl);
	            });
	        }
	
	        el.className += ' ' + classNames.join(' ');
	    };
	
	    removeClass = function removeClass(el, classNames) {
	        if (el.classList) {
	            return classNames.forEach(function(cl) {
	                el.classList.remove(cl);
	            });
	        }
	
	        el.className = el.className.replace(new RegExp('(^|\\b)' + classNames.join('|') + '(\\b|$)', 'gi'), ' ');
	    };
	
	    function GeminiScrollbar(config) {
	        this.element = null;
	        this.autoshow = false;
	        this.createElements = true;
	
	        Object.keys(config || {}).forEach(function (propertyName) {
	            this[propertyName] = config[propertyName];
	        }, this);
	
	        SCROLLBAR_WIDTH = getScrollbarWidth();
	
	        this._cache = {events: {}};
	        this._created = false;
	        this._cursorDown = false;
	        this._prevPageX = 0;
	        this._prevPageY = 0;
	
	        this._document = null;
	        this._window = null;
	        this._viewElement = this.element;
	        this._scrollbarVerticalElement = null;
	        this._thumbVerticalElement = null;
	        this._scrollbarHorizontalElement = null;
	        this._scrollbarHorizontalElement = null;
	    }
	
	    GeminiScrollbar.prototype.create = function create() {
	        if (SCROLLBAR_WIDTH === 0) {
	            addClass(this.element, [CLASSNAMES.prevented]);
	            return this;
	        }
	
	        if (this._created === true) {
	            console.warn('calling on a already-created object');
	            return this;
	        }
	
	        if (this.autoshow) {
	            addClass(this.element, [CLASSNAMES.autoshow]);
	        }
	
	        this._document = document;
	        this._window = window;
	
	        if (this.createElements === true) {
	            this._viewElement = document.createElement('div');
	            this._scrollbarVerticalElement = document.createElement('div');
	            this._thumbVerticalElement = document.createElement('div');
	            this._scrollbarHorizontalElement = document.createElement('div');
	            this._thumbHorizontalElement = document.createElement('div');
	            while(this.element.childNodes.length > 0) {
	                this._viewElement.appendChild(this.element.childNodes[0]);
	            }
	
	            this._scrollbarVerticalElement.appendChild(this._thumbVerticalElement);
	            this._scrollbarHorizontalElement.appendChild(this._thumbHorizontalElement);
	            this.element.appendChild(this._scrollbarVerticalElement);
	            this.element.appendChild(this._scrollbarHorizontalElement);
	            this.element.appendChild(this._viewElement);
	        } else {
	            this._viewElement = this.element.querySelector('.' + CLASSNAMES.view);
	            this._scrollbarVerticalElement = this.element.querySelector('.' + CLASSNAMES.verticalScrollbar.split(' ').join('.'));
	            this._thumbVerticalElement = this._scrollbarVerticalElement.querySelector('.' + CLASSNAMES.thumb);
	            this._scrollbarHorizontalElement = this.element.querySelector('.' + CLASSNAMES.horizontalScrollbar.split(' ').join('.'));
	            this._thumbHorizontalElement = this._scrollbarHorizontalElement.querySelector('.' + CLASSNAMES.thumb);
	        }
	
	        addClass(this.element, [CLASSNAMES.element]);
	        addClass(this._viewElement, [CLASSNAMES.view]);
	        addClass(this._scrollbarVerticalElement, CLASSNAMES.verticalScrollbar.split(/\s/));
	        addClass(this._scrollbarHorizontalElement, CLASSNAMES.horizontalScrollbar.split(/\s/));
	        addClass(this._thumbVerticalElement, [CLASSNAMES.thumb]);
	        addClass(this._thumbHorizontalElement, [CLASSNAMES.thumb]);
	
	        this._scrollbarVerticalElement.style.display = '';
	        this._scrollbarHorizontalElement.style.display = '';
	
	        this._created = true;
	
	        return this._bindEvents().update();
	    };
	
	    GeminiScrollbar.prototype.update = function update() {
	        if (SCROLLBAR_WIDTH === 0) {
	            return this;
	        }
	
	        if (this._created === false) {
	            console.warn('calling on a not-yet-created object');
	            return this;
	        }
	
	        var heightPercentage, widthPercentage;
	
	        this._viewElement.style.width = ((this.element.offsetWidth + SCROLLBAR_WIDTH).toString() + 'px');
	        this._viewElement.style.height = ((this.element.offsetHeight + SCROLLBAR_WIDTH).toString() + 'px');
	
	        heightPercentage = (this._viewElement.clientHeight * 100 / this._viewElement.scrollHeight);
	        widthPercentage = (this._viewElement.clientWidth * 100 / this._viewElement.scrollWidth);
	
	        this._thumbVerticalElement.style.height = (heightPercentage < 100) ? (heightPercentage + '%') : '';
	        this._thumbHorizontalElement.style.width = (widthPercentage < 100) ? (widthPercentage + '%') : '';
	
	        this._scrollHandler();
	
	        return this;
	    };
	
	    GeminiScrollbar.prototype.destroy = function destroy() {
	        if (SCROLLBAR_WIDTH === 0) {
	            return this;
	        }
	
	        if (this._created === false) {
	            console.warn('calling on a not-yet-created object');
	            return this;
	        }
	
	        this._unbinEvents();
	
	        removeClass(this.element, [CLASSNAMES.element, CLASSNAMES.autoshow]);
	
	        if (this.createElements === true) {
	            this.element.removeChild(this._scrollbarVerticalElement);
	            this.element.removeChild(this._scrollbarHorizontalElement);
	            while(this._viewElement.childNodes.length > 0) {
	                this.element.appendChild(this._viewElement.childNodes[0]);
	            }
	            this.element.removeChild(this._viewElement);
	        } else {
	            this._viewElement.style.width = '';
	            this._viewElement.style.height = '';
	            this._scrollbarVerticalElement.style.display = 'none';
	            this._scrollbarHorizontalElement.style.display = 'none';
	        }
	
	        this._created = false;
	        this._document = this._window = null;
	
	        return null;
	    };
	
	    GeminiScrollbar.prototype.getViewElement = function() {
	        return this._viewElement;
	    };
	
	    GeminiScrollbar.prototype._bindEvents = function() {
	        this._cache.events.scrollHandler = this._scrollHandler.bind(this);
	        this._cache.events.clickVerticalTrackHandler = this._clickVerticalTrackHandler.bind(this);
	        this._cache.events.clickHorizontalTrackHandler = this._clickHorizontalTrackHandler.bind(this);
	        this._cache.events.clickVerticalThumbHandler = this._clickVerticalThumbHandler.bind(this);
	        this._cache.events.clickHorizontalThumbHandler = this._clickHorizontalThumbHandler.bind(this);
	        this._cache.events.mouseUpDocumentHandler = this._mouseUpDocumentHandler.bind(this);
	        this._cache.events.mouseMoveDocumentHandler = this._mouseMoveDocumentHandler.bind(this);
	        this._cache.events.resizeWindowHandler = this.update.bind(this);
	
	        this._viewElement.addEventListener('scroll', this._cache.events.scrollHandler);
	        this._scrollbarVerticalElement.addEventListener('mousedown', this._cache.events.clickVerticalTrackHandler);
	        this._scrollbarHorizontalElement.addEventListener('mousedown', this._cache.events.clickHorizontalTrackHandler);
	        this._thumbVerticalElement.addEventListener('mousedown', this._cache.events.clickVerticalThumbHandler);
	        this._thumbHorizontalElement.addEventListener('mousedown', this._cache.events.clickHorizontalThumbHandler);
	        this._document.addEventListener('mouseup', this._cache.events.mouseUpDocumentHandler);
	        this._window.addEventListener('resize', this._cache.events.resizeWindowHandler);
	
	        return this;
	    };
	
	    GeminiScrollbar.prototype._unbinEvents = function() {
	        this._viewElement.removeEventListener('scroll', this._cache.events.scrollHandler);
	        this._scrollbarVerticalElement.removeEventListener('mousedown', this._cache.events.clickVerticalTrackHandler);
	        this._scrollbarHorizontalElement.removeEventListener('mousedown', this._cache.events.clickHorizontalTrackHandler);
	        this._thumbVerticalElement.removeEventListener('mousedown', this._cache.events.clickVerticalThumbHandler);
	        this._thumbHorizontalElement.removeEventListener('mousedown', this._cache.events.clickHorizontalThumbHandler);
	        this._document.removeEventListener('mouseup', this._cache.events.mouseUpDocumentHandler);
	        this._document.removeEventListener('mousemove', this._cache.events.mouseMoveDocumentHandler);
	        this._window.removeEventListener('resize', this._cache.events.resizeWindowHandler);
	
	        return this;
	    };
	
	    GeminiScrollbar.prototype._scrollHandler = function() {
	        var viewElement, x, y;
	
	        viewElement = this._viewElement;
	        y = ((viewElement.scrollTop * 100) / viewElement.clientHeight);
	        x = ((viewElement.scrollLeft * 100) / viewElement.clientWidth);
	
	        this._thumbVerticalElement.style.msTransform = 'translateY(' + y + '%)';
	        this._thumbVerticalElement.style.webkitTransform = 'translateY(' + y + '%)';
	        this._thumbVerticalElement.style.transform = 'translateY(' + y + '%)';
	
	        this._thumbHorizontalElement.style.msTransform = 'translateX(' + x + '%)';
	        this._thumbHorizontalElement.style.webkitTransform = 'translateX(' + x + '%)';
	        this._thumbHorizontalElement.style.transform = 'translateX(' + x + '%)';
	    };
	
	    GeminiScrollbar.prototype._clickVerticalTrackHandler = function(e) {
	        var offset = Math.abs(e.target.getBoundingClientRect().top - e.clientY);
	        var thumbHalf = (this._thumbVerticalElement.offsetHeight / 2);
	        var thumbPositionPercentage = ((offset - thumbHalf) * 100 / this._scrollbarVerticalElement.offsetHeight);
	
	        this._viewElement.scrollTop = (thumbPositionPercentage * this._viewElement.scrollHeight / 100);
	    };
	
	    GeminiScrollbar.prototype._clickHorizontalTrackHandler = function(e) {
	        var offset = Math.abs(e.target.getBoundingClientRect().left - e.clientX);
	        var thumbHalf = (this._thumbHorizontalElement.offsetWidth / 2);
	        var thumbPositionPercentage = ((offset - thumbHalf) * 100 / this._scrollbarHorizontalElement.offsetWidth);
	
	        this._viewElement.scrollLeft = (thumbPositionPercentage * this._viewElement.scrollWidth / 100);
	    };
	
	    GeminiScrollbar.prototype._clickVerticalThumbHandler = function(e) {
	        this._startDrag(e);
	        this._prevPageY = (e.currentTarget.offsetHeight - (e.clientY - e.currentTarget.getBoundingClientRect().top));
	    };
	
	    GeminiScrollbar.prototype._clickHorizontalThumbHandler = function(e) {
	        this._startDrag(e);
	        this._prevPageX = (e.currentTarget.offsetWidth - (e.clientX - e.currentTarget.getBoundingClientRect().left));
	    };
	
	    GeminiScrollbar.prototype._startDrag = function(e) {
	        e.stopImmediatePropagation();
	        this._cursorDown = true;
	        addClass(document.body, [CLASSNAMES.disable]);
	        this._document.addEventListener('mousemove', this._cache.events.mouseMoveDocumentHandler);
	        this._document.onselectstart = function() {return false;};
	    };
	
	    GeminiScrollbar.prototype._mouseUpDocumentHandler = function() {
	        this._cursorDown = false;
	        this._prevPageX = this._prevPageY = 0;
	        removeClass(document.body, [CLASSNAMES.disable]);
	        this._document.removeEventListener('mousemove', this._cache.events.mouseMoveDocumentHandler);
	        this._document.onselectstart = null;
	    };
	
	    GeminiScrollbar.prototype._mouseMoveDocumentHandler = function(e) {
	        if (this._cursorDown === false) {
	            return void 0;
	        }
	
	        var offset, thumbClickPosition, thumbPositionPercentage;
	
	        if (this._prevPageY) {
	            offset = ((this._scrollbarVerticalElement.getBoundingClientRect().top - e.clientY) * -1);
	            thumbClickPosition = (this._thumbVerticalElement.offsetHeight - this._prevPageY);
	            thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this._scrollbarVerticalElement.offsetHeight);
	            this._viewElement.scrollTop = (thumbPositionPercentage * this._viewElement.scrollHeight / 100);
	            return void 0;
	        }
	
	        if (this._prevPageX) {
	            offset = ((this._scrollbarHorizontalElement.getBoundingClientRect().left - e.clientX) * -1);
	            thumbClickPosition = (this._thumbHorizontalElement.offsetWidth - this._prevPageX);
	            thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this._scrollbarHorizontalElement.offsetWidth);
	            this._viewElement.scrollLeft = (thumbPositionPercentage * this._viewElement.scrollWidth / 100);
	        }
	    };
	
	    if (true) {
	        module.exports = GeminiScrollbar;
	    } else {
	        window.GeminiScrollbar = GeminiScrollbar;
	    }
	})();


/***/ },
/* 205 */,
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(209);
	var forOwn = __webpack_require__(207);
	
	module.exports = function omit(obj, keys) {
	  if (!isObject(obj)) return {};
	
	  var keys = [].concat.apply([], [].slice.call(arguments, 1));
	  var last = keys[keys.length - 1];
	  var res = {}, fn;
	
	  if (typeof last === 'function') {
	    fn = keys.pop();
	  }
	
	  var isFunction = typeof fn === 'function';
	  if (!keys.length && !isFunction) {
	    return obj;
	  }
	
	  forOwn(obj, function (value, key) {
	    if (keys.indexOf(key) === -1) {
	
	      if (!isFunction) {
	        res[key] = value;
	      } else if (fn(value, key, obj)) {
	        res[key] = value;
	      }
	    }
	  });
	  return res;
	};


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var forIn = __webpack_require__(208);
	var hasOwn = Object.prototype.hasOwnProperty;
	
	module.exports = function forOwn(o, fn, thisArg) {
	  forIn(o, function (val, key) {
	    if (hasOwn.call(o, key)) {
	      return fn.call(thisArg, o[key], key, o);
	    }
	  });
	};


/***/ },
/* 208 */
/***/ function(module, exports) {

	/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function forIn(o, fn, thisArg) {
	  for (var key in o) {
	    if (fn.call(thisArg, o[key], key, o) === false) {
	      break;
	    }
	  }
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isExtendable(val) {
	  return typeof val !== 'undefined' && val !== null
	    && (typeof val === 'object' || typeof val === 'function');
	};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcTooltip = __webpack_require__(151);
	
	var _rcTooltip2 = _interopRequireDefault(_rcTooltip);
	
	/*
	
	 var MenuItem = Menu.Item;
	
	 var menu = <Menu><MenuItem>1</MenuItem></Menu>;
	
	 <DropDown trigger="click" animationName="" overlay={<>} onSelect={}>
	 <button>open</button>
	 </DropDown>
	 */
	
	var Dropdown = _react2['default'].createClass({
	  displayName: 'Dropdown',
	
	  propTypes: {
	    minOverlayWidthMatchTrigger: _react2['default'].PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      minOverlayWidthMatchTrigger: true,
	      prefixCls: 'rc-dropdown',
	      defaultVisible: false,
	      onVisibleChange: function onVisibleChange() {},
	      placement: {
	        points: ['tl', 'bl']
	      }
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    if ('visible' in props) {
	      return {
	        visible: props.visible
	      };
	    }
	    return {
	      visible: props.defaultVisible
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if ('visible' in props) {
	      this.setState({
	        visible: props.visible
	      });
	    }
	  },
	
	  onClick: function onClick(e) {
	    var props = this.props;
	    var overlayProps = props.overlay.props;
	    if (!('visible' in props)) {
	      this.setState({
	        visible: false
	      });
	    }
	    if (overlayProps.onClick) {
	      overlayProps.onClick(e);
	    }
	  },
	
	  onVisibleChange: function onVisibleChange(v) {
	    var props = this.props;
	    if (!('visible' in props)) {
	      this.setState({
	        visible: v
	      });
	    }
	    props.onVisibleChange(v);
	  },
	
	  getMenuElement: function getMenuElement() {
	    var props = this.props;
	    return _react2['default'].cloneElement(props.overlay, {
	      prefixCls: props.prefixCls + '-menu',
	      onClick: this.onClick
	    });
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(_rcTooltip2['default'], _extends({}, this.props, {
	      ref: 'tooltip',
	      visible: this.state.visible,
	      afterVisibleChange: this.afterVisibleChange,
	      overlay: this.getMenuElement(),
	      onVisibleChange: this.onVisibleChange
	    }));
	  },
	
	  afterVisibleChange: function afterVisibleChange(visible) {
	    if (visible && this.props.minOverlayWidthMatchTrigger) {
	      var overlayNode = _react2['default'].findDOMNode(this.refs.tooltip.popupInstance);
	      var rootNode = _react2['default'].findDOMNode(this);
	      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
	        overlayNode.style.width = rootNode.offsetWidth + 'px';
	      }
	    }
	  }
	});
	
	exports['default'] = Dropdown;
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Dropdown = __webpack_require__(210);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	exports['default'] = _Dropdown2['default'];
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcAnimate = __webpack_require__(21);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _rcUtil = __webpack_require__(5);
	
	var Notice = _react2['default'].createClass({
	  displayName: 'Notice',
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onEnd: function onEnd() {},
	      duration: 1.5,
	      style: {
	        right: '50%'
	      }
	    };
	  },
	
	  clearCloseTimer: function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    this.componentDidMount();
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    this.clearCloseTimer();
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this.close();
	      }, this.props.duration * 1000);
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.clearCloseTimer();
	  },
	
	  close: function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  },
	
	  render: function render() {
	    var _className;
	
	    var props = this.props;
	    var componentClass = props.prefixCls + '-notice';
	    var className = (_className = {}, _defineProperty(_className, '' + componentClass, 1), _defineProperty(_className, componentClass + '-closable', props.closable), _defineProperty(_className, props.className, !!props.className), _className);
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _rcUtil.classSet)(className), style: props.style },
	      _react2['default'].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        this.props.children
	      ),
	      props.closable ? _react2['default'].createElement(
	        'a',
	        { tabIndex: "0", onClick: this.close, className: componentClass + '-close' },
	        _react2['default'].createElement('span', { className: componentClass + '-close-x' })
	      ) : null
	    );
	  }
	});
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'rcNotification_' + now + '_' + seed++;
	}
	
	var Notification = _react2['default'].createClass({
	  displayName: 'Notification',
	
	  getInitialState: function getInitialState() {
	    return {
	      notices: []
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-notification',
	      animation: 'fade',
	      style: {
	        'top': 65,
	        left: '50%'
	      }
	    };
	  },
	
	  remove: function remove(key) {
	    var notices = this.state.notices.filter(function (notice) {
	      return notice.key !== key;
	    });
	    this.setState({
	      notices: notices
	    });
	  },
	
	  add: function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    var notices = this.state.notices;
	    if (!notices.filter(function (v) {
	      return v.key === key;
	    }).length) {
	      this.setState({
	        notices: notices.concat(notice)
	      });
	    }
	  },
	
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	
	  render: function render() {
	    var _className2,
	        _this2 = this;
	
	    var props = this.props;
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _rcUtil.createChainedFunction)(_this2.remove.bind(_this2, notice.key), notice.onClose);
	      return _react2['default'].createElement(
	        Notice,
	        _extends({ prefixCls: props.prefixCls }, notice, { onClose: onClose }),
	        notice.content
	      );
	    });
	    var className = (_className2 = {}, _defineProperty(_className2, props.prefixCls, 1), _defineProperty(_className2, props.className, !!props.className), _className2);
	    return _react2['default'].createElement(
	      'div',
	      { className: (0, _rcUtil.classSet)(className), style: props.style },
	      _react2['default'].createElement(
	        _rcAnimate2['default'],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  }
	});
	
	Notification.newInstance = function (props) {
	  props = props || {};
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	  var notification = _react2['default'].render(_react2['default'].createElement(Notification, props), div);
	  return {
	    notice: function notice(noticeProps) {
	      notification.add(noticeProps);
	    },
	    removeNotice: function removeNotice(key) {
	      notification.remove(key);
	    },
	    component: notification,
	    destroy: function destroy() {
	      _react2['default'].unmountComponentAtNode(div);
	      document.body.removeChild(div);
	    }
	  };
	};
	
	module.exports = Notification;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(212);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(116);
	
	var _rcMenu = __webpack_require__(30);
	
	var _OptGroup = __webpack_require__(115);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _rcUtil = __webpack_require__(5);
	
	var _DropdownPanel = __webpack_require__(215);
	
	var _DropdownPanel2 = _interopRequireDefault(_DropdownPanel);
	
	var _rcAlign = __webpack_require__(220);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(21);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var SelectDropdown = (function (_React$Component) {
	  _inherits(SelectDropdown, _React$Component);
	
	  function SelectDropdown() {
	    _classCallCheck(this, SelectDropdown);
	
	    _get(Object.getPrototypeOf(SelectDropdown.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(SelectDropdown, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.visible || nextProps.visible;
	    }
	  }, {
	    key: 'getDropdownPrefixCls',
	    value: function getDropdownPrefixCls() {
	      return this.props.prefixCls + '-dropdown';
	    }
	  }, {
	    key: 'getMenuComponent',
	    value: function getMenuComponent() {
	      return this.refs.panel.refs.menu;
	    }
	  }, {
	    key: 'renderFilterOptionsFromChildren',
	    value: function renderFilterOptionsFromChildren(children, showNotFound) {
	      var _this = this;
	
	      var sel = [];
	      var props = this.props;
	      var inputValue = props.inputValue;
	      var childrenKeys = [];
	      var tags = props.tags;
	      _react2['default'].Children.forEach(children, function (child) {
	        if (child.type === _OptGroup2['default']) {
	          var innerItems = _this.renderFilterOptionsFromChildren(child.props.children, false);
	          if (innerItems.length) {
	            var label = child.props.label;
	            var key = child.key;
	            if (!key && typeof label === 'string') {
	              key = label;
	            } else if (!label && key) {
	              label = key;
	            }
	            sel.push(_react2['default'].createElement(
	              _rcMenu.ItemGroup,
	              { key: key, title: label },
	              innerItems
	            ));
	          }
	          return;
	        }
	        var childValue = (0, _util.getValuePropValue)(child);
	        if (_this.filterOption(inputValue, child)) {
	          sel.push(_react2['default'].createElement(_rcMenu.Item, _extends({
	            value: childValue,
	            key: childValue
	          }, child.props)));
	        }
	        if (tags && !child.props.disabled) {
	          childrenKeys.push(childValue);
	        }
	      });
	      if (tags) {
	        // tags value must be string
	        var value = props.value;
	        value = value.filter(function (v) {
	          return childrenKeys.indexOf(v) === -1 && (!inputValue || v.indexOf(inputValue) > -1);
	        });
	        sel = sel.concat(value.map(function (v) {
	          return _react2['default'].createElement(
	            _rcMenu.Item,
	            { value: v, key: v },
	            v
	          );
	        }));
	        if (inputValue) {
	          var notFindInputItem = sel.every(function (s) {
	            return (0, _util.getValuePropValue)(s) !== inputValue;
	          });
	          if (notFindInputItem) {
	            sel.unshift(_react2['default'].createElement(
	              _rcMenu.Item,
	              { value: inputValue, key: inputValue },
	              inputValue
	            ));
	          }
	        }
	      }
	      if (!sel.length && showNotFound && props.notFoundContent) {
	        sel = [_react2['default'].createElement(
	          _rcMenu.Item,
	          { disabled: true, value: 'NOT_FOUND', key: 'NOT_FOUND' },
	          props.notFoundContent
	        )];
	      }
	      return sel;
	    }
	  }, {
	    key: 'renderFilterOptions',
	    value: function renderFilterOptions() {
	      return this.renderFilterOptionsFromChildren(this.props.children, true);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _className;
	
	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var dropdownPrefixCls = this.getDropdownPrefixCls();
	      var menuItems = this.renderFilterOptions();
	      var visible = props.visible;
	      var search = props.isMultipleOrTagsOrCombobox || !props.showSearch ? null : _react2['default'].createElement(
	        'span',
	        { className: prefixCls + '-search ' + prefixCls + '-search--dropdown' },
	        props.inputElement
	      );
	      if (!search && !menuItems.length) {
	        visible = false;
	      }
	      var className = (_className = {}, _defineProperty(_className, dropdownPrefixCls, 1), _defineProperty(_className, dropdownPrefixCls + '--below', 1), _defineProperty(_className, dropdownPrefixCls + '-hidden', !visible), _defineProperty(_className, props.className, !!props.className), _defineProperty(_className, dropdownPrefixCls + '--' + (props.isMultipleOrTags ? 'multiple' : 'single'), 1), _className);
	      // single and not combobox, input is inside dropdown
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          showProp: 'selectOpen',
	          transitionName: props.transitionName },
	        _react2['default'].createElement(
	          _rcAlign2['default'],
	          { target: props.getAlignTarget,
	            key: 'dropdown',
	            selectOpen: visible,
	            disabled: !visible,
	            align: { points: ['tl', 'bl'], offset: [0, 4] } },
	          _react2['default'].createElement(
	            'div',
	            { key: 'dropdown',
	              onFocus: props.onDropdownFocus,
	              onBlur: props.onDropdownBlur,
	              style: props.dropdownStyle,
	              className: (0, _rcUtil.classSet)(className),
	              tabIndex: '-1' },
	            _react2['default'].createElement(_DropdownPanel2['default'], _extends({ ref: 'panel' }, props, { menuItems: menuItems, visible: visible, search: search }))
	          )
	        )
	      );
	    }
	  }, {
	    key: 'filterOption',
	    value: function filterOption(input, child) {
	      if (!input) {
	        return true;
	      }
	      var filterOption = this.props.filterOption;
	      if (!filterOption) {
	        return true;
	      }
	      if (child.props.disabled) {
	        return false;
	      }
	      return filterOption.call(this, input, child);
	    }
	  }]);
	
	  return SelectDropdown;
	})(_react2['default'].Component);
	
	SelectDropdown.propTypes = {
	  filterOption: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.func]),
	  visible: _react2['default'].PropTypes.bool,
	  prefixCls: _react2['default'].PropTypes.string,
	  children: _react2['default'].PropTypes.any
	};
	
	exports['default'] = SelectDropdown;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(116);
	
	var _rcMenu = __webpack_require__(30);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var Panel = _react2['default'].createClass({
	  displayName: 'Panel',
	
	  propTypes: {
	    prefixCls: _react2['default'].PropTypes.string,
	    menuItems: _react2['default'].PropTypes.any,
	    search: _react2['default'].PropTypes.any
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.visible;
	  },
	
	  getDropdownPrefixCls: function getDropdownPrefixCls() {
	    return this.props.prefixCls + '-dropdown';
	  },
	
	  renderMenu: function renderMenu() {
	    var props = this.props;
	    var menuItems = props.menuItems;
	    if (menuItems && menuItems.length) {
	      var menuProps = {};
	      if (props.isMultipleOrTags) {
	        menuProps.onDeselect = props.onMenuDeselect;
	        menuProps.onSelect = props.onMenuSelect;
	      } else {
	        menuProps.onClick = props.onMenuSelect;
	      }
	      var value = props.value;
	      var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	      var activeKey = undefined;
	      if (!props.isMultipleOrTags) {
	        if (!activeKey && selectedKeys.length === 1) {
	          activeKey = selectedKeys[0];
	        }
	      }
	      return _react2['default'].createElement(
	        _rcMenu2['default'],
	        _extends({
	          ref: 'menu',
	          style: props.dropdownMenuStyle,
	          defaultActiveFirst: true,
	          activeKey: activeKey,
	          multiple: props.isMultipleOrTags,
	          focusable: false
	        }, menuProps, {
	          selectedKeys: selectedKeys,
	          prefixCls: this.getDropdownPrefixCls() + '-menu' }),
	        menuItems
	      );
	    }
	    return null;
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      this.props.search,
	      this.renderMenu()
	    );
	  }
	});
	
	exports['default'] = Panel;
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Option = (function (_React$Component) {
	  _inherits(Option, _React$Component);
	
	  function Option() {
	    _classCallCheck(this, Option);
	
	    _get(Object.getPrototypeOf(Option.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return Option;
	})(_react2['default'].Component);
	
	exports['default'] = Option;
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(5);
	
	var _OptGroup = __webpack_require__(115);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _Dropdown = __webpack_require__(214);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _util = __webpack_require__(116);
	
	function noop() {}
	
	function filterFn(input, child) {
	  return String((0, _util.getPropValue)(child, this.props.optionFilterProp)).indexOf(input) > -1;
	}
	
	function saveRef(name, component) {
	  this[name] = component;
	}
	
	var Select = _react2['default'].createClass({
	  displayName: 'Select',
	
	  propTypes: {
	    multiple: _react.PropTypes.bool,
	    filterOption: _react.PropTypes.any,
	    showSearch: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    showArrow: _react.PropTypes.bool,
	    tags: _react.PropTypes.bool,
	    transitionName: _react.PropTypes.string,
	    optionLabelProp: _react.PropTypes.string,
	    optionFilterProp: _react.PropTypes.string,
	    animation: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onSearch: _react.PropTypes.func,
	    searchPlaceholder: _react.PropTypes.string,
	    placeholder: _react.PropTypes.any,
	    onDeselect: _react.PropTypes.func,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]),
	    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]),
	    label: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    defaultLabel: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    dropdownStyle: _react.PropTypes.object,
	    maxTagTextLength: _react.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-select',
	      filterOption: filterFn,
	      showSearch: true,
	      allowClear: false,
	      placeholder: '',
	      searchPlaceholder: '',
	      defaultValue: [],
	      onChange: noop,
	      onSelect: noop,
	      onSearch: noop,
	      onDeselect: noop,
	      showArrow: true,
	      dropdownMatchSelectWidth: true,
	      dropdownStyle: {},
	      dropdownMenuStyle: {},
	      optionFilterProp: 'value',
	      optionLabelProp: 'value',
	      notFoundContent: 'Not Found'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var value = [];
	    if ('value' in props) {
	      value = (0, _util.toArray)(props.value);
	    } else {
	      value = (0, _util.toArray)(props.defaultValue);
	    }
	    var label = this.getLabelFromProps(props, value, 1);
	    var inputValue = '';
	    if (props.combobox) {
	      inputValue = value[0] || '';
	    }
	    this.saveInputRef = saveRef.bind(this, 'inputInstance');
	    this.saveDropdownRef = saveRef.bind(this, 'dropdownInstance');
	    return { value: value, inputValue: inputValue, label: label };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      var value = (0, _util.toArray)(nextProps.value);
	      var label = this.getLabelFromProps(nextProps, value);
	      this.setState({
	        value: value,
	        label: label
	      });
	      if (nextProps.combobox) {
	        this.setState({
	          inputValue: value[0] || ''
	        });
	      }
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var state = this.state;
	    var props = this.props;
	    if (this.haveOpened) {
	      _react2['default'].render(this.getDropdownElement(), this.getDropdownContainer());
	    }
	    if (state.open) {
	      if (props.dropdownMatchSelectWidth) {
	        var dropdownDOMNode = this.getDropdownDOMNode();
	        if (dropdownDOMNode) {
	          dropdownDOMNode.style.width = this.getDOMNode().offsetWidth + 'px';
	        }
	      }
	      if ((0, _util.isMultipleOrTags)(props)) {
	        var inputNode = this.getInputDOMNode();
	        if (inputNode.value) {
	          inputNode.style.width = '';
	          inputNode.style.width = inputNode.scrollWidth + 'px';
	        } else {
	          inputNode.style.width = '';
	        }
	      }
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.dropdownContainer) {
	      _react2['default'].unmountComponentAtNode(this.dropdownContainer);
	      document.body.removeChild(this.dropdownContainer);
	      this.dropdownContainer = null;
	    }
	    this.dropdownInstance = null;
	    if (this._blurTimer) {
	      clearTimeout(this._blurTimer);
	      this._blurTimer = null;
	    }
	  },
	
	  onInputChange: function onInputChange(e) {
	    var val = e.target.value;
	    var props = this.props;
	    this.setState({
	      inputValue: val,
	      open: true
	    });
	    if ((0, _util.isCombobox)(props)) {
	      this.fireChange([val], [val]);
	    }
	    props.onSearch(val);
	  },
	
	  onClick: function onClick() {
	    var props = this.props;
	    if (!props.disabled) {
	      if (this.state.open) {
	        this.setOpenState(false);
	      } else {
	        this.openIfHasChildren();
	        if ((0, _util.isMultipleOrTagsOrCombobox)(props)) {
	          if (this.getInputDOMNode()) {
	            this.getInputDOMNode().focus();
	          }
	        }
	      }
	    }
	  },
	
	  // combobox ignore
	  onKeyDown: function onKeyDown(e) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var keyCode = e.keyCode;
	    if (this.state.open && !this.getInputDOMNode()) {
	      this.onInputKeyDown(e);
	    } else if (keyCode === _rcUtil.KeyCode.ENTER || keyCode === _rcUtil.KeyCode.DOWN) {
	      this.onClick();
	      e.preventDefault();
	    }
	  },
	
	  onInputKeyDown: function onInputKeyDown(e) {
	    var props = this.props;
	    var state = this.state;
	    var keyCode = e.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !e.target.value && keyCode === _rcUtil.KeyCode.BACKSPACE) {
	      var value = state.value.concat();
	      if (value.length) {
	        var label = state.label.concat();
	        var popValue = value.pop();
	        label.pop();
	        props.onDeselect(popValue);
	        this.fireChange(value, label);
	      }
	      return;
	    }
	
	    if (keyCode === _rcUtil.KeyCode.DOWN) {
	      if (!state.open) {
	        this.openIfHasChildren();
	        e.preventDefault();
	        e.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _rcUtil.KeyCode.ESC) {
	      if (state.open) {
	        this.setOpenState(false);
	        e.preventDefault();
	        e.stopPropagation();
	      }
	      return;
	    }
	
	    if (state.open) {
	      var menu = this.dropdownInstance && this.dropdownInstance.getMenuComponent();
	      if (menu && menu.onKeyDown(e)) {
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    }
	  },
	
	  onMenuSelect: function onMenuSelect(_ref) {
	    var item = _ref.item;
	
	    var value = this.state.value;
	    var label = this.state.label;
	    var props = this.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var selectedLabel = this.getLabelFromOption(item);
	    props.onSelect(selectedValue, item);
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if (value.indexOf(selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([selectedValue]);
	      label = label.concat([selectedLabel]);
	    } else {
	      if (value[0] === selectedValue) {
	        this.setOpenState(false);
	        return;
	      }
	      value = [selectedValue];
	      label = [selectedLabel];
	    }
	    this.fireChange(value, label);
	    this.setOpenState(false);
	    this.setState({
	      inputValue: ''
	    });
	    if ((0, _util.isCombobox)(props)) {
	      this.setState({
	        inputValue: (0, _util.getPropValue)(item, props.optionLabelProp)
	      });
	    }
	  },
	
	  onMenuDeselect: function onMenuDeselect(_ref2) {
	    var item = _ref2.item;
	    var domEvent = _ref2.domEvent;
	
	    if (domEvent.type === 'click') {
	      this.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    this.setOpenState(false);
	    this.setState({
	      inputValue: ''
	    });
	  },
	
	  onBlur: function onBlur() {
	    var _this = this;
	
	    if (this._blurTimer) {
	      clearTimeout(this._blurTimer);
	    }
	    this._blurTimer = setTimeout(function () {
	      _this.setState({
	        open: false
	      });
	    }, 100);
	  },
	
	  onFocus: function onFocus() {
	    if (this._blurTimer) {
	      clearTimeout(this._blurTimer);
	      this._blurTimer = null;
	    }
	  },
	
	  onPlaceholderClick: function onPlaceholderClick() {
	    this.getInputDOMNode().focus();
	  },
	
	  onClearSelection: function onClearSelection(e) {
	    var props = this.props;
	    var state = this.state;
	    if (props.disabled) {
	      return;
	    }
	    e.stopPropagation();
	    if (state.inputValue || state.value.length) {
	      this.fireChange([], []);
	      this.setOpenState(false);
	      this.setState({
	        inputValue: ''
	      });
	    }
	  },
	
	  getLabelBySingleValue: function getLabelBySingleValue(children, value) {
	    var _this2 = this;
	
	    if (value === undefined) {
	      return null;
	    }
	    var label = null;
	    _react2['default'].Children.forEach(children, function (c) {
	      if (c.type === _OptGroup2['default']) {
	        var maybe = _this2.getLabelBySingleValue(c.props.children, value);
	        if (maybe !== null) {
	          label = maybe;
	        }
	      } else if ((0, _util.getValuePropValue)(c) === value) {
	        label = _this2.getLabelFromOption(c);
	      }
	    });
	    return label;
	  },
	
	  getLabelFromOption: function getLabelFromOption(c) {
	    return (0, _util.getPropValue)(c, this.props.optionLabelProp);
	  },
	
	  getLabelFromProps: function getLabelFromProps(props, value, init) {
	    var label = [];
	    if ('label' in props) {
	      label = (0, _util.toArray)(props.label);
	    } else if (init && 'defaultLabel' in props) {
	      label = (0, _util.toArray)(props.defaultLabel);
	    } else {
	      label = this.getLabelByValue(props.children, value);
	    }
	    return label;
	  },
	
	  getVLForOnChange: function getVLForOnChange(vls) {
	    if (vls !== undefined) {
	      return (0, _util.isMultipleOrTags)(this.props) ? vls : vls[0];
	    }
	    return vls;
	  },
	
	  getLabelByValue: function getLabelByValue(children, value) {
	    var _this3 = this;
	
	    return value.map(function (v) {
	      var label = _this3.getLabelBySingleValue(children, v);
	      if (label === null) {
	        return v;
	      }
	      return label;
	    });
	  },
	
	  getDropdownDOMNode: function getDropdownDOMNode() {
	    return _react2['default'].findDOMNode(this.dropdownInstance);
	  },
	
	  getDropdownContainer: function getDropdownContainer() {
	    if (!this.dropdownContainer) {
	      this.dropdownContainer = document.createElement('div');
	      document.body.appendChild(this.dropdownContainer);
	    }
	    return this.dropdownContainer;
	  },
	
	  getSearchPlaceholderElement: function getSearchPlaceholderElement(hidden) {
	    var props = this.props;
	    if (props.searchPlaceholder) {
	      return _react2['default'].createElement(
	        'span',
	        {
	          style: { display: hidden ? 'none' : 'block' },
	          onClick: this.onPlaceholderClick,
	          className: props.prefixCls + '-search__field__placeholder' },
	        props.searchPlaceholder
	      );
	    }
	    return null;
	  },
	
	  getInputElement: function getInputElement() {
	    var props = this.props;
	    return _react2['default'].createElement(
	      'span',
	      { className: props.prefixCls + '-search__field__wrap' },
	      _react2['default'].createElement('input', { ref: this.saveInputRef,
	        onChange: this.onInputChange,
	        onKeyDown: this.onInputKeyDown,
	        value: this.state.inputValue,
	        disabled: props.disabled,
	        className: props.prefixCls + '-search__field',
	        role: 'textbox' }),
	      (0, _util.isMultipleOrTags)(props) ? null : this.getSearchPlaceholderElement(!!this.state.inputValue)
	    );
	  },
	
	  getDropdownElement: function getDropdownElement() {
	    var state = this.state;
	    var props = this.props;
	    return _react2['default'].createElement(
	      _Dropdown2['default'],
	      {
	        key: 'dropdown',
	        transitionName: this.getDropdownTransitionName(),
	        visible: state.open,
	        getAlignTarget: this.getDOMNode,
	        onDropdownFocus: this.onFocus,
	        onDropdownBlur: this.onBlur,
	        filterOption: props.filterOption,
	        optionFilterProp: props.optionFilterProp,
	        optionLabelProp: props.optionLabelProp,
	        inputValue: state.inputValue,
	        inputElement: this.getInputElement(),
	        ref: this.saveDropdownRef,
	        tags: props.tags,
	        notFoundContent: props.notFoundContent,
	        onMenuDeselect: this.onMenuDeselect,
	        onMenuSelect: this.onMenuSelect,
	        value: state.value,
	        isMultipleOrTags: (0, _util.isMultipleOrTags)(props),
	        prefixCls: props.prefixCls,
	        isMultipleOrTagsOrCombobox: (0, _util.isMultipleOrTagsOrCombobox)(props),
	        showSearch: props.showSearch,
	        className: props.dropdownClassName,
	        dropdownMenuStyle: props.dropdownMenuStyle,
	        dropdownStyle: props.dropdownStyle },
	      props.children
	    );
	  },
	
	  getDropdownTransitionName: function getDropdownTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-dropdown-' + props.animation;
	    }
	    return transitionName;
	  },
	
	  getInputDOMNode: function getInputDOMNode() {
	    return _react2['default'].findDOMNode(this.inputInstance);
	  },
	
	  renderTopControlNode: function renderTopControlNode() {
	    var _this4 = this;
	
	    var value = this.state.value;
	    var label = this.state.label;
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var allowClear = props.allowClear;
	    var clear = _react2['default'].createElement('span', { key: 'clear',
	      className: prefixCls + '-selection__clear',
	      onClick: this.onClearSelection });
	    // single and not combobox, input is inside dropdown
	    if ((0, _util.isSingleMode)(props)) {
	      var placeholder = _react2['default'].createElement(
	        'span',
	        { key: 'placeholder', className: prefixCls + '-selection__placeholder' },
	        props.placeholder
	      );
	      var innerNode = placeholder;
	      if (this.state.label[0]) {
	        innerNode = _react2['default'].createElement(
	          'span',
	          { key: 'value' },
	          this.state.label[0]
	        );
	      }
	      return _react2['default'].createElement(
	        'span',
	        { className: prefixCls + '-selection__rendered' },
	        [innerNode, allowClear ? clear : null]
	      );
	    }
	
	    var selectedValueNodes = undefined;
	    if ((0, _util.isMultipleOrTags)(props)) {
	      selectedValueNodes = value.map(function (v, index) {
	        var content = label[index];
	        var title = content;
	        var maxTagTextLength = props.maxTagTextLength;
	        if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	          content = content.slice(0, maxTagTextLength) + '...';
	        }
	        return _react2['default'].createElement(
	          'li',
	          { className: prefixCls + '-selection__choice',
	            key: v,
	            title: title },
	          _react2['default'].createElement(
	            'span',
	            { className: prefixCls + '-selection__choice__content' },
	            content
	          ),
	          _react2['default'].createElement('span', { className: prefixCls + '-selection__choice__remove',
	            onClick: _this4.removeSelected.bind(_this4, v) })
	        );
	      });
	    }
	    return _react2['default'].createElement(
	      'ul',
	      { className: prefixCls + '-selection__rendered' },
	      selectedValueNodes,
	      allowClear && !(0, _util.isMultipleOrTags)(props) ? clear : null,
	      _react2['default'].createElement(
	        'li',
	        { className: prefixCls + '-search ' + prefixCls + '-search--inline' },
	        this.getInputElement()
	      )
	    );
	  },
	
	  render: function render() {
	    var _rootCls;
	
	    var props = this.props;
	    var multiple = (0, _util.isMultipleOrTags)(props);
	    var state = this.state;
	    var prefixCls = props.prefixCls;
	    var ctrlNode = this.renderTopControlNode();
	    var extraSelectionProps = {};
	    if (!(0, _util.isCombobox)(props)) {
	      extraSelectionProps = {
	        onKeyDown: this.onKeyDown,
	        tabIndex: 0
	      };
	    }
	    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, props.className, !!props.className), _defineProperty(_rootCls, prefixCls, 1), _defineProperty(_rootCls, prefixCls + '-open', this.state.open), _defineProperty(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, prefixCls + '-disabled', props.disabled), _rootCls);
	    this.haveOpened = this.haveOpened || state.open;
	    return _react2['default'].createElement(
	      'span',
	      {
	        style: props.style,
	        className: (0, _rcUtil.classSet)(rootCls),
	        onFocus: this.onFocus,
	        onBlur: this.onBlur },
	      _react2['default'].createElement(
	        'span',
	        _extends({ ref: 'selection',
	          key: 'selection',
	          className: prefixCls + '-selection ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
	          role: 'combobox',
	          'aria-autocomplete': 'list',
	          onClick: this.onClick,
	          'aria-haspopup': 'true',
	          'aria-expanded': state.open
	        }, extraSelectionProps),
	        ctrlNode,
	        multiple || !props.showArrow ? null : _react2['default'].createElement(
	          'span',
	          { key: 'arrow', className: prefixCls + '-arrow', tabIndex: '-1', style: { outline: 'none' } },
	          _react2['default'].createElement('b', null)
	        ),
	        multiple ? this.getSearchPlaceholderElement(!!this.state.inputValue || this.state.value.length) : null
	      )
	    );
	  },
	
	  removeSelected: function removeSelected(selectedValue) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var label = this.state.label.concat();
	    var index = this.state.value.indexOf(selectedValue);
	    var value = this.state.value.filter(function (v) {
	      return v !== selectedValue;
	    });
	    if (index !== -1) {
	      label.splice(index, 1);
	    }
	    var canMultiple = (0, _util.isMultipleOrTags)(props);
	    if (canMultiple) {
	      props.onDeselect(selectedValue);
	    }
	    this.fireChange(value, label);
	  },
	
	  setOpenState: function setOpenState(open) {
	    var _this5 = this;
	
	    var refs = this.refs;
	    this.setState({
	      open: open
	    }, function () {
	      if (open || (0, _util.isMultipleOrTagsOrCombobox)(_this5.props)) {
	        if (_this5.getInputDOMNode()) {
	          _this5.getInputDOMNode().focus();
	        }
	      } else if (refs.selection) {
	        _react2['default'].findDOMNode(refs.selection).focus();
	      }
	    });
	  },
	
	  openIfHasChildren: function openIfHasChildren() {
	    var props = this.props;
	    if (_react2['default'].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      this.setOpenState(true);
	    }
	  },
	
	  fireChange: function fireChange(value, label) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value, label: label
	      });
	    }
	    props.onChange(this.getVLForOnChange(value), this.getVLForOnChange(label));
	  }
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Select = __webpack_require__(217);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(216);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _OptGroup = __webpack_require__(115);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	_Select2['default'].Option = _Option2['default'];
	_Select2['default'].OptGroup = _OptGroup2['default'];
	exports['default'] = _Select2['default'];
	module.exports = exports['default'];

/***/ },
/* 219 */
[464, 221],
/* 220 */
[465, 219],
/* 221 */
[468, 222],
/* 222 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = undefined;
	
	function css(el, name, v) {
	  var value = v;
	  if (typeof name === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var preset = -9999;
	  if ('left' in offset) {
	    elem.style.left = preset + 'px';
	  }
	  if ('top' in offset) {
	    elem.style.top = preset + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key = undefined;
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      ret[key] = preset + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var val = undefined;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = undefined;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(225);
	
	var _rcAlign = __webpack_require__(227);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(21);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var placementAlignMap = {
	  left: { points: ['cr', 'cl'] },
	  right: { points: ['cl', 'cr'] },
	  top: { points: ['bc', 'tc'] },
	  bottom: { points: ['tc', 'bc'] }
	};
	
	var Popup = _react2['default'].createClass({
	  displayName: 'Popup',
	
	  propTypes: {
	    visible: _react2['default'].PropTypes.bool,
	    wrap: _react2['default'].PropTypes.object,
	    style: _react2['default'].PropTypes.object,
	    onMouseEnter: _react2['default'].PropTypes.func,
	    onMouseLeave: _react2['default'].PropTypes.func
	  },
	
	  // optimize for speed
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	
	  onAlign: function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var placement = props.placement;
	    if (placement && placement.points) {
	      var originalClassName = (0, _utils.getToolTipClassByPlacement)(props.prefixCls, placement);
	      var nextClassName = (0, _utils.getToolTipClassByPlacement)(props.prefixCls, align);
	      if (nextClassName !== originalClassName) {
	        popupDomNode.className = popupDomNode.className.replace(originalClassName, nextClassName);
	      }
	    }
	  },
	
	  getPopupDomNode: function getPopupDomNode() {
	    return _react2['default'].findDOMNode(this);
	  },
	
	  getTarget: function getTarget() {
	    return _react2['default'].findDOMNode(this.props.wrap).firstChild;
	  },
	
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	
	  render: function render() {
	    var props = this.props;
	    var className = (0, _utils.getToolTipClassByPlacement)(props.prefixCls, props.placement);
	    if (props.className) {
	      className += ' ' + props.className;
	    }
	    var style = this.props.style;
	    if (!props.visible) {
	      className += ' ' + props.prefixCls + '-hidden';
	    }
	    var arrowClassName = props.prefixCls + '-arrow';
	    var innerClassname = props.prefixCls + '-inner';
	
	    var placement = props.placement;
	    var align = undefined;
	    if (placement && placement.points) {
	      align = placement;
	    } else {
	      align = placementAlignMap[placement];
	    }
	
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      { component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'data-visible' },
	      _react2['default'].createElement(
	        _rcAlign2['default'],
	        { target: this.getTarget,
	          key: 'popup',
	          monitorWindowResize: true,
	          'data-visible': props.visible,
	          disabled: !props.visible,
	          align: align,
	          onAlign: this.onAlign },
	        _react2['default'].createElement(
	          'div',
	          { className: className,
	            onMouseEnter: props.onMouseEnter,
	            onMouseLeave: props.onMouseLeave,
	            style: style },
	          _react2['default'].createElement('div', { className: arrowClassName }),
	          _react2['default'].createElement(
	            'div',
	            { className: innerClassname },
	            props.children
	          )
	        )
	      )
	    );
	  }
	});
	
	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(5);
	
	var _Popup = __webpack_require__(223);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var Tooltip = _react2['default'].createClass({
	  displayName: 'Tooltip',
	
	  propTypes: {
	    trigger: _react2['default'].PropTypes.any,
	    placement: _react2['default'].PropTypes.any,
	    onVisibleChange: _react2['default'].PropTypes.func,
	    afterVisibleChange: _react2['default'].PropTypes.func,
	    overlay: _react2['default'].PropTypes.node.isRequired,
	    overlayStyle: _react2['default'].PropTypes.object,
	    overlayClassName: _react2['default'].PropTypes.string,
	    wrapStyle: _react2['default'].PropTypes.object,
	    mouseEnterDelay: _react2['default'].PropTypes.number,
	    mouseLeaveDelay: _react2['default'].PropTypes.number,
	    getTooltipContainer: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-tooltip',
	      onVisibleChange: function onVisibleChange() {},
	      afterVisibleChange: function afterVisibleChange() {},
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      overlayStyle: {},
	      wrapStyle: {},
	      placement: 'right',
	      trigger: ['hover']
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var visible = undefined;
	    if ('visible' in props) {
	      visible = props.visible;
	    } else {
	      visible = props.defaultVisible;
	    }
	    return { visible: visible };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate(this.props, this.state);
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('visible' in nextProps) {
	      this.setState({
	        visible: !!nextProps.visible
	      });
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var _this = this;
	
	    var props = this.props;
	    var state = this.state;
	    if (this.popupRendered) {
	      var _ret = (function () {
	        var self = _this;
	        _react2['default'].render(_this.getPopupElement(), _this.getTipContainer(), function renderPopup() {
	          self.popupInstance = this;
	          if (prevState.visible !== state.visible) {
	            props.afterVisibleChange(state.visible);
	          }
	        });
	        if (props.trigger.indexOf('click') !== -1) {
	          if (state.visible) {
	            if (!_this.clickOutsideHandler) {
	              _this.clickOutsideHandler = _rcUtil.Dom.addEventListener(document, 'mousedown', _this.onDocumentClick);
	              _this.touchOutsideHandler = _rcUtil.Dom.addEventListener(document, 'touchstart', _this.onDocumentClick);
	            }
	            return {
	              v: undefined
	            };
	          }
	        }
	        if (_this.clickOutsideHandler) {
	          _this.clickOutsideHandler.remove();
	          _this.touchOutsideHandler.remove();
	          _this.clickOutsideHandler = null;
	          _this.touchOutsideHandler = null;
	        }
	      })();
	
	      if (typeof _ret === 'object') return _ret.v;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var tipContainer = this.tipContainer;
	    if (tipContainer) {
	      _react2['default'].unmountComponentAtNode(tipContainer);
	      if (this.props.getTooltipContainer) {
	        var mountNode = this.props.getTooltipContainer();
	        mountNode.removeChild(tipContainer);
	      } else {
	        document.body.removeChild(tipContainer);
	      }
	      this.tipContainer = null;
	    }
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    this.delaySetVisible(true, this.props.mouseEnterDelay);
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    this.delaySetVisible(false, this.props.mouseLeaveDelay);
	  },
	
	  onFocus: function onFocus() {
	    this.focusTime = Date.now();
	    this.setVisible(true);
	  },
	
	  onMouseDown: function onMouseDown() {
	    this.preClickTime = Date.now();
	  },
	
	  onTouchStart: function onTouchStart() {
	    this.preTouchTime = Date.now();
	  },
	
	  onBlur: function onBlur() {
	    this.setVisible(false);
	  },
	
	  onClick: function onClick(e) {
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = undefined;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    e.preventDefault();
	    if (this.state.visible) {
	      this.setVisible(false);
	    } else {
	      this.setVisible(true);
	    }
	  },
	
	  onDocumentClick: function onDocumentClick(e) {
	    var target = e.target;
	    var root = _react2['default'].findDOMNode(this);
	    var popupNode = this.getPopupDomNode();
	    if (!_rcUtil.Dom.contains(root, target) && !_rcUtil.Dom.contains(popupNode, target)) {
	      this.setVisible(false);
	    }
	  },
	
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    return this.popupInstance.getPopupDomNode();
	  },
	
	  getTipContainer: function getTipContainer() {
	    if (!this.tipContainer) {
	      this.tipContainer = document.createElement('div');
	      if (this.props.getTooltipContainer) {
	        var mountNode = this.props.getTooltipContainer();
	        mountNode.appendChild(this.tipContainer);
	      } else {
	        document.body.appendChild(this.tipContainer);
	      }
	    }
	    return this.tipContainer;
	  },
	
	  getPopupElement: function getPopupElement() {
	    if (!this.popupRendered) {
	      return null;
	    }
	    var props = this.props;
	    var state = this.state;
	    var mouseProps = {};
	    if (props.trigger.indexOf('hover') !== -1) {
	      mouseProps.onMouseEnter = this.onMouseEnter;
	      mouseProps.onMouseLeave = this.onMouseLeave;
	    }
	    return _react2['default'].createElement(
	      _Popup2['default'],
	      _extends({ prefixCls: props.prefixCls,
	        visible: state.visible,
	        className: props.overlayClassName,
	        trigger: props.trigger,
	        placement: props.placement,
	        animation: props.animation
	      }, mouseProps, {
	        wrap: this,
	        style: props.overlayStyle,
	        transitionName: props.transitionName }),
	      props.overlay
	    );
	  },
	
	  render: function render() {
	    if (this.state.visible) {
	      this.popupRendered = true;
	    }
	    var props = this.props;
	    var children = props.children;
	    var child = _react2['default'].Children.only(children);
	    var childProps = child.props || {};
	    var newChildProps = {};
	    var trigger = props.trigger;
	    if (trigger.indexOf('click') !== -1) {
	      newChildProps.onClick = (0, _rcUtil.createChainedFunction)(this.onClick, childProps.onClick);
	      newChildProps.onMouseDown = (0, _rcUtil.createChainedFunction)(this.onMouseDown, childProps.onMouseDown);
	      newChildProps.onTouchStart = (0, _rcUtil.createChainedFunction)(this.onTouchStart, childProps.onTouchStart);
	    }
	    if (trigger.indexOf('hover') !== -1) {
	      newChildProps.onMouseEnter = (0, _rcUtil.createChainedFunction)(this.onMouseEnter, childProps.onMouseEnter);
	      newChildProps.onMouseLeave = (0, _rcUtil.createChainedFunction)(this.onMouseLeave, childProps.onMouseLeave);
	    }
	    if (trigger.indexOf('focus') !== -1) {
	      newChildProps.onFocus = (0, _rcUtil.createChainedFunction)(this.onFocus, childProps.onFocus);
	      newChildProps.onBlur = (0, _rcUtil.createChainedFunction)(this.onBlur, childProps.onBlur);
	    }
	
	    var className = props.prefixCls + '-wrap';
	
	    if (this.state.visible) {
	      className += ' ' + props.prefixCls + '-wrap-open';
	    }
	
	    return _react2['default'].createElement(
	      'span',
	      { className: className, style: props.wrapStyle },
	      _react2['default'].cloneElement(child, newChildProps)
	    );
	  },
	
	  setVisible: function setVisible(visible) {
	    if (this.state.visible !== visible) {
	      if (!('visible' in this.props)) {
	        this.setState({
	          visible: visible
	        });
	      }
	      this.props.onVisibleChange(visible);
	    }
	  },
	
	  delaySetVisible: function delaySetVisible(visible, delayS) {
	    var _this2 = this;
	
	    var delay = delayS * 1000;
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setVisible(visible);
	        _this2.delayTimer = null;
	      }, delay);
	    } else {
	      this.setVisible(visible);
	    }
	  }
	});
	
	exports['default'] = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getToolTipClassByPlacement = getToolTipClassByPlacement;
	
	function getToolTipClassByPlacement(prefixCls, placement) {
	  if (typeof placement === 'string') {
	    return prefixCls + ' ' + prefixCls + '-placement-' + placement;
	  }
	  var offset = placement.offset || [0, 0];
	  var offsetClass = '';
	  if (offset && offset.length) {
	    offsetClass = prefixCls + '-placement-offset-x-' + offset[0] + ' ' + prefixCls + '-placement-offset-y-' + offset[1];
	  }
	  var points = placement.points;
	  return prefixCls + ' ' + offsetClass + ' ' + prefixCls + '-placement-points-' + points[0] + '-' + points[1];
	}

/***/ },
/* 226 */
[464, 228],
/* 227 */
[465, 226],
/* 228 */
[468, 229],
/* 229 */
222,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(140);
	
	var _reactRouter = __webpack_require__(17);
	
	var _utilsBrowser = __webpack_require__(80);
	
	var _configureStore = __webpack_require__(63);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _routes = __webpack_require__(312);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var initialState = window.__INITIAL_STATE__;
	
	// specific module reducers 'less'.
	var store = (0, _configureStore2['default'])('less', initialState);
	
	var rootElement = document.getElementById('react-view');
	
	//https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md#state-mixin
	_reactDom2['default'].render(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(
	    _reactRouter.Router,
	    { history: _utilsBrowser.history },
	    (0, _routes2['default'])()
	  )
	), rootElement);

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(17);
	
	var _componentsNoMatch = __webpack_require__(64);
	
	var _componentsNoMatch2 = _interopRequireDefault(_componentsNoMatch);
	
	var _componentsLayoutsLessLayout = __webpack_require__(319);
	
	var _componentsLayoutsLessLayout2 = _interopRequireDefault(_componentsLayoutsLessLayout);
	
	var _viewsLessDocContent = __webpack_require__(324);
	
	var _viewsLessDocContent2 = _interopRequireDefault(_viewsLessDocContent);
	
	exports['default'] = function () {
	  return _react2['default'].createElement(
	    _reactRouter.Route,
	    { component: _componentsLayoutsLessLayout2['default'] },
	    _react2['default'].createElement(_reactRouter.Route, { path: '/(docs)/less(/:component)', component: _viewsLessDocContent2['default'] }),
	    _react2['default'].createElement(_reactRouter.Redirect, { from: '/', to: '/docs' }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsNoMatch2['default'] })
	  );
	};
	
	module.exports = exports['default'];

/***/ },
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDocumentMeta = __webpack_require__(48);
	
	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);
	
	var _BaseLayout = __webpack_require__(67);
	
	var _BaseLayout2 = _interopRequireDefault(_BaseLayout);
	
	var _headerHeader = __webpack_require__(50);
	
	var _headerHeader2 = _interopRequireDefault(_headerHeader);
	
	var _meta = __webpack_require__(35);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var LessLayout = (function (_Component) {
	  _inherits(LessLayout, _Component);
	
	  function LessLayout() {
	    _classCallCheck(this, LessLayout);
	
	    _get(Object.getPrototypeOf(LessLayout.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(LessLayout, [{
	    key: 'render',
	    value: function render() {
	      var newMeta = Object.assign({}, _meta2['default'], {
	        title: _meta2['default'].title + '| less'
	      });
	      return _react2['default'].createElement(
	        _BaseLayout2['default'],
	        { header: _react2['default'].createElement(_headerHeader2['default'], null), meta: newMeta },
	        this.props.children
	      );
	    }
	  }]);
	
	  return LessLayout;
	})(_react.Component);
	
	exports['default'] = LessLayout;
	module.exports = exports['default'];

/***/ },
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sharedReact = __webpack_require__(172);
	
	var _sharedReact2 = _interopRequireDefault(_sharedReact);
	
	var _UI$Layout = _sharedReact2['default'].Layout;
	var Layout = _UI$Layout.Layout;
	var LayoutSplitter = _UI$Layout.LayoutSplitter;
	
	var LessDocContent = (function (_React$Component) {
	  _inherits(LessDocContent, _React$Component);
	
	  function LessDocContent() {
	    _classCallCheck(this, LessDocContent);
	
	    _get(Object.getPrototypeOf(LessDocContent.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(LessDocContent, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          Layout,
	          { layoutWidth: 220 },
	          'col menus.'
	        ),
	        _react2['default'].createElement(LayoutSplitter, null),
	        _react2['default'].createElement(
	          Layout,
	          { layoutWidth: 'flex' },
	          'col content.'
	        )
	      );
	    }
	  }]);
	
	  return LessDocContent;
	})(_react2['default'].Component);
	
	exports['default'] = LessDocContent;
	module.exports = exports['default'];

/***/ },
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _domAlign = __webpack_require__(__webpack_module_template_argument_0__);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _rcUtil = __webpack_require__(5);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	function isWindow(obj) {
	  /*eslint-disable eqeqeq */
	  return obj != null && obj == obj.window;
	  /*eslint-enable eqeqeq */
	}
	
	function buffer(fn, ms) {
	  var timer;
	  return function () {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}
	
	var Align = (function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    _get(Object.getPrototypeOf(Align.prototype), 'constructor', this).apply(this, arguments);
	    this.handleWindowResize = this.handleWindowResize.bind(this);
	  }
	
	  _createClass(Align, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var props = this.props;
	      // if parent ref not attached .... use document.getElementById
	      if (!props.disabled) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	        if (props.monitorWindowResize) {
	          this.startMonitorWindowResize();
	        }
	      }
	    }
	  }, {
	    key: 'startMonitorWindowResize',
	    value: function startMonitorWindowResize() {
	      if (!this.resizeHandler) {
	        this.resizeHandler = _rcUtil2['default'].Dom.addEventListener(window, 'resize', buffer(this.handleWindowResize, this.props.monitorBufferTime));
	      }
	    }
	  }, {
	    key: 'stopMonitorWindowResize',
	    value: function stopMonitorWindowResize() {
	      if (this.resizeHandler) {
	        this.resizeHandler.remove();
	        this.resizeHandler = null;
	      }
	    }
	  }, {
	    key: 'handleWindowResize',
	    value: function handleWindowResize() {
	      var props = this.props;
	      if (!props.disabled) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stopMonitorWindowResize();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var reAlign = false;
	      var props = this.props;
	      var currentTarget;
	
	      if (!props.disabled) {
	        if (prevProps.disabled || prevProps.align !== props.align) {
	          reAlign = true;
	          currentTarget = props.target();
	        } else {
	          var lastTarget = prevProps.target();
	          currentTarget = props.target();
	          if (isWindow(lastTarget) && isWindow(currentTarget)) {
	            reAlign = false;
	          } else if (lastTarget !== currentTarget) {
	            reAlign = true;
	          }
	        }
	      }
	
	      if (reAlign) {
	        var source = _react2['default'].findDOMNode(this);
	        props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
	      }
	
	      if (props.monitorWindowResize && !props.disabled) {
	        this.startMonitorWindowResize();
	      } else {
	        this.stopMonitorWindowResize();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].Children.only(this.props.children);
	    }
	  }]);
	
	  return Align;
	})(_react2['default'].Component);
	
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	Align.PropTypes = {
	  align: _react2['default'].PropTypes.object.isRequired,
	  target: _react2['default'].PropTypes.func,
	  onAlign: _react2['default'].PropTypes.func,
	  monitorBufferTime: _react2['default'].PropTypes.number,
	  monitorWindowResize: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool
	};
	
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	'use strict';
	
	// export this package's api
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Align = __webpack_require__(__webpack_module_template_argument_0__);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },
/* 466 */,
/* 467 */,
/* 468 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(__webpack_module_template_argument_0__);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = undefined;
	  var y = undefined;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = undefined;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = getOffsetParent(element);
	  var scrollX = undefined;
	  var scrollY = undefined;
	  var winSize = undefined;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && (
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible')) {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = getOffsetParent(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = _utils2['default'].getWindowScrollLeft(win);
	  scrollY = _utils2['default'].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2['default'].viewportWidth(win),
	    height: _utils2['default'].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset) {
	  var xy = undefined;
	  var diff = undefined;
	  var p1 = undefined;
	  var p2 = undefined;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = getAlignOffset(refNodeRegion, points[1]);
	  p2 = getAlignOffset(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + +offset[0],
	    top: xy.top - diff[1] + +offset[1]
	  };
	}
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function getRegion(node) {
	  var offset = undefined;
	  var w = undefined;
	  var h = undefined;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/*
	 * align node
	 * @param {Element} node current dom node
	 * @param {Object} align align config
	 *
	 *    @example
	 *    {
	 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
	 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
	 *      offset: [0, 0]      // 有效值为 [n, m]
	 *    }
	 */
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset;
	  var overflow = align.overflow;
	  offset = offset && [].concat(offset) || [0, 0];
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = getVisibleRectForElement(el);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = getRegion(el);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = getRegion(refNode);
	  // 当前节点将要被放置的位置
	  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(el, { left: newElRegion.left, top: newElRegion.top });
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(el, 'width', el.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(el, 'height', el.height() + newElRegion.height - elRegion.height);
	  }
	
	  return {
	    points: points,
	    offset: offset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = getOffsetParent;
	
	domAlign.__getVisibleRectForElement = getVisibleRectForElement;
	
	exports['default'] = domAlign;
	
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=bundle.js.map?20151001