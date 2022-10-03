import React from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import { Accordion, AccordionProps } from './';

export default {
  title: "Example/Accordion",
  component: Accordion,  
} as Meta;

const Template: Story<AccordionProps> = ({ children, ...args }: AccordionProps) => <Accordion {...args}>{children}</Accordion>

export const Dark = Template.bind({});
export const Light = Template.bind({});


Dark.args = {
  title: 'Accordion Title',
  content: 'This is the content of the  accordion',
  variant: 'dark',
  id: '1',
  children:(
      <p>This is a children</p>
  )
};

Light.args = {
    title: 'Accordion Title',
    content: 'This is the content of the  accordion',
    variant: 'light',
    id: '1',
    children:(
        <p>This is a children</p>
    )
  };
  