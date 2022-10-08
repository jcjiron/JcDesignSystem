import React, { ComponentPropsWithoutRef } from 'react'
export declare const MobileMenuButton: ({
    isMenuOpen,
    clickHandler,
    className,
}: {
    clickHandler?: () => void
    isMenuOpen: boolean
} & Pick<
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >,
    'key' | keyof React.HTMLAttributes<HTMLDivElement>
>) => JSX.Element
