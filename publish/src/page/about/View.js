'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = View;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../component/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function View() {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      'dl',
      { className: 'about-info' },
      _react2.default.createElement(
        'dt',
        null,
        '\u5173\u4E8E\u9879\u76EE'
      ),
      _react2.default.createElement(
        'dd',
        null,
        '\u57FA\u4E8E cnodejs \u7684 api\uFF0C\u91C7\u7528 react-imvc \u7F16\u5199\u7684 web app'
      ),
      _react2.default.createElement(
        'dt',
        null,
        'isomorphic-cnode \u6E90\u7801\u5730\u5740'
      ),
      _react2.default.createElement(
        'dd',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/laoxiehhh/cnode-react-imvc' },
          'https://github.com/laoxiehhh/cnode-react-imvc'
        )
      ),
      _react2.default.createElement(
        'dt',
        null,
        'react-imvc \u6E90\u7801\u5730\u5740'
      ),
      _react2.default.createElement(
        'dd',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/Lucifier129/react-imvc' },
          'https://github.com/Lucifier129/react-imvc'
        )
      ),
      _react2.default.createElement(
        'dt',
        null,
        '\u610F\u89C1\u53CD\u9988'
      ),
      _react2.default.createElement(
        'dd',
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/laoxiehhh/cnode-react-imvc/issues' },
          '\u53D1\u8868\u610F\u89C1\u6216\u8005\u63D0\u9700\u6C42'
        )
      ),
      _react2.default.createElement(
        'dt',
        null,
        '\u5F53\u524D\u7248\u672C'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'V1.0'
      )
    )
  );
}