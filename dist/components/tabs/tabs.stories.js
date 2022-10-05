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
var react_1 = __importDefault(require("react"));
var _1 = require("./");
var icon_1 = require("../icon");
exports.default = {
    title: 'Example/Tabs',
    component: _1.Tabs,
};
var Panel = _1.Tabs.Panel;
var Template = function (_a) {
    var args = __rest(_a, []);
    var _b = react_1.default.useState('Tab-1'), activeTab = _b[0], setActiveTab = _b[1];
    return ((0, jsx_runtime_1.jsxs)(_1.Tabs, __assign({ defaultActiveKey: activeTab, activeTab: activeTab, onTabChange: setActiveTab, mountOnEnter: false }, { children: [(0, jsx_runtime_1.jsxs)(Panel, __assign({ label: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex align-items-center justify-content-center" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "mr-2" }, { children: "Tab-1" })), (0, jsx_runtime_1.jsx)(icon_1.Icon, { variant: "icon-Amenities" })] })), tabKey: "Tab-1" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 1" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-por-que-vemos-tan-felices-a-los-gatos-en-cajas-de-carton.png", alt: "Gato 1", height: 300, width: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 2", tabKey: "Tab-2" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 2" }), (0, jsx_runtime_1.jsx)("img", { src: "https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg", alt: "Gato 1", height: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 3", tabKey: "Tab-3" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 3" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg", alt: "Gato 1", height: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 4", tabKey: "Tab-4" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 4" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg", alt: "Gato 1", height: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 5", tabKey: "Tab-5" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 5" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg", alt: "Gato 1", height: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 6", tabKey: "Tab-6" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 6" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg", alt: "Gato 1", height: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 7", tabKey: "Tab-7" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 6" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg", alt: "Gato 1", height: 300 })] })), (0, jsx_runtime_1.jsxs)(Panel, __assign({ label: "Tab 8", tabKey: "Tab-8" }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Content of Tab Pane 6" }), (0, jsx_runtime_1.jsx)("img", { src: "https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg", alt: "Gato 1", height: 300 })] }))] })));
};
exports.Primary = Template.bind({});
exports.Primary.args = {};
