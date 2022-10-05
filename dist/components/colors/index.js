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
exports.ColorsContainer = exports.BackgroundColorStyles = exports.TextColorStyles = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = require("./colors");
var colors_2 = require("./colors");
Object.defineProperty(exports, "TextColorStyles", { enumerable: true, get: function () { return colors_2.TextColorStyles; } });
Object.defineProperty(exports, "BackgroundColorStyles", { enumerable: true, get: function () { return colors_2.BackgroundColorStyles; } });
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), colors_1.TextColorStyles, colors_1.BackgroundColorStyles);
var ColorsContainer = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'div' : _b, props = __rest(_a, ["as"]);
    return (0, jsx_runtime_1.jsx)(Container, __assign({ as: as }, props));
};
exports.ColorsContainer = ColorsContainer;
var templateObject_1;
