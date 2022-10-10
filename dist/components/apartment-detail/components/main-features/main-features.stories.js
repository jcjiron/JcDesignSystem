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
exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var main_features_1 = require("./main-features");
var main_feature_item_1 = require("./main-feature-item");
var index_1 = require("./../../../icon/index");
var index_2 = __importDefault(require("../../../button/index"));
exports.default = {
    title: 'Example/Main Features',
    component: main_features_1.MainFeatures,
};
var Template = function (_a) {
    var args = __rest(_a, []);
    var onClick = function () {
        alert('click on button');
    };
    return ((0, jsx_runtime_1.jsxs)(main_features_1.MainFeatures, { children: [(0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] })), (0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] })), (0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title", actionButton: (0, jsx_runtime_1.jsx)(index_2.default, __assign({ variant: "inline-link", onClick: onClick }, { children: "Read More" })), onActionClick: onClick }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] })), (0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] })), (0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] })), (0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] })), (0, jsx_runtime_1.jsxs)(main_feature_item_1.MainFeatureItem, __assign({ bulletIcon: (0, jsx_runtime_1.jsx)(index_1.Icon, { variant: "icon-search" }), title: "title", actionButton: (0, jsx_runtime_1.jsx)(index_2.default, __assign({ variant: "inline-link", onClick: onClick }, { children: "Read More" })), onActionClick: onClick }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Check-in: 3:00 - 7:00PM" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { children: "Check-Out: 3:00 - 7:00PM" })] }))] }));
};
exports.Primary = Template.bind({});
