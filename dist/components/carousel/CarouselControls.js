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
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var icon_1 = require("../icon");
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  border: none;\n  background: transparent;\n\n  .carousel-control-container {\n    background: #0000005e;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"], ["\n  outline: none;\n  border: none;\n  background: transparent;\n\n  .carousel-control-container {\n    background: #0000005e;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])));
var ControlButton = function (_a) {
    var onClick = _a.onClick, children = _a.children, className = _a.className;
    return ((0, jsx_runtime_1.jsx)(StyledButton, __assign({ className: className, onClick: onClick }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "carousel-control-container" }, { children: children })) })));
};
var CarouselControls = function (_a) {
    var onChange = _a.onChange, itemsLength = _a.itemsLength, setActiveIndex = _a.setActiveIndex;
    var movePrevSlide = function (e) {
        e.preventDefault();
        setActiveIndex(function (activeIndex) {
            return activeIndex > 0 ? activeIndex - 1 : itemsLength - 1;
        });
        if (onChange) {
            onChange();
        }
    };
    var moveNextSlide = function (e) {
        e.preventDefault();
        setActiveIndex(function (activeIndex) {
            return activeIndex < itemsLength - 1 ? activeIndex + 1 : 0;
        });
        if (onChange) {
            onChange();
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ControlButton, __assign({ className: "carousel-control-prev", onClick: movePrevSlide }, { children: [(0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Left" }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Previous" }))] })), (0, jsx_runtime_1.jsxs)(ControlButton, __assign({ className: "carousel-control-next", onClick: moveNextSlide }, { children: [(0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Chevron-Right" }), (0, jsx_runtime_1.jsx)("span", __assign({ className: "sr-only" }, { children: "Next" }))] }))] }));
};
exports.default = CarouselControls;
var templateObject_1;
