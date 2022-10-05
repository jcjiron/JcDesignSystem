import { ReactNode } from 'react';
export declare type StickyNotificationProps = {
    children: ReactNode;
    storageProvider: () => Storage;
    variant?: "primary" | "custom";
    backgroundColor?: string;
    isMaximized?: boolean;
};
export declare const StickyNotification: ({ children, storageProvider, variant, backgroundColor, isMaximized }: StickyNotificationProps) => JSX.Element;
