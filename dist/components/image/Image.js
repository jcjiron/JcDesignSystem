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
exports.Image = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledImage = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  height: 100%; // the parent of this component should define the required height\n  width: 100%;\n  object-fit: cover;\n  &.loading {\n    ", "\n    image-rendering: -moz-crisp-edges;\n    image-rendering: optimizeQuality;\n    filter: blur(1.5);\n  }\n  @keyframes loaded {\n    0% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  &.loaded:not(.has-error) {\n    animation: loaded 300ms ease-in-out;\n  }\n"], ["\n  display: block;\n  height: 100%; // the parent of this component should define the required height\n  width: 100%;\n  object-fit: cover;\n  &.loading {\n    ", "\n    image-rendering: -moz-crisp-edges;\n    image-rendering: optimizeQuality;\n    filter: blur(1.5);\n  }\n  @keyframes loaded {\n    0% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  &.loaded:not(.has-error) {\n    animation: loaded 300ms ease-in-out;\n  }\n"])), function (props) {
    return !props.thumbnail
        ? ''
        : "background: url('".concat(props.thumbnail, "')\n      no-repeat left center;\n    background-size: cover;");
});
var Image = function (_a) {
    var src = _a.src, fallbackSrc = _a.fallbackSrc, alt = _a.alt, className = _a.className, loading = _a.loading, thumbnail = _a.thumbnail, props = __rest(_a, ["src", "fallbackSrc", "alt", "className", "loading", "thumbnail"]);
    var imageRef = (0, react_1.useRef)();
    var sourceRef = (0, react_1.useRef)();
    var _b = (0, react_1.useState)(false), loaded = _b[0], setLoaded = _b[1];
    var onLoad = function (event) {
        setLoaded(true);
    };
    var onError = function (event) {
        setLoaded(true);
    };
    (0, react_1.useEffect)(function () {
        var image = imageRef.current;
        var source = sourceRef.current;
        var images = [imageRef.current, sourceRef.current];
        var observerConfig = {
            threshold: 0.01,
            rootMargin: '75%',
        };
        var intersectionCallback = function (entries) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                    imageRef.current.src = fallbackSrc;
                    sourceRef.current.srcset = src;
                    observer.unobserve(entry.target);
                }
            });
        };
        var observer = new IntersectionObserver(intersectionCallback, observerConfig);
        images.forEach(function (image) {
            observer.observe(image);
        });
        return function () {
            if (observer && observer.unobserve) {
                observer.unobserve(image);
                observer.unobserve(source);
            }
        };
    }, [src, fallbackSrc]);
    return ((0, jsx_runtime_1.jsxs)("picture", { children: [(0, jsx_runtime_1.jsx)("source", { type: "image/webp", ref: sourceRef }), (0, jsx_runtime_1.jsx)(StyledImage, __assign({}, props, { ref: imageRef, alt: alt, loading: loading, decoding: "async" // gives the browser permission to decode the image off the main thread avoiding user impact of the CPU-time used to decode the image.
                , className: "".concat(className, " ").concat(!loaded ? 'loading' : ''), onLoad: function (event) {
                    onLoad(event);
                    if (props.onLoad) {
                        props.onLoad(event);
                    }
                }, onError: onError, thumbnail: thumbnail }))] }));
};
exports.Image = Image;
var templateObject_1;
