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
exports.Alert = exports.StatefulAlert = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var close_button_1 = require("../button-close/close-button");
var get_contrast_YIQ_1 = require("../utils/get-contrast-YIQ");
require("../../../assets/styles/bootstrap/alerts.scss");
var Div = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-color: transparent;\n\n    &.alert-primary {\n        background-color: var(--primary);\n        color: var(--truewhite);\n    }\n    &.alert-custom {\n        background-color: ", ";\n        color: ", ";\n    }\n    .close {\n        color: #000000;\n        &:not(:disabled):not(.disabled) {\n            color: white;\n            opacity: 1;\n        }\n    }\n    &.dismissed {\n        display: none;\n    }\n    &.shadow-sm {\n        box-shadow: 0 2px 2px rgb(0 0 0 / 20%) !important;\n    }\n"], ["\n    border-color: transparent;\n\n    &.alert-primary {\n        background-color: var(--primary);\n        color: var(--truewhite);\n    }\n    &.alert-custom {\n        background-color: ", ";\n        color: ", ";\n    }\n    .close {\n        color: #000000;\n        &:not(:disabled):not(.disabled) {\n            color: white;\n            opacity: 1;\n        }\n    }\n    &.dismissed {\n        display: none;\n    }\n    &.shadow-sm {\n        box-shadow: 0 2px 2px rgb(0 0 0 / 20%) !important;\n    }\n"])), function (props) { return props.backgroundColor; }, function (props) {
    return props.backgroundColor !== '' &&
        (0, get_contrast_YIQ_1.getContrastYIQ)(props.backgroundColor);
});
var StatefulAlert = function (_a) {
    var children = _a.children, variant = _a.variant, handleDismiss = _a.handleDismiss, isDismissed = _a.isDismissed, _b = _a.isDismissable, isDismissable = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? '' : _d, props = __rest(_a, ["children", "variant", "handleDismiss", "isDismissed", "isDismissable", "className", "backgroundColor"]);
    return ((0, jsx_runtime_1.jsxs)(Div, __assign({ className: "border-0 alert ".concat(isDismissable ? 'alert-dismissible ' : '', " alert-").concat(variant, " ").concat(isDismissed ? 'dismissed' : '', "  ").concat(className, " shadow-sm"), backgroundColor: backgroundColor }, props, { children: [children, isDismissable && ((0, jsx_runtime_1.jsx)(close_button_1.CloseButton, { onClick: handleDismiss, style: { color: (0, get_contrast_YIQ_1.getContrastYIQ)(backgroundColor) } }))] })));
};
exports.StatefulAlert = StatefulAlert;
var Alert = function (_a) {
    var props = __rest(_a, []);
    var _b = (0, react_1.useState)(false), isDismissed = _b[0], setDismiss = _b[1];
    var handleDismiss = function () {
        setDismiss(!isDismissed);
    };
    return ((0, jsx_runtime_1.jsx)(exports.StatefulAlert, __assign({}, props, { isDismissed: isDismissed, handleDismiss: handleDismiss })));
};
exports.Alert = Alert;
var templateObject_1;
