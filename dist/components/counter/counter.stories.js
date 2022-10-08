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
exports.Primary = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importDefault(require('react'))
var _1 = require('./')
var styled_components_1 = __importDefault(require('styled-components'))
exports.default = {
    title: 'Example/Counter',
    component: _1.Counter,
}
var Container = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  width: 200px;\n  background: white;\n  border-radius: 5px;\n  padding: 1rem;\n',
            ],
            [
                '\n  width: 200px;\n  background: white;\n  border-radius: 5px;\n  padding: 1rem;\n',
            ]
        ))
)
var Template = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    var _b = react_1.default.useState(1),
        value = _b[0],
        setValue = _b[1]
    return (0, jsx_runtime_1.jsx)(Container, {
        children: (0, jsx_runtime_1.jsx)(
            _1.Counter,
            __assign({}, args, { onChange: setValue, value: value })
        ),
    })
}
exports.Primary = Template.bind({})
exports.Primary.args = {
    placeholder: 'Guests',
    min: 1,
    max: 10,
}
var templateObject_1
