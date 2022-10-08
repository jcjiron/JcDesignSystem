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
Object.defineProperty(exports, '__esModule', { value: true })
exports.DropdownExample = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var index_1 = require('./index')
exports.default = {
    title: 'Example/Div100vh',
    component: index_1.Div100vh,
    parameters: {
        layout: 'fullscreen',
    },
}
var Template = function (_a) {
    var children = _a.children,
        args = __rest(_a, ['children'])
    return (0, jsx_runtime_1.jsxs)(
        index_1.Div100vh,
        __assign(
            {
                className: 'd-flex justify-content-center align-items-center',
                style: {
                    background: 'var(--primary)',
                    color: 'white',
                    flexDirection: 'column',
                },
            },
            {
                children: [
                    (0, jsx_runtime_1.jsx)('h1', { children: '100 vh' }),
                    (0, jsx_runtime_1.jsxs)(
                        'div',
                        __assign(
                            { className: 'px-5' },
                            {
                                children: [
                                    (0, jsx_runtime_1.jsx)('p', {
                                        children:
                                            'In mobile browsers, the real height of the viewport is dynamic, as browser "chrome" (panels) slide away on scrolling. The browser developers faced two choices: either to reflow the page as the pixel value of a vh changes, or ignore the fact that the browser panel covers part of the screen.',
                                    }),
                                    (0, jsx_runtime_1.jsx)('p', {
                                        children:
                                            'The browser panels are supposed to slide away smoothly, and because the layout reflow during scrolling will not look smooth, the browser developers went for the second option.',
                                    }),
                                    (0, jsx_runtime_1.jsx)('p', {
                                        children:
                                            "It may work for the most of use cases, but if you're looking for an app-like full-screen experience, or want to make sure that the call to action button at the bottom of your splash screen isn't covered, you may need to know the fair value of a vh.",
                                    }),
                                    (0, jsx_runtime_1.jsxs)(
                                        'div',
                                        __assign(
                                            { className: 'row' },
                                            {
                                                children: [
                                                    (0, jsx_runtime_1.jsxs)(
                                                        'div',
                                                        __assign(
                                                            {
                                                                className:
                                                                    'd-flex col-6 align-items-center',
                                                                style: {
                                                                    flexDirection:
                                                                        'column',
                                                                },
                                                            },
                                                            {
                                                                children: [
                                                                    (0,
                                                                    jsx_runtime_1.jsx)(
                                                                        'code',
                                                                        __assign(
                                                                            {
                                                                                style: {
                                                                                    background:
                                                                                        '#dee2e6',
                                                                                    color: 'var(--primary)',
                                                                                    fontSize: 22,
                                                                                    padding: 8,
                                                                                    borderRadius: 6,
                                                                                    marginBottom: 12,
                                                                                },
                                                                            },
                                                                            {
                                                                                children:
                                                                                    "<div style={{height: '100vh'}}/>",
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0,
                                                                    jsx_runtime_1.jsx)(
                                                                        'img',
                                                                        {
                                                                            src: 'https://raw.githubusercontent.com/mvasin/react-div-100vh/master/images/regular-div.png',
                                                                            height: '400',
                                                                            style: {
                                                                                objectFit:
                                                                                    'contain',
                                                                            },
                                                                            alt: '',
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        )
                                                    ),
                                                    (0, jsx_runtime_1.jsxs)(
                                                        'div',
                                                        __assign(
                                                            {
                                                                className:
                                                                    'd-flex col-6 align-items-center',
                                                                style: {
                                                                    flexDirection:
                                                                        'column',
                                                                },
                                                            },
                                                            {
                                                                children: [
                                                                    (0,
                                                                    jsx_runtime_1.jsx)(
                                                                        'code',
                                                                        __assign(
                                                                            {
                                                                                style: {
                                                                                    background:
                                                                                        '#dee2e6',
                                                                                    color: 'var(--primary)',
                                                                                    fontSize: 22,
                                                                                    padding: 8,
                                                                                    borderRadius: 6,
                                                                                    marginBottom: 12,
                                                                                },
                                                                            },
                                                                            {
                                                                                children:
                                                                                    '<Div100vh>',
                                                                            }
                                                                        )
                                                                    ),
                                                                    (0,
                                                                    jsx_runtime_1.jsx)(
                                                                        'img',
                                                                        {
                                                                            src: 'https://raw.githubusercontent.com/mvasin/react-div-100vh/master/images/react-div-100vh.png',
                                                                            height: '400',
                                                                            style: {
                                                                                objectFit:
                                                                                    'contain',
                                                                            },
                                                                            alt: '',
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        )
                                                    ),
                                                ],
                                            }
                                        )
                                    ),
                                ],
                            }
                        )
                    ),
                ],
            }
        )
    )
}
exports.DropdownExample = Template.bind({})
exports.DropdownExample.args = {
    dropdDownMenuAligment: 'normal',
    dropdDownOpen: '',
}
