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
exports.Tabs = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var panel_1 = require('./panel')
var tab_context_1 = require('./tab-context')
var TabHeader_1 = require('./TabHeader')
var parseTabList_1 = __importDefault(require('./utils/parseTabList'))
var Tabs = function (_a) {
    var defaultActiveKey = _a.defaultActiveKey,
        children = _a.children,
        className = _a.className,
        _b = _a.mountOnEnter,
        mountOnEnter = _b === void 0 ? true : _b,
        props = __rest(_a, [
            'defaultActiveKey',
            'children',
            'className',
            'mountOnEnter',
        ])
    var _c = react_1.default.useState(defaultActiveKey),
        activeTab = _c[0],
        onTabChange = _c[1]
    var tabs = (0, parseTabList_1.default)(children)
    var isControlled = function (prop) {
        return props[prop] !== undefined
    }
    var getState = function () {
        var state = {
            onTabChange: onTabChange,
            activeTab: activeTab,
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
    return (0, jsx_runtime_1.jsxs)(
        tab_context_1.TabsContext.Provider,
        __assign(
            {
                value: {
                    activeTab: getState().activeTab,
                    setActiveTab: getState().onTabChange,
                    mountOnEnter: mountOnEnter,
                },
            },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(TabHeader_1.TabHeader, {
                        tabs: tabs,
                        className: className,
                    }),
                    children,
                ],
            }
        )
    )
}
exports.Tabs = Tabs
exports.Tabs.Panel = panel_1.Panel
