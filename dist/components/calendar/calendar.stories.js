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
exports.Light = exports.Dark = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var addDays_1 = __importDefault(require('date-fns/addDays'))
var index_1 = require('./index')
exports.default = {
    title: 'Example/Calendar',
    component: index_1.Calendar,
    parameters: {
        layout: 'fullscreen',
    },
}
var checkoutDate = (0, addDays_1.default)(new Date(), 3)
var Base = function (_a) {
    var args = __rest(_a, [])
    var _b = (0, react_1.useState)({
            startDate: (0, addDays_1.default)(new Date(), 1),
            endDate: (0, addDays_1.default)(new Date(), 4),
            key: 'selection',
        }),
        calendarSelectionRange = _b[0],
        setCalendarSelectionRange = _b[1]
    var handleSelectRange = function (_a) {
        var selection = _a.selection
        setCalendarSelectionRange(selection)
    }
    return (0, jsx_runtime_1.jsx)(
        index_1.Calendar,
        __assign(
            {
                ranges: [calendarSelectionRange],
                onChange: handleSelectRange,
                columns: 1,
                minDate: new Date(),
                maxDate: (0, addDays_1.default)(new Date(), 180),
            },
            args
        )
    )
}
exports.Dark = Base.bind({})
exports.Light = Base.bind({})
exports.Dark.args = {
    variant: 'dark',
    columns: 2,
    resetDateLabel: 'Reiniciar fechas',
    notice: 'Minimum of nights my vary',
    showResetDateButton: false,
}
exports.Light.args = {
    variant: 'light',
    columns: 2,
    resetDateLabel: 'Reiniciar fechas',
    notice: 'Minimum of nights my vary',
    showResetDateButton: false,
}
