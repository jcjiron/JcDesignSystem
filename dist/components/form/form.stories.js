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
Object.defineProperty(exports, '__esModule', { value: true })
exports.RadioExample = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = require('styled-components')
var index_1 = require('./index')
var form_check_1 = require('./form-check')
var COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
}
exports.default = {
    title: 'Example/Forms',
    component: index_1.Radio,
}
var Template = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    return (0, jsx_runtime_1.jsx)(
        styled_components_1.ThemeProvider,
        __assign(
            { theme: { colors: COLORS } },
            {
                children: (0, jsx_runtime_1.jsxs)('form', {
                    children: [
                        (0, jsx_runtime_1.jsx)(form_check_1.FormCheck, {
                            children: (0, jsx_runtime_1.jsx)(index_1.Radio, {
                                label: 'value1',
                                value: 'value1',
                                name: 'idradio',
                            }),
                        }),
                        (0, jsx_runtime_1.jsx)(form_check_1.FormCheck, {
                            children: (0, jsx_runtime_1.jsx)(index_1.Radio, {
                                label: 'value2',
                                value: 'value2',
                                name: 'idradio',
                                checked: true,
                            }),
                        }),
                    ],
                }),
            }
        )
    )
}
exports.RadioExample = Template.bind({})
