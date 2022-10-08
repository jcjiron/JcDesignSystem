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
exports.Disabled =
    exports.WithLoader =
    exports.WithErrorMessage =
    exports.WithSuccessMessage =
    exports.DefaultWithMessage =
    exports.Default =
        void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var _1 = require('.')
var styled_components_1 = __importDefault(require('styled-components'))
var icon_1 = require('../icon')
var button_1 = __importDefault(require('../button'))
exports.default = {
    title: 'inputs/Generic Input',
    component: icon_1.Icon,
}
var placeholder = 'Promo Code'
var buttonText = 'Apply'
var defaultMessageType = 'default'
var defaultMessage = 'this is an example message'
var iconVariant = 'icon-Promo-code'
var Container = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  background: var(--white-bg);\n  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n    0px 2px 4px rgba(18, 21, 27, 0.15);\n  border-radius: 8px;\n  width: min-content;\n  padding: 24px;\n',
            ],
            [
                '\n  background: var(--white-bg);\n  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n    0px 2px 4px rgba(18, 21, 27, 0.15);\n  border-radius: 8px;\n  width: min-content;\n  padding: 24px;\n',
            ]
        ))
)
var StyledButton = (0, styled_components_1.default)(button_1.default)(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            ["\n  &.btn[type='submit'] {\n    min-width: auto;\n  }\n"],
            ["\n  &.btn[type='submit'] {\n    min-width: auto;\n  }\n"]
        ))
)
var Default = function (args) {
    var _a = (0, react_1.useState)(''),
        currentValue = _a[0],
        setCurrentValue = _a[1]
    var onChange = function (e) {
        setCurrentValue(e.target.value)
    }
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.TextField,
            __assign({}, args, { value: currentValue, onChange: onChange })
        ),
    })
}
exports.Default = Default
exports.Default.args = {
    placeholder: placeholder,
}
var DefaultWithMessage = function (args) {
    var _a = (0, react_1.useState)(''),
        currentValue = _a[0],
        setCurrentValue = _a[1]
    var onChange = function (e) {
        setCurrentValue(e.target.value)
    }
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.TextField,
            __assign({}, args, {
                value: currentValue,
                onChange: onChange,
                messageContent: (0, jsx_runtime_1.jsx)('span', {
                    children: defaultMessage,
                }),
                messageType: defaultMessageType,
                showMessage: true,
                prefixElement: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                    className: 'left-icon',
                    variant: iconVariant,
                }),
                sufixElement: (0, jsx_runtime_1.jsx)(
                    StyledButton,
                    __assign(
                        {
                            className: 'mx-3 apply-button',
                            variant: 'transparent',
                            disabled: !currentValue.trim(),
                            type: 'submit',
                        },
                        { children: buttonText }
                    )
                ),
            })
        ),
    })
}
exports.DefaultWithMessage = DefaultWithMessage
exports.DefaultWithMessage.args = {
    placeholder: placeholder,
}
var WithSuccessMessage = function (args) {
    var _a = (0, react_1.useState)(''),
        currentValue = _a[0],
        setCurrentValue = _a[1]
    var onChange = function (e) {
        setCurrentValue(e.target.value)
    }
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.TextField,
            __assign({}, args, {
                messageContent: (0, jsx_runtime_1.jsx)('span', {
                    children: defaultMessage,
                }),
                messageType: 'success',
                value: currentValue,
                onChange: onChange,
                showMessage: true,
                prefixElement: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                    className: 'left-icon',
                    variant: iconVariant,
                }),
                sufixElement: (0, jsx_runtime_1.jsx)(
                    StyledButton,
                    __assign(
                        {
                            className: 'mx-3 apply-button',
                            variant: 'transparent',
                            disabled: !currentValue.trim(),
                            type: 'submit',
                        },
                        { children: buttonText }
                    )
                ),
            })
        ),
    })
}
exports.WithSuccessMessage = WithSuccessMessage
exports.WithSuccessMessage.args = {
    placeholder: placeholder,
    buttonText: buttonText,
}
var WithErrorMessage = function (args) {
    var _a = (0, react_1.useState)(''),
        currentValue = _a[0],
        setCurrentValue = _a[1]
    var onChange = function (e) {
        setCurrentValue(e.target.value)
    }
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.TextField,
            __assign({}, args, {
                messageContent: (0, jsx_runtime_1.jsx)('span', {
                    children: defaultMessage,
                }),
                messageType: 'error',
                value: currentValue,
                onChange: onChange,
                showMessage: true,
                prefixElement: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                    className: 'left-icon',
                    variant: iconVariant,
                }),
                sufixElement: (0, jsx_runtime_1.jsx)(
                    StyledButton,
                    __assign(
                        {
                            className: 'mx-3 apply-button',
                            variant: 'transparent',
                            disabled: !currentValue.trim(),
                            type: 'submit',
                        },
                        { children: buttonText }
                    )
                ),
            })
        ),
    })
}
exports.WithErrorMessage = WithErrorMessage
exports.WithErrorMessage.args = {
    placeholder: placeholder,
    buttonText: buttonText,
}
var WithLoader = function (args) {
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.TextField,
            __assign({}, args, {
                isLoading: true,
                loader: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                    variant: 'icon-Loading-dots',
                }),
                prefixElement: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                    className: 'left-icon',
                    variant: iconVariant,
                }),
                sufixElement: (0, jsx_runtime_1.jsx)(
                    StyledButton,
                    __assign(
                        {
                            className: 'mx-3 apply-button',
                            variant: 'transparent',
                            type: 'submit',
                        },
                        { children: buttonText }
                    )
                ),
            })
        ),
    })
}
exports.WithLoader = WithLoader
exports.WithLoader.args = {
    placeholder: placeholder,
    buttonText: buttonText,
}
var Disabled = function (args) {
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.TextField,
            __assign({}, args, {
                isDisabled: true,
                prefixElement: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                    className: 'left-icon',
                    variant: iconVariant,
                }),
                sufixElement: (0, jsx_runtime_1.jsx)(
                    StyledButton,
                    __assign(
                        {
                            className: 'mx-3 apply-button',
                            variant: 'transparent',
                            disabled: true,
                            type: 'submit',
                        },
                        { children: buttonText }
                    )
                ),
            })
        ),
    })
}
exports.Disabled = Disabled
exports.Disabled.args = {
    placeholder: placeholder,
    buttonText: buttonText,
}
var templateObject_1, templateObject_2
