(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://www.korsimoro.com/helsinki2018/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var palette = exports.palette = {
    greenNeon: '#00FF00',
    green: '#0EE05E',
    greenDarker: '#16C65A',
    greenDarkest: '#161817',
    greenDarkestAlt: '#072900',

    grayLightest: '#dfe6e9',
    grayLighter: '#b2bec3',
    grayLight: '#636e72',

    black: '#1D1D26',
    white: '#F6F6FF'
};

var fontSize = exports.fontSize = {
    default: '18px',
    small: '9px',
    medium: '20px',
    mediumLg: '27px',
    large: '36px',
    xLarge: '45px',
    huge: '6.854em'
};

var family = exports.family = {
    workSans: '"Work Sans", sans-serif',
    baskerVille: '"Libre Baskerville", sans-serif',
    sourceSansPro: '"Source Sans Pro", sans-serif'
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _basicElements = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        _reactStatic.Link,
        props,
        _react2.default.createElement(
            _basicElements.LinkStyle,
            null,
            props.children
        )
    );
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-json-pretty");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _basicElements = __webpack_require__(9);

var _Logo = __webpack_require__(18);

var _Logo2 = _interopRequireDefault(_Logo);

var _variables = __webpack_require__(3);

var _Page = __webpack_require__(17);

var _Page2 = _interopRequireDefault(_Page);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightSide = function RightSide(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/' },
      'H18 Home'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/about/h18' },
      'About Helsinki 2018'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/about/usecases' },
      'About Use Cases'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/about/resolver' },
      'About Resolver'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/about/h18method' },
      'About H18 Method'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/about/h18cards' },
      'About Cards'
    )
  );
};

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      console.log("PROPS", this.props);
      return _react2.default.createElement(
        _Page2.default,
        _extends({}, this.props, { right: _react2.default.createElement(RightSide, null) }),
        this.props.children
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(About);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkStyle = exports.Text = exports.Section = exports.OutputContainer = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    max-width: 1170px;\n    margin: auto;\n    padding: ', ';\n'], ['\n    max-width: 1170px;\n    margin: auto;\n    padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top: 2em;\n'], ['\n  margin-top: 2em;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: relative;\n    min-height: 100vh;\n    ', ';\n'], ['\n    position: relative;\n    min-height: 100vh;\n    ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    ', ';\n    position: relative;\n    z-index: 2;\n'], ['\n    ', ';\n    position: relative;\n    z-index: 2;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin-left: 0.25em;\n  margin-right: 0.25em;\n  color: ', ';\n'], ['\n  margin-left: 0.25em;\n  margin-right: 0.25em;\n  color: ', ';\n']);

var _reactEmotion = __webpack_require__(4);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _polished = __webpack_require__(5);

var _propStyles = __webpack_require__(15);

var _propStyles2 = _interopRequireDefault(_propStyles);

var _utilities = __webpack_require__(16);

var _variables = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = (0, _reactEmotion2.default)('div')(_templateObject, (0, _polished.rem)('36px', '16px'));
var OutputContainer = exports.OutputContainer = (0, _reactEmotion2.default)('div')(_templateObject2);

var Section = exports.Section = (0, _reactEmotion2.default)('section')(_templateObject3, _polished.clearFix);

var Text = exports.Text = (0, _reactEmotion2.default)('p')(_templateObject4, (0, _propStyles2.default)({
    textSm: [_utilities.text.small],
    textMd: [_utilities.text.medium],
    textMdLg: [_utilities.text.mediumLg],
    textLg: [_utilities.text.large],
    textXlg: [_utilities.text.xLarge],
    textHuge: [_utilities.text.huge],

    center: [_utilities.text.center],
    left: [_utilities.text.left],
    right: [_utilities.text.right],
    justify: [_utilities.text.justify],

    grayLight: [_utilities.text.grayLight],
    greenNeon: [_utilities.text.greenNeon],
    green: [_utilities.text.green],
    greenDarker: [_utilities.text.greenDarker],
    greenDarkest: [_utilities.text.greenDarkest]
}));

var LinkStyle = exports.LinkStyle = (0, _reactEmotion2.default)('span')(_templateObject5, _variables.palette.grayLighter);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _basicElements = __webpack_require__(9);

var _variables = __webpack_require__(3);

var _Page = __webpack_require__(17);

var _Page2 = _interopRequireDefault(_Page);

var _reduxForm = __webpack_require__(11);

var _formElements = __webpack_require__(42);

var _CardLoad = __webpack_require__(43);

var _CardLoad2 = _interopRequireDefault(_CardLoad);

var _OutputBox = __webpack_require__(44);

var _OutputBox2 = _interopRequireDefault(_OutputBox);

var _actions = __webpack_require__(19);

var _reactStatic = __webpack_require__(2);

var _validation = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resolvers = ['h18', 'sov', 'btcr', 'dom', 'erc275', 'ipid', 'stack', 'uport', 'v1'];

var LookUpForm = function (_Component) {
  _inherits(LookUpForm, _Component);

  function LookUpForm() {
    _classCallCheck(this, LookUpForm);

    return _possibleConstructorReturn(this, (LookUpForm.__proto__ || Object.getPrototypeOf(LookUpForm)).apply(this, arguments));
  }

  _createClass(LookUpForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cache = _props.cache,
          lookupChange = _props.lookupChange,
          didChange = _props.didChange,
          methodChange = _props.methodChange,
          pristine = _props.pristine,
          handleSubmit = _props.handleSubmit,
          onSubmit = _props.onSubmit,
          submitting = _props.submitting,
          formValues = _props.formValues;


      var activeMethod = void 0;
      if (formValues.lookupForm) if (formValues.lookupForm.values) activeMethod = formValues.lookupForm.values.method;
      var activeSN = void 0;
      if (formValues.lookupForm) if (formValues.lookupForm.values) activeSN = formValues.lookupForm.values.sn;
      var lookupTarget = void 0;
      if (formValues.lookupForm) if (formValues.lookupForm.values) lookupTarget = formValues.lookupForm.values.lookup;
      return _react2.default.createElement(
        _reduxForm.Form,
        { onSubmit: handleSubmit },
        _react2.default.createElement(
          _formElements.FormGroup,
          null,
          _react2.default.createElement(
            _formElements.SelectWrapper,
            null,
            _react2.default.createElement(
              _formElements.Label,
              { htmlFor: 'method' },
              'Lookup'
            ),
            _react2.default.createElement(
              _reduxForm.Field,
              {
                name: 'lookup',
                component: 'select',
                onChange: lookupChange(formValues, cache)
              },
              _react2.default.createElement(
                'option',
                { key: '1', value: 'ddo' },
                'DID Document'
              ),
              _react2.default.createElement(
                'option',
                { key: '2', value: 'map' },
                'Use Case'
              ),
              _react2.default.createElement(
                'option',
                { key: '3', value: 'card' },
                'H18 Card'
              )
            )
          ),
          _react2.default.createElement(
            _formElements.SelectWrapper,
            null,
            _react2.default.createElement(
              _formElements.Label,
              { htmlFor: 'method' },
              'DID method'
            ),
            _react2.default.createElement(
              _reduxForm.Field,
              {
                name: 'method',
                component: 'select',
                onChange: methodChange(formValues, cache),
                disabled: lookupTarget !== 'ddo'
              },
              resolvers.map(function (resolver, i) {
                return _react2.default.createElement(
                  'option',
                  { key: i },
                  resolver
                );
              })
            )
          ),
          _react2.default.createElement(
            _formElements.InputGroup,
            null,
            _react2.default.createElement(_reduxForm.Field, {
              name: 'sn',
              type: 'text',
              component: _validation.renderField,
              validate: [_validation.alphaNumeric, _validation.maxLengthLimit, _validation.minLengthLimit],
              maxLength: _validation.maxLengthLimit,
              label: 'Identifier',
              onChange: didChange(formValues, cache)
            })
          ),
          _react2.default.createElement(
            _formElements.InputGroup,
            null,
            _react2.default.createElement(
              _formElements.Button,
              {
                greenOutline: true,
                disabled: pristine || submitting || !activeSN || activeSN === ''
              },
              'Go'
            )
          )
        )
      );
    }
  }]);

  return LookUpForm;
}(_react.Component);

;

LookUpForm = (0, _reduxForm.reduxForm)({
  form: 'lookupForm'
})(LookUpForm);

LookUpForm = (0, _reactRedux.connect)(function (state) {
  return {
    formValues: state.form,
    initialValues: {
      method: 'h18',
      lookup: 'ddo'
    },
    cache: state.cache
  };
}, function (dispatch) {
  return {
    methodChange: function methodChange(values, cache) {
      if (!values.lookupForm) return;
      if (!values.lookupForm.values) return;
      var V = values.lookupForm.values;
      if (cache.method != V.method) {
        dispatch((0, _actions.resetOutputBox)());
        if (V.sn && V.sn !== '' && V.method) {
          dispatch((0, _actions.lookupDDO)(dispatch, V.method, V.sn));
        }
      }
      dispatch((0, _actions.recordLastValue)('method', V.method));
    },
    lookupChange: function lookupChange(values, cache) {
      if (!values.lookupForm) return;
      if (!values.lookupForm.values) return;
      var V = values.lookupForm.values;
      if (cache.lookup != V.lookup) dispatch((0, _actions.resetOutputBox)());
      var method = V.method;
      if (V.lookup !== 'ddo') {
        if (V.method !== 'h18') {
          if (cache.lookup != V.lookup) {
            dispatch((0, _reduxForm.change)('lookupForm', 'method', 'h18'));
            method = 'h18';
          }
        }
      }
      if (cache.lookup !== V.lookup) {
        if (V.sn && V.sn !== '') {
          if (V.lookup === 'map') {
            dispatch((0, _actions.lookupMap)(dispatch, V.sn));
          } else if (V.lookup === 'card') {
            dispatch((0, _actions.lookupCard)(dispatch, V.sn));
          } else if (V.lookup === 'ddo') {
            dispatch((0, _actions.lookupDDO)(dispatch, method, V.sn));
          }
        }
      }
      dispatch((0, _actions.recordLastValue)('lookup', V.lookup));
    },
    didChange: function didChange(values, cache) {
      if (!values.lookupForm) return;
      if (!values.lookupForm.values) return;
      var V = values.lookupForm.values;
      if (cache.sn != V.sn) dispatch((0, _actions.resetOutputBox)());
      dispatch((0, _actions.recordLastValue)('sn', V.sn));
    },
    onSubmit: function onSubmit(values) {
      dispatch((0, _actions.submitValues)(dispatch, values));
    }
  };
})(LookUpForm);

var RightSide = function RightSide(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: 'http://korsimoro.com' },
      'About Korsimoro'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/about' },
      'Helsinki 2018'
    ),
    _react2.default.createElement('br', null)
  );
};

