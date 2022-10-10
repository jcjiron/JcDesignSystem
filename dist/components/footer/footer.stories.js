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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterExample = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = require("styled-components");
var footer_1 = require("./footer");
var icon_1 = require("../icon");
var COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
};
exports.default = {
    title: 'Example/Footer',
    component: footer_1.Footer,
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(styled_components_1.ThemeProvider, __assign({ theme: { colors: COLORS } }, { children: (0, jsx_runtime_1.jsx)(footer_1.Footer, __assign({}, args)) }))); };
exports.FooterExample = Template.bind({});
exports.FooterExample.args = {
    mainText: 'this is the main text',
    cardOne: {
        title: 'title',
        content: 'content',
    },
    cardTwo: {
        title: 'title',
        content: 'content',
    },
    linkOne: {
        url: 'url',
        text: 'text',
    },
    linkTwo: {
        url: 'url',
        text: 'text',
    },
    linkThree: {
        url: 'url',
        text: 'text',
    },
    linkFour: {
        url: 'url',
        text: 'text',
    },
    socialIconsOne: [
        {
            icon: ((0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Badge-Instagram" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] }))),
            url: 'https://frederic.biz',
        },
        {
            icon: ((0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Badge-Facebook" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] }))),
            url: 'https://loyal.name',
        },
        {
            icon: ((0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Badge-Twitter" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] }))),
            url: 'https://mitchel.name',
        },
    ],
    socialIconsTwo: [
        {
            icon: ((0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Badge-TikTok" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" }), (0, jsx_runtime_1.jsx)("span", { className: "path3" }), (0, jsx_runtime_1.jsx)("span", { className: "path4" }), (0, jsx_runtime_1.jsx)("span", { className: "path5" })] }))),
            url: 'http://pascale.name',
        },
        {
            icon: ((0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Badge-Youtube" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] }))),
            url: 'https://lily.biz',
        },
        {
            icon: ((0, jsx_runtime_1.jsxs)(icon_1.Icon, __assign({ variant: "icon-Badge-LinkedIn" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "path1" }), (0, jsx_runtime_1.jsx)("span", { className: "path2" })] }))),
            url: 'https://mathias.biz',
        },
    ],
};
