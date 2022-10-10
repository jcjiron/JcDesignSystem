import { ReactElement } from 'react';
import { IconProps } from '../icon';
interface FooterCardModel {
    title?: string;
    content?: string | ReactElement;
}
interface FooterLinkModel {
    url?: string;
    text?: string;
}
interface FooterIconLink {
    icon: ReactElement<IconProps>;
    url: string;
    key?: string;
}
export declare type FooterProps = {
    NewsLetterForm?: ReactElement;
    mainText: string | ReactElement;
    cardOne: FooterCardModel;
    cardTwo: FooterCardModel;
    socialIconsOne: FooterIconLink[];
    socialIconsTwo: FooterIconLink[];
    linkOne: FooterLinkModel;
    linkTwo: FooterLinkModel;
    linkThree: FooterLinkModel;
    linkFour: FooterLinkModel;
};
export declare const Footer: ({ NewsLetterForm, cardOne, cardTwo, linkOne, linkThree, linkTwo, linkFour, mainText, socialIconsOne, socialIconsTwo, }: FooterProps) => JSX.Element;
export {};
