import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GuestsInput, GuestsInputProps } from '.';
import styled from 'styled-components';

export default {
  title: 'inputs/Guests Input',
} as Meta;

const text = 'Guests';

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),
    0px 2px 4px rgba(18, 21, 27, 0.15);
  border-radius: 8px;
  width: 350px;
  padding: 24px;
`;

export const Default: Story = (args: GuestsInputProps) => {
  const [count, setCount] = React.useState(1);

  return (
    <Container>
      <GuestsInput
        {...args}
        as="div"
        value={count}
        onChange={(value) => setCount(value)}
      ></GuestsInput>
    </Container>
  );
};

Default.args = {
  placeholder: text,
  max: 10,
  min: 1,
} as GuestsInputProps;
