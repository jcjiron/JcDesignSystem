import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Counter } from './';
import styled from 'styled-components';

export default {
  title: 'Example/Counter',
  component: Counter,
} as Meta;

const Container = styled.div`
  width: 200px;
  background: white;
  border-radius: 5px;
  padding: 1rem;
`;

const Template: Story = ({ children, ...args }) => {
  const [value, setValue] = React.useState<number>(1);

  return (
    <Container>
      <Counter {...args} onChange={setValue} value={value} />
    </Container>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  placeholder: 'Guests',
  min: 1,
  max: 10,
};
