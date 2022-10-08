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
exports.NavlinkMobileDropdownModal = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var react_2 = require('react')
var styled_components_1 = __importDefault(require('styled-components'))
var icon_1 = require('../icon')
var modal_1 = require('../modal')
var div_100vh_1 = require('../div-100vh')
var ModalDropdownContainer = (0, styled_components_1.default)(
    div_100vh_1.Div100vh
)(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  max-width: inherit;\n  margin: inherit;\n  align-items: center !important;\n  .dropdown-modal {\n    pointer-events: all;\n    position: relative;\n    margin-top: 0px;\n    margin-left: 0px;\n  }\n  .modal-close {\n    position: absolute;\n    top: 17px;\n    right: 15px;\n    font-size: 12px;\n    cursor: pointer;\n  }\n  @media (max-width: 576px) {\n    align-items: flex-end !important;\n    .dropdown-modal {\n      width: 100vw;\n      border-radius: 25px 25px 0px 0px;\n      padding-bottom: 25px;\n    }\n  }\n',
            ],
            [
                '\n  max-width: inherit;\n  margin: inherit;\n  align-items: center !important;\n  .dropdown-modal {\n    pointer-events: all;\n    position: relative;\n    margin-top: 0px;\n    margin-left: 0px;\n  }\n  .modal-close {\n    position: absolute;\n    top: 17px;\n    right: 15px;\n    font-size: 12px;\n    cursor: pointer;\n  }\n  @media (max-width: 576px) {\n    align-items: flex-end !important;\n    .dropdown-modal {\n      width: 100vw;\n      border-radius: 25px 25px 0px 0px;\n      padding-bottom: 25px;\n    }\n  }\n',
            ]
        ))
)
var NavlinkMobileDropdownModal = function (_a) {
    var itemText = _a.itemText,
        children = _a.children,
        _b = _a.className,
        className = _b === void 0 ? '' : _b,
        closeMobileMenu = _a.closeMobileMenu
    var _c = (0, react_2.useState)(false),
        open = _c[0],
        setOpen = _c[1]
    var openModalDropdown = function () {
        closeMobileMenu()
        setOpen(true)
    }
    var closeModalDropdown = function () {
        setOpen(false)
    }
    return (0, jsx_runtime_1.jsxs)(
        'div',
        __assign(
            { className: ''.concat(className, ' dropdown') },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(
                        'span',
                        __assign(
                            {
                                onClick: openModalDropdown,
                                className: ''.concat(
                                    open ? 'show' : '',
                                    ' dropdown-toggle nav-link'
                                ),
                            },
                            {
                                children: (0, jsx_runtime_1.jsx)(
                                    'span',
                                    __assign(
                                        { className: 'nav-link-content' },
                                        { children: itemText }
                                    )
                                ),
                            }
                        )
                    ),
                    (0, jsx_runtime_1.jsx)(
                        modal_1.Modal,
                        __assign(
                            { show: open },
                            {
                                children: (0, jsx_runtime_1.jsx)(
                                    ModalDropdownContainer,
                                    __assign(
                                        {
                                            className:
                                                'modal-dialog d-flex justify-content-center modal-dropdown-container',
                                        },
                                        {
                                            children: (0, jsx_runtime_1.jsx)(
                                                'div',
                                                {
                                                    children:
                                                        react_1.default.cloneElement(
                                                            children,
                                                            {
                                                                open: open
                                                                    ? 'show'
                                                                    : undefined,
                                                                className:
                                                                    'dropdown-modal',
                                                            },
                                                            (0,
                                                            jsx_runtime_1.jsxs)(
                                                                jsx_runtime_1.Fragment,
                                                                {
                                                                    children: [
                                                                        Array.isArray(
                                                                            children
                                                                                .props
                                                                                .children
                                                                        )
                                                                            ? children.props.children.map(
                                                                                  function (
                                                                                      el,
                                                                                      index
                                                                                  ) {
                                                                                      return react_1.default.cloneElement(
                                                                                          el,
                                                                                          __assign(
                                                                                              __assign(
                                                                                                  {},
                                                                                                  el.props
                                                                                              ),
                                                                                              {
                                                                                                  closeDropDown:
                                                                                                      closeModalDropdown,
                                                                                                  key: index,
                                                                                              }
                                                                                          )
                                                                                      )
                                                                                  }
                                                                              )
                                                                            : react_1.default.cloneElement(
                                                                                  children
                                                                                      .props
                                                                                      .children,
                                                                                  __assign(
                                                                                      __assign(
                                                                                          {},
                                                                                          children
                                                                                              .props
                                                                                              .children
                                                                                              .props
                                                                                      ),
                                                                                      {
                                                                                          closeDropDown:
                                                                                              closeModalDropdown,
                                                                                      }
                                                                                  )
                                                                              ),
                                                                        (0,
                                                                        jsx_runtime_1.jsx)(
                                                                            icon_1.Icon,
                                                                            {
                                                                                variant:
                                                                                    'icon-close',
                                                                                className:
                                                                                    'modal-close',
                                                                                onClick:
                                                                                    closeModalDropdown,
                                                                            }
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
                            }
                        )
                    ),
                ],
            }
        )
    )
}
exports.NavlinkMobileDropdownModal = NavlinkMobileDropdownModal
var templateObject_1
