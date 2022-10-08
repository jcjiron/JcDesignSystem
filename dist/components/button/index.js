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
exports.Button = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
require('../../../assets/styles/bootstrap/button.scss')
var styled_components_1 = __importDefault(require('styled-components'))
var classnames_1 = __importDefault(require('classnames'))
var text_styles_1 = require('../typography/text-styles')
var StyledButton = styled_components_1.default.button(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  &.btn {\n    /* default font size */\n    ',
                '\n    width: 170px;\n    height: 50px;\n    padding: 0px 20px;\n    border-radius: 50px;\n    text-decoration: none;\n    &:focus,\n    &:active {\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n  &.btn-primary {\n    font-weight: 600;\n    color: #fff;\n    &:focus,\n    &:active {\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n    &:disabled,\n    &:disabled:hover {\n      background: rgba(0, 0, 0, 0.25);\n      color: #fff;\n      border: none;\n    }\n  }\n  &.btn-neutral {\n    outline: 0 !important;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    background: white;\n    padding: 10px 40px;\n    display: block;\n    &:focus,\n    &:hover,\n    &:active {\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n      background-color: white !important;\n      border: 1px solid rgba(0, 0, 0, 0.15) !important;\n    }\n  }\n\n  &.btn-inline-link {\n    font-weight: 400;\n    color: var(--primary);\n    width: inherit;\n    height: inherit;\n    padding: 0;\n    text-decoration: none;\n    display: inline-block !important;\n    &:hover {\n      text-decoration: underline;\n    }\n    &:focus,\n    &:active {\n      text-decoration: underline;\n      color: var(--primary-darker);\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n\n  &.btn.btn-circle {\n    padding: 0px;\n    border-radius: 50%;\n    height: 48px;\n    width: 48px;\n  }\n  &.btn-transparent {\n    border: none;\n    background: transparent;\n    padding: 0px;\n    height: fit-content;\n    width: fit-content;\n    border-radius: 0;\n    &.btn:focus,\n    &.btn:active {\n      transform: scale(1);\n    }\n  }\n  &.btn-square,\n  &.btn-square:focus {\n    &.btn.btn-primary {\n      background: white;\n      border: 1px solid rgba(0, 0, 0, 0.15);\n    }\n    color: rgba(0, 0, 0, 1);\n    padding: 0;\n    font-weight: 500;\n    border-radius: 6px;\n    &.btn:hover,\n    &.btn:active {\n      color: rgba(0, 0, 0, 1);\n      background: rgba(139, 111, 201, 0.1);\n      border: 1px solid #8b6fc9;\n    }\n  }\n',
            ],
            [
                '\n  &.btn {\n    /* default font size */\n    ',
                '\n    width: 170px;\n    height: 50px;\n    padding: 0px 20px;\n    border-radius: 50px;\n    text-decoration: none;\n    &:focus,\n    &:active {\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n  &.btn-primary {\n    font-weight: 600;\n    color: #fff;\n    &:focus,\n    &:active {\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n    &:disabled,\n    &:disabled:hover {\n      background: rgba(0, 0, 0, 0.25);\n      color: #fff;\n      border: none;\n    }\n  }\n  &.btn-neutral {\n    outline: 0 !important;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    background: white;\n    padding: 10px 40px;\n    display: block;\n    &:focus,\n    &:hover,\n    &:active {\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n      background-color: white !important;\n      border: 1px solid rgba(0, 0, 0, 0.15) !important;\n    }\n  }\n\n  &.btn-inline-link {\n    font-weight: 400;\n    color: var(--primary);\n    width: inherit;\n    height: inherit;\n    padding: 0;\n    text-decoration: none;\n    display: inline-block !important;\n    &:hover {\n      text-decoration: underline;\n    }\n    &:focus,\n    &:active {\n      text-decoration: underline;\n      color: var(--primary-darker);\n      -webkit-box-shadow: none !important;\n      -moz-box-shadow: none !important;\n      box-shadow: none !important;\n    }\n  }\n\n  &.btn.btn-circle {\n    padding: 0px;\n    border-radius: 50%;\n    height: 48px;\n    width: 48px;\n  }\n  &.btn-transparent {\n    border: none;\n    background: transparent;\n    padding: 0px;\n    height: fit-content;\n    width: fit-content;\n    border-radius: 0;\n    &.btn:focus,\n    &.btn:active {\n      transform: scale(1);\n    }\n  }\n  &.btn-square,\n  &.btn-square:focus {\n    &.btn.btn-primary {\n      background: white;\n      border: 1px solid rgba(0, 0, 0, 0.15);\n    }\n    color: rgba(0, 0, 0, 1);\n    padding: 0;\n    font-weight: 500;\n    border-radius: 6px;\n    &.btn:hover,\n    &.btn:active {\n      color: rgba(0, 0, 0, 1);\n      background: rgba(139, 111, 201, 0.1);\n      border: 1px solid #8b6fc9;\n    }\n  }\n',
            ]
        )),
    text_styles_1.Default
)
var Button = function (_a) {
    var _b = _a.className,
        className = _b === void 0 ? '' : _b,
        _c = _a.variant,
        variant = _c === void 0 ? 'primary' : _c,
        _d = _a.size,
        size = _d === void 0 ? undefined : _d,
        children = _a.children,
        _e = _a.outline,
        outline = _e === void 0 ? false : _e,
        _f = _a.readonly,
        readonly = _f === void 0 ? false : _f,
        _g = _a.shape,
        shape = _g === void 0 ? 'round' : _g,
        icon = _a.icon,
        ref = _a.refer,
        props = __rest(_a, [
            'className',
            'variant',
            'size',
            'children',
            'outline',
            'readonly',
            'shape',
            'icon',
            'refer',
        ])
    var getButtonClasses = function () {
        var _a
        var isIconButton = icon && !children
        var btnClass = (0, classnames_1.default)([
            'btn',
            ((_a = {
                'btn-outline': outline,
            }),
            (_a['btn-'.concat(variant)] = variant),
            (_a['d-flex align-items-center justify-content-center'] = true),
            (_a['btn-'.concat(size)] = size),
            (_a["btn-circle text-center p-0'"] =
                shape === 'circle' && isIconButton),
            (_a['btn-square'] = shape === 'square'),
            _a),
            className,
        ])
        return btnClass
    }
    var classes = getButtonClasses()
    return (0, jsx_runtime_1.jsxs)(
        StyledButton,
        __assign({ className: classes, disabled: readonly, ref: ref }, props, {
            children: [
                icon ? icon : null,
                (0, jsx_runtime_1.jsx)(
                    'span',
                    __assign(
                        { className: icon && children ? 'ml-2' : '' },
                        { children: children }
                    )
                ),
            ],
        })
    )
}
exports.Button = Button
exports.default = exports.Button
var templateObject_1
