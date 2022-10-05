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
exports.NavItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Li = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16.8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  border-top: 5px solid var(--transparent);\n  border-bottom: 5px solid var(--transparent);\n  &:hover {\n    border-bottom-color: var(--primary);\n  }\n  .nav-link {    \n    border-radius: 20px;\n    cursor: pointer;\n    .nav-link-content {\n      padding-left: 6px;\n    }\n  }\n  &.light {\n    .nav-link {\n      &:hover {\n        background-color: var(--dark);\n        border-color: var(--white);\n        color: var(--white);\n      }\n    }\n  }\n  &.dark {\n    .nav-link {\n      &:hover {\n        background-color: var(--white);\n        border-color: var(--dark);\n        color: var(--dark);\n      }\n    }\n  }\n  &.transparent {\n    .nav-link {\n      &:hover {\n        background-color: var(--dark);\n        border-color: var(--white);\n        color: var(--white);\n      }\n    }\n  }\n"], ["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 16.8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  border-top: 5px solid var(--transparent);\n  border-bottom: 5px solid var(--transparent);\n  &:hover {\n    border-bottom-color: var(--primary);\n  }\n  .nav-link {    \n    border-radius: 20px;\n    cursor: pointer;\n    .nav-link-content {\n      padding-left: 6px;\n    }\n  }\n  &.light {\n    .nav-link {\n      &:hover {\n        background-color: var(--dark);\n        border-color: var(--white);\n        color: var(--white);\n      }\n    }\n  }\n  &.dark {\n    .nav-link {\n      &:hover {\n        background-color: var(--white);\n        border-color: var(--dark);\n        color: var(--dark);\n      }\n    }\n  }\n  &.transparent {\n    .nav-link {\n      &:hover {\n        background-color: var(--dark);\n        border-color: var(--white);\n        color: var(--white);\n      }\n    }\n  }\n"])));
var NavItem = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return (0, jsx_runtime_1.jsx)(Li, __assign({ className: "".concat(className, " nav-item d-flex align-items-center") }, { children: children }));
};
exports.NavItem = NavItem;
var templateObject_1;
