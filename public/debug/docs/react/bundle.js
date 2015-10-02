webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(212);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
98,
/* 6 */,
/* 7 */
[413, 9, 5],
/* 8 */
24,
/* 9 */
27,
/* 10 */,
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */
161,
/* 15 */
162,
/* 16 */,
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _environment = __webpack_require__(18);
	
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
/* 20 */
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
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
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
	
	var _reactRouter = __webpack_require__(12);
	
	var _RouteLink = __webpack_require__(59);
	
	var _RouteLink2 = _interopRequireDefault(_RouteLink);
	
	var _ThemeSelector = __webpack_require__(60);
	
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
/* 31 */
/***/ function(module, exports) {

	// default meta.
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var meta = {
	  title: 'the docs of react ui components',
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
/* 32 */
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
/* 33 */
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
	
	var _utilsEvents = __webpack_require__(19);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _classnames = __webpack_require__(11);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Layout = __webpack_require__(70);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _LayoutSplitter = __webpack_require__(33);
	
	var _LayoutSplitter2 = _interopRequireDefault(_LayoutSplitter);
	
	if (true) {
	  __webpack_require__(75);
	}
	exports['default'] = {
	  Layout: _Layout2['default'],
	  LayoutSplitter: _LayoutSplitter2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wurl = __webpack_require__(120);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _sharedReactUtilsLang = __webpack_require__(17);
	
	var _sharedReactUtilsLang2 = _interopRequireDefault(_sharedReactUtilsLang);
	
	var _sharedReactUtilsPath = __webpack_require__(71);
	
	var _sharedReactUtilsPath2 = _interopRequireDefault(_sharedReactUtilsPath);
	
	var _sharedReactUtilsString = __webpack_require__(72);
	
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
/* 36 */,
/* 37 */
331,
/* 38 */
[410, 8, 15, 14, 39],
/* 39 */
[412, 9, 8, 85, 78, 5, 7],
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ExecutionEnvironment = __webpack_require__(15);
	
	var _DOMUtils = __webpack_require__(14);
	
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
	
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);
	
	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }
	
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });
	
	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }
	
	    return _extends({}, history, {
	      registerBeforeUnloadHook: registerBeforeUnloadHook,
	      unregisterBeforeUnloadHook: unregisterBeforeUnloadHook
	    });
	  };
	}
	
	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];

/***/ },
/* 41 */
[415, 88],
/* 42 */
164,
/* 43 */,
/* 44 */
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
	
	var _reactDomServer = __webpack_require__(96);
	
	var _exenv = __webpack_require__(92);
	
	var _reactSideEffect = __webpack_require__(93);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _utils = __webpack_require__(91);
	
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
/* 45 */,
/* 46 */,
/* 47 */
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
	
	var _rcMenu = __webpack_require__(49);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var _utilsPlatform = __webpack_require__(20);
	
	var _utilsPlatform2 = _interopRequireDefault(_utilsPlatform);
	
	var msie = _utilsPlatform2['default'].msie;
	var version = _utilsPlatform2['default'].version;
	
	var disableVelocityAnimation = msie && parseInt(version) < 9;
	
	var animation = undefined;
	if (true) {
	  __webpack_require__(76);
	  // ie9+
	  if (!disableVelocityAnimation) {
	    animation = __webpack_require__(69);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _environment = __webpack_require__(18);
	
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
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _platform = __webpack_require__(20);
	
	var _platform2 = _interopRequireDefault(_platform);
	
	var _environment = __webpack_require__(18);
	
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
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(10);
	
	var _reduxLogger = __webpack_require__(118);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxThunk = __webpack_require__(103);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxSimplePromise = __webpack_require__(25);
	
	var _reduxSimplePromise2 = _interopRequireDefault(_reduxSimplePromise);
	
	var _reducers = __webpack_require__(64);
	
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(12);
	
	var _utilsURI = __webpack_require__(35);
	
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
	
	    return this.props.refresh === true ? _react2['default'].createElement(
	      'li',
	      { className: className },
	      _react2['default'].createElement(
	        'a',
	        { href: this.props.to },
	        this.props.children
	      )
	    ) : _react2['default'].createElement(
	      'li',
	      { className: className },
	      _react2['default'].createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: null }))
	    );
	  }
	});
	
	module.exports = RouteLink;

/***/ },
/* 60 */
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
	
	var _sharedReactComponentsMenu = __webpack_require__(47);
	
	var _sharedReactComponentsMenu2 = _interopRequireDefault(_sharedReactComponentsMenu);
	
	var _utilsURI = __webpack_require__(35);
	
	var _utilsURI2 = _interopRequireDefault(_utilsURI);
	
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
	          link = '/shared/less/public/themes/glodon-yun/common.css';
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
	          _sharedReactComponentsMenu.SubMenu,
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
/* 61 */
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
	
	var _reactDocumentMeta = __webpack_require__(44);
	
	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);
	
	var _sharedReactComponentsLayout = __webpack_require__(34);
	
	var _headerHeader = __webpack_require__(30);
	
	var _headerHeader2 = _interopRequireDefault(_headerHeader);
	
	var _meta = __webpack_require__(31);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	// import doc styles for all sub modules.
	if (true) {
	  __webpack_require__(74);
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
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'wrapper' },
	        _react2['default'].createElement(_reactDocumentMeta2['default'], this.props.meta || _meta2['default']),
	        _react2['default'].createElement(
	          _sharedReactComponentsLayout.Layout,
	          { fill: 'window', className: 'doc-page' },
	          _react2['default'].createElement(
	            _sharedReactComponentsLayout.Layout,
	            { layoutHeight: 50, style: { overflow: 'initial' } },
	            Header
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsLayout.Layout,
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(10);
	
	var _homeDoc = __webpack_require__(62);
	
	var homeDocReducers = _interopRequireWildcard(_homeDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, homeDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = findReducers;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _redux = __webpack_require__(10);
	
	var _home = __webpack_require__(63);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _less = __webpack_require__(65);
	
	var _less2 = _interopRequireDefault(_less);
	
	var _react = __webpack_require__(67);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	    default:
	      throw new Error('can not find \'' + moduleName + '\' final reducers');
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(10);
	
	var _lessDoc = __webpack_require__(66);
	
	var lessDocReducers = _interopRequireWildcard(_lessDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, lessDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.docDetails = docDetails;
	exports.docSearchResult = docSearchResult;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _constantsDocActionTypes = __webpack_require__(32);
	
	var DocActionTypes = _interopRequireWildcard(_constantsDocActionTypes);
	
	var _reduxSimplePromise = __webpack_require__(25);
	
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _redux = __webpack_require__(10);
	
	var _reactDoc = __webpack_require__(68);
	
	var reactDocReducers = _interopRequireWildcard(_reactDoc);
	
	// The final reducers for workspace list.
	var finalReducers = (0, _redux.combineReducers)(_extends({}, reactDocReducers));
	
	exports['default'] = finalReducers;
	module.exports = exports['default'];

/***/ },
/* 68 */
66,
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	if (true) {
	  // for node environment, we should load velocity.
	  var velocity = __webpack_require__(119);
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
/* 70 */
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
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _LayoutSplitter = __webpack_require__(33);
	
	var _LayoutSplitter2 = _interopRequireDefault(_LayoutSplitter);
	
	var _utilsDom = __webpack_require__(48);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsStyle = __webpack_require__(54);
	
	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);
	
	var _utilsEvents = __webpack_require__(19);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _utilsLang = __webpack_require__(17);
	
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
/* 71 */
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lang = __webpack_require__(17);
	
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _history = __webpack_require__(84);
	
	var _sharedReactUtilsPlatform = __webpack_require__(20);
	
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
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */
74,
/* 76 */
74,
/* 77 */,
/* 78 */
330,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _invariant = __webpack_require__(8);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Actions = __webpack_require__(5);
	
	var _ExecutionEnvironment = __webpack_require__(15);
	
	var _DOMUtils = __webpack_require__(14);
	
	var _DOMStateStorage = __webpack_require__(37);
	
	var _createDOMHistory = __webpack_require__(38);
	
	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);
	
	var _createLocation = __webpack_require__(7);
	
	var _createLocation2 = _interopRequireDefault(_createLocation);
	
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
	      window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }
	
	    return _createLocation2['default'](path, state, undefined, key);
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
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;
	
	    if (action === _Actions.POP) return; // Nothing to do.
	
	    _DOMStateStorage.saveState(key, state);
	
	    var path = pathname + search;
	    var historyState = {
	      key: key
	    };
	
	    if (action === _Actions.PUSH) {
	      if (isSupported) {
	        window.history.pushState(historyState, null, path);
	      } else {
	        window.location.href = path; // Use page reload to preserve the URL.
	      }
	    } else {
	        // REPLACE
	        if (isSupported) {
	          window.history.replaceState(historyState, null, path);
	        } else {
	          window.location.replace(path); // Use page reload to preserve the URL.
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
	
	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);
	
	    var unlisten = history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }
	
	  return _extends({}, history, {
	    listen: listen
	  });
	}
	
	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 80 */
