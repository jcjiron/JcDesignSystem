'use strict'
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Calendar = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
require('./calendar.styles.scss')
require('./calendar.default.scss')
var react_date_range_1 = require('@casai-org/react-date-range')
var StyledCalendar_1 = __importDefault(require('./StyledCalendar'))
var calendarConfig = {
    editableDateInputs: false,
    moveRangeOnFirstSelection: false,
    showMonthAndYearPickers: false,
    direction: 'horizontal',
    showSelectionPreview: false,
    showPreview: false,
    weekdayDisplayFormat: 'EEEEEE',
    dayDisplayFormat: 'dd',
    dragSelectionEnabled: false,
}
var Calendar = function (_a) {
    var resetRange = _a.resetRange,
        _b = _a.variant,
        variant = _b === void 0 ? 'dark' : _b,
        _c = _a.columns,
        columns = _c === void 0 ? 2 : _c,
        _d = _a.className,
        className = _d === void 0 ? '' : _d,
        _e = _a.resetDateLabel,
        resetDateLabel = _e === void 0 ? 'Reset dates' : _e,
        _f = _a.showResetDateButton,
        showResetDateButton = _f === void 0 ? true : _f,
        _g = _a.noticeLabel,
        noticeLabel = _g === void 0 ? '' : _g,
        _calendarProps = __rest(_a, [
            'resetRange',
            'variant',
            'columns',
            'className',
            'resetDateLabel',
            'showResetDateButton',
            'noticeLabel',
        ])
    var calendarProps = __assign(__assign({}, _calendarProps), {
        months: columns,
    })
    return (0, jsx_runtime_1.jsxs)(
        StyledCalendar_1.default,
        __assign(
            { className: ''.concat(variant, ' ').concat(className) },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(
                        react_date_range_1.DateRange,
                        __assign({}, calendarConfig, calendarProps, {
                            className: variant,
                        })
                    ),
                    showResetDateButton &&
                        (0, jsx_runtime_1.jsxs)(
                            'div',
                            __assign(
                                {
                                    className: ''.concat(
                                        variant,
                                        ' controls px-4 pt-2 pb-3 d-flex justify-content-between align-items-center'
                                    ),
                                },
                                {
                                    children: [
                                        (0, jsx_runtime_1.jsx)(
                                            'span',
                                            __assign(
                                                { className: 'notice' },
                                                { children: noticeLabel }
                                            )
                                        ),
                                        (0, jsx_runtime_1.jsx)(
                                            'button',
                                            __assign(
                                                {
                                                    className:
                                                        'btn btn-link reset p-0 h-25',
                                                    onClick: resetRange,
                                                },
                                                { children: resetDateLabel }
                                            )
                                        ),
                                    ],
                                }
                            )
                        ),
                ],
            }
        )
    )
}
exports.Calendar = Calendar
