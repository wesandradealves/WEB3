import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Box from './box';
import { Props } from './typo';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
    padding: { control: 'text' },
    margin: { control: 'text' },
    borderRadius: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<Props> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
    alignment: 'center',
    className: '',
    children: 'This is a Box component',
};

export const Custom = Template.bind({});
Custom.args = {
    alignment: 'stretch',
    className: 'custom-class',
    children: 'This is a custom Box component',
};