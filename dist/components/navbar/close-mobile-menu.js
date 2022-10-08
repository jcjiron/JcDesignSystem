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
exports.MobileMenuButton = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var styled_components_1 = __importDefault(require('styled-components'))
var modal_1 = require('../modal')
var StyledButton = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  min-height: 8px !important;\n  padding: 0;\n  &.dropdown-item:hover,\n  .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: inherit;\n  }\n  .navbar-toggler {\n    border: none;\n    width: 35px;\n    height: 35px;\n    transform: scale(0.7);\n    font-size: 26px;\n    &:focus {\n      outline: 0;\n    }\n    .bar-menu {\n      display: block;\n      position: absolute;\n      height: 2px;\n      width: 100%;\n      border-radius: 2px;\n      opacity: 1;\n      left: 0;\n      -webkit-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n      &:nth-child(1) {\n        top: -3px;\n      }\n      &:nth-child(2),\n      &:nth-child(3) {\n        top: 13px;\n      }\n      &:nth-child(4) {\n        top: 30px;\n      }\n    }\n    &.open {\n      width: 25px;\n      height: 25px;\n      .bar-menu {\n        background: var(--black) !important;\n        &:nth-child(1) {\n          top: 18px;\n          width: 0%;\n          left: 50%;\n        }\n        &:nth-child(2) {\n          -webkit-transform: rotate(45deg);\n          -moz-transform: rotate(45deg);\n          -o-transform: rotate(45deg);\n          transform: rotate(45deg);\n        }\n        &:nth-child(3) {\n          -webkit-transform: rotate(-45deg);\n          -moz-transform: rotate(-45deg);\n          -o-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n        }\n        &:nth-child(4) {\n          top: 18px;\n          width: 0%;\n          left: 50%;\n        }\n      }\n    }\n  }\n',
            ],
            [
                '\n  min-height: 8px !important;\n  padding: 0;\n  &.dropdown-item:hover,\n  .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: inherit;\n  }\n  .navbar-toggler {\n    border: none;\n    width: 35px;\n    height: 35px;\n    transform: scale(0.7);\n    font-size: 26px;\n    &:focus {\n      outline: 0;\n    }\n    .bar-menu {\n      display: block;\n      position: absolute;\n      height: 2px;\n      width: 100%;\n      border-radius: 2px;\n      opacity: 1;\n      left: 0;\n      -webkit-transform: rotate(0deg);\n      -moz-transform: rotate(0deg);\n      -o-transform: rotate(0deg);\n      transform: rotate(0deg);\n      &:nth-child(1) {\n        top: -3px;\n      }\n      &:nth-child(2),\n      &:nth-child(3) {\n        top: 13px;\n      }\n      &:nth-child(4) {\n        top: 30px;\n      }\n    }\n    &.open {\n      width: 25px;\n      height: 25px;\n      .bar-menu {\n        background: var(--black) !important;\n        &:nth-child(1) {\n          top: 18px;\n          width: 0%;\n          left: 50%;\n        }\n        &:nth-child(2) {\n          -webkit-transform: rotate(45deg);\n          -moz-transform: rotate(45deg);\n          -o-transform: rotate(45deg);\n          transform: rotate(45deg);\n        }\n        &:nth-child(3) {\n          -webkit-transform: rotate(-45deg);\n          -moz-transform: rotate(-45deg);\n          -o-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n        }\n        &:nth-child(4) {\n          top: 18px;\n          width: 0%;\n          left: 50%;\n        }\n      }\n    }\n  }\n',
            ]
        ))
)
var MobileMenuButton = function (_a) {
    var isMenuOpen = _a.isMenuOpen,
        clickHandler = _a.clickHandler,
        className = _a.className
    ;(0, react_1.useEffect)(
        function () {
            ;(0, modal_1.preventScrollOnBody)({
                show: isMenuOpen,
                pageBody: document.querySelector('body'),
                modalContainer: document.querySelector('.root-portal'),
            })
        },
        [isMenuOpen]
    )
    return (0, jsx_runtime_1.jsx)(
        StyledButton,
        __assign(
            {
                className: ''
                    .concat(className, ' justify-content-end ')
                    .concat(isMenuOpen ? 'pr-4' : ''),
            },
            {
                children: (0, jsx_runtime_1.jsxs)(
                    'button',
                    __assign(
                        {
                            className: 'navbar-toggler '.concat(
                                isMenuOpen ? 'open' : ''
                            ),
                            onClick: clickHandler,
                            type: 'button',
                            'data-toggle': 'collapse',
                            'data-target': '#navbarMenu',
                            'aria-controls': 'navbarMenu',
                            'aria-expanded': 'false',
                            'aria-label': 'Toggle navigation',
                        },
                        {
                            children: [
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'bar-menu',
                                }),
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'bar-menu',
                                }),
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'bar-menu',
                                }),
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'bar-menu',
                                }),
                            ],
                        }
                    )
                ),
            }
        )
    )
}
exports.MobileMenuButton = MobileMenuButton
var templateObject_1
