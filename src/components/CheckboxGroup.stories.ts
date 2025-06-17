import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxGroup } from './CheckboxGroup';

const meta = {
  title: 'Components/Checkbox/Group',
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

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
];

export const Default: Story = {
  args: {
    options: fruitOptions,
    filteredValues: fruitOptions,
    selectedValues: [],
    handleCheckboxChange: (value: string, checked: boolean) => {
      console.log('Is checked:', value, checked);
    },
  },
};

export const WithSelectedValues: Story = {
  args: {
    options: fruitOptions,
    filteredValues: fruitOptions,
    selectedValues: ['Apple', 'Orange', 'Mango'],
    handleCheckboxChange: (value: string, checked: boolean) => {
      console.log('Is checked:', value, checked);
    },
  },
};

export const WithFilteredValues: Story = {
  args: {
    options: fruitOptions,
    filteredValues: ['Apple', 'Orange', 'Mango'],
    selectedValues: ['Orange'],
    handleCheckboxChange: (value: string, checked: boolean) => {
      console.log('Is checked:', value, checked);
    },
  },
};
