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
exports.Panel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var styled_components_1 = __importDefault(require("styled-components"));
var tab_context_1 = require("./tab-context");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    @keyframes active {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n    &.active {\n        animation: active 0.3s ease-in-out;\n    }\n"], ["\n    @keyframes active {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n    &.active {\n        animation: active 0.3s ease-in-out;\n    }\n"])));
var Panel = function (_a) {
    var children = _a.children, tabKey = _a.tabKey, className = _a.className, props = __rest(_a, ["children", "tabKey", "className"]);
    var _b = (0, tab_context_1.useTabContext)(), activeTab = _b.activeTab, mountOnEnter = _b.mountOnEnter;
    if (mountOnEnter && activeTab !== tabKey) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(Container, __assign({}, props, { className: (0, classnames_1.default)(activeTab === tabKey ? 'active' : 'd-none', className) }, { children: children })));
};
exports.Panel = Panel;
var templateObject_1;
