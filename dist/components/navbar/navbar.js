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
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              var desc = Object.getOwnPropertyDescriptor(m, k)
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k]
                      },
                  }
              }
              Object.defineProperty(o, k2, desc)
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
          })
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
              })
          }
        : function (o, v) {
              o['default'] = v
          })
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
            for (var k in mod)
                if (
                    k !== 'default' &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Navbar = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importStar(require('react'))
var styled_components_1 = __importDefault(require('styled-components'))
require('../../../assets/styles/bootstrap/navbar.scss')
var close_mobile_menu_1 = require('./close-mobile-menu')
var StyledNavbar = styled_components_1.default.nav(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  flex-wrap: nowrap;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 66px;\n  top: 0;\n  position: sticky;\n  z-index: 20;\n  &.bg-light {\n    box-shadow: 0px 3px 3px 0px rgba(173, 173, 173, 0.3);\n    background-color: var(--truewhite) !important;\n    .bar-menu {\n      background: var(--black);\n    }\n    .nav-link {\n      color: var(--black);\n      background-color: transparent;\n    }\n  }\n\n  &.bg-transparent {\n    .navbar-brand {\n      color: whitesmoke;\n    }\n    .nav-link {\n      color: var(--truewhite);\n      background-color: transparent;\n    }\n    .bar-menu {\n      background: var(--truewhite);\n    }\n  }\n\n  .navbar-brand {\n    font-size: 26px;\n  }\n\n  .dropdown-toggle {\n    .dropdown {\n      .dropdown-menu {\n        margin-top: 8px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 992px) {\n    padding-right: 16px;\n    padding-left: 16px;\n    &.navbar-dark {\n      .nav-link {\n        color: var(--black);\n      }\n    }\n    .collapse {\n      &:not(.show) {\n        left: 100%;\n        overflow: hidden;\n        text-align: right;\n        width: calc(100% - 32px);\n      }\n      &.navbar-collapse {\n        &.show {\n          color: var(--black);\n          right: 0px;\n          background: var(--truewhite);\n          overflow-y: scroll;\n          text-align: left;\n          position: fixed;\n          top: 0px;\n          height: calc(100vh);\n        }\n      }\n    }\n\n    .mobile-menu {\n      .nav-link {\n        color: var(--dark);\n      }\n      & > .dropdown-menu {\n        border: 0px solid transparent;\n        width: calc(100vw);\n        max-width: 576px;\n      }\n      .dropdown-item {\n        min-height: 38px;\n      }\n      .dropdown-item.dropdown {\n        .nav-link:hover {\n          color: var(--dark);\n        }\n      }\n    }\n    .modal-background {\n      height: 100vh;\n      width: 100vw;\n      background-color: rgba(0, 0, 0, 0.5);\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n\n  @media (min-width: 993px) {\n    &.bg-transparent {\n      .collapse {\n        &.navbar-collapse {\n          background: transparent;\n        }\n      }\n    }\n  }\n',
            ],
            [
                '\n  flex-wrap: nowrap;\n  padding-left: 60px;\n  padding-right: 60px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  height: 66px;\n  top: 0;\n  position: sticky;\n  z-index: 20;\n  &.bg-light {\n    box-shadow: 0px 3px 3px 0px rgba(173, 173, 173, 0.3);\n    background-color: var(--truewhite) !important;\n    .bar-menu {\n      background: var(--black);\n    }\n    .nav-link {\n      color: var(--black);\n      background-color: transparent;\n    }\n  }\n\n  &.bg-transparent {\n    .navbar-brand {\n      color: whitesmoke;\n    }\n    .nav-link {\n      color: var(--truewhite);\n      background-color: transparent;\n    }\n    .bar-menu {\n      background: var(--truewhite);\n    }\n  }\n\n  .navbar-brand {\n    font-size: 26px;\n  }\n\n  .dropdown-toggle {\n    .dropdown {\n      .dropdown-menu {\n        margin-top: 8px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 992px) {\n    padding-right: 16px;\n    padding-left: 16px;\n    &.navbar-dark {\n      .nav-link {\n        color: var(--black);\n      }\n    }\n    .collapse {\n      &:not(.show) {\n        left: 100%;\n        overflow: hidden;\n        text-align: right;\n        width: calc(100% - 32px);\n      }\n      &.navbar-collapse {\n        &.show {\n          color: var(--black);\n          right: 0px;\n          background: var(--truewhite);\n          overflow-y: scroll;\n          text-align: left;\n          position: fixed;\n          top: 0px;\n          height: calc(100vh);\n        }\n      }\n    }\n\n    .mobile-menu {\n      .nav-link {\n        color: var(--dark);\n      }\n      & > .dropdown-menu {\n        border: 0px solid transparent;\n        width: calc(100vw);\n        max-width: 576px;\n      }\n      .dropdown-item {\n        min-height: 38px;\n      }\n      .dropdown-item.dropdown {\n        .nav-link:hover {\n          color: var(--dark);\n        }\n      }\n    }\n    .modal-background {\n      height: 100vh;\n      width: 100vw;\n      background-color: rgba(0, 0, 0, 0.5);\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n\n  @media (min-width: 993px) {\n    &.bg-transparent {\n      .collapse {\n        &.navbar-collapse {\n          background: transparent;\n        }\n      }\n    }\n  }\n',
            ]
        ))
)
var Navbar = function (_a) {
    var _b = _a.className,
        className = _b === void 0 ? '' : _b,
        _c = _a.variant,
        variant = _c === void 0 ? 'dark' : _c,
        actionItems = _a.actionItems,
        navigationItems = _a.navigationItems,
        MobileMenu = _a.MobileMenu,
        brand = _a.brand,
        children = _a.children,
        leftContent = _a.leftContent
    className = 'navbar navbar-expand-lg navbar-'
        .concat(variant, ' bg-')
        .concat(variant, ' ')
        .concat(className)
    var _d = (0, react_1.useState)(false),
        showMenu = _d[0],
        setShowMenu = _d[1]
    var setMenu = function () {
        if (showMenu) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }
    var closeMenu = function () {
        return setShowMenu(false)
    }
    return (0, jsx_runtime_1.jsxs)(
        StyledNavbar,
        __assign(
            { className: className },
            {
                children: [
                    brand,
                    leftContent
                        ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
                              children: [
                                  leftContent,
                                  (0, jsx_runtime_1.jsx)('div', {
                                      style: { flex: 1 },
                                  }),
                              ],
                          })
                        : null,
                    children
                        ? children
                        : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
                              children: [
                                  (0, jsx_runtime_1.jsx)(
                                      close_mobile_menu_1.MobileMenuButton,
                                      {
                                          clickHandler: setMenu,
                                          isMenuOpen: showMenu,
                                      }
                                  ),
                                  (0, jsx_runtime_1.jsx)('div', {
                                      className: 'modal-background '.concat(
                                          showMenu ? 'd-block' : 'd-none',
                                          ' position-absolute'
                                      ),
                                  }),
                                  (0, jsx_runtime_1.jsxs)(
                                      'div',
                                      __assign(
                                          {
                                              className: showMenu
                                                  ? 'collapse navbar-collapse show '
                                                  : 'collapse navbar-collapse ',
                                              id: 'navbarMenu',
                                          },
                                          {
                                              children: [
                                                  navigationItems &&
                                                      (0, jsx_runtime_1.jsx)(
                                                          'ul',
                                                          __assign(
                                                              {
                                                                  className:
                                                                      'navbar-nav navigation-section ml-auto mt-2 mt-lg-0 d-none d-lg-flex',
                                                              },
                                                              {
                                                                  children:
                                                                      navigationItems,
                                                              }
                                                          )
                                                      ),
                                                  actionItems &&
                                                      (0, jsx_runtime_1.jsx)(
                                                          'ul',
                                                          __assign(
                                                              {
                                                                  className:
                                                                      'navbar-nav action-section ml-4 d-none d-lg-flex',
                                                              },
                                                              {
                                                                  children:
                                                                      actionItems,
                                                              }
                                                          )
                                                      ),
                                                  MobileMenu &&
                                                      (0, jsx_runtime_1.jsx)(
                                                          'ul',
                                                          __assign(
                                                              {
                                                                  className:
                                                                      'navbar-nav d-lg-none d-xl-none mobile-menu',
                                                              },
                                                              {
                                                                  children:
                                                                      react_1.default.cloneElement(
                                                                          MobileMenu,
                                                                          {
                                                                              closeMenu:
                                                                                  closeMenu,
                                                                              isMenuOpen:
                                                                                  showMenu,
                                                                          }
                                                                      ),
                                                              }
                                                          )
                                                      ),
                                              ],
                                          }
                                      )
                                  ),
                              ],
                          }),
                ],
            }
        )
    )
}
exports.Navbar = Navbar
var templateObject_1
