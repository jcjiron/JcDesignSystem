import React, { useState, useEffect } from 'react'
import { FadeCarouselProps, Container } from './Carousel'
import { CarouselImageComponent } from './carousel-image-component'

function promiseDelay<T>(ms: number) {
    return function (value: T): Promise<T> {
        return new Promise((resolve) => setTimeout(() => resolve(value), ms))
    }
}

export const SlideCarousel = ({ images, activeIndex }: FadeCarouselProps) => {
    const [isFirstImageLoaded, setIsFirstImageLoaded] = React.useState(false)
    const [clasesState, setClassesState] = useState({})
    const [imagesList, setImagesList] = useState([])
    const [indexes, setIndexes] = useState<{
        prevIndex: number
        currIndex: number
    }>({
        prevIndex: -1,
        currIndex: activeIndex,
    })

    useEffect(() => {
        if (indexes.currIndex !== activeIndex) {
            setIndexes(() => ({
                prevIndex: indexes.currIndex,
                currIndex: activeIndex,
            }))
        }
    }, [activeIndex])

    useEffect(() => {
        let isRunning = true
        const updateClasses = new Promise((resolve) => {
            const carouselDirection =
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
            .then((carouselDirection) => {
                return isRunning
                    ? {
                          direction: carouselDirection,
                          indexCalculation: carouselDirection ? -1 : +1,
                      }
                    : {}
            })
            .then(({ indexCalculation: calc, direction }) => {
                if (isRunning) {
                    const classes = {}
                    setImagesList(
                        images.map((image, index, array) => {
                            const isActive = activeIndex === index

                            const isNextImage =
                                activeIndex + calc > array.length - 1
                                    ? index === 0
                                    : activeIndex + calc < 0
                                    ? index === array.length - 1
                                    : activeIndex + calc === index
                            const shouldLoad =
                                isActive || (isNextImage && isFirstImageLoaded)

                            const activeClass = isActive
                                ? direction
                                    ? 'carousel-item-next'
                                    : 'carousel-item-prev'
                                : ''

                            const nextImageClass = isNextImage ? 'active' : ''

                            classes[`idx-${index}`] = {
                                activeClass,
                                nextImageClass,
                            }

                            return {
                                isActive,
                                isNextImage,
                                shouldLoad,
                                image,
                            }
                        })
                    )
                    setClassesState(classes)
                    return { classes, direction }
                }
                return {}
            })
            .then(promiseDelay(10))
            .then(({ classes, direction }) => {
                if (isRunning) {
                    setClassesState(
                        Object.keys(classes)
                            .map((key) => ({ key, obj: classes[key] }))
                            .reduce((acc, el) => {
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
            .then((classes) => {
                if (isRunning) {
                    setClassesState(
                        Object.keys(classes)
                            .map((key) => ({ key, obj: classes[key] }))
                            .reduce((acc, el) => {
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

        return () => {
            isRunning = false
        }
    }, [indexes])

    return (
        <Container className="carousel slide h-100" data-ride="carousel">
            <div className="carousel-inner h-100">
                {Object.keys(clasesState).length > 0 &&
                    imagesList.map(({ image }, index) => (
                        <CarouselImageComponent
                            key={image.src}
                            image={image}
                            activeClass={
                                clasesState[`idx-${index}`].activeClass
                            }
                            nextImageClass={
                                clasesState[`idx-${index}`].nextImageClass
                            }
                            onLoad={() => {
                                const isFirstImage = index === 0
                                if (isFirstImage && !isFirstImageLoaded) {
                                    setIsFirstImageLoaded(true)
                                }
                            }}
                        />
                    ))}
            </div>
        </Container>
    )
}
