/// <reference types="react" />
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalPopupProps } from './modal-popup';
declare const _default: Meta<import("@storybook/react/types-6-0").Args>;
export default _default;
export declare const Primary: Story<ModalPopupProps>;
export declare const WithLargeContent: {
    ({ children, ...args }: ModalPopupProps): JSX.Element;
    args: ModalPopupProps;
};
