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
exports.ListItem = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var Item = styled_components_1.default.li(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  background-color: transparent;\n  border-width: 0px;\n\n  .item-header {\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  .item-subheader {\n    color: var(--paragraph-color);\n    font-size: 12px;\n    font-style: italic;\n    font-weight: 400;\n  }\n',
            ],
            [
                '\n  background-color: transparent;\n  border-width: 0px;\n\n  .item-header {\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  .item-subheader {\n    color: var(--paragraph-color);\n    font-size: 12px;\n    font-style: italic;\n    font-weight: 400;\n  }\n',
            ]
        ))
)
var ListItem = function (_a) {
    var bulletIcon = _a.bulletIcon,
        _b = _a.className,
        className = _b === void 0 ? '' : _b,
        children = _a.children,
        title = _a.title,
        subTitle = _a.subTitle,
        onClick = _a.onClick
    return (0, jsx_runtime_1.jsxs)(
        Item,
        __assign(
            {
                className: 'list-group-item d-flex p-0 '.concat(
                    className,
                    ' my-2'
                ),
                onClick: onClick,
            },
            {
                children: [
                    bulletIcon &&
                        (0, jsx_runtime_1.jsx)(
                            'div',
                            __assign(
                                { className: 'bullet pt-1 pr-3' },
                                { children: bulletIcon }
                            )
                        ),
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'flex-grow-1' },
                            {
                                children: [
                                    title &&
                                        (0, jsx_runtime_1.jsxs)(
                                            'div',
                                            __assign(
                                                { className: 'mb-1' },
                                                {
                                                    children: [
                                                        (0, jsx_runtime_1.jsx)(
                                                            'h3',
                                                            __assign(
                                                                {
                                                                    className:
                                                                        'mb-0 item-header',
                                                                },
                                                                {
                                                                    children:
                                                                        title,
                                                                }
                                                            )
                                                        ),
                                                        subTitle &&
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                'small',
                                                                __assign(
                                                                    {
                                                                        className:
                                                                            'item-subheader',
                                                                    },
                                                                    {
                                                                        children:
                                                                            subTitle,
                                                                    }
                                                                )
                                                            ),
                                                    ],
                                                }
                                            )
                                        ),
                                    typeof children === 'string'
                                        ? (0, jsx_runtime_1.jsx)(
                                              'p',
                                              __assign(
                                                  { className: 'mb-1' },
                                                  { children: children }
                                              )
                                          )
                                        : (0, jsx_runtime_1.jsx)(
                                              'div',
                                              __assign(
                                                  { className: 'mb-1' },
                                                  { children: children }
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
exports.ListItem = ListItem
var templateObject_1
