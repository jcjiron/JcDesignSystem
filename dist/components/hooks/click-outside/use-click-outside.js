'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useClickOutside = void 0
var react_1 = require('react')
var useClickOutside = function () {
    var _a = (0, react_1.useState)(false),
        clickedOutside = _a[0],
        setClickedOutside = _a[1]
    var listeningRef = (0, react_1.useRef)(null)
    var handleClickOutside = function (e) {
        var _a
        if (
            !((_a =
                listeningRef === null || listeningRef === void 0
                    ? void 0
                    : listeningRef.current) === null || _a === void 0
                ? void 0
                : _a.contains(e.target))
        ) {
            setClickedOutside(true)
        }
    }
    ;(0, react_1.useEffect)(function () {
        document.addEventListener('mousedown', handleClickOutside)
        return function () {
            return document.removeEventListener('mousedown', handleClickOutside)
        }
    })
    var handleClickInside = function () {
        return setClickedOutside(false)
    }
    return {
        handleClickInside: handleClickInside,
        clickedOutside: clickedOutside,
        listeningRef: listeningRef,
    }
}
exports.useClickOutside = useClickOutside
