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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.WithContent =
    exports.WithChild =
    exports.Transparent =
    exports.Primary =
        void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var _1 = require('./')
var styled_components_1 = require('styled-components')
var nav_item_1 = require('./nav-item')
var action_nav_item_1 = require('./action-nav-item')
var dropdown_modal_navlink_1 = require('./dropdown-modal-navlink')
var dropdown_1 = require('../dropdown')
var form_1 = require('../form')
var nav_link_1 = require('./nav-link')
var dropdown_nav_link_1 = require('./dropdown-nav-link')
var icon_1 = require('../icon')
var close_mobile_menu_1 = require('./close-mobile-menu')
var button_1 = __importDefault(require('../button'))
var COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
}
exports.default = {
    title: 'Example/Navbar',
    component: _1.Navbar,
    parameters: {
        backgrounds: {
            default: 'Gray',
        },
    },
}
var Template = function (_a) {
    var args = __rest(_a, [])
    return (0, jsx_runtime_1.jsx)(
        styled_components_1.ThemeProvider,
        __assign(
            { theme: { colors: COLORS } },
            { children: (0, jsx_runtime_1.jsx)(_1.Navbar, __assign({}, args)) }
        )
    )
}
exports.Primary = Template.bind({})
exports.Transparent = Template.bind({})
exports.WithChild = Template.bind({})
var WithContent = function (_a) {
    var args = __rest(_a, [])
    return (0, jsx_runtime_1.jsxs)(
        styled_components_1.ThemeProvider,
        __assign(
            { theme: { colors: COLORS } },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(_1.Navbar, __assign({}, args)),
                    (0, jsx_runtime_1.jsxs)('div', {
                        children: [
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                            (0, jsx_runtime_1.jsx)('p', {
                                children:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam euismod, tristique ligula id, pellentesque dolor. Proin pellentesque scelerisque felis, sed luctus nibh suscipit placerat.',
                            }),
                        ],
                    }),
                ],
            }
        )
    )
}
exports.WithContent = WithContent
var MobileMenu = function (_a) {
    var closeMenu = _a.closeMenu,
        isMenuOpen = _a.isMenuOpen
    return (0, jsx_runtime_1.jsxs)(
        dropdown_1.DropDownMenu,
        __assign(
            { open: 'show' },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            close_mobile_menu_1.MobileMenuButton,
                            { clickHandler: closeMenu, isMenuOpen: isMenuOpen }
                        ),
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            'a',
                            __assign({ href: '#' }, { children: 'Action 0' })
                        ),
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownDivider, {}),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownHeader, {
                        children: 'Header demo',
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            'a',
                            __assign({ href: '#' }, { children: 'Action 1' })
                        ),
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownDivider, {}),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            'a',
                            __assign({ href: '#' }, { children: 'Action 2' })
                        ),
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            'a',
                            __assign({ href: '#' }, { children: 'Action 4' })
                        ),
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            'a',
                            __assign({ href: '#' }, { children: 'Action 3' })
                        ),
                    }),
                    (0, jsx_runtime_1.jsx)(dropdown_1.DropDownItem, {
                        children: (0, jsx_runtime_1.jsx)(
                            dropdown_modal_navlink_1.NavlinkMobileDropdownModal,
                            __assign(
                                {
                                    itemText: 'modal dropdown',
                                    closeMobileMenu: closeMenu,
                                },
                                {
                                    children: (0, jsx_runtime_1.jsxs)(
                                        dropdown_1.DropDownMenu,
                                        {
                                            children: [
                                                (0, jsx_runtime_1.jsx)(
                                                    dropdown_1.DropDownHeader,
                                                    { children: 'Header demo' }
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                    dropdown_1.DropDownItem,
                                                    {
                                                        children: (0,
                                                        jsx_runtime_1.jsx)(
                                                            'div',
                                                            {
                                                                children: (0,
                                                                jsx_runtime_1.jsxs)(
                                                                    'form',
                                                                    {
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                jsx_runtime_1.jsx)(
                                                                                    'div',
                                                                                    __assign(
                                                                                        {
                                                                                            className:
                                                                                                'form-group',
                                                                                        },
                                                                                        {
                                                                                            children:
                                                                                                (0,
                                                                                                jsx_runtime_1.jsx)(
                                                                                                    form_1.Radio,
                                                                                                    {
                                                                                                        label: 'value2',
                                                                                                        value: 'value2',
                                                                                                        name: 'idradio',
                                                                                                        checked: true,
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    )
                                                                                ),
                                                                                (0,
                                                                                jsx_runtime_1.jsx)(
                                                                                    'div',
                                                                                    __assign(
                                                                                        {
                                                                                            className:
                                                                                                'form-group',
                                                                                        },
                                                                                        {
                                                                                            children:
                                                                                                (0,
                                                                                                jsx_runtime_1.jsx)(
                                                                                                    form_1.Radio,
                                                                                                    {
                                                                                                        label: 'value1',
                                                                                                        value: 'value1',
                                                                                                        name: 'idradio',
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    )
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                            }
                                                        ),
                                                    }
                                                ),
                                            ],
                                        }
                                    ),
                                }
                            )
                        ),
                    }),
                ],
            }
        )
    )
}
var NavigationItems = function () {
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(nav_item_1.NavItem, {
                children: (0, jsx_runtime_1.jsx)(nav_link_1.NavLink, {
                    children: (0, jsx_runtime_1.jsx)('div', {
                        children: 'content',
                    }),
                }),
            }),
            (0, jsx_runtime_1.jsx)(nav_item_1.NavItem, {
                children: (0, jsx_runtime_1.jsx)(
                    dropdown_nav_link_1.DropDownNavLink,
                    __assign(
                        { label: 'dropdown content' },
                        {
                            children: (0, jsx_runtime_1.jsx)(
                                dropdown_1.DropDownMenu,
                                {
                                    children: (0, jsx_runtime_1.jsx)(
                                        dropdown_1.DropDownItem,
                                        {
                                            children: (0, jsx_runtime_1.jsx)(
                                                'a',
                                                __assign(
                                                    { href: '#' },
                                                    { children: 'Action 1' }
                                                )
                                            ),
                                        }
                                    ),
                                }
                            ),
                        }
                    )
                ),
            }),
            (0, jsx_runtime_1.jsx)(nav_item_1.NavItem, {
                children: (0, jsx_runtime_1.jsx)(nav_link_1.NavLink, {
                    children: (0, jsx_runtime_1.jsx)('div', {
                        children: 'content 3',
                    }),
                }),
            }),
        ],
    })
}
var ActionItems = function () {
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(
                action_nav_item_1.ActionNavItem,
                __assign(
                    { variant: 'dark' },
                    {
                        children: (0, jsx_runtime_1.jsx)(
                            action_nav_item_1.ActionDropDownNavLink,
                            __assign(
                                {
                                    itemText: 'action menu 1',
                                    Icon: (0, jsx_runtime_1.jsxs)(
                                        icon_1.Icon,
                                        __assign(
                                            { variant: 'icon-Icon-Sign-In' },
                                            {
                                                children: [
                                                    (0, jsx_runtime_1.jsx)(
                                                        'span',
                                                        { className: 'path1' }
                                                    ),
                                                    (0, jsx_runtime_1.jsx)(
                                                        'span',
                                                        { className: 'path2' }
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                },
                                {
                                    children: (0, jsx_runtime_1.jsxs)(
                                        dropdown_1.DropDownMenu,
                                        {
                                            children: [
                                                (0, jsx_runtime_1.jsx)(
                                                    dropdown_1.DropDownItem,
                                                    {
                                                        children: (0,
                                                        jsx_runtime_1.jsx)(
                                                            'a',
                                                            __assign(
                                                                { href: '#' },
                                                                {
                                                                    children:
                                                                        'Action 1',
                                                                }
                                                            )
                                                        ),
                                                    }
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                    dropdown_1.DropDownItem,
                                                    {
                                                        children: (0,
                                                        jsx_runtime_1.jsx)(
                                                            'a',
                                                            __assign(
                                                                { href: '#' },
                                                                {
                                                                    children:
                                                                        'Action 2',
                                                                }
                                                            )
                                                        ),
                                                    }
                                                ),
                                            ],
                                        }
                                    ),
                                }
                            )
                        ),
                    }
                )
            ),
            (0, jsx_runtime_1.jsx)(
                action_nav_item_1.ActionNavItem,
                __assign(
                    { variant: 'dark' },
                    {
                        children: (0, jsx_runtime_1.jsx)(
                            action_nav_item_1.ActionDropDownNavLink,
                            __assign(
                                {
                                    itemText: '',
                                    Icon: 'icon-Currency-and-Language',
                                },
                                {
                                    children: (0, jsx_runtime_1.jsxs)(
                                        dropdown_1.DropDownMenu,
                                        __assign(
                                            { alignment: 'right' },
                                            {
                                                children: [
                                                    (0, jsx_runtime_1.jsx)(
                                                        dropdown_1.DropDownHeader,
                                                        {
                                                            children:
                                                                'Header demo',
                                                        }
                                                    ),
                                                    (0, jsx_runtime_1.jsx)(
                                                        dropdown_1.DropDownItem,
                                                        {
                                                            children: (0,
                                                            jsx_runtime_1.jsx)(
                                                                'a',
                                                                __assign(
                                                                    {
                                                                        href: '#',
                                                                    },
                                                                    {
                                                                        children:
                                                                            'Action 1',
                                                                    }
                                                                )
                                                            ),
                                                        }
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                }
                            )
                        ),
                    }
                )
            ),
        ],
    })
}
exports.Primary.args = {
    variant: 'dark',
    navigationItems: (0, jsx_runtime_1.jsx)(NavigationItems, {}),
    actionItems: (0, jsx_runtime_1.jsx)(ActionItems, {}),
    MobileMenu: (0, jsx_runtime_1.jsx)(MobileMenu, {}),
    brand: (0, jsx_runtime_1.jsx)(
        'a',
        __assign(
            { className: 'navbar-brand', href: '#' },
            {
                children: (0, jsx_runtime_1.jsx)('i', {
                    className: 'icon-casai-logo-white',
                }),
            }
        )
    ),
}
exports.Primary.parameters = {
    backgrounds: { default: 'Dark' },
}
exports.Primary.args = {
    variant: 'light',
    navigationItems: (0, jsx_runtime_1.jsx)(NavigationItems, {}),
    actionItems: (0, jsx_runtime_1.jsx)(ActionItems, {}),
    MobileMenu: (0, jsx_runtime_1.jsx)(MobileMenu, {}),
    brand: (0, jsx_runtime_1.jsx)(
        'a',
        __assign(
            { className: 'navbar-brand', href: '#' },
            {
                children: (0, jsx_runtime_1.jsxs)(
                    icon_1.Icon,
                    __assign(
                        { variant: 'icon-Casai-Logo-Color' },
                        {
                            children: [
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'path1',
                                }),
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'path2',
                                }),
                            ],
                        }
                    )
                ),
            }
        )
    ),
}
exports.Transparent.parameters = {
    backgrounds: { default: 'Gray' },
}
exports.Transparent.args = {
    variant: 'transparent',
    navigationItems: (0, jsx_runtime_1.jsx)(NavigationItems, {}),
    actionItems: (0, jsx_runtime_1.jsx)(ActionItems, {}),
    MobileMenu: (0, jsx_runtime_1.jsx)(MobileMenu, {}),
    brand: (0, jsx_runtime_1.jsx)(
        'a',
        __assign(
            { className: 'navbar-brand', href: '#' },
            {
                children: (0, jsx_runtime_1.jsx)('i', {
                    className: 'icon-casai-logo-white',
                }),
            }
        )
    ),
}
exports.WithChild.parameters = {
    backgrounds: { default: 'Gray' },
}
exports.WithChild.args = {
    variant: 'transparent',
    children: (0, jsx_runtime_1.jsx)(
        button_1.default,
        __assign(
            {
                variant: 'primary',
                className:
                    'navbar-nav navigation-section ml-auto mt-lg-0 justify-content-center pt-2',
            },
            { children: 'Click me' }
        )
    ),
    brand: (0, jsx_runtime_1.jsx)(
        'a',
        __assign(
            { className: 'navbar-brand', href: '#' },
            {
                children: (0, jsx_runtime_1.jsx)('i', {
                    className: 'icon-casai-logo-white',
                }),
            }
        )
    ),
}
exports.WithContent.args = {
    variant: 'light',
    navigationItems: (0, jsx_runtime_1.jsx)(NavigationItems, {}),
    actionItems: (0, jsx_runtime_1.jsx)(ActionItems, {}),
    MobileMenu: (0, jsx_runtime_1.jsx)(MobileMenu, {}),
    brand: (0, jsx_runtime_1.jsx)(
        'a',
        __assign(
            { className: 'navbar-brand', href: '#' },
            {
                children: (0, jsx_runtime_1.jsxs)(
                    icon_1.Icon,
                    __assign(
                        { variant: 'icon-Casai-Logo-Color' },
                        {
                            children: [
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'path1',
                                }),
                                (0, jsx_runtime_1.jsx)('span', {
                                    className: 'path2',
                                }),
                            ],
                        }
                    )
                ),
            }
        )
    ),
}
