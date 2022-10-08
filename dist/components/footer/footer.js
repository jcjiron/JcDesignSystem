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
exports.Footer = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var get_contrast_YIQ_1 = require('../utils/get-contrast-YIQ')
var card_1 = require('./card')
var backgroundColor = '#1A1A1A'
var StyledFooter = styled_components_1.default.footer(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  background-color: ',
                ';\n  color: ',
                ';\n  padding-bottom: 30px;\n  .btn-link {\n    font-weight: 400;\n    font-size: 9pt;\n    color: #f0f0f0;\n    &:focus {\n      box-shadow: inherit;\n    }\n  }\n  .icon-button {\n    color: ',
                ';\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  .icon {\n    font-size: 28pt;\n  }\n\n  @media (min-width: 575px) && (max-width: 1199px) {\n    .footer-pad {\n      padding-left: 180px;\n    }\n    .links-pad {\n      padding-left: 200px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .footer-pad {\n      padding-left: 30px;\n    }\n    .links-pad {\n      padding-left: 50px;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    .col-2 {\n      flex: 100%;\n      max-width: 50%;\n    }\n    .col-3 {\n      flex: 100%;\n      max-width: 100%;\n    }\n  }\n\n  @media (max-width: 576px) {\n    .icon {\n      font-size: 24pt;\n    }\n  }\n',
            ],
            [
                '\n  background-color: ',
                ';\n  color: ',
                ';\n  padding-bottom: 30px;\n  .btn-link {\n    font-weight: 400;\n    font-size: 9pt;\n    color: #f0f0f0;\n    &:focus {\n      box-shadow: inherit;\n    }\n  }\n  .icon-button {\n    color: ',
                ';\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  .icon {\n    font-size: 28pt;\n  }\n\n  @media (min-width: 575px) && (max-width: 1199px) {\n    .footer-pad {\n      padding-left: 180px;\n    }\n    .links-pad {\n      padding-left: 200px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    .footer-pad {\n      padding-left: 30px;\n    }\n    .links-pad {\n      padding-left: 50px;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    .col-2 {\n      flex: 100%;\n      max-width: 50%;\n    }\n    .col-3 {\n      flex: 100%;\n      max-width: 100%;\n    }\n  }\n\n  @media (max-width: 576px) {\n    .icon {\n      font-size: 24pt;\n    }\n  }\n',
            ]
        )),
    function () {
        return backgroundColor
    },
    function () {
        return (0, get_contrast_YIQ_1.getContrastYIQ)(backgroundColor)
    },
    function () {
        return (0, get_contrast_YIQ_1.getContrastYIQ)(backgroundColor)
    }
)
var FooterCard = (0, styled_components_1.default)(card_1.Card)(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            [
                '\n  background-color: ',
                ';\n  .font-bigger {\n    font-size: 19pt;\n  }\n  .card-title {\n    font-size: 14pt;\n  }\n  .card-text {\n    font-size: 12pt;\n    font-weight: 400;\n    color: #f0f0f0;\n    a {\n      color: #f0f0f0;\n    }\n  }\n\n  @media (max-width: 767px) {\n    .card-body {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n  @media (max-width: 576px) {\n    .card-title {\n      font-size: 12pt;\n    }\n    .card-text {\n      font-size: 12pt;\n    }\n    .font-bigger {\n      font-size: 16pt;\n    }\n  }\n',
            ],
            [
                '\n  background-color: ',
                ';\n  .font-bigger {\n    font-size: 19pt;\n  }\n  .card-title {\n    font-size: 14pt;\n  }\n  .card-text {\n    font-size: 12pt;\n    font-weight: 400;\n    color: #f0f0f0;\n    a {\n      color: #f0f0f0;\n    }\n  }\n\n  @media (max-width: 767px) {\n    .card-body {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n  @media (max-width: 576px) {\n    .card-title {\n      font-size: 12pt;\n    }\n    .card-text {\n      font-size: 12pt;\n    }\n    .font-bigger {\n      font-size: 16pt;\n    }\n  }\n',
            ]
        )),
    function () {
        return backgroundColor
    }
)
var Footer = function (_a) {
    var NewsLetterForm = _a.NewsLetterForm,
        cardOne = _a.cardOne,
        cardTwo = _a.cardTwo,
        linkOne = _a.linkOne,
        linkThree = _a.linkThree,
        linkTwo = _a.linkTwo,
        linkFour = _a.linkFour,
        mainText = _a.mainText,
        socialIconsOne = _a.socialIconsOne,
        socialIconsTwo = _a.socialIconsTwo
    return (0, jsx_runtime_1.jsxs)(
        StyledFooter,
        __assign(
            { className: 'container-fluid pt-2 pt-4' },
            {
                children: [
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'footer-pad' },
                            {
                                children: [
                                    (0, jsx_runtime_1.jsx)('div', {
                                        children: NewsLetterForm,
                                    }),
                                    (0, jsx_runtime_1.jsxs)(
                                        'div',
                                        __assign(
                                            { className: 'row py-2' },
                                            {
                                                children: [
                                                    (0, jsx_runtime_1.jsx)(
                                                        'div',
                                                        __assign(
                                                            {
                                                                className:
                                                                    'col-3',
                                                            },
                                                            {
                                                                children: (0,
                                                                jsx_runtime_1.jsx)(
                                                                    FooterCard,
                                                                    {
                                                                        children:
                                                                            (0,
                                                                            jsx_runtime_1.jsx)(
                                                                                'div',
                                                                                __assign(
                                                                                    {
                                                                                        className:
                                                                                            'card-body',
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            (0,
                                                                                            jsx_runtime_1.jsx)(
                                                                                                'p',
                                                                                                __assign(
                                                                                                    {
                                                                                                        className:
                                                                                                            'font-weight-bolder font-bigger mb-0 pt-sm-2 pb-sm-3',
                                                                                                    },
                                                                                                    {
                                                                                                        children:
                                                                                                            mainText,
                                                                                                    }
                                                                                                )
                                                                                            ),
                                                                                    }
                                                                                )
                                                                            ),
                                                                    }
                                                                ),
                                                            }
                                                        )
                                                    ),
                                                    (0, jsx_runtime_1.jsx)(
                                                        'div',
                                                        __assign(
                                                            {
                                                                className:
                                                                    'col-md-8',
                                                            },
                                                            {
                                                                children: (0,
                                                                jsx_runtime_1.jsxs)(
                                                                    'div',
                                                                    __assign(
                                                                        {
                                                                            className:
                                                                                'row',
                                                                        },
                                                                        {
                                                                            children:
                                                                                [
                                                                                    (0,
                                                                                    jsx_runtime_1.jsx)(
                                                                                        'div',
                                                                                        __assign(
                                                                                            {
                                                                                                className:
                                                                                                    'col-sm-6 py-2',
                                                                                            },
                                                                                            {
                                                                                                children:
                                                                                                    (0,
                                                                                                    jsx_runtime_1.jsx)(
                                                                                                        FooterCard,
                                                                                                        {
                                                                                                            children:
                                                                                                                (0,
                                                                                                                jsx_runtime_1.jsxs)(
                                                                                                                    'div',
                                                                                                                    __assign(
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'card-body',
                                                                                                                        },
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    (0,
                                                                                                                                    jsx_runtime_1.jsx)(
                                                                                                                                        'h5',
                                                                                                                                        __assign(
                                                                                                                                            {
                                                                                                                                                className:
                                                                                                                                                    'card-title',
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    cardOne ===
                                                                                                                                                        null ||
                                                                                                                                                    cardOne ===
                                                                                                                                                        void 0
                                                                                                                                                        ? void 0
                                                                                                                                                        : cardOne.title,
                                                                                                                                            }
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                    (0,
                                                                                                                                    jsx_runtime_1.jsx)(
                                                                                                                                        'p',
                                                                                                                                        __assign(
                                                                                                                                            {
                                                                                                                                                className:
                                                                                                                                                    'card-text ',
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    cardOne ===
                                                                                                                                                        null ||
                                                                                                                                                    cardOne ===
                                                                                                                                                        void 0
                                                                                                                                                        ? void 0
                                                                                                                                                        : cardOne.content,
                                                                                                                                            }
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    )
                                                                                                                ),
                                                                                                        }
                                                                                                    ),
                                                                                            }
                                                                                        )
                                                                                    ),
                                                                                    (0,
                                                                                    jsx_runtime_1.jsx)(
                                                                                        'div',
                                                                                        __assign(
                                                                                            {
                                                                                                className:
                                                                                                    'col-sm-6 py-2',
                                                                                            },
                                                                                            {
                                                                                                children:
                                                                                                    (0,
                                                                                                    jsx_runtime_1.jsx)(
                                                                                                        FooterCard,
                                                                                                        {
                                                                                                            children:
                                                                                                                (0,
                                                                                                                jsx_runtime_1.jsxs)(
                                                                                                                    'div',
                                                                                                                    __assign(
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'card-body',
                                                                                                                        },
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    (0,
                                                                                                                                    jsx_runtime_1.jsx)(
                                                                                                                                        'h5',
                                                                                                                                        __assign(
                                                                                                                                            {
                                                                                                                                                className:
                                                                                                                                                    'card-title',
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    cardTwo ===
                                                                                                                                                        null ||
                                                                                                                                                    cardTwo ===
                                                                                                                                                        void 0
                                                                                                                                                        ? void 0
                                                                                                                                                        : cardTwo.title,
                                                                                                                                            }
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                    (0,
                                                                                                                                    jsx_runtime_1.jsx)(
                                                                                                                                        'p',
                                                                                                                                        __assign(
                                                                                                                                            {
                                                                                                                                                className:
                                                                                                                                                    'card-text ',
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                children:
                                                                                                                                                    cardTwo ===
                                                                                                                                                        null ||
                                                                                                                                                    cardTwo ===
                                                                                                                                                        void 0
                                                                                                                                                        ? void 0
                                                                                                                                                        : cardTwo.content,
                                                                                                                                            }
                                                                                                                                        )
                                                                                                                                    ),
                                                                                                                                ],
                                                                                                                        }
                                                                                                                    )
                                                                                                                ),
                                                                                                        }
                                                                                                    ),
                                                                                            }
                                                                                        )
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    )
                                                                ),
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
                                            { className: 'row py-2 pb-3' },
                                            {
                                                children: (0,
                                                jsx_runtime_1.jsxs)(
                                                    'div',
                                                    __assign(
                                                        { className: 'col-2' },
                                                        {
                                                            children: [
                                                                (0,
                                                                jsx_runtime_1.jsx)(
                                                                    FooterCard,
                                                                    {
                                                                        children:
                                                                            (0,
                                                                            jsx_runtime_1.jsx)(
                                                                                'div',
                                                                                __assign(
                                                                                    {
                                                                                        className:
                                                                                            'card-body pt-0 d-flex justify-content-between',
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            socialIconsOne &&
                                                                                            socialIconsOne.map(
                                                                                                function (
                                                                                                    button
                                                                                                ) {
                                                                                                    return (0,
                                                                                                    jsx_runtime_1.jsx)(
                                                                                                        'div',
                                                                                                        {
                                                                                                            children:
                                                                                                                (0,
                                                                                                                jsx_runtime_1.jsx)(
                                                                                                                    'a',
                                                                                                                    __assign(
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'icon-button',
                                                                                                                            href: button.url,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                button ===
                                                                                                                                    null ||
                                                                                                                                button ===
                                                                                                                                    void 0
                                                                                                                                    ? void 0
                                                                                                                                    : button.icon,
                                                                                                                        }
                                                                                                                    )
                                                                                                                ),
                                                                                                        },
                                                                                                        button.key
                                                                                                    )
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                )
                                                                            ),
                                                                    }
                                                                ),
                                                                (0,
                                                                jsx_runtime_1.jsx)(
                                                                    FooterCard,
                                                                    {
                                                                        children:
                                                                            (0,
                                                                            jsx_runtime_1.jsx)(
                                                                                'div',
                                                                                __assign(
                                                                                    {
                                                                                        className:
                                                                                            'card-body pt-0 d-flex justify-content-between',
                                                                                    },
                                                                                    {
                                                                                        children:
                                                                                            socialIconsTwo &&
                                                                                            socialIconsTwo.map(
                                                                                                function (
                                                                                                    button
                                                                                                ) {
                                                                                                    return (0,
                                                                                                    jsx_runtime_1.jsx)(
                                                                                                        'div',
                                                                                                        {
                                                                                                            children:
                                                                                                                (0,
                                                                                                                jsx_runtime_1.jsx)(
                                                                                                                    'a',
                                                                                                                    __assign(
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'icon-button',
                                                                                                                            href: button.url,
                                                                                                                        },
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                button ===
                                                                                                                                    null ||
                                                                                                                                button ===
                                                                                                                                    void 0
                                                                                                                                    ? void 0
                                                                                                                                    : button.icon,
                                                                                                                        }
                                                                                                                    )
                                                                                                                ),
                                                                                                        },
                                                                                                        button.key
                                                                                                    )
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                )
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    )
                                                ),
                                            }
                                        )
                                    ),
                                ],
                            }
                        )
                    ),
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'row py-2 links-pad' },
                            {
                                children: [
                                    (0, jsx_runtime_1.jsx)(
                                        'div',
                                        __assign(
                                            {
                                                className:
                                                    'col-md-3 col-sm-6 col-12 py-1 text-left',
                                            },
                                            {
                                                children: (0,
                                                jsx_runtime_1.jsx)(
                                                    'a',
                                                    __assign(
                                                        {
                                                            href:
                                                                linkOne ===
                                                                    null ||
                                                                linkOne ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkOne.url,
                                                            className:
                                                                'btn-link',
                                                        },
                                                        {
                                                            children:
                                                                linkOne ===
                                                                    null ||
                                                                linkOne ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkOne.text,
                                                        }
                                                    )
                                                ),
                                            }
                                        )
                                    ),
                                    (0, jsx_runtime_1.jsx)(
                                        'div',
                                        __assign(
                                            {
                                                className:
                                                    'col-md-3  col-sm-6 col-12  py-1 text-left',
                                            },
                                            {
                                                children: (0,
                                                jsx_runtime_1.jsx)(
                                                    'a',
                                                    __assign(
                                                        {
                                                            href:
                                                                linkTwo ===
                                                                    null ||
                                                                linkTwo ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkTwo.url,
                                                            className:
                                                                'btn-link',
                                                        },
                                                        {
                                                            children:
                                                                linkTwo ===
                                                                    null ||
                                                                linkTwo ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkTwo.text,
                                                        }
                                                    )
                                                ),
                                            }
                                        )
                                    ),
                                    (0, jsx_runtime_1.jsx)(
                                        'div',
                                        __assign(
                                            {
                                                className:
                                                    'col-md-3  col-sm-6 col-12  py-1 text-left',
                                            },
                                            {
                                                children: (0,
                                                jsx_runtime_1.jsx)(
                                                    'a',
                                                    __assign(
                                                        {
                                                            href:
                                                                linkThree ===
                                                                    null ||
                                                                linkThree ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkThree.url,
                                                            className:
                                                                'btn-link',
                                                        },
                                                        {
                                                            children:
                                                                linkThree ===
                                                                    null ||
                                                                linkThree ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkThree.text,
                                                        }
                                                    )
                                                ),
                                            }
                                        )
                                    ),
                                    (0, jsx_runtime_1.jsx)(
                                        'div',
                                        __assign(
                                            {
                                                className:
                                                    'col-md-3  col-sm-6 col-12  py-1 text-left',
                                            },
                                            {
                                                children: (0,
                                                jsx_runtime_1.jsx)(
                                                    'a',
                                                    __assign(
                                                        {
                                                            href:
                                                                linkFour ===
                                                                    null ||
                                                                linkFour ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkFour.url,
                                                            className:
                                                                'btn-link',
                                                        },
                                                        {
                                                            children:
                                                                linkFour ===
                                                                    null ||
                                                                linkFour ===
                                                                    void 0
                                                                    ? void 0
                                                                    : linkFour.text,
                                                        }
                                                    )
                                                ),
                                            }
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
exports.Footer = Footer
var templateObject_1, templateObject_2