[411, 9, 8, 5, 15, 14, 37, 38, 7],
/* 81 */
[414, 8, 5, 7, 39],
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(9);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _useBeforeUnload = __webpack_require__(40);
	
	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);
	
	function enableBeforeUnload() {
	  _warning2['default'](false, 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	
	  return _useBeforeUnload2['default'].apply(this, arguments);
	}
	
	exports['default'] = enableBeforeUnload;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _warning = __webpack_require__(9);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _useQueries = __webpack_require__(41);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	function enableQueries() {
	  _warning2['default'](false, 'enableQueries is deprecated, use useQueries instead');
	
	  return _useQueries2['default'].apply(this, arguments);
	}
	
	exports['default'] = enableQueries;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createBrowserHistory = __webpack_require__(79);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	exports.createHistory = _createBrowserHistory2['default'];
	
	var _createHashHistory2 = __webpack_require__(80);
	
	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);
	
	exports.createHashHistory = _createHashHistory3['default'];
	
	var _createMemoryHistory2 = __webpack_require__(81);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	exports.createMemoryHistory = _createMemoryHistory3['default'];
	
	var _createLocation2 = __webpack_require__(7);
	
	var _createLocation3 = _interopRequireDefault(_createLocation2);
	
	exports.createLocation = _createLocation3['default'];
	
	var _useBeforeUnload2 = __webpack_require__(40);
	
	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);
	
	exports.useBeforeUnload = _useBeforeUnload3['default'];
	
	var _useQueries2 = __webpack_require__(41);
	
	var _useQueries3 = _interopRequireDefault(_useQueries2);
	
	exports.useQueries = _useQueries3['default'];
	
	var _Actions2 = __webpack_require__(5);
	
	var _Actions3 = _interopRequireDefault(_Actions2);
	
	exports.Actions = _Actions3['default'];
	
	// deprecated
	
	var _enableBeforeUnload2 = __webpack_require__(82);
	
	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);
	
	exports.enableBeforeUnload = _enableBeforeUnload3['default'];
	
	var _enableQueries2 = __webpack_require__(83);
	
	var _enableQueries3 = _interopRequireDefault(_enableQueries2);
	
	exports.enableQueries = _enableQueries3['default'];

/***/ },
/* 85 */
[416, 87, 86],
/* 86 */
337,
/* 87 */
338,
/* 88 */
[417, 90, 89],
/* 89 */
[418, 42],
/* 90 */
[419, 42],
/* 91 */
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
/* 92 */
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fbjsLibExecutionEnvironment = __webpack_require__(94);
	
	var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);
	
	var _fbjsLibShallowEqual = __webpack_require__(95);
	
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
/* 94 */
6,
/* 95 */
122,
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(111);


/***/ },
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
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
/* 104 */
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
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _constants = __webpack_require__(243);
	
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
	
	    var amSize = this.props.amSize;
	    var amStyle = this.props.amStyle;
	    var theme = this.props.theme;
	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }
	
	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }
	
	    // add theme className for widgets
	    if (theme) {
	      classNames[prefix + theme] = true;
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
/* 122 */,
/* 123 */,
/* 124 */
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
/* 125 */
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
	
	var _rcMenu = __webpack_require__(49);
	
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
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _scrollArea = __webpack_require__(236);
	
	var _scrollArea2 = _interopRequireDefault(_scrollArea);
	
	if (true) {
	  __webpack_require__(255);
	}
	exports['default'] = _scrollArea2['default'];
	module.exports = exports['default'];

/***/ },
/* 150 */
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
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAnimate = __webpack_require__(106);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	if (true) {
	  __webpack_require__(258);
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
/* 151 */,
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
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(108);
	
	var _reactRouter = __webpack_require__(12);
	
	var _utilsBrowser = __webpack_require__(73);
	
	var _configureStore = __webpack_require__(57);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	var _routes = __webpack_require__(213);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var initialState = window.__INITIAL_STATE__;
	
	// specific module reducers 'react'.
	var store = (0, _configureStore2['default'])('react', initialState);
	
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
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(12);
	
	var _componentsNoMatch = __webpack_require__(58);
	
	var _componentsNoMatch2 = _interopRequireDefault(_componentsNoMatch);
	
	var _componentsLayoutsReactLayout = __webpack_require__(217);
	
	var _componentsLayoutsReactLayout2 = _interopRequireDefault(_componentsLayoutsReactLayout);
	
	var _viewsReactDocContent = __webpack_require__(220);
	
	var _viewsReactDocContent2 = _interopRequireDefault(_viewsReactDocContent);
	
	exports['default'] = function () {
	  return _react2['default'].createElement(
	    _reactRouter.Route,
	    { component: _componentsLayoutsReactLayout2['default'] },
	    _react2['default'].createElement(_reactRouter.Route, { path: '/(docs)/react(/:group)(/:component)(/:target)', component: _viewsReactDocContent2['default'] }),
	    _react2['default'].createElement(_reactRouter.Redirect, { from: '/', to: '/docs' }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsNoMatch2['default'] })
	  );
	};
	
	module.exports = exports['default'];

