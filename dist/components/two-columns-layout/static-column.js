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
exports.StaticColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  height: fit-content;\n\n  /* Medium devices (tablets, 768px and up) */\n  @media (min-width: 768px) {\n    position: sticky;\n    left: 0;\n    top: 0;\n  }\n"], ["\n  overflow: hidden;\n  height: fit-content;\n\n  /* Medium devices (tablets, 768px and up) */\n  @media (min-width: 768px) {\n    position: sticky;\n    left: 0;\n    top: 0;\n  }\n"])));
var StaticColumn = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(Container, __assign({}, props, { className: "".concat(className, " col-12 col-12 col-md-4") })));
};
exports.StaticColumn = StaticColumn;
var templateObject_1;
