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
exports.CustomIcons = exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var modal_with_navigation_1 = require("./modal-with-navigation");
var icon_1 = require("../icon");
exports.default = {
    title: 'Example/ModalWithNavigation',
    component: modal_with_navigation_1.ModalWithNavigation,
};
var Template = function (_a) {
    var args = __rest(_a, []);
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return setOpen(true); } }, { children: "Open Alert" })), (0, jsx_runtime_1.jsx)(modal_with_navigation_1.ModalWithNavigation, __assign({}, args, { show: open, onClose: function () { return setOpen(false); } }))] }));
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    title: 'action bar title',
    children: 'content',
};
exports.CustomIcons = Template.bind({});
exports.CustomIcons.args = {
    title: 'action bar title',
    children: 'content',
    CloseIcon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Amenities" }),
    GoBackIcon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-notification" }),
};
