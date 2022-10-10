import React from 'react';
export { TextColorStyles, BackgroundColorStyles } from './colors';
export declare type ColorsContainerProps = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType;
} & React.HTMLAttributes<HTMLOrSVGElement>;
export declare const ColorsContainer: React.FC<ColorsContainerProps>;
