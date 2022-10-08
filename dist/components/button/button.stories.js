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
Object.defineProperty(exports, '__esModule', { value: true })
exports.LinkButton =
    exports.IconButtonWithText =
    exports.IconButton =
    exports.Square =
    exports.Transparent =
    exports.Primary =
        void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var _1 = require('./')
var icon_1 = require('../icon')
exports.default = {
    title: 'Example/Button',
    component: _1.Button,
}
var Template = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    return (0, jsx_runtime_1.jsx)(
        _1.Button,
        __assign({}, args, { children: children })
    )
}
exports.Primary = Template.bind({})
exports.Primary.args = {
    variant: 'primary',
    children: 'Label',
    size: 'lg',
    outline: false,
    shape: 'circle',
    disabled: false,
}
exports.Transparent = Template.bind({})
exports.Transparent.args = {
    variant: 'transparent',
    children: 'Label',
}
exports.Square = Template.bind({})
exports.Square.args = {
    variant: 'primary',
    children: 'Label',
    size: 'lg',
    outline: false,
    shape: 'square',
}
exports.IconButton = Template.bind({})
exports.IconButtonWithText = Template.bind({})
exports.IconButton.args = {
    variant: 'primary',
    shape: 'circle',
    icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: 'icon-Search' }),
    size: 'lg',
    outline: false,
}
exports.IconButtonWithText.args = {
    variant: 'primary',
    icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: 'icon-Search' }),
    children: 'Label',
    size: 'lg',
    outline: false,
    shape: 'circle',
}
var LinkButton = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    return (0, jsx_runtime_1.jsxs)('p', {
        children: [
            (0, jsx_runtime_1.jsx)(
                _1.Button,
                __assign({}, args, { children: children })
            ),
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ],
    })
}
exports.LinkButton = LinkButton
exports.LinkButton.args = {
    variant: 'inline-link',
    children: 'Lorem Ipsum',
}
