import React, {
  HTMLProps,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../hooks/click-outside/use-click-outside';
import '../../../assets/styles/bootstrap/dropdown.scss';

const StyledDiv = styled.div`
  background-color: var(--truewhite);
  margin-top: 13px;
  min-width: 215px;
  margin-left: 4px;
  .dropdown-header {
    font-size: 10px;
  }
  .dropdown-item {
    min-height: 49px;
    color: var(--black);
    font-size: 14px;
    &:active {
      background-color: var(--transparent);
    }
  }
`;

type DropDownHeaderProps = {
  children?: ReactElement | string;
} & DropDownItem;

export const DropDownHeader = ({ children }: DropDownHeaderProps) => {
  return (
    <h6 className="dropdown-header text-uppercase">
      {typeof children === 'string'
        ? children
        : React.cloneElement(children as ReactElement<DropDownItem>)}
    </h6>
  );
};

export const DropDownDivider = () => {
  return <div className="dropdown-divider"></div>;
};

export type DropDownItem = HTMLProps<HTMLElement>;

export type DropDownItemProps = {
  children: ReactElement;
  closeDropDown?: () => void;
} & DropDownItem;

export const DropDownItem = ({
  children,
  closeDropDown,
  ...props
}: DropDownItemProps) => {
  return React.cloneElement(children, {
    className: 'align-middle dropdown-item d-flex align-items-center',
    onClick: () => {
      closeDropDown && closeDropDown();
      const click = children?.props?.onClick;
      click && click();
    },
    ...props,
  });
};

export type DropDownMenuProps<T extends DropDownItem> = {
  className?: string;
  children: ReactElement<T> | ReactElement<T>[];
  alignment?: 'normal' | 'right';
  open?: 'show' | '';
  closeDropDown?: () => void;
};

export const DropDownMenu = ({
  className = '',
  children,
  alignment = 'normal',
  open,
  closeDropDown,
}: DropDownMenuProps<DropDownItemProps>) => {
  return (
    <StyledDiv
      className={`dropdown-menu ${open ? open : ''} ${
        alignment !== 'normal' ? 'dropdown-menu-right' : ''
      }${className}`}
    >
      {Array.isArray(children)
        ? children.map((el, index) =>
            React.cloneElement(el as ReactElement<DropDownItemProps>, {
              closeDropDown,
              key: index,
            })
          )
        : React.cloneElement(children as ReactElement<DropDownItemProps>, {
            ...children.props,
            closeDropDown,
          })}
    </StyledDiv>
  );
};

export type DropDownToggleProps = {
  isOpen?: boolean;
  closeDropDown?: () => void;
  dropDownMenu: ReactElement<DropDownMenuProps<HTMLProps<HTMLElement>>>;
  children?: ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export const DropDownToggle = ({
  children,
  dropDownMenu,
  className = '',
  closeDropDown,
  isOpen,
  ...props
}: DropDownToggleProps) => {
  const { clickedOutside, handleClickInside, listeningRef } = useClickOutside();

  useEffect(() => {
    if (clickedOutside) {
      closeDropDown && closeDropDown();
    }
  }, [clickedOutside]);

  return (
    <div
      {...props}
      ref={listeningRef}
      onClick={handleClickInside}
      className={`dropdown-toggle ${className} ${isOpen ? 'show' : ''}`}
    >
      <span className="content d-flex align-items-center">{children}</span>
      {dropDownMenu !== undefined
        ? React.cloneElement(dropDownMenu, {
            open: isOpen ? 'show' : undefined,
            closeDropDown,
          })
        : null}
    </div>
  );
};
export const StyledDropDown = styled.div<{ isOpen: boolean }>`
  .dropdown-toggle {
    &::after {
      display: none;
    }
    .content::after {
      font-family: 'icomoon' !important;
      speak: never;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;

      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      content: '\\e905';
      border-top: 0px solid;
      font-size: 24px;
      margin-left: 6px;
      transition: transform 0.1s ease-in-out;
    }
    &.show {
      .content::after {
        transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
      }
    }
  }
`;

export type DropDownProps = {
  children: ReactElement<DropDownToggleProps>;
  dropDownOpen?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export const DropDown = ({
  children,
  className,
  onClick,
  dropDownOpen = false,
  ...props
}: DropDownProps) => {
  const [open, setOpen] = useState(dropDownOpen);

  const openDropDown = () => !open && setOpen(true);
  const closeDropDown = () => open && setOpen(false);
  const toggleDropDown = () => (open ? closeDropDown() : openDropDown());
  return (
    <StyledDropDown
      {...props}
      className={`dropdown ${className}`}
      isOpen={open}
      onClick={toggleDropDown}
    >
      {React.cloneElement(children, {
        closeDropDown,
        isOpen: open,
      })}
    </StyledDropDown>
  );
};
