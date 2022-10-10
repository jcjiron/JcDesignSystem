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
exports.RightArrow = exports.LeftArrow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_horizontal_scrolling_menu_1 = require("react-horizontal-scrolling-menu");
var styled_components_1 = __importDefault(require("styled-components"));
var button_1 = __importDefault(require("../button"));
var icon_1 = require("../icon");
var ArrowContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n\n    width: 100px;\n    height: 100%;\n\n    display: none;\n    align-items: center;\n    justify-content: center;\n\n    transition: opacity 200ms ease-in;\n    opacity: ", ";\n    z-index: 2;\n\n    &.right-arrow {\n        right: 0;\n    }\n    &.left-arrow {\n        left: 0;\n    }\n    /* mouse, touch pad */\n    @media (hover: hover) and (pointer: fine) {\n        display: flex;\n    }\n    /* Desktop */\n    @media (min-width: 992px) {\n        &.gradient {\n            background: linear-gradient(\n                90deg,\n                transparent 0%,\n                rgba(255, 255, 255, 0.9) 100%\n            );\n        }\n    }\n"], ["\n    position: absolute;\n    top: 0;\n\n    width: 100px;\n    height: 100%;\n\n    display: none;\n    align-items: center;\n    justify-content: center;\n\n    transition: opacity 200ms ease-in;\n    opacity: ", ";\n    z-index: 2;\n\n    &.right-arrow {\n        right: 0;\n    }\n    &.left-arrow {\n        left: 0;\n    }\n    /* mouse, touch pad */\n    @media (hover: hover) and (pointer: fine) {\n        display: flex;\n    }\n    /* Desktop */\n    @media (min-width: 992px) {\n        &.gradient {\n            background: linear-gradient(\n                90deg,\n                transparent 0%,\n                rgba(255, 255, 255, 0.9) 100%\n            );\n        }\n    }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0 : 1);
});
var Arrow = (0, styled_components_1.default)(button_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    --button-size: 40px;\n\n    &.btn {\n        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n        color: rgba(0, 0, 0, 1);\n        &.btn-circle {\n            width: var(--button-size);\n            height: var(--button-size);\n        }\n    }\n    &.btn:focus {\n        color: rgba(0, 0, 0, 1);\n        background: #f8f9fa;\n    }\n    &.btn:hover {\n        color: rgba(0, 0, 0, 1);\n        background: #f8f9fa;\n    }\n    &.btn:disabled {\n        display: none !important;\n    }\n"], ["\n    --button-size: 40px;\n\n    &.btn {\n        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);\n        color: rgba(0, 0, 0, 1);\n        &.btn-circle {\n            width: var(--button-size);\n            height: var(--button-size);\n        }\n    }\n    &.btn:focus {\n        color: rgba(0, 0, 0, 1);\n        background: #f8f9fa;\n    }\n    &.btn:hover {\n        color: rgba(0, 0, 0, 1);\n        background: #f8f9fa;\n    }\n    &.btn:disabled {\n        display: none !important;\n    }\n"])));
var LeftArrow = function () {
    var _a = react_1.default.useContext(react_horizontal_scrolling_menu_1.VisibilityContext), getPrevItem = _a.getPrevItem, isFirstItemVisible = _a.isFirstItemVisible, scrollToItem = _a.scrollToItem, visibleItemsWithoutSeparators = _a.visibleItemsWithoutSeparators, initComplete = _a.initComplete;
    var _b = react_1.default.useState(!initComplete || (initComplete && isFirstItemVisible)), disabled = _b[0], setDisabled = _b[1];
    react_1.default.useEffect(function () {
        // NOTE: detect if whole component visible
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);
    var clickHandler = function () {
        var _a;
        var prevItem = getPrevItem();
        scrollToItem((_a = prevItem === null || prevItem === void 0 ? void 0 : prevItem.entry) === null || _a === void 0 ? void 0 : _a.target, 'smooth', 'start');
    };
    return ((0, jsx_runtime_1.jsx)(ArrowContainer, __assign({ className: "left-arrow", disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Arrow, { variant: "light", shape: "circle", icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Left" }), onClick: clickHandler }) })));
};
exports.LeftArrow = LeftArrow;
var RightArrow = function () {
    var _a = react_1.default.useContext(react_horizontal_scrolling_menu_1.VisibilityContext), getNextItem = _a.getNextItem, isLastItemVisible = _a.isLastItemVisible, scrollToItem = _a.scrollToItem, visibleItemsWithoutSeparators = _a.visibleItemsWithoutSeparators;
    var _b = react_1.default.useState(!visibleItemsWithoutSeparators.length && isLastItemVisible), disabled = _b[0], setDisabled = _b[1];
    react_1.default.useEffect(function () {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);
    var clickHandler = function () {
        var _a;
        var nextItem = getNextItem();
        scrollToItem((_a = nextItem === null || nextItem === void 0 ? void 0 : nextItem.entry) === null || _a === void 0 ? void 0 : _a.target, 'smooth', 'end');
    };
    return ((0, jsx_runtime_1.jsx)(ArrowContainer, __assign({ className: "right-arrow gradient", disabled: disabled }, { children: (0, jsx_runtime_1.jsx)(Arrow, { variant: "light", shape: "circle", icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Right" }), onClick: clickHandler }) })));
};
exports.RightArrow = RightArrow;
var templateObject_1, templateObject_2;
