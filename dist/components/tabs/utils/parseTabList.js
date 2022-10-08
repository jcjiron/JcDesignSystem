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
var react_1 = __importDefault(require('react'))
var toArray_1 = __importDefault(require('./toArray'))
function parseTabList(children) {
    return (0, toArray_1.default)(children)
        .map(function (node) {
            if (react_1.default.isValidElement(node)) {
                return __assign({}, node.props)
            }
            return null
        })
        .filter(function (tab) {
            return tab
        })
}
exports.default = parseTabList
