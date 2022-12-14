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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropDownNavLink = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var dropdown_1 = require("../dropdown");
var DropDownNavLink = function (_a) {
    var children = _a.children, label = _a.label;
    return ((0, jsx_runtime_1.jsx)(dropdown_1.DropDown, { children: (0, jsx_runtime_1.jsx)(dropdown_1.DropDownToggle, __assign({ className: "nav-link", dropDownMenu: children }, { children: label })) }));
};
exports.DropDownNavLink = DropDownNavLink;
