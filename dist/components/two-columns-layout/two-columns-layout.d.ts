import React from 'react';
import { ScrollableColumnProps } from './scrollable-column';
import { StaticColumnProps } from './static-column';
export declare type TwoColumnsLayoutProps = React.ComponentPropsWithoutRef<'div'>;
declare type TwoColumnsLayoutComposition = {
    StaticColumn: React.FC<StaticColumnProps>;
    ScrollableColumn: React.FC<ScrollableColumnProps>;
};
export declare const TwoColumnsLayout: React.FC<TwoColumnsLayoutProps> & TwoColumnsLayoutComposition;
export {};
