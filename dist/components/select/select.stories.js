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
exports.Controlled = exports.DarkTheme = exports.LightTheme = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var _1 = require("./");
exports.default = {
    title: 'Example/Select',
    component: _1.Select,
};
var options = [
    { name: 'Jacynthe', value: 'bea05df7-e5df-4325-8be1-80617826a554' },
    { name: 'Ayden', value: '0e42020f-a805-4727-a7ec-d6f844abb4a1' },
    { name: 'Maybelle', value: '40249e92-f662-4255-825f-8c5d3878b48f' },
    { name: 'Akeem', value: '371f6bc1-8b0e-4566-b02c-1a6c15e66c36' },
    { name: 'Drew', value: '02522d0d-2adc-40b5-b89a-116c4ed62c96' },
    { name: 'Saige', value: '5db2a5b2-eaf8-4c07-a200-8c13c010b52b' },
    { name: 'Armando', value: '6739b9d3-3882-4279-9223-9164d9b07d73' },
    { name: 'Gwendolyn', value: 'd8ec0684-33c0-4f81-9787-4b22fd27805d' },
    { name: 'Julianne', value: 'fcd52906-8c81-466d-963a-7a1fd6dd52ec' },
    { name: 'Nyasia', value: '5b0e971b-21cd-4751-b010-cd5675f0be95' },
    { name: 'Edwin', value: '45b55997-1914-4d59-acdb-a5992431ddfb' },
    { name: 'Annabelle', value: '11b94a56-a7ab-4c57-bfff-969b3f818abc' },
    { name: 'Toni', value: '752bb773-e9d8-477f-89d1-7b56f152dfa1' },
    { name: 'Vesta', value: 'a70c0280-0064-4f61-a797-234296791a99' },
];
var Template = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    var _b = react_1.default.useState(options[0]), value = _b[0], setValue = _b[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("p", __assign({ style: { color: '#8B6FC9' } }, { children: ["Selected value: ", value ? value.name : ''] })), (0, jsx_runtime_1.jsx)(_1.Select, __assign({}, args, { onChange: setValue, selectedOption: value, options: options }))] }));
};
var ControlledComponent = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    var _b = react_1.default.useState(options[0]), value = _b[0], setValue = _b[1];
    var _c = react_1.default.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var onOpen = function () {
        setIsOpen(true);
    };
    var onClose = function () {
        setIsOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", __assign({ onClick: onOpen }, { children: "Open Dropdown" })), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClose }, { children: "Close Dropdown" })), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { color: '#8B6FC9' } }, { children: ["Selected value: ", value ? value.name : ''] })), (0, jsx_runtime_1.jsxs)("p", __assign({ style: { color: '#8B6FC9' } }, { children: ["The modal is ", isOpen ? 'open' : 'closed'] })), (0, jsx_runtime_1.jsx)(_1.Select, __assign({}, args, { onChange: setValue, selectedOption: value, options: options, onOpenClick: onOpen, isOpen: isOpen, onCloseClick: onClose }))] }));
};
exports.LightTheme = Template.bind({});
exports.DarkTheme = Template.bind({});
exports.Controlled = ControlledComponent.bind({});
exports.LightTheme.args = {
    placeholder: 'Select a user',
    variant: 'light',
    fullScreen: true,
    disabled: false
};
exports.DarkTheme.args = {
    placeholder: 'Select a user',
    variant: 'dark',
    fullScreen: false,
    disabled: false
};
exports.Controlled.args = {
    placeholder: 'Select a user',
    variant: 'dark',
    fullScreen: false,
    disabled: false
};
