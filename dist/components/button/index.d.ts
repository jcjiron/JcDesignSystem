import React from 'react';
import '../../../assets/styles/bootstrap/button.scss';
import { IconProps } from '../icon';
export declare type ButtonProps = {
    className?: string;
    variant?: 'primary' | 'secondary' | 'light' | 'link' | 'inline-link' | 'warning' | 'neutral' | 'danger' | 'transparent';
    size?: 'lg' | 'sm' | undefined;
    children?: React.ReactNode;
    outline?: boolean;
    readonly?: boolean;
    shape?: 'circle' | 'round' | 'square';
    icon?: React.ReactElement<IconProps>;
    refer?: React.Ref<HTMLButtonElement>;
    disabled?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;
export declare const Button: ({ className, variant, size, children, outline, readonly, shape, icon, refer: ref, ...props }: ButtonProps) => JSX.Element;
export default Button;
