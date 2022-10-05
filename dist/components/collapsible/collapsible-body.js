"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleBody = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var collapsible_context_1 = require("./collapsible-context");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  transition: height 0.25s ease-in-out;\n"], ["\n  overflow: hidden;\n  transition: height 0.25s ease-in-out;\n"])));
var CollapsibleBody = function (_a) {
    var children = _a.children, style = _a.style, props = __rest(_a, ["children", "style"]);
    var isOpen = (0, collapsible_context_1.useCollapsibleContext)().isOpen;
    var ref = React.useRef(null);
    var _b = React.useState(isOpen ? undefined : 0), height = _b[0], setHeight = _b[1];
    React.useEffect(function () {
        if (!height || !isOpen || !ref.current) {
            return undefined;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var resizeObserver = new ResizeObserver(function (el) {
            setHeight(el[0].contentRect.height);
        });
        resizeObserver.observe(ref.current);
        return function () {
            resizeObserver.disconnect();
        };
    }, [height, isOpen]);
    React.useEffect(function () {
        var _a;
        if (isOpen) {
            setHeight((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height);
        }
        else {
            setHeight(0);
        }
    }, [isOpen]);
    return ((0, jsx_runtime_1.jsx)(Container, __assign({}, props, { style: __assign(__assign({}, style), { height: height }), role: "region", "aria-hidden": !isOpen }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ ref: ref }, { children: isOpen && children })) })));
};
exports.CollapsibleBody = CollapsibleBody;
var templateObject_1;
