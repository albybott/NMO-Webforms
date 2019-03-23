"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _styles = require("@material-ui/core/styles");

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FSwitch =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(FSwitch, _React$PureComponent);

  function FSwitch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FSwitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isChecked: _this.props.form.values != undefined && _this.props.form.values[_this.props.field.name]
    };
    return _this;
  }

  _createClass(FSwitch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          field = _this$props.field,
          _this$props$form = _this$props.form,
          touched = _this$props$form.touched || {},
          errors = _this$props$form.errors || {},
          values = _this$props$form.values || {},
          setFieldValue = _this$props$form.setFieldValue,
          required = _this$props.required,
          fullWidth = _this$props.fullWidth,
          margin = _this$props.margin,
          other = _objectWithoutProperties(_this$props, ["label", "field", "form", "required", "fullWidth", "margin"]);

      var errorText = errors[field.name];
      var hasError = touched[field.name] && errorText !== undefined;
      var errorColor = this.props.theme.palette.error.main;
      var labelStyle = hasError ? {
        color: errorColor
      } : {};
      var controlProps = {
        checked: this.state.isChecked,
        value: values[field.name],
        onChange: function onChange(event) {
          var isChecked = event.target.checked;

          _this2.setState({
            isChecked: isChecked
          }, function () {
            setFieldValue(field.name, isChecked);
          });
        }
      };
      return _react.default.createElement(_FormControl.default, _extends({
        fullWidth: fullWidth,
        required: required,
        error: hasError
      }, other), _react.default.createElement(_FormControlLabel.default, {
        margin: margin,
        control: _react.default.createElement(_Switch.default, controlProps),
        label: _react.default.createElement("span", {
          style: labelStyle
        }, label)
      }), hasError && _react.default.createElement(_FormHelperText.default, null, errorText));
    }
  }]);

  return FSwitch;
}(_react.default.PureComponent);

FSwitch.propTypes = {
  label: _propTypes.default.string,
  field: _propTypes.default.shape({
    name: _propTypes.default.string
  }),
  form: _propTypes.default.shape({
    touched: _propTypes.default.object,
    errors: _propTypes.default.object,
    values: _propTypes.default.object,
    setFieldValue: _propTypes.default.func
  }),
  theme: _propTypes.default.object,
  required: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  margin: _propTypes.default.oneOf(['none', 'dense', 'normal'])
};
FSwitch.defaultProps = {
  required: false,
  fullWidth: true,
  margin: 'normal'
};

var _default = (0, _styles.withTheme)()(FSwitch);

exports.default = _default;