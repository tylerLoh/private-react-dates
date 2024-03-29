"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PureCustomizableCalendarDay = exports.selectedStyles = exports.lastInRangeStyles = exports.selectedSpanStyles = exports.hoveredSpanStyles = exports.blockedOutOfRangeStyles = exports.blockedCalendarStyles = exports.blockedMinNightsStyles = exports.highlightedCalendarStyles = exports.outsideStyles = exports.defaultStyles = void 0;

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _airbnbPropTypes = require("airbnb-prop-types");

var _reactWithStyles = require("react-with-styles");

var _moment = _interopRequireDefault(require("moment"));

var _defaultPhrases = require("../defaultPhrases");

var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));

var _getCalendarDaySettings = _interopRequireDefault(require("../utils/getCalendarDaySettings"));

var _constants = require("../constants");

var _DefaultTheme = _interopRequireDefault(require("../theme/DefaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var color = _DefaultTheme["default"].reactDates.color;

function getStyles(stylesObj, isHovered) {
  if (!stylesObj) return null;
  var hover = stylesObj.hover;

  if (isHovered && hover) {
    return hover;
  }

  return stylesObj;
}

var DayStyleShape = process.env.NODE_ENV !== "production" ? _propTypes["default"].shape({
  background: _propTypes["default"].string,
  border: (0, _airbnbPropTypes.or)([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  hover: _propTypes["default"].shape({
    background: _propTypes["default"].string,
    border: (0, _airbnbPropTypes.or)([_propTypes["default"].string, _propTypes["default"].number]),
    color: _propTypes["default"].string
  })
}) : {};;
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread({}, _reactWithStyles.withStylesPropTypes, {
  day: _reactMomentProptypes["default"].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes["default"].bool,
  modifiers: _propTypes["default"].instanceOf(Set),
  isFocused: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOf([0, -1]),
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  ariaLabelFormat: _propTypes["default"].string,
  // style overrides
  defaultStyles: DayStyleShape,
  outsideStyles: DayStyleShape,
  todayStyles: DayStyleShape,
  firstDayOfWeekStyles: DayStyleShape,
  lastDayOfWeekStyles: DayStyleShape,
  highlightedCalendarStyles: DayStyleShape,
  blockedMinNightsStyles: DayStyleShape,
  blockedCalendarStyles: DayStyleShape,
  blockedOutOfRangeStyles: DayStyleShape,
  hoveredSpanStyles: DayStyleShape,
  selectedSpanStyles: DayStyleShape,
  lastInRangeStyles: DayStyleShape,
  selectedStyles: DayStyleShape,
  selectedStartStyles: DayStyleShape,
  selectedEndStyles: DayStyleShape,
  afterHoveredStartStyles: DayStyleShape,
  hoveredStartFirstPossibleEndStyles: DayStyleShape,
  hoveredStartBlockedMinNightsStyles: DayStyleShape,
  // internationalization
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases))
})) : {};;
var defaultStyles = {
  border: "1px solid ".concat(color.core.borderLight),
  color: color.text,
  background: color.background,
  hover: {
    background: color.core.borderLight,
    border: "1px solid ".concat(color.core.borderLight),
    color: 'inherit'
  }
};
exports.defaultStyles = defaultStyles;
var outsideStyles = {
  background: color.outside.backgroundColor,
  border: 0,
  color: color.outside.color
};
exports.outsideStyles = outsideStyles;
var highlightedCalendarStyles = {
  background: color.highlighted.backgroundColor,
  color: color.highlighted.color,
  hover: {
    background: color.highlighted.backgroundColor_hover,
    color: color.highlighted.color_active
  }
};
exports.highlightedCalendarStyles = highlightedCalendarStyles;
var blockedMinNightsStyles = {
  background: color.minimumNights.backgroundColor,
  border: "1px solid ".concat(color.minimumNights.borderColor),
  color: color.minimumNights.color,
  hover: {
    background: color.minimumNights.backgroundColor_hover,
    color: color.minimumNights.color_active
  }
};
exports.blockedMinNightsStyles = blockedMinNightsStyles;
var blockedCalendarStyles = {
  background: color.blocked_calendar.backgroundColor,
  border: "1px solid ".concat(color.blocked_calendar.borderColor),
  color: color.blocked_calendar.color,
  hover: {
    background: color.blocked_calendar.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_calendar.borderColor),
    color: color.blocked_calendar.color_active
  }
};
exports.blockedCalendarStyles = blockedCalendarStyles;
var blockedOutOfRangeStyles = {
  background: color.blocked_out_of_range.backgroundColor,
  border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
  color: color.blocked_out_of_range.color,
  hover: {
    background: color.blocked_out_of_range.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
    color: color.blocked_out_of_range.color_active
  }
};
exports.blockedOutOfRangeStyles = blockedOutOfRangeStyles;
var hoveredSpanStyles = {
  background: color.hoveredSpan.backgroundColor,
  border: "1px double ".concat(color.hoveredSpan.borderColor),
  color: color.hoveredSpan.color,
  hover: {
    background: color.hoveredSpan.backgroundColor_hover,
    border: "1px double ".concat(color.hoveredSpan.borderColor),
    color: color.hoveredSpan.color_active
  }
};
exports.hoveredSpanStyles = hoveredSpanStyles;
var selectedSpanStyles = {
  background: color.selectedSpan.backgroundColor,
  border: "1px double ".concat(color.selectedSpan.borderColor),
  color: color.selectedSpan.color,
  hover: {
    background: color.selectedSpan.backgroundColor_hover,
    border: "1px double ".concat(color.selectedSpan.borderColor),
    color: color.selectedSpan.color_active
  }
};
exports.selectedSpanStyles = selectedSpanStyles;
var lastInRangeStyles = {};
exports.lastInRangeStyles = lastInRangeStyles;
var selectedStyles = {
  background: color.selected.backgroundColor,
  border: "1px double ".concat(color.selected.borderColor),
  color: color.selected.color,
  hover: {
    background: color.selected.backgroundColor_hover,
    border: "1px double ".concat(color.selected.borderColor),
    color: color.selected.color_active
  }
};
exports.selectedStyles = selectedStyles;
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // style defaults
  defaultStyles: defaultStyles,
  outsideStyles: outsideStyles,
  todayStyles: {},
  highlightedCalendarStyles: highlightedCalendarStyles,
  blockedMinNightsStyles: blockedMinNightsStyles,
  blockedCalendarStyles: blockedCalendarStyles,
  blockedOutOfRangeStyles: blockedOutOfRangeStyles,
  hoveredSpanStyles: hoveredSpanStyles,
  selectedSpanStyles: selectedSpanStyles,
  lastInRangeStyles: lastInRangeStyles,
  selectedStyles: selectedStyles,
  selectedStartStyles: {},
  selectedEndStyles: {},
  afterHoveredStartStyles: {},
  firstDayOfWeekStyles: {},
  lastDayOfWeekStyles: {},
  hoveredStartFirstPossibleEndStyles: {},
  hoveredStartBlockedMinNightsStyles: {},
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};

