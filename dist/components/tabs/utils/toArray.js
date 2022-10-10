"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function toArray(children) {
    var ret = [];
    react_1.default.Children.forEach(children, function (child) {
        if (!child) {
            return;
        }
        if (Array.isArray(child)) {
            ret = ret.concat(toArray(child));
        }
        else {
            ret.push(child);
        }
    });
    return ret;
}
exports.default = toArray;
