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
Object.defineProperty(exports, '__esModule', { value: true })
exports.MainFeatures = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var list_1 = require('./../../../list/list')
var MainFeatures = function (_a) {
    var children = _a.children
    return (0, jsx_runtime_1.jsx)(
        'section',
        __assign(
            { className: 'container' },
            {
                children: (0, jsx_runtime_1.jsx)(
                    list_1.List,
                    __assign(
                        { direction: 'horizontal', className: 'row' },
                        { children: children }
                    )
                ),
            }
        )
    )
}
exports.MainFeatures = MainFeatures
