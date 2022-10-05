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
exports.ModalCarousel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var modal_centered_dialog_1 = require("../modal-dialog-centered/modal-centered-dialog");
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var CarouselContainer_1 = require("../carousel/CarouselContainer");
var index_1 = __importDefault(require("../button/index"));
var index_2 = require("../icon/index");
var StyledModal = (0, styled_components_1.default)(modal_centered_dialog_1.ModalCenteredDialog)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .modal-body {\n    position: relative;\n  }\n  .modal-header {\n    display: none;\n  }\n  .label-container {\n    font-size: 18px;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.8);\n    border-radius: 10px;\n    left: 16px;\n    top: 16px;\n  }\n\n  .close.position-absolute {\n    display: none;\n  }\n  .close-button {\n    width: 36px !important;\n    height: 36px !important;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.8);\n    border-color: rgba(0, 0, 0, 0.8);\n  }\n  .modal-backdrop.show {\n    opacity: 0.8 !important;\n  }\n  .close-button-container {\n    z-index: 2;\n    top: -16px;\n    right: -16px;\n  }\n"], ["\n  .modal-body {\n    position: relative;\n  }\n  .modal-header {\n    display: none;\n  }\n  .label-container {\n    font-size: 18px;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.8);\n    border-radius: 10px;\n    left: 16px;\n    top: 16px;\n  }\n\n  .close.position-absolute {\n    display: none;\n  }\n  .close-button {\n    width: 36px !important;\n    height: 36px !important;\n    color: #fff;\n    background-color: rgba(0, 0, 0, 0.8);\n    border-color: rgba(0, 0, 0, 0.8);\n  }\n  .modal-backdrop.show {\n    opacity: 0.8 !important;\n  }\n  .close-button-container {\n    z-index: 2;\n    top: -16px;\n    right: -16px;\n  }\n"])));
var StyledCarousel = (0, styled_components_1.default)(CarouselContainer_1.Carousel)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .h-100 {\n    height: inherit !important;\n    max-height: 75vh !important;\n  }\n  .carousel-control-next,\n  .carousel-control-prev {\n    opacity: 1;\n    color: #c4c4c4;\n  }\n  .carousel-control-container {\n    background-color: #fff;\n    font-size: 16px;\n    min-width: 32px;\n    height: 32px;\n  }\n  .images-container {\n    display: contents;\n  }\n  @media (min-width: 769px) {\n    .carousel-control-container {\n      min-width: 44px;\n      height: 44px;\n    }\n  }\n  @media (max-height: calc((85vw/4) * 3 )) {\n    .h-100 {\n      min-height: 45vh !important;\n    }\n  }\n"], ["\n  .h-100 {\n    height: inherit !important;\n    max-height: 75vh !important;\n  }\n  .carousel-control-next,\n  .carousel-control-prev {\n    opacity: 1;\n    color: #c4c4c4;\n  }\n  .carousel-control-container {\n    background-color: #fff;\n    font-size: 16px;\n    min-width: 32px;\n    height: 32px;\n  }\n  .images-container {\n    display: contents;\n  }\n  @media (min-width: 769px) {\n    .carousel-control-container {\n      min-width: 44px;\n      height: 44px;\n    }\n  }\n  @media (max-height: calc((85vw/4) * 3 )) {\n    .h-100 {\n      min-height: 45vh !important;\n    }\n  }\n"])));
var ModalCarousel = function (_a) {
    var show = _a.show, closeModal = _a.closeModal, images = _a.images, countImageOfLabel = _a.countImageOfLabel;
    var _b = (0, react_1.useState)((0, jsx_runtime_1.jsxs)("label", __assign({ className: "mb-0" }, { children: [(0, jsx_runtime_1.jsx)("strong", { children: "1" }), " of ", (0, jsx_runtime_1.jsx)("strong", { children: images.length })] }))), label = _b[0], setLabel = _b[1];
    var indexLabel = function (index) {
        var currImage = index + 1;
        setLabel((0, jsx_runtime_1.jsxs)("label", __assign({ className: "mb-0" }, { children: [(0, jsx_runtime_1.jsx)("strong", { children: currImage }), " ", countImageOfLabel, ' ', (0, jsx_runtime_1.jsx)("strong", { children: images.length })] })));
    };
    return ((0, jsx_runtime_1.jsxs)(StyledModal, __assign({ show: show, closeModal: closeModal, variant: 'dark', mergeHeaderWithContent: true, className: "container" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "label-container position-absolute py-2 px-3" }, { children: label })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "close-button-container position-absolute" }, { children: (0, jsx_runtime_1.jsx)(index_1.default, { shape: "circle", variant: "light", icon: (0, jsx_runtime_1.jsx)(index_2.Icon, { variant: "icon-close" }), onClick: closeModal, className: "close-button" }) })), (0, jsx_runtime_1.jsx)(StyledCarousel, { onChangeSlide: indexLabel, background: "transparent", images: images, withControls: true, interval: 5000, transitionEffect: "fade" })] })));
};
exports.ModalCarousel = ModalCarousel;
var templateObject_1, templateObject_2;
