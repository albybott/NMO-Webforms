"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    input: {
      display: 'flex',
      padding: 0
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center'
    },
    chip: {
      margin: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit / 4, "px")
    },
    chipFocused: {
      backgroundColor: (0, _colorManipulator.emphasize)(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
    },
    noOptionsMessage: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px")
    },
    singleValue: {
      fontSize: 16
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      fontSize: 16
    },
    menu: {
      marginTop: theme.spacing.unit,
      position: 'absolute',
      zIndex: 1,
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing.unit * 2
    }
  };
};

var NoOptionsMessage = function NoOptionsMessage(props) {
  return _react.default.createElement(_Typography.default, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.noOptionsMessage
  }, props.innerProps), props.children);
};

NoOptionsMessage.propTypes = {
  selectProps: _propTypes.default.object,
  innerProps: _propTypes.default.object,
  children: _propTypes.default.node
};

var inputComponent = function inputComponent(_ref) {
  var inputRef = _ref.inputRef,
      props = _objectWithoutProperties(_ref, ["inputRef"]);

  return _react.default.createElement("div", _extends({
    ref: inputRef
  }, props));
};

inputComponent.propTypes = {
  inputRef: _propTypes.default.func
};

var Control = function Control(props) {
  return _react.default.createElement(_TextField.default, _extends({
    fullWidth: true,
    InputProps: {
      inputComponent: inputComponent,
      inputProps: _objectSpread({
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children
      }, props.innerProps)
    }
  }, props.selectProps.textFieldProps));
};

Control.propTypes = {
  innerRef: _propTypes.default.func,
  selectProps: _propTypes.default.object,
  innerProps: _propTypes.default.object,
  children: _propTypes.default.node
};

var Option = function Option(props) {
  return _react.default.createElement(_MenuItem.default, _extends({
    buttonRef: props.innerRef,
    selected: props.isFocused,
    component: "div",
    style: {
      fontWeight: props.isSelected ? 500 : 400
    }
  }, props.innerProps), props.children);
};

Option.propTypes = {
  innerRef: _propTypes.default.func,
  isSelected: _propTypes.default.bool,
  isFocused: _propTypes.default.bool,
  innerProps: _propTypes.default.object,
  children: _propTypes.default.node
};

var Placeholder = function Placeholder(props) {
  return _react.default.createElement(_Typography.default, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.placeholder
  }, props.innerProps), props.children);
};

Placeholder.propTypes = {
  selectProps: _propTypes.default.object,
  innerProps: _propTypes.default.object,
  children: _propTypes.default.node
};

var SingleValue = function SingleValue(props) {
  return _react.default.createElement(_Typography.default, _extends({
    className: props.selectProps.classes.singleValue
  }, props.innerProps), props.children);
};

SingleValue.propTypes = {
  selectProps: _propTypes.default.object,
  innerProps: _propTypes.default.object,
  children: _propTypes.default.node
};

var ValueContainer = function ValueContainer(props) {
  return _react.default.createElement("div", {
    className: props.selectProps.classes.valueContainer
  }, props.children);
};

ValueContainer.propTypes = {
  selectProps: _propTypes.default.object,
  children: _propTypes.default.node
};

var MultiValue = function MultiValue(props) {
  return _react.default.createElement(_Chip.default, {
    tabIndex: -1,
    label: props.children,
    className: (0, _classnames.default)(props.selectProps.classes.chip, _defineProperty({}, props.selectProps.classes.chipFocused, props.isFocused)),
    onDelete: function onDelete(event) {
      props.removeProps.onClick();
      props.removeProps.onMouseDown(event);
    }
  });
};

MultiValue.propTypes = {
  selectProps: _propTypes.default.object,
  isFocused: _propTypes.default.bool,
  children: _propTypes.default.node,
  removeProps: _propTypes.default.object
};

var Menu = function Menu(props) {
  return _react.default.createElement(_Paper.default, _extends({
    square: true,
    className: props.selectProps.classes.menu
  }, props.innerProps), props.children);
};

Menu.propTypes = {
  selectProps: _propTypes.default.object,
  innerProps: _propTypes.default.object,
  children: _propTypes.default.node
};
var components = {
  Option: Option,
  Control: Control,
  NoOptionsMessage: NoOptionsMessage,
  Placeholder: Placeholder,
  SingleValue: SingleValue,
  MultiValue: MultiValue,
  ValueContainer: ValueContainer,
  Menu: Menu
};

var Autocomplete =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Autocomplete, _React$PureComponent);

  function Autocomplete() {
    _classCallCheck(this, Autocomplete);

    return _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).apply(this, arguments));
  }

  _createClass(Autocomplete, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          required = _this$props.required,
          classes = _this$props.classes,
          theme = _this$props.theme,
          label = _this$props.label,
          field = _this$props.field,
          _this$props$form = _this$props.form,
          dirty = _this$props$form.dirty,
          touched = _this$props$form.touched,
          errors = _this$props$form.errors || {},
          values = _this$props$form.values || {},
          setFieldValue = _this$props$form.setFieldValue,
          options = _this$props.options,
          isMultiple = _this$props.isMultiple,
          other = _objectWithoutProperties(_this$props, ["required", "classes", "theme", "label", "field", "form", "options", "isMultiple"]);

      var errorText = errors[field.name];
      var hasError = dirty && touched[field.name] && errorText !== undefined;
      var selectStyles = {
        input: function input(base) {
          return _objectSpread({}, base, {
            color: theme.palette.text.primary
          });
        }
      };
      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement(_FormControl.default, _extends({
        error: hasError,
        required: required
      }, other), _react.default.createElement(_reactSelect.default, {
        classes: classes,
        styles: selectStyles,
        required: required,
        textFieldProps: {
          required: required,
          label: label,
          error: hasError,
          InputLabelProps: {
            shrink: true
          }
        },
        options: options,
        components: components,
        onChange: function onChange(value) {
          return setFieldValue(field.name, value);
        },
        value: values[field.name],
        isMulti: isMultiple
      }), hasError && _react.default.createElement(_FormHelperText.default, null, errorText)));
    }
  }]);

  return Autocomplete;
}(_react.default.PureComponent);

Autocomplete.propTypes = {
  classes: _propTypes.default.object.isRequired,
  theme: _propTypes.default.object.isRequired,
  label: _propTypes.default.string,
  field: _propTypes.default.object,
  form: _propTypes.default.shape({
    dirty: _propTypes.default.bool,
    errors: _propTypes.default.object,
    setFieldValue: _propTypes.default.func
  }),
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
  })).isRequired,
  required: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),
  isMultiple: _propTypes.default.bool
};
Autocomplete.defaultProps = {
  options: [],
  required: false,
  fullWidth: true,
  margin: 'normal',
  isMultiple: false
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Autocomplete);

exports.default = _default;