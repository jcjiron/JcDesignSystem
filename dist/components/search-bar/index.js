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
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var button_1 = __importDefault(require("../button"));
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: white;\n  height: 60px;\n  border-radius: 30px;\n  width: fit-content;\n  border: 1px solid #ebebeb;\n"], ["\n  background-color: white;\n  height: 60px;\n  border-radius: 30px;\n  width: fit-content;\n  border: 1px solid #ebebeb;\n"])));
var StyledButton = (0, styled_components_1.default)(button_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: none;\n  &.btn {\n    margin: 2px 2px 2px 0px;\n    padding-left: 24px;\n    padding-right: 24px;\n    border-radius: 30px;\n    width: fit-content;\n    height: initial;\n  }\n  &:focus {\n    border: 2px solid var(--jet);\n  }\n\n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) {\n    &.btn {\n      margin: 2px 2px 2px 16px;\n    }\n  }\n"], ["\n  border: none;\n  &.btn {\n    margin: 2px 2px 2px 0px;\n    padding-left: 24px;\n    padding-right: 24px;\n    border-radius: 30px;\n    width: fit-content;\n    height: initial;\n  }\n  &:focus {\n    border: 2px solid var(--jet);\n  }\n\n  /* Large devices (desktops, 992px and up) */\n  @media (min-width: 992px) {\n    &.btn {\n      margin: 2px 2px 2px 16px;\n    }\n  }\n"])));
var SearchBar = function (_a) {
    var children = _a.children, shrink = _a.shrink, onSearchClick = _a.onSearchClick, className = _a.className, style = _a.style, _b = _a.searchButtonLabel, searchButtonLabel = _b === void 0 ? 'Search' : _b;
    var getFirstChild = function (children) {
        var childrenArray = react_1.default.Children.toArray(children);
        return childrenArray.length > 0 ? childrenArray[0] : null;
    };
    return ((0, jsx_runtime_1.jsxs)(StyledContainer, __assign({ className: "".concat(className, " p-0 d-flex"), style: style }, { children: [shrink ? getFirstChild(children) : children, (0, jsx_runtime_1.jsx)(StyledButton, __assign({ onClick: onSearchClick }, { children: (0, jsx_runtime_1.jsx)("span", { children: searchButtonLabel }) }))] })));
};
exports.default = SearchBar;
var templateObject_1, templateObject_2;
