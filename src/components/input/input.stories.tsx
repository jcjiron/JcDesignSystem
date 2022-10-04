import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from '.';
import { Icon } from '../icon';
import styled from 'styled-components';
import { Counter } from '../counter';

export default {
  title: 'inputs/Input',
} as Meta;

const text = 'Text Sample';

const Container = styled.div`
  background: #ffffff;
  /* Elevation/01-Skim */

  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),
    0px 2px 4px rgba(18, 21, 27, 0.15);
  border-radius: 8px;
  width: 350px;
  padding: 24px;

  .flex-1 {
    flex: 1;
  }
`;

export const Default: Story = (args) => {
  return (
    <Container>
      <Input
        {...args}
        as="button"
        onClick={() => {
          alert('hola');
        }}
      />
    </Container>
  );
};

Default.args = {
  children: text,
} as InputProps;

const StyledIcon = styled(Icon)`
  font-size: 20px;
`;

export const WithIcons: Story = (args) => {
  return (
    <Container>
      <Input
        {...args}
        as="button"
        icon={<StyledIcon variant="icon-Calendar" />}
        onClick={() => {
          alert('hola');
        }}
      />
    </Container>
  );
};

WithIcons.args = {
  children: text,
} as InputProps;

const ErrorMessage = styled.span`
  color: var(--neutral-500);
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-bottom: 16px;
  .emoji {
    margin-right: 12px;
  }
`;

export const WithError: Story = (args) => {
  return (
    <Container>
      <Input
        {...args}
        as="button"
        icon={<StyledIcon variant="icon-Calendar" />}
        errorMessage={
          <ErrorMessage>
            <span className="emoji" role="img" aria-label="sad-emoji">
              😢
            </span>
            <span>Dates no longer available, select again.</span>
          </ErrorMessage>
        }
        onClick={() => {
          alert('hola');
        }}
      />
    </Container>
  );
};

WithError.args = {
  children: text,
} as InputProps;

export const GuestInput: Story = (args) => {
  const [count, setCount] = React.useState(1);

  return (
    <Container>
      <Input
        {...args}
        className="d-flex"
        as="div"
        icon={<StyledIcon variant="icon-Guests" />}
      >
        <span className="mr-4">Guests</span>
        <div className="flex-1" />
        <Counter max={10} min={1} value={count} onChange={setCount} />
      </Input>
    </Container>
  );
};

GuestInput.args = {
  children: text,
} as InputProps;
