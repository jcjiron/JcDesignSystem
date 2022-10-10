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
exports.CarouselDots = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var DotsContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n\n    .carousel-dot,\n    .carousel-dot-active {\n        background: #c4c4c4;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        margin: 0 5px;\n        cursor: pointer;\n    }\n\n    .carousel-dot-active {\n        background: #8b8b8b;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n\n    .carousel-dot,\n    .carousel-dot-active {\n        background: #c4c4c4;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        margin: 0 5px;\n        cursor: pointer;\n    }\n\n    .carousel-dot-active {\n        background: #8b8b8b;\n    }\n"])));
var CarouselDots = function (_a) {
    var activeIndex = _a.activeIndex, images = _a.images, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)(DotsContainer, __assign({ className: "dots-container" }, { children: images.map(function (image, index) {
            if (index === activeIndex)
                return ((0, jsx_runtime_1.jsx)("span", { className: "carousel-dot-active" }, index));
            return ((0, jsx_runtime_1.jsx)("span", { className: "carousel-dot", onClick: function () { return onClick(index); } }, index));
        }) })));
};
exports.CarouselDots = CarouselDots;
var templateObject_1;
