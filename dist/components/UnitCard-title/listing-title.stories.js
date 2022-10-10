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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PWA = exports.Search = exports.Home = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _1 = require("./");
exports.default = {
    title: 'Example/UnitCard Title',
    component: _1.UnitCardTitle,
};
var Template = function (_a) {
    var args = __rest(_a, []);
    return (0, jsx_runtime_1.jsx)(_1.UnitCardTitle, __assign({}, args));
};
exports.Home = Template.bind({});
exports.Search = Template.bind({});
exports.PWA = Template.bind({});
exports.Home.args = {
    variant: 'home',
    title: 'Zapotec Sophisticated Suite',
};
exports.Search.args = {
    variant: 'search',
    title: 'Zapotec Sophisticated Suite',
};
exports.PWA.args = {
    variant: 'pwa',
    title: 'Zapotec Sophisticated Suite',
};
