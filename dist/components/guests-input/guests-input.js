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
exports.GuestsInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var input_1 = require("../input");
var icon_1 = require("../icon");
var counter_1 = require("../counter");
var StyledIcon = (0, styled_components_1.default)(icon_1.Icon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 20px;\n"], ["\n    font-size: 20px;\n"])));
var GuestsInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, placeholder = _a.placeholder, max = _a.max, min = _a.min, props = __rest(_a, ["onChange", "value", "placeholder", "max", "min"]);
    react_1.default.useEffect(function () {
        if (value > max) {
            onChange(max);
        }
        if (value < min) {
            onChange(min);
        }
    }, [value, max, min, onChange]);
    return ((0, jsx_runtime_1.jsx)(input_1.Input, __assign({ icon: (0, jsx_runtime_1.jsx)(StyledIcon, { variant: "icon-Guests" }) }, props, { children: (0, jsx_runtime_1.jsx)(counter_1.Counter, { max: max, min: min, className: "w-100", value: value, onChange: onChange, placeholder: placeholder }) })));
};
exports.GuestsInput = GuestsInput;
var templateObject_1;