var Home = function (_Component2) {
  _inherits(Home, _Component2);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var qrcode = this.props.qrcode;

      var cardLoad = void 0;
      {
        if (qrcode.card_load) {
          cardLoad = _react2.default.createElement(_CardLoad2.default, null);
        }
      }

      return _react2.default.createElement(
        _Page2.default,
        _extends({}, this.props, { right: _react2.default.createElement(RightSide, null) }),
        cardLoad,
        _react2.default.createElement(LookUpForm, null),
        _react2.default.createElement(
          _basicElements.OutputContainer,
          null,
          _react2.default.createElement(_OutputBox2.default, null)
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(Home);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("prop-styles");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = exports.text = exports.displays = exports.positions = exports.gradientBg = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    background: rgb(0,255,0);\n    background: url(\'img/topographics.svg\'), radial-gradient(circle at center -100%, rgba(0,255,0,1) 0%, rgba(22,24,23,0) 77%);\n    background-repeat: repeat;\n'], ['\n    background: rgb(0,255,0);\n    background: url(\'img/topographics.svg\'), radial-gradient(circle at center -100%, rgba(0,255,0,1) 0%, rgba(22,24,23,0) 77%);\n    background-repeat: repeat;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        ', ';\n        margin: auto;\n    '], ['\n        ', ';\n        margin: auto;\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        ', ';\n    '], ['\n        ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        ', ';\n        display: table;\n        position: relative;\n    '], ['\n        ', ';\n        display: table;\n        position: relative;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n        ', ';\n        display: table-cell;\n        vertical-align: middle;\n    '], ['\n        ', ';\n        display: table-cell;\n        vertical-align: middle;\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        display: inline-block;\n    '], ['\n        display: inline-block;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n        font-size: ', ';\n    '], ['\n        font-size: ', ';\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n        text-align: center;\n    '], ['\n        text-align: center;\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n        text-align: left;\n    '], ['\n        text-align: left;\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n        text-align: right;\n    '], ['\n        text-align: right;\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n        text-align: justify;\n    '], ['\n        text-align: justify;\n    ']),
    _templateObject12 = _taggedTemplateLiteral(['\n        color: ', '\n    '], ['\n        color: ', '\n    ']),
    _templateObject13 = _taggedTemplateLiteral(['\n        text-transform: uppercase;\n    '], ['\n        text-transform: uppercase;\n    ']),
    _templateObject14 = _taggedTemplateLiteral(['\n        list-style: none;\n    '], ['\n        list-style: none;\n    ']),
    _templateObject15 = _taggedTemplateLiteral(['\n        list-style: square;\n    '], ['\n        list-style: square;\n    ']),
    _templateObject16 = _taggedTemplateLiteral(['\n        list-style: bullet;\n    '], ['\n        list-style: bullet;\n    ']);

var _reactEmotion = __webpack_require__(4);

var _polished = __webpack_require__(5);

var _variables = __webpack_require__(3);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var gradientBg = exports.gradientBg = (0, _reactEmotion.css)(_templateObject);

// Positions

var positions = exports.positions = {
    absCenter: function absCenter() {
        return (0, _reactEmotion.css)(_templateObject2, (0, _polished.position)('absolute', '0'));
    },

    fixedCenter: function fixedCenter() {
        return (0, _reactEmotion.css)(_templateObject3, (0, _polished.position)('fixed', '0'));
    }
};

var displays = exports.displays = {
    table: function table() {
        return (0, _reactEmotion.css)(_templateObject4, (0, _polished.size)('100%'));
    },

    vmiddle: function vmiddle() {
        return (0, _reactEmotion.css)(_templateObject5, (0, _polished.size)('100%'));
    },

    inBlock: function inBlock() {
        return (0, _reactEmotion.css)(_templateObject6);
    }
};

// Text - Sizes, Colors and Alignment.

var text = exports.text = {
    small: function small() {
        return (0, _reactEmotion.css)(_templateObject7, _variables.fontSize.small);
    },
    medium: function medium() {
        return (0, _reactEmotion.css)(_templateObject7, _variables.fontSize.medium);
    },
    mediumLg: function mediumLg() {
        return (0, _reactEmotion.css)(_templateObject7, _variables.fontSize.mediumLg);
    },
    large: function large() {
        return (0, _reactEmotion.css)(_templateObject7, _variables.fontSize.large);
    },
    xLarge: function xLarge() {
        return (0, _reactEmotion.css)(_templateObject7, _variables.fontSize.xLarge);
    },
    huge: function huge() {
        return (0, _reactEmotion.css)(_templateObject7, _variables.fontSize.huge);
    },

    center: function center() {
        return (0, _reactEmotion.css)(_templateObject8);
    },
    left: function left() {
        return (0, _reactEmotion.css)(_templateObject9);
    },
    right: function right() {
        return (0, _reactEmotion.css)(_templateObject10);
    },
    justify: function justify() {
        return (0, _reactEmotion.css)(_templateObject11);
    },

    greenNeon: function greenNeon() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.greenNeon);
    },

    green: function green() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.green);
    },
    greenDark: function greenDark() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.greenDark);
    },
    greenDarkest: function greenDarkest() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.greenDarkest);
    },
    greenDarkestAlt: function greenDarkestAlt() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.greenDarkestAlt);
    },
    grayLight: function grayLight() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.grayLight);
    },
    grayLighter: function grayLighter() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.grayLighter);
    },
    grayLightest: function grayLightest() {
        return (0, _reactEmotion.css)(_templateObject12, _variables.palette.grayLightest);
    },

    upperCase: function upperCase() {
        return (0, _reactEmotion.css)(_templateObject13);
    }
};

var list = exports.list = {
    none: function none() {
        return (0, _reactEmotion.css)(_templateObject14);
    },
    square: function square() {
        return (0, _reactEmotion.css)(_templateObject15);
    },
    bullet: function bullet() {
        return (0, _reactEmotion.css)(_templateObject16);
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _basicElements = __webpack_require__(9);

var _Logo = __webpack_require__(18);

var _Logo2 = _interopRequireDefault(_Logo);

var _variables = __webpack_require__(3);

var _index = __webpack_require__(19);

var _reduxForm = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          location = _props.location,
          processQueryStringInit = _props.processQueryStringInit;

      if (location) processQueryStringInit(location);
    }
  }, {
    key: 'render',
    value: function render() {
      var right = this.props.right;

      return _react2.default.createElement(
        _basicElements.Container,
        null,
        _react2.default.createElement(
          'div',
          { style: { float: "right" } },
          right
        ),
        _react2.default.createElement(
          'div',
          { className: 'logo-wrapper' },
          _react2.default.createElement(_Logo2.default, {
            fill: _variables.palette.green,
            width: 320,
            style: { zIndex: -1 }
          }),
          _react2.default.createElement(
            'div',
            { style: { color: "white" } },
            'Helsinki 2018'
          )
        ),
        this.props.children
      );
    }
  }]);

  return Page;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {
    processQueryStringInit: function processQueryStringInit(location) {
      var searchParams = new URLSearchParams(location.search);
      if (searchParams.get('sn')) {
        dispatch((0, _reduxForm.change)('lookupForm', 'sn', searchParams.get('sn')));
        if (searchParams.get('cmd') === 'hello') {
          dispatch((0, _reduxForm.change)('lookupForm', 'lookup', 'card'));
          dispatch((0, _index.lookupCard)(dispatch, searchParams.get('sn')));
        } else {
          dispatch((0, _reduxForm.change)('lookupForm', 'method', 'h18'));
          dispatch((0, _reduxForm.change)('lookupForm', 'lookup', 'ddo'));
          dispatch((0, _index.lookupDDO)(dispatch, 'h18', searchParams.get('sn')));
        }
      }
      if (searchParams.get('cmd') === 'hello') {
        dispatch({
          type: 'INDICATE_CARD_LOAD'
        });
      }
      dispatch((0, _index.fetchRegistry)(dispatch));
    }

  };
})(Page);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    display: block;\n    z-index: 3;\n'], ['\n    position: relative;\n    display: block;\n    z-index: 3;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 100%;\n'], ['\n    width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    fill={fill}\n'], ['\n    fill={fill}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    fill={ fill}\n'], ['\n    fill={ fill}\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n        width: ', 'px;\n    '], ['\n        width: ', 'px;\n    ']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(4);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _polished = __webpack_require__(5);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LogoWrapper = (0, _reactEmotion2.default)('span')(_templateObject);

var HiddenLabel = (0, _reactEmotion2.default)('span')(_templateObject2, (0, _polished.hideText)());

var Svg = (0, _reactEmotion2.default)('svg')(_templateObject3);

var BirdHead = (0, _reactEmotion2.default)('path')(_templateObject4);

var TailsUp = (0, _reactEmotion2.default)('path')(_templateObject4);

var TailsDown = (0, _reactEmotion2.default)('path')(_templateObject4);

var WingsUp = (0, _reactEmotion2.default)('path')(_templateObject4);

var WingsDown = (0, _reactEmotion2.default)('path')(_templateObject5);

var WingsDownLong = (0, _reactEmotion2.default)('path')(_templateObject4);

var FirstO = (0, _reactEmotion2.default)('path')(_templateObject4);

var FirstR = (0, _reactEmotion2.default)('path')(_templateObject4);

var S = (0, _reactEmotion2.default)('path')(_templateObject4);

var I = (0, _reactEmotion2.default)('path')(_templateObject4);

var IDot = (0, _reactEmotion2.default)('path')(_templateObject4);

var Mo = (0, _reactEmotion2.default)('path')(_templateObject4);

var SecondR = (0, _reactEmotion2.default)('path')(_templateObject4);

var SecondO = (0, _reactEmotion2.default)('path')(_templateObject4);

