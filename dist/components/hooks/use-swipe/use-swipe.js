'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importDefault(require('react'))
var useSwipe = function (_a) {
    var onScrollLeft = _a.onScrollLeft,
        onScrollRight = _a.onScrollRight
    var touchStart = react_1.default.useRef(0)
    var touchEnd = react_1.default.useRef(0)
    var handleTouchStart = function (evt) {
        evt.persist()
        touchStart.current = evt.touches[0].clientX
    }
    var handleTouchMove = function (evt) {
        evt.persist()
        touchEnd.current = evt.touches[0].clientX
    }
    var handleTouchEnd = function (evt) {
        evt.persist()
        if (touchStart.current < touchEnd.current) {
            onScrollRight()
        }
        if (touchStart.current > touchEnd.current) {
            onScrollLeft()
        }
    }
    return {
        handleTouchEnd: handleTouchEnd,
        handleTouchStart: handleTouchStart,
        handleTouchMove: handleTouchMove,
    }
}
exports.default = useSwipe
