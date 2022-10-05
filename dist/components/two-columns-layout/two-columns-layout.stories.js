"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _1 = require("./");
exports.default = {
    title: 'Example/Two Columns Layout',
    component: _1.TwoColumnsLayout,
};
var Template = function (_a) {
    var args = __rest(_a, []);
    return ((0, jsx_runtime_1.jsxs)(_1.TwoColumnsLayout, __assign({ style: { height: 400 } }, { children: [(0, jsx_runtime_1.jsxs)(_1.TwoColumnsLayout.StaticColumn, __assign({ style: { padding: 16 } }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Location" }), (0, jsx_runtime_1.jsx)("p", { children: "Roma Norte, M\u00E9xico City" }), (0, jsx_runtime_1.jsx)("p", { children: "Roma: Mexico City\u2019s go-to district for the creative and cool. Here you will find a slew of unique, locally-run coffee shops, art galleries, trendy hole-in-the-wall bars and no-frills taquer\u00EDas filled with trendy locals." }), (0, jsx_runtime_1.jsx)("p", { children: "Want an even more curated experience?" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "http://", target: "_blank", rel: "noopener noreferrer" }, { children: "Visit our blog" }))] })), (0, jsx_runtime_1.jsxs)(_1.TwoColumnsLayout.ScrollableColumn, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Unit location" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.5)' } }, { children: "Exact location provided after booking." })), (0, jsx_runtime_1.jsx)("img", { style: { width: '100%' }, src: "https://res.cloudinary.com/dme8prhq8/image/upload/v1623094542/map.png", alt: "map" }), (0, jsx_runtime_1.jsx)("h2", { children: "Neighborhood" }), (0, jsx_runtime_1.jsx)("img", { style: { width: '100%' }, src: "https://res.cloudinary.com/dme8prhq8/image/upload/v1623094621/Frame_55_sog8nh.png", alt: "Neighborhood" })] })] })));
};
exports.Primary = Template.bind({});
exports.Primary.args = {};
