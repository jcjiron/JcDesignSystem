import React from 'react';
import { InputProps } from '../input';
declare type GuestsInputProps = {
    onChange: (value: number) => void;
    value: number;
    max?: number;
    min?: number;
    placeholder?: string;
} & InputProps;
declare const GuestsInput: React.FC<GuestsInputProps>;
export { GuestsInput, GuestsInputProps };
