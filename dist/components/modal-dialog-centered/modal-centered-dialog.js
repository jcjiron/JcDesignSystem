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
exports.ModalCenteredDialog = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var index_1 = require('../modal/index')
var close_button_1 = require('../button-close/close-button')
var styled_components_1 = __importDefault(require('styled-components'))
var Div = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '  \n  .modal-content {\n    background-color: #fff;\n    &.header-merged {\n      .modal-header{\n        z-index: 999;\n      }\n      .modal-body {\n        margin-top: -60px;\n        \n      }\n    }\n    &.dark {\n      background-color: var(--dark-bg);\n      color: white;\n      .close {\n        color: white;\n      }\n    }\n  }\n  .modal-header {\n    height: 60px;\n    justify-content: flex-end;\n    align-items: center;\n    border-bottom-width: 0px;\n  }\n  .close {\n    margin: 0px;\n  }\n',
            ],
            [
                '  \n  .modal-content {\n    background-color: #fff;\n    &.header-merged {\n      .modal-header{\n        z-index: 999;\n      }\n      .modal-body {\n        margin-top: -60px;\n        \n      }\n    }\n    &.dark {\n      background-color: var(--dark-bg);\n      color: white;\n      .close {\n        color: white;\n      }\n    }\n  }\n  .modal-header {\n    height: 60px;\n    justify-content: flex-end;\n    align-items: center;\n    border-bottom-width: 0px;\n  }\n  .close {\n    margin: 0px;\n  }\n',
            ]
        ))
)
var ModalCenteredDialog = function (_a) {
    var children = _a.children,
        closeModal = _a.closeModal,
        show = _a.show,
        _b = _a.className,
        className = _b === void 0 ? '' : _b,
        animate = _a.animate,
        variant = _a.variant,
        actionBar = _a.actionBar,
        _c = _a.mergeHeaderWithContent,
        mergeHeaderWithContent = _c === void 0 ? false : _c
    return (0, jsx_runtime_1.jsx)(
        index_1.Modal,
        __assign(
            {
                show: show,
                animate: animate,
                className: 'd-flex align-items-center justify-content-center',
            },
            {
                children: (0, jsx_runtime_1.jsx)(
                    Div,
                    __assign(
                        { className: ''.concat(className), role: 'document' },
                        {
                            children: (0, jsx_runtime_1.jsxs)(
                                'div',
                                __assign(
                                    {
                                        className:
                                            'modal-content border-0 \n          '
                                                .concat(
                                                    mergeHeaderWithContent
                                                        ? 'header-merged'
                                                        : '',
                                                    '\n          '
                                                )
                                                .concat(
                                                    variant !== undefined
                                                        ? variant
                                                        : ''
                                                ),
                                    },
                                    {
                                        children: [
                                            (0, jsx_runtime_1.jsxs)(
                                                'div',
                                                __assign(
                                                    {
                                                        className:
                                                            'modal-header p-0 '.concat(
                                                                !mergeHeaderWithContent &&
                                                                    'shadow-sm'
                                                            ),
                                                    },
                                                    {
                                                        children: [
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                close_button_1.CloseButton,
                                                                {
                                                                    onClick:
                                                                        closeModal,
                                                                }
                                                            ),
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                'div',
                                                                __assign(
                                                                    {
                                                                        className:
                                                                            'action-bar-container',
                                                                    },
                                                                    {
                                                                        children:
                                                                            actionBar,
                                                                    }
                                                                )
                                                            ),
                                                        ],
                                                    }
                                                )
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                                'div',
                                                __assign(
                                                    {
                                                        className:
                                                            'modal-body p-0',
                                                    },
                                                    { children: children }
                                                )
                                            ),
                                        ],
                                    }
                                )
                            ),
                        }
                    )
                ),
            }
        )
    )
}
exports.ModalCenteredDialog = ModalCenteredDialog
var templateObject_1
