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
exports.HeroBanner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Hero_1 = __importDefault(require("./Hero"));
var search_bar_stories_1 = require("../search-bar/search-bar.stories");
exports.default = {
    title: 'Example/Hero',
    component: Hero_1.default,
};
var CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net';
var images = [
    {
        src: "".concat(CDN_URL, "/img/hero-1.webp"),
        fallbackSrc: "".concat(CDN_URL, "/img/hero-1.jpg"),
        thumbnail: "".concat(CDN_URL, "/img/thumbnail/hero-1.webp"),
    },
    {
        src: "".concat(CDN_URL, "/img/hero-2.webp"),
        fallbackSrc: "".concat(CDN_URL, "/img/hero-2.jpg"),
        thumbnail: "".concat(CDN_URL, "/img/thumbnail/hero-2.webp"),
    },
    {
        src: "".concat(CDN_URL, "/img/hero-3.webp"),
        fallbackSrc: "".concat(CDN_URL, "/img/hero-3.jpg"),
        thumbnail: "".concat(CDN_URL, "/img/thumbnail/hero-1.webp"),
    },
];
var copy = [
    'Boutique travel apartments in Latin America.',
    'Book a Casai before february 1st and get 15% Off.',
    'Boutique travel apartments in Latin America.',
];
var HeroTemplate = function (_a) {
    var args = __rest(_a, []);
    var _b = (0, react_1.useState)(), title = _b[0], setTitle = _b[1];
    var onChangeSlide = function (index) {
        setTitle(copy[index]);
    };
    return ((0, jsx_runtime_1.jsxs)(Hero_1.default, __assign({ images: images, onChangeSlide: onChangeSlide }, args, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ style: {
                    width: '100%',
                    textAlign: 'left',
                    color: 'white',
                    fontSize: 48,
                } }, { children: title })), (0, jsx_runtime_1.jsx)(search_bar_stories_1.Primary, {})] })));
};
exports.HeroBanner = HeroTemplate.bind({});
exports.HeroBanner.args = {
    withControls: true,
    interval: 3500,
};
