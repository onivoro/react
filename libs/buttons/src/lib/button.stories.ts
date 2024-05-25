import {StoryObj, Meta} from '@storybook/react';
import {Button} from './button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs']
};

export const Default: StoryObj<Meta> = {
  args: {
    children: 'Button',
    style: {'font-weight': 'bold'}
  }
};

