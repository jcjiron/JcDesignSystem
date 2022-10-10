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
exports.ModalWithNavigation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../icon");
var modal_1 = require("../modal");
var drop_down_container_1 = require("../dropdown-base/drop-down-container");
var scroll_bar_1 = require("../scroll-bar");
var div_100vh_1 = require("../div-100vh");
var Div = (0, styled_components_1.default)(drop_down_container_1.DropdownContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    --action-bar-height: 62px;\n    overflow: auto;\n    height: 100vh;\n    /* :: Custom scroll bar :: */\n    ", "\n    .children-container {\n        width: 100%;\n        min-height: calc(100% - var(--action-bar-height));\n        background: var(--dropdown-menu-bg, white);\n    }\n    .action-bar {\n        max-height: var(--action-bar-height);\n        z-index: 5;\n        position: sticky;\n        top: 0;\n        left: 0;\n        background: var(--dropdown-menu-bg, white);\n        display: grid;\n        grid-template-areas: 'go-back placeholder close';\n        .go-back-icon {\n            grid-area: go-back;\n            font-weight: bold;\n            cursor: pointer;\n            font-weight: 100;\n            font-size: 14px;\n        }\n        .placeholder {\n            grid-area: placeholder;\n            justify-self: center;\n            font-weight: 500;\n        }\n        .close-icon {\n            grid-area: close;\n            font-weight: bold;\n            cursor: pointer;\n            justify-self: end;\n        }\n        & * {\n            color: var(--dropdown-item-color);\n            align-self: center;\n        }\n    }\n"], ["\n    --action-bar-height: 62px;\n    overflow: auto;\n    height: 100vh;\n    /* :: Custom scroll bar :: */\n    ", "\n    .children-container {\n        width: 100%;\n        min-height: calc(100% - var(--action-bar-height));\n        background: var(--dropdown-menu-bg, white);\n    }\n    .action-bar {\n        max-height: var(--action-bar-height);\n        z-index: 5;\n        position: sticky;\n        top: 0;\n        left: 0;\n        background: var(--dropdown-menu-bg, white);\n        display: grid;\n        grid-template-areas: 'go-back placeholder close';\n        .go-back-icon {\n            grid-area: go-back;\n            font-weight: bold;\n            cursor: pointer;\n            font-weight: 100;\n            font-size: 14px;\n        }\n        .placeholder {\n            grid-area: placeholder;\n            justify-self: center;\n            font-weight: 500;\n        }\n        .close-icon {\n            grid-area: close;\n            font-weight: bold;\n            cursor: pointer;\n            justify-self: end;\n        }\n        & * {\n            color: var(--dropdown-item-color);\n            align-self: center;\n        }\n    }\n"])), scroll_bar_1.customScrollBar);
var ModalWithNavigation = function (_a) {
    var show = _a.show, _b = _a.animate, animate = _b === void 0 ? true : _b, children = _a.children, onClose = _a.onClose, title = _a.title, onGoBack = _a.onGoBack, GoBackIcon = _a.GoBackIcon, CloseIcon = _a.CloseIcon, variant = _a.variant, modalProps = __rest(_a, ["show", "animate", "children", "onClose", "title", "onGoBack", "GoBackIcon", "CloseIcon", "variant"]);
    var height = (0, div_100vh_1.use100vh)();
    return ((0, jsx_runtime_1.jsx)(modal_1.Modal, __assign({ show: show, animate: animate }, modalProps, { children: (0, jsx_runtime_1.jsxs)(Div, __assign({ className: variant, style: {
                height: height,
            } }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-4 action-bar shadow-sm " }, { children: [onGoBack &&
                            (GoBackIcon !== undefined ? (react_1.default.cloneElement(GoBackIcon, __assign(__assign({}, GoBackIcon.props), { onClick: onGoBack, className: "".concat(GoBackIcon.props.className, " go-back-icon") }))) : ((0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Left", className: "go-back-icon", onClick: onGoBack }))), (0, jsx_runtime_1.jsx)("span", __assign({ className: "placeholder" }, { children: title })), onClose &&
                            (CloseIcon !== undefined ? (react_1.default.cloneElement(CloseIcon, __assign(__assign({}, CloseIcon.props), { onClick: onClose, className: "".concat(CloseIcon.props.className, " close-icon") }))) : ((0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-close", className: "close-icon", onClick: onClose })))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "p-3 ".concat(show ? 'd-block' : 'd-none', " children-container "), "aria-labelledby": "modalContent" }, { children: children }))] })) })));
};
exports.ModalWithNavigation = ModalWithNavigation;
var templateObject_1;
