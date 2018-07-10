'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _component = require('react-imvc/component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Input 是react-imvc封装的组件，用来将表单跟 store 联系起来，写在name属性下
function View(_ref) {
  var handlers = _ref.handlers;
  var handleLogin = handlers.handleLogin;

  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'section',
      { className: 'page-body' },
      _react2.default.createElement(
        'div',
        { className: 'label' },
        _react2.default.createElement(_component.Input, {
          name: 'token',
          className: 'txt',
          type: 'text',
          placeholder: 'Access Token',
          maxLength: '36'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'label' },
        _react2.default.createElement(
          'button',
          { className: 'button', onClick: handleLogin },
          '\u767B\u5F55'
        )
      )
    )
  );
}