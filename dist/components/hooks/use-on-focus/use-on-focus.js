"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var browser_1 = require("./utils/browser");
function useOnFocus(_a) {
    var onFocusOut = _a.onFocusOut, onFocusIn = _a.onFocusIn;
    var timeOutId = react_1.default.useRef();
    var userAgent = (0, browser_1.getBrowserName)();
    var isSafari = userAgent === 'Apple Safari';
    var isFirefox = userAgent === 'Mozilla Firefox';
    var isUnsupportedBrowser = isFirefox || isSafari;
    var listeningRef = react_1.default.useRef(null);
    var handleClickOutside = function (e) {
        var _a;
        if (!((_a = listeningRef === null || listeningRef === void 0 ? void 0 : listeningRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            onFocusOut();
        }
    };
    react_1.default.useEffect(function () {
        if (isUnsupportedBrowser) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            if (isUnsupportedBrowser) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    });
    // We close the popover on the next tick by using setTimeout.
    // This is necessary because we need to first check if
    // another child of the element has received focus as
    // the blur event fires prior to the new focus event.
    function onBlurHandler() {
        if (isUnsupportedBrowser)
            return;
        timeOutId.current = setTimeout(function () {
            if (onFocusOut) {
                onFocusOut();
            }
        });
    }
    // If a child receives focus, do not close the popover.
    function onFocusHandler() {
        if (isUnsupportedBrowser)
            return;
        clearTimeout(timeOutId.current);
        if (onFocusIn) {
            onFocusIn();
        }
    }
    return {
        onBlurHandler: onBlurHandler,
        onFocusHandler: onFocusHandler,
        listeningRef: listeningRef,
    };
}
exports.default = useOnFocus;