/***/ },
/* 214 */
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
	
	var _reactRouter = __webpack_require__(12);
	
	var _sharedReactComponentsMenu = __webpack_require__(47);
	
	var _sharedReactComponentsMenu2 = _interopRequireDefault(_sharedReactComponentsMenu);
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	// const MenuItem = Menu.Item;
	
	var DockMenu = (function (_Component) {
	  _inherits(DockMenu, _Component);
	
	  function DockMenu() {
	    var _this = this;
	
	    _classCallCheck(this, DockMenu);
	
	    _get(Object.getPrototypeOf(DockMenu.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      current: '',
	      openKeys: []
	    };
	
	    this.handleClick = function (e) {
	      console.log('click ', e);
	      _this.setState({
	        current: e.key
	      });
	    };
	  }
	
	  _createClass(DockMenu, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      console.log('dockMenu....update.');
	    }
	  }, {
	    key: 'getMenuTitle',
	    value: function getMenuTitle(title, subTitle, iconName) {
	
	      var iconClasses = {};
	
	      if (iconName) {
	        iconClasses["glyph-icon"] = true;
	        iconClasses['glyph-' + iconName] = true;
	      }
	
	      return _react2['default'].createElement(
	        'span',
	        null,
	        iconName ? _react2['default'].createElement('i', { className: (0, _classnames2['default'])(iconClasses) }) : null,
	        _react2['default'].createElement(
	          'span',
	          null,
	          title
	        ),
	        _react2['default'].createElement(
	          'span',
	          { className: 'menu-title-en' },
	          subTitle
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var group = _props.group;
	      var component = _props.component;
	
	      var openKeys = group ? [group] : this.state.openKeys;
	      var selectedKeys = [this.state.current || component];
	
	      return _react2['default'].createElement(
	        _sharedReactComponentsMenu2['default'],
	        { onClick: this.handleClick, style: { width: '100%' }, defaultOpenKeys: openKeys, className: 'nav-left-dock ', selectedKeys: selectedKeys, mode: 'inline' },
	        _react2['default'].createElement(
	          _sharedReactComponentsMenu.SubMenu,
	          { key: 'layout', title: this.getMenuTitle("布局相关", "Layout") },
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'flexlayout' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout', activeClassName: 'active' },
	              this.getMenuTitle("弹性布局素", "FlexLayout")
	            )
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'scrollarea' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/scrollarea', activeClassName: 'active' },
	              this.getMenuTitle("滚动条", "ScrollArea")
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          _sharedReactComponentsMenu.SubMenu,
	          { key: 'elements', title: this.getMenuTitle("HTML元素", "Elements") },
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'button' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/elements/button', activeClassName: 'active' },
	              this.getMenuTitle('按钮', 'Button')
	            )
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'draggable' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/elements/draggable', activeClassName: 'active' },
	              this.getMenuTitle('拖动部件', 'Draggable')
	            )
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'message' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/elements/message', activeClassName: 'active' },
	              this.getMenuTitle('全局消息', 'Message')
	            )
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'menu' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/elements/menu', activeClassName: 'active' },
	              this.getMenuTitle('导航菜单', 'Menu')
	            )
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'tag' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/elements/tag', activeClassName: 'active' },
	              this.getMenuTitle('标签', 'Tag')
	            )
	          ),
	          _react2['default'].createElement(
	            _sharedReactComponentsMenu2['default'].Item,
	            { key: 'select' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/elements/select', activeClassName: 'active' },
	              this.getMenuTitle('选择器', 'Select')
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      component: _react2['default'].PropTypes.string,
	      group: _react2['default'].PropTypes.string
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'flexlayout',
	      group: 'layout'
	    },
	    enumerable: true
	  }]);
	
	  return DockMenu;
	})(_react.Component);
	
	exports['default'] = DockMenu;
	module.exports = exports['default'];

/***/ },
/* 215 */,
/* 216 */,
/* 217 */
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
	
	var _reactDocumentMeta = __webpack_require__(44);
	
	var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);
	
	var _BaseLayout = __webpack_require__(61);
	
	var _BaseLayout2 = _interopRequireDefault(_BaseLayout);
	
	var _headerHeader = __webpack_require__(30);
	
	var _headerHeader2 = _interopRequireDefault(_headerHeader);
	
	var _meta = __webpack_require__(31);
	
	var _meta2 = _interopRequireDefault(_meta);
	
	var ReactLayout = (function (_Component) {
	  _inherits(ReactLayout, _Component);
	
	  function ReactLayout() {
	    _classCallCheck(this, ReactLayout);
	
	    _get(Object.getPrototypeOf(ReactLayout.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ReactLayout, [{
	    key: 'render',
	    value: function render() {
	      var newMeta = Object.assign({}, _meta2['default'], {
	        title: _meta2['default'].title + '| react'
	      });
	      return _react2['default'].createElement(
	        _BaseLayout2['default'],
	        { header: _react2['default'].createElement(_headerHeader2['default'], null), meta: newMeta },
	        this.props.children
	      );
	    }
	  }]);
	
	  return ReactLayout;
	})(_react.Component);
	
	exports['default'] = ReactLayout;
	module.exports = exports['default'];

/***/ },
/* 218 */,
/* 219 */,
/* 220 */
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
	
	var _sharedReactComponentsScrollarea = __webpack_require__(149);
	
	var _sharedReactComponentsScrollarea2 = _interopRequireDefault(_sharedReactComponentsScrollarea);
	
	var _sharedReactComponentsLayout = __webpack_require__(34);
	
	var _componentsDocMenu = __webpack_require__(214);
	
	var _componentsDocMenu2 = _interopRequireDefault(_componentsDocMenu);
	
	var _sharedReactComponentsDemo = __webpack_require__(225);
	
	var _sharedReactComponentsDemo2 = _interopRequireDefault(_sharedReactComponentsDemo);
	
	var DraggableDemo = _sharedReactComponentsDemo2['default'].DraggableDemo;
	var ButtonDemo = _sharedReactComponentsDemo2['default'].ButtonDemo;
	var LayoutDemo = _sharedReactComponentsDemo2['default'].LayoutDemo;
	var ScrollAreaDemo = _sharedReactComponentsDemo2['default'].ScrollAreaDemo;
	var MenuDemo = _sharedReactComponentsDemo2['default'].MenuDemo;
	var MessageDemo = _sharedReactComponentsDemo2['default'].MessageDemo;
	var TagDemo = _sharedReactComponentsDemo2['default'].TagDemo;
	var SelectDemo = _sharedReactComponentsDemo2['default'].SelectDemo;
	
	var ReactDocContent = (function (_Component) {
	  _inherits(ReactDocContent, _Component);
	
	  function ReactDocContent() {
	    _classCallCheck(this, ReactDocContent);
	
	    _get(Object.getPrototypeOf(ReactDocContent.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      layoutWidth: 245,
	      layoutHeight: 400,
	      layoutWidthFlex: 0,
	      layoutHeightFlex: 400
	    };
	  }
	
	  _createClass(ReactDocContent, [{
	    key: 'getComponents',
	    value: function getComponents(child) {
	      // here cause of we used ScrollArea nested into Layout component,
	      // we should not speficied the width and height for `ScrollArea`.
	      return _react2['default'].createElement(
	        _sharedReactComponentsScrollarea2['default'],
	        { speed: 0.8, ref: 'flexContainer', amSize: 'sm', contentClassName: 'content' },
	        child
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var params = this.props.params;
	      var group = params.group;
	      var component = params.component;
	      var target = params.target;
	
	      console.log('router params', params);
	      var example = undefined;
	      switch (component) {
	        case 'flexlayout':
	          example = _react2['default'].createElement(LayoutDemo, { target: target });
	          break;
	        case 'scrollarea':
	          example = _react2['default'].createElement(ScrollAreaDemo, null);
	          break;
	        case 'button':
	          example = this.getComponents(_react2['default'].createElement(ButtonDemo, null));
	          break;
	
	        case 'draggable':
	          example = this.getComponents(_react2['default'].createElement(DraggableDemo, null));
	          break;
	
	        case 'menu':
	          example = this.getComponents(_react2['default'].createElement(MenuDemo, null));
	          break;
	
	        case 'message':
	          example = this.getComponents(_react2['default'].createElement(MessageDemo, null));
	          break;
	
	        case 'tag':
	          example = this.getComponents(_react2['default'].createElement(TagDemo, null));
	          break;
	        case 'select':
	          example = this.getComponents(_react2['default'].createElement(SelectDemo, null));
	          break;
	      }
	      return _react2['default'].createElement(
	        _sharedReactComponentsLayout.Layout,
	        { className: 'row', fill: 'container' },
	        _react2['default'].createElement(
	          _sharedReactComponentsLayout.Layout,
	          { layoutWidth: this.state.layoutWidth },
	          _react2['default'].createElement(
	            _sharedReactComponentsScrollarea2['default'],
	            { ref: 'leftContainer', speed: 0.8, amSize: 'sm', contentClassName: 'content' },
	            _react2['default'].createElement(_componentsDocMenu2['default'], { group: group, component: component })
	          )
	        ),
	        _react2['default'].createElement(_sharedReactComponentsLayout.LayoutSplitter, { layoutWidth: 11 }),
	        _react2['default'].createElement(
	          _sharedReactComponentsLayout.Layout,
	          { layoutWidth: 'flex' },
	          example
	        )
	      );
	    }
	  }]);
	
	  return ReactDocContent;
	})(_react.Component);
	
	exports['default'] = ReactDocContent;
	module.exports = exports['default'];

/***/ },
/* 221 */
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
	
	var _utilsMixin = __webpack_require__(104);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _objectOmit = __webpack_require__(273);
	
	var _objectOmit2 = _interopRequireDefault(_objectOmit);
	
	var _mixinsClassNameMixin = __webpack_require__(121);
	
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
	      amStyle: 'default'
	    },
	    enumerable: true
	  }]);
	
	  return Button;
	})((0, _utilsMixin2['default'])(_mixinsClassNameMixin2['default']));
	
	exports['default'] = Button;
	module.exports = exports['default'];

