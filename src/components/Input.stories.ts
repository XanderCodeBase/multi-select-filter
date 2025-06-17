import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Zoek op ...',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Input', event);
    },
  },
};
