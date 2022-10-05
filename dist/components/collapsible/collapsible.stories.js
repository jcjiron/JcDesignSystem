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
exports.ControlledCollapsible = exports.Primary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
var styled_components_1 = __importDefault(require("styled-components"));
exports.default = {
    title: 'Example/Collapsible',
    component: index_1.Collapsible,
};
var StyledHeader = (0, styled_components_1.default)(index_1.Collapsible.Header)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: var(--neutral-700);\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n"], ["\n  color: var(--neutral-700);\n  width: 100%;\n  border: 1px solid var(--neutral-300);\n"])));
var StyledBody = (0, styled_components_1.default)(index_1.Collapsible.Body)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  border-bottom: 1px solid var(--neutral-300);\n"], ["\n  width: 100%;\n  border-bottom: 1px solid var(--neutral-300);\n"])));
var Template = function (_a) {
    var children = _a.children, args = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Title before" }), (0, jsx_runtime_1.jsxs)(index_1.Collapsible, { children: [(0, jsx_runtime_1.jsx)(StyledHeader, __assign({ "aria-controls": "t1" }, { children: (0, jsx_runtime_1.jsx)("h1", { children: "header" }) })), (0, jsx_runtime_1.jsx)(StyledBody, __assign({ id: "t1" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Veritatis non magni et sit aut ipsum. Ipsum praesentium sit officiis magnam dolores expedita nemo et. Atque eveniet beatae necessitatibus facilis id quae et impedit. Consequuntur error nesciunt dicta." }) }))] }), (0, jsx_runtime_1.jsx)("h2", { children: "Title after" }), (0, jsx_runtime_1.jsx)("p", { children: "Officiis nam qui voluptatum laborum voluptate quo. Omnis odio dolor et reprehenderit nisi nihil corporis. Laudantium dolorem dolor voluptas et doloremque dignissimos dolor. Velit commodi pariatur quo eos ut quis eos voluptatem. Vitae et mollitia sint." })] }));
};
exports.Primary = Template.bind({});
exports.Primary.args = {};
var ControlledStories = function (_a) {
    var args = __rest(_a, []);
    var _b = react_1.default.useState(args.isOpen), isOpen = _b[0], setIsOpen = _b[1];
    react_1.default.useEffect(function () {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);
    var toggle = function () { return setIsOpen(function (o) { return !o; }); };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ onClick: toggle }, { children: [isOpen ? 'close ' : 'open ', " collapsible"] })), (0, jsx_runtime_1.jsx)("h2", { children: "Controlled colapsible" }), (0, jsx_runtime_1.jsxs)("p", { children: ["You can pass the props of ", (0, jsx_runtime_1.jsx)("code", { children: "isOpen" }), " and ", (0, jsx_runtime_1.jsx)("code", { children: "onToggle" }), ' ', "to control the state of the component."] }), (0, jsx_runtime_1.jsxs)(index_1.Collapsible, __assign({ isOpen: isOpen, onToggle: toggle }, { children: [(0, jsx_runtime_1.jsx)(StyledHeader, __assign({ "aria-controls": "t1" }, { children: (0, jsx_runtime_1.jsx)("h1", { children: "header" }) })), (0, jsx_runtime_1.jsx)(StyledBody, __assign({ id: "t1" }, { children: (0, jsx_runtime_1.jsx)("p", { children: "Veritatis non magni et sit aut ipsum. Ipsum praesentium sit officiis magnam dolores expedita nemo et. Atque eveniet beatae necessitatibus facilis id quae et impedit. Consequuntur error nesciunt dicta." }) }))] })), (0, jsx_runtime_1.jsx)("h2", { children: "Title after" }), (0, jsx_runtime_1.jsx)("p", { children: "Officiis nam qui voluptatum laborum voluptate quo. Omnis odio dolor et reprehenderit nisi nihil corporis. Laudantium dolorem dolor voluptas et doloremque dignissimos dolor. Velit commodi pariatur quo eos ut quis eos voluptatem. Vitae et mollitia sint." })] }));
};
exports.ControlledCollapsible = ControlledStories.bind({});
exports.ControlledCollapsible.args = {
    isOpen: true,
};
var templateObject_1, templateObject_2;
