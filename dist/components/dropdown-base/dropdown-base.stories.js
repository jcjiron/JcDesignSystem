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
exports.Controlled = exports.FullScreen = exports.Primary = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var dropdown_base_1 = require('./dropdown-base')
var styled_components_1 = __importDefault(require('styled-components'))
var counter_1 = require('../counter')
exports.default = {
    title: 'Example/Dropdown Base',
    component: dropdown_base_1.DropdownBase,
}
var CounterContainer = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  width: 200px;\n  background: white;\n  border-radius: 5px;\n  padding: 1rem;\n',
            ],
            [
                '\n  width: 200px;\n  background: white;\n  border-radius: 5px;\n  padding: 1rem;\n',
            ]
        ))
)
var Template = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    var _b = react_1.default.useState(1),
        value = _b[0],
        setValue = _b[1]
    return (0, jsx_runtime_1.jsx)(
        dropdown_base_1.DropdownBase,
        __assign({}, args, {
            children: (0, jsx_runtime_1.jsx)(CounterContainer, {
                children: (0, jsx_runtime_1.jsx)(counter_1.Counter, {
                    placeholder: 'Guests',
                    onChange: setValue,
                    value: value,
                }),
            }),
        })
    )
}
var ControlledComponent = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    var _b = react_1.default.useState(1),
        value = _b[0],
        setValue = _b[1]
    var _c = react_1.default.useState(false),
        isOpen = _c[0],
        setIsOpen = _c[1]
    var onOpen = function () {
        setIsOpen(true)
    }
    var onClose = function () {
        setIsOpen(false)
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(
                'button',
                __assign({ onClick: onOpen }, { children: 'Open Dropdown' })
            ),
            (0, jsx_runtime_1.jsx)(
                dropdown_base_1.DropdownBase,
                __assign(
                    {},
                    args,
                    {
                        onOpenClick: onOpen,
                        isOpen: isOpen,
                        onCloseClick: onClose,
                    },
                    {
                        children: (0, jsx_runtime_1.jsx)(CounterContainer, {
                            children: (0, jsx_runtime_1.jsx)(
                                counter_1.Counter,
                                {
                                    placeholder: 'Guests',
                                    onChange: setValue,
                                    value: value,
                                }
                            ),
                        }),
                    }
                )
            ),
        ],
    })
}
exports.Primary = Template.bind({})
exports.FullScreen = Template.bind({})
exports.Controlled = ControlledComponent.bind({})
exports.Primary.args = {
    placeholder: 'Guests',
    fullScreen: false,
    variant: 'light',
    disabled: false,
}
exports.FullScreen.args = {
    placeholder: 'Guests',
    fullScreen: true,
    variant: 'light',
    disabled: false,
}
exports.Controlled.args = {
    placeholder: 'Guests',
    fullScreen: true,
    variant: 'light',
}
var templateObject_1
