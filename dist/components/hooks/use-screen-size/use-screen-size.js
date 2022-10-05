"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenSize = void 0;
var react_1 = require("react");
var ScreenSize;
(function (ScreenSize) {
    ScreenSize[ScreenSize["SMALL"] = 576] = "SMALL";
    ScreenSize[ScreenSize["MEDIUM"] = 768] = "MEDIUM";
    ScreenSize[ScreenSize["LARGE"] = 992] = "LARGE";
    ScreenSize[ScreenSize["EXTRA_LARGE"] = 1200] = "EXTRA_LARGE";
})(ScreenSize = exports.ScreenSize || (exports.ScreenSize = {}));
var getIsMobile = function (size) {
    return size < ScreenSize.MEDIUM;
};
var getIsTablet = function (size) {
    return (size >= ScreenSize.MEDIUM &&
        size < ScreenSize.EXTRA_LARGE);
};
var getTypeOfScreen = function (size) {
    var isMobile = getIsMobile(size);
    var isTablet = getIsTablet(size);
    if (isMobile) {
        return 'Mobile';
    }
    else if (isTablet) {
        return 'Tablet';
    }
    return 'Desktop';
};
function useScreenSize() {
    var _a = (0, react_1.useState)(getTypeOfScreen(window.innerWidth)), screenType = _a[0], setScreenType = _a[1];
    (0, react_1.useEffect)(function () {
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    function handleResize() {
        var size = window.innerWidth;
        setScreenType(getTypeOfScreen(size));
    }
    return screenType;
}
exports.default = useScreenSize;
