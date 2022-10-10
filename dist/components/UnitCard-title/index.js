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
exports.UnitCardTitle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledUnitCardTitle = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &.card-title-home {\n        line-height: 30px;\n        width: 100%;\n        font-size: 20px;\n        overflow: hidden;\n        white-space: pre-line;\n        text-align: left;\n        font-weight: 500;\n        color: black;\n    }\n    &.card-title-search {\n        text-decoration: none;\n        font-size: 14px;\n        font-weight: 400;\n        white-space: nowrap;\n        overflow: hidden;\n        color: #f8f9fa;\n        text-overflow: ellipsis;\n    }\n    &.card-title-pwa {\n        font-size: 1rem;\n        max-width: 100%;\n        font-weight: normal;\n        line-height: 1.2;\n        color: #f2f2f2;\n    }\n"], ["\n    &.card-title-home {\n        line-height: 30px;\n        width: 100%;\n        font-size: 20px;\n        overflow: hidden;\n        white-space: pre-line;\n        text-align: left;\n        font-weight: 500;\n        color: black;\n    }\n    &.card-title-search {\n        text-decoration: none;\n        font-size: 14px;\n        font-weight: 400;\n        white-space: nowrap;\n        overflow: hidden;\n        color: #f8f9fa;\n        text-overflow: ellipsis;\n    }\n    &.card-title-pwa {\n        font-size: 1rem;\n        max-width: 100%;\n        font-weight: normal;\n        line-height: 1.2;\n        color: #f2f2f2;\n    }\n"])));
var UnitCardTitle = function (_a) {
    var title = _a.title, variant = _a.variant;
    return ((0, jsx_runtime_1.jsx)(StyledUnitCardTitle, __assign({ className: "card-title-".concat(variant) }, { children: title })));
};
exports.UnitCardTitle = UnitCardTitle;
exports.default = exports.UnitCardTitle;
var templateObject_1;
