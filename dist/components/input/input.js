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
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var classnames_1 = __importDefault(require("classnames"));
var StyledInput = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid var(--neutral-200);\n  padding-left: 16px;\n  padding-right: 16px;\n  height: 48px;\n  background: #fff;\n  border-radius: 8px;\n\n  color: var(--neutral-600);\n  font-size: 14px;\n  font-weight: 400;\n\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background: var(--warm-bg);\n  }\n  &.error {\n    background: var(--warm-bg);\n    border: 1px solid var(--neutral-500);\n  }\n\n  .icon-container {\n    margin-right: 16px;\n  }\n"], ["\n  border: 1px solid var(--neutral-200);\n  padding-left: 16px;\n  padding-right: 16px;\n  height: 48px;\n  background: #fff;\n  border-radius: 8px;\n\n  color: var(--neutral-600);\n  font-size: 14px;\n  font-weight: 400;\n\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background: var(--warm-bg);\n  }\n  &.error {\n    background: var(--warm-bg);\n    border: 1px solid var(--neutral-500);\n  }\n\n  .icon-container {\n    margin-right: 16px;\n  }\n"])));
var Input = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.icon, icon = _c === void 0 ? '' : _c, _d = _a.as, as = _d === void 0 ? 'button' : _d, errorMessage = _a.errorMessage, props = __rest(_a, ["children", "className", "icon", "as", "errorMessage"]);
    var hasError = !!errorMessage;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledInput, __assign({ as: as }, props, { hasError: hasError, className: (0, classnames_1.default)(className, {
                    error: hasError,
                }) }, { children: [icon ? (0, jsx_runtime_1.jsx)("span", __assign({ className: "icon-container" }, { children: icon })) : null, children] })), errorMessage ? errorMessage : null] }));
};
exports.Input = Input;
var templateObject_1;
