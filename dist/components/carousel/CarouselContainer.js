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
exports.Carousel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("../../../assets/styles/bootstrap/carousel.scss");
var styled_components_1 = __importDefault(require("styled-components"));
var Carousel_1 = require("./Carousel");
var CarouselControls_1 = __importDefault(require("./CarouselControls"));
var SlideCarousel_1 = require("./SlideCarousel");
var CarouselDots_1 = require("./CarouselDots");
var CarouselDescription_1 = require("./CarouselDescription");
var StyledCarousel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  position: relative;\n  .images-container {\n    z-index: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n"], ["\n  background-color: ", ";\n  position: relative;\n  .images-container {\n    z-index: 0;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }\n"])), function (p) { return p.background; });
var Carousel = function (_a) {
    var _b = _a.interval, interval = _b === void 0 ? 3000 : _b, images = _a.images, withControls = _a.withControls, _c = _a.withSwipe, withSwipe = _c === void 0 ? false : _c, _d = _a.withIndicators, withIndicators = _d === void 0 ? false : _d, _e = _a.withDescription, withDescription = _e === void 0 ? false : _e, _f = _a.links, links = _f === void 0 ? [] : _f, className = _a.className, onChangeSlide = _a.onChangeSlide, _g = _a.background, background = _g === void 0 ? 'transparent' : _g, _h = _a.transitionEffect, trasitionEffect = _h === void 0 ? 'fade' : _h, props = __rest(_a, ["interval", "images", "withControls", "withSwipe", "withIndicators", "withDescription", "links", "className", "onChangeSlide", "background", "transitionEffect"]);
    var _j = react_1.default.useState(0), activeIndex = _j[0], setActiveIndex = _j[1];
    var _k = react_1.default.useState(0), touchStart = _k[0], setTouchStart = _k[1];
    var _l = react_1.default.useState(0), touchEnd = _l[0], setTouchEnd = _l[1];
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
    var handleTouchStart = function (evt) {
        if (!withSwipe)
            return;
        evt.persist();
        setTouchStart(evt.touches[0].clientX);
    };
    var handleTouchMove = function (evt) {
        if (!withSwipe)
            return;
        evt.persist();
        setTouchEnd(evt.touches[0].clientX);
    };
    var handleTouchEnd = function (evt) {
        if (!withSwipe)
            return;
        resetInterval();
        evt.persist();
        setActiveIndex(function (prevState) {
            if (touchStart < touchEnd) {
                if (prevState === 0)
                    return images.length - 1;
                return prevState - 1;
            }
            if (touchStart > touchEnd) {
                if (prevState === images.length - 1)
                    return 0;
                return prevState + 1;
            }
        });
    };
    var onDotsClick = function (nextActive) {
        resetInterval();
        setActiveIndex(nextActive);
    };
    return ((0, jsx_runtime_1.jsx)(StyledCarousel, __assign({ className: "carousel-container ".concat(className) }, props, { background: background }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "images-container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "carousel-container", onTouchMove: handleTouchMove, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd }, { children: trasitionEffect === 'slide' ? ((0, jsx_runtime_1.jsx)(SlideCarousel_1.SlideCarousel, { activeIndex: activeIndex, images: images })) : ((0, jsx_runtime_1.jsx)(Carousel_1.FadeCarousel, { activeIndex: activeIndex, images: images })) })), withControls ? ((0, jsx_runtime_1.jsx)(CarouselControls_1.default, { itemsLength: images.length, setActiveIndex: setActiveIndex, onChange: resetInterval })) : null, withDescription && ((0, jsx_runtime_1.jsx)(CarouselDescription_1.CarouselDescription, { images: images, activeIndex: activeIndex, links: links })), withIndicators && ((0, jsx_runtime_1.jsx)(CarouselDots_1.CarouselDots, { activeIndex: activeIndex, images: images, onClick: onDotsClick }))] })) })));
};
exports.Carousel = Carousel;
var templateObject_1;
