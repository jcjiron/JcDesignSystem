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
exports.List = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var text_styles_1 = require('../typography/text-styles')
require('../../../assets/styles/bootstrap/list-group.scss')
var Ul = styled_components_1.default.ul(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  ',
                '\n  &.direction-horizontal {\n    flex-direction: row !important;\n    flex-wrap: wrap;\n    li {\n      margin: 0 1rem 0 0;\n      ',
                '\n      margin-right: 0px;\n    }\n  }\n',
            ],
            [
                '\n  ',
                '\n  &.direction-horizontal {\n    flex-direction: row !important;\n    flex-wrap: wrap;\n    li {\n      margin: 0 1rem 0 0;\n      ',
                '\n      margin-right: 0px;\n    }\n  }\n',
            ]
        )),
    text_styles_1.Default,
    function (props) {
        return 'flex-basis: calc(100% / '.concat(props.columns || '1', ' );')
    }
)
var List = function (_a) {
    var children = _a.children,
        _b = _a.direction,
        direction = _b === void 0 ? 'vertical' : _b,
        _c = _a.className,
        className = _c === void 0 ? '' : _c,
        _d = _a.columns,
        columns = _d === void 0 ? 1 : _d
    return (0, jsx_runtime_1.jsx)(
        Ul,
        __assign(
            {
                columns: columns,
                className: 'list-group direction-'
                    .concat(direction, ' ')
                    .concat(className),
            },
            { children: children }
        )
    )
}
exports.List = List
var templateObject_1
