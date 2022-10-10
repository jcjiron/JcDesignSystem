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
exports.AboutApartment = exports.AboutApartmentProperty = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var list_1 = require("../../../list/list");
var item_1 = require("../../../list/item");
var styled_components_1 = __importDefault(require("styled-components"));
var ListPropertyItem = (0, styled_components_1.default)(item_1.ListItem)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: var(--paragraph-color);\n    @media (max-width: 576px) {\n        flex-basis: 45% !important;\n    }\n"], ["\n    color: var(--paragraph-color);\n    @media (max-width: 576px) {\n        flex-basis: 45% !important;\n    }\n"])));
var AboutApartmentProperty = function (_a) {
    var bulletIcon = _a.bulletIcon, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(ListPropertyItem, __assign({ bulletIcon: bulletIcon }, { children: children })));
};
exports.AboutApartmentProperty = AboutApartmentProperty;
var AboutApartment = function (_a) {
    var subtitle = _a.subtitle, title = _a.title, icon = _a.icon, properties = _a.properties, className = _a.className;
    return ((0, jsx_runtime_1.jsxs)(list_1.List, __assign({ className: className }, { children: [(0, jsx_runtime_1.jsx)(item_1.ListItem, { title: title, bulletIcon: icon, subTitle: subtitle, className: "align-items-center" }), (0, jsx_runtime_1.jsx)(list_1.List, __assign({ direction: "horizontal", columns: 3 }, { children: properties }))] })));
};
exports.AboutApartment = AboutApartment;
var templateObject_1;
