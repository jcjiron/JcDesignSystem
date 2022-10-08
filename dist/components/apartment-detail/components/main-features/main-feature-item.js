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
exports.MainFeatureItem = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var item_1 = require('./../../../list/item')
var index_1 = require('./../../../icon/index')
var styled_components_1 = __importDefault(require('styled-components'))
var use_screen_size_1 = __importDefault(
    require('../../../hooks/use-screen-size/use-screen-size')
)
var index_2 = require('../../../button/index')
var ActionContainer = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            ['\n  @media (max-width: 576px) {\n    display: none;\n  }\n'],
            ['\n  @media (max-width: 576px) {\n    display: none;\n  }\n']
        ))
)
var Container = styled_components_1.default.div(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            ['\n  color: var(--paragraph-color);\n'],
            ['\n  color: var(--paragraph-color);\n']
        ))
)
var ArrowIndicator = styled_components_1.default.div(
    templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
            [
                '\n  margin-left: 15px;\n  .btn-inline-link {\n    text-decoration: none;\n    color: #000;\n    &:focus {\n      color: #000;\n    }\n  }\n  @media (min-width: 576px) {\n    display: none;\n  }\n',
            ],
            [
                '\n  margin-left: 15px;\n  .btn-inline-link {\n    text-decoration: none;\n    color: #000;\n    &:focus {\n      color: #000;\n    }\n  }\n  @media (min-width: 576px) {\n    display: none;\n  }\n',
            ]
        ))
)
var MainFeatureItem = function (_a) {
    var children = _a.children,
        bulletIcon = _a.bulletIcon,
        subTitle = _a.subTitle,
        title = _a.title,
        actionButton = _a.actionButton,
        onActionClick = _a.onActionClick,
        onClick = _a.onClick
    var screenType = (0, use_screen_size_1.default)()
    return (0, jsx_runtime_1.jsx)(
        item_1.ListItem,
        __assign(
            {
                className: 'col col-sm-6 col-md-4 p-3',
                title: title,
                bulletIcon: bulletIcon,
                subTitle: subTitle,
                onClick: function () {
                    if (onClick && screenType === 'Mobile') {
                        onClick()
                    }
                },
            },
            {
                children: (0, jsx_runtime_1.jsxs)(
                    Container,
                    __assign(
                        { className: 'd-flex justify-content-between' },
                        {
                            children: [
                                (0, jsx_runtime_1.jsxs)('div', {
                                    children: [
                                        children,
                                        actionButton &&
                                            (0, jsx_runtime_1.jsx)(
                                                ActionContainer,
                                                {
                                                    children:
                                                        react_1.default.cloneElement(
                                                            actionButton,
                                                            __assign(
                                                                __assign(
                                                                    {},
                                                                    actionButton.props
                                                                ),
                                                                {
                                                                    onClick:
                                                                        onActionClick,
                                                                }
                                                            )
                                                        ),
                                                }
                                            ),
                                    ],
                                }),
                                actionButton &&
                                    (0, jsx_runtime_1.jsx)(ArrowIndicator, {
                                        children: (0, jsx_runtime_1.jsx)(
                                            index_2.Button,
                                            {
                                                variant: 'inline-link',
                                                icon: (0, jsx_runtime_1.jsx)(
                                                    index_1.Icon,
                                                    {
                                                        variant:
                                                            'icon-Chevron-Right',
                                                    }
                                                ),
                                                onClick: onActionClick,
                                            }
                                        ),
                                    }),
                            ],
                        }
                    )
                ),
            }
        )
    )
}
exports.MainFeatureItem = MainFeatureItem
var templateObject_1, templateObject_2, templateObject_3