exports.default = function (props) {
    var siteTitle = _reactStatic.getSiteData.siteTitle;

    var setWidth = (0, _reactEmotion.css)(_templateObject6, props.width);
    return _react2.default.createElement(
        LogoWrapper,
        _extends({
            className: setWidth + ' korsimoro-logo',
            label: props.label
        }, props),
        _react2.default.createElement(
            HiddenLabel,
            { className: 'sr-text' },
            props.label || siteTitle
        ),
        _react2.default.createElement(
            Svg,
            { viewBox: '0 0 641.3 395.1', width: props.width },
            _react2.default.createElement(BirdHead, { fill: props.fill, d: 'M149,257.6c0,0.4-15.1,4.6-33.5,2.9c0,0,18.3,13,44,7c0,0-10.6,11.7-44.7,3c0,0,36.8,32.5,89.9,12   c24-9,18.8-29.1,21.4-41.1c5.6-23.1,38.5-24.8,38.5-24.8c-37.3-10.3-53.1-7.7-65.1-4.3c-21,5.6-26.6,26.1-40.3,31.3   c-22.7,8.6-51.8-7.3-51.8-7.3C107.9,239.6,125.5,260.1,149,257.6z' }),
            _react2.default.createElement(TailsUp, { fill: props.fill, d: 'M20,153.5c10.8,13.2,10.4,29.5,9.9,37.5c-1.1,15.7-15.5,32.9,0.7,61.9c4.8,8.7,18.6,16.6,18.6,16.6   s-7.1-11-8-18.9c-0.9-8,2.9-13.6,2.9-13.6c1.7,22.8,15.1,37.8,27.6,39.2c16.4,1.8,30.9-19.7,32.2-29c4.6-30-21.7-41.6-21.7-41.6   s22,33.2,4.9,42.3c-4.5,2.7-12.2-3.9-10.7-16.5c1.6-12.2-5-18.3-5-18.3s2.1,6.5,0.9,10.3c-1,3.2-4.4,6.4-5.2,9   c-2.3,6.9,0.5,14.1,0.5,14.1s-9-7.5-7.8-27.8c7.4-73.9-43.3-93.4-51.3-96.2c0,0,19.7,14.7,27.2,30.2c11,21.9,10.5,35.5,10.5,35.5   C28.6,139,2,141.8,2,141.8C13.4,146,17.6,150.8,20,153.5z' }),
            _react2.default.createElement(WingsUp, { fill: props.fill, d: 'M65.7,107.8c-3.3,11.6-4.8,21.5-1.2,39.1c9.2,45.3,51,85.3,51,85.3c-50.3-73.2-38.6-108-27-126.1   c18.7-26.1,29.9-44.1,25.6-73.8c-1.8-11-8.3-23.7-23.6-32.3c0,0,16.5,23.3,13.6,47.5c-2.9,24.2-17.8,39-17.8,39   c1.4-6-1.4-24.2-2.1-27.5c-4.9-17.8-20.4-29.5-20.4-29.5S78,50.2,77.5,75.6c0,0,0.3,14.4-3.4,19.9c0,0-4-26.3-20.9-33.8   C53.3,61.8,72.2,85.9,65.7,107.8z' }),
            _react2.default.createElement(TailsDown, { fill: props.fill, d: 'M128.9,293.1c0,0-0.4-0.4-1-1c0.2-0.1,0.3-0.2,0.3-0.2s-0.1,0-0.4,0.1c-0.9-0.8-2.3-2.1-4.2-3.4   c2.9,1.6,4.7,2.9,4.7,2.9c0,0-10.8-14-32.7-15.6c-27.6-1.8-24.9,16.3-51.9,22.2c-3.8,0.6-15.6-1-27-4.2c0,0,22.2,13.2,42.2,9.1   c10.3-2.2,15.9-9,27.2-17.5c8.1-6,18.3-4.7,26.7-1.8c-5.8-1.4-12.8-1.4-20.7,2.3c-9.5,4.4-18.4,23.5-18.4,23.5s-0.3-5.5,0.9-8.6   c1.2-3.1,3.3-6.3,3.3-6.3c-9.3,3.6-5.9,13.6-15.3,22.6c-4.3,4-10.7,4.1-12.7,4c-14.8,0.5-31.1-9.8-31.1-9.8s8.9,11.4,21.3,15.8   c13.1,4.5,23.4,2,29.2-2.8c12.2-10.4,13.7-19.7,24.2-28c16.1-12.7,29.6-6.9,34.1-4.3c-4.1,1-22.6,6.6-29.7,26.5   c-7.9,21.9-20.2,23.6-20.2,23.6s3.1-1.6,7.1-8.9c4.9-8.9,4.9-20.8,4.9-20.8c-14.8,31.8-30.1,32.7-32,32.8c0,0,5-3.9,6.2-4.9   c3.1-3.4,3.5-7,3.5-7s-12.4,15.8-37.8,1.2c-14.6-8-14-22.1-14-22.1s-16.5,21.3,10,41.3c11.3,8.6,34.6,14.6,53.6,7.6   c18-6.3,24.3-29.1,25.5-34.3c4.3-18.5,20.4-32.3,23.4-34.7C128.4,292.7,128.9,293.1,128.9,293.1z' }),
            _react2.default.createElement(WingsDown, { fill: props.fill, d: 'M202.4,335.5c-37.3-5.6-44.1-10.3-44.1-10.3s7.3,1.7,10.3,1.7c5.1,0,20.6-1.3,20.6-1.3s-15-0.4-25.7-4.7   c-15-6-13.3-11.6-8.1-13.7c13.7-4.3,33.4,9.8,33.4,9.8s-6-9.4-15.8-15.8c-12.4-8.6-25.3-8.6-28.3-8.6c-7.3,0-18.4,3.9-18.8,9.4   c-0.9,7.7,21.8,18.4,21.8,18.4s-4.3,0.9-20.1-6.4c0,0,1.7,4.7,6.4,10.7c5.1,6.4,19.7,14.1,27.8,16.3c10.3,3,28.3,6.4,28.3,6.4 c37.3,8.6,61.2,25.3,61.2,25.3c-9.4-13.3-26.6-20.6-26.6-20.6l11.6,3.9c0,0,8.1,2.1,22.7,10.3c16.3,9.4,33.8,28.7,33.8,28.7 S278.6,348.4,202.4,335.5z' }),
            _react2.default.createElement(WingsDownLong, { fill: props.fill, d: 'M400.5,319.6c0,0-58,3.2-105.4-0.5c-72.6-6.9-121.1-24.3-121.1-24.3l0,0c0,0,20.2,19.7,39.2,26.1 c3,1,11,3.5,22.8,7.8c4.2,1.5,9.3,3.4,14.8,5.8c32.5,12.9,34.6,22.4,34.6,22.4s-2.8-14.7-12-21.1c0,0,5.5,1.1,11,3.5 c5.5,2.4,8.6,9.8,8.6,9.8s1.4-2.9-0.6-7.3c-1.4-3.4-6.4-6-7.6-6.6c1.8,0.8,13.6,4.8,62.2,2.9c0,0,76.6-7.5,121.7-9.1 c122.3-4.4,146.6,10.8,146.6,10.8s-23.9-23.3-129.7-23.8C464.9,315.9,400.5,319.6,400.5,319.6z' }),
            _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement(FirstO, { fill: props.fill, d: 'M259.4,261.9c-3.8-0.4-8-0.8-11.8,0.4c-10.5,2.9-18.9,10.1-25.7,18.5c-1.7,2.5-2.5,5.5-3.8,8.4   c0.8,6.3,3.8,10.9,9.3,12.2c4.2,0.8,8.4,1.3,12.6,0.8c13.9-1.7,23.6-9.3,28.6-22.3c1.7-3.8,1.3-6.3-1.3-8.8   c-0.8-0.8-1.7-1.7-1.7-2.5C265.7,264.4,262.7,262.3,259.4,261.9z M255.6,282.5c-5.9,5.5-12.6,9.7-21.5,9.7c-4.6,0-6.7-2.5-5.1-6.3   c4.2-8.8,10.9-15.6,20.6-18.9c1.3-0.4,2.5,0,3.8,0c0,0.4,0,0.4,0,0.8c-4.2,1.7-8.8,2.1-11.8,6.3c3.4-0.4,7.2-0.4,11.4-0.8   c-0.8,1.7-1.7,2.9-2.1,4.2c-0.4,0.8-0.4,2.1-0.4,2.9c1.3,0,2.5,0,3.4-0.8c1.7-1.3,2.9-2.5,4.6-4.2c0.4,0,0.4,0.4,0.8,0.4   C258.1,278.7,257.3,281.2,255.6,282.5z' }),
                _react2.default.createElement(FirstR, { fill: props.fill, d: 'M275.8,304.4c2.9,1.7,5.1-0.8,7.6-6.7c1.7-3.8,2.9-8,5.1-11.4c4.2-7.6,10.5-13.1,18.5-16.4   c2.5-0.8,4.6-0.4,5.9,2.5c0.4,0.8,1.7,1.7,2.5,1.7c0.4,0,1.7-1.3,1.7-2.1c0-2.1,0-4.2-0.4-6.3c0-3.4-2.5-4.6-5.5-4.2   c-2.9,0.8-6.3,1.3-8.8,2.9c-5.1,3.4-10.1,7.6-14.7,10.9c0-0.4,0.4-0.8-0.4-1.7c1.3-2.1,2.5-4.2,3.4-6.7c0.4-1.3-0.4-2.5-0.4-3.8   c-0.8,0.4-2.5,0-3.4,0.8c-1.7,1.7-2.9,3.4-3.8,5.1c-5.1,8.4-7.2,17.3-8,26.9C274.5,298.9,272.4,302.3,275.8,304.4z' }),
                _react2.default.createElement(S, { fill: props.fill, d: 'M334.7,302.7c6.7-0.4,12.6-2.5,17.3-7.2c5.1-5.1,3.8-10.5-3.4-12.6c-0.8-0.4-2.1-0.8-2.9-0.8   c-3.8-0.8-7.2-1.3-11.4-2.1c5.5-6.3,13.9-10.5,18.9-8.8c-0.4,2.1-1.3,4.6-1.7,6.7c-0.4,0.8,0,2.1,0.4,2.5c0,0.4,1.7,0.4,2.1,0   c5.1-4.6,10.1-9.3,14.7-14.3c2.1-2.5,0.8-4.2-2.5-4.2c-2.1,0-4.6,0.4-6.7,0.4c-10.1-0.8-18.5,3.4-26.5,8.4   c-2.9,1.7-5.5,4.6-7.6,7.6c-3.4,4.2-1.3,8.4,3.8,9.3c2.5,0.4,4.6,0.4,7.2,0.8c2.5,0.4,5.1,1.3,7.6,1.7c-2.5,4.2-5.1,5.5-14.3,5.1   c-1.3,0-2.5-0.8-4.2-2.1c-1.3,0.8-3.8,2.1-6.3,4.2c-0.4,0.4-0.8,1.3-0.8,2.1c0.4,0.4,1.3,0.8,2.1,1.3   C325.1,302.7,329.7,303.1,334.7,302.7z' }),
                _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement(I, { fill: props.fill, d: 'M378.5,299.8c0.4,1.3,1.3,2.5,2.1,3.8c1.7-1.3,3.8-1.7,4.2-2.9c2.5-5.1,4.6-10.1,6.3-15.2   c1.7-4.6,2.9-9.3,3.8-13.9c0.4-2.9-1.3-4.6-4.2-4.6c-4.2,0-7.6,2.5-9.3,7.2c-2.9,7.6-5.1,15.6-2.9,23.6   C378.5,298.1,378.5,298.9,378.5,299.8z' }),
                    _react2.default.createElement(IDot, { fill: props.fill, d: 'M386.1,255.1c1.7,0.4,4.2,0,5.5-0.8c4.6-3.8,9.3-8,13.9-11.8c0.4,0,0.8-0.8,1.3-2.1c-1.7,0-2.9,0-4.2-0.4   c-3.8,1.3-7.6,2.5-11.4,3.8c-2.1,0.8-4.6,1.7-6.7,3.4c-1.3,1.3-2.1,3.4-2.1,5.1C382.7,253.4,384.9,254.7,386.1,255.1z' })
                ),
                _react2.default.createElement(Mo, { fill: props.fill, d: 'M400.9,296.8c-0.4,3.8,2.9,5.9,6.7,5.1s5.5-3.4,6.3-6.7c2.5-9.3,9.3-15.6,16-21.5c2.5-2.1,5.5-4.2,8-6.3   c0.4,0.8,0.4,1.3,0,1.7c-2.5,7.2-4.6,14.3-7.2,21.5c-2.1,5.9,2.9,8.4,7.6,7.6c4.6-0.8,7.2-4.2,9.7-8s4.2-8,7.2-11.8   c2.5-3.8,6.3-6.7,9.3-9.7c0.4,0.4,0.4,0.4,0.8,0.8c-0.4,0.8-1.3,1.7-1.7,2.9c-2.9,6.7-5.9,13.5-8.4,20.6c-0.8,2.9-1.7,6.7,1.3,9.3   c3.4,3.4,7.2,5.1,12.2,4.2c5.1-0.8,8.8-3.4,12.6-6.7c1.7-1.7,3.4-3.4,5.1-5.1c2.5,4.6,6.3,5.9,10.5,6.7c6.3,1.3,12.2,0,17.7-2.1   c10.1-3.8,17.3-10.5,20.6-20.6c0-0.8,0.4-2.9,0-4.2c-1.7-3.4-4.2-6.3-5.1-10.1c-0.4-0.8-2.1-1.7-3.4-2.1c-4.6-2.1-8.8-2.1-13.5-0.4   c-10.5,3.4-18.1,10.1-24.8,18.1c-2.5,2.9-4.2,6.3-3.8,10.1c0,0.4,0,1.7-0.4,1.7c-4.2,2.9-8.4,5.5-14.3,5.9c0.4-2.9,0-5.5,0.8-8   c2.1-7.2,4.2-14.3,6.3-21.5c1.7-5.9-2.5-10.5-8-8.8c-5.1,1.7-9.7,4.2-14.3,7.2c-2.5,1.3-4.2,3.4-6.7,5.5c0.8-2.5,1.3-4.2,1.7-5.9   c1.3-4.6-0.8-7.6-5.5-7.6c-5.9-0.4-10.9,2.5-15.2,5.9c-5.1,3.4-9.7,7.2-15.2,11.4c0.4-3.4,1.3-5.9,1.7-8.4c0.4-2.9-0.4-4.2-3.8-4.2   c-2.5,0-4.2,1.3-5.1,3.8c-1.3,4.2-2.5,8-3.4,12.2C402.5,285,401.7,290.9,400.9,296.8z M495.6,285c4.2-8.4,10.5-14.7,19.4-17.7   c1.7-0.4,3.4-0.4,4.6-0.4c0,0.4,0,0.4,0,0.8c-4.2,1.7-8.8,2.1-12.2,5.5c0,0.4,0,0.8,0.4,0.8c3.4-0.4,7.2-0.4,10.9-0.8   c-0.8,1.7-1.7,3.4-2.5,4.6c-0.4,0.8-0.4,1.7-0.4,2.5c0.8,0,2.1,0,2.9-0.4c1.7-1.3,3.4-2.9,4.6-4.2c0.4,0,0.8,0.4,0.8,0.4   c-0.4,2.5-1.7,5.5-3.4,6.7c-5.9,5.1-12.6,9.3-20.6,9.3C495.6,292.2,493.5,289.2,495.6,285z' }),
                _react2.default.createElement(SecondR, { fill: props.fill, d: 'M546.5,302.3c1.7-2.9,2.9-5.9,4.2-9.3c3.8-9.7,10.9-16.8,19.8-21.9c4.2-2.1,5.5-1.7,8.4,2.5   c0.4,0.4,1.3,0.8,2.1,0.8c0.4,0,1.3-0.8,1.7-1.3c1.3-2.5,0-9.3-1.7-10.5c-2.5-2.1-6.3-2.1-8.8-0.4c-6.7,4.2-13.1,8.4-19.4,12.6   c0.4,0.4,0.4,0.4-0.4,0.8c0.8-2.1,2.1-4.2,2.9-6.7c0.4-1.7,0-3.8,0-5.5c-1.7,0.8-3.4,1.7-5.1,2.5c0,0-0.4,0.4-0.4,0.8   c-7.2,10.1-9.3,21.9-10.1,34.1c0,1.3,1.3,2.5,1.7,3.8C543.2,304,545.7,303.5,546.5,302.3z' }),
                _react2.default.createElement(SecondO, { fill: props.fill, d: 'M634.1,270.3c-0.4-0.4-0.4-1.7-0.8-2.5c-0.8-1.7-1.7-4.2-3.4-5.1c-2.5-1.3-5.5-1.7-8-2.5   c-2.9,0.4-5.1,0.8-7.2,1.7c-11.4,3.8-19.8,10.9-26.5,20.2c-5.9,8.4,0.4,18.5,9.3,19.4c3.4,0.4,7.2,0.4,10.5,0   c13.1-2.1,22.7-8.8,27.8-21.5C637.9,277,637.5,273.2,634.1,270.3z M621.9,283.8c-5.9,4.6-12.6,8.8-20.6,8.4c-3.8,0-5.9-2.1-4.2-5.9   c3.8-9.3,10.9-16,20.6-19.4c1.3-0.4,2.5,0,4.2,0.4c-4.2,1.7-8.4,3.4-12.6,5.1c1.7,2.9,3.8,1.3,5.5,1.3c2.1,0,3.8,0,6.3,0   c-0.8,2.1-1.7,3.4-2.5,5.1c-0.4,0.4,0,1.3,0,2.1c0.8,0,1.7,0.4,2.5,0c2.1-1.3,3.8-2.9,5.9-4.6C626.5,279.5,624,282.1,621.9,283.8z' })
            )
        )
    );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapApi = 'http://h18.korsimoro.com/map/';
