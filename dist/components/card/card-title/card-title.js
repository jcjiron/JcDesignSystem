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
exports.CardTitle = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var StyledCardTitle = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n&.dark {\n  span {\n      color: var(--neutral-100);\n      font-size: 16px;\n      line-height: 22px;\n      font-weight: 500;\n  }\n}\n&.light {\n  span {\n      color: var(--primary-800);\n      font-size: 16px;\n      line-height: 22px;\n      font-weight: 500;\n  }\n}\n',
            ],
            [
                '\n&.dark {\n  span {\n      color: var(--neutral-100);\n      font-size: 16px;\n      line-height: 22px;\n      font-weight: 500;\n  }\n}\n&.light {\n  span {\n      color: var(--primary-800);\n      font-size: 16px;\n      line-height: 22px;\n      font-weight: 500;\n  }\n}\n',
            ]
        ))
)
var CardTitle = function (_a) {
    var variant = _a.variant,
        children = _a.children
    return (0, jsx_runtime_1.jsx)(
        StyledCardTitle,
        __assign(
            { className: ''.concat(variant) },
            { children: (0, jsx_runtime_1.jsx)('span', { children: children }) }
        )
    )
}
exports.CardTitle = CardTitle
exports.default = exports.CardTitle
var templateObject_1
