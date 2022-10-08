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
exports.TabHeader = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var styled_components_1 = __importDefault(require('styled-components'))
var tab_context_1 = require('./tab-context')
var Container = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  &.tabs-header-container {\n    justify-content: space-between;\n    overflow-x: auto;\n    width: 100%;\n    /* Small devices (landscape phones, 576px and up) */\n    @media (min-width: 576px) {\n    }\n    /* Medium devices (tablets, 768px and up) */\n    @media (min-width: 768px) {\n      justify-content: initial;\n    }\n    /* Large devices (desktops, 992px and up) */\n    @media (min-width: 992px) {\n    }\n  }\n',
            ],
            [
                '\n  &.tabs-header-container {\n    justify-content: space-between;\n    overflow-x: auto;\n    width: 100%;\n    /* Small devices (landscape phones, 576px and up) */\n    @media (min-width: 576px) {\n    }\n    /* Medium devices (tablets, 768px and up) */\n    @media (min-width: 768px) {\n      justify-content: initial;\n    }\n    /* Large devices (desktops, 992px and up) */\n    @media (min-width: 992px) {\n    }\n  }\n',
            ]
        ))
)
var TabButton = styled_components_1.default.button(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            [
                '\n  --primary-color: black;\n  --border-color: #c4c4c4;\n  --border-height: 2px;\n  --font-size: 13px;\n  --padding: 8px 18px;\n  /* small mobile devices */\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent;\n  font-weight: 400;\n  font-size: var(--font-size);\n  color: var(--primary-color);\n  padding: var(--padding);\n  border: none;\n  border-bottom: var(--border-height) solid var(--border-color);\n  &.selected {\n    --primary-color: #8b6fc9;\n    --border-color: #8b6fc9;\n    --border-height: 2px;\n    font-weight: 600;\n  }\n  &:hover {\n    color: rgba(168, 147, 214, 1);\n  }\n  /* Mobile */\n  @media (min-width: 361px) {\n    --font-size: 14px;\n    --padding: 8px 24px;\n  }\n  /* Tablet */\n  @media (min-width: 768px) {\n    width: auto;\n    --font-size: 16px;\n  }\n  /* Desktop */\n  @media (min-width: 992px) {\n    --font-size: 20px;\n  }\n',
            ],
            [
                '\n  --primary-color: black;\n  --border-color: #c4c4c4;\n  --border-height: 2px;\n  --font-size: 13px;\n  --padding: 8px 18px;\n  /* small mobile devices */\n  width: 100%;\n  box-sizing: border-box;\n  background: transparent;\n  font-weight: 400;\n  font-size: var(--font-size);\n  color: var(--primary-color);\n  padding: var(--padding);\n  border: none;\n  border-bottom: var(--border-height) solid var(--border-color);\n  &.selected {\n    --primary-color: #8b6fc9;\n    --border-color: #8b6fc9;\n    --border-height: 2px;\n    font-weight: 600;\n  }\n  &:hover {\n    color: rgba(168, 147, 214, 1);\n  }\n  /* Mobile */\n  @media (min-width: 361px) {\n    --font-size: 14px;\n    --padding: 8px 24px;\n  }\n  /* Tablet */\n  @media (min-width: 768px) {\n    width: auto;\n    --font-size: 16px;\n  }\n  /* Desktop */\n  @media (min-width: 992px) {\n    --font-size: 20px;\n  }\n',
            ]
        ))
)
var TabHeader = function (_a) {
    var tabs = _a.tabs,
        className = _a.className
    var _b = (0, tab_context_1.useTabContext)(),
        activeTab = _b.activeTab,
        setActiveTab = _b.setActiveTab
    return (0, jsx_runtime_1.jsx)(
        Container,
        __assign(
            { className: 'd-flex tabs-header-container '.concat(className) },
            {
                children: tabs.map(function (tab) {
                    var isSelected = activeTab === tab.tabKey
                    return (0, jsx_runtime_1.jsx)(
                        TabButton,
                        __assign(
                            {
                                className: isSelected ? 'selected' : '',
                                onClick: function () {
                                    return setActiveTab(tab.tabKey)
                                },
                            },
                            { children: tab.label }
                        ),
                        tab.tabKey
                    )
                }),
            }
        )
    )
}
exports.TabHeader = TabHeader
var templateObject_1, templateObject_2