var ddoApi = 'http://h18.korsimoro.com/did/';
var cardApi = 'http://h18.korsimoro.com/card/';
var registryApi = 'http://h18.korsimoro.com/registry';

var receiveData = function receiveData(lookup, data) {
  return {
    type: 'RECEIVE_DATA',
    data: data,
    lookup: lookup
  };
};
var receiveError = function receiveError() {
  return {
    type: 'RECEIVE_ERROR'
  };
};
var receiveRegistry = function receiveRegistry(data) {
  return {
    type: 'RECEIVE_REGISTRY',
    registry: data
  };
};
var resetOutputBox = exports.resetOutputBox = function resetOutputBox() {
  return {
    type: 'RESET_OUTPUT_BOX'
  };
};
var recordLastValue = exports.recordLastValue = function recordLastValue(key, value) {
  return {
    type: 'RECORD_LAST_VALUE',
    key: key,
    value: value
  };
};

var fetchRegistry = exports.fetchRegistry = function fetchRegistry(dispatch) {
  fetch(registryApi).then(function (response) {
    if (response.status === 200) {
      response.json().then(function (data) {
        dispatch(receiveRegistry(data));
      });
    } else {
      dispatch(receiveError());
    }
  }).catch(function (err) {
    console.log("ERROR FETCHING REGISTRY", err);
    dispatch(receiveError());
  });

  return {
    type: 'LOADING'
  };
};

var lookupMap = exports.lookupMap = function lookupMap(dispatch, sn) {
  var url = mapApi + sn;
  console.log("Fetching Map Data from", url);
  fetch(url).then(function (response) {
    if (response.status === 200) {
      response.json().then(function (data) {
        console.log("GOT DATA:", data);
        dispatch(receiveData('map', data));
      });
    } else {
      dispatch(receiveError());
    }
  }).catch(function (err) {
    console.log("ERROR FETCHING MAP", err);
    dispatch(receiveError());
  });

  return {
    type: 'LOADING'
  };
};
var lookupCard = exports.lookupCard = function lookupCard(dispatch, sn) {
  var url = mapApi + sn;
  console.log("Fetching Card Data from", url);
  fetch(url).then(function (response) {
    if (response.status === 200) {
      response.json().then(function (data) {
        console.log("GOT CARD DATA:", data);
        if (data._t != 'korsimoro-h18') data = {
          _t: "not found"
        };
        dispatch(receiveData('card', data));
      });
    } else {
      dispatch(receiveError());
    }
  }).catch(function (err) {
    console.log("ERROR FETCHING CARD", err);
    dispatch(receiveError());
  });

  return {
    type: 'LOADING'
  };
};

var lookupDDO = exports.lookupDDO = function lookupDDO(dispatch, method, sn) {
  var url = ddoApi + method + "/" + sn;
  console.log("Fetching DDO Data from", url);
  fetch(url).then(function (response) {
    if (response.status === 200) {
      response.json().then(function (data) {
        dispatch(receiveData('ddo', data));
      });
    } else {
      dispatch(receiveError());
    }
  }).catch(function (err) {
    console.log("ERROR FETCHING MAP", err);
    dispatch(receiveError());
  });

  return {
    type: 'LOADING'
  };
};

