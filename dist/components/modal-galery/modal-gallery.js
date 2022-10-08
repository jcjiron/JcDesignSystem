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
exports.ModalGallery = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('react')
var index_1 = __importDefault(require('../button/index'))
var collage_banner_1 = require('../collage-banner/collage-banner')
var modal_carousel_1 = require('./modal-carousel')
var ModalGallery = function (_a) {
    var images = _a.images,
        openButtonLabel = _a.openButtonLabel,
        countImageOfLabel = _a.countImageOfLabel,
        galleryButtonRef = _a.galleryButtonRef
    var _b = (0, react_1.useState)(false),
        IsGalleryOpen = _b[0],
        setIsGalleryOpen = _b[1]
    var closeGallery = function () {
        return setIsGalleryOpen(false)
    }
    var openGallery = function () {
        return setIsGalleryOpen(true)
    }
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
        children: [
            (0, jsx_runtime_1.jsx)(
                index_1.default,
                __assign(
                    {
                        onClick: openGallery,
                        variant: 'light',
                        style: collage_banner_1.BannerButtonStyles,
                        refer: galleryButtonRef,
                    },
                    { children: openButtonLabel }
                )
            ),
            (0, jsx_runtime_1.jsx)(modal_carousel_1.ModalCarousel, {
                images: images,
                show: IsGalleryOpen,
                closeModal: closeGallery,
                countImageOfLabel: countImageOfLabel,
            }),
        ],
    })
}
exports.ModalGallery = ModalGallery
