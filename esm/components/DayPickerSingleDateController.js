import shallowCompare from "react-addons-shallow-compare";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { forbidExtraProps, mutuallyExclusiveProps, nonNegativeInteger } from 'airbnb-prop-types';
import moment from 'moment';
import values from 'object.values';
import isTouchDevice from 'is-touch-device';
import { DayPickerPhrases } from '../defaultPhrases';
import getPhrasePropTypes from '../utils/getPhrasePropTypes';
import isSameDay from '../utils/isSameDay';
import isAfterDay from '../utils/isAfterDay';
import getVisibleDays from '../utils/getVisibleDays';
import isDayVisible from '../utils/isDayVisible';
import toISODateString from '../utils/toISODateString';
import toISOMonthString from '../utils/toISOMonthString';
import ScrollableOrientationShape from '../shapes/ScrollableOrientationShape';
import DayOfWeekShape from '../shapes/DayOfWeekShape';
import CalendarInfoPositionShape from '../shapes/CalendarInfoPositionShape';
import { HORIZONTAL_ORIENTATION, VERTICAL_SCROLLABLE, DAY_SIZE, INFO_POSITION_BOTTOM } from '../constants';
import DayPicker from './DayPicker';
import getPreviousMonthMemoLast from '../utils/getPreviousMonthMemoLast';
import getPooledMoment from '../utils/getPooledMoment';
var propTypes = process.env.NODE_ENV !== "production" ? forbidExtraProps({
  date: momentPropTypes.momentObj,
  onDateChange: PropTypes.func,
  focused: PropTypes.bool,
  onFocusChange: PropTypes.func,
  onClose: PropTypes.func,
  keepOpenOnDateSelect: PropTypes.bool,
  isOutsideRange: PropTypes.func,
  isDayBlocked: PropTypes.func,
  isDayHighlighted: PropTypes.func,
  // DayPicker props
  renderMonthText: mutuallyExclusiveProps(PropTypes.func, 'renderMonthText', 'renderMonthElement'),
  renderMonthElement: mutuallyExclusiveProps(PropTypes.func, 'renderMonthText', 'renderMonthElement'),
  enableOutsideDays: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  orientation: ScrollableOrientationShape,
  withPortal: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  firstDayOfWeek: DayOfWeekShape,
  hideKeyboardShortcutsPanel: PropTypes.bool,
  daySize: nonNegativeInteger,
  verticalHeight: nonNegativeInteger,
  noBorder: PropTypes.bool,
  verticalBorderSpacing: nonNegativeInteger,
  transitionDuration: nonNegativeInteger,
  horizontalMonthPadding: nonNegativeInteger,
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onOutsideClick: PropTypes.func,
  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  renderCalendarInfo: PropTypes.func,
  calendarInfoPosition: CalendarInfoPositionShape,
  // accessibility
  onBlur: PropTypes.func,
  isFocused: PropTypes.bool,
  showKeyboardShortcuts: PropTypes.bool,
  onTab: PropTypes.func,
  onShiftTab: PropTypes.func,
  // i18n
  monthFormat: PropTypes.string,
  weekDayFormat: PropTypes.string,
  phrases: PropTypes.shape(getPhrasePropTypes(DayPickerPhrases)),
  dayAriaLabelFormat: PropTypes.string,
  isRTL: PropTypes.bool
}) : {};;
var defaultProps = {
  date: undefined,
  // TODO: use null
  onDateChange: function onDateChange() {},
  focused: false,
  onFocusChange: function onFocusChange() {},
  onClose: function onClose() {},
  keepOpenOnDateSelect: false,
  isOutsideRange: function isOutsideRange() {},
  isDayBlocked: function isDayBlocked() {},
  isDayHighlighted: function isDayHighlighted() {},
  // DayPicker props
  renderMonthText: null,
  enableOutsideDays: false,
  numberOfMonths: 1,
  orientation: HORIZONTAL_ORIENTATION,
  withPortal: false,
  hideKeyboardShortcutsPanel: false,
  initialVisibleMonth: null,
  firstDayOfWeek: null,
  daySize: DAY_SIZE,
  verticalHeight: null,
  noBorder: false,
  verticalBorderSpacing: undefined,
  transitionDuration: undefined,
  horizontalMonthPadding: 13,
  navPrev: null,
  navNext: null,
  onPrevMonthClick: function onPrevMonthClick() {},
  onNextMonthClick: function onNextMonthClick() {},
  onOutsideClick: function onOutsideClick() {},
  renderCalendarDay: undefined,
  renderDayContents: null,
  renderCalendarInfo: null,
  renderMonthElement: null,
  calendarInfoPosition: INFO_POSITION_BOTTOM,
  // accessibility
  onBlur: function onBlur() {},
  isFocused: false,
  showKeyboardShortcuts: false,
  onTab: function onTab() {},
  onShiftTab: function onShiftTab() {},
  // i18n
  monthFormat: 'MMMM YYYY',
  weekDayFormat: 'dd',
  phrases: DayPickerPhrases,
  dayAriaLabelFormat: undefined,
  isRTL: false
};

