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
exports.TextField = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../icon");
var StyledInputContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    position: relative;\n    min-height: 77px;\n    .input-component {\n        border: 1px solid #9aa5b1;\n        border-radius: 8px;\n        height: 48px;\n        min-width: 327px;\n        background: (var(--white-bg));\n        color: var(--neutral-600);\n        font-size: 14px;\n        font-weight: 400;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        &:hover,\n        &:focus-within {\n            border-color: #323f4b;\n        }\n        &:focus-within {\n            span,\n            input {\n                color: var(--neutral-700);\n            }\n        }\n\n        .inner-input {\n            display: flex;\n            width: 100%;\n        }\n        .left-icon {\n            margin: 0 0 0 12px;\n            font-size: 20px;\n            display: flex;\n            align-items: center;\n        }\n\n        input {\n            outline: none;\n            border: none;\n            font-weight: 400;\n            font-size: 16px;\n            background: (var(--white-bg));\n            margin: 0 12px 0 12px;\n            width: 100%;\n        }\n\n        .apply-button {\n            font-weight: 600;\n            font-size: 16px;\n            color: var(--neutral-400);\n        }\n    }\n\n    .disabled-input {\n        background-color: var(--neutral-100);\n        border-color: #9aa5b1;\n        span,\n        input::placeholder {\n            color: var(--neutral-400);\n        }\n    }\n\n    .loading-input {\n        border-color: #e4e7eb;\n        span,\n        input::placeholder {\n            color: var(--neutral-200);\n        }\n        &:hover {\n            border-color: #e4e7eb;\n        }\n    }\n\n    .loader {\n        position: absolute;\n        top: 32%;\n        right: 50%;\n        transform: translate(50%, -50%);\n        font-size: 20px;\n    }\n"], ["\n    width: 100%;\n    position: relative;\n    min-height: 77px;\n    .input-component {\n        border: 1px solid #9aa5b1;\n        border-radius: 8px;\n        height: 48px;\n        min-width: 327px;\n        background: (var(--white-bg));\n        color: var(--neutral-600);\n        font-size: 14px;\n        font-weight: 400;\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        &:hover,\n        &:focus-within {\n            border-color: #323f4b;\n        }\n        &:focus-within {\n            span,\n            input {\n                color: var(--neutral-700);\n            }\n        }\n\n        .inner-input {\n            display: flex;\n            width: 100%;\n        }\n        .left-icon {\n            margin: 0 0 0 12px;\n            font-size: 20px;\n            display: flex;\n            align-items: center;\n        }\n\n        input {\n            outline: none;\n            border: none;\n            font-weight: 400;\n            font-size: 16px;\n            background: (var(--white-bg));\n            margin: 0 12px 0 12px;\n            width: 100%;\n        }\n\n        .apply-button {\n            font-weight: 600;\n            font-size: 16px;\n            color: var(--neutral-400);\n        }\n    }\n\n    .disabled-input {\n        background-color: var(--neutral-100);\n        border-color: #9aa5b1;\n        span,\n        input::placeholder {\n            color: var(--neutral-400);\n        }\n    }\n\n    .loading-input {\n        border-color: #e4e7eb;\n        span,\n        input::placeholder {\n            color: var(--neutral-200);\n        }\n        &:hover {\n            border-color: #e4e7eb;\n        }\n    }\n\n    .loader {\n        position: absolute;\n        top: 32%;\n        right: 50%;\n        transform: translate(50%, -50%);\n        font-size: 20px;\n    }\n"])));
var StyledMessage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    &.success {\n        color: #00a527;\n    }\n    &.error {\n        color: #e2190c;\n    }\n    &.default {\n        color: var(--neutral-600);\n    }\n    span {\n        font-weight: 500;\n        font-size: 14px;\n    }\n    .message-icon {\n        font-size: 20px;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    &.success {\n        color: #00a527;\n    }\n    &.error {\n        color: #e2190c;\n    }\n    &.default {\n        color: var(--neutral-600);\n    }\n    span {\n        font-weight: 500;\n        font-size: 14px;\n    }\n    .message-icon {\n        font-size: 20px;\n    }\n"])));
var Message = function (_a) {
    var type = _a.type, children = _a.children;
    var variantMap = {
        success: 'icon-Checkmark',
        error: 'icon-Warning',
        default: null,
        defaultWithIcon: 'icon-Information',
    };
    return ((0, jsx_runtime_1.jsxs)(StyledMessage, __assign({ className: "mt-2 ".concat(type) }, { children: [variantMap[type] !== null && ((0, jsx_runtime_1.jsx)(icon_1.Icon, { className: "message-icon mr-1", variant: variantMap[type] })), children] })));
};
var TextField = function (_a) {
    var placeholder = _a.placeholder, isLoading = _a.isLoading, loader = _a.loader, value = _a.value, onChange = _a.onChange, isDisabled = _a.isDisabled, prefixElement = _a.prefixElement, sufixElement = _a.sufixElement, className = _a.className, inputProps = _a.inputProps, messageType = _a.messageType, messageContent = _a.messageContent, showMessage = _a.showMessage, props = __rest(_a, ["placeholder", "isLoading", "loader", "value", "onChange", "isDisabled", "prefixElement", "sufixElement", "className", "inputProps", "messageType", "messageContent", "showMessage"]);
    return ((0, jsx_runtime_1.jsxs)(StyledInputContainer, __assign({ className: className }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, classnames_1.default)('input-component', {
                    'loading-input': isLoading,
                    'disabled-input': isDisabled,
                }) }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "inner-input" }, { children: [prefixElement, (0, jsx_runtime_1.jsx)("input", __assign({ type: "text", placeholder: placeholder, disabled: isLoading || isDisabled, value: value, onChange: onChange }, props))] })), sufixElement] })), isLoading && (0, jsx_runtime_1.jsx)("div", __assign({ className: "loader" }, { children: loader })), showMessage && ((0, jsx_runtime_1.jsx)(Message, __assign({ type: messageType }, { children: messageContent })))] })));
};
exports.TextField = TextField;
var templateObject_1, templateObject_2;
