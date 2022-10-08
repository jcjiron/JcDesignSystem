import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

export type ImageProps = {
    fallbackSrc?: string
    thumbnail?: string
} & React.ComponentPropsWithoutRef<'img'>

const StyledImage = styled.img<ImageProps>`
    display: block;
    height: 100%; // the parent of this component should define the required height
    width: 100%;
    object-fit: cover;
    &.loading {
        ${(props) =>
            !props.thumbnail
                ? ''
                : `background: url('${props.thumbnail}')
      no-repeat left center;
    background-size: cover;`}
        image-rendering: -moz-crisp-edges;
        image-rendering: optimizeQuality;
        filter: blur(1.5);
    }
    @keyframes loaded {
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }
    &.loaded:not(.has-error) {
        animation: loaded 300ms ease-in-out;
    }
`

export const Image = ({
    src,
    fallbackSrc,
    alt,
    className,
    loading,
    thumbnail,
    ...props
}: ImageProps): React.ReactElement => {
    const imageRef = useRef<HTMLImageElement>()
    const sourceRef = useRef<HTMLSourceElement>()
    const [loaded, setLoaded] = useState(false)

    const onLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setLoaded(true)
    }

    const onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setLoaded(true)
    }

    useEffect(() => {
        const image = imageRef.current
        const source = sourceRef.current
        const images = [imageRef.current, sourceRef.current]

        const observerConfig = {
            threshold: 0.01,
            rootMargin: '75%',
        }

        const intersectionCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0 || entry.isIntersecting) {
                    imageRef.current.src = fallbackSrc
                    sourceRef.current.srcset = src
                    observer.unobserve(entry.target)
                }
            })
        }
        const observer: IntersectionObserver = new IntersectionObserver(
            intersectionCallback,
            observerConfig
        )
        images.forEach((image) => {
            observer.observe(image)
        })
        return () => {
            if (observer && observer.unobserve) {
                observer.unobserve(image)
                observer.unobserve(source)
            }
        }
    }, [src, fallbackSrc])

    return (
        <picture>
            <source type="image/webp" ref={sourceRef} />
            <StyledImage
                {...props}
                ref={imageRef}
                alt={alt}
                loading={loading}
                decoding="async" // gives the browser permission to decode the image off the main thread avoiding user impact of the CPU-time used to decode the image.
                className={`${className} ${!loaded ? 'loading' : ''}`}
                onLoad={(event) => {
                    onLoad(event)
                    if (props.onLoad) {
                        props.onLoad(event)
                    }
                }}
                onError={onError}
                thumbnail={thumbnail}
            />
        </picture>
    )
}
