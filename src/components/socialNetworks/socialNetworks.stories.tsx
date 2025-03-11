import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SocialNetworks from './socialNetworks';
import { Props } from './typo';

export default {
  title: 'Components/SocialNetworks',
  component: SocialNetworks,
  argTypes: {
    className: { control: 'text' },
    data: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <SocialNetworks {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  data: [
    { title: 'Twitter', url: 'https://twitter.com' },
    { title: 'Instagram', url: 'https://instagram.com' },
    { title: 'Linkedin', url: 'https://linkedin.com' },
  ],
};