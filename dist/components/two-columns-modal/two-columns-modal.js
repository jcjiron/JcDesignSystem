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
exports.TwoColumnsModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var modal_with_navigation_1 = require("../modal-with-navigation");
var two_columns_layout_1 = require("../two-columns-layout");
var StyledModal = (0, styled_components_1.default)(modal_with_navigation_1.ModalWithNavigation)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --padding-y: 16px;\n  .children-container {\n    height: calc(100% - 64px);\n  }\n  .padding-y {\n    padding-top: var(--padding-y);\n    padding-bottom: var(--padding-y);\n  }\n  /* Medium devices (tablets, 768px and up) */\n  @media (min-width: 768px) {\n    --padding-y: 32px;\n  }\n"], ["\n  --padding-y: 16px;\n  .children-container {\n    height: calc(100% - 64px);\n  }\n  .padding-y {\n    padding-top: var(--padding-y);\n    padding-bottom: var(--padding-y);\n  }\n  /* Medium devices (tablets, 768px and up) */\n  @media (min-width: 768px) {\n    --padding-y: 32px;\n  }\n"])));
function TwoColumnsModal(_a) {
    var staticColumn = _a.staticColumn, scrollableColumn = _a.scrollableColumn, _b = _a.variant, variant = _b === void 0 ? 'light' : _b, modalProps = __rest(_a, ["staticColumn", "scrollableColumn", "variant"]);
    return ((0, jsx_runtime_1.jsx)(StyledModal, __assign({}, modalProps, { variant: variant }, { children: (0, jsx_runtime_1.jsxs)(two_columns_layout_1.TwoColumnsLayout, __assign({ className: "container h-100" }, { children: [(0, jsx_runtime_1.jsx)(two_columns_layout_1.TwoColumnsLayout.StaticColumn, __assign({ className: "padding-y" }, { children: staticColumn })), (0, jsx_runtime_1.jsx)(two_columns_layout_1.TwoColumnsLayout.ScrollableColumn, __assign({ className: "padding-y" }, { children: scrollableColumn }))] })) })));
}
exports.TwoColumnsModal = TwoColumnsModal;
exports.default = TwoColumnsModal;
var templateObject_1;
