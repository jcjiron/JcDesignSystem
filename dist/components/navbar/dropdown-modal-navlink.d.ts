import { ReactElement } from 'react';
import { DropDownItemProps, DropDownMenuProps } from '../dropdown';
export declare type NavlinkMobileDropdownModalProps = {
    className?: string;
    itemText?: string;
    children?: ReactElement<DropDownMenuProps<DropDownItemProps>>;
    closeMobileMenu: () => void;
};
export declare const NavlinkMobileDropdownModal: ({ itemText, children, className, closeMobileMenu, }: NavlinkMobileDropdownModalProps) => JSX.Element;
