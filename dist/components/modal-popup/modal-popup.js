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
exports.ModalPopup = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var use_screen_size_1 = require("../hooks/use-screen-size/use-screen-size");
var modal_centered_dialog_1 = require("../modal-dialog-centered/modal-centered-dialog");
var div_100vh_1 = require("../div-100vh");
var scroll_bar_1 = require("../scroll-bar");
var ModalCenteredDialogStyled = (0, styled_components_1.default)(modal_centered_dialog_1.ModalCenteredDialog)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  --desktop-max-height: 630px;\n  --desktop-min-height: 434px;\n  --tablet-horizontal-padding: 78px;\n  --desktop-max-width: 700px;\n  --action-bar-height: 60px;\n  --modal-vertical-marging: 30px; /*min padding between modal and browser screen*/\n\n  .modal-content {\n    min-height: calc(var(--action-bar-height) + var(--modal-vertical-marging));\n    height: ", ";\n    width: 100vw;\n    .modal-header {\n      min-height: var(--action-bar-height);\n      display: flex;\n      flex-direction: row-reverse;\n      .close {\n        order: 2;\n      }\n      .action-bar-container {\n        order: 1;\n      }\n    }\n    .modal-body {\n      flex: 1 1 auto;\n      & > * {\n        /* :: Custom scroll bar :: */\n        ", "\n      }\n    }\n    @media (min-height: 434px) {\n      min-height: var(--desktop-min-height);\n    }\n  }\n  .shadow-sm {\n    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;\n  }\n\n  @media (min-width: ", "px) {\n    .modal-content {\n      height: calc(\n        ", " - var(--modal-vertical-marging)\n      );\n      max-height: var(--desktop-max-height);\n      width: calc(100vw - var(--tablet-horizontal-padding));\n    }\n\n    .shadow-sm {\n      box-shadow: none !important;\n    }\n  }\n\n  @media (min-width: ", "px) {\n    .modal-content {\n      width: var(--desktop-max-width);\n      max-width: var(--desktop-max-width);\n    }\n  }\n"], ["\n  --desktop-max-height: 630px;\n  --desktop-min-height: 434px;\n  --tablet-horizontal-padding: 78px;\n  --desktop-max-width: 700px;\n  --action-bar-height: 60px;\n  --modal-vertical-marging: 30px; /*min padding between modal and browser screen*/\n\n  .modal-content {\n    min-height: calc(var(--action-bar-height) + var(--modal-vertical-marging));\n    height: ", ";\n    width: 100vw;\n    .modal-header {\n      min-height: var(--action-bar-height);\n      display: flex;\n      flex-direction: row-reverse;\n      .close {\n        order: 2;\n      }\n      .action-bar-container {\n        order: 1;\n      }\n    }\n    .modal-body {\n      flex: 1 1 auto;\n      & > * {\n        /* :: Custom scroll bar :: */\n        ", "\n      }\n    }\n    @media (min-height: 434px) {\n      min-height: var(--desktop-min-height);\n    }\n  }\n  .shadow-sm {\n    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;\n  }\n\n  @media (min-width: ", "px) {\n    .modal-content {\n      height: calc(\n        ", " - var(--modal-vertical-marging)\n      );\n      max-height: var(--desktop-max-height);\n      width: calc(100vw - var(--tablet-horizontal-padding));\n    }\n\n    .shadow-sm {\n      box-shadow: none !important;\n    }\n  }\n\n  @media (min-width: ", "px) {\n    .modal-content {\n      width: var(--desktop-max-width);\n      max-width: var(--desktop-max-width);\n    }\n  }\n"])), function (props) {
    return props['data-height'] !== undefined
        ? "".concat(props['data-height'], "px")
        : '100vh';
}, scroll_bar_1.customScrollBar, use_screen_size_1.ScreenSize.SMALL, function (props) {
    return props['data-height'] !== undefined
        ? "".concat(props['data-height'], "px")
        : '100vh';
}, use_screen_size_1.ScreenSize.LARGE);
var ModalPopup = function (_a) {
    var actionBar = _a.actionBar, props = __rest(_a, ["actionBar"]);
    var height = (0, div_100vh_1.use100vh)();
    return ((0, jsx_runtime_1.jsx)(ModalCenteredDialogStyled, __assign({}, props, { actionBar: actionBar, animate: true, variant: "light", "data-height": height })));
};
exports.ModalPopup = ModalPopup;
var templateObject_1;
