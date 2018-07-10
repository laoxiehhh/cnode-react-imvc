'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.staticify = exports.purify = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React.PureComponent是优化 React 应用程序最重要的方法之一，易于实施，只要把继承类从 Component 
 * 换成 PureComponent 即可，可以减少不必要的 render 操作的次数，从而提高性能，
 * 而且可以少写 shouldComponentUpdate 函数，节省了点代码。
 */
var purify = exports.purify = function purify() {
    return function (InputComponent) {
        return function (_React$PureComponent) {
            _inherits(Pure, _React$PureComponent);

            function Pure() {
                _classCallCheck(this, Pure);

                return _possibleConstructorReturn(this, (Pure.__proto__ || Object.getPrototypeOf(Pure)).apply(this, arguments));
            }

            _createClass(Pure, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(InputComponent, this.props);
                }
            }]);

            return Pure;
        }(_react2.default.PureComponent);
    };
};

var staticify = exports.staticify = function staticify() {
    return function (InputComponent) {
        return function (_React$Component) {
            _inherits(Static, _React$Component);

            function Static() {
                _classCallCheck(this, Static);

                return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).apply(this, arguments));
            }

            _createClass(Static, [{
                key: 'shouldComponentUpdate',
                value: function shouldComponentUpdate() {
                    return false; // always false to make sure just rendering once
                }
            }, {
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(InputComponent, this.props);
                }
            }]);

            return Static;
        }(_react2.default.Component);
    };
};