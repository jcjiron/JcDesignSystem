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
exports.CardLabel = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var StyledCardLabel = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\noverflow: hidden;\n.label {\n    background: var(--truewhite);\n    color: var(--primary);\n    width: 67px;\n    height: 24px;\n    border-radius: 4px;\n    border: 1px solid var(--neutral-200); \n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 500;\n  }\n',
            ],
            [
                '\noverflow: hidden;\n.label {\n    background: var(--truewhite);\n    color: var(--primary);\n    width: 67px;\n    height: 24px;\n    border-radius: 4px;\n    border: 1px solid var(--neutral-200); \n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 500;\n  }\n',
            ]
        ))
)
var CardLabel = function (_a) {
    var children = _a.children
    return (0, jsx_runtime_1.jsx)(StyledCardLabel, {
        children: (0, jsx_runtime_1.jsx)(
            'div',
            __assign(
                { className: 'label' },
                {
                    children: (0, jsx_runtime_1.jsx)('span', {
                        children: children,
                    }),
                }
            )
        ),
    })
}
exports.CardLabel = CardLabel
exports.default = exports.CardLabel
var templateObject_1
