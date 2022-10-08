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
exports.Collapsible = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var collapsible_body_1 = require('./collapsible-body')
var collapsible_context_1 = require('./collapsible-context')
var collapsible_header_1 = require('./collapsible-header')
var Collapsible = function (_a) {
    var children = _a.children,
        props = __rest(_a, ['children'])
    var _b = react_1.default.useState(false),
        isOpen = _b[0],
        setIsOpen = _b[1]
    var isControlled = function (prop) {
        return props[prop] !== undefined
    }
    var getState = function () {
        var state = {
            isOpen: isOpen,
            onToggle: onToggle,
        }
        return Object.entries(state).reduce(function (combinedState, _a) {
            var key = _a[0],
                value = _a[1]
            if (isControlled(key)) {
                combinedState[key] = props[key]
            } else {
                combinedState[key] = value
            }
            return combinedState
        }, {})
    }
    var onToggle = function () {
        return setIsOpen(function (v) {
            return !v
        })
    }
    return (0, jsx_runtime_1.jsx)(
        collapsible_context_1.CollapsibleContext.Provider,
        __assign(
            {
                value: {
                    isOpen: getState().isOpen,
                    onToggle: getState().onToggle,
                },
            },
            { children: children }
        )
    )
}
exports.Collapsible = Collapsible
exports.Collapsible.Body = collapsible_body_1.CollapsibleBody
exports.Collapsible.Header = collapsible_header_1.CollapsibleHeader
