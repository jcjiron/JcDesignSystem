import React from 'react'
import { ReactNode } from 'react'
export { TypographyStyles } from './text-styles'
export interface HeadingProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    children: ReactNode
    className?: string
}
export declare const Heading: (args: HeadingProps) => JSX.Element
export interface TextProps {
    variant?: 'paragraph' | 'span'
    size?: 'normal' | 'small'
    children: ReactNode
    className?: string
    style?: React.CSSProperties
}
export declare const Text: (args: TextProps) => JSX.Element
export declare type TypographyContainerProps = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType
} & React.HTMLAttributes<HTMLOrSVGElement>
export declare const TypographyContainer: React.FC<TypographyContainerProps>
