import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox.tsx';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'Apple',
    label: 'Apple',
    checked: false,
    onChange: (checked: boolean) => {
      console.log('Updated value:', checked);
    },
  },
};

export const WithSelectedValue: Story = {
  args: {
    id: 'Banana',
    label: 'Banana',
    checked: true,
    onChange: (checked: boolean) => {
      console.log('Updated value:', checked);
    },
  },
};
