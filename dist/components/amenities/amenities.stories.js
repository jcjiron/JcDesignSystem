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
var home_amenities_1 = require('./home-amenities')
exports.default = {
    title: 'Example/HomeAmenitites',
    component: home_amenities_1.HomeAmenitites,
}
var CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net'
var data = [
    {
        src: ''.concat(CDN_URL, '/img/hero-1.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-1.jpg'),
        amenitieTitle: 'High Speed WiFi',
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
        alt: 'Watch your favorite series & make important work calls at ease.',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-2.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-2.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-2.webp'),
        amenitieTitle: 'Beautiful Workspaces',
        alt: 'Thrive remotely, turn your casai in the perfect home-office',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-3.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-3.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
        amenitieTitle: 'Keyless access',
        alt: 'Never worry about losing your keys with our keycodes access.',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-1.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-1.jpg'),
        amenitieTitle: 'Equipped kitchens',
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
        alt: 'Have some guests over & cook delicious meals at home.',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-2.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-2.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-2.webp'),
        amenitieTitle: 'Professional cleaning',
        alt: 'Enjoy the highest security & cleaning standards in town.',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-3.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-3.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
        amenitieTitle: 'Spa-grade towels',
        alt: 'Our towels were carefully selected with your comfort in mind.',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-2.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-2.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-2.webp'),
        amenitieTitle: 'Fresh linens',
        alt: 'Enjoy a great night of sleep with our egyptian cotton liens.',
    },
    {
        src: ''.concat(CDN_URL, '/img/hero-3.webp'),
        fallbackSrc: ''.concat(CDN_URL, '/img/hero-3.jpg'),
        thumbnail: ''.concat(CDN_URL, '/img/thumbnail/hero-1.webp'),
        amenitieTitle: 'Sanitary kit',
        alt: 'Enjoy a great night of sleep with our egyptian cotton linens',
    },
]
var Template = function (_a) {
    var props = __rest(_a, [])
    return (0, jsx_runtime_1.jsx)(
        home_amenities_1.HomeAmenitites,
        __assign({}, props)
    )
}
exports.Primary = Template.bind({})
exports.Primary.args = {}
