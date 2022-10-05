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
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var dropdown_base_1 = require("../dropdown-base/dropdown-base");
var scroll_bar_1 = require("../scroll-bar");
var SelectContainer = (0, styled_components_1.default)(dropdown_base_1.DropdownBase)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .dropdown-menu {\n    max-height: 265px;\n    overflow-y: scroll;\n    /* :: Custom scroll bar :: */\n    ", "\n  }\n"], ["\n  .dropdown-menu {\n    max-height: 265px;\n    overflow-y: scroll;\n    /* :: Custom scroll bar :: */\n    ", "\n  }\n"])), scroll_bar_1.customScrollBar);
var OptionComponent = function (_a) {
    var name = _a.name, disabled = _a.disabled, onClick = _a.onClick, value = _a.value, isSelected = _a.isSelected;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ className: "dropdown-item ".concat(isSelected ? 'selected-item' : ''), disabled: disabled, onClick: function () { return onClick({ value: value, name: name }); } }, { children: name })));
};
var Select = function (props) {
    var _a;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var isControlled = function (prop) {
        return props[prop] !== undefined;
    };
    var openDropdown = function () {
        var isOpenControlled = isControlled('isOpen');
        if (isOpenControlled) {
            props.onOpenClick();
        }
        else {
            setIsOpen(true);
        }
    };
    var closeDropdown = function () {
        var isOpenControlled = isControlled('isOpen');
        if (isOpenControlled) {
            props.onCloseClick();
        }
        else {
            setIsOpen(false);
        }
    };
    var getState = function () {
        var state = {
            isOpen: isOpen,
        };
        return Object.entries(state).reduce(function (combinedState, _a) {
            var key = _a[0], value = _a[1];
            if (isControlled(key)) {
                combinedState[key] = props[key];
            }
            else {
                combinedState[key] = value;
            }
            return combinedState;
        }, {});
    };
    var onClickItem = function (option) {
        props.onChange(option);
        if (props.closeOnItemClick) {
            closeDropdown();
        }
    };
    return ((0, jsx_runtime_1.jsx)(SelectContainer, __assign({ disabled: props.disabled, isOpen: getState().isOpen, onCloseClick: closeDropdown, onOpenClick: openDropdown, fullScreen: props.fullScreen, placeholder: ((_a = props.selectedOption) === null || _a === void 0 ? void 0 : _a.name) || props.placeholder, variant: props.variant, className: props.className, buttonRef: props.buttonRef, onGoBackClick: props.onGoBackClick }, { children: props.options.map(function (_a) {
            var _b;
            var name = _a.name, value = _a.value;
            return ((0, jsx_runtime_1.jsx)(OptionComponent, { value: value, onClick: onClickItem, isSelected: value === ((_b = props.selectedOption) === null || _b === void 0 ? void 0 : _b.value), name: name }, value));
        }) })));
};
Select.defaultProps = {
    variant: 'light',
    fullScreen: false,
    closeOnItemClick: true,
};
exports.default = Select;
var templateObject_1;
