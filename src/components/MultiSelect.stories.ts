import type { Meta, StoryObj } from '@storybook/react-vite';

import { MultiSelect } from './MultiSelect.tsx';

const meta = {
  title: 'MultiSelect',
  component: MultiSelect,
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiSelectFilter: Story = {
  args: {
    label: 'MultiSelect',
  },
};
