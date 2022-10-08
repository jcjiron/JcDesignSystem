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
exports.Primary = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var collage_banner_1 = require('./collage-banner')
var Image_1 = require('./../image/Image')
var button_1 = __importDefault(require('../button'))
exports.default = {
    title: 'Example/Collage Banner',
    component: collage_banner_1.CollageBanner,
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
    var images = _a.images
    return (0, jsx_runtime_1.jsxs)(
        collage_banner_1.CollageBanner,
        __assign(
            { images: images },
            {
                children: [
                    (0, jsx_runtime_1.jsx)(button_1.default, {
                        children: ' button 1 ',
                    }),
                    (0, jsx_runtime_1.jsx)(button_1.default, {
                        children: ' button 2 ',
                    }),
                ],
            }
        )
    )
}
exports.Primary = Template.bind({})
exports.Primary.args = {
    images: [
        (0, jsx_runtime_1.jsx)(Image_1.Image, {
            src: images[0].src,
            fallbackSrc: images[0].fallbackSrc,
            thumbnail: images[0].thumbnail,
        }),
        (0, jsx_runtime_1.jsx)(Image_1.Image, {
            src: images[1].src,
            fallbackSrc: images[1].fallbackSrc,
            thumbnail: images[1].thumbnail,
        }),
        (0, jsx_runtime_1.jsx)(Image_1.Image, {
            src: images[2].src,
            fallbackSrc: images[2].fallbackSrc,
            thumbnail: images[2].thumbnail,
        }),
        (0, jsx_runtime_1.jsx)(Image_1.Image, {
            src: images[3].src,
            fallbackSrc: images[3].fallbackSrc,
            thumbnail: images[3].thumbnail,
        }),
        (0, jsx_runtime_1.jsx)(Image_1.Image, {
            src: images[4].src,
            fallbackSrc: images[4].fallbackSrc,
            thumbnail: images[4].thumbnail,
        }),
    ],
}
