import {
  DropDown,
  DropDownItem,
  DropDownMenuProps,
  DropDownToggle,
} from '../dropdown';
import React, { ReactElement } from 'react';

export type DropDownNavLinkProps = {
  label: string;
  children: ReactElement<DropDownMenuProps<DropDownItem>>;
};
export const DropDownNavLink = ({ children, label }: DropDownNavLinkProps) => {
  return (
    <DropDown>
      <DropDownToggle className="nav-link" dropDownMenu={children}>
        {label}
      </DropDownToggle>
    </DropDown>
  );
};
