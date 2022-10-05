"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var accordion_1 = __importDefault(require("./accordion"));
describe('Accordion', function () {
    it('should render successfully', function () {
        var baseElement = (0, react_1.render)((0, jsx_runtime_1.jsx)(accordion_1.default, {})).baseElement;
        expect(baseElement).toBeTruthy();
    });
});
