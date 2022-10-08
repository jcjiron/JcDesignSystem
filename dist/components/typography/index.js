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
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {}
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p]
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]]
            }
        return t
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.TypographyContainer =
    exports.Text =
    exports.Heading =
    exports.TypographyStyles =
        void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var styled_components_1 = __importStar(require('styled-components'))
var text_styles_1 = require('./text-styles')
var text_styles_2 = require('./text-styles')
Object.defineProperty(exports, 'TypographyStyles', {
    enumerable: true,
    get: function () {
        return text_styles_2.TypographyStyles
    },
})
var HeaderStyles = (0, styled_components_1.css)(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  &.h1 {\n    ',
                '\n  }\n  &.h2 {\n    ',
                '\n  }\n  &.h3 {\n    ',
                '\n  }\n  &.h4 {\n    ',
                '\n  }\n  &.h5 {\n    ',
                '\n  }\n',
            ],
            [
                '\n  &.h1 {\n    ',
                '\n  }\n  &.h2 {\n    ',
                '\n  }\n  &.h3 {\n    ',
                '\n  }\n  &.h4 {\n    ',
                '\n  }\n  &.h5 {\n    ',
                '\n  }\n',
            ]
        )),
    text_styles_1.SectionTitle,
    text_styles_1.SectionHeader,
    text_styles_1.SubSectionHeader,
    text_styles_1.SubSectionSubHeader,
    text_styles_1.Title
)
var HeadingComponent = function (_a) {
    var children = _a.children,
        className = _a.className,
        variant = _a.variant
    return react_1.default.createElement(
        variant,
        { className: ''.concat(className, ' ').concat(variant) },
        children
    )
}
var StyledHeadingComponent = (0, styled_components_1.default)(HeadingComponent)(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            ['\n  ', '\n'],
            ['\n  ', '\n']
        )),
    HeaderStyles
)
var Heading = function (args) {
    return (0, jsx_runtime_1.jsx)(StyledHeadingComponent, __assign({}, args))
}
exports.Heading = Heading
var TextStyles = (0, styled_components_1.css)(
    templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
            ['\n  ', '\n  &.small {\n    ', '\n  }\n'],
            ['\n  ', '\n  &.small {\n    ', '\n  }\n']
        )),
    text_styles_1.Default,
    text_styles_1.Small
)
var TextComponent = function (_a) {
    var children = _a.children,
        _b = _a.className,
        className = _b === void 0 ? '' : _b,
        _c = _a.variant,
        variant = _c === void 0 ? 'paragraph' : _c,
        _d = _a.size,
        size = _d === void 0 ? 'normal' : _d,
        style = _a.style
    return react_1.default.createElement(
        variant === 'paragraph' ? 'p' : variant,
        { className: ''.concat(className, ' ').concat(size), style: style },
        children
    )
}
var StyledTextComponent = (0, styled_components_1.default)(TextComponent)(
    templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
            ['\n  ', '\n'],
            ['\n  ', '\n']
        )),
    TextStyles
)
var Text = function (args) {
    return (0, jsx_runtime_1.jsx)(StyledTextComponent, __assign({}, args))
}
exports.Text = Text
var Container = styled_components_1.default.div(
    templateObject_5 ||
        (templateObject_5 = __makeTemplateObject(
            ['\n  ', '\n'],
            ['\n  ', '\n']
        )),
    text_styles_1.TypographyStyles
)
var TypographyContainer = function (_a) {
    var _b = _a.as,
        as = _b === void 0 ? 'div' : _b,
        props = __rest(_a, ['as'])
    return (0, jsx_runtime_1.jsx)(Container, __assign({ as: as }, props))
}
exports.TypographyContainer = TypographyContainer
var templateObject_1,
    templateObject_2,
    templateObject_3,
    templateObject_4,
    templateObject_5
