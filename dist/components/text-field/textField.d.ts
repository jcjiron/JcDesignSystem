import React from 'react';
declare type MessageType = 'success' | 'error' | 'default' | 'defaultWithIcon';
declare type TextFieldProps = {
    className?: string;
    placeholder?: string;
    isLoading?: boolean;
    loader?: React.ReactNode;
    value?: string;
    isDisabled?: boolean;
    prefixElement?: React.ReactNode;
    sufixElement?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    messageType?: MessageType;
    messageContent?: React.ReactElement;
    showMessage?: boolean;
} & React.HTMLProps<HTMLInputElement>;
declare const TextField: React.FC<TextFieldProps>;
export { TextField, TextFieldProps, MessageType };
