import React from 'react';
import { ModalWithNavigationProps } from '../modal-with-navigation';
export declare type TwoColumnsModalProps = {
    staticColumn: React.ReactNode;
    scrollableColumn: React.ReactNode;
} & ModalWithNavigationProps;
export declare function TwoColumnsModal({ staticColumn, scrollableColumn, variant, ...modalProps }: TwoColumnsModalProps): JSX.Element;
export default TwoColumnsModal;