var submitValues = exports.submitValues = function submitValues(dispatch, values) {
  if (values.lookup === 'ddo') {
    dispatch(lookupDDO(dispatch, values.method, values.sn));
  } else if (values.lookup === 'map') {
    dispatch(lookupMap(dispatch, values.sn));
  } else if (values.lookup === 'card') {
    dispatch(lookupCard(dispatch, values.sn));
  }
  return {
    type: 'SUBMIT_VALUES',
    values: values
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-object-inspector");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutIndex = function AboutIndex(props) {
  return _react2.default.createElement(
    _About2.default,
    { title: 'Index' },
    _react2.default.createElement(
      'dl',
      null,
      _react2.default.createElement(
        'dt',
        null,
        'Korsimoro'
      ),
      _react2.default.createElement(
        'dd',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://en.wikipedia.org/wiki/Korsimoro_Department' },
          'Korsimoro'
        ),
        ' is both a town and district in ',
        _react2.default.createElement(
          'a',
          { href: 'https://en.wikipedia.org/wiki/Burkina_Faso' },
          'Burkin Faso'
        ),
        ', just outside of ',
        _react2.default.createElement(
          'a',
          { href: 'https://en.wikipedia.org/wiki/Ouagadougou' },
          'Ougadougou'
        ),
        ', which, until 2017, hosted ',
        _react2.default.createElement(
          'a',
          { href: 'https://en.wikipedia.org/wiki/Panafrican_Film_and_Television_Festival_of_Ouagadougou' },
          'FESPACO'
        ),
        '.',
        _react2.default.createElement('br', null),
        'Korsimoro is also the name of a ',
        _react2.default.createElement(
          'a',
          { href: 'http://korsimoro.com' },
          'domain'
        ),
        'serving to organize projects pertaining to the digital and decentralized identity infrastructure and community.'
      ),
      _react2.default.createElement(
        'dt',
        null,
        _react2.default.createElement(
          'a',
          { href: '/about/h18' },
          'Helsinki 2018'
        )
      ),
      _react2.default.createElement(
        'dd',
        null,
        'How to introduce the convergence in Helsinki this August?'
      ),
      _react2.default.createElement(
        'dt',
        null,
        _react2.default.createElement(
          'a',
          { href: '/about/h18cards' },
          'H18 Cards'
        )
      ),
      _react2.default.createElement(
        'dd',
        null,
        'If you are here you most likely received one of the h18 business cards.'
      ),
      _react2.default.createElement(
        'dt',
        null,
        _react2.default.createElement(
          'a',
          { href: '' },
          'DID Resolution'
        )
      ),
      _react2.default.createElement('dd', null),
      _react2.default.createElement(
        'dt',
        null,
        _react2.default.createElement(
          'a',
          { href: '/about/usecases' },
          'STF Test Cases'
        )
      ),
      _react2.default.createElement('dd', null),
      _react2.default.createElement(
        'dt',
        null,
        _react2.default.createElement(
          'a',
          { href: '' },
          'H18 DID Resolution Method'
        )
      ),
      _react2.default.createElement('dd', null)
    )
  );
};

AboutIndex = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(AboutIndex);

exports.default = AboutIndex;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutH18 = function AboutH18(props) {
  return _react2.default.createElement(
    _About2.default,
    { title: 'Helsinki 2018' },
    _react2.default.createElement(
      'h4',
      null,
      'Why Helsinki 2018?'
    ),
    _react2.default.createElement(
      'dl',
      null,
      _react2.default.createElement(
        'dt',
        null,
        'MyData2018'
      ),
      _react2.default.createElement('dd', null),
      _react2.default.createElement(
        'dt',
        null,
        'STF w/ DSTF'
      ),
      _react2.default.createElement('dd', null),
      _react2.default.createElement(
        'dt',
        null,
        'Use cases'
      ),
      _react2.default.createElement('dd', null),
      _react2.default.createElement(
        'dt',
        null,
        'Quirky IoT'
      ),
      _react2.default.createElement('dd', null)
    )
  );
};

AboutH18 = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(AboutH18);

exports.default = AboutH18;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutH18Cards = function AboutH18Cards(props) {
  return _react2.default.createElement(
    _About2.default,
    { title: 'Helsinki 2018 Cards and NoT - the Non-Internet of Things' },
    _react2.default.createElement(
      'h4',
      null,
      'The Story of the Cardish'
    ),
    _react2.default.createElement(
      _TextLink2.default,
      { to: '#cutthecrap', style: { fontSize: "50%" } },
      'Tech Specs'
    ),
    _react2.default.createElement(
      'p',
      null,
      'It turns out that many things which have identities are not smart phones.  Many things lack both human biometrics and secure cryptographic co-processing enclaves.  Such things often lack GPS tracking signals, and you can not easily run their fingerprints through an AFIS system.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Yet they exist, are unique, are identifiable, can be owned or guarded, die or pass on, and in every sense qualify for identity.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Despite their limitations, these cards continue to exist - quite happily - sitting and carding around with their cardly friends, hanging out in wallets and on desktops, nestled down in the cracks of sofa cushions or resting, forgotten, on taxi seats or the tables of conference venues.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Every one of these cards was born at',
      _react2.default.createElement(
        _TextLink2.default,
        { to: 'http://www.nuntapun.com/' },
        'Nuntapun Printing'
      ),
      '(located',
      _react2.default.createElement(
        _TextLink2.default,
        { href: ',19.64z/data=!4m5!3m4!1s0x30da305971986779:0x380cd0d910a54e67!8m2!3d18.7558546!4d98.9681593' },
        'here'
      ),
      '). they are destined to travel the world before becoming irrelevant, lost, or discarded.  This is the nature of cardish life and death.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Current tools are too difficult to use to model the life of these noble little cardish folk.  While they have an identity, are unique in the world, and could tell stories to their cardly children - there is still a digital divide between their reality and the world of managed, let alone decentralized, identity systems.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The cardish represent the forgotten, the disenfranchised, and the discluded identities.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Any identity management ecosystem capable of managing my international KYC information or protecting me from the intrusions of an abusive surveilance state should be up to the task of managing the identity of the cardish.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Using the cardish as stand-ins for more serious and weighty identities, such as those of People, Pets, Corporations, and Governments, we hope to map out the technical details of what it takes to track, manage, and sustain identity.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Along the way we hope to learn a lot about the world of DIF and understand which tools are card-positive and which are cardist. Which identity systems have implicit reliance upon the biometrics or cryptographic enclaves of machines manufactured by a limited set of manufacturers?'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The cardish represent the pinnacle of those who will never, ever, be able to express agency over their private keys.  I have yet to meet a card that can even sign on to a macbook pro using touch id. I have also yet to meet a card remotely interested in such pedestrian matters as managing a complex system of private public-key-infrastructure.'
    ),
    _react2.default.createElement('a', { name: 'cutthecrap' }),
    _react2.default.createElement('br', null),
    'On the more serious side....',
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement('li', null)
    )
  );
};

AboutH18Cards = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(AboutH18Cards);

exports.default = AboutH18Cards;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutUseCases = function AboutUseCases(props) {
  return _react2.default.createElement(
    _About2.default,
    { title: 'STF2/DSTF Reference Identity Pool' },
    _react2.default.createElement(
      'h4',
      null,
      'STF2/DSTF Reference Identity Pool & Use Case Definitions'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Talking about identity, in all of it\'s myriad facets, can be either stupendously simple or incredibly complicated.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'For anyone reading this, it is likely that your sense of identity, your sense of ',
      _react2.default.createElement(
        'i',
        null,
        'I'
      ),
      ', is so obvious and essential that we give it names like ',
      _react2.default.createElement(
        'i',
        null,
        'Soul'
      ),
      ' and ',
      _react2.default.createElement(
        'i',
        null,
        'Consciousness'
      ),
      '.  We live by a code of',
      _react2.default.createElement(
        _TextLink2.default,
        { to: 'https://en.wikipedia.org/wiki/Cogito,_ergo_sum' },
        'Cogito, ergo sum'
      ),
      ' and all that.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Yet, once we start asking ourselves about others, and about the things around us, the world gets very complicated, very quickly.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Edge cases spring up, issues of personal agency arise.  While it remains clear that each of us ',
      _react2.default.createElement(
        'i',
        null,
        'Sapiens'
      ),
      ' is unique, and has an identity - is the same true of our pets, our livestock, our children?'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/?sn=00646' },
          'Pet'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/?sn=04096' },
          'Government'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/?sn=49152' },
          'Dependent'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/?sn=52348' },
          'Guardianship'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        'Organizations',
        _react2.default.createElement(
          'ol',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/?sn=64738' },
              'Corporation'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/?sn=65534' },
              'Accreditation Bureau'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/?sn=65535' },
              'NGO'
            )
          )
        )
      )
    )
  );
};

AboutUseCases = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(AboutUseCases);

exports.default = AboutUseCases;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutH18Method = function AboutH18Method(props) {
  return _react2.default.createElement(
    _About2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'AboutH18Method'
    )
  );
};

AboutH18Method = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(AboutH18Method);

exports.default = AboutH18Method;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _About = __webpack_require__(8);

var _About2 = _interopRequireDefault(_About);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutUniversalResolver = function AboutUniversalResolver(props) {
  return _react2.default.createElement(
    _About2.default,
    { title: 'DID Document Resolution' },
    _react2.default.createElement(
      'h4',
      null,
      'DID Resolution'
    ),
    _react2.default.createElement(
      'p',
      null,
      'DIDs are the backbone of decentralized identity, and are the medium through which we can begin to crack the shackles of the managed identity citadels which constrain our lives. But a DID by itself is meaningless, and the first step that needs to be taken to make use of a DID is the extraction of information about the identity.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The informational meat of a DID is in the DID Document, and the act of obtaining the DID Document (or portions of it) when given a DID is DID resolution.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'DID resolution is defined by sub-protocols known as methods, and as such DID resolution, generally speaking, involves a wide range of technologies and can be extremely complex. However, at a very abstract level, DIDs are indexes into a simple, abstract, massive, key-value store. Every DID, points to a statment of Truth about the identified.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'The ',
      _react2.default.createElement(
        _TextLink2.default,
        { to: 'https://github.com/decentralized-identity' },
        'DIF\'s source repository'
      ),
      ' contains a universal resolver, with a front end that can be used right now at',
      _react2.default.createElement(
        _TextLink2.default,
        { href: 'http://uniresolver.io' },
        'uniresolver.io'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'As part of Korsimoro\'s operations assessment, we are deploying an independent instance of universal resolver code base.  As part of the project we are adding a toy resolver for the ',
      _react2.default.createElement(
        _TextLink2.default,
        { to: '/about/h18method' },
        'h18'
      ),
      'resolution method.  We are also implementing a simple React front end as a PoC exercise of the independence of the universal resolver from specific consumers.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This work is effectively a QA/testing exercise, with an eye towards making these complicated toolkits easier to use.  We hope that, in so doing, we can incubate interest and action outside of the immediate DIF community.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This effort will:'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        'Explore and document deployment requirements'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Allow us to document and fix any bugs'
      ),
      _react2.default.createElement(
        'li',
        null,
        'Explore the process of adding a non-registered method'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('img', {
        src: '/github/universal-resolver/docs/figures/architecture.png'
      }),
      '(citation : https://github.com/decentralized-identity/universal-resolver/blob/master/docs/architecture-drivers.md)'
    )
  );
};

AboutUniversalResolver = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(AboutUniversalResolver);

exports.default = AboutUniversalResolver;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(31);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(32);

var _reactStaticRoutes = __webpack_require__(33);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(59);

var _redux2 = _interopRequireDefault(_redux);

var _Contour = __webpack_require__(65);

var _Contour2 = _interopRequireDefault(_Contour);

var _basicElements = __webpack_require__(9);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Contour2.default, null),
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _redux2.default },
      _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          _basicElements.Section,
          { className: 'content' },
          _react2.default.createElement(_reactStaticRoutes2.default, null)
        )
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(34);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(35);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(36);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(37);

