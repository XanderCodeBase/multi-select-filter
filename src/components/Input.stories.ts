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
    onChange: (value: string) => {
      console.log('Input', value);
    },
  },
};
