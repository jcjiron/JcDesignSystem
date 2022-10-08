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
exports.FormCheck = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var FormCheck = function (_a) {
    var children = _a.children
    return (0, jsx_runtime_1.jsx)(
        'div',
        __assign({ className: 'form-check' }, { children: children })
    )
}
exports.FormCheck = FormCheck
