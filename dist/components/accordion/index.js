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
exports.Accordion = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../icon");
var StyledAccordion = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 8px;\n  overflow: hidden;\n  &.dark {\n    .tab-content,\n    .tab {\n      color: white;\n      background: var(--dark-bg);\n    }\n  }\n  &.light {\n    .tab-content,\n    .tab {\n      background: var(--truewhite);\n      color: black;\n    }\n  }\n  .tab-content {\n    font-size: 14px;\n  }\n\n  .tab {\n    font-size: 1rem;\n    &-label {\n      cursor: pointer;\n      .toggle-collapse {\n        width: 10px;\n        height: 10px;\n        -webkit-transition: all 0.35s;\n        transition: all 0.35s;\n        font-size: 8px;\n      }\n    }\n    &-content {\n      max-height: 0;\n      transition: all 0.2s;\n    }\n    &-close {\n      display: flex;\n      justify-content: flex-end;\n      padding: 1rem;\n      font-size: 0.75em;\n      cursor: pointer;\n    }\n  }\n\n  input:checked {\n    + .tab-label {\n      .toggle-collapse {\n        transform: rotate(-180deg);\n      }\n    }\n    ~ .tab-content {\n      max-height: 100vh;\n      padding: 1rem !important;\n    }\n  }\n"], ["\n  border-radius: 8px;\n  overflow: hidden;\n  &.dark {\n    .tab-content,\n    .tab {\n      color: white;\n      background: var(--dark-bg);\n    }\n  }\n  &.light {\n    .tab-content,\n    .tab {\n      background: var(--truewhite);\n      color: black;\n    }\n  }\n  .tab-content {\n    font-size: 14px;\n  }\n\n  .tab {\n    font-size: 1rem;\n    &-label {\n      cursor: pointer;\n      .toggle-collapse {\n        width: 10px;\n        height: 10px;\n        -webkit-transition: all 0.35s;\n        transition: all 0.35s;\n        font-size: 8px;\n      }\n    }\n    &-content {\n      max-height: 0;\n      transition: all 0.2s;\n    }\n    &-close {\n      display: flex;\n      justify-content: flex-end;\n      padding: 1rem;\n      font-size: 0.75em;\n      cursor: pointer;\n    }\n  }\n\n  input:checked {\n    + .tab-label {\n      .toggle-collapse {\n        transform: rotate(-180deg);\n      }\n    }\n    ~ .tab-content {\n      max-height: 100vh;\n      padding: 1rem !important;\n    }\n  }\n"])));
var Accordion = function (_a) {
    var children = _a.children, title = _a.title, variant = _a.variant, content = _a.content, id = _a.id;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var toggleOpen = function () {
        setOpen(open ? false : true);
    };
    return ((0, jsx_runtime_1.jsx)(StyledAccordion, __assign({ className: "".concat(variant, " mt-4") }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "tab overflow-hidden w-100" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", onClick: toggleOpen, checked: open, id: id, className: "position-absolute d-none" }), (0, jsx_runtime_1.jsxs)("label", __assign({ className: "tab-label font-weight-light mb-0 d-flex justify-content-between p-3 font-weight-bold", htmlFor: id }, { children: [title, (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Down", className: "toggle-collapse text-center mt-2 mr-3" })] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "tab-content px-3 py-0" }, { children: [content, children] }))] })) })));
};
exports.Accordion = Accordion;
exports.default = exports.Accordion;
var templateObject_1;
