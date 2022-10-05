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
exports.BackgroundColor = exports.TextColor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = require("./index");
var styled_components_1 = __importDefault(require("styled-components"));
exports.default = {
    title: 'Styles/Colors',
};
var TextColor = function (args) { return ((0, jsx_runtime_1.jsxs)(index_1.ColorsContainer, __assign({ as: args.as }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary" }, { children: "text-primary" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-100" }, { children: "text-primary-100" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-200" }, { children: "text-primary-200" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-300" }, { children: "text-primary-300" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-400" }, { children: "text-primary-400" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-500" }, { children: "text-primary-500" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-600" }, { children: "text-primary-600" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-700" }, { children: "text-primary-700" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-primary-800" }, { children: "text-primary-800" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-100" }, { children: "text-neutral-100" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-200" }, { children: "text-neutral-200" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-300" }, { children: "text-neutral-300" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-400" }, { children: "text-neutral-400" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-500" }, { children: "text-neutral-500" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-600" }, { children: "text-neutral-600" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-700" }, { children: "text-neutral-700" })), (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-neutral-800" }, { children: "text-neutral-800" }))] }))); };
exports.TextColor = TextColor;
exports.TextColor.args = {
    as: 'div',
    className: 'm-10',
};
var Box = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 10px;\n  height: 100px;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  border-radius: 10px;\n  height: 100px;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var BackgroundColor = function (args) { return ((0, jsx_runtime_1.jsxs)(index_1.ColorsContainer, __assign({ as: args.as }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Primary" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex" }, { children: [(0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary" }, { children: "bg-primary" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-100" }, { children: "bg-primary-100" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-200" }, { children: "bg-primary-200" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-300" }, { children: "bg-primary-300" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-400" }, { children: "bg-primary-400" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-500 text-neutral-100" }, { children: "bg-primary-500" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-600 text-neutral-100" }, { children: "bg-primary-600" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-700 text-neutral-100" }, { children: "bg-primary-700" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-primary-800 text-neutral-100" }, { children: "bg-primary-800" }))] })), (0, jsx_runtime_1.jsx)("h2", { children: "Neutral" }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex" }, { children: [(0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-100" }, { children: "bg-neutral-100" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-200" }, { children: "bg-neutral-200" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-300" }, { children: "bg-neutral-300" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-400" }, { children: "bg-neutral-400" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-500 text-neutral-100" }, { children: "bg-neutral-500" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-600 text-neutral-100" }, { children: "bg-neutral-600" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-700 text-neutral-100" }, { children: "bg-neutral-700" })), (0, jsx_runtime_1.jsx)(Box, __assign({ className: "bg-neutral-800 text-neutral-100" }, { children: "bg-neutral-800" }))] }))] }))); };
exports.BackgroundColor = BackgroundColor;
exports.BackgroundColor.args = {
    as: 'div',
    className: 'm-10',
};
var templateObject_1;
