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
exports.StickyNotification = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var styled_components_1 = __importDefault(require('styled-components'))
var alert_component_1 = require('../alerts/alert.component')
var use_session_storage_1 = require('../hooks/session-storage/use-session-storage')
var icon_1 = require('../icon')
var Div = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  z-index: 19;\n  position: sticky;\n  .alert-notification,\n  .badge {\n    margin-top: 10px;\n    right: 74px;\n    @media (max-width: 991px) {\n      right: 10px;\n    }\n  }\n  .alert-notification {\n    max-width: 428px;\n    min-width: 275px;\n    margin-left: 10px;\n    transition: right 0.3s ease 0.3s;\n    &.dismissed {\n      transition: right 0.3s;\n      display: block;\n      right: -450px;\n    }\n  }\n  .badge {\n    padding: 10px 8px;\n    border-radius: 30px;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 1;\n    transition: margin-top 0.3s ease 0.3s, opacity 0.1s ease 0.2s;\n    &.dismissed {\n      margin-top: 50px;\n      margin-right: -450px;\n      opacity: 0;\n      display: block;\n      transition: margin-top 0.3s, opacity 0.1s ease 0.2s,\n        margin-right 0.3s ease 0.5s;\n    }\n  }\n',
            ],
            [
                '\n  z-index: 19;\n  position: sticky;\n  .alert-notification,\n  .badge {\n    margin-top: 10px;\n    right: 74px;\n    @media (max-width: 991px) {\n      right: 10px;\n    }\n  }\n  .alert-notification {\n    max-width: 428px;\n    min-width: 275px;\n    margin-left: 10px;\n    transition: right 0.3s ease 0.3s;\n    &.dismissed {\n      transition: right 0.3s;\n      display: block;\n      right: -450px;\n    }\n  }\n  .badge {\n    padding: 10px 8px;\n    border-radius: 30px;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 1;\n    transition: margin-top 0.3s ease 0.3s, opacity 0.1s ease 0.2s;\n    &.dismissed {\n      margin-top: 50px;\n      margin-right: -450px;\n      opacity: 0;\n      display: block;\n      transition: margin-top 0.3s, opacity 0.1s ease 0.2s,\n        margin-right 0.3s ease 0.5s;\n    }\n  }\n',
            ]
        ))
)
var STICKY_NOTIFICATION_IS_CLOSED = '__mkt_notification_status__'
var StickyNotification = function (_a) {
    var children = _a.children,
        storageProvider = _a.storageProvider,
        _b = _a.variant,
        variant = _b === void 0 ? 'primary' : _b,
        _c = _a.backgroundColor,
        backgroundColor = _c === void 0 ? '' : _c,
        isMaximized = _a.isMaximized
    var _d = (0, use_session_storage_1.useSessionStorage)(storageProvider()),
        getItem = _d.getItem,
        setItem = _d.setItem
    var _e = (0, react_1.useState)(
            !getItem(STICKY_NOTIFICATION_IS_CLOSED)
                ? false
                : getItem(STICKY_NOTIFICATION_IS_CLOSED)
        ),
        isDismissed = _e[0],
        setDismiss = _e[1]
    var handleDismiss = function () {
        setItem(STICKY_NOTIFICATION_IS_CLOSED, !isDismissed)
        setDismiss(!isDismissed)
    }
    ;(0, react_1.useEffect)(function () {
        if (isMaximized) {
            setDismiss(false)
        }
    }, [])
    return (0, jsx_runtime_1.jsxs)(Div, {
        children: [
            (0, jsx_runtime_1.jsx)(
                alert_component_1.StatefulAlert,
                __assign(
                    {
                        variant: variant,
                        isDismissable: true,
                        handleDismiss: handleDismiss,
                        isDismissed: isDismissed,
                        className: 'alert-notification position-fixed',
                        backgroundColor: backgroundColor,
                    },
                    { children: children }
                )
            ),
            (0, jsx_runtime_1.jsx)(
                alert_component_1.StatefulAlert,
                __assign(
                    {
                        variant: variant,
                        isDismissed: !isDismissed,
                        className: 'badge position-fixed',
                        onClick: handleDismiss,
                        backgroundColor: backgroundColor,
                    },
                    {
                        children: (0, jsx_runtime_1.jsx)(icon_1.Icon, {
                            variant: 'icon-notification',
                        }),
                    }
                )
            ),
        ],
    })
}
exports.StickyNotification = StickyNotification
var templateObject_1
