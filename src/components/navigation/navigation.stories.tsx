import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Navigation from './navigation';
import { Props } from './typo';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    className: { control: 'text' },
    data: { control: 'object' },
    defaultexpanded: { control: 'boolean' },
    isScrolling: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  data: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services', below: [
      { title: 'Consulting', url: '/services/consulting' },
      { title: 'Development', url: '/services/development' },
    ] },
    { title: 'Contact', url: '/contact' },
  ],
  defaultexpanded: "on",
  isScrolling: 0,
};

export const Expanded = Template.bind({});
Expanded.args = {
  className: '',
  data: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services', below: [
      { title: 'Consulting', url: '/services/consulting' },
      { title: 'Development', url: '/services/development' },
    ] },
    { title: 'Contact', url: '/contact' },
  ],
  defaultexpanded: "on",
  isScrolling:  0,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
  className: '',
  data: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/services', below: [
      { title: 'Consulting', url: '/services/consulting' },
      { title: 'Development', url: '/services/development' },
    ] },
    { title: 'Contact', url: '/contact' },
  ],
  defaultexpanded: "on",
  isScrolling: 0,
};