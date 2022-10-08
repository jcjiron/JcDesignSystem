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
exports.Primary = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var _1 = require('.')
var index_1 = require('../../../icon/index')
exports.default = {
    title: 'Example/AboutDepartment',
    component: _1.AboutApartment,
}
var Template = function (_a) {
    var args = __rest(_a, [])
    return (0, jsx_runtime_1.jsx)(_1.AboutApartment, __assign({}, args))
}
exports.Primary = Template.bind({})
var args = {
    icon: (0, jsx_runtime_1.jsxs)(
        index_1.Icon,
        __assign(
            { variant: 'icon-Badge-Facebook' },
            {
                children: [
                    (0, jsx_runtime_1.jsx)('span', { className: 'path1' }),
                    (0, jsx_runtime_1.jsx)('span', { className: 'path2' }),
                ],
            }
        )
    ),
    properties: [
        (0, jsx_runtime_1.jsx)(
            _1.AboutApartmentProperty,
            __assign(
                {
                    bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, {
                        variant: 'icon-Chevron-Right',
                    }),
                },
                { children: 'content' }
            ),
            '1'
        ),
        (0, jsx_runtime_1.jsx)(
            _1.AboutApartmentProperty,
            __assign(
                {
                    bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, {
                        variant: 'icon-Chevron-Right',
                    }),
                },
                { children: 'content' }
            ),
            '2'
        ),
        (0, jsx_runtime_1.jsx)(
            _1.AboutApartmentProperty,
            __assign(
                {
                    bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, {
                        variant: 'icon-Chevron-Right',
                    }),
                },
                { children: 'content' }
            ),
            '3'
        ),
        (0, jsx_runtime_1.jsx)(
            _1.AboutApartmentProperty,
            __assign(
                {
                    bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, {
                        variant: 'icon-Chevron-Right',
                    }),
                },
                { children: 'content' }
            ),
            '4'
        ),
        (0, jsx_runtime_1.jsx)(
            _1.AboutApartmentProperty,
            __assign(
                {
                    bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, {
                        variant: 'icon-Chevron-Right',
                    }),
                },
                { children: 'content' }
            ),
            '5'
        ),
    ],
    title: 'Luxury Apartment*',
    subtitle:
        'Photos, decor and furniture placing may vary depending on the unit booked.',
}
exports.Primary.args = args
