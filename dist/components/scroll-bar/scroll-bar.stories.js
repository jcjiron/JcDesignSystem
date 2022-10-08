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
exports.Template = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var _1 = require('.')
var styled_components_1 = __importDefault(require('styled-components'))
exports.default = {
    title: 'Example/Custom Scroll bar',
}
var Box = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  height: 150px;\n  width: 150px;\n  overflow: auto;\n  padding: 8px;\n',
            ],
            [
                '\n  height: 150px;\n  width: 150px;\n  overflow: auto;\n  padding: 8px;\n',
            ]
        ))
)
var FirstBox = (0, styled_components_1.default)(Box)(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            ['\n  ', '\n  background: #6246ea;\n  color: white;\n'],
            ['\n  ', '\n  background: #6246ea;\n  color: white;\n']
        )),
    _1.customScrollBar
)
var SecondBox = (0, styled_components_1.default)(Box)(
    templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
            ['\n  background: #d1d1e9;\n'],
            ['\n  background: #d1d1e9;\n']
        ))
)
var ThirdBox = (0, styled_components_1.default)(Box)(
    templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
            [
                '\n  ',
                '\n  --track-background: #d1d1e9;\n  --handle-background: rgba(98, 70, 234, 0.5);\n  --handle-hover-background: rgba(98, 70, 234, 1);\n\n  color: white;\n  background: #2b2c34;\n',
            ],
            [
                '\n  ',
                '\n  --track-background: #d1d1e9;\n  --handle-background: rgba(98, 70, 234, 0.5);\n  --handle-hover-background: rgba(98, 70, 234, 1);\n\n  color: white;\n  background: #2b2c34;\n',
            ]
        )),
    _1.customScrollBar
)
var Template = function () {
    return (0, jsx_runtime_1.jsxs)(
        'div',
        __assign(
            { className: 'd-flex' },
            {
                children: [
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'mr-4' },
                            {
                                children: [
                                    (0, jsx_runtime_1.jsx)('h2', {
                                        children: 'Custom scroll Bar',
                                    }),
                                    (0, jsx_runtime_1.jsx)(FirstBox, {
                                        children:
                                            'Reprehenderit assumenda incidunt iste et ut ab. Quo consectetur est non vitae. Occaecati maiores corporis doloremque. Quasi dolore illum. Quas quas quod voluptatem voluptatibus necessitatibus numquam dolorum ipsum qui.',
                                    }),
                                ],
                            }
                        )
                    ),
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'mr-4' },
                            {
                                children: [
                                    (0, jsx_runtime_1.jsx)('h2', {
                                        children: 'Default scroll Bar',
                                    }),
                                    (0, jsx_runtime_1.jsx)(SecondBox, {
                                        children:
                                            'Reprehenderit assumenda incidunt iste et ut ab. Quo consectetur est non vitae. Occaecati maiores corporis doloremque. Quasi dolore illum. Quas quas quod voluptatem voluptatibus necessitatibus numquam dolorum ipsum qui.',
                                    }),
                                ],
                            }
                        )
                    ),
                    (0, jsx_runtime_1.jsxs)('div', {
                        children: [
                            (0, jsx_runtime_1.jsx)('h2', {
                                children: 'Even more custom scroll Bar',
                            }),
                            (0, jsx_runtime_1.jsx)(ThirdBox, {
                                children:
                                    'Reprehenderit assumenda incidunt iste et ut ab. Quo consectetur est non vitae. Occaecati maiores corporis doloremque. Quasi dolore illum. Quas quas quod voluptatem voluptatibus necessitatibus numquam dolorum ipsum qui.',
                            }),
                            (0, jsx_runtime_1.jsx)(
                                'p',
                                __assign(
                                    { style: { width: 300 } },
                                    {
                                        children:
                                            'If you need to update the colors of the scroll bar you just need to update these CSS custom properties',
                                    }
                                )
                            ),
                            (0, jsx_runtime_1.jsxs)('ul', {
                                children: [
                                    (0, jsx_runtime_1.jsx)('li', {
                                        children: (0, jsx_runtime_1.jsx)(
                                            'code',
                                            { children: '--track-background' }
                                        ),
                                    }),
                                    (0, jsx_runtime_1.jsx)('li', {
                                        children: (0, jsx_runtime_1.jsx)(
                                            'code',
                                            { children: '--handle-background' }
                                        ),
                                    }),
                                    (0, jsx_runtime_1.jsx)('li', {
                                        children: (0, jsx_runtime_1.jsx)(
                                            'code',
                                            {
                                                children:
                                                    '--handle-hover-background',
                                            }
                                        ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }
        )
    )
}
exports.Template = Template
exports.Template.args = {}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4
