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
var card_capacity_1 = require("./card-capacity");
var card_title_1 = require("./card-title");
var card_price_1 = require("./card-price");
var card_location_1 = require("./card-location");
var card_notes_1 = require("./card-notes");
var card_label_1 = require("./card-label");
var card_dates_1 = require("./card-dates");
var card_night_title_1 = require("./card-night-title");
var StyledCarousel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &.dark {\n        .card {\n            background-color: var(--dark-bg);\n        }\n        .night-text {\n            color: var(--truewhite);\n        }\n    }\n    &.light {\n        .card {\n            background-color: var(--truewhite);\n        }\n        .night-text {\n            color: var(--primary-800);\n        }\n    }\n    .card {\n        width: 350px;\n        height: 350px;\n        box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n            0px 2px 4px rgba(18, 21, 27, 0.15);\n        border-radius: 8px;\n        border: none;\n    }\n    .carousel-inner {\n        border-radius: 8px 8px 0px 0px !important;\n    }\n    .preferences-reservation {\n        display: flex;\n        margin: 16px 0px 0px 1px;\n        justify-content: space-between;\n    }\n    .reservation-title,\n    .reservation-location {\n        margin-left: 1px;\n    }\n    .reservation-location {\n        margin-bottom: 16px;\n        align-items: baseline;\n    }\n    .reservation-notes {\n        display: flex;\n        justify-content: space-between;\n        margin-left: 1px;\n        margin-right: 1px;\n    }\n    .reservation-capacity {\n        margin-top: 16px;\n    }\n    .night-text {\n        font-size: 14px;\n        line-height: 22px;\n        font-weight: 500;\n        margin-left: 5px;\n    }\n    .carousel-control-container {\n        margin-top: -120px;\n    }\n    .images-container {\n        position: relative;\n    }\n    .top-components {\n        margin: 16px;\n        display: flex;\n        justify-content: space-between;\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n    }\n    .bottom-components {\n        position: absolute;\n        z-index: 2;\n        margin: 0 0 14px 16px;\n        bottom: 0;\n    }\n"], ["\n    &.dark {\n        .card {\n            background-color: var(--dark-bg);\n        }\n        .night-text {\n            color: var(--truewhite);\n        }\n    }\n    &.light {\n        .card {\n            background-color: var(--truewhite);\n        }\n        .night-text {\n            color: var(--primary-800);\n        }\n    }\n    .card {\n        width: 350px;\n        height: 350px;\n        box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),\n            0px 2px 4px rgba(18, 21, 27, 0.15);\n        border-radius: 8px;\n        border: none;\n    }\n    .carousel-inner {\n        border-radius: 8px 8px 0px 0px !important;\n    }\n    .preferences-reservation {\n        display: flex;\n        margin: 16px 0px 0px 1px;\n        justify-content: space-between;\n    }\n    .reservation-title,\n    .reservation-location {\n        margin-left: 1px;\n    }\n    .reservation-location {\n        margin-bottom: 16px;\n        align-items: baseline;\n    }\n    .reservation-notes {\n        display: flex;\n        justify-content: space-between;\n        margin-left: 1px;\n        margin-right: 1px;\n    }\n    .reservation-capacity {\n        margin-top: 16px;\n    }\n    .night-text {\n        font-size: 14px;\n        line-height: 22px;\n        font-weight: 500;\n        margin-left: 5px;\n    }\n    .carousel-control-container {\n        margin-top: -120px;\n    }\n    .images-container {\n        position: relative;\n    }\n    .top-components {\n        margin: 16px;\n        display: flex;\n        justify-content: space-between;\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n    }\n    .bottom-components {\n        position: absolute;\n        z-index: 2;\n        margin: 0 0 14px 16px;\n        bottom: 0;\n    }\n"])));
var Card = function (_a) {
    var _b = _a.interval, interval = _b === void 0 ? 3500 : _b, images = _a.images, texts = _a.texts, children = _a.children, withControls = _a.withControls, className = _a.className, variant = _a.variant, onChangeSlide = _a.onChangeSlide, props = __rest(_a, ["interval", "images", "texts", "children", "withControls", "className", "variant", "onChangeSlide"]);
    var _c = react_1.default.useState(0), activeIndex = _c[0], setActiveIndex = _c[1];
    react_1.default.useEffect(function () {
        if (onChangeSlide) {
            onChangeSlide(activeIndex);
        }
    }, [activeIndex]);
    return ((0, jsx_runtime_1.jsx)(StyledCarousel, __assign({ className: "".concat(variant) }, props, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "images-container" }, { children: [(0, jsx_runtime_1.jsx)(Carousel_1.FadeCarousel, { activeIndex: activeIndex, images: images }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "top-components row" }, { children: texts.label && ((0, jsx_runtime_1.jsx)(card_label_1.CardLabel, { children: "".concat(texts.label) })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "bottom-components row" }, { children: texts.dates && ((0, jsx_runtime_1.jsx)(card_dates_1.CardDates, { children: "".concat(texts.dates), moreOptions: texts.moreOptions, variant: variant })) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "carousel-content" }, { children: [withControls ? ((0, jsx_runtime_1.jsx)(CarouselControls_1.default, { itemsLength: images.length, setActiveIndex: setActiveIndex })) : null, children ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "children-content" }, { children: children }))) : null] })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "container d-flex flex-column footer-card-listing" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "reservation-capacity" }, { children: (0, jsx_runtime_1.jsx)(card_capacity_1.CardCapacity, { children: "".concat(texts.capacity), variant: variant }) })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "reservation-title row" }, { children: (0, jsx_runtime_1.jsx)(card_title_1.CardTitle, { children: "".concat(texts.title), variant: variant }) })), (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(card_location_1.CardLocation, { children: "".concat(texts.location), variant: variant }) }), texts.notes && ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(card_notes_1.CardNotes, { children: "".concat(texts.notes) }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "reservation-location row" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "reservation-price" }, { children: (0, jsx_runtime_1.jsx)(card_price_1.CardPrice, { children: "".concat(texts.price), variant: variant }) })), (0, jsx_runtime_1.jsx)("span", __assign({ className: "night-text" }, { children: (0, jsx_runtime_1.jsx)(card_night_title_1.CardNightTitle, { children: "".concat(texts.night), variant: variant }) }))] }))] }))] })) })));
};
exports.default = Card;
var templateObject_1;
