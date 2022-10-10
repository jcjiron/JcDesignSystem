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
exports.MultipleVariants = exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var icon_1 = require("../icon");
var list_1 = require("./list");
var item_1 = require("./item");
exports.default = {
    title: 'Example/List',
    component: list_1.List,
};
var Template = function (_a) {
    var args = __rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(list_1.List, __assign({}, args)));
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: [
        (0, jsx_runtime_1.jsx)(item_1.ListItem, { bulletIcon: (0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Checked-Radio" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] })), subTitle: "Photos, decor and furniture placing may vary depending on the unit booked.", title: "Luxury Apartment", children: "Our properties are cleaned to the highest hygiene and health standards" }),
        (0, jsx_runtime_1.jsx)(item_1.ListItem, { bulletIcon: (0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Checked-Radio" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] })), subTitle: "Photos, decor and furniture placing may vary depending on the unit booked.", title: "Luxury Apartment", children: "Our properties are cleaned to the highest hygiene and health standards" }),
        (0, jsx_runtime_1.jsx)(item_1.ListItem, { bulletIcon: (0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Checked-Radio" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] })), subTitle: "Photos, decor and furniture placing may vary depending on the unit booked.", title: "Luxury Apartment", children: "Our properties are cleaned to the highest hygiene and health standards" }),
    ],
};
exports.MultipleVariants = Template.bind({});
exports.MultipleVariants.args = {
    children: [
        (0, jsx_runtime_1.jsx)(item_1.ListItem, { subTitle: "Photos, decor and furniture placing may vary depending on the unit booked.", title: "Luxury Apartment", children: "Our properties are cleaned to the highest hygiene and health standards" }),
        (0, jsx_runtime_1.jsx)(item_1.ListItem, { title: "Luxury Apartment", children: "Our properties are cleaned to the highest hygiene and health standards" }),
        (0, jsx_runtime_1.jsx)(item_1.ListItem, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Stay longer, save more.We have everything you need to turn our departments in your dreamed home." }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Read More" }))] }) }),
    ],
};
