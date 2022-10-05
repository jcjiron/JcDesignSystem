/// <reference types="react" />
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavBarProps } from './';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Primary: Story<NavBarProps>;
export declare const Transparent: Story<NavBarProps>;
export declare const WithChild: Story<NavBarProps>;
export declare const WithContent: {
    ({ ...args }: NavBarProps): JSX.Element;
    args: NavBarProps;
};
