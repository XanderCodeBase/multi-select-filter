import type { Meta, StoryObj } from '@storybook/react-vite';

import { MultiSelect } from './MultiSelect';

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruitOptions: string[] = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Pineapple',
  'Strawberry',
  'Mango',
  'Blueberry',
  'Watermelon',
  'Peach',
  'Kiwi',
  'Cherry',
  'Papaya',
  'Lemon',
  'Pomegranate',
];

export const Default: Story = {
  args: {
    options: fruitOptions,
  },
};
