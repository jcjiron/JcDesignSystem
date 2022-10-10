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
var two_columns_layout_1 = require("../two-columns-layout");
var index_1 = require("./index");
var button_1 = __importDefault(require("../button"));
exports.default = {
    title: 'Example/Two Columns Modal',
    component: two_columns_layout_1.TwoColumnsLayout,
};
var LocationInfo = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Location" }), (0, jsx_runtime_1.jsx)("p", { children: "Roma Norte, M\u00E9xico City" }), (0, jsx_runtime_1.jsx)("p", { children: "Roma: Mexico City\u2019s go-to district for the creative and cool. Here you will find a slew of unique, locally-run coffee shops, art galleries, trendy hole-in-the-wall bars and no-frills taquer\u00EDas filled with trendy locals." }), (0, jsx_runtime_1.jsx)("p", { children: "Want an even more curated experience?" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "http://", target: "_blank", rel: "noopener noreferrer" }, { children: "Visit our blog" }))] }));
};
var LocationMap = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Unit location" }), (0, jsx_runtime_1.jsx)("p", __assign({ style: { fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.5)' } }, { children: "Exact location provided after booking." })), (0, jsx_runtime_1.jsx)("img", { style: { width: '100%' }, src: "https://res.cloudinary.com/dme8prhq8/image/upload/v1623094542/map.png", alt: "map" }), (0, jsx_runtime_1.jsx)("h2", __assign({ className: "mt-4" }, { children: "Neighborhood" })), (0, jsx_runtime_1.jsx)("p", { children: "Sed voluptatibus provident consequatur. Atque voluptatem nostrum dolorem suscipit quis repudiandae nihil maiores vero. Qui et labore numquam officia dolor. Qui amet enim autem debitis. Quisquam quisquam labore id aut aliquid tempore hic repudiandae." }), (0, jsx_runtime_1.jsx)("p", { children: "Impedit beatae nihil aspernatur aut. Asperiores odio repudiandae quibusdam velit. Eos voluptatem eius repellat autem sit sit illum eum. Eaque nihil omnis aut deserunt magnam quia aut nulla. Eum non inventore a. Ea commodi reiciendis autem." }), (0, jsx_runtime_1.jsx)("p", { children: "Dolor enim sequi. Optio neque est nihil. Explicabo dolorem ea ea omnis quia adipisci doloremque blanditiis. Sit voluptas exercitationem omnis veniam eius veniam id nemo." }), (0, jsx_runtime_1.jsx)("img", { style: { width: '100%' }, src: "https://res.cloudinary.com/dme8prhq8/image/upload/v1623094621/Frame_55_sog8nh.png", alt: "Neighborhood" })] }));
};
var Template = function (_a) {
    var args = __rest(_a, []);
    var _b = react_1.default.useState(true), showModal = _b[0], setShowModal = _b[1];
    var openModal = function () { return setShowModal(true); };
    var closeModal = function () { return setShowModal(false); };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(button_1.default, __assign({ onClick: openModal }, { children: [showModal ? 'Close ' : 'Open ', "Modal"] })), (0, jsx_runtime_1.jsx)(index_1.TwoColumnsModal, { show: showModal, onClose: closeModal, onGoBack: closeModal, staticColumn: (0, jsx_runtime_1.jsx)(LocationInfo, {}), scrollableColumn: (0, jsx_runtime_1.jsx)(LocationMap, {}) })] }));
};
exports.Primary = Template.bind({});
exports.Primary.args = {};
