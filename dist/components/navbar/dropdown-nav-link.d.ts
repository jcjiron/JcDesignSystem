import { DropDownItem, DropDownMenuProps } from '../dropdown'
import { ReactElement } from 'react'
export declare type DropDownNavLinkProps = {
    label: string
    children: ReactElement<DropDownMenuProps<DropDownItem>>
}
export declare const DropDownNavLink: ({
    children,
    label,
}: DropDownNavLinkProps) => JSX.Element
