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
exports.Slider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var slider_item_1 = require("./slider-item");
var react_horizontal_scrolling_menu_1 = require("react-horizontal-scrolling-menu");
var arrows_1 = require("./arrows");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {\n        display: none;\n    }\n\n    /* Hide scrollbar for IE, Edge and Firefox */\n    .react-horizontal-scrolling-menu--scroll-container {\n        -ms-overflow-style: none; /* IE and Edge */\n        scrollbar-width: none; /* Firefox */\n    }\n"], ["\n    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {\n        display: none;\n    }\n\n    /* Hide scrollbar for IE, Edge and Firefox */\n    .react-horizontal-scrolling-menu--scroll-container {\n        -ms-overflow-style: none; /* IE and Edge */\n        scrollbar-width: none; /* Firefox */\n    }\n"])));
var Slider = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, scrollMenuProps = __rest(_a, ["children", "className"]);
    return ((0, jsx_runtime_1.jsx)(Container, __assign({ className: className }, { children: (0, jsx_runtime_1.jsx)(react_horizontal_scrolling_menu_1.ScrollMenu, __assign({ LeftArrow: arrows_1.LeftArrow, RightArrow: arrows_1.RightArrow, wrapperClassName: "position-relative", options: {
                ratio: 0.99,
                rootMargin: '5px',
                threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            } }, scrollMenuProps, { children: children })) })));
};
exports.Slider = Slider;
exports.Slider.Item = slider_item_1.SliderItem;
var templateObject_1;
