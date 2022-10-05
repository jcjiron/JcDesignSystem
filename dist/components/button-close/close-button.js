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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("../../../assets/styles/bootstrap/close-button.scss");
var icon_1 = require("../icon");
var styled_components_1 = __importDefault(require("styled-components"));
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  float: right;\n  font-size: 12px;\n  font-weight: 700;\n  text-shadow: inherit;\n  line-height: 2;\n  &:not(:disabled):not(.disabled) {\n    opacity: 1;\n  }\n  &:focus{\n    outline-width: 0px;\n  }\n"], ["\n  float: right;\n  font-size: 12px;\n  font-weight: 700;\n  text-shadow: inherit;\n  line-height: 2;\n  &:not(:disabled):not(.disabled) {\n    opacity: 1;\n  }\n  &:focus{\n    outline-width: 0px;\n  }\n"])));
var CloseButton = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["children", "className"]);
    return ((0, jsx_runtime_1.jsx)(Button, __assign({}, props, { className: "close ".concat(className), "aria-label": "Close" }, { children: children !== undefined ? children : (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Close" }) })));
};
exports.CloseButton = CloseButton;
var templateObject_1;
