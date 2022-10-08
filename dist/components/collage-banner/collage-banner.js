'use strict'
var __makeTemplateObject =
    (this && this.__makeTemplateObject) ||
    function (cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', { value: raw })
        } else {
            cooked.raw = raw
        }
        return cooked
    }
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.CollageBanner = exports.BannerButtonStyles = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
exports.BannerButtonStyles = {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    color: '#1A1A1A',
    fontSize: '15px',
    padding: '7px 16px',
}
var Styles = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  position: relative;\n\n  .content {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 30px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;    \n    div {\n        display: flex;\n    }\n  }\n  @media (min-width: 768px) {\n    .content {\n      position: absolute;\n      bottom: 30px;\n      left: 50px;\n      display: inherit;\n    }\n  }\n  .grid {\n    display: grid;\n    gap: 15px;\n    grid-template-columns: [col1-start] auto [col1-end col2-start];\n    grid-template-rows: [row1-start] 250px [row1-end row2-start];\n    .item {\n      display: none;\n      overflow: hidden;\n    }\n\n    .main {\n      grid-column-start: col1-start;\n      grid-column-end: col1-end;\n      grid-row-start: row1-start;\n      grid-row-end: row2-end;\n    }\n    .a {\n      grid-column-start: col2-start;\n      grid-column-end: col2-end;\n      grid-row-start: row1-start;\n      grid-row-end: row1-end;\n    }\n    .b {\n      grid-column-start: col3-start;\n      grid-column-end: col3-end;\n      grid-row-start: row1-start;\n      grid-row-end: row1-end;\n    }\n    .c {\n      grid-column-start: col2-start;\n      grid-column-end: col2-end;\n      grid-row-start: row2-start;\n      grid-row-end: row2-end;\n    }\n    .d {\n      grid-column-start: col3-start;\n      grid-column-end: col3-end;\n      grid-row-start: row2-start;\n      grid-row-end: row2-end;\n    }\n\n    @media (min-width: 576px) {\n      grid-template-rows: [row1-start] 400px [row1-end row2-start];\n    }\n    @media (min-width: 768px) {\n      .content {\n        position: absolute;\n        bottom: 30px;\n        left: 50px;\n      }\n      grid-template-rows: [row1-start] 155px [row1-end row2-start] 155px [row2-end];\n      grid-template-columns: [col1-start] auto [col1-end col2-start] 19vw [col2-end col3-start] 19vw [col3-end];\n      .item {\n        display: inherit;\n      }\n    }\n    @media (min-width: 992px) {\n      grid-template-rows: [row1-start] 141px [row1-end row2-start] 141px [row2-end];\n      grid-template-columns: [col1-start] auto [col1-end col2-start] 18vw [col2-end col3-start] 18vw [col3-end];\n    }\n    @media (min-width: 1152px) {\n      grid-template-rows: [row1-start] 172px [row1-end row2-start] 172px [row2-end];\n    }\n    @media (min-width: 1440px) {\n      grid-template-rows: [row1-start] 207px [row1-end row2-start] 207px [row2-end];\n    }\n  }\n',
            ],
            [
                '\n  position: relative;\n\n  .content {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 30px;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    justify-content: center;    \n    div {\n        display: flex;\n    }\n  }\n  @media (min-width: 768px) {\n    .content {\n      position: absolute;\n      bottom: 30px;\n      left: 50px;\n      display: inherit;\n    }\n  }\n  .grid {\n    display: grid;\n    gap: 15px;\n    grid-template-columns: [col1-start] auto [col1-end col2-start];\n    grid-template-rows: [row1-start] 250px [row1-end row2-start];\n    .item {\n      display: none;\n      overflow: hidden;\n    }\n\n    .main {\n      grid-column-start: col1-start;\n      grid-column-end: col1-end;\n      grid-row-start: row1-start;\n      grid-row-end: row2-end;\n    }\n    .a {\n      grid-column-start: col2-start;\n      grid-column-end: col2-end;\n      grid-row-start: row1-start;\n      grid-row-end: row1-end;\n    }\n    .b {\n      grid-column-start: col3-start;\n      grid-column-end: col3-end;\n      grid-row-start: row1-start;\n      grid-row-end: row1-end;\n    }\n    .c {\n      grid-column-start: col2-start;\n      grid-column-end: col2-end;\n      grid-row-start: row2-start;\n      grid-row-end: row2-end;\n    }\n    .d {\n      grid-column-start: col3-start;\n      grid-column-end: col3-end;\n      grid-row-start: row2-start;\n      grid-row-end: row2-end;\n    }\n\n    @media (min-width: 576px) {\n      grid-template-rows: [row1-start] 400px [row1-end row2-start];\n    }\n    @media (min-width: 768px) {\n      .content {\n        position: absolute;\n        bottom: 30px;\n        left: 50px;\n      }\n      grid-template-rows: [row1-start] 155px [row1-end row2-start] 155px [row2-end];\n      grid-template-columns: [col1-start] auto [col1-end col2-start] 19vw [col2-end col3-start] 19vw [col3-end];\n      .item {\n        display: inherit;\n      }\n    }\n    @media (min-width: 992px) {\n      grid-template-rows: [row1-start] 141px [row1-end row2-start] 141px [row2-end];\n      grid-template-columns: [col1-start] auto [col1-end col2-start] 18vw [col2-end col3-start] 18vw [col3-end];\n    }\n    @media (min-width: 1152px) {\n      grid-template-rows: [row1-start] 172px [row1-end row2-start] 172px [row2-end];\n    }\n    @media (min-width: 1440px) {\n      grid-template-rows: [row1-start] 207px [row1-end row2-start] 207px [row2-end];\n    }\n  }\n',
            ]
        ))
)
var CollageBanner = function (_a) {
    var _b = _a.images,
        img1 = _b[0],
        img2 = _b[1],
        img3 = _b[2],
        img4 = _b[3],
        img5 = _b[4],
        children = _a.children
    return (0, jsx_runtime_1.jsxs)(Styles, {
        children: [
            (0, jsx_runtime_1.jsx)(
                'div',
                __assign(
                    { className: 'content' },
                    {
                        children: (0, jsx_runtime_1.jsx)('div', {
                            children: children,
                        }),
                    }
                )
            ),
            (0, jsx_runtime_1.jsxs)(
                'div',
                __assign(
                    { className: 'grid' },
                    {
                        children: [
                            (0, jsx_runtime_1.jsx)(
                                'div',
                                __assign(
                                    { className: 'main' },
                                    { children: img1 }
                                )
                            ),
                            (0, jsx_runtime_1.jsx)(
                                'div',
                                __assign(
                                    { className: 'item a' },
                                    { children: img2 }
                                )
                            ),
                            (0, jsx_runtime_1.jsx)(
                                'div',
                                __assign(
                                    { className: 'item b' },
                                    { children: img3 }
                                )
                            ),
                            (0, jsx_runtime_1.jsx)(
                                'div',
                                __assign(
                                    { className: 'item c' },
                                    { children: img4 }
                                )
                            ),
                            (0, jsx_runtime_1.jsx)(
                                'div',
                                __assign(
                                    { className: 'item d' },
                                    { children: img5 }
                                )
                            ),
                        ],
                    }
                )
            ),
        ],
    })
}
exports.CollageBanner = CollageBanner
var templateObject_1
