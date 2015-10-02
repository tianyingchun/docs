webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(210);


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
/* 104 */,
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
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
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
/* 149 */,
/* 150 */,
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
/* 210 */
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
	
	var _routes = __webpack_require__(211);
	
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
/* 211 */
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
	
	var _componentsLayoutsLessLayout = __webpack_require__(216);
	
	var _componentsLayoutsLessLayout2 = _interopRequireDefault(_componentsLayoutsLessLayout);
	
	var _viewsLessDocContent = __webpack_require__(219);
	
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
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */
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
/* 217 */,
/* 218 */,
/* 219 */
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
	
	var _sharedReactComponentsLayout = __webpack_require__(34);
	
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
	        _sharedReactComponentsLayout.Layout,
	        { fill: 'container' },
	        _react2['default'].createElement(
	          _sharedReactComponentsLayout.Layout,
	          { layoutWidth: 220 },
	          'col menus.'
	        ),
	        _react2['default'].createElement(_sharedReactComponentsLayout.LayoutSplitter, null),
	        _react2['default'].createElement(
	          _sharedReactComponentsLayout.Layout,
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

/***/ }
]);
//# sourceMappingURL=bundle.js.map?20151001