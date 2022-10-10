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
exports.CardDates = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledCardDates = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    overflow: hidden;\n    display: flex;\n    .label {\n        background-color: var(--truewhite);\n        color: var(--primary-800);\n        border-radius: 4px;\n        border: 1px solid var(--neutral-200);\n        align-items: center;\n        justify-content: center;\n        display: flex;\n        font-size: 12px;\n        line-height: 22px;\n        font-weight: 500;\n        padding: 0 0 0 8px;\n        .more-options {\n            background: var(--neutral-100);\n            border-radius: 0px 4px 4px 0;\n            color: var(--neutral-400);\n            padding: 0 8px 0 8px;\n            margin-left: 8px;\n        }\n    }\n"], ["\n    overflow: hidden;\n    display: flex;\n    .label {\n        background-color: var(--truewhite);\n        color: var(--primary-800);\n        border-radius: 4px;\n        border: 1px solid var(--neutral-200);\n        align-items: center;\n        justify-content: center;\n        display: flex;\n        font-size: 12px;\n        line-height: 22px;\n        font-weight: 500;\n        padding: 0 0 0 8px;\n        .more-options {\n            background: var(--neutral-100);\n            border-radius: 0px 4px 4px 0;\n            color: var(--neutral-400);\n            padding: 0 8px 0 8px;\n            margin-left: 8px;\n        }\n    }\n"])));
var CardDates = function (_a) {
    var variant = _a.variant, children = _a.children, moreOptions = _a.moreOptions;
    return ((0, jsx_runtime_1.jsx)(StyledCardDates, __assign({ className: "".concat(variant) }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "label" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: children }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "more-options" }, { children: (0, jsx_runtime_1.jsx)("span", { children: moreOptions }) }))] })) })));
};
exports.CardDates = CardDates;
exports.default = exports.CardDates;
var templateObject_1;
