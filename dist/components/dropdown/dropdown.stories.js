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
exports.DropdownOpenRightExample = exports.DropdownExample = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var index_1 = require("./index");
var COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
};
exports.default = {
    title: 'Example/DropDown',
    component: index_1.DropDownMenu,
};
var Template = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: { colors: COLORS } }, { children: (0, jsx_runtime_1.jsx)(index_1.DropDown, { children: (0, jsx_runtime_1.jsx)(index_1.DropDownToggle, __assign({ dropDownMenu: (0, jsx_runtime_1.jsxs)(index_1.DropDownMenu, __assign({ alignment: args.dropdDownMenuAligment, open: args.dropdDownOpen }, { children: [(0, jsx_runtime_1.jsx)(index_1.DropDownHeader, { children: "Header One" }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 1" })) }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 2" })) }), (0, jsx_runtime_1.jsx)(index_1.DropDownDivider, {}), (0, jsx_runtime_1.jsx)(index_1.DropDownHeader, { children: "Header two" }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 1" })) }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 2" })) })] })) }, { children: 'DropDown Text' })) }) })));
};
exports.DropdownExample = Template.bind({});
exports.DropdownExample.args = {
    dropdDownMenuAligment: 'normal',
    dropdDownOpen: '',
};
var Templatetwo = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: { colors: COLORS } }, { children: (0, jsx_runtime_1.jsx)(index_1.DropDown, __assign({ dropDownOpen: args.dropDownOpen }, { children: (0, jsx_runtime_1.jsx)(index_1.DropDownToggle, __assign({ dropDownMenu: (0, jsx_runtime_1.jsxs)(index_1.DropDownMenu, __assign({ alignment: args.dropdDownMenuAligment, open: args.dropdDownOpen }, { children: [(0, jsx_runtime_1.jsx)(index_1.DropDownHeader, { children: "Header One" }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 1" })) }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 2" })) }), (0, jsx_runtime_1.jsx)(index_1.DropDownDivider, {}), (0, jsx_runtime_1.jsx)(index_1.DropDownHeader, { children: "Header two" }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 1" })) }), (0, jsx_runtime_1.jsx)(index_1.DropDownItem, { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#" }, { children: "Action 2" })) })] })) }, { children: 'DropDown Text' })) })) })));
};
exports.DropdownOpenRightExample = Templatetwo.bind({});
exports.DropdownOpenRightExample.args = __assign(__assign({}, exports.DropdownExample.args), { dropDownOpen: true, dropdDownMenuAligment: 'right' });
