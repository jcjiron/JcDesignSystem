'use strict'
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
exports.DropdownBase = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var use_on_focus_1 = __importDefault(
    require('../hooks/use-on-focus/use-on-focus')
)
var modal_with_navigation_1 = require('../modal-with-navigation')
var drop_down_container_1 = require('./drop-down-container')
var DropdownBase = function (props) {
    var _a = (0, react_1.useState)(false),
        isOpen = _a[0],
        setIsOpen = _a[1]
    var isControlled = function (prop) {
        return props[prop] !== undefined
    }
    var openDropdown = function () {
        var isOpenControlled = isControlled('isOpen')
        if (isOpenControlled) {
            props.onOpenClick()
        } else {
            setIsOpen(true)
        }
    }
    var closeDropdown = function () {
        var isOpenControlled = isControlled('isOpen')
        if (isOpenControlled) {
            props.onCloseClick()
        } else {
            setIsOpen(false)
        }
    }
    var _b = (0, use_on_focus_1.default)({
            onFocusOut: function () {
                if (!props.fullScreen) {
                    closeDropdown()
                }
            },
        }),
        onBlurHandler = _b.onBlurHandler,
        onFocusHandler = _b.onFocusHandler,
        listeningRef = _b.listeningRef
    var getState = function () {
        var state = {
            isOpen: isOpen,
        }
        return Object.entries(state).reduce(function (combinedState, _a) {
            var key = _a[0],
                value = _a[1]
            if (isControlled(key)) {
                combinedState[key] = props[key]
            } else {
                combinedState[key] = value
            }
            return combinedState
        }, {})
    }
    return (0, jsx_runtime_1.jsx)(
        drop_down_container_1.DropdownContainer,
        __assign(
            {
                onFocus: onFocusHandler,
                onBlur: onBlurHandler,
                ref: listeningRef,
                isOpen: getState().isOpen,
                className: ''
                    .concat(props.variant, ' ')
                    .concat(props.className || ''),
            },
            {
                children: (0, jsx_runtime_1.jsxs)(
                    'div',
                    __assign(
                        { className: 'dropdown' },
                        {
                            children: [
                                (0, jsx_runtime_1.jsx)(
                                    'button',
                                    __assign(
                                        {
                                            ref: props.buttonRef,
                                            className:
                                                'btn btn-secondary dropdown-toggle d-flex align-items-center',
                                            type: 'button',
                                            id: 'dropdownMenuButton',
                                            'data-toggle': 'dropdown',
                                            onClick: openDropdown,
                                            'aria-haspopup': 'true',
                                            'aria-expanded': getState().isOpen,
                                            disabled: props.disabled,
                                        },
                                        {
                                            children: (0, jsx_runtime_1.jsx)(
                                                'span',
                                                __assign(
                                                    {
                                                        className:
                                                            'shrink-text',
                                                    },
                                                    {
                                                        children:
                                                            props.placeholder,
                                                    }
                                                )
                                            ),
                                        }
                                    )
                                ),
                                props.fullScreen
                                    ? (0, jsx_runtime_1.jsx)(
                                          modal_with_navigation_1.ModalWithNavigation,
                                          __assign(
                                              {
                                                  onGoBack: props.onGoBackClick,
                                                  onClose: closeDropdown,
                                                  title: String(
                                                      props.placeholder
                                                  ),
                                                  show: getState().isOpen,
                                                  animate:
                                                      props.animate || false,
                                                  variant: props.variant,
                                              },
                                              {
                                                  children: (0,
                                                  jsx_runtime_1.jsx)(
                                                      'div',
                                                      __assign(
                                                          {
                                                              className:
                                                                  ''.concat(
                                                                      getState()
                                                                          .isOpen
                                                                          ? 'd-block'
                                                                          : 'd-none'
                                                                  ),
                                                              'aria-labelledby':
                                                                  'dropdownMenuButton',
                                                          },
                                                          {
                                                              children:
                                                                  props.children,
                                                          }
                                                      )
                                                  ),
                                              }
                                          )
                                      )
                                    : (0, jsx_runtime_1.jsx)(
                                          'div',
                                          __assign(
                                              {
                                                  className:
                                                      'dropdown-menu '.concat(
                                                          getState().isOpen
                                                              ? 'd-block'
                                                              : 'd-none'
                                                      ),
                                                  'aria-labelledby':
                                                      'dropdownMenuButton',
                                              },
                                              { children: props.children }
                                          )
                                      ),
                            ],
                        }
                    )
                ),
            }
        )
    )
}
exports.DropdownBase = DropdownBase
