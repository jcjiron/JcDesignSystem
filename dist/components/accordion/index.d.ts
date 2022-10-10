import React from 'react';
export declare type AccordionProps = {
    children?: React.ReactNode;
    title?: string;
    variant?: 'dark' | 'light';
    id?: string;
    content?: string;
};
export declare const Accordion: ({ children, title, variant, content, id, }: AccordionProps) => JSX.Element;
export default Accordion;
