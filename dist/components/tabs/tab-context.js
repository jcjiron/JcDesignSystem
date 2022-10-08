'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useTabContext = exports.TabsContext = void 0
var react_1 = __importDefault(require('react'))
exports.TabsContext = react_1.default.createContext(undefined)
function useTabContext() {
    var context = react_1.default.useContext(exports.TabsContext)
    if (!context) {
        throw new Error(
            'Tabs compound components cannot be rendered outside the Tabs component'
        )
    }
    return context
}
exports.useTabContext = useTabContext
