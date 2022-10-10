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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAmenitites = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var button_1 = __importDefault(require("../button"));
var use_screen_size_1 = require("../hooks/use-screen-size/use-screen-size");
var use_screen_width_1 = require("../hooks/use-screen-width/use-screen-width");
var amenities_1 = require("./amenities");
var StyledBtn = (0, styled_components_1.default)(button_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0 auto;\n    @media (min-width: 768px) {\n        visibility: hidden;\n    }\n"], ["\n    margin: 0 auto;\n    @media (min-width: 768px) {\n        visibility: hidden;\n    }\n"])));
var HomeAmenitites = function (_a) {
    var images = _a.images, buttonLabel = _a.buttonLabel;
    var _b = (0, react_2.useState)(images), filteredImages = _b[0], setImages = _b[1];
    var widthSize = (0, use_screen_width_1.useScreenWidth)();
    (0, react_1.useEffect)(function () {
        if (widthSize <= use_screen_size_1.ScreenSize.SMALL) {
            var temp = __spreadArray([], images, true).splice(0, 6);
            setImages(temp);
        }
        else {
            if (images.length !== filteredImages.length) {
                setImages(images);
            }
        }
    }, [widthSize]);
    var clickButton = function () {
        setImages(images);
    };
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "row" }, { children: (0, jsx_runtime_1.jsx)(amenities_1.Amenities, { images: filteredImages, Button: images.length !== filteredImages.length && ((0, jsx_runtime_1.jsx)(StyledBtn, __assign({ onClick: clickButton, variant: "neutral", shape: "square" }, { children: buttonLabel }))) }) })));
};
exports.HomeAmenitites = HomeAmenitites;
var templateObject_1;
