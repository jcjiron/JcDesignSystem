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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Light = exports.Dark = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var card_1 = __importDefault(require('./card'))
exports.default = {
    title: 'Example/Card',
    component: card_1.default,
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
var copy = [
    'Boutique travel apartments in Latin America.',
    'Book a Casai before february 1st and get 15% Off.',
    'Boutique travel apartments in Latin America.',
]
var Template = function (_a) {
    var args = __rest(_a, [])
    var _b = (0, react_1.useState)(),
        title = _b[0],
        setTitle = _b[1]
    var onChangeSlide = function (index) {
        setTitle(copy[index])
    }
    return (0, jsx_runtime_1.jsx)(
        card_1.default,
        __assign({ images: images, onChangeSlide: onChangeSlide }, args)
    )
}
exports.Dark = Template.bind({})
exports.Light = Template.bind({})
exports.Dark.args = {
    withControls: true,
    interval: 3500,
    variant: 'dark',
    moreOptions: '+ days',
    texts: {
        // label: 'Label',
        //dates: 'May 07 - May 17',
        //moreOptions: '+ days',
        price: '$80.00 USD',
        capacity: '4 People  |  2 Bedroom  |  2 Bath',
        title: 'Serpiente Sunny Hideaway',
        location: 'Polanco, Mexico City',
        night: '/night',
    },
}
exports.Light.args = {
    withControls: true,
    interval: 3500,
    variant: 'light',
    texts: {
        // label: 'Label',
        dates: 'May 07 - May 17',
        price: '$80.00 USD',
        capacity: '4 People  |  2 Bedroom  |  2 Bath',
        title: 'Serpiente Sunny Hideaway',
        location: 'Polanco, Mexico City',
        night: '/night',
    },
}
