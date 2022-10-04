import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import {
  DropDown,
  DropDownItem,
  DropDownMenuProps,
  DropDownToggle,
} from '../dropdown';
import { Icon as IconComponent, IconProps, IconVariant } from '../icon';

const Li = styled.nav`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.8px;
  padding-left: 4px;
  padding-right: 4px;

  .nav-link {
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #adadad;
    border-color: rgba(173, 173, 173, 0.3);
    .nav-link-content {
      padding-left: 6px;
    }
  }  
  .icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  &.light {
    .nav-link {
      &:hover {
        background-color: var(--dark);
        color: var(--white);
      }
    }
  }
  &.dark {
    .nav-link {
      &:hover {
        background-color: var(--white);        
        color: var(--dark);
      }
    }
  }
  &.transparent {
    .nav-link {
      &:hover {
        background-color: var(--white);
        color: var(--dark);
      }
    }
  }
`;

export type ActionNavLinkProps = {
  className?: string;
  Icon?: IconVariant | ReactElement<IconProps>;
  itemText?: string;
  children?: ReactElement<DropDownMenuProps<DropDownItem>>;
};

export const ActionDropDownNavLink = ({
  itemText,
  Icon: CustomIcon = '',
  children,
  className = '',
}: ActionNavLinkProps) => {
  return (
    <DropDown className={`${className} dropdown`}>
      <DropDownToggle className="nav-link" dropDownMenu={children}>
        <>
          {typeof CustomIcon === 'string' ? (
            <IconComponent variant={CustomIcon as IconVariant} />
          ) : (
            CustomIcon
          )}
          <span className={`nav-link-content`}>{itemText}</span>
        </>
      </DropDownToggle>
    </DropDown>
  );
};

type ActionNavItemProps = {
  variant: 'light' | 'dark' | 'transparent';
  children: ReactNode;
};

export const ActionNavItem = ({
  variant = 'dark',
  children,
}: ActionNavItemProps) => {
  return <Li className={`${variant} nav-item`}>{children}</Li>;
};
