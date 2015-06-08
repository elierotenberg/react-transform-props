'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _2 = require('./');

var _3 = _interopRequireDefault(_2);

var _ = require('lodash');
var should = require('should');
var Promise = (global || window).Promise = require('bluebird');
var __DEV__ = process.env.NODE_ENV !== 'production';
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === 'object';
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}

var MyComponent = (function (_React$Component) {
  function MyComponent() {
    _classCallCheck(this, _MyComponent);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(MyComponent, _React$Component);

  var _MyComponent = MyComponent;

  _createClass(_MyComponent, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        JSON.stringify(this.props)
      );
    }
  }], [{
    key: 'displayName',
    value: 'MyComponent',
    enumerable: true
  }]);

  MyComponent = (0, _3['default'])(function (props) {
    return _(props).omit(['forbiddenProps']).pairs().filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1);

      var k = _ref2[0];
      return k.charAt(0) !== '_';
    }).object().mapValues(function (v) {
      return v + v;
    }).value();
  })(MyComponent) || MyComponent;
  return MyComponent;
})(_react2['default'].Component);

var html = _react2['default'].renderToStaticMarkup(_react2['default'].createElement(MyComponent, { _private: true, forbiddenProps: null, foo: 'bar' }));
console.log(html);

html.should.be.exactly(_react2['default'].renderToStaticMarkup(_react2['default'].createElement(
  'div',
  null,
  JSON.stringify({ foo: 'barbar' })
)));

// filter out 'forbiddenProps'

// filter out properties which key start with '_'

// add (or concatenate) each value to itself