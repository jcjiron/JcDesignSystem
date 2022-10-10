"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var navbar_1 = require("./navbar");
describe('Navbar', function () {
    it('should render successfully', function () {
        var baseElement = (0, react_1.render)((0, jsx_runtime_1.jsx)(navbar_1.Navbar, {})).baseElement;
        expect(baseElement).toBeTruthy();
    });
});