var _reactUniversalComponent = __webpack_require__(38);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/lookup/Home',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/lookup/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/lookup/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/lookup/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/about/AboutIndex',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/containers/about/AboutIndex', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/about/AboutIndex');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/containers/about/AboutIndex';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/about/AboutH18',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/containers/about/AboutH18', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/about/AboutH18');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/containers/about/AboutH18';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/about/AboutH18Cards',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/containers/about/AboutH18Cards', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/about/AboutH18Cards');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/containers/about/AboutH18Cards';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/about/AboutUseCases',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/containers/about/AboutUseCases', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/about/AboutUseCases');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/containers/about/AboutUseCases';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/about/AboutH18Method',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/containers/about/AboutH18Method', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/about/AboutH18Method');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/containers/about/AboutH18Method';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/about/AboutUniversalResolver',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/containers/about/AboutUniversalResolver', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/about/AboutUniversalResolver');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/containers/about/AboutUniversalResolver';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/korsimoro/Desktop/korsimoro/repos/iglu/h18/react-site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 7

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(39);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(40);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(41);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = exports.btnOutline = exports.btnColor = exports.SelectWrapper = exports.InputGroup = exports.FormGroup = exports.Label = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: block;\n    font-size: ', ';\n    text-transform: uppercase;\n    margin-bottom: 6px;\n'], ['\n    display: block;\n    font-size: ', ';\n    text-transform: uppercase;\n    margin-bottom: 6px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: table;\n    width: 100%;\n    margin: 0 0;\n    padding: 0 0;\n    border-top: 1px solid ', ';\n    border-bottom: 1px solid ', ';\n'], ['\n    display: table;\n    width: 100%;\n    margin: 0 0;\n    padding: 0 0;\n    border-top: 1px solid ', ';\n    border-bottom: 1px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: table-cell;\n    vertical-align: bottom;\n    padding: 0 9px;\n    &:first-of-type {\n        padding-left: 0;\n        width: 20%;\n    }\n\n    &:nth-child(2) {\n        width: 60%;\n    }\n\n    &:last-of-type {\n        padding-right: 0;\n        width: 24%;\n    }\n'], ['\n    display: table-cell;\n    vertical-align: bottom;\n    padding: 0 9px;\n    &:first-of-type {\n        padding-left: 0;\n        width: 20%;\n    }\n\n    &:nth-child(2) {\n        width: 60%;\n    }\n\n    &:last-of-type {\n        padding-right: 0;\n        width: 24%;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: table-cell;\n    vertical-align: bottom;\n    padding-right: 9px;\n    position: relative;\n    z-index: 2;\n\n\n    select {\n        width: 100%;\n    }\n\n    &:before {\n        content: \'\';\n        top: 60%;\n        right: 18px;\n        position: absolute;\n        width: 0px;\n        height: 0px;\n        background-color: ', ';\n        border-top: 12px solid ', ';\n        border-left: 12px solid transparent;\n        border-right: 12px solid transparent;\n        z-index: 0;\n    }\n'], ['\n    display: table-cell;\n    vertical-align: bottom;\n    padding-right: 9px;\n    position: relative;\n    z-index: 2;\n\n\n    select {\n        width: 100%;\n    }\n\n    &:before {\n        content: \'\';\n        top: 60%;\n        right: 18px;\n        position: absolute;\n        width: 0px;\n        height: 0px;\n        background-color: ', ';\n        border-top: 12px solid ', ';\n        border-left: 12px solid transparent;\n        border-right: 12px solid transparent;\n        z-index: 0;\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n        background-color: ', ';\n        color: ', ';\n    '], ['\n        background-color: ', ';\n        color: ', ';\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        border-color: ', ';\n        color: ', ';\n    '], ['\n        border-color: ', ';\n        color: ', ';\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    padding: 6px 8px;\n    font-size: 14px;\n    min-height: 40px;\n    display: inline-block;\n    vertical-align: middle;\n    border-color: transparent;\n    box-shadow: none;\n    color: currentColor;\n    background-color: transparent;\n    ', ';\n    font-weight: 700;\n    border-radius: 2px;\n    cursor: pointer;\n    transition: background-color, border-color 0.2s ease-in-out;\n    margin-right: 9px;\n    -webkit-appearance: none;\n\n    &:hover,\n    &:active {\n        opacity: 1;\n    }\n\n    &:focus {\n        opacity: initial;\n    }\n\n    &:active {\n        transform: translateY(1px);\n    }\n\n    &:disabled {\n        opacity: 0.5;\n        cursor: default;\n\n        &:active {\n            transform: translateY(0);\n        }\n    }\n\n    ', ';\n'], ['\n    padding: 6px 8px;\n    font-size: 14px;\n    min-height: 40px;\n    display: inline-block;\n    vertical-align: middle;\n    border-color: transparent;\n    box-shadow: none;\n    color: currentColor;\n    background-color: transparent;\n    ', ';\n    font-weight: 700;\n    border-radius: 2px;\n    cursor: pointer;\n    transition: background-color, border-color 0.2s ease-in-out;\n    margin-right: 9px;\n    -webkit-appearance: none;\n\n    &:hover,\n    &:active {\n        opacity: 1;\n    }\n\n    &:focus {\n        opacity: initial;\n    }\n\n    &:active {\n        transform: translateY(1px);\n    }\n\n    &:disabled {\n        opacity: 0.5;\n        cursor: default;\n\n        &:active {\n            transform: translateY(0);\n        }\n    }\n\n    ', ';\n']);

var _reactEmotion = __webpack_require__(4);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _propStyles2 = __webpack_require__(15);

var _propStyles3 = _interopRequireDefault(_propStyles2);

var _variables = __webpack_require__(3);

var _polished = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = exports.Label = (0, _reactEmotion2.default)('label')(_templateObject, (0, _polished.rem)('12px', '16px'));

var FormGroup = exports.FormGroup = (0, _reactEmotion2.default)('div')(_templateObject2, _variables.palette.black, _variables.palette.black);

var InputGroup = exports.InputGroup = (0, _reactEmotion2.default)('div')(_templateObject3);

var SelectWrapper = exports.SelectWrapper = (0, _reactEmotion2.default)('div')(_templateObject4, _variables.palette.gray, _variables.palette.black);

var btnColor = exports.btnColor = {
    green: function green() {
        return (0, _reactEmotion.css)(_templateObject5, _variables.palette.green, _variables.palette.black);
    },

    greenNeon: function greenNeon() {
        return (0, _reactEmotion.css)(_templateObject5, _variables.palette.greenNeon, _variables.palette.black);
    },

    greenDarker: function greenDarker() {
        return (0, _reactEmotion.css)(_templateObject5, _variables.palette.greenDarker, _variables.palette.black);
    },

    grayDarkest: function grayDarkest() {
        return (0, _reactEmotion.css)(_templateObject5, _variables.palette.grayDarkest, _variables.palette.white);
    }
};

var btnOutline = exports.btnOutline = {
    green: function green() {
        return (0, _reactEmotion.css)(_templateObject6, _variables.palette.green, _variables.palette.green);
    },

    greenNeon: function greenNeon() {
        return (0, _reactEmotion.css)(_templateObject6, _variables.palette.greenNeon, _variables.palette.greenNeon);
    },

    greenDarker: function greenDarker() {
        return (0, _reactEmotion.css)(_templateObject6, _variables.palette.greenDarker, _variables.palette.greenDarker);
    },

    grayDarker: function grayDarker() {
        return (0, _reactEmotion.css)(_templateObject6, _variables.palette.grayDarkest, _variables.palette.grayDarkest);
    }

};

var Button = exports.Button = (0, _reactEmotion2.default)('button')(_templateObject7, _variables.family.raleway, (0, _propStyles3.default)(_defineProperty({
    green: [btnColor.green],
    greenNeon: [btnColor.greenNeon],
    greenDarker: [btnColor.greenDarker],
    greenOutline: [btnOutline.green]
}, 'greenNeon', [btnOutline.greenNeon])));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardLoad = function CardLoad(props) {
    return _react2.default.createElement(
        'div',
        { style: { marginBottom: "10px" } },
        _react2.default.createElement(
            _reactStatic.Link,
            { to: '/about/h18cards' },
            'Read about the Helsinki 2018 cards.'
        ),
        _react2.default.createElement('br', null)
    );
};

CardLoad = (0, _reactRedux.connect)(function (state) {
    return _extends({}, state);
}, function (dispatch) {
    return {};
})(CardLoad);

exports.default = CardLoad;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _NotFound = __webpack_require__(45);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _JsonDisplay = __webpack_require__(46);

var _JsonDisplay2 = _interopRequireDefault(_JsonDisplay);

var _ServerError = __webpack_require__(47);

var _ServerError2 = _interopRequireDefault(_ServerError);

var _NotSupported = __webpack_require__(48);

var _NotSupported2 = _interopRequireDefault(_NotSupported);

var _Welcome = __webpack_require__(49);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Loading = __webpack_require__(50);

var _Loading2 = _interopRequireDefault(_Loading);

var _MapDisplayBox = __webpack_require__(51);

var _MapDisplayBox2 = _interopRequireDefault(_MapDisplayBox);

var _CardDisplayBox = __webpack_require__(57);

var _CardDisplayBox2 = _interopRequireDefault(_CardDisplayBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBody(lookup, content) {
  if (content === "notfound") {
    return _react2.default.createElement(_NotFound2.default, null);
  } else if (content === "notsupported") {
    return _react2.default.createElement(_NotSupported2.default, null);
  } else if (content === 'error') {
    return _react2.default.createElement(_ServerError2.default, null);
  } else if (content === 'json') {
    if (lookup === 'map') {
      return _react2.default.createElement(_MapDisplayBox2.default, null);
    } else if (lookup === 'card') {
      return _react2.default.createElement(_CardDisplayBox2.default, null);
    }
    return _react2.default.createElement(_JsonDisplay2.default, null);
  }
  return _react2.default.createElement(_Welcome2.default, null);
}

var OutputBox = function OutputBox(props) {
  var server = props.server,
      qrcode = props.qrcode,
      form = props.form;

  console.log("OUTPUT BOX : SERVER =", server, props, form);
  if (server.loading) {
    return _react2.default.createElement(_Loading2.default, null);
  }
  if (qrcode.card_load) {
    return _react2.default.createElement(
      'div',
      null,
      getBody(server.lookup, server.display)
    );
  } else {
    return getBody(server.lookup, server.display);
  }
};

OutputBox = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(OutputBox);

exports.default = OutputBox;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(props) {
  var did = "did:" + props.form.lookupForm.values.method + ":" + props.form.lookupForm.values.sn;
  var str = function (x) {
    if (x === 'map') return "Use Case";
    if (x === 'card') return "H18 Card Data";
    return "DID Document";
  }(props.form.lookupForm.values.lookup);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Not Found'
    ),
    'Unable to find ',
    str,
    ' for ',
    did,
    '.'
  );
};

