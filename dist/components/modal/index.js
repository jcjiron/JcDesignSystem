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
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Modal = exports.preventScrollOnBody = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var styled_components_1 = __importDefault(require('styled-components'))
var portal_1 = require('../portal')
require('../../../assets/styles/bootstrap/modal.scss')
var ModalStyles = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  transition: top 0.5s;\n  &.animate {\n    top: 100vh !important;\n  }\n  display: block;\n  z-index: 1072;\n',
            ],
            [
                '\n  transition: top 0.5s;\n  &.animate {\n    top: 100vh !important;\n  }\n  display: block;\n  z-index: 1072;\n',
            ]
        ))
)
var Div = styled_components_1.default.div(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            ['\n  opacity: 0.8 !important;\n'],
            ['\n  opacity: 0.8 !important;\n']
        ))
)
function preventScrollOnBody(_a) {
    var show = _a.show,
        pageBody = _a.pageBody,
        modalContainer = _a.modalContainer
    if (show) {
        var top_1 = window.scrollY
        if (pageBody.style.top === '') {
            pageBody.style.top = '-'.concat(top_1, 'px')
            pageBody.style.position = 'fixed'
            pageBody.style.width = '100vw'
        }
    } else {
        if (!modalContainer && pageBody.style.top !== '') {
            var top_2 = parseInt(pageBody.style.top.slice(0, -2), 10) * -1
            pageBody.style.position = ''
            pageBody.style.top = ''
            window.scrollTo(0, top_2)
        }
    }
}
exports.preventScrollOnBody = preventScrollOnBody
var Modal = function (_a) {
    var children = _a.children,
        show = _a.show,
        _b = _a.animate,
        animate = _b === void 0 ? false : _b,
        className = _a.className,
        props = __rest(_a, ['children', 'show', 'animate', 'className'])
    var _c = (0, react_1.useState)(animate ? 'animate' : ''),
        animateClass = _c[0],
        setAnimateClass = _c[1]
    ;(0, react_1.useEffect)(
        function () {
            if (animate) {
                if (show) {
                    setTimeout(function () {
                        return setAnimateClass('')
                    }, 100)
                } else {
                    setAnimateClass('animate')
                }
            }
            preventScrollOnBody({
                show: show,
                pageBody: document.querySelector('body'),
                modalContainer: document.querySelector('.root-portal'),
            })
        },
        [show]
    )
    return (
        show &&
        (0, jsx_runtime_1.jsxs)(portal_1.Portal, {
            children: [
                (0, jsx_runtime_1.jsx)(
                    ModalStyles,
                    __assign(
                        {},
                        props,
                        {
                            className: 'modal fade show '
                                .concat(className, ' rounded ')
                                .concat(animateClass),
                        },
                        { children: children }
                    )
                ),
                (0, jsx_runtime_1.jsx)(Div, {
                    className: 'modal-backdrop fade show',
                }),
            ],
        })
    )
}
exports.Modal = Modal
var templateObject_1, templateObject_2
