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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.DropDown = exports.StyledDropDown = exports.DropDownToggle = exports.DropDownMenu = exports.DropDownItem = exports.DropDownDivider = exports.DropDownHeader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var use_click_outside_1 = require("../hooks/click-outside/use-click-outside");
require("../../../assets/styles/bootstrap/dropdown.scss");
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: var(--truewhite);\n  margin-top: 13px;\n  min-width: 215px;\n  margin-left: 4px;\n  .dropdown-header {\n    font-size: 10px;\n  }\n  .dropdown-item {\n    min-height: 49px;\n    color: var(--black);\n    font-size: 14px;\n    &:active {\n      background-color: var(--transparent);\n    }\n  }\n"], ["\n  background-color: var(--truewhite);\n  margin-top: 13px;\n  min-width: 215px;\n  margin-left: 4px;\n  .dropdown-header {\n    font-size: 10px;\n  }\n  .dropdown-item {\n    min-height: 49px;\n    color: var(--black);\n    font-size: 14px;\n    &:active {\n      background-color: var(--transparent);\n    }\n  }\n"])));
var DropDownHeader = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("h6", __assign({ className: "dropdown-header text-uppercase" }, { children: typeof children === 'string'
            ? children
            : react_1.default.cloneElement(children) })));
};
exports.DropDownHeader = DropDownHeader;
var DropDownDivider = function () {
    return (0, jsx_runtime_1.jsx)("div", { className: "dropdown-divider" });
};
exports.DropDownDivider = DropDownDivider;
var DropDownItem = function (_a) {
    var children = _a.children, closeDropDown = _a.closeDropDown, props = __rest(_a, ["children", "closeDropDown"]);
    return react_1.default.cloneElement(children, __assign({ className: 'align-middle dropdown-item d-flex align-items-center', onClick: function () {
            var _a;
            closeDropDown && closeDropDown();
            var click = (_a = children === null || children === void 0 ? void 0 : children.props) === null || _a === void 0 ? void 0 : _a.onClick;
            click && click();
        } }, props));
};
exports.DropDownItem = DropDownItem;
var DropDownMenu = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.alignment, alignment = _c === void 0 ? 'normal' : _c, open = _a.open, closeDropDown = _a.closeDropDown;
    return ((0, jsx_runtime_1.jsx)(StyledDiv, __assign({ className: "dropdown-menu ".concat(open ? open : '', " ").concat(alignment !== 'normal' ? 'dropdown-menu-right' : '').concat(className) }, { children: Array.isArray(children)
            ? children.map(function (el, index) {
                return react_1.default.cloneElement(el, {
                    closeDropDown: closeDropDown,
                    key: index,
                });
            })
            : react_1.default.cloneElement(children, __assign(__assign({}, children.props), { closeDropDown: closeDropDown })) })));
};
exports.DropDownMenu = DropDownMenu;
var DropDownToggle = function (_a) {
    var children = _a.children, dropDownMenu = _a.dropDownMenu, _b = _a.className, className = _b === void 0 ? '' : _b, closeDropDown = _a.closeDropDown, isOpen = _a.isOpen, props = __rest(_a, ["children", "dropDownMenu", "className", "closeDropDown", "isOpen"]);
    var _c = (0, use_click_outside_1.useClickOutside)(), clickedOutside = _c.clickedOutside, handleClickInside = _c.handleClickInside, listeningRef = _c.listeningRef;
    (0, react_1.useEffect)(function () {
        if (clickedOutside) {
            closeDropDown && closeDropDown();
        }
    }, [clickedOutside]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({}, props, { ref: listeningRef, onClick: handleClickInside, className: "dropdown-toggle ".concat(className, " ").concat(isOpen ? 'show' : '') }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "content d-flex align-items-center" }, { children: children })), dropDownMenu !== undefined
                ? react_1.default.cloneElement(dropDownMenu, {
                    open: isOpen ? 'show' : undefined,
                    closeDropDown: closeDropDown,
                })
                : null] })));
};
exports.DropDownToggle = DropDownToggle;
exports.StyledDropDown = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  .dropdown-toggle {\n    &::after {\n      display: none;\n    }\n    .content::after {\n      font-family: 'icomoon' !important;\n      speak: never;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n\n      /* Better Font Rendering =========== */\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      content: '\\e905';\n      border-top: 0px solid;\n      font-size: 24px;\n      margin-left: 6px;\n      transition: transform 0.1s ease-in-out;\n    }\n    &.show {\n      .content::after {\n        transform: rotate(", ");\n      }\n    }\n  }\n"], ["\n  .dropdown-toggle {\n    &::after {\n      display: none;\n    }\n    .content::after {\n      font-family: 'icomoon' !important;\n      speak: never;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n\n      /* Better Font Rendering =========== */\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      content: '\\\\e905';\n      border-top: 0px solid;\n      font-size: 24px;\n      margin-left: 6px;\n      transition: transform 0.1s ease-in-out;\n    }\n    &.show {\n      .content::after {\n        transform: rotate(", ");\n      }\n    }\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '180deg' : '0deg');
});
var DropDown = function (_a) {
    var children = _a.children, className = _a.className, onClick = _a.onClick, _b = _a.dropDownOpen, dropDownOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "className", "onClick", "dropDownOpen"]);
    var _c = (0, react_1.useState)(dropDownOpen), open = _c[0], setOpen = _c[1];
    var openDropDown = function () { return !open && setOpen(true); };
    var closeDropDown = function () { return open && setOpen(false); };
    var toggleDropDown = function () { return (open ? closeDropDown() : openDropDown()); };
    return ((0, jsx_runtime_1.jsx)(exports.StyledDropDown, __assign({}, props, { className: "dropdown ".concat(className), isOpen: open, onClick: toggleDropDown }, { children: react_1.default.cloneElement(children, {
            closeDropDown: closeDropDown,
            isOpen: open,
        }) })));
};
exports.DropDown = DropDown;
var templateObject_1, templateObject_2;