NotFound = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(NotFound);

exports.default = NotFound;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    padding: 18px;\n    background: ', ';\n'], ['\n    font-size: ', ';\n    padding: 18px;\n    background: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactObjectInspector = __webpack_require__(20);

var _reactObjectInspector2 = _interopRequireDefault(_reactObjectInspector);

var _reactEmotion = __webpack_require__(4);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _variables = __webpack_require__(3);

var _polished = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Pre = (0, _reactEmotion2.default)('pre')(_templateObject, (0, _polished.rem)('14px', '16px'), _variables.palette.grayDarker);

function getHeader(type) {
  if (type === 'ddo') {
    return _react2.default.createElement(
      'div',
      { style: { marginBottom: "10px" } },
      'DID Document'
    );
  }
  return _react2.default.createElement(
    'span',
    null,
    'Unknown Document'
  );
}

var JsonDisplay = function JsonDisplay(props) {
  var server = props.server,
      output = props.output;

  return _react2.default.createElement(
    'div',
    null,
    getHeader(server.lookup),
    _react2.default.createElement(_reactObjectInspector2.default, { data: server.output, initialExpandedPaths: ["*", "*.*", "*.*.*", "*.*.*.*"] })
  );
};

JsonDisplay = (0, _reactRedux.connect)(function (state) {
  return {
    server: state.server,
    initialValues: { output: '' }
  };
}, function (dispatch) {
  return {};
})(JsonDisplay);

exports.default = JsonDisplay;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerError = function ServerError(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Server Error'
        )
    );
};

ServerError = (0, _reactRedux.connect)(function (state) {
    return {};
}, function (dispatch) {
    return {};
})(ServerError);

exports.default = ServerError;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotSupported = function NotSupported(props) {
    console.log("NOT SUPPORTED PROPS:", props);
    var method = props.method;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h4',
            null,
            method,
            ' DID resolution method not yet supported.'
        ),
        'As of August, 2018, only h18 lookups are supported.  We are in the process of deploying an instance of the ',
        _react2.default.createElement(
            'a',
            { href: '' },
            'Universal Resolver'
        ),
        '. This work is part of our operational analysis and support research. Decentralized identity requires strong and widespread deployments of DID resolution, along with the ability to integrate informal and non-W3C registered DID methods, such as h18.',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'a',
            { href: '' },
            'Read more about the Korsimoro/Universal Resolver effort.'
        )
    );
};

NotSupported = (0, _reactRedux.connect)(function (state) {
    return _extends({}, state.server);
}, function (dispatch) {
    return {};
})(NotSupported);

exports.default = NotSupported;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _TextLink = __webpack_require__(6);

var _TextLink2 = _interopRequireDefault(_TextLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/decentralized-identity/universal-resolver/blob/master/docs/architecture-drivers.md

var Welcome = function Welcome(props) {
    return _react2.default.createElement(
        'div',
        null,
        'This utility is part of a',
        _react2.default.createElement(
            _TextLink2.default,
            { to: '/about/resolver' },
            'testbed for DID resolution and Universal Resolver'
        ),
        ' and a ',
        _react2.default.createElement(
            _TextLink2.default,
            { to: '/about/usecases' },
            'testbed for STF2'
        ),
        '.'
    );
};

Welcome = (0, _reactRedux.connect)(function (state) {
    return _extends({}, state);
}, function (dispatch) {
    return {};
})(Welcome);

exports.default = Welcome;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(props) {
  var did = "did:" + props.form.lookupForm.values.method + ":" + props.form.lookupForm.values.sn;
  var str = function (x) {
    if (x === 'map') return "Use Case";
    if (x === 'card') return "H18 Card Data";
    return "DID Document";
  }(props.form.lookupForm.values.lookup);
  return _react2.default.createElement(
    'div',
    null,
    'Loading ',
    str,
    ' for ',
    did,
    '.'
  );
};

Loading = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(Loading);

exports.default = Loading;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactJsonPretty = __webpack_require__(7);

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _H18Card = __webpack_require__(52);

var _H18Card2 = _interopRequireDefault(_H18Card);

var _Guardianship = __webpack_require__(53);

var _Guardianship2 = _interopRequireDefault(_Guardianship);

var _Dependency = __webpack_require__(54);

var _Dependency2 = _interopRequireDefault(_Dependency);

var _Organization = __webpack_require__(55);

var _Organization2 = _interopRequireDefault(_Organization);

var _Pet = __webpack_require__(56);

var _Pet2 = _interopRequireDefault(_Pet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBody(type) {
    if (type === 'korsimoro-h18') {
        return _react2.default.createElement(_H18Card2.default, null);
    } else if (type === 'guardianship') {
        return _react2.default.createElement(_Guardianship2.default, null);
    } else if (type === 'dependent') {
        return _react2.default.createElement(_Dependency2.default, null);
    } else if (type === 'organization') {
        return _react2.default.createElement(_Organization2.default, null);
    } else if (type === 'pet') {
        return _react2.default.createElement(_Pet2.default, null);
    }
    return null;
}

var MapDisplayBox = function MapDisplayBox(props) {
    var server = props.server,
        form = props.form;

    var data = server.output;
    var type = data._t;
    var body = getBody(type);
    var id = form.lookupForm.values.sn;
    if (body !== null) {
        return _react2.default.createElement(
            'div',
            null,
            'H18 Use Case Metadata for did:h18:',
            id,
            _react2.default.createElement('br', null),
            body
        );
    }
    return _react2.default.createElement(_reactJsonPretty2.default, { id: 'fallback-json', json: server.output });
};

MapDisplayBox = (0, _reactRedux.connect)(function (state) {
    return _extends({}, state);
}, function (dispatch) {
    return {};
})(MapDisplayBox);

exports.default = MapDisplayBox;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactJsonPretty = __webpack_require__(7);

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H18Card = function H18Card(props) {
  var server = props.server,
      form = props.form;

  var id = form.lookupForm.values.sn;
  var data = server.output;
  var url = "http://h18.korsimoro.com/assets/" + id + "/" + data.photo;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { float: "right" } },
      _react2.default.createElement('img', { width: '200', height: '200', src: url })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        { style: { marginTop: 0 } },
        'H18Card : ',
        data.name
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Why are H18Cards important for digital identity?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement('dt', null),
        _react2.default.createElement('dd', null)
      )
    )
  );
};

H18Card = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(H18Card);

exports.default = H18Card;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactJsonPretty = __webpack_require__(7);

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Guardianship = function Guardianship(props) {
    var server = props.server,
        output = props.output;

    return _react2.default.createElement(
        'div',
        null,
        'Guardianship'
    );
};

Guardianship = (0, _reactRedux.connect)(function (state) {
    return {
        server: state.server,
        initialValues: { output: '' }
    };
}, function (dispatch) {
    return {};
})(Guardianship);

exports.default = Guardianship;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactJsonPretty = __webpack_require__(7);

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dependency = function Dependency(props) {
  var server = props.server,
      form = props.form;

  var id = form.lookupForm.values.sn;
  var data = server.output;
  var url = "http://h18.korsimoro.com/assets/" + id + "/" + data.photo;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { float: "right" } },
      _react2.default.createElement('img', { width: '200', height: '200', src: url })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        { style: { marginTop: 0 } },
        'Dependent : ',
        data.name
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Issues facing dependents?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Dependency vs. Ownership vs. Guardianship'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'Exactly how, in terms of a framework like the',
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/about/stf' },
            'Sovrin Trust Framework'
          ),
          ' is this little animal different from, say, a Pet or Livestock - which can be owned, and how is it different from a Refugee, which is granted and identity which is managed, most likely, by an Organization, rather than a Person.'
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Non-Technical, Non-Device oriented lives'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'Try as you might, little tyke probably won\'t do the right thing signing up for uPort.  They may have better luck with bitcoin, Sovrin, or LifeId, but the chances are slim that they can make it on their own.'
        )
      )
    )
  );
};

Dependency = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(Dependency);

exports.default = Dependency;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactJsonPretty = __webpack_require__(7);

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Organization = function Organization(props) {
  var server = props.server,
      form = props.form;

  var id = form.lookupForm.values.sn;
  var data = server.output;
  var url = "http://h18.korsimoro.com/assets/" + id + "/" + data.photo;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { float: "right" } },
      _react2.default.createElement('img', { width: '200', height: '200', src: url })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        { style: { marginTop: 0 } },
        'Organization : ',
        data.name
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Why are Organizations important for digital identity?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement('dt', null),
        _react2.default.createElement('dd', null)
      )
    )
  );
};

Organization = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(Organization);

exports.default = Organization;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactJsonPretty = __webpack_require__(7);

var _reactJsonPretty2 = _interopRequireDefault(_reactJsonPretty);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pet = function Pet(props) {
  var server = props.server,
      form = props.form;

  var id = form.lookupForm.values.sn;
  var data = server.output;
  var url = "http://h18.korsimoro.com/assets/" + id + "/" + data.photo;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: { float: "right" } },
      _react2.default.createElement('img', { width: '200', height: '200', src: url })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        { style: { marginTop: 0 } },
        'Pet : ',
        data.name
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'Why are pets important for digital identity?',
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Microchip registration'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'People routinely register their pets with an identity service by implanting them with an RFID source placed under the skin.  This sort of identity tagging establishes an'
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Dependency and Guardianship'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'A pet is both a'
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Non-Technical, Non-Device oriented lives'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'Pets are non-technical creatures incapable of registering their identities on their phones.  In terms of identity, they are like children, except that they can be clearly and unambiguously owned.'
        ),
        _react2.default.createElement(
          'dt',
          null,
          'You can\'t own ',
          _react2.default.createElement(
            'i',
            null,
            'Sapiens'
          ),
          ', but you can own the rest'
        ),
        _react2.default.createElement('dd', null)
      )
    )
  );
};

Pet = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(Pet);

exports.default = Pet;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactObjectInspector = __webpack_require__(20);

var _reactObjectInspector2 = _interopRequireDefault(_reactObjectInspector);

var _reactEmotion = __webpack_require__(4);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _variables = __webpack_require__(3);

var _polished = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardDisplay = function CardDisplay(props) {
  var server = props.server,
      form = props.form;

  var id = form.lookupForm.values.sn;
  var url = "http://h18.korsimoro.com/card/" + id + ".png";
  return _react2.default.createElement(
    'div',
    null,
    'H18 Card',
    _react2.default.createElement('br', null),
    _react2.default.createElement('hr', null),
    _react2.default.createElement('img', { src: url, width: '100%' })
  );
};

CardDisplay = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state);
}, function (dispatch) {
  return {};
})(CardDisplay);

