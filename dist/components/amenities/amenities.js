"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amenities = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var amenity_1 = require("./amenity");
var Amenities = function (_a) {
    var images = _a.images, Button = _a.Button;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [images === null || images === void 0 ? void 0 : images.map(function (image, index) { return ((0, jsx_runtime_1.jsx)(amenity_1.Amenity, { image: image }, index)); }), Button] }));
};
exports.Amenities = Amenities;