/***/ },
/* 222 */
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
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsMixin = __webpack_require__(104);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsClassNameMixin = __webpack_require__(121);
	
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
/* 223 */
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
	
	var _index = __webpack_require__(224);
	
	var _icon = __webpack_require__(230);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var ButtonDemo = (function (_Component) {
	  _inherits(ButtonDemo, _Component);
	
	  function ButtonDemo() {
	    _classCallCheck(this, ButtonDemo);
	
	    _get(Object.getPrototypeOf(ButtonDemo.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ButtonDemo, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      console.log('update...');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'doc-content' },
	        _react2['default'].createElement(
	          'h1',
	          null,
	          'Button 系列'
	        ),
	        _react2['default'].createElement('hr', null),
	        _react2['default'].createElement(
	          'p',
	          null,
	          '按钮系列组件包括 Button、ButtonGroup、ButtonGroup 等。'
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'Button'
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '默认样式'
	        ),
	        _react2['default'].createElement(
	          _index.ButtonToolbar,
	          null,
	          _react2['default'].createElement(
	            _index.Button,
	            null,
	            'Default'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'primary' },
	            'Primary'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'secondary' },
	            'Secondary'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'success' },
	            'Success'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'warning' },
	            'Warning'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'danger' },
	            'Danger'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'link' },
	            'Link'
	          )
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '按钮SIZE'
	        ),
	        _react2['default'].createElement(
	          _index.ButtonToolbar,
	          null,
	          _react2['default'].createElement(
	            _index.Button,
	            { amSize: 'xxs' },
	            _react2['default'].createElement(_icon2['default'], { icon: 'information' }),
	            ' 默认(12px-xxs)'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'primary', amSize: 'xs' },
	            _react2['default'].createElement(_icon2['default'], { icon: 'radio-checked' }),
	            ' 主要(12px-xs)'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'secondary', amSize: 'sm' },
	            _react2['default'].createElement(_icon2['default'], { icon: 'bin' }),
	            ' Secondary(14px-sm)'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'success' },
	            _react2['default'].createElement(_icon2['default'], { icon: 'spinner6', spin: true }),
	            ' Success（16px)'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'warning', amSize: 'lg' },
	            _react2['default'].createElement(_icon2['default'], { icon: 'success' }),
	            ' Warning (18px-lg)'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'danger', amSize: 'xl' },
	            _react2['default'].createElement(_icon2['default'], { icon: 'coin-dollar' }),
	            ' Danger (20px-xl)'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'link' },
	            'Link'
	          )
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '圆角'
	        ),
	        _react2['default'].createElement(
	          _index.ButtonToolbar,
	          null,
	          _react2['default'].createElement(
	            _index.Button,
	            { radius: true },
	            'Default'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'primary', radius: true },
	            'Primary'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'secondary', radius: true },
	            'Secondary'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'success', radius: true },
	            'Success'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'warning', radius: true },
	            'Warning'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'danger', radius: true },
	            'Danger'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'link', radius: true },
	            'Link'
	          )
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '椭圆'
	        ),
	        _react2['default'].createElement(
	          _index.ButtonToolbar,
	          null,
	          _react2['default'].createElement(
	            _index.Button,
	            { round: true },
	            'Default'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'primary', round: true },
	            'Primary'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'secondary', round: true },
	            'Secondary'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'success', round: true },
	            'Success'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'warning', round: true },
	            'Warning'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'danger', round: true },
	            'Danger'
	          ),
	          _react2['default'].createElement(
	            _index.Button,
	            { amStyle: 'link', round: true },
	            'Link'
	          )
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'Button Group'
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '基本按钮组'
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '基本按钮组1'
	        ),
	        _react2['default'].createElement(
	          'h3',
	          null,
	          '基本按钮组2'
	        )
	      );
	    }
	  }]);
	
	  return ButtonDemo;
	})(_react.Component);
	
	exports['default'] = ButtonDemo;
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Button = __webpack_require__(221);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _ButtonToolbar = __webpack_require__(222);
	
	var _ButtonToolbar2 = _interopRequireDefault(_ButtonToolbar);
	
	exports['default'] = {
	  Button: _Button2['default'],
	  ButtonToolbar: _ButtonToolbar2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _draggableDemo = __webpack_require__(226);
	
	var _draggableDemo2 = _interopRequireDefault(_draggableDemo);
	
	var _buttonDemo = __webpack_require__(223);
	
	var _buttonDemo2 = _interopRequireDefault(_buttonDemo);
	
	var _layoutDemo = __webpack_require__(231);
	
	var _layoutDemo2 = _interopRequireDefault(_layoutDemo);
	
	var _scrollareaDemo = __webpack_require__(235);
	
	var _scrollareaDemo2 = _interopRequireDefault(_scrollareaDemo);
	
	var _menuDemo = __webpack_require__(232);
	
	var _menuDemo2 = _interopRequireDefault(_menuDemo);
	
	var _messageDemo = __webpack_require__(233);
	
	var _messageDemo2 = _interopRequireDefault(_messageDemo);
	
	var _tagsDemo = __webpack_require__(242);
	
	var _tagsDemo2 = _interopRequireDefault(_tagsDemo);
	
	var _selectDemo = __webpack_require__(238);
	
	var _selectDemo2 = _interopRequireDefault(_selectDemo);
	
	exports['default'] = {
	  DraggableDemo: _draggableDemo2['default'],
	  ButtonDemo: _buttonDemo2['default'],
	  LayoutDemo: _layoutDemo2['default'],
	  ScrollAreaDemo: _scrollareaDemo2['default'],
	  MenuDemo: _menuDemo2['default'],
	  MessageDemo: _messageDemo2['default'],
	  TagDemo: _tagsDemo2['default'],
	  SelectDemo: _selectDemo2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 226 */
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
	
	var _index = __webpack_require__(229);
	
	var _index2 = _interopRequireDefault(_index);
	
	var DraggableDemo = (function (_Component) {
	  _inherits(DraggableDemo, _Component);
	
	  function DraggableDemo() {
	    var _this = this;
	
	    _classCallCheck(this, DraggableDemo);
	
	    _get(Object.getPrototypeOf(DraggableDemo.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      position: {
	        top: 0,
	        left: 0
	      },
	      activeDrags: 0
	    };
	
	    this.handleDrag = function (e, ui) {
	      _this.setState({
	        position: ui.position
	      });
	    };
	
	    this.onStart = function () {
	      _this.setState({
	        activeDrags: ++_this.state.activeDrags
	      });
	    };
	
	    this.onStop = function () {
	      _this.setState({
	        activeDrags: --_this.state.activeDrags
	      });
	    };
	  }
	
	  _createClass(DraggableDemo, [{
	    key: 'render',
	    value: function render() {
	      var drags = {
	        onStart: this.onStart,
	        onStop: this.onStop
	      };
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'demo-draggable' },
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Active Drags: ',
	          this.state.activeDrags
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ zIndex: 100 }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            'I can be dragged anywhere'
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ axis: 'x' }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box cursor-x' },
	            'I can only be dragged horizonally'
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ axis: 'y' }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box cursor-y' },
	            'I can only be dragged vertically'
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ onDrag: this.handleDrag }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            _react2['default'].createElement(
	              'div',
	              null,
	              'I track my position'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              'top: ',
	              this.state.position.top.toFixed(0),
	              ', left: ',
	              this.state.position.left.toFixed(0)
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ handle: 'strong' }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box no-cursor' },
	            _react2['default'].createElement(
	              'strong',
	              { className: 'cursor' },
	              'Drag here'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              'You must click my handle to drag me'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ cancel: 'strong' }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            _react2['default'].createElement(
	              'strong',
	              { className: 'no-cursor' },
	              'Cant drag here'
	            ),
	            _react2['default'].createElement(
	              'div',
	              null,
	              'Dragging here works'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ grid: [25, 25] }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            'I snap to a 25 x 25 grid'
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ grid: [50, 50] }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            'I snap to a 50 x 50 grid'
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ bounds: { top: -100, left: -100, right: 100, bottom: 100 }, zIndex: 5 }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            'I can only be moved 100px in any direction.'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'box', style: { height: '500px', width: '500px', position: 'relative' } },
	          _react2['default'].createElement(
	            _index2['default'],
	            _extends({ bounds: 'parent' }, drags),
	            _react2['default'].createElement(
	              'div',
	              { className: 'box' },
	              'I can only be moved within my offsetParent.',
	              _react2['default'].createElement('br', null),
	              _react2['default'].createElement('br', null),
	              'Both parent padding and child margin work properly.'
	            )
	          ),
	          _react2['default'].createElement(
	            _index2['default'],
	            _extends({ bounds: 'parent' }, drags),
	            _react2['default'].createElement(
	              'div',
	              { className: 'box' },
	              'I also can only be moved within my offsetParent.',
	              _react2['default'].createElement('br', null),
	              _react2['default'].createElement('br', null),
	              'Both parent padding and child margin work properly.'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          null,
	          _react2['default'].createElement(
	            'div',
	            _extends({ className: 'box', style: { position: 'absolute', top: '315px', right: '60px' } }, drags),
	            'I already have an absolute position.'
	          )
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          _extends({ start: { x: 25, y: 25 } }, drags),
	          _react2['default'].createElement(
	            'div',
	            { className: 'box' },
	            "I have a start position of {x: 25, y: 25}, so I'm slightly offset."
	          )
	        )
	      );
	    }
	  }]);
	
	  return DraggableDemo;
	})(_react.Component);
	
	exports['default'] = DraggableDemo;
	module.exports = exports['default'];

