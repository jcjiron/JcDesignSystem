/// <reference types="react" />
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonProps } from './';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Primary: Story<ButtonProps>;
export declare const Transparent: Story<ButtonProps>;
export declare const Square: Story<ButtonProps>;
export declare const IconButton: Story<ButtonProps>;
export declare const IconButtonWithText: Story<ButtonProps>;
export declare const LinkButton: {
    ({ children, ...args }: ButtonProps): JSX.Element;
    args: ButtonProps;
};
