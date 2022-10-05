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
exports.FadeCarousel = exports.Container = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var carousel_image_component_1 = require("./carousel-image-component");
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .image {\n    object-fit: cover;\n    vertical-align: bottom;\n  }\n"], ["\n  .image {\n    object-fit: cover;\n    vertical-align: bottom;\n  }\n"])));
var FadeCarousel = function (_a) {
    var images = _a.images, activeIndex = _a.activeIndex;
    var _b = react_1.default.useState(false), isFirstImageLoaded = _b[0], setIsFirstImageLoaded = _b[1];
    return ((0, jsx_runtime_1.jsx)(exports.Container, __assign({ className: "carousel slide carousel-fade h-100", "data-ride": "carousel" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "carousel-inner h-100" }, { children: images.map(function (image, index) {
                var isActive = activeIndex === index;
                var isNextImage = activeIndex === images.length - 1 || activeIndex + 1 === index;
                var shouldLoad = isActive || (isNextImage && isFirstImageLoaded);
                return ((0, jsx_runtime_1.jsx)(carousel_image_component_1.CarouselImageComponent, { image: image, activeClass: "".concat(isActive ? 'active' : ''), nextImageClass: shouldLoad ? 'd-block' : 'd-none', onLoad: function () {
                        var isFirstImage = index === 0;
                        if (isFirstImage && !isFirstImageLoaded) {
                            setIsFirstImageLoaded(true);
                        }
                    } }, image.src));
            }) })) })));
};
exports.FadeCarousel = FadeCarousel;
var templateObject_1;