var DayPickerSingleDateController =
/*#__PURE__*/
function (_ref) {
  _inheritsLoose(DayPickerSingleDateController, _ref);

  var _proto = DayPickerSingleDateController.prototype;

  _proto[!React.PureComponent && "shouldComponentUpdate"] = function (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  };

  function DayPickerSingleDateController(props) {
    var _this;

    _this = _ref.call(this, props) || this;
    _this.isTouchDevice = false;
    _this.today = moment();
    _this.modifiers = {
      today: function today(day) {
        return _this.isToday(day);
      },
      blocked: function blocked(day) {
        return _this.isBlocked(day);
      },
      'blocked-calendar': function blockedCalendar(day) {
        return props.isDayBlocked(day);
      },
      'blocked-out-of-range': function blockedOutOfRange(day) {
        return props.isOutsideRange(day);
      },
      'highlighted-calendar': function highlightedCalendar(day) {
        return props.isDayHighlighted(day);
      },
      valid: function valid(day) {
        return !_this.isBlocked(day);
      },
      hovered: function hovered(day) {
        return _this.isHovered(day);
      },
      selected: function selected(day) {
        return _this.isSelected(day);
      },
      'first-day-of-week': function firstDayOfWeek(day) {
        return _this.isFirstDayOfWeek(day);
      },
      'last-day-of-week': function lastDayOfWeek(day) {
        return _this.isLastDayOfWeek(day);
      }
    };

    var _this$getStateForNewM = _this.getStateForNewMonth(props),
        currentMonth = _this$getStateForNewM.currentMonth,
        visibleDays = _this$getStateForNewM.visibleDays;

    _this.state = {
      hoverDate: null,
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_assertThisInitialized(_this));
    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_assertThisInitialized(_this));
    _this.onDayClick = _this.onDayClick.bind(_assertThisInitialized(_this));
    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_assertThisInitialized(_this));
    _this.onNextMonthClick = _this.onNextMonthClick.bind(_assertThisInitialized(_this));
    _this.onMonthChange = _this.onMonthChange.bind(_assertThisInitialized(_this));
    _this.onYearChange = _this.onYearChange.bind(_assertThisInitialized(_this));
    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_assertThisInitialized(_this));
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    this.isTouchDevice = isTouchDevice();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var date = nextProps.date,
        focused = nextProps.focused,
        isOutsideRange = nextProps.isOutsideRange,
        isDayBlocked = nextProps.isDayBlocked,
        isDayHighlighted = nextProps.isDayHighlighted,
        initialVisibleMonth = nextProps.initialVisibleMonth,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays;
    var _this$props = this.props,
        prevIsOutsideRange = _this$props.isOutsideRange,
        prevIsDayBlocked = _this$props.isDayBlocked,
        prevIsDayHighlighted = _this$props.isDayHighlighted,
        prevNumberOfMonths = _this$props.numberOfMonths,
        prevEnableOutsideDays = _this$props.enableOutsideDays,
        prevInitialVisibleMonth = _this$props.initialVisibleMonth,
        prevFocused = _this$props.focused,
        prevDate = _this$props.date;
    var visibleDays = this.state.visibleDays;
    var recomputeOutsideRange = false;
    var recomputeDayBlocked = false;
    var recomputeDayHighlighted = false;

    if (isOutsideRange !== prevIsOutsideRange) {
      this.modifiers['blocked-out-of-range'] = function (day) {
        return isOutsideRange(day);
      };

      recomputeOutsideRange = true;
    }

    if (isDayBlocked !== prevIsDayBlocked) {
      this.modifiers['blocked-calendar'] = function (day) {
        return isDayBlocked(day);
      };

      recomputeDayBlocked = true;
    }

    if (isDayHighlighted !== prevIsDayHighlighted) {
      this.modifiers['highlighted-calendar'] = function (day) {
        return isDayHighlighted(day);
      };

      recomputeDayHighlighted = true;
    }

    var recomputePropModifiers = recomputeOutsideRange || recomputeDayBlocked || recomputeDayHighlighted;

    if (numberOfMonths !== prevNumberOfMonths || enableOutsideDays !== prevEnableOutsideDays || initialVisibleMonth !== prevInitialVisibleMonth && !prevFocused && focused) {
      var newMonthState = this.getStateForNewMonth(nextProps);
      var currentMonth = newMonthState.currentMonth;
      visibleDays = newMonthState.visibleDays;
      this.setState({
        currentMonth: currentMonth,
        visibleDays: visibleDays
      });
    }

    var didDateChange = date !== prevDate;
    var didFocusChange = focused !== prevFocused;
    var modifiers = {};

    if (didDateChange) {
      modifiers = this.deleteModifier(modifiers, prevDate, 'selected');
      modifiers = this.addModifier(modifiers, date, 'selected');
    }

    if (didFocusChange || recomputePropModifiers) {
      values(visibleDays).forEach(function (days) {
        Object.keys(days).forEach(function (day) {
          var momentObj = getPooledMoment(day);

          if (_this2.isBlocked(momentObj)) {
            modifiers = _this2.addModifier(modifiers, momentObj, 'blocked');
          } else {
            modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked');
          }

          if (didFocusChange || recomputeOutsideRange) {
            if (isOutsideRange(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-out-of-range');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-out-of-range');
            }
          }

          if (didFocusChange || recomputeDayBlocked) {
            if (isDayBlocked(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
            }
          }

          if (didFocusChange || recomputeDayHighlighted) {
            if (isDayHighlighted(momentObj)) {
              modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
            } else {
              modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
            }
          }
        });
      });
    }

    var today = moment();

    if (!isSameDay(this.today, today)) {
      modifiers = this.deleteModifier(modifiers, this.today, 'today');
      modifiers = this.addModifier(modifiers, today, 'today');
      this.today = today;
    }

    if (Object.keys(modifiers).length > 0) {
      this.setState({
        visibleDays: _objectSpread({}, visibleDays, modifiers)
      });
    }
  };

  _proto.componentWillUpdate = function componentWillUpdate() {
    this.today = moment();
  };

  _proto.onDayClick = function onDayClick(day, e) {
    if (e) e.preventDefault();
    if (this.isBlocked(day)) return;
    var _this$props2 = this.props,
        onDateChange = _this$props2.onDateChange,
        keepOpenOnDateSelect = _this$props2.keepOpenOnDateSelect,
        onFocusChange = _this$props2.onFocusChange,
        onClose = _this$props2.onClose;
    onDateChange(day);

    if (!keepOpenOnDateSelect) {
      onFocusChange({
        focused: false
      });
      onClose({
        date: day
      });
    }
  };

  _proto.onDayMouseEnter = function onDayMouseEnter(day) {
    if (this.isTouchDevice) return;
    var _this$state = this.state,
        hoverDate = _this$state.hoverDate,
        visibleDays = _this$state.visibleDays;
    var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
    modifiers = this.addModifier(modifiers, day, 'hovered');
    this.setState({
      hoverDate: day,
      visibleDays: _objectSpread({}, visibleDays, modifiers)
    });
  };

  _proto.onDayMouseLeave = function onDayMouseLeave() {
    var _this$state2 = this.state,
        hoverDate = _this$state2.hoverDate,
        visibleDays = _this$state2.visibleDays;
    if (this.isTouchDevice || !hoverDate) return;
    var modifiers = this.deleteModifier({}, hoverDate, 'hovered');
    this.setState({
      hoverDate: null,
      visibleDays: _objectSpread({}, visibleDays, modifiers)
    });
  };

  _proto.onPrevMonthClick = function onPrevMonthClick() {
    var _this$props3 = this.props,
        onPrevMonthClick = _this$props3.onPrevMonthClick,
        numberOfMonths = _this$props3.numberOfMonths,
        enableOutsideDays = _this$props3.enableOutsideDays;
    var _this$state3 = this.state,
        currentMonth = _this$state3.currentMonth,
        visibleDays = _this$state3.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var prevMonth = currentMonth.clone().subtract(1, 'month');
    var prevMonthVisibleDays = getVisibleDays(prevMonth, 1, enableOutsideDays);
    this.setState({
      currentMonth: prevMonth,
      visibleDays: _objectSpread({}, newVisibleDays, this.getModifiers(prevMonthVisibleDays))
    }, function () {
      onPrevMonthClick(prevMonth.clone());
    });
  };

  _proto.onNextMonthClick = function onNextMonthClick() {
    var _this$props4 = this.props,
        onNextMonthClick = _this$props4.onNextMonthClick,
        numberOfMonths = _this$props4.numberOfMonths,
        enableOutsideDays = _this$props4.enableOutsideDays;
    var _this$state4 = this.state,
        currentMonth = _this$state4.currentMonth,
        visibleDays = _this$state4.visibleDays;
    var newVisibleDays = {};
    Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
      newVisibleDays[month] = visibleDays[month];
    });
    var nextMonth = currentMonth.clone().add(numberOfMonths, 'month');
    var nextMonthVisibleDays = getVisibleDays(nextMonth, 1, enableOutsideDays);
    var newCurrentMonth = currentMonth.clone().add(1, 'month');
    this.setState({
      currentMonth: newCurrentMonth,
      visibleDays: _objectSpread({}, newVisibleDays, this.getModifiers(nextMonthVisibleDays))
    }, function () {
      onNextMonthClick(newCurrentMonth.clone());
    });
  };

  _proto.onMonthChange = function onMonthChange(newMonth) {
    var _this$props5 = this.props,
        numberOfMonths = _this$props5.numberOfMonths,
        enableOutsideDays = _this$props5.enableOutsideDays,
        orientation = _this$props5.orientation;
    var withoutTransitionMonths = orientation === VERTICAL_SCROLLABLE;
    var newVisibleDays = getVisibleDays(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.onYearChange = function onYearChange(newMonth) {
    var _this$props6 = this.props,
        numberOfMonths = _this$props6.numberOfMonths,
        enableOutsideDays = _this$props6.enableOutsideDays,
        orientation = _this$props6.orientation;
    var withoutTransitionMonths = orientation === VERTICAL_SCROLLABLE;
    var newVisibleDays = getVisibleDays(newMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths);
    this.setState({
      currentMonth: newMonth.clone(),
      visibleDays: this.getModifiers(newVisibleDays)
    });
  };

  _proto.getFirstFocusableDay = function getFirstFocusableDay(newMonth) {
    var _this3 = this;

    var _this$props7 = this.props,
        date = _this$props7.date,
        numberOfMonths = _this$props7.numberOfMonths;
    var focusedDate = newMonth.clone().startOf('month');

    if (date) {
      focusedDate = date.clone();
    }

    if (this.isBlocked(focusedDate)) {
      var days = [];
      var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
      var currentDay = focusedDate.clone();

      while (!isAfterDay(currentDay, lastVisibleDay)) {
        currentDay = currentDay.clone().add(1, 'day');
        days.push(currentDay);
      }

      var viableDays = days.filter(function (day) {
        return !_this3.isBlocked(day) && isAfterDay(day, focusedDate);
      });

      if (viableDays.length > 0) {
        var _viableDays = _slicedToArray(viableDays, 1);

        focusedDate = _viableDays[0];
      }
    }

    return focusedDate;
  };

  _proto.getModifiers = function getModifiers(visibleDays) {
    var _this4 = this;

    var modifiers = {};
    Object.keys(visibleDays).forEach(function (month) {
      modifiers[month] = {};
      visibleDays[month].forEach(function (day) {
        modifiers[month][toISODateString(day)] = _this4.getModifiersForDay(day);
      });
    });
    return modifiers;
  };

  _proto.getModifiersForDay = function getModifiersForDay(day) {
    var _this5 = this;

    return new Set(Object.keys(this.modifiers).filter(function (modifier) {
      return _this5.modifiers[modifier](day);
    }));
  };

  _proto.getStateForNewMonth = function getStateForNewMonth(nextProps) {
    var _this6 = this;

    var initialVisibleMonth = nextProps.initialVisibleMonth,
        date = nextProps.date,
        numberOfMonths = nextProps.numberOfMonths,
        enableOutsideDays = nextProps.enableOutsideDays;
    var initialVisibleMonthThunk = initialVisibleMonth || (date ? function () {
      return date;
    } : function () {
      return _this6.today;
    });
    var currentMonth = initialVisibleMonthThunk();
    var visibleDays = this.getModifiers(getVisibleDays(currentMonth, numberOfMonths, enableOutsideDays));
    return {
      currentMonth: currentMonth,
      visibleDays: visibleDays
    };
  };

  _proto.addModifier = function addModifier(updatedDays, day, modifier) {
    var _this$props8 = this.props,
        numberOfVisibleMonths = _this$props8.numberOfMonths,
        enableOutsideDays = _this$props8.enableOutsideDays,
        orientation = _this$props8.orientation;
    var _this$state5 = this.state,
        firstVisibleMonth = _this$state5.currentMonth,
        visibleDays = _this$state5.visibleDays;
    var currentMonth = firstVisibleMonth;
    var numberOfMonths = numberOfVisibleMonths;

    if (orientation === VERTICAL_SCROLLABLE) {
      numberOfMonths = Object.keys(visibleDays).length;
    } else {
      currentMonth = getPreviousMonthMemoLast(currentMonth);
      numberOfMonths += 2;
    }

    if (!day || !isDayVisible(day, currentMonth, numberOfMonths, enableOutsideDays)) {
      return updatedDays;
    }

    var iso = toISODateString(day);

    var updatedDaysAfterAddition = _objectSpread({}, updatedDays);

    if (enableOutsideDays) {
      var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
        return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
      });
      updatedDaysAfterAddition = monthsToUpdate.reduce(function (acc, monthIso) {
        var month = updatedDays[monthIso] || visibleDays[monthIso];

        if (!month[iso] || !month[iso].has(modifier)) {
          var modifiers = new Set(month[iso]);
          modifiers.add(modifier);
          acc[monthIso] = _objectSpread({}, month, _defineProperty({}, iso, modifiers));
        }

        return acc;
      }, updatedDaysAfterAddition);
    } else {
      var monthIso = toISOMonthString(day);
      var month = updatedDays[monthIso] || visibleDays[monthIso] || {};

      if (!month[iso] || !month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers.add(modifier);
        updatedDaysAfterAddition[monthIso] = _objectSpread({}, month, _defineProperty({}, iso, modifiers));
      }
    }

    return updatedDaysAfterAddition;
  };

  _proto.deleteModifier = function deleteModifier(updatedDays, day, modifier) {
    var _this$props9 = this.props,
        numberOfVisibleMonths = _this$props9.numberOfMonths,
        enableOutsideDays = _this$props9.enableOutsideDays,
        orientation = _this$props9.orientation;
    var _this$state6 = this.state,
        firstVisibleMonth = _this$state6.currentMonth,
        visibleDays = _this$state6.visibleDays;
    var currentMonth = firstVisibleMonth;
    var numberOfMonths = numberOfVisibleMonths;

    if (orientation === VERTICAL_SCROLLABLE) {
      numberOfMonths = Object.keys(visibleDays).length;
    } else {
      currentMonth = getPreviousMonthMemoLast(currentMonth);
      numberOfMonths += 2;
    }

    if (!day || !isDayVisible(day, currentMonth, numberOfMonths, enableOutsideDays)) {
      return updatedDays;
    }

    var iso = toISODateString(day);

    var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);

    if (enableOutsideDays) {
      var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
        return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
      });
      updatedDaysAfterDeletion = monthsToUpdate.reduce(function (acc, monthIso) {
        var month = updatedDays[monthIso] || visibleDays[monthIso];

        if (month[iso] && month[iso].has(modifier)) {
          var modifiers = new Set(month[iso]);
          modifiers["delete"](modifier);
          acc[monthIso] = _objectSpread({}, month, _defineProperty({}, iso, modifiers));
        }

        return acc;
      }, updatedDaysAfterDeletion);
    } else {
      var monthIso = toISOMonthString(day);
      var month = updatedDays[monthIso] || visibleDays[monthIso];

      if (month[iso] && month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers["delete"](modifier);
        updatedDaysAfterDeletion[monthIso] = _objectSpread({}, month, _defineProperty({}, iso, modifiers));
      }
    }

    return updatedDaysAfterDeletion;
  };

  _proto.isBlocked = function isBlocked(day) {
    var _this$props10 = this.props,
        isDayBlocked = _this$props10.isDayBlocked,
        isOutsideRange = _this$props10.isOutsideRange;
    return isDayBlocked(day) || isOutsideRange(day);
  };

  _proto.isHovered = function isHovered(day) {
    var _ref2 = this.state || {},
        hoverDate = _ref2.hoverDate;

    return isSameDay(day, hoverDate);
  };

  _proto.isSelected = function isSelected(day) {
    var date = this.props.date;
    return isSameDay(day, date);
  };

  _proto.isToday = function isToday(day) {
    return isSameDay(day, this.today);
  };

  _proto.isFirstDayOfWeek = function isFirstDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === (firstDayOfWeek || moment.localeData().firstDayOfWeek());
  };

  _proto.isLastDayOfWeek = function isLastDayOfWeek(day) {
    var firstDayOfWeek = this.props.firstDayOfWeek;
    return day.day() === ((firstDayOfWeek || moment.localeData().firstDayOfWeek()) + 6) % 7;
  };

  _proto.render = function render() {
    var _this$props11 = this.props,
        numberOfMonths = _this$props11.numberOfMonths,
        orientation = _this$props11.orientation,
        monthFormat = _this$props11.monthFormat,
        renderMonthText = _this$props11.renderMonthText,
        navPrev = _this$props11.navPrev,
        navNext = _this$props11.navNext,
        onOutsideClick = _this$props11.onOutsideClick,
        onShiftTab = _this$props11.onShiftTab,
        onTab = _this$props11.onTab,
        withPortal = _this$props11.withPortal,
        focused = _this$props11.focused,
        enableOutsideDays = _this$props11.enableOutsideDays,
        hideKeyboardShortcutsPanel = _this$props11.hideKeyboardShortcutsPanel,
        daySize = _this$props11.daySize,
        firstDayOfWeek = _this$props11.firstDayOfWeek,
        renderCalendarDay = _this$props11.renderCalendarDay,
        renderDayContents = _this$props11.renderDayContents,
        renderCalendarInfo = _this$props11.renderCalendarInfo,
        renderMonthElement = _this$props11.renderMonthElement,
        calendarInfoPosition = _this$props11.calendarInfoPosition,
        isFocused = _this$props11.isFocused,
        isRTL = _this$props11.isRTL,
        phrases = _this$props11.phrases,
        dayAriaLabelFormat = _this$props11.dayAriaLabelFormat,
        onBlur = _this$props11.onBlur,
        showKeyboardShortcuts = _this$props11.showKeyboardShortcuts,
        weekDayFormat = _this$props11.weekDayFormat,
        verticalHeight = _this$props11.verticalHeight,
        noBorder = _this$props11.noBorder,
        transitionDuration = _this$props11.transitionDuration,
        verticalBorderSpacing = _this$props11.verticalBorderSpacing,
        horizontalMonthPadding = _this$props11.horizontalMonthPadding;
    var _this$state7 = this.state,
        currentMonth = _this$state7.currentMonth,
        visibleDays = _this$state7.visibleDays;
    return React.createElement(DayPicker, {
      orientation: orientation,
      enableOutsideDays: enableOutsideDays,
      modifiers: visibleDays,
      numberOfMonths: numberOfMonths,
      onDayClick: this.onDayClick,
      onDayMouseEnter: this.onDayMouseEnter,
      onDayMouseLeave: this.onDayMouseLeave,
      onPrevMonthClick: this.onPrevMonthClick,
      onNextMonthClick: this.onNextMonthClick,
      onMonthChange: this.onMonthChange,
      onYearChange: this.onYearChange,
      monthFormat: monthFormat,
      withPortal: withPortal,
      hidden: !focused,
      hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
      initialVisibleMonth: function initialVisibleMonth() {
        return currentMonth;
      },
      firstDayOfWeek: firstDayOfWeek,
      onOutsideClick: onOutsideClick,
      navPrev: navPrev,
      navNext: navNext,
      renderMonthText: renderMonthText,
      renderCalendarDay: renderCalendarDay,
      renderDayContents: renderDayContents,
      renderCalendarInfo: renderCalendarInfo,
      renderMonthElement: renderMonthElement,
      calendarInfoPosition: calendarInfoPosition,
      isFocused: isFocused,
      getFirstFocusableDay: this.getFirstFocusableDay,
      onBlur: onBlur,
      onTab: onTab,
      onShiftTab: onShiftTab,
      phrases: phrases,
      daySize: daySize,
      isRTL: isRTL,
      showKeyboardShortcuts: showKeyboardShortcuts,
      weekDayFormat: weekDayFormat,
      dayAriaLabelFormat: dayAriaLabelFormat,
      verticalHeight: verticalHeight,
      noBorder: noBorder,
      transitionDuration: transitionDuration,
      verticalBorderSpacing: verticalBorderSpacing,
      horizontalMonthPadding: horizontalMonthPadding
    });
  };

  return DayPickerSingleDateController;
}(React.PureComponent || React.Component);

export { DayPickerSingleDateController as default };
DayPickerSingleDateController.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
DayPickerSingleDateController.defaultProps = defaultProps;