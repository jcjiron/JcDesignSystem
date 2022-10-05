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
exports.GuestInput = exports.WithError = exports.WithIcons = exports.Default = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var _1 = require(".");
var icon_1 = require("../icon");
var styled_components_1 = __importDefault(require("styled-components"));
var counter_1 = require("../counter");
exports.default = {
    title: 'inputs/Input',
};
var text = 'Text Sample';
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #ffffff;\n  /* Elevation/01-Skim */\n\n  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n    0px 2px 4px rgba(18, 21, 27, 0.15);\n  border-radius: 8px;\n  width: 350px;\n  padding: 24px;\n\n  .flex-1 {\n    flex: 1;\n  }\n"], ["\n  background: #ffffff;\n  /* Elevation/01-Skim */\n\n  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n    0px 2px 4px rgba(18, 21, 27, 0.15);\n  border-radius: 8px;\n  width: 350px;\n  padding: 24px;\n\n  .flex-1 {\n    flex: 1;\n  }\n"])));
var Default = function (args) {
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)(_1.Input, __assign({}, args, { as: "button", onClick: function () {
                alert('hola');
            } })) }));
};
exports.Default = Default;
exports.Default.args = {
    children: text,
};
var StyledIcon = (0, styled_components_1.default)(icon_1.Icon)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 20px;\n"], ["\n  font-size: 20px;\n"])));
var WithIcons = function (args) {
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)(_1.Input, __assign({}, args, { as: "button", icon: (0, jsx_runtime_1.jsx)(StyledIcon, { variant: "icon-Calendar" }), onClick: function () {
                alert('hola');
            } })) }));
};
exports.WithIcons = WithIcons;
exports.WithIcons.args = {
    children: text,
};
var ErrorMessage = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: var(--neutral-500);\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 8px;\n  margin-bottom: 16px;\n  .emoji {\n    margin-right: 12px;\n  }\n"], ["\n  color: var(--neutral-500);\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 8px;\n  margin-bottom: 16px;\n  .emoji {\n    margin-right: 12px;\n  }\n"])));
var WithError = function (args) {
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)(_1.Input, __assign({}, args, { as: "button", icon: (0, jsx_runtime_1.jsx)(StyledIcon, { variant: "icon-Calendar" }), errorMessage: (0, jsx_runtime_1.jsxs)(ErrorMessage, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "emoji", role: "img", "aria-label": "sad-emoji" }, { children: "\uD83D\uDE22" })), (0, jsx_runtime_1.jsx)("span", { children: "Dates no longer available, select again." })] }), onClick: function () {
                alert('hola');
            } })) }));
};
exports.WithError = WithError;
exports.WithError.args = {
    children: text,
};
var GuestInput = function (args) {
    var _a = react_1.default.useState(1), count = _a[0], setCount = _a[1];
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsxs)(_1.Input, __assign({}, args, { className: "d-flex", as: "div", icon: (0, jsx_runtime_1.jsx)(StyledIcon, { variant: "icon-Guests" }) }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "mr-4" }, { children: "Guests" })), (0, jsx_runtime_1.jsx)("div", { className: "flex-1" }), (0, jsx_runtime_1.jsx)(counter_1.Counter, { max: 10, min: 1, value: count, onChange: setCount })] })) }));
};
exports.GuestInput = GuestInput;
exports.GuestInput.args = {
    children: text,
};
var templateObject_1, templateObject_2, templateObject_3;
