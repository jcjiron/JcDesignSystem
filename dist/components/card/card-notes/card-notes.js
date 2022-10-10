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
exports.CardNotes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../../icon");
var StyledCardNotes = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    text-align: right !important;\n    span {\n        color: var(--neutral-500);\n        font-size: 12px;\n        font-weight: 500;\n    }\n    .icon-Information:before {\n        color: var(--neutral-500);\n    }\n    .price-text {\n        text-decoration: underline;\n        margin-left: 3px;\n    }\n"], ["\n    text-align: right !important;\n    span {\n        color: var(--neutral-500);\n        font-size: 12px;\n        font-weight: 500;\n    }\n    .icon-Information:before {\n        color: var(--neutral-500);\n    }\n    .price-text {\n        text-decoration: underline;\n        margin-left: 3px;\n    }\n"])));
var CardNotes = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(StyledCardNotes, { children: [(0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Information" }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "price-text" }, { children: children }))] }));
};
exports.CardNotes = CardNotes;
exports.default = exports.CardNotes;
var templateObject_1;