exports.default = CardDisplay;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderField = exports.minLengthLimit = exports.maxLengthLimit = exports.alphaNumeric = exports.required = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = exports.required = function required(value) {
    return value || typeof value === 'number' ? undefined : 'Required';
};

var alphaNumeric = exports.alphaNumeric = function alphaNumeric(value) {
    return value && /[^a-zA-Z0-9]/i.test(value) ? 'Only alphanumeric characters' : undefined;
};

var maxLength = function maxLength(max) {
    return function (value) {
        return value && value.length > max ? 'Must be no more than ' + max + ' characters and no whitespace' : undefined;
    };
};
var maxLengthLimit = exports.maxLengthLimit = maxLength(512);

var minLength = function minLength(min) {
    return function (value) {
        return value && value.length < min ? 'Must be at least ' + min + ' characters and no whitespace' : undefined;
    };
};
var minLengthLimit = exports.minLengthLimit = minLength(1);

var renderField = exports.renderField = function renderField(_ref) {
    var input = _ref.input,
        label = _ref.label,
        type = _ref.type,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error,
        warning = _ref$meta.warning;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'label',
            null,
            label
        ),
        _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type })),
            touched && (error && _react2.default.createElement(
                'span',
                null,
                error
            ) || warning && _react2.default.createElement(
                'span',
                null,
                warning
            ))
        )
    );
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(28);

var _reducers = __webpack_require__(60);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window === 'undefined') {
  global.window = {};
}

/* eslint-disable no-underscore-dangle */
var store = (0, _redux.createStore)(_reducers2.default, {}, // initial state
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

exports.default = store;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(28);

var _reduceReducers = __webpack_require__(61);

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

var _reduxForm = __webpack_require__(11);

var _server = __webpack_require__(62);

var _server2 = _interopRequireDefault(_server);

var _qrcode = __webpack_require__(63);

var _qrcode2 = _interopRequireDefault(_qrcode);

var _cache = __webpack_require__(64);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reducers
var reducer = (0, _redux.combineReducers)({
  server: _server2.default,
  qrcode: _qrcode2.default,
  cache: _cache2.default,
  form: (0, _reduceReducers2.default)(_reduxForm.reducer)
});

exports.default = reducer;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("reduce-reducers");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  display: 'welcome',
  method: undefined,
  message: undefined,
  output: undefined,
  lookup: undefined,
  loading: false,
  registry: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'RESET_OUTPUT_BOX':
      {
        return _extends({}, state, initialState);
      }
    case 'LOADING':
      {
        console.log("HANDLE LOADING");
        return _extends({}, state, {
          loading: true
        });
      }
    case 'RECEIVE_REGISTRY':
      {
        console.log("GOT REGISTRY");
        return _extends({}, state, {
          loading: false,
          registry: action.registry
        });
      }
    case 'RECEIVE_DATA':
      console.log("RECEIVED DATA", action.data);
      if (action.data._t === 'not found') {
        return _extends({}, state, {
          lookup: action.lookup,
          display: "notfound",
          loading: false
        });
      }
      if (action.data._t === 'not supported') {
        return _extends({}, state, {
          lookup: action.lookup,
          display: "notsupported",
          method: action.data._v,
          message: action.data.message,
          loading: false
        });
      }
      return _extends({}, state, {
        display: "json",
        output: action.data,
        loading: false,
        lookup: action.lookup
      });
    case 'RECEIVE_ERROR':
      return _extends({}, state, {
        display: "error",
        loading: false
      });

    default:
      return state;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  card_load: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'INDICATE_CARD_LOAD':
      return _extends({}, state, {
        card_load: true
      });

    default:
      return state;
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  sn: undefined,
  lookup: undefined,
  method: undefined
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'RECORD_LAST_VALUE':
      {
        var s = _extends({}, state);
        s[action.key] = action.value;
        return s;
      }
    default:
      return state;
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    z-index: -10;\n    display: block;\n    background-color: black;\n    background-image: radial-gradient(circle at center 40%, rgba(22,24,23,1) 50%, rgba(0,0,0,0) 150%);\n'], ['\n    ', ';\n    z-index: -10;\n    display: block;\n    background-color: black;\n    background-image: radial-gradient(circle at center 40%, rgba(22,24,23,1) 50%, rgba(0,0,0,0) 150%);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', ';\n    z-index: -10;\n    display: block;\n    background-color: ', ';\n    ', ';\n    background-blend-mode: darken;\n'], ['\n    ', ';\n    z-index: -10;\n    display: block;\n    background-color: ', ';\n    ', ';\n    background-blend-mode: darken;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(4);

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _variables = __webpack_require__(3);

var _utilities = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BgContour = (0, _reactEmotion2.default)('span')(_templateObject, _utilities.positions.absCenter());

var BgGradient = (0, _reactEmotion2.default)('span')(_templateObject2, _utilities.positions.absCenter(), _variables.palette.greenDarkestAlt, _utilities.gradientBg);

exports.default = function () {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(BgContour, { className: 'bg-contour' }),
        _react2.default.createElement(BgGradient, { className: 'bg-gradient' })
    );
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n    ', '\n\n    * {\n        box-sizing: border-box;\n    }\n\n    html,\n    body {\n        height: 100%;\n        min-height: 100%;\n    }\n\n    html {\n        background-color: ', ';\n    }\n\n    html {font-size: 1.125em;}\n\n    body {\n        font-family: \'Source Sans Pro\', sans-serif;\n        font-weight: 400;\n        line-height: 1.45;\n        color: ', ';\n    }\n\n    p {\n      margin-top: 1em;\n      margin-bottom: 1.3em;\n    }\n\n    h1, h2, h3, h4 {\n        margin: 1.414em 0 0.5em;\n        font-weight: 700;\n        line-height: 1;\n        font-family: ', ';\n        font-weight: 900;\n\n        span {\n            display: block;\n        }\n    }\n\n    h1, .h1 {\n        margin-top: 0;\n        font-size: 6.854em;\n        position: relative;\n        z-index: 1;\n    }\n\n    h2, .h2 {font-size: 4.236em;}\n\n    h3, .h3 {font-size: 2.618em;}\n\n    h4, .h4 {font-size: 1.618em;}\n\n    small, .font_small {font-size: 0.618em;}\n\n    a {\n        text-decoration: none;\n        color: ', ';\n        border-bottom: 1px dotted ', '\n    }\n\n    hr {\n        margin: 48px 0;\n        border-color: ', ';\n    }\n\n    input,\n    select,\n    select option,\n    textarea {\n        width: 100%;\n        box-shadow: none;\n        border-radius: 2px;\n        padding: 6px 8px;\n        color: ', ';\n        border: 1px solid ', ';\n        &:hover,\n        &:focus,\n        &:active {\n            outline: none;\n        }\n    }\n\n    label {\n        display: block;\n        font-size: ', ';\n        text-transform: uppercase;\n        margin-bottom: 6px;\n    }\n\n    select {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background-color: ', ';\n        height: 40px;\n    }\n\n    textarea {\n        width: 100%;\n        min-height: 360px;\n    }\n\n    input {\n        background-color: ', ';\n        height: 40px;\n        &:-webkit-autofill {\n            -webkit-box-shadow: 0 0 0px 1000px $#2f3232 inset;\n        }\n\n        ', '\n    }\n\n    #root,\n    .App {\n        height: inherit;\n        min-height: inherit;\n    }\n'], ['\n    ', '\n\n    * {\n        box-sizing: border-box;\n    }\n\n    html,\n    body {\n        height: 100%;\n        min-height: 100%;\n    }\n\n    html {\n        background-color: ', ';\n    }\n\n    html {font-size: 1.125em;}\n\n    body {\n        font-family: \'Source Sans Pro\', sans-serif;\n        font-weight: 400;\n        line-height: 1.45;\n        color: ', ';\n    }\n\n    p {\n      margin-top: 1em;\n      margin-bottom: 1.3em;\n    }\n\n    h1, h2, h3, h4 {\n        margin: 1.414em 0 0.5em;\n        font-weight: 700;\n        line-height: 1;\n        font-family: ', ';\n        font-weight: 900;\n\n        span {\n            display: block;\n        }\n    }\n\n    h1, .h1 {\n        margin-top: 0;\n        font-size: 6.854em;\n        position: relative;\n        z-index: 1;\n    }\n\n    h2, .h2 {font-size: 4.236em;}\n\n    h3, .h3 {font-size: 2.618em;}\n\n    h4, .h4 {font-size: 1.618em;}\n\n    small, .font_small {font-size: 0.618em;}\n\n    a {\n        text-decoration: none;\n        color: ', ';\n        border-bottom: 1px dotted ', '\n    }\n\n    hr {\n        margin: 48px 0;\n        border-color: ', ';\n    }\n\n    input,\n    select,\n    select option,\n    textarea {\n        width: 100%;\n        box-shadow: none;\n        border-radius: 2px;\n        padding: 6px 8px;\n        color: ', ';\n        border: 1px solid ', ';\n        &:hover,\n        &:focus,\n        &:active {\n            outline: none;\n        }\n    }\n\n    label {\n        display: block;\n        font-size: ', ';\n        text-transform: uppercase;\n        margin-bottom: 6px;\n    }\n\n    select {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background-color: ', ';\n        height: 40px;\n    }\n\n    textarea {\n        width: 100%;\n        min-height: 360px;\n    }\n\n    input {\n        background-color: ', ';\n        height: 40px;\n        &:-webkit-autofill {\n            -webkit-box-shadow: 0 0 0px 1000px $#2f3232 inset;\n        }\n\n        ', '\n    }\n\n    #root,\n    .App {\n        height: inherit;\n        min-height: inherit;\n    }\n']);

var _reactEmotion = __webpack_require__(4);

var _polished = __webpack_require__(5);

var _variables = __webpack_require__(3);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
if (typeof window !== 'undefined') {
	var WebFont = require('webfontloader');

	WebFont.load({
		google: {
			families: [
            'Work+Sans:300:400:700',
            'Source+Sans+Pro:400,600,700,900'
			]
		},
	});
}
*/

(0, _reactEmotion.injectGlobal)(_templateObject, (0, _polished.normalize)(), _variables.palette.greenDarkest, _variables.palette.grayLighter, _variables.family.sourceSansPro, _variables.palette.white, (0, _polished.transparentize)(0.25, _variables.palette.white), _variables.palette.grayLight, _variables.palette.grayLighter, (0, _polished.transparentize)(0.75, _variables.palette.grayLighter), (0, _polished.rem)('12px', '16px'), (0, _polished.transparentize)(0.8, _variables.palette.grayLighter), (0, _polished.transparentize)(0.8, _variables.palette.grayLighter), (0, _polished.placeholder)({ 'color': _variables.palette.grayLighter }));

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.7a2c592a.js.map