var CustomizableCalendarDay =
/*#__PURE__*/
function (_ref) {
  _inheritsLoose(CustomizableCalendarDay, _ref);

  var _proto = CustomizableCalendarDay.prototype;

  _proto[!_react["default"].PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
  };

  function CustomizableCalendarDay() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ref.call.apply(_ref, [this].concat(args)) || this;
    _this.state = {
      isHovered: false
    };
    _this.setButtonRef = _this.setButtonRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        isFocused = _this$props.isFocused,
        tabIndex = _this$props.tabIndex;

    if (tabIndex === 0) {
      if (isFocused || tabIndex !== prevProps.tabIndex) {
        this.buttonRef.focus();
      }
    }
  };

  _proto.onDayClick = function onDayClick(day, e) {
    var onDayClick = this.props.onDayClick;
    onDayClick(day, e);
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day, e) {
    var onDayMouseEnter = this.props.onDayMouseEnter;
    this.setState({
      isHovered: true
    });
    onDayMouseEnter(day, e);
  };

  _proto.onDayMouseLeave = function onDayMouseLeave(day, e) {
    var onDayMouseLeave = this.props.onDayMouseLeave;
    this.setState({
      isHovered: false
    });
    onDayMouseLeave(day, e);
  };

  _proto.onKeyDown = function onKeyDown(day, e) {
    var onDayClick = this.props.onDayClick;
    var key = e.key;

    if (key === 'Enter' || key === ' ') {
      onDayClick(day, e);
    }
  };

  _proto.setButtonRef = function setButtonRef(ref) {
    this.buttonRef = ref;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        day = _this$props2.day,
        ariaLabelFormat = _this$props2.ariaLabelFormat,
        daySize = _this$props2.daySize,
        isOutsideDay = _this$props2.isOutsideDay,
        modifiers = _this$props2.modifiers,
        tabIndex = _this$props2.tabIndex,
        renderDayContents = _this$props2.renderDayContents,
        styles = _this$props2.styles,
        phrases = _this$props2.phrases,
        defaultStylesWithHover = _this$props2.defaultStyles,
        outsideStylesWithHover = _this$props2.outsideStyles,
        todayStylesWithHover = _this$props2.todayStyles,
        firstDayOfWeekStylesWithHover = _this$props2.firstDayOfWeekStyles,
        lastDayOfWeekStylesWithHover = _this$props2.lastDayOfWeekStyles,
        highlightedCalendarStylesWithHover = _this$props2.highlightedCalendarStyles,
        blockedMinNightsStylesWithHover = _this$props2.blockedMinNightsStyles,
        blockedCalendarStylesWithHover = _this$props2.blockedCalendarStyles,
        blockedOutOfRangeStylesWithHover = _this$props2.blockedOutOfRangeStyles,
        hoveredSpanStylesWithHover = _this$props2.hoveredSpanStyles,
        selectedSpanStylesWithHover = _this$props2.selectedSpanStyles,
        lastInRangeStylesWithHover = _this$props2.lastInRangeStyles,
        selectedStylesWithHover = _this$props2.selectedStyles,
        selectedStartStylesWithHover = _this$props2.selectedStartStyles,
        selectedEndStylesWithHover = _this$props2.selectedEndStyles,
        afterHoveredStartStylesWithHover = _this$props2.afterHoveredStartStyles,
        hoveredStartFirstPossibleEndStylesWithHover = _this$props2.hoveredStartFirstPossibleEndStyles,
        hoveredStartBlockedMinNightsStylesWithHover = _this$props2.hoveredStartBlockedMinNightsStyles;
    var isHovered = this.state.isHovered;
    if (!day) return _react["default"].createElement("td", null);

    var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
        daySizeStyles = _getCalendarDaySettin.daySizeStyles,
        useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
        selected = _getCalendarDaySettin.selected,
        hoveredSpan = _getCalendarDaySettin.hoveredSpan,
        isOutsideRange = _getCalendarDaySettin.isOutsideRange,
        ariaLabel = _getCalendarDaySettin.ariaLabel;

    return _react["default"].createElement("td", _extends({}, (0, _reactWithStyles.css)(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, daySizeStyles, getStyles(defaultStylesWithHover, isHovered), isOutsideDay && getStyles(outsideStylesWithHover, isHovered), modifiers.has('today') && getStyles(todayStylesWithHover, isHovered), modifiers.has('first-day-of-week') && getStyles(firstDayOfWeekStylesWithHover, isHovered), modifiers.has('last-day-of-week') && getStyles(lastDayOfWeekStylesWithHover, isHovered), modifiers.has('hovered-start-first-possible-end') && getStyles(hoveredStartFirstPossibleEndStylesWithHover, isHovered), modifiers.has('hovered-start-blocked-minimum-nights') && getStyles(hoveredStartBlockedMinNightsStylesWithHover, isHovered), modifiers.has('highlighted-calendar') && getStyles(highlightedCalendarStylesWithHover, isHovered), modifiers.has('blocked-minimum-nights') && getStyles(blockedMinNightsStylesWithHover, isHovered), modifiers.has('blocked-calendar') && getStyles(blockedCalendarStylesWithHover, isHovered), hoveredSpan && getStyles(hoveredSpanStylesWithHover, isHovered), modifiers.has('after-hovered-start') && getStyles(afterHoveredStartStylesWithHover, isHovered), modifiers.has('selected-span') && getStyles(selectedSpanStylesWithHover, isHovered), modifiers.has('last-in-range') && getStyles(lastInRangeStylesWithHover, isHovered), selected && getStyles(selectedStylesWithHover, isHovered), modifiers.has('selected-start') && getStyles(selectedStartStylesWithHover, isHovered), modifiers.has('selected-end') && getStyles(selectedEndStylesWithHover, isHovered), isOutsideRange && getStyles(blockedOutOfRangeStylesWithHover, isHovered)), {
      role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
      ,
      ref: this.setButtonRef,
      "aria-disabled": modifiers.has('blocked'),
      "aria-label": ariaLabel,
      onMouseEnter: function onMouseEnter(e) {
        _this2.onDayMouseEnter(day, e);
      },
      onMouseLeave: function onMouseLeave(e) {
        _this2.onDayMouseLeave(day, e);
      },
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      },
      onClick: function onClick(e) {
        _this2.onDayClick(day, e);
      },
      onKeyDown: function onKeyDown(e) {
        _this2.onKeyDown(day, e);
      },
      tabIndex: tabIndex
    }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
  };

  return CustomizableCalendarDay;
}(_react["default"].PureComponent || _react["default"].Component);

exports.PureCustomizableCalendarDay = CustomizableCalendarDay;
CustomizableCalendarDay.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CustomizableCalendarDay.defaultProps = defaultProps;

var _default = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var font = _ref2.reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CustomizableCalendarDay);

exports["default"] = _default;