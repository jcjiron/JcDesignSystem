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
exports.ModalScrollableContent = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var use_screen_size_1 = require('../hooks/use-screen-size/use-screen-size')
var div_100vh_1 = require('../div-100vh')
var ScrollableDiv = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  --modal-vertical-padding: 10px;\n  --mobile-content-size: calc(\n    ',
                ' - var(--action-bar-height) - var(--modal-vertical-padding)\n  );\n  overflow: scroll;\n  min-height: var(--action-bar-height);\n  height: var(--mobile-content-size);\n  @media (min-width: ',
                'px) {\n    --desktop-content-size: calc(\n      var(--action-bar-height) + var(--modal-vertical-marging) +\n        var(--modal-vertical-padding)\n    );\n    height: calc(\n      ',
                ' - var(--desktop-content-size)\n    );\n    @media (min-height: 630px) {\n      --desktop-content-size: calc(\n        var(--action-bar-height) + var(--modal-vertical-padding)\n      );\n      height: calc(var(--desktop-max-height) - var(--desktop-content-size));\n    }\n  }\n',
            ],
            [
                '\n  --modal-vertical-padding: 10px;\n  --mobile-content-size: calc(\n    ',
                ' - var(--action-bar-height) - var(--modal-vertical-padding)\n  );\n  overflow: scroll;\n  min-height: var(--action-bar-height);\n  height: var(--mobile-content-size);\n  @media (min-width: ',
                'px) {\n    --desktop-content-size: calc(\n      var(--action-bar-height) + var(--modal-vertical-marging) +\n        var(--modal-vertical-padding)\n    );\n    height: calc(\n      ',
                ' - var(--desktop-content-size)\n    );\n    @media (min-height: 630px) {\n      --desktop-content-size: calc(\n        var(--action-bar-height) + var(--modal-vertical-padding)\n      );\n      height: calc(var(--desktop-max-height) - var(--desktop-content-size));\n    }\n  }\n',
            ]
        )),
    function (props) {
        return props['data-height'] !== undefined
            ? ''.concat(props['data-height'], 'px')
            : '100vh'
    },
    use_screen_size_1.ScreenSize.SMALL,
    function (props) {
        return props['data-height'] !== undefined
            ? ''.concat(props['data-height'], 'px')
            : '100vh'
    }
)
var ModalScrollableContent = function (props) {
    var height = (0, div_100vh_1.use100vh)()
    return (0, jsx_runtime_1.jsx)(
        ScrollableDiv,
        __assign({ 'data-height': height }, props)
    )
}
exports.ModalScrollableContent = ModalScrollableContent
var templateObject_1
