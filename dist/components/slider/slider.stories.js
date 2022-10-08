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
var _1 = require('./')
var styled_components_1 = __importDefault(require('styled-components'))
exports.default = {
    title: 'Example/Slider',
    component: _1.Slider,
}
var Image = styled_components_1.default.img(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            ['\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n'],
            ['\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n']
        ))
)
var images = [
    'https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg',
    'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg',
    'https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg',
    'https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg',
    // 'https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg',
]
var Container = styled_components_1.default.div(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            [
                '\n  .no-wrap {\n    flex-wrap: nowrap;\n  }\n  .react-horizontal-scrolling-menu--item:first-child {\n    margin-left: 15px;\n  }\n  .react-horizontal-scrolling-menu--item {\n    margin-right: 16px;\n  }\n  .react-horizontal-scrolling-menu--item:last-child {\n    margin-right: 0;\n  }\n',
            ],
            [
                '\n  .no-wrap {\n    flex-wrap: nowrap;\n  }\n  .react-horizontal-scrolling-menu--item:first-child {\n    margin-left: 15px;\n  }\n  .react-horizontal-scrolling-menu--item {\n    margin-right: 16px;\n  }\n  .react-horizontal-scrolling-menu--item:last-child {\n    margin-right: 0;\n  }\n',
            ]
        ))
)
var Template = function (_a) {
    var args = __rest(_a, [])
    return (0, jsx_runtime_1.jsx)(
        Container,
        __assign(
            { className: 'container' },
            {
                children: (0, jsx_runtime_1.jsx)(
                    _1.Slider,
                    __assign(
                        {
                            itemClassName: 'col-10 col-md-4 col-lg-3 p-0',
                            scrollContainerClassName: 'row no-wrap',
                        },
                        {
                            children: images.map(function (image) {
                                return (0,
                                jsx_runtime_1.jsx)(_1.Slider.Item, __assign({ itemId: image }, { children: (0, jsx_runtime_1.jsx)(Image, { src: image, alt: 'Gato 1' }) }), image)
                            }),
                        }
                    )
                ),
            }
        )
    )
}
exports.Primary = Template.bind({})
exports.Primary.args = {}
var templateObject_1, templateObject_2
