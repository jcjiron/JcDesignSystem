import { ComponentPropsWithoutRef, ReactNode } from 'react';
import '../../../assets/styles/bootstrap/modal.scss';
export declare function preventScrollOnBody({ show, pageBody, modalContainer, }: {
    show: boolean;
    pageBody: HTMLBodyElement;
    modalContainer: HTMLDivElement;
}): void;
export declare type ModalProps = {
    show: boolean;
    animate?: boolean;
    children?: ReactNode;
} & ComponentPropsWithoutRef<'div'>;
export declare const Modal: ({ children, show, animate, className, ...props }: ModalProps) => JSX.Element;
