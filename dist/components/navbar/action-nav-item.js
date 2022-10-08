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
exports.ActionNavItem = exports.ActionDropDownNavLink = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var dropdown_1 = require('../dropdown')
var icon_1 = require('../icon')
var Li = styled_components_1.default.nav(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16.8px;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  .nav-link {\n    border-radius: 20px;\n    cursor: pointer;\n    border: 1px solid #adadad;\n    border-color: rgba(173, 173, 173, 0.3);\n    .nav-link-content {\n      padding-left: 6px;\n    }\n  }  \n  .icon {\n    position: relative;\n    top: 2px;\n    font-size: 16px;\n  }\n  &.light {\n    .nav-link {\n      &:hover {\n        background-color: var(--dark);\n        color: var(--white);\n      }\n    }\n  }\n  &.dark {\n    .nav-link {\n      &:hover {\n        background-color: var(--white);        \n        color: var(--dark);\n      }\n    }\n  }\n  &.transparent {\n    .nav-link {\n      &:hover {\n        background-color: var(--white);\n        color: var(--dark);\n      }\n    }\n  }\n',
            ],
            [
                '\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16.8px;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  .nav-link {\n    border-radius: 20px;\n    cursor: pointer;\n    border: 1px solid #adadad;\n    border-color: rgba(173, 173, 173, 0.3);\n    .nav-link-content {\n      padding-left: 6px;\n    }\n  }  \n  .icon {\n    position: relative;\n    top: 2px;\n    font-size: 16px;\n  }\n  &.light {\n    .nav-link {\n      &:hover {\n        background-color: var(--dark);\n        color: var(--white);\n      }\n    }\n  }\n  &.dark {\n    .nav-link {\n      &:hover {\n        background-color: var(--white);        \n        color: var(--dark);\n      }\n    }\n  }\n  &.transparent {\n    .nav-link {\n      &:hover {\n        background-color: var(--white);\n        color: var(--dark);\n      }\n    }\n  }\n',
            ]
        ))
)
var ActionDropDownNavLink = function (_a) {
    var itemText = _a.itemText,
        _b = _a.Icon,
        CustomIcon = _b === void 0 ? '' : _b,
        children = _a.children,
        _c = _a.className,
        className = _c === void 0 ? '' : _c
    return (0, jsx_runtime_1.jsx)(
        dropdown_1.DropDown,
        __assign(
            { className: ''.concat(className, ' dropdown') },
            {
                children: (0, jsx_runtime_1.jsx)(
                    dropdown_1.DropDownToggle,
                    __assign(
                        { className: 'nav-link', dropDownMenu: children },
                        {
                            children: (0, jsx_runtime_1.jsxs)(
                                jsx_runtime_1.Fragment,
                                {
                                    children: [
                                        typeof CustomIcon === 'string'
                                            ? (0, jsx_runtime_1.jsx)(
                                                  icon_1.Icon,
                                                  { variant: CustomIcon }
                                              )
                                            : CustomIcon,
                                        (0, jsx_runtime_1.jsx)(
                                            'span',
                                            __assign(
                                                {
                                                    className:
                                                        'nav-link-content',
                                                },
                                                { children: itemText }
                                            )
                                        ),
                                    ],
                                }
                            ),
                        }
                    )
                ),
            }
        )
    )
}
exports.ActionDropDownNavLink = ActionDropDownNavLink
var ActionNavItem = function (_a) {
    var _b = _a.variant,
        variant = _b === void 0 ? 'dark' : _b,
        children = _a.children
    return (0, jsx_runtime_1.jsx)(
        Li,
        __assign(
            { className: ''.concat(variant, ' nav-item') },
            { children: children }
        )
    )
}
exports.ActionNavItem = ActionNavItem
var templateObject_1
