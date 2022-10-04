import React from 'react';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { DropDownItemProps, DropDownMenuProps } from '../dropdown';
import { Icon } from '../icon';
import { Modal } from '../modal';
import { Div100vh } from '../div-100vh';

const ModalDropdownContainer = styled(Div100vh)`
  max-width: inherit;
  margin: inherit;
  align-items: center !important;
  .dropdown-modal {
    pointer-events: all;
    position: relative;
    margin-top: 0px;
    margin-left: 0px;
  }
  .modal-close {
    position: absolute;
    top: 17px;
    right: 15px;
    font-size: 12px;
    cursor: pointer;
  }
  @media (max-width: 576px) {
    align-items: flex-end !important;
    .dropdown-modal {
      width: 100vw;
      border-radius: 25px 25px 0px 0px;
      padding-bottom: 25px;
    }
  }
`;

export type NavlinkMobileDropdownModalProps = {
  className?: string;
  itemText?: string;
  children?: ReactElement<DropDownMenuProps<DropDownItemProps>>;
  closeMobileMenu: () => void;
};

export const NavlinkMobileDropdownModal = ({
  itemText,
  children,
  className = '',
  closeMobileMenu,
}: NavlinkMobileDropdownModalProps) => {
  const [open, setOpen] = useState(false);

  const openModalDropdown = () => {
    closeMobileMenu();
    setOpen(true);
  };

  const closeModalDropdown = () => {
    setOpen(false);
  };
  return (
    <div className={`${className} dropdown`}>
      <span
        onClick={openModalDropdown}
        className={`${open ? 'show' : ''} dropdown-toggle nav-link`}
      >
        <span className={`nav-link-content`}>{itemText}</span>
      </span>
      <Modal show={open}>
        <ModalDropdownContainer className="modal-dialog d-flex justify-content-center modal-dropdown-container">
          <div>
            {React.cloneElement(
              children,
              {
                open: open ? 'show' : undefined,
                className: 'dropdown-modal',
              },
              <>
                {Array.isArray(children.props.children)
                  ? children.props.children.map((el, index) =>
                      React.cloneElement(el, {
                        ...el.props,
                        closeDropDown: closeModalDropdown,
                        key: index,
                      })
                    )
                  : React.cloneElement(children.props.children, {
                      ...children.props.children.props,
                      closeDropDown: closeModalDropdown,
                    })}
                <Icon
                  variant="icon-close"
                  className="modal-close"
                  onClick={closeModalDropdown}
                />
              </>
            )}
          </div>
        </ModalDropdownContainer>
      </Modal>
    </div>
  );
};
