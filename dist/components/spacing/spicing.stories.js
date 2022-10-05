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
exports.Padding = exports.Margin = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = require("./index");
var styled_components_1 = __importDefault(require("styled-components"));
var scroll_bar_1 = require("../scroll-bar");
exports.default = {
    title: 'Styles/Spacing',
};
var text = 'Text Sample';
var Box = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(244, 63, 94);\n  color: white;\n  width: 200px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.375rem;\n"], ["\n  background-color: rgba(244, 63, 94);\n  color: white;\n  width: 200px;\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.375rem;\n"])));
var Container = (0, styled_components_1.default)(index_1.SpacingContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  th {\n    border: 1px solid #f3f0f9;\n    padding: 8px;\n  }\n  @media (min-width: 768px) {\n    .md:m-2 {\n      margin: 8px;\n    }\n  }\n  tr:nth-child(even) {\n    background-color: #e6e0f3;\n  }\n  tr:hover {\n    background-color: #cdc1e7;\n  }\n  th {\n    text-align: left;\n    background-color: #8264c3;\n    color: white;\n  }\n  .table-container {\n    ", ";\n    margin: 16px 0;\n    max-height: 500px;\n    overflow-y: scroll;\n  }\n  th,\n  td {\n    padding: 8px 16px;\n    text-align: center;\n  }\n\n  table,\n  th,\n  td {\n    border: 1px solid #5b4689;\n  }\n\n  code {\n    color: #5b4689;\n    font-weight: 400;\n    font-family: monospace;\n  }\n"], ["\n  ", "\n  th {\n    border: 1px solid #f3f0f9;\n    padding: 8px;\n  }\n  @media (min-width: 768px) {\n    .md\\:m-2 {\n      margin: 8px;\n    }\n  }\n  tr:nth-child(even) {\n    background-color: #e6e0f3;\n  }\n  tr:hover {\n    background-color: #cdc1e7;\n  }\n  th {\n    text-align: left;\n    background-color: #8264c3;\n    color: white;\n  }\n  .table-container {\n    ", ";\n    margin: 16px 0;\n    max-height: 500px;\n    overflow-y: scroll;\n  }\n  th,\n  td {\n    padding: 8px 16px;\n    text-align: center;\n  }\n\n  table,\n  th,\n  td {\n    border: 1px solid #5b4689;\n  }\n\n  code {\n    color: #5b4689;\n    font-weight: 400;\n    font-family: monospace;\n  }\n"])), index_1.SpacingStyles, scroll_bar_1.customScrollBar);
var ExampleContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-image: linear-gradient(to right, #fff1f2, #ffe4e6);\n  border-radius: 0.75rem;\n  display: flex;\n  width: fit-content;\n  height: fit-content;\n"], ["\n  background-image: linear-gradient(to right, #fff1f2, #ffe4e6);\n  border-radius: 0.75rem;\n  display: flex;\n  width: fit-content;\n  height: fit-content;\n"])));
var SpacingTable = function (_a) {
    var type = _a.type;
    var prefix = type === 'padding' ? 'p' : 'm';
    var className = type === 'padding' ? 'padding' : 'margin';
    var properties = [
        '0px',
        '2px',
        '4px',
        '8px',
        '12px',
        '16px',
        '20px',
        '24px',
        '32px',
        '40px',
    ];
    var classes = [
        '-0',
        '-0.5',
        '-1',
        '-2',
        '-3',
        '-4',
        '-5',
        '-6',
        '-8',
        '-10',
    ];
    var combinations = [
        ["".concat(prefix), "".concat(className)],
        ["".concat(prefix, "l"), "".concat(className, "-left")],
        ["".concat(prefix, "r"), "".concat(className, "-right")],
        ["".concat(prefix, "t"), "".concat(className, "-top")],
        ["".concat(prefix, "b"), "".concat(className, "-bottom")],
        ["".concat(prefix, "x"), "".concat(className, "-left"), "".concat(className, "-right")],
        ["".concat(prefix, "y"), "".concat(className, "-top"), "".concat(className, "-bottom")],
    ];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "table-container" }, { children: (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Class" }), (0, jsx_runtime_1.jsx)("th", { children: "Properties" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: combinations.map(function (combination, index) {
                        var prefix = combination[0], class1 = combination[1], class2 = combination[2];
                        return properties.map(function (property, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { children: [prefix, classes[index]] }), (0, jsx_runtime_1.jsxs)("td", { children: [class1, ": ", property, (0, jsx_runtime_1.jsx)("br", {}), class2 && "".concat(class2, ": ").concat(property)] })] }, index)); });
                    }) })] }) })));
};
var Margin = function (args) { return ((0, jsx_runtime_1.jsxs)(Container, __assign({ as: args.as }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "m-4 md:m-2" }, { children: "Margin" })), (0, jsx_runtime_1.jsx)("p", { children: "Utilities for controlling an element's margin." }), (0, jsx_runtime_1.jsx)(SpacingTable, { type: "margin" }), (0, jsx_runtime_1.jsx)("h2", { children: "Add margin to a single side" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the margin on one side of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'm{t|r|b|l}-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["For example, ", (0, jsx_runtime_1.jsx)("code", { children: "mt-6" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "1.5rem" }), " of margin to the top of an element,", (0, jsx_runtime_1.jsx)("code", { children: "mr-4" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "1rem" }), " of margin to the right of an element, ", (0, jsx_runtime_1.jsx)("code", { children: "mb-8" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "2rem" }), " of margin to the bottom of an element, and ", (0, jsx_runtime_1.jsx)("code", { children: "ml-2" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "0.5rem" }), ' ', "of margin to the left of an element."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Add horizontal margin" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the horizontal margin of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'mx-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Add vertical margin" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the vertical margin of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'my-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Add margin to all sides" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the margin on all sides of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'm-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)(ExampleContainer, { children: (0, jsx_runtime_1.jsx)(Box, __assign({ className: args.className }, { children: text })) })] }))); };
exports.Margin = Margin;
exports.Margin.args = {
    as: 'div',
    className: 'm-10',
};
var Padding = function (args) { return ((0, jsx_runtime_1.jsxs)(Container, __assign({}, args, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Padding" }), (0, jsx_runtime_1.jsx)("p", { children: "Utilities for controlling an element's padding." }), (0, jsx_runtime_1.jsx)(SpacingTable, { type: "padding" }), (0, jsx_runtime_1.jsx)("h2", { children: "Add padding to a single side" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the padding on one side of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'p{t|r|b|l}-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsxs)("p", { children: ["For example, ", (0, jsx_runtime_1.jsx)("code", { children: "pt-6" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "1.5rem" }), " of padding to the top of an element,", (0, jsx_runtime_1.jsx)("code", { children: "pr-4" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "1rem" }), " of padding to the right of an element, ", (0, jsx_runtime_1.jsx)("code", { children: "pb-8" }), " would add ", (0, jsx_runtime_1.jsx)("code", { children: "2rem" }), " of padding to the bottom of an element, and ", (0, jsx_runtime_1.jsx)("code", { children: "pl-2" }), " would add", ' ', (0, jsx_runtime_1.jsx)("code", { children: "0.5rem" }), " of padding to the left of an element."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Add horizontal padding" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the horizontal padding of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'px-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Add vertical padding" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the vertical padding of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'py-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsx)("h2", { children: "Add padding to all sides" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Control the padding on all sides of an element using the", ' ', (0, jsx_runtime_1.jsx)("code", { children: 'p-{size}' }), " utilities."] }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)(ExampleContainer, __assign({ className: args.className }, { children: (0, jsx_runtime_1.jsx)(Box, { children: text }) }))] }))); };
exports.Padding = Padding;
exports.Padding.args = {
    as: 'main',
    className: 'p-10',
};
var templateObject_1, templateObject_2, templateObject_3;
