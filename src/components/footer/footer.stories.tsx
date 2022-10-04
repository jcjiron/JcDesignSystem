import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';
import { Footer, FooterProps } from './footer';
import { Icon } from '../icon';

const COLORS = {
  dark: 'rgb(18, 18, 18)',
  blue: 'blue',
};

export default {
  title: 'Example/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args: FooterProps) => (
  <ThemeProvider theme={{ colors: COLORS }}>
    <Footer {...args} />
  </ThemeProvider>
);

export const FooterExample = Template.bind({});

FooterExample.args = {
  mainText: 'this is the main text',
  cardOne: {
    title: 'title',
    content: 'content',
  },
  cardTwo: {
    title: 'title',
    content: 'content',
  },
  linkOne: {
    url: 'url',
    text: 'text',
  },
  linkTwo: {
    url: 'url',
    text: 'text',
  },
  linkThree: {
    url: 'url',
    text: 'text',
  },
  linkFour: {
    url: 'url',
    text: 'text',
  },
  socialIconsOne: [
    {
      icon: (
        <Icon variant="icon-Badge-Instagram">
          <span className="path1"></span>
          <span className="path2"></span>
        </Icon>
      ),
      url: 'https://frederic.biz',
    },
    {
      icon: (
        <Icon variant="icon-Badge-Facebook">
          <span className="path1"></span>
          <span className="path2"></span>
        </Icon>
      ),
      url: 'https://loyal.name',
    },
    {
      icon: (
        <Icon variant="icon-Badge-Twitter">
          <span className="path1"></span>
          <span className="path2"></span>
        </Icon>
      ),
      url: 'https://mitchel.name',
    },
  ],
  socialIconsTwo: [
    {
      icon: (
        <Icon variant="icon-Badge-TikTok">
          <span className="path1"></span>
          <span className="path2"></span>
          <span className="path3"></span>
          <span className="path4"></span>
          <span className="path5"></span>
        </Icon>
      ),
      url: 'http://pascale.name',
    },
    {
      icon: (
        <Icon variant="icon-Badge-Youtube">
          <span className="path1"></span>
          <span className="path2"></span>
        </Icon>
      ),
      url: 'https://lily.biz',
    },
    {
      icon: (
        <Icon variant="icon-Badge-LinkedIn">
          <span className="path1"></span>
          <span className="path2"></span>
        </Icon>
      ),
      url: 'https://mathias.biz',
    },
  ],
};
