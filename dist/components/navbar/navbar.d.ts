import React from 'react';
import '../../../assets/styles/bootstrap/navbar.scss';
export declare type MobileMenuProps = {
    closeMenu?: () => void;
    isMenuOpen?: boolean;
};
export declare type NavBarProps = {
    className?: string;
    variant?: 'dark' | 'light' | 'transparent';
    brand?: React.ReactNode;
    children?: React.ReactNode;
    navigationItems?: React.ReactNode;
    actionItems?: React.ReactNode;
    MobileMenu?: React.ReactElement<MobileMenuProps>;
    leftContent?: React.ReactNode;
};
export declare const Navbar: ({ className, variant, actionItems, navigationItems, MobileMenu, brand, children, leftContent, }: NavBarProps) => JSX.Element;
