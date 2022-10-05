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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("../../../assets/styles/bootstrap/carousel.scss");
var styled_components_1 = __importDefault(require("styled-components"));
var Carousel_1 = require("../carousel/Carousel");
var CarouselControls_1 = __importDefault(require("../carousel/CarouselControls"));
var StyledCarousel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :root {\n    --hc-sm-height: 488;\n    --hc-sm-width: 375;\n    --hc-md-height: 588;\n    --hc-md-width: 744;\n    --hc-lg-height: 563;\n    --hc-lg-width: 1128;\n  }\n  background-color: black;\n  &.carousel-container {\n    overflow: inherit !important;\n    display: flex;\n    align-items: stretch;\n    position: relative;\n    justify-content: center;\n    overflow: hidden;\n    height: calc(var(--hc-sm-height, 4) / var(--hc-sm-width, 3) * 100vw);\n  }\n\n  .images-container {\n    z-index: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n\n  .carousel-content {\n    position: relative;\n    width: 100%;\n    padding-top: 96px;\n    padding-bottom: 32px;\n    background: linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.8) 0%,\n      rgba(249, 249, 249, 0) 65%\n    );\n  }\n\n  .children-content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n  }\n\n  @media (min-width: 744px) {\n    &.carousel-container {\n      height: calc(var(--hc-md-height, 1) / var(--hc-md-width, 1) * 100vw);\n    }\n    .carousel-content {\n      padding-top: 250px ;\n      padding-bottom: 72px;\n    }\n  }\n  @media (min-width: 950px) {\n    &.carousel-container {\n      height: max(\n        550px,\n        min(85vh, calc(var(--hc-lg-height, 9) / var(--hc-lg-width, 16) * 100vw))\n      );\n    }\n    .carousel-content {\n      padding-top: 191px;\n      padding-bottom: 45px;\n    }\n  }\n  @media (min-width: 1128px) {\n    .carousel-content {\n      padding-top: 146px;\n      padding-bottom: 100px;\n    }\n  }\n"], ["\n  :root {\n    --hc-sm-height: 488;\n    --hc-sm-width: 375;\n    --hc-md-height: 588;\n    --hc-md-width: 744;\n    --hc-lg-height: 563;\n    --hc-lg-width: 1128;\n  }\n  background-color: black;\n  &.carousel-container {\n    overflow: inherit !important;\n    display: flex;\n    align-items: stretch;\n    position: relative;\n    justify-content: center;\n    overflow: hidden;\n    height: calc(var(--hc-sm-height, 4) / var(--hc-sm-width, 3) * 100vw);\n  }\n\n  .images-container {\n    z-index: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n\n  .carousel-content {\n    position: relative;\n    width: 100%;\n    padding-top: 96px;\n    padding-bottom: 32px;\n    background: linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.8) 0%,\n      rgba(249, 249, 249, 0) 65%\n    );\n  }\n\n  .children-content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n  }\n\n  @media (min-width: 744px) {\n    &.carousel-container {\n      height: calc(var(--hc-md-height, 1) / var(--hc-md-width, 1) * 100vw);\n    }\n    .carousel-content {\n      padding-top: 250px ;\n      padding-bottom: 72px;\n    }\n  }\n  @media (min-width: 950px) {\n    &.carousel-container {\n      height: max(\n        550px,\n        min(85vh, calc(var(--hc-lg-height, 9) / var(--hc-lg-width, 16) * 100vw))\n      );\n    }\n    .carousel-content {\n      padding-top: 191px;\n      padding-bottom: 45px;\n    }\n  }\n  @media (min-width: 1128px) {\n    .carousel-content {\n      padding-top: 146px;\n      padding-bottom: 100px;\n    }\n  }\n"])));
var Hero = function (_a) {
    var _b = _a.interval, interval = _b === void 0 ? 3500 : _b, images = _a.images, children = _a.children, withControls = _a.withControls, className = _a.className, onChangeSlide = _a.onChangeSlide, props = __rest(_a, ["interval", "images", "children", "withControls", "className", "onChangeSlide"]);
    var _c = react_1.default.useState(0), activeIndex = _c[0], setActiveIndex = _c[1];
    var intervalId = react_1.default.useRef();
    react_1.default.useEffect(function () {
        if (onChangeSlide) {
            onChangeSlide(activeIndex);
        }
    }, [activeIndex]);
    var resetInterval = function () {
        clearInterval(intervalId.current);
        intervalId.current = setInterval(advanceSlice, interval);
    };
    var advanceSlice = react_1.default.useCallback(function () {
        setActiveIndex(function (prevSlide) {
            return prevSlide < images.length - 1 ? prevSlide + 1 : 0;
        });
    }, [images.length]);
    react_1.default.useEffect(function () {
        intervalId.current = setInterval(advanceSlice, interval);
        return function () {
            clearInterval(intervalId.current);
        };
    }, [advanceSlice, interval]);
    return ((0, jsx_runtime_1.jsxs)(StyledCarousel, __assign({ className: "carousel-container" }, props, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "images-container" }, { children: (0, jsx_runtime_1.jsx)(Carousel_1.FadeCarousel, { activeIndex: activeIndex, images: images }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "carousel-content" }, { children: [withControls ? ((0, jsx_runtime_1.jsx)(CarouselControls_1.default, { itemsLength: images.length, setActiveIndex: setActiveIndex, onChange: resetInterval })) : null, children ? (0, jsx_runtime_1.jsx)("div", __assign({ className: "children-content" }, { children: children })) : null] }))] })));
};
exports.default = Hero;
var templateObject_1;
