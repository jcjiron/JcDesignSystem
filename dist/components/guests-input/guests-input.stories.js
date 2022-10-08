'use strict'
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw })
        } else {
            cooked.raw = raw
        }
        return cooked
    }
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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Default = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var _1 = require('.')
var styled_components_1 = __importDefault(require('styled-components'))
exports.default = {
    title: 'inputs/Guests Input',
}
var text = 'Guests'
var Container = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  background: #ffffff;\n  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n    0px 2px 4px rgba(18, 21, 27, 0.15);\n  border-radius: 8px;\n  width: 350px;\n  padding: 24px;\n',
            ],
            [
                '\n  background: #ffffff;\n  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n    0px 2px 4px rgba(18, 21, 27, 0.15);\n  border-radius: 8px;\n  width: 350px;\n  padding: 24px;\n',
            ]
        ))
)
var Default = function (args) {
    var _a = react_1.default.useState(1),
        count = _a[0],
        setCount = _a[1]
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.GuestsInput,
            __assign({}, args, {
                as: 'div',
                value: count,
                onChange: function (value) {
                    return setCount(value)
                },
            })
        ),
    })
}
exports.Default = Default
exports.Default.args = {
    placeholder: text,
    max: 10,
    min: 1,
}
var templateObject_1
