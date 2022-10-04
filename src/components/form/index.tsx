import React, { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import '../../../assets/styles/bootstrap/forms.scss';

const StyledRadio = styled.label`
  &.form-check-label {
    display: inline-block;
    .check-circle {
      width: 17px;
      height: 17px;
      border-radius: 9px;
      position: relative;
      display: inline-block;
      visibility: visible;
      border: 1px solid rgba(0, 0, 0, 0.3);
      vertical-align: middle;
      margin-right: 8px;
    }
    .form-check-input {
      display: none;
    }
    .form-check-input:checked {
      & + .check-circle {
        width: 17px;
        height: 17px;
        border-radius: 9px;
        position: relative;
        display: inline-block;
        visibility: visible;
        border: 1px solid rgba(139, 111, 201, 0.5);
        vertical-align: middle;
        margin-right: 8px;
        &:after {
          width: 13px;
          height: 13px;
          border-radius: 9px;
          padding: 2px;
          top: 1px;
          left: 1px;
          position: absolute;
          background-color: var(--primary);
          content: '';
          display: inline-block;
          visibility: visible;
          border: 1px solid rgba(139, 111, 201, 0.5);
        }
      }
      & ~ .check-label {
        color: var(--primary);
      }
    }
  }
`;
type RadioProps = {
  label: string;
} & ComponentPropsWithoutRef<"input">;
export const Radio = ({ label, ...props }: RadioProps) => {
  return (
    <StyledRadio className="form-check-label">
      <input className="form-check-input" type="radio" {...props} />
      <span className="check-circle" />
      <span className="check-label">{label}</span>
    </StyledRadio>
  );
};
