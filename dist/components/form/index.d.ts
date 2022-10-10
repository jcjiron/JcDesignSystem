import { ComponentPropsWithoutRef } from 'react';
import '../../../assets/styles/bootstrap/forms.scss';
declare type RadioProps = {
    label: string;
} & ComponentPropsWithoutRef<'input'>;
export declare const Radio: ({ label, ...props }: RadioProps) => JSX.Element;
export {};
