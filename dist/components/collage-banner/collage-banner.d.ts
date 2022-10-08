import { ReactElement, ReactNode } from 'react'
import { ImageProps } from './../image/Image'
export declare const BannerButtonStyles: {
    backgroundColor: string
    boxShadow: string
    borderRadius: string
    color: string
    fontSize: string
    padding: string
}
export declare type CollageBannerProps = {
    images: [
        ReactElement<ImageProps>,
        ReactElement<ImageProps>,
        ReactElement<ImageProps>,
        ReactElement<ImageProps>,
        ReactElement<ImageProps>
    ]
    children?: ReactNode
}
export declare const CollageBanner: ({
    images: [img1, img2, img3, img4, img5],
    children,
}: CollageBannerProps) => JSX.Element
