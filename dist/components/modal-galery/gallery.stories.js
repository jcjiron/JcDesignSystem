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
exports.Primary = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var modal_gallery_1 = require('./modal-gallery')
exports.default = {
    title: 'Example/Gallery',
    component: modal_gallery_1.ModalGallery,
}
var CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net'
var images = [
    {
        src: ''.concat(CDN_URL, '/img/hero-1.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-1.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-2.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-2.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-2.webp'),
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-3.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-3.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
    },
]
var Template = function (_a) {
    var args = __rest(_a, [])
    var modalButton = (0, react_1.useRef)()
    var openGallery = function () {
        modalButton.current.click()
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(
                'button',
                __assign(
                    { onClick: openGallery },
                    { children: 'External Button' }
                )
            ),
            (0, jsx_runtime_1.jsx)(
                modal_gallery_1.ModalGallery,
                __assign({}, args, { galleryButtonRef: modalButton })
            ),
        ],
    })
}
exports.Primary = Template.bind({})
exports.Primary.args = {
    images: images,
    openButtonLabel: 'click to open',
    countImageOfLabel: ' in ',
}
