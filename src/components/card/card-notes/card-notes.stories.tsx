import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardNotes } from '.';

export default {
  title: 'Example/CardNotes',
  component: CardNotes,
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <CardNotes {...args}>{children}</CardNotes>
);

export const Primary = Template.bind({});

Primary.args = {
  children: '$00.00 USD total'
};
