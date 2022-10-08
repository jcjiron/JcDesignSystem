'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Portal = void 0
var react_1 = __importDefault(require('react'))
var react_dom_1 = __importDefault(require('react-dom'))
var Portal = function (_a) {
    var children = _a.children,
        className = _a.className,
        _b = _a.el,
        el = _b === void 0 ? 'div' : _b
    var container = react_1.default.useState(document.createElement(el))[0]
    container.classList.add('root-portal')
    if (className) {
        container.classList.add(className)
    }
    react_1.default.useEffect(function () {
        document.body.appendChild(container)
        return function () {
            document.body.removeChild(container)
        }
    }, [])
    return react_dom_1.default.createPortal(children, container)
}
exports.Portal = Portal
