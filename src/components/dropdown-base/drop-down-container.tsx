import styled from 'styled-components';

export const DropdownContainer = styled.div<{ isOpen?: boolean }>`
  &.light {
    --selected-item-bg: rgba(139, 111, 201, 0.2);
    --dropdown-item-color: #000;
    --dropdown-menu-bg: white;
    --dropdown-menu-hover-bg: rgba(139, 111, 201, 0.2);
    --dropdown-toggle-bg: white;
    --dropdown-toggle-color: #000;
    --dropdown-toggle-disabled-color: #999;
    --scrollbar-thumb: rgba(196, 196, 196, 0.7);
  }

  &.dark {
    --selected-item-bg: rgba(0, 0, 0, 0.4);
    --dropdown-item-color: #fff;
    --dropdown-menu-bg: rgb(29, 29, 29);
    --dropdown-menu-hover-bg: rgba(0, 0, 0, 0.4);
    --dropdown-toggle-bg: rgb(29, 29, 29);
    --dropdown-toggle-color: #fff;
    --dropdown-toggle-disabled-color: #999;
    --scrollbar-thumb: rgba(196, 196, 196, 0.7);
  }
  font-weight: 400;
  .dropdown {
  }
  .dropdown-toggle {
    background: var(--dropdown-toggle-bg);
    color: var(--dropdown-toggle-color);
    border: none;
    padding: 1rem;
    white-space: initial;
    &:focus {
      color: var(--dropdown-toggle-color);
    }
    &:disabled {
      color: var(--dropdown-toggle-disabled-color);
    }
  }
  .shrink-text {
    -webkit-line-clamp: 1;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .dropdown-toggle::after {
    font-family: 'icomoon' !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    content: '\\e905';
    border-top: 0px solid;
    transition: transform 0.25s ease-in-out;
    font-size: 24px;
    margin-left: 8px;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  }
  .dropdown-menu {
    margin-top: 0.5rem;
    background: var(--dropdown-menu-bg);
  }
  .dropdown-item {
    color: var(--dropdown-item-color);
    padding: 1rem;
  }
  .dropdown-item:hover,
  .dropdown-item:focus {
    background: var(--dropdown-menu-hover-bg);
  }
  .dropdown-item.selected-item {
    background: var(--selected-item-bg);
  }
  .children-container {
    padding: 0 !important;
  }
  /* smartphones, touchscreens */
  @media (hover: none) and (pointer: coarse) {
    .dropdown-item:hover,
    .dropdown-item:focus {
      background: transparent;
    }
  }
  /* Desktop */
  @media (min-width: 992px) {
    .dropdown-toggle::after {
      margin-left: 24px;
    }
  }
`;
