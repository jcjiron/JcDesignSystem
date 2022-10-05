import React, { HTMLProps, ReactElement, ReactNode } from 'react';
import '../../../assets/styles/bootstrap/dropdown.scss';
declare type DropDownHeaderProps = {
    children?: ReactElement | string;
} & DropDownItem;
export declare const DropDownHeader: ({ children }: DropDownHeaderProps) => JSX.Element;
export declare const DropDownDivider: () => JSX.Element;
export declare type DropDownItem = HTMLProps<HTMLElement>;
export declare type DropDownItemProps = {
    children: ReactElement;
    closeDropDown?: () => void;
} & DropDownItem;
export declare const DropDownItem: ({ children, closeDropDown, ...props }: DropDownItemProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare type DropDownMenuProps<T extends DropDownItem> = {
    className?: string;
    children: ReactElement<T> | ReactElement<T>[];
    alignment?: 'normal' | 'right';
    open?: 'show' | '';
    closeDropDown?: () => void;
};
export declare const DropDownMenu: ({ className, children, alignment, open, closeDropDown, }: DropDownMenuProps<DropDownItemProps>) => JSX.Element;
export declare type DropDownToggleProps = {
    isOpen?: boolean;
    closeDropDown?: () => void;
    dropDownMenu: ReactElement<DropDownMenuProps<HTMLProps<HTMLElement>>>;
    children?: ReactNode;
} & React.HTMLProps<HTMLDivElement>;
export declare const DropDownToggle: ({ children, dropDownMenu, className, closeDropDown, isOpen, ...props }: DropDownToggleProps) => JSX.Element;
export declare const StyledDropDown: import("styled-components").StyledComponent<"div", any, {
    isOpen: boolean;
}, never>;
export declare type DropDownProps = {
    children: ReactElement<DropDownToggleProps>;
    dropDownOpen?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;
export declare const DropDown: ({ children, className, onClick, dropDownOpen, ...props }: DropDownProps) => JSX.Element;
export {};
