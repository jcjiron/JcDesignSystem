import { ReactNode } from 'react';
export declare type CardPriceProps = {
    variant?: 'dark' | 'light';
    children: ReactNode;
};
export declare const CardPrice: ({ variant, children }: CardPriceProps) => JSX.Element;
export default CardPrice;
