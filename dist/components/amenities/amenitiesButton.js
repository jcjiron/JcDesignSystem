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
exports.AmenitiesButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var AmenityButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    outline: 0 !important;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    background: white;\n    padding: 10px 40px;\n    font-size: 15px;\n    display: block;\n    margin: 0 auto;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"], ["\n    outline: 0 !important;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    background: white;\n    padding: 10px 40px;\n    font-size: 15px;\n    display: block;\n    margin: 0 auto;\n\n    @media (min-width: 768px) {\n        display: none;\n    }\n"])));
var AmenitiesButton = function (_a) {
    var textButton = _a.textButton, onClick = _a.onClick;
    return (0, jsx_runtime_1.jsx)(AmenityButton, __assign({ onClick: onClick }, { children: textButton }));
};
exports.AmenitiesButton = AmenitiesButton;
var templateObject_1;
