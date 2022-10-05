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
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../icon");
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0em;\n  }\n  .value {\n    margin: 0px 16px;\n  }\n  .icon {\n    font-size: 16px;\n  }\n"], ["\n  .placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 17px;\n    letter-spacing: 0em;\n  }\n  .value {\n    margin: 0px 16px;\n  }\n  .icon {\n    font-size: 16px;\n  }\n"])));
var IconButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 2px;\n  background: var(--neutral-100);\n  border-radius: 50%;\n  border: none;\n  color: var(--neutral-600);\n  border: 1px solid transparent;\n\n  &:hover,\n  &:active {\n    border: 1px solid var(--neutral-400);\n  }\n\n  &:active {\n    color: var(--primary);\n  }\n\n  &:disabled {\n    background: rgba(0, 0, 0, 0.1);\n    color: rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  padding: 2px;\n  background: var(--neutral-100);\n  border-radius: 50%;\n  border: none;\n  color: var(--neutral-600);\n  border: 1px solid transparent;\n\n  &:hover,\n  &:active {\n    border: 1px solid var(--neutral-400);\n  }\n\n  &:active {\n    color: var(--primary);\n  }\n\n  &:disabled {\n    background: rgba(0, 0, 0, 0.1);\n    color: rgba(0, 0, 0, 0.2);\n  }\n"])));
var Counter = function (_a) {
    var onChange = _a.onChange, value = _a.value, placeholder = _a.placeholder, className = _a.className, style = _a.style, max = _a.max, min = _a.min;
    var isMax = value === max;
    var isMin = value === min;
    var increaseCounter = function () {
        var newValue = value + 1;
        if (max) {
            if (newValue <= max) {
                onChange(newValue);
            }
        }
        else {
            onChange(newValue);
        }
    };
    var decreaseCounter = function () {
        var newValue = value - 1;
        if (min) {
            if (newValue >= min) {
                onChange(newValue);
            }
        }
        else {
            onChange(newValue);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(StyledContainer, __assign({ className: "d-flex align-items-center ".concat(className, " "), style: style }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "placeholder text-left" }, { children: placeholder })), (0, jsx_runtime_1.jsx)("div", { style: { flex: 1 } }), (0, jsx_runtime_1.jsx)(IconButton, __assign({ className: "d-flex justify-content-center align-items-baseline", onClick: decreaseCounter, disabled: isMin }, { children: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-less" }) })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "value" }, { children: value })), (0, jsx_runtime_1.jsx)(IconButton, __assign({ className: "d-flex justify-content-center align-items-baseline", onClick: increaseCounter, disabled: isMax }, { children: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-add" }) }))] })));
};
exports.default = Counter;
var templateObject_1, templateObject_2;
