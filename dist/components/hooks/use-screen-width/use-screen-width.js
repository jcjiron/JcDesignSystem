"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreenWidth = void 0;
var react_1 = require("react");
var useScreenWidth = function () {
    var _a = (0, react_1.useState)(window.innerWidth), widthSize = _a[0], setWidthSize = _a[1];
    var handleResize = function () {
        var size = window.innerWidth;
        setWidthSize(size);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return widthSize;
};
exports.useScreenWidth = useScreenWidth;
