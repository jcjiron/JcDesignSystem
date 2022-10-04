import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Alert } from '.';
import { AlertProps, StatefulAlert } from './alert.component';

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = ({ children, ...args }: AlertProps) => (
  <StatefulAlert {...args}>{children}</StatefulAlert>
);

export const Primary = Template.bind({});
const args = {
  variant: 'primary',
  children: (
    <p>
      this is a text for alert <br /> this is a text for alert
    </p>
  ),
} as AlertProps;

Primary.args = args;

export const CustomColor = Template.bind({});
CustomColor.args = {
  variant: 'custom',
  backgroundColor: '#EF4444',
  children: (
    <p>
      this is a text for alert <br /> this is a text for alert
    </p>
  ),
} as AlertProps;