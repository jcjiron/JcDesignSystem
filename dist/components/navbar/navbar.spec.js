"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var navbar_1 = __importDefault(require("./navbar"));
describe('Navbar', function () {
    it('should render successfully', function () {
        var baseElement = (0, react_1.render)((0, jsx_runtime_1.jsx)(navbar_1.default, {})).baseElement;
        expect(baseElement).toBeTruthy();
    });
});
