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
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              var desc = Object.getOwnPropertyDescriptor(m, k)
              if (
                  !desc ||
                  ('get' in desc
                      ? !m.__esModule
                      : desc.writable || desc.configurable)
              ) {
                  desc = {
                      enumerable: true,
                      get: function () {
                          return m[k]
                      },
                  }
              }
              Object.defineProperty(o, k2, desc)
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
          })
var __setModuleDefault =
    (this && this.__setModuleDefault) ||
    (Object.create
        ? function (o, v) {
              Object.defineProperty(o, 'default', {
                  enumerable: true,
                  value: v,
              })
          }
        : function (o, v) {
              o['default'] = v
          })
var __importStar =
    (this && this.__importStar) ||
    function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
            for (var k in mod)
                if (
                    k !== 'default' &&
                    Object.prototype.hasOwnProperty.call(mod, k)
                )
                    __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.SlideCarousel = void 0
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = __importStar(require('react'))
var Carousel_1 = require('./Carousel')
var carousel_image_component_1 = require('./carousel-image-component')
function promiseDelay(ms) {
    return function (value) {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                return resolve(value)
            }, ms)
        })
    }
}
var SlideCarousel = function (_a) {
    var images = _a.images,
        activeIndex = _a.activeIndex
    var _b = react_1.default.useState(false),
        isFirstImageLoaded = _b[0],
        setIsFirstImageLoaded = _b[1]
    var _c = (0, react_1.useState)({}),
        clasesState = _c[0],
        setClassesState = _c[1]
    var _d = (0, react_1.useState)([]),
        imagesList = _d[0],
        setImagesList = _d[1]
    var _e = (0, react_1.useState)({
            prevIndex: -1,
            currIndex: activeIndex,
        }),
        indexes = _e[0],
        setIndexes = _e[1]
    ;(0, react_1.useEffect)(
        function () {
            if (indexes.currIndex !== activeIndex) {
                setIndexes(function () {
                    return {
                        prevIndex: indexes.currIndex,
                        currIndex: activeIndex,
                    }
                })
            }
        },
        [activeIndex]
    )
    ;(0, react_1.useEffect)(
        function () {
            var isRunning = true
            var updateClasses = new Promise(function (resolve) {
                var carouselDirection =
                    indexes.prevIndex === -1
                        ? true
                        : indexes.prevIndex === 0 &&
                          activeIndex === images.length - 1
                        ? false
                        : indexes.prevIndex === images.length - 1 &&
                          activeIndex === 0
                        ? true
                        : activeIndex > indexes.prevIndex
                        ? true
                        : false
                resolve(carouselDirection)
            })
                .then(function (carouselDirection) {
                    return isRunning
                        ? {
                              direction: carouselDirection,
                              indexCalculation: carouselDirection ? -1 : +1,
                          }
                        : {}
                })
                .then(function (_a) {
                    var calc = _a.indexCalculation,
                        direction = _a.direction
                    if (isRunning) {
                        var classes_1 = {}
                        setImagesList(
                            images.map(function (image, index, array) {
                                var isActive = activeIndex === index
                                var isNextImage =
                                    activeIndex + calc > array.length - 1
                                        ? index === 0
                                        : activeIndex + calc < 0
                                        ? index === array.length - 1
                                        : activeIndex + calc === index
                                var shouldLoad =
                                    isActive ||
                                    (isNextImage && isFirstImageLoaded)
                                var activeClass = isActive
                                    ? direction
                                        ? 'carousel-item-next'
                                        : 'carousel-item-prev'
                                    : ''
                                var nextImageClass = isNextImage ? 'active' : ''
                                classes_1['idx-'.concat(index)] = {
                                    activeClass: activeClass,
                                    nextImageClass: nextImageClass,
                                }
                                return {
                                    isActive: isActive,
                                    isNextImage: isNextImage,
                                    shouldLoad: shouldLoad,
                                    image: image,
                                }
                            })
                        )
                        setClassesState(classes_1)
                        return { classes: classes_1, direction: direction }
                    }
                    return {}
                })
                .then(promiseDelay(10))
                .then(function (_a) {
                    var classes = _a.classes,
                        direction = _a.direction
                    if (isRunning) {
                        setClassesState(
                            Object.keys(classes)
                                .map(function (key) {
                                    return { key: key, obj: classes[key] }
                                })
                                .reduce(function (acc, el) {
                                    acc[el.key] = {
                                        activeClass:
                                            el.obj.activeClass ===
                                            'carousel-item-next'
                                                ? 'carousel-item-next carousel-item-left'
                                                : el.obj.activeClass ===
                                                  'carousel-item-prev'
                                                ? 'carousel-item-prev carousel-item-right'
                                                : '',
                                        nextImageClass:
                                            el.obj.nextImageClass === 'active'
                                                ? direction
                                                    ? 'active carousel-item-left'
                                                    : 'active carousel-item-right'
                                                : el.obj.nextImageClass,
                                    }
                                    return acc
                                }, {})
                        )
                        return classes
                    }
                    return {}
                })
                .then(promiseDelay(590))
                .then(function (classes) {
                    if (isRunning) {
                        setClassesState(
                            Object.keys(classes)
                                .map(function (key) {
                                    return { key: key, obj: classes[key] }
                                })
                                .reduce(function (acc, el) {
                                    acc[el.key] = {
                                        activeClass:
                                            el.obj.activeClass ===
                                                'carousel-item-next' ||
                                            el.obj.activeClass ===
                                                'carousel-item-prev'
                                                ? 'active'
                                                : '',
                                        nextImageClass: '',
                                    }
                                    return acc
                                }, {})
                        )
                    }
                })
            void updateClasses
            return function () {
                isRunning = false
            }
        },
        [indexes]
    )
    return (0, jsx_runtime_1.jsx)(
        Carousel_1.Container,
        __assign(
            { className: 'carousel slide h-100', 'data-ride': 'carousel' },
            {
                children: (0, jsx_runtime_1.jsx)(
                    'div',
                    __assign(
                        { className: 'carousel-inner h-100' },
                        {
                            children:
                                Object.keys(clasesState).length > 0 &&
                                imagesList.map(function (_a, index) {
                                    var image = _a.image
                                    return (0, jsx_runtime_1.jsx)(
                                        carousel_image_component_1.CarouselImageComponent,
                                        {
                                            image: image,
                                            activeClass:
                                                clasesState[
                                                    'idx-'.concat(index)
                                                ].activeClass,
                                            nextImageClass:
                                                clasesState[
                                                    'idx-'.concat(index)
                                                ].nextImageClass,
                                            onLoad: function () {
                                                var isFirstImage = index === 0
                                                if (
                                                    isFirstImage &&
                                                    !isFirstImageLoaded
                                                ) {
                                                    setIsFirstImageLoaded(true)
                                                }
                                            },
                                        },
                                        image.src
                                    )
                                }),
                        }
                    )
                ),
            }
        )
    )
}
exports.SlideCarousel = SlideCarousel
