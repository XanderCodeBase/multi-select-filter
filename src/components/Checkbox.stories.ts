import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox.tsx';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['stable'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Apple',
    hidden: false,
    checked: false,
    onChange: (checked: boolean) => {
      console.log('Updated value:', checked);
    },
  },
};

export const WithSelectedValue: Story = {
  args: {
    value: 'Banana',
    hidden: false,
    checked: true,
    onChange: (checked: boolean) => {
      console.log('Updated value:', checked);
    },
  },
};

export const WithHiddenValue: Story = {
  args: {
    value: 'Orange',
    hidden: true,
    checked: false,
    onChange: (checked: boolean) => {
      console.log('Updated value:', checked);
    },
  },
};
