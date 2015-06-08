'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pureRenderDecorator = require('pure-render-decorator');

var _pureRenderDecorator2 = _interopRequireDefault(_pureRenderDecorator);

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

function transform(transformProps, displayName) {
  return function (Component) {
    return (function (_React$Component) {
      var _class = function () {
        _classCallCheck(this, _class2);

        if (_React$Component != null) {
          _React$Component.apply(this, arguments);
        }
      };

      _inherits(_class, _React$Component);

      var _class2 = _class;

      _createClass(_class2, [{
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(Component, transformProps(this.props));
        }
      }], [{
        key: 'displayName',
        value: displayName || 'Transform' + Component.displayName,
        enumerable: true
      }]);

      _class = (0, _pureRenderDecorator2['default'])(_class) || _class;
      return _class;
    })(_react2['default'].Component);
  };
}

exports['default'] = transform;
module.exports = exports['default'];