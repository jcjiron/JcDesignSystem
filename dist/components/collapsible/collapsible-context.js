'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCollapsibleContext = exports.CollapsibleContext = void 0
var react_1 = __importDefault(require('react'))
exports.CollapsibleContext = react_1.default.createContext(undefined)
function useCollapsibleContext() {
    var context = react_1.default.useContext(exports.CollapsibleContext)
    if (!context) {
        throw new Error(
            'Collapsible compound components cannot be rendered outside the Collapsible component'
        )
    }
    return context
}
exports.useCollapsibleContext = useCollapsibleContext
