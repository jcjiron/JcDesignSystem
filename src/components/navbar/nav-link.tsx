import React from 'react';
import { ReactElement } from 'react';

export type NavLinkProps = {
  children: ReactElement;
};

export const NavLink = ({ children }: NavLinkProps) => {
  return React.cloneElement(children, {
    className: 'nav-link',
  });
};
