import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox.tsx';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxUnChecked: Story = {
  args: {
    id: 'Checkbox',
    label: 'CheckboxUnChecked',
    checked: false,
    onChange: (checked: boolean) => {
      return checked;
    },
  },
};

export const CheckboxChecked: Story = {
  args: {
    id: 'Checkbox',
    label: 'CheckboxChecked',
    checked: true,
    onChange: (checked: boolean) => {
      return checked;
    },
  },
};
