import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './button';
import { Props } from './typo';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<Props> = (args: React.JSX.IntrinsicAttributes & Props) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  className: '--primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: '--secondary',
  children: 'Secondary Button',
};