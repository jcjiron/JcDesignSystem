import React from 'react'
export declare type TruncatedTextProps = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType
    numberOfLines: number
    wordBreak?: 'break-all' | 'normal'
} & React.HTMLAttributes<HTMLOrSVGElement>
export declare const TruncatedText: React.FC<TruncatedTextProps>
