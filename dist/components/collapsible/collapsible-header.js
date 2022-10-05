"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleHeader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var collapsible_context_1 = require("./collapsible-context");
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../icon");
var Container = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: inherit;\n\n  &:active {\n    color: inherit;\n  }\n  .dropdown-icon {\n    font-size: 24px;\n    transition: transform 0.25s ease-in-out;\n    transform: rotate(", ");\n  }\n"], ["\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  color: inherit;\n\n  &:active {\n    color: inherit;\n  }\n  .dropdown-icon {\n    font-size: 24px;\n    transition: transform 0.25s ease-in-out;\n    transform: rotate(", ");\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '180deg' : '0deg');
});
var CollapsibleHeader = function (props) {
    var _a = (0, collapsible_context_1.useCollapsibleContext)(), onToggle = _a.onToggle, isOpen = _a.isOpen;
    return ((0, jsx_runtime_1.jsxs)(Container, __assign({}, props, { type: "button", onClick: onToggle, "aria-expanded": isOpen, isOpen: isOpen }, { children: [props.children, (0, jsx_runtime_1.jsx)("div", { style: { flex: 1 } }), (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Down1", className: "dropdown-icon" })] })));
};
exports.CollapsibleHeader = CollapsibleHeader;
var templateObject_1;
