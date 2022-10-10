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
exports.Typography = exports.Text = exports.Heading = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _1 = require(".");
exports.default = {
    title: 'styles/Typography',
};
var text = 'Text Sample';
var Heading = function (args) { return ((0, jsx_runtime_1.jsx)(_1.Heading, __assign({}, args))); };
exports.Heading = Heading;
exports.Heading.args = {
    children: text,
    variant: 'h1',
};
var Text = function (args) { return (0, jsx_runtime_1.jsx)(_1.Text, __assign({}, args)); };
exports.Text = Text;
exports.Text.args = {
    children: text,
    variant: 'paragraph',
};
var Typography = function () {
    return ((0, jsx_runtime_1.jsxs)(_1.TypographyContainer, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "H1" }), (0, jsx_runtime_1.jsx)("h2", { children: "H2" }), (0, jsx_runtime_1.jsx)("h3", { children: "H3" }), (0, jsx_runtime_1.jsx)("h4", { children: "H4" }), (0, jsx_runtime_1.jsx)("h5", { children: "H5" }), (0, jsx_runtime_1.jsx)("h6", { children: "H6" })] }));
};
exports.Typography = Typography;
