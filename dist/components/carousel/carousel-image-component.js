"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselImageComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Image_1 = require("../image/Image");
var CarouselImageComponent = function (_a) {
    var image = _a.image, activeClass = _a.activeClass, nextImageClass = _a.nextImageClass, onLoad = _a.onLoad;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "carousel-item h-100 ".concat(activeClass, " ").concat(nextImageClass, " ") }, { children: (0, jsx_runtime_1.jsx)(Image_1.Image, { className: "image d-block w-100 h-100", loading: "lazy", alt: image.alt, src: image.src, onLoad: onLoad, fallbackSrc: image.fallbackSrc, thumbnail: image.thumbnail }) }), image.src));
};
exports.CarouselImageComponent = CarouselImageComponent;
