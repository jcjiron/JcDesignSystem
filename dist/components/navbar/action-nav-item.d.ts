import { ReactElement, ReactNode } from 'react';
import { DropDownItem, DropDownMenuProps } from '../dropdown';
import { IconProps, IconVariant } from '../icon';
export declare type ActionNavLinkProps = {
    className?: string;
    Icon?: IconVariant | ReactElement<IconProps>;
    itemText?: string;
    children?: ReactElement<DropDownMenuProps<DropDownItem>>;
};
export declare const ActionDropDownNavLink: ({ itemText, Icon: CustomIcon, children, className, }: ActionNavLinkProps) => JSX.Element;
declare type ActionNavItemProps = {
    variant: 'light' | 'dark' | 'transparent';
    children: ReactNode;
};
export declare const ActionNavItem: ({ variant, children, }: ActionNavItemProps) => JSX.Element;
export {};
