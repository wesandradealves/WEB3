import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './card';
import { Props } from './typo';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
    image: { control: 'text' },
    gap: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<Props> = (args: React.JSX.IntrinsicAttributes & Props) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
  title: 'Card Title',
  text: 'This is a card component',
  image: '',
  gap: 8
};

export const Custom = Template.bind({});
Custom.args = {
  className: 'custom-class',
  title: 'Custom Card Title',
  text: 'This is a custom card component',
  image: '/img/imagem.png',
  gap: 8
};