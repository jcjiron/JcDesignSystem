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
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Amenity = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var Image_1 = require('../image/Image')
var styled_components_1 = __importDefault(require('styled-components'))
var AmenityContainer = styled_components_1.default.div(
    templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
            [
                '\n  .card {\n    border: none;\n  }\n  .card-body {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n    background: white;\n  }\n  & .amenity-image {\n    max-width: 190px;\n    max-height: 190px;\n    object-fit: cover;\n    display: block;\n    margin: 0 auto 10px auto;\n    border-radius: 8px;\n  }\n  @media (max-width: 576px) {\n    & .amenity-image {\n      margin-right: 0;\n      margin-left: 0;\n    }\n\n    & .image-wrapper {\n      padding-right: 0;\n    }\n  }\n\n  @media (min-width: 768px) and (max-width: 992px) {\n    & .amenity-image {\n      max-width: 150px;\n      max-height: 150px;\n    }\n  }\n\n  @media (min-width: 576px) and (max-width: 767px) {\n    & .amenity-image {\n      max-width: 120px;\n      max-height: 120px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    & .amenity-image {\n      max-width: 120px;\n      max-height: 120px;\n    }\n  }\n',
            ],
            [
                '\n  .card {\n    border: none;\n  }\n  .card-body {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n    background: white;\n  }\n  & .amenity-image {\n    max-width: 190px;\n    max-height: 190px;\n    object-fit: cover;\n    display: block;\n    margin: 0 auto 10px auto;\n    border-radius: 8px;\n  }\n  @media (max-width: 576px) {\n    & .amenity-image {\n      margin-right: 0;\n      margin-left: 0;\n    }\n\n    & .image-wrapper {\n      padding-right: 0;\n    }\n  }\n\n  @media (min-width: 768px) and (max-width: 992px) {\n    & .amenity-image {\n      max-width: 150px;\n      max-height: 150px;\n    }\n  }\n\n  @media (min-width: 576px) and (max-width: 767px) {\n    & .amenity-image {\n      max-width: 120px;\n      max-height: 120px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    & .amenity-image {\n      max-width: 120px;\n      max-height: 120px;\n    }\n  }\n',
            ]
        ))
)
var AmenityTitleContainer = styled_components_1.default.div(
    templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
            [
                '\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 575px) {\n    padding-left: 32px;\n  }\n',
            ],
            [
                '\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 575px) {\n    padding-left: 32px;\n  }\n',
            ]
        ))
)
var AmenityTitle = styled_components_1.default.p(
    templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
            [
                '\n  font-size: 18px;\n  font-weight: 500;\n  margin-left: 10px;\n  text-align: left;\n  color: var(--paragraph-color);\n\n  @media (min-width: 576px) {\n    width: 80%;\n    text-align: center;\n    margin: 0 auto;\n  }\n',
            ],
            [
                '\n  font-size: 18px;\n  font-weight: 500;\n  margin-left: 10px;\n  text-align: left;\n  color: var(--paragraph-color);\n\n  @media (min-width: 576px) {\n    width: 80%;\n    text-align: center;\n    margin: 0 auto;\n  }\n',
            ]
        ))
)
var Amenity = function (_a) {
    var _b = _a.image,
        src = _b.src,
        fallbackSrc = _b.fallbackSrc,
        thumbnail = _b.thumbnail,
        alt = _b.alt,
        amenitieTitle = _b.amenitieTitle
    return (0, jsx_runtime_1.jsx)(
        AmenityContainer,
        __assign(
            { className: 'col-sm-4 col-md-2' },
            {
                children: (0, jsx_runtime_1.jsx)(
                    'div',
                    __assign(
                        { className: 'card' },
                        {
                            children: (0, jsx_runtime_1.jsxs)(
                                'div',
                                __assign(
                                    { className: 'card-body' },
                                    {
                                        children: [
                                            (0, jsx_runtime_1.jsxs)(
                                                'div',
                                                __assign(
                                                    {
                                                        className:
                                                            'd-none d-sm-block d-md-block',
                                                    },
                                                    {
                                                        children: [
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                Image_1.Image,
                                                                {
                                                                    className:
                                                                        'amenity-image',
                                                                    loading:
                                                                        'lazy',
                                                                    alt: alt,
                                                                    src: src,
                                                                    fallbackSrc:
                                                                        fallbackSrc,
                                                                    thumbnail:
                                                                        thumbnail,
                                                                }
                                                            ),
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                AmenityTitleContainer,
                                                                {
                                                                    children:
                                                                        (0,
                                                                        jsx_runtime_1.jsx)(
                                                                            AmenityTitle,
                                                                            {
                                                                                children:
                                                                                    amenitieTitle,
                                                                            }
                                                                        ),
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
                                                            'row d-sm-none',
                                                    },
                                                    {
                                                        children: [
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                'div',
                                                                __assign(
                                                                    {
                                                                        className:
                                                                            'col-3 image-wrapper',
                                                                    },
                                                                    {
                                                                        children:
                                                                            (0,
                                                                            jsx_runtime_1.jsx)(
                                                                                Image_1.Image,
                                                                                {
                                                                                    className:
                                                                                        'amenity-image',
                                                                                    loading:
                                                                                        'lazy',
                                                                                    alt: alt,
                                                                                    src: src,
                                                                                    fallbackSrc:
                                                                                        fallbackSrc,
                                                                                    thumbnail:
                                                                                        thumbnail,
                                                                                }
                                                                            ),
                                                                    }
                                                                )
                                                            ),
                                                            (0,
                                                            jsx_runtime_1.jsx)(
                                                                AmenityTitleContainer,
                                                                __assign(
                                                                    {
                                                                        className:
                                                                            'col-9',
                                                                    },
                                                                    {
                                                                        children:
                                                                            (0,
                                                                            jsx_runtime_1.jsx)(
                                                                                AmenityTitle,
                                                                                {
                                                                                    children:
                                                                                        amenitieTitle,
                                                                                }
                                                                            ),
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
                        }
                    )
                ),
            }
        )
    )
}
exports.Amenity = Amenity
var templateObject_1, templateObject_2, templateObject_3
