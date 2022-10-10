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
exports.Radio = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
require("../../../assets/styles/bootstrap/forms.scss");
var StyledRadio = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &.form-check-label {\n        display: inline-block;\n        .check-circle {\n            width: 17px;\n            height: 17px;\n            border-radius: 9px;\n            position: relative;\n            display: inline-block;\n            visibility: visible;\n            border: 1px solid rgba(0, 0, 0, 0.3);\n            vertical-align: middle;\n            margin-right: 8px;\n        }\n        .form-check-input {\n            display: none;\n        }\n        .form-check-input:checked {\n            & + .check-circle {\n                width: 17px;\n                height: 17px;\n                border-radius: 9px;\n                position: relative;\n                display: inline-block;\n                visibility: visible;\n                border: 1px solid rgba(139, 111, 201, 0.5);\n                vertical-align: middle;\n                margin-right: 8px;\n                &:after {\n                    width: 13px;\n                    height: 13px;\n                    border-radius: 9px;\n                    padding: 2px;\n                    top: 1px;\n                    left: 1px;\n                    position: absolute;\n                    background-color: var(--primary);\n                    content: '';\n                    display: inline-block;\n                    visibility: visible;\n                    border: 1px solid rgba(139, 111, 201, 0.5);\n                }\n            }\n            & ~ .check-label {\n                color: var(--primary);\n            }\n        }\n    }\n"], ["\n    &.form-check-label {\n        display: inline-block;\n        .check-circle {\n            width: 17px;\n            height: 17px;\n            border-radius: 9px;\n            position: relative;\n            display: inline-block;\n            visibility: visible;\n            border: 1px solid rgba(0, 0, 0, 0.3);\n            vertical-align: middle;\n            margin-right: 8px;\n        }\n        .form-check-input {\n            display: none;\n        }\n        .form-check-input:checked {\n            & + .check-circle {\n                width: 17px;\n                height: 17px;\n                border-radius: 9px;\n                position: relative;\n                display: inline-block;\n                visibility: visible;\n                border: 1px solid rgba(139, 111, 201, 0.5);\n                vertical-align: middle;\n                margin-right: 8px;\n                &:after {\n                    width: 13px;\n                    height: 13px;\n                    border-radius: 9px;\n                    padding: 2px;\n                    top: 1px;\n                    left: 1px;\n                    position: absolute;\n                    background-color: var(--primary);\n                    content: '';\n                    display: inline-block;\n                    visibility: visible;\n                    border: 1px solid rgba(139, 111, 201, 0.5);\n                }\n            }\n            & ~ .check-label {\n                color: var(--primary);\n            }\n        }\n    }\n"])));
var Radio = function (_a) {
    var label = _a.label, props = __rest(_a, ["label"]);
    return ((0, jsx_runtime_1.jsxs)(StyledRadio, __assign({ className: "form-check-label" }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({ className: "form-check-input", type: "radio" }, props)), (0, jsx_runtime_1.jsx)("span", { className: "check-circle" }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "check-label" }, { children: label }))] })));
};
exports.Radio = Radio;
var templateObject_1;
