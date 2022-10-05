"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var amenities_1 = require("./amenities");
var index_1 = __importDefault(require("../button/index"));
describe("Amenities", function () {
    it("should render successfully", function () {
        var baseElement = (0, react_1.render)((0, jsx_runtime_1.jsx)(amenities_1.Amenities, { images: [], Button: (0, jsx_runtime_1.jsx)(index_1.default, {}) })).baseElement;
        expect(baseElement).toBeTruthy();
    });
});