/***/ },
/* 227 */
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
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _helper = __webpack_require__(228);
	
	var _helper2 = _interopRequireDefault(_helper);
	
	var _utilsDom = __webpack_require__(48);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsStyle = __webpack_require__(54);
	
	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);
	
	var _utilsEvents = __webpack_require__(19);
	
	var _utilsEvents2 = _interopRequireDefault(_utilsEvents);
	
	var _utilsLang = __webpack_require__(17);
	
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
/* 228 */
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
	
	var _fbjsLibShallowEqual = __webpack_require__(122);
	
	var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);
	
	var _reactDom = __webpack_require__(21);
	
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
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _draggable = __webpack_require__(227);
	
	var _draggable2 = _interopRequireDefault(_draggable);
	
	if (true) {
	  __webpack_require__(253);
	}
	
	exports['default'] = _draggable2['default'];
	module.exports = exports['default'];

/***/ },
/* 230 */
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
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsMixin = __webpack_require__(104);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsClassNameMixin = __webpack_require__(121);
	
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
	      props.button && props.amStyle && (classes[setClassNamespace(props.amStyle)] = true);
	
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
	      amStyle: _react2['default'].PropTypes.string,
	      amSize: _react2['default'].PropTypes.string,
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
/* 231 */
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
	
	var _indexJs = __webpack_require__(34);
	
	var _reactRouter = __webpack_require__(12);
	
	var Horizontal = (function (_React$Component) {
	  _inherits(Horizontal, _React$Component);
	
	  function Horizontal(props) {
	    _classCallCheck(this, Horizontal);
	
	    _get(Object.getPrototypeOf(Horizontal.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Horizontal, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 100 },
	          'Column1'
	        ),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 'flex' },
	          'Column2'
	        )
	      );
	    }
	  }]);
	
	  return Horizontal;
	})(_react2['default'].Component);
	
	var FixedRightPane = (function (_React$Component2) {
	  _inherits(FixedRightPane, _React$Component2);
	
	  function FixedRightPane(props) {
	    _classCallCheck(this, FixedRightPane);
	
	    _get(Object.getPrototypeOf(FixedRightPane.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(FixedRightPane, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 'flex' },
	          'Column1'
	        ),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 100 },
	          'Column2'
	        )
	      );
	    }
	  }]);
	
	  return FixedRightPane;
	})(_react2['default'].Component);
	
	var ThreeColumn = (function (_React$Component3) {
	  _inherits(ThreeColumn, _React$Component3);
	
	  function ThreeColumn(props) {
	    _classCallCheck(this, ThreeColumn);
	
	    _get(Object.getPrototypeOf(ThreeColumn.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(ThreeColumn, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 100 },
	          'Column1'
	        ),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 'flex' },
	          'Column2'
	        ),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 100 },
	          'Column3'
	        )
	      );
	    }
	  }]);
	
	  return ThreeColumn;
	})(_react2['default'].Component);
	
	var HorizontalResizer = (function (_React$Component4) {
	  _inherits(HorizontalResizer, _React$Component4);
	
	  function HorizontalResizer(props) {
	    _classCallCheck(this, HorizontalResizer);
	
	    _get(Object.getPrototypeOf(HorizontalResizer.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(HorizontalResizer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 100 },
	          'Column1'
	        ),
	        _react2['default'].createElement(_indexJs.LayoutSplitter, null),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 'flex' },
	          'Column2'
	        )
	      );
	    }
	  }]);
	
	  return HorizontalResizer;
	})(_react2['default'].Component);
	
	var BothFixedHorizontalResizer = (function (_React$Component5) {
	  _inherits(BothFixedHorizontalResizer, _React$Component5);
	
	  function BothFixedHorizontalResizer(props) {
	    _classCallCheck(this, BothFixedHorizontalResizer);
	
	    _get(Object.getPrototypeOf(BothFixedHorizontalResizer.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(BothFixedHorizontalResizer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: { border: '1px solid #000', height: 200, width: 313 } },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { fill: 'container' },
	          _react2['default'].createElement(
	            _indexJs.Layout,
	            { layoutWidth: 100 },
	            'Column1'
	          ),
	          _react2['default'].createElement(_indexJs.LayoutSplitter, null),
	          _react2['default'].createElement(
	            _indexJs.Layout,
	            { layoutWidth: 200 },
	            'Column2'
	          )
	        )
	      );
	    }
	  }]);
	
	  return BothFixedHorizontalResizer;
	})(_react2['default'].Component);
	
	var VerticalResizer = (function (_React$Component6) {
	  _inherits(VerticalResizer, _React$Component6);
	
	  function VerticalResizer(props) {
	    _classCallCheck(this, VerticalResizer);
	
	    _get(Object.getPrototypeOf(VerticalResizer.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(VerticalResizer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutHeight: 200 },
	          'Row1'
	        ),
	        _react2['default'].createElement(_indexJs.LayoutSplitter, null),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutHeight: 'flex' },
	          'Row2'
	        )
	      );
	    }
	  }]);
	
	  return VerticalResizer;
	})(_react2['default'].Component);
	
	var Nested = (function (_React$Component7) {
	  _inherits(Nested, _React$Component7);
	
	  function Nested(props) {
	    _classCallCheck(this, Nested);
	
	    _get(Object.getPrototypeOf(Nested.prototype), 'constructor', this).call(this, props);
	  }
	
	  _createClass(Nested, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 100 },
	          'Column1'
	        ),
	        _react2['default'].createElement(_indexJs.LayoutSplitter, null),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutWidth: 'flex' },
	          _react2['default'].createElement(
	            _indexJs.Layout,
	            { layoutHeight: 200 },
	            'Row 1'
	          ),
	          _react2['default'].createElement(_indexJs.LayoutSplitter, null),
	          _react2['default'].createElement(
	            _indexJs.Layout,
	            { layoutHeight: 'flex' },
	            'Row 2'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Nested;
	})(_react2['default'].Component);
	
	var LayoutDemo = (function (_React$Component8) {
	  _inherits(LayoutDemo, _React$Component8);
	
	  function LayoutDemo(props) {
	    _classCallCheck(this, LayoutDemo);
	
	    _get(Object.getPrototypeOf(LayoutDemo.prototype), 'constructor', this).call(this, props);
	    this.page = _react2['default'].createElement(Horizontal, null);
	  }
	
	  _createClass(LayoutDemo, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.props.target !== nextProps.target;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var target = this.props.target || 'horizontal';
	      console.log('layout target:', target);
	      var example = _react2['default'].createElement(Horizontal, null);
	      switch (target) {
	        case 'horizontal':
	          example = _react2['default'].createElement(Horizontal, null);
	          break;
	        case 'fixedright':
	          example = _react2['default'].createElement(FixedRightPane, null);
	          break;
	        case 'threecolumn':
	          example = _react2['default'].createElement(ThreeColumn, null);
	          break;
	        case 'oneflexhorizontalresize':
	          example = _react2['default'].createElement(HorizontalResizer, null);
	          break;
	        case 'bothfixedhorizontalresize':
	          example = _react2['default'].createElement(BothFixedHorizontalResizer, null);
	          break;
	        case 'verticalresize':
	          example = _react2['default'].createElement(VerticalResizer, null);
	          break;
	        case 'nested':
	          example = _react2['default'].createElement(Nested, null);
	          break;
	      }
	      return _react2['default'].createElement(
	        _indexJs.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutHeight: 50, style: { marginTop: '20px' } },
	          _react2['default'].createElement(
	            'div',
	            { className: 'container btn-toolbar' },
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/horizontal', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Horizontal'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/fixedright', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Fixed right column'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/threecolumn', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Three column'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/oneflexhorizontalresize', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Horizontal Splitter'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/bothfixedhorizontalresize', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Both fixed Horizontal Splitter'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/verticalresize', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Vertical Splitter'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/docs/react/layout/flexlayout/nested', className: 'btn btn-xs btn-primary radius', activeClassName: 'active' },
	              'Nested'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          _indexJs.Layout,
	          { layoutHeight: 'flex', style: { borderTop: '1px solid #ccc' } },
	          example
	        )
	      );
	    }
	  }]);
	
	  return LayoutDemo;
	})(_react2['default'].Component);
	
	exports['default'] = LayoutDemo;
	module.exports = exports['default'];

