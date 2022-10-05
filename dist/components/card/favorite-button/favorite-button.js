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
exports.FavoriteButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var heart_icon_svg_1 = __importDefault(require("../../../../assets/images/icons/heart-icon.svg"));
var filled_heart_icon_svg_1 = __importDefault(require("../../../../assets/images/icons/filled-heart-icon.svg"));
var StyledFavoriteButton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .label {\n    background: var(--truewhite);\n    color: var(--neutral-800);\n    width: 24px;\n    height: 24px;\n    border-radius: 18px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n"], ["\n  .label {\n    background: var(--truewhite);\n    color: var(--neutral-800);\n    width: 24px;\n    height: 24px;\n    border-radius: 18px;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 500;\n    cursor: pointer;\n  }\n"])));
var FavoriteButton = function (_a) {
    var _b = (0, react_1.useState)(false), isFavorite = _b[0], setIsFavorite = _b[1];
    var setFavorite = function () {
        setIsFavorite(isFavorite ? false : true);
    };
    return ((0, jsx_runtime_1.jsx)(StyledFavoriteButton, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "label" }, { children: isFavorite ? ((0, jsx_runtime_1.jsx)("img", { src: filled_heart_icon_svg_1.default, onClick: setFavorite, alt: "Favorite Icon", width: "12px", height: "12px" })) : ((0, jsx_runtime_1.jsx)("img", { src: heart_icon_svg_1.default, onClick: setFavorite, alt: "Favorite Icon", width: "12px", height: "12px" })) })) }));
};
exports.FavoriteButton = FavoriteButton;
exports.default = exports.FavoriteButton;
var templateObject_1;
