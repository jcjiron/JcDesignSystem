"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContrastYIQ = void 0;
function getContrastYIQ(hexcolor) {
    var hex = hexcolor.replace('#', '');
    var r = parseInt(hex.substr(0, 2), 16);
    var g = parseInt(hex.substr(2, 2), 16);
    var b = parseInt(hex.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
}
exports.getContrastYIQ = getContrastYIQ;