/***/ },
/* 232 */
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
	
	var _index = __webpack_require__(47);
	
	var _index2 = _interopRequireDefault(_index);
	
	// const MenuItem = Menu.Item;
	
	var MenuDemo = (function (_Component) {
	  _inherits(MenuDemo, _Component);
	
	  function MenuDemo() {
	    var _this = this;
	
	    _classCallCheck(this, MenuDemo);
	
	    _get(Object.getPrototypeOf(MenuDemo.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      current: 'mail',
	      current1: '1'
	    };
	
	    this.handleClick = function (e) {
	      console.log('click ', e);
	      _this.setState({
	        current: e.key
	      });
	    };
	
	    this.handleClick1 = function (e) {
	      console.log('click ', e);
	      _this.setState({
	        current1: e.key
	      });
	    };
	
	    this.handleClick2 = function (e) {
	      console.log('click ', e);
	    };
	  }
	
	  _createClass(MenuDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'container' },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          '`horizontal` mode'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          { onClick: this.handleClick, selectedKeys: [this.state.current], mode: 'horizontal' },
	          _react2['default'].createElement(
	            _index2['default'].Item,
	            { key: 'mail' },
	            _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	            '导航一'
	          ),
	          _react2['default'].createElement(
	            _index2['default'].Item,
	            { key: 'app' },
	            _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	            '导航二'
	          ),
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                '导航 - 子菜单'
	              ) },
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: 'setting:1' },
	              '选项1'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: 'setting:2' },
	              '选项2'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: 'setting:3' },
	              '选项3'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: 'setting:4' },
	              '选项4'
	            )
	          ),
	          _react2['default'].createElement(
	            _index2['default'].Item,
	            { key: 'alipay' },
	            _react2['default'].createElement(
	              'a',
	              { href: 'http://www.alipay.com/', target: '_blank' },
	              '导航四 - 链接'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          '`inline` Mode'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          { onClick: this.handleClick1, style: { width: 240 }, defaultOpenKeys: ['sub1'], selectedKeys: [this.state.current1], mode: 'inline' },
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { key: 'sub1', title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  '导航一'
	                )
	              ) },
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '1' },
	              '选项1'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '2' },
	              '选项2'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '3' },
	              '选项3'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '4' },
	              '选项4'
	            )
	          ),
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { key: 'sub2', title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  '导航二'
	                )
	              ) },
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '5' },
	              '选项5'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '6' },
	              '选项6'
	            ),
	            _react2['default'].createElement(
	              _index.SubMenu,
	              { key: 'sub3', title: '三级导航' },
	              _react2['default'].createElement(
	                _index2['default'].Item,
	                { key: '7' },
	                '选项7'
	              ),
	              _react2['default'].createElement(
	                _index2['default'].Item,
	                { key: '8' },
	                '选项8'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { key: 'sub4', title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  '导航三'
	                )
	              ) },
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '9' },
	              '选项9'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '10' },
	              '选项10'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '11' },
	              '选项11'
	            ),
	            _react2['default'].createElement(
	              _index2['default'].Item,
	              { key: '12' },
	              '选项12'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          '`vertical` Mode'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          { onClick: this.handleClick2, style: { width: 240 }, mode: 'vertical' },
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { key: 'sub1', title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  '导航一'
	                )
	              ) },
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '1' },
	              '选项1'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '2' },
	              '选项2'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '3' },
	              '选项3'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '4' },
	              '选项4'
	            )
	          ),
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { key: 'sub2', title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  '导航二'
	                )
	              ) },
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '5' },
	              '选项5'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '6' },
	              '选项6'
	            ),
	            _react2['default'].createElement(
	              _index.SubMenu,
	              { key: 'sub3', title: '三级导航' },
	              _react2['default'].createElement(
	                _index.Item,
	                { key: '7' },
	                '选项7'
	              ),
	              _react2['default'].createElement(
	                _index.Item,
	                { key: '8' },
	                '选项8'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            _index.SubMenu,
	            { key: 'sub4', title: _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement('i', { className: 'glyph-icon glyph-star-full' }),
	                _react2['default'].createElement(
	                  'span',
	                  null,
	                  '导航三'
	                )
	              ) },
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '9' },
	              '选项9'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '10' },
	              '选项10'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '11' },
	              '选项11'
	            ),
	            _react2['default'].createElement(
	              _index.Item,
	              { key: '12' },
	              '选项12'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return MenuDemo;
	})(_react.Component);
	
	exports['default'] = MenuDemo;
	module.exports = exports['default'];

