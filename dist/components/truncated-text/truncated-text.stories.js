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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _1 = require(".");
var typography_1 = require("../typography");
exports.default = {
    title: 'Example/Truncated Text',
};
var longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNam eget nisl euismod, rhoncus nunc eu, accumsan tellus.\nSuspendisse euismod, nunc a condimentum consectetur, nisi eros egestas\nnisl, eget gravida nunc leo eu nisl.\n";
var Heading = function (args) { return ((0, jsx_runtime_1.jsx)(_1.TruncatedText, __assign({}, args, { style: {
        background: 'var(--primary)',
        width: '200px',
        color: 'white',
    } }))); };
exports.Heading = Heading;
exports.Heading.args = {
    numberOfLines: 1,
    as: typography_1.Text,
    children: longText,
    wordBreak: 'break-all',
};
