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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.DropdownContainer = void 0
var styled_components_1 = __importDefault(require('styled-components'))
exports.DropdownContainer = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                "\n  &.light {\n    --selected-item-bg: rgba(139, 111, 201, 0.2);\n    --dropdown-item-color: #000;\n    --dropdown-menu-bg: white;\n    --dropdown-menu-hover-bg: rgba(139, 111, 201, 0.2);\n    --dropdown-toggle-bg: white;\n    --dropdown-toggle-color: #000;\n    --dropdown-toggle-disabled-color: #999;\n    --scrollbar-thumb: rgba(196, 196, 196, 0.7);\n  }\n\n  &.dark {\n    --selected-item-bg: rgba(0, 0, 0, 0.4);\n    --dropdown-item-color: #fff;\n    --dropdown-menu-bg: rgb(29, 29, 29);\n    --dropdown-menu-hover-bg: rgba(0, 0, 0, 0.4);\n    --dropdown-toggle-bg: rgb(29, 29, 29);\n    --dropdown-toggle-color: #fff;\n    --dropdown-toggle-disabled-color: #999;\n    --scrollbar-thumb: rgba(196, 196, 196, 0.7);\n  }\n  font-weight: 400;\n  .dropdown {\n  }\n  .dropdown-toggle {\n    background: var(--dropdown-toggle-bg);\n    color: var(--dropdown-toggle-color);\n    border: none;\n    padding: 1rem;\n    white-space: initial;\n    &:focus {\n      color: var(--dropdown-toggle-color);\n    }\n    &:disabled {\n      color: var(--dropdown-toggle-disabled-color);\n    }\n  }\n  .shrink-text {\n    -webkit-line-clamp: 1;\n    overflow: hidden;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    word-break: break-all;\n  }\n  .dropdown-toggle::after {\n    font-family: 'icomoon' !important;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    content: '\\e905';\n    border-top: 0px solid;\n    transition: transform 0.25s ease-in-out;\n    font-size: 24px;\n    margin-left: 8px;\n    transform: rotate(",
                ');\n  }\n  .dropdown-menu {\n    margin-top: 0.5rem;\n    background: var(--dropdown-menu-bg);\n  }\n  .dropdown-item {\n    color: var(--dropdown-item-color);\n    padding: 1rem;\n  }\n  .dropdown-item:hover,\n  .dropdown-item:focus {\n    background: var(--dropdown-menu-hover-bg);\n  }\n  .dropdown-item.selected-item {\n    background: var(--selected-item-bg);\n  }\n  .children-container {\n    padding: 0 !important;\n  }\n  /* smartphones, touchscreens */\n  @media (hover: none) and (pointer: coarse) {\n    .dropdown-item:hover,\n    .dropdown-item:focus {\n      background: transparent;\n    }\n  }\n  /* Desktop */\n  @media (min-width: 992px) {\n    .dropdown-toggle::after {\n      margin-left: 24px;\n    }\n  }\n',
            ],
            [
                "\n  &.light {\n    --selected-item-bg: rgba(139, 111, 201, 0.2);\n    --dropdown-item-color: #000;\n    --dropdown-menu-bg: white;\n    --dropdown-menu-hover-bg: rgba(139, 111, 201, 0.2);\n    --dropdown-toggle-bg: white;\n    --dropdown-toggle-color: #000;\n    --dropdown-toggle-disabled-color: #999;\n    --scrollbar-thumb: rgba(196, 196, 196, 0.7);\n  }\n\n  &.dark {\n    --selected-item-bg: rgba(0, 0, 0, 0.4);\n    --dropdown-item-color: #fff;\n    --dropdown-menu-bg: rgb(29, 29, 29);\n    --dropdown-menu-hover-bg: rgba(0, 0, 0, 0.4);\n    --dropdown-toggle-bg: rgb(29, 29, 29);\n    --dropdown-toggle-color: #fff;\n    --dropdown-toggle-disabled-color: #999;\n    --scrollbar-thumb: rgba(196, 196, 196, 0.7);\n  }\n  font-weight: 400;\n  .dropdown {\n  }\n  .dropdown-toggle {\n    background: var(--dropdown-toggle-bg);\n    color: var(--dropdown-toggle-color);\n    border: none;\n    padding: 1rem;\n    white-space: initial;\n    &:focus {\n      color: var(--dropdown-toggle-color);\n    }\n    &:disabled {\n      color: var(--dropdown-toggle-disabled-color);\n    }\n  }\n  .shrink-text {\n    -webkit-line-clamp: 1;\n    overflow: hidden;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    word-break: break-all;\n  }\n  .dropdown-toggle::after {\n    font-family: 'icomoon' !important;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    content: '\\\\e905';\n    border-top: 0px solid;\n    transition: transform 0.25s ease-in-out;\n    font-size: 24px;\n    margin-left: 8px;\n    transform: rotate(",
                ');\n  }\n  .dropdown-menu {\n    margin-top: 0.5rem;\n    background: var(--dropdown-menu-bg);\n  }\n  .dropdown-item {\n    color: var(--dropdown-item-color);\n    padding: 1rem;\n  }\n  .dropdown-item:hover,\n  .dropdown-item:focus {\n    background: var(--dropdown-menu-hover-bg);\n  }\n  .dropdown-item.selected-item {\n    background: var(--selected-item-bg);\n  }\n  .children-container {\n    padding: 0 !important;\n  }\n  /* smartphones, touchscreens */\n  @media (hover: none) and (pointer: coarse) {\n    .dropdown-item:hover,\n    .dropdown-item:focus {\n      background: transparent;\n    }\n  }\n  /* Desktop */\n  @media (min-width: 992px) {\n    .dropdown-toggle::after {\n      margin-left: 24px;\n    }\n  }\n',
            ]
        )),
    function (_a) {
        var isOpen = _a.isOpen
        return isOpen ? '180deg' : '0deg'
    }
)
var templateObject_1