/***/ },
/* 233 */
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
	
	var _index = __webpack_require__(234);
	
	var _index2 = _interopRequireDefault(_index);
	
	var MessageDemo = (function (_Component) {
	  _inherits(MessageDemo, _Component);
	
	  function MessageDemo() {
	    _classCallCheck(this, MessageDemo);
	
	    _get(Object.getPrototypeOf(MessageDemo.prototype), 'constructor', this).apply(this, arguments);
	
	    this.showSuccess = function () {
	      _index2['default'].success('这是一条成功的提示');
	    };
	
	    this.showFailed = function () {
	      _index2['default'].error('这是一条失败的提示这是一条失败的提示这是一条失败的提示');
	    };
	
	    this.showNormal = function () {
	      _index2['default'].info('这是一条普通的提醒');
	    };
	
	    this.showCustomized = function () {
	      _index2['default'].success('这是一条成功的提示,并将于10秒后消失', 10);
	    };
	
	    this.showLoading = function () {
	      _index2['default'].loading('正在处理中...', 10);
	    };
	  }
	
	  _createClass(MessageDemo, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'message-demo' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'btn-group' },
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', className: 'btn btn-primary', onClick: this.showSuccess },
	            'success'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', className: 'btn btn-danger', onClick: this.showFailed },
	            'failed'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', className: 'btn btn-primary', onClick: this.showNormal },
	            'normal'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', className: 'btn btn-primary', onClick: this.showCustomized },
	            'custom'
	          ),
	          _react2['default'].createElement(
	            'button',
	            { type: 'button', className: 'btn btn-primary', onClick: this.showLoading },
	            'Loading'
	          )
	        )
	      );
	    }
	  }]);
	
	  return MessageDemo;
	})(_react.Component);
	
	exports['default'] = MessageDemo;
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcNotification = __webpack_require__(288);
	
	var _rcNotification2 = _interopRequireDefault(_rcNotification);
	
	if (true) {
	  __webpack_require__(254);
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
/* 235 */
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
	
	var _index = __webpack_require__(149);
	
	var _index2 = _interopRequireDefault(_index);
	
	var ScrollAreaDemo = (function (_Component) {
	  _inherits(ScrollAreaDemo, _Component);
	
	  function ScrollAreaDemo() {
	    _classCallCheck(this, ScrollAreaDemo);
	
	    _get(Object.getPrototypeOf(ScrollAreaDemo.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ScrollAreaDemo, [{
	    key: 'render',
	    value: function render() {
	      /*<ScrollArea speed={0.8} fixedWidth = {200} fixedHeight= {200} amSize={'sm'} contentClassName="content">*/
	      return _react2['default'].createElement(
	        _index2['default'],
	        { speed: 0.8, amSize: 'sm', contentClassName: 'content' },
	        _react2['default'].createElement(
	          'div',
	          { style: { width: '900px' } },
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal scrollarea '
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'normal end....... '
	          )
	        )
	      );
	    }
	  }]);
	
	  return ScrollAreaDemo;
	})(_react.Component);
	
	exports['default'] = ScrollAreaDemo;
	module.exports = exports['default'];

/***/ },
/* 236 */
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
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsDom = __webpack_require__(48);
	
	var _utilsDom2 = _interopRequireDefault(_utilsDom);
	
	var _utilsMixin = __webpack_require__(104);
	
	var _utilsMixin2 = _interopRequireDefault(_utilsMixin);
	
	var _mixinsPureRenderMixin = __webpack_require__(244);
	
	var _mixinsPureRenderMixin2 = _interopRequireDefault(_mixinsPureRenderMixin);
	
	var _scrollBar = __webpack_require__(237);
	
	var _scrollBar2 = _interopRequireDefault(_scrollBar);
	
	var _utilsEvents = __webpack_require__(19);
	
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
/* 237 */
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
	
	var _classnames = __webpack_require__(11);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utilsEvents = __webpack_require__(19);
	
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
/* 238 */
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
	
	var _index = __webpack_require__(239);
	
	var _index2 = _interopRequireDefault(_index);
	
	var Option = _index2['default'].Option;
	var OptGroup = _index2['default'].OptGroup;
	
	var SelectDemo = (function (_Component) {
	  _inherits(SelectDemo, _Component);
	
	  function SelectDemo() {
	    _classCallCheck(this, SelectDemo);
	
	    _get(Object.getPrototypeOf(SelectDemo.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(SelectDemo, [{
	    key: 'handleChange',
	    value: function handleChange(value) {
	      console.log('selected ' + value);
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren() {
	      var children = [];
	      for (var i = 10; i < 36; i++) {
	        children.push(_react2['default'].createElement(
	          Option,
	          { key: i.toString(36) + i },
	          i.toString(36) + i
	        ));
	      }
	      return children;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      return _react2['default'].createElement(
	        'div',
	        { className: 'container' },
	        _react2['default'].createElement(
	          'h2',
	          null,
	          '基本使用。'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          { defaultValue: 'lucy', style: { width: 200 }, onChange: this.handleChange },
	          _react2['default'].createElement(
	            Option,
	            { value: 'jack' },
	            'Jack'
	          ),
	          _react2['default'].createElement(
	            Option,
	            { value: 'lucy' },
	            'Lucy'
	          ),
	          _react2['default'].createElement(
	            Option,
	            { value: 'disabled', disabled: true },
	            'Disabled'
	          ),
	          _react2['default'].createElement(
	            Option,
	            { value: 'yiminghe' },
	            'yiminghe'
	          )
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          '在浮层内顶部有搜索框的单项选择器。'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          { defaultValue: 'lucy', showSearch: true, style: { width: 200 },
	            searchPlaceholder: '输入',
	            onChange: this.handleChange },
	          _react2['default'].createElement(
	            Option,
	            { value: 'jack' },
	            'jack'
	          ),
	          _react2['default'].createElement(
	            Option,
	            { value: 'lucy' },
	            'lucy'
	          ),
	          _react2['default'].createElement(
	            Option,
	            { value: 'disabled', disabled: true },
	            'disabled'
	          ),
	          _react2['default'].createElement(
	            Option,
	            { value: 'yiminghe' },
	            'yiminghe'
	          )
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          '在浮层内顶部有搜索框的单项选择器。'
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'tags select，随意输入的内容（scroll the menu）'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          {
	            style: { width: '100%' },
	            searchPlaceholder: '标签模式',
	            tags: true, onChange: this.handleChange },
	          this.getChildren()
	        ),
	        _react2['default'].createElement(
	          'h2',
	          null,
	          'option分组'
	        ),
	        _react2['default'].createElement(
	          _index2['default'],
	          { defaultValue: 'lucy',
	            style: { width: 200 },
	            showSearch: false,
	            onChange: this.handleChange },
	          _react2['default'].createElement(
	            OptGroup,
	            { label: 'Manager' },
	            _react2['default'].createElement(
	              Option,
	              { value: 'jack' },
	              'jack'
	            ),
	            _react2['default'].createElement(
	              Option,
	              { value: 'lucy' },
	              'lucy'
	            )
	          ),
	          _react2['default'].createElement(
	            OptGroup,
	            { label: 'Engineer' },
	            _react2['default'].createElement(
	              Option,
	              { value: 'yiminghe' },
	              'yiminghe'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return SelectDemo;
	})(_react.Component);
	
	exports['default'] = SelectDemo;
	module.exports = exports['default'];

/***/ },
/* 239 */
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
	
	var _rcSelect = __webpack_require__(293);
	
	var _rcSelect2 = _interopRequireDefault(_rcSelect);
	
	if (true) {
	  __webpack_require__(256);
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
/* 240 */
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
	
	var _TagItem = __webpack_require__(150);
	
	var _TagItem2 = _interopRequireDefault(_TagItem);
	
	var _Suggestions = __webpack_require__(241);
	
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
/* 241 */
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
	  __webpack_require__(257);
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
/* 242 */
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
	
	var _TagItem = __webpack_require__(150);
	
	var _TagItem2 = _interopRequireDefault(_TagItem);
	
	var _ReactTags = __webpack_require__(240);
	
	var _ReactTags2 = _interopRequireDefault(_ReactTags);
	
	var TagDemo = (function (_Component) {
	  _inherits(TagDemo, _Component);
	
	  function TagDemo() {
	    var _this = this;
	
	    _classCallCheck(this, TagDemo);
	
	    _get(Object.getPrototypeOf(TagDemo.prototype), 'constructor', this).apply(this, arguments);
	
	    this.state = {
	      tags: [{ id: 1, text: "Apples" }],
	      suggestions: ["BananaBanana", "BananaBanana1", "BananaBanana2", "BananaBanana3", "Mango", "Pear", "Apricot"]
	    };
	
	    this.handleDelete = function (i) {
	      var tags = _this.state.tags;
	      tags.splice(i, 1);
	      console.log('current tags: ', tags);
	      _this.setState({ tags: tags });
	    };
	
	    this.handleAddition = function (tag) {
	      var tags = _this.state.tags;
	      tags.push({
	        id: tags.length + 1,
	        text: tag
	      });
	      _this.setState({ tags: tags });
	    };
	
	    this.onDelete = function (e) {
	      console.log(e);
	    };
	  }
	
	  _createClass(TagDemo, [{
	    key: 'render',
	    value: function render() {
	      var tags = this.state.tags;
	      var suggestions = this.state.suggestions;
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            '简单的标签展示，添加 closable 表示可关闭。'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            null,
	            '标签一'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            null,
	            '标签二'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true, onDelete: this.onDelete },
	            '标签三'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { href: 'http://www.baidu.com' },
	            '标签四（链接）'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            '四种颜色的标签。'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true },
	            '默认'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true, amStyle: 'primary' },
	            '蓝色'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true, amStyle: 'default' },
	            '默认灰'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true, amStyle: 'secondary' },
	            '浅蓝色'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true, amStyle: 'warning' },
	            '黄色'
	          ),
	          _react2['default'].createElement(
	            _TagItem2['default'],
	            { closable: true, amStyle: 'danger' },
	            '红色'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            '带输入框的TAG'
	          ),
	          _react2['default'].createElement(_ReactTags2['default'], { tags: this.state.tags,
	            suggestions: this.state.suggestions,
	            amStyle: 'primary',
	            labelField: 'text',
	            handleDelete: this.handleDelete,
	            handleAddition: this.handleAddition })
	        )
	      );
	    }
	  }]);
	
	  return TagDemo;
	})(_react.Component);
	
	exports['default'] = TagDemo;
	module.exports = exports['default'];

/***/ },
/* 243 */
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
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsShallowEqual = __webpack_require__(245);
	
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
/* 245 */
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
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
74,
/* 254 */
74,
/* 255 */
74,
/* 256 */
74,
/* 257 */
74,
/* 258 */
74,
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
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(276);
	var forOwn = __webpack_require__(274);
	
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
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var forIn = __webpack_require__(275);
	var hasOwn = Object.prototype.hasOwnProperty;
	
	module.exports = function forOwn(o, fn, thisArg) {
	  forIn(o, function (val, key) {
	    if (hasOwn.call(o, key)) {
	      return fn.call(thisArg, o[key], key, o);
	    }
	  });
	};


/***/ },
/* 275 */
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
/* 276 */
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
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcAnimate = __webpack_require__(106);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _rcUtil = __webpack_require__(43);
	
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
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(287);

/***/ },
/* 289 */
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
	
	var _util = __webpack_require__(125);
	
	var _rcMenu = __webpack_require__(49);
	
	var _OptGroup = __webpack_require__(124);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _rcUtil = __webpack_require__(43);
	
	var _DropdownPanel = __webpack_require__(290);
	
	var _DropdownPanel2 = _interopRequireDefault(_DropdownPanel);
	
	var _rcAlign = __webpack_require__(295);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(106);
	
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
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(125);
	
	var _rcMenu = __webpack_require__(49);
	
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
/* 291 */
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
/* 292 */
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
	
	var _rcUtil = __webpack_require__(43);
	
	var _OptGroup = __webpack_require__(124);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _Dropdown = __webpack_require__(289);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _util = __webpack_require__(125);
	
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
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Select = __webpack_require__(292);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(291);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _OptGroup = __webpack_require__(124);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	_Select2['default'].Option = _Option2['default'];
	_Select2['default'].OptGroup = _OptGroup2['default'];
	exports['default'] = _Select2['default'];
	module.exports = exports['default'];

/***/ },
/* 294 */
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
	
	var _domAlign = __webpack_require__(296);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _rcUtil = __webpack_require__(43);
	
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
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// export this package's api
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Align = __webpack_require__(294);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utils = __webpack_require__(297);
	
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

/***/ },
/* 297 */
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

/***/ }
]);
//# sourceMappingURL=bundle.js.map?20151001