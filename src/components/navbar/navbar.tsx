import React, { useState } from 'react';
import styled from 'styled-components';
import '../../../assets/styles/bootstrap/navbar.scss';
import { MobileMenuButton } from './close-mobile-menu';

const StyledNavbar = styled.nav`
  flex-wrap: nowrap;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 66px;
  top: 0;
  position: sticky;
  z-index: 20;
  &.bg-light {
    box-shadow: 0px 3px 3px 0px rgba(173, 173, 173, 0.3);
    background-color: var(--truewhite) !important;
    .bar-menu {
      background: var(--black);
    }
    .nav-link {
      color: var(--black);
      background-color: transparent;
    }
  }

  &.bg-transparent {
    .navbar-brand {
      color: whitesmoke;
    }
    .nav-link {
      color: var(--truewhite);
      background-color: transparent;
    }
    .bar-menu {
      background: var(--truewhite);
    }
  }

  .navbar-brand {
    font-size: 26px;
  }

  .dropdown-toggle {
    .dropdown {
      .dropdown-menu {
        margin-top: 8px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    padding-right: 16px;
    padding-left: 16px;
    &.navbar-dark {
      .nav-link {
        color: var(--black);
      }
    }
    .collapse {
      &:not(.show) {
        left: 100%;
        overflow: hidden;
        text-align: right;
        width: calc(100% - 32px);
      }
      &.navbar-collapse {
        &.show {
          color: var(--black);
          right: 0px;
          background: var(--truewhite);
          overflow-y: scroll;
          text-align: left;
          position: fixed;
          top: 0px;
          height: calc(100vh);
        }
      }
    }

    .mobile-menu {
      .nav-link {
        color: var(--dark);
      }
      & > .dropdown-menu {
        border: 0px solid transparent;
        width: calc(100vw);
        max-width: 576px;
      }
      .dropdown-item {
        min-height: 38px;
      }
      .dropdown-item.dropdown {
        .nav-link:hover {
          color: var(--dark);
        }
      }
    }
    .modal-background {
      height: 100vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  @media (min-width: 993px) {
    &.bg-transparent {
      .collapse {
        &.navbar-collapse {
          background: transparent;
        }
      }
    }
  }
`;

export type MobileMenuProps = {
  closeMenu?: () => void;
  isMenuOpen?: boolean;
};

export type NavBarProps = {
  className?: string;
  variant?: 'dark' | 'light' | 'transparent';
  brand?: React.ReactNode;
  children?: React.ReactNode;
  navigationItems?: React.ReactNode;
  actionItems?: React.ReactNode;
  MobileMenu?: React.ReactElement<MobileMenuProps>;
  leftContent?: React.ReactNode;
};

export const Navbar = ({
  className = '',
  variant = 'dark',
  actionItems,
  navigationItems,
  MobileMenu,
  brand,
  children,
  leftContent,
}: NavBarProps) => {
  className = `navbar navbar-expand-lg navbar-${variant} bg-${variant} ${className}`;
  const [showMenu, setShowMenu] = useState(false);
  const setMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const closeMenu = () => setShowMenu(false);
  return (
    <StyledNavbar className={className}>
      {brand}
      {leftContent ? (
        <>
          {leftContent}
          <div style={{ flex: 1 }}></div>
        </>
      ) : null}
      {children ? (
        children
      ) : (
        <>
          <MobileMenuButton clickHandler={setMenu} isMenuOpen={showMenu} />
          <div
            className={`modal-background ${
              showMenu ? 'd-block' : 'd-none'
            } position-absolute`}
          ></div>
          <div
            className={
              showMenu
                ? `collapse navbar-collapse show `
                : `collapse navbar-collapse `
            }
            id="navbarMenu"
          >
            {navigationItems && (
              <ul className="navbar-nav navigation-section ml-auto mt-2 mt-lg-0 d-none d-lg-flex">
                {navigationItems}
              </ul>
            )}
            {actionItems && (
              <ul className="navbar-nav action-section ml-4 d-none d-lg-flex">
                {actionItems}
              </ul>
            )}
            {MobileMenu && (
              <ul className="navbar-nav d-lg-none d-xl-none mobile-menu">
                {React.cloneElement(MobileMenu, {
                  closeMenu: closeMenu,
                  isMenuOpen: showMenu,
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </StyledNavbar>
  );
};
