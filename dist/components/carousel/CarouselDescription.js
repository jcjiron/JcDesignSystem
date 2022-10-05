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
exports.CarouselDescription = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var DescriptionContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    margin: 20px auto;\n    text-align: center;\n    max-width: 250px;\n    font-weight: normal;\n\n    & .see-more-link{\n        display: block;\n        margin-top: 5px;\n    }\n"], ["\n    display: block;\n    margin: 20px auto;\n    text-align: center;\n    max-width: 250px;\n    font-weight: normal;\n\n    & .see-more-link{\n        display: block;\n        margin-top: 5px;\n    }\n"])));
var CarouselDescription = function (_a) {
    var _b;
    var images = _a.images, activeIndex = _a.activeIndex, links = _a.links;
    return ((0, jsx_runtime_1.jsxs)(DescriptionContainer, __assign({ className: "image-description" }, { children: [((_b = images[activeIndex]) === null || _b === void 0 ? void 0 : _b.description) || "", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("a", __assign({ href: links[activeIndex] || "", className: "see-more-link", rel: "noreferrer", target: "_blank" }, { children: "See more" }))] })));
};
exports.CarouselDescription = CarouselDescription;
var templateObject_1;
