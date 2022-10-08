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
exports.UnitCardPriceItem = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var StyledPriceItem = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  .starting-title {\n    text-transform: uppercase;\n    color: #6c757d;\n  }\n  .price-tag {\n    color: #f2f2f2;\n  }\n  &.horizontal {\n    display: flex;\n    flex-direction: row;\n    .starting-title {\n      flex-grow: 1;\n      font-size: 0.57rem;\n    }\n    .price-tag {\n      flex-grow: 1;\n      margin-left: auto;\n      text-align: right;\n      font-size: 0.93rem;\n      font-weight: bold;\n    }\n  }\n  &.vertical {\n    .starting-title {\n      margin: 0px;\n      font-size: 10px;\n      font-weight: 700;\n      text-align: left;\n      text-align: right;\n    }\n    .price-tag {\n      line-height: 14px;\n      font-size: 14px;\n      position: relative;\n      text-align: right;\n    }\n  }\n',
            ],
            [
                '\n  .starting-title {\n    text-transform: uppercase;\n    color: #6c757d;\n  }\n  .price-tag {\n    color: #f2f2f2;\n  }\n  &.horizontal {\n    display: flex;\n    flex-direction: row;\n    .starting-title {\n      flex-grow: 1;\n      font-size: 0.57rem;\n    }\n    .price-tag {\n      flex-grow: 1;\n      margin-left: auto;\n      text-align: right;\n      font-size: 0.93rem;\n      font-weight: bold;\n    }\n  }\n  &.vertical {\n    .starting-title {\n      margin: 0px;\n      font-size: 10px;\n      font-weight: 700;\n      text-align: left;\n      text-align: right;\n    }\n    .price-tag {\n      line-height: 14px;\n      font-size: 14px;\n      position: relative;\n      text-align: right;\n    }\n  }\n',
            ]
        ))
)
var UnitCardPriceItem = function (_a) {
    var _b = _a.orientation,
        orientation = _b === void 0 ? 'horizontal' : _b,
        stagingTitle = _a.stagingTitle,
        pricePerNight = _a.pricePerNight,
        priceTitle = _a.priceTitle
    return (0, jsx_runtime_1.jsxs)(
        StyledPriceItem,
        __assign(
            { className: ''.concat(orientation) },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(
                        'h4',
                        __assign(
                            { className: 'starting-title' },
                            { children: stagingTitle }
                        )
                    ),
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'price-tag' },
                            {
                                children: [
                                    '$',
                                    pricePerNight,
                                    (0, jsx_runtime_1.jsxs)(
                                        'span',
                                        __assign(
                                            { className: 'night-title' },
                                            { children: ['/', priceTitle] }
                                        )
                                    ),
                                ],
                            }
                        )
                    ),
                ],
            }
        )
    )
}
exports.UnitCardPriceItem = UnitCardPriceItem
exports.default = { UnitCardPriceItem: exports.UnitCardPriceItem }
var templateObject_1
