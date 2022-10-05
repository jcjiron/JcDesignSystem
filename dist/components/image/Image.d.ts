import React from 'react';
export declare type ImageProps = {
    fallbackSrc?: string;
    thumbnail?: string;
} & React.ComponentPropsWithoutRef<'img'>;
export declare const Image: ({ src, fallbackSrc, alt, className, loading, thumbnail, ...props }: ImageProps) => React.ReactElement;
