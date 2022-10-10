import React from 'react';
import '../../../assets/styles/bootstrap/carousel.scss';
import { CardImage } from '.';
export declare type CardProps = {
    interval?: number;
    images: CardImage[];
    texts?: CardTextsModel;
    children?: React.ReactNode;
    withControls?: boolean;
    variant?: 'dark' | 'light';
    onChangeSlide?: (index: number) => void;
} & React.ComponentPropsWithoutRef<'div'>;
interface CardTextsModel {
    label?: string;
    dates?: string;
    capacity: string;
    notes?: string;
    price: string;
    title: string;
    location: string;
    night: string;
    moreOptions?: string;
}
declare const Card: ({ interval, images, texts, children, withControls, className, variant, onChangeSlide, ...props }: CardProps) => JSX.Element;
export default Card;
