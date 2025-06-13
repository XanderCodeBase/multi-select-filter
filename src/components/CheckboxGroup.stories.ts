import type { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxGroup, type CheckboxOption } from './CheckboxGroup';

const meta = {
  title: 'Components/Checkbox/Group',
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const fruitOptions: CheckboxOption[] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Banana', value: 'Banana' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Grapes', value: 'Grapes' },
  { label: 'Pineapple', value: 'Pineapple' },
  { label: 'Strawberry', value: 'Strawberry' },
  { label: 'Mango', value: 'Mango' },
];

export const Default: Story = {
  args: {
    options: fruitOptions,
    selectedValues: [],
    onChange: (values: string[]) => {
      console.log('Selected values:', values);
    },
  },
};

export const WithSelectedValues: Story = {
  args: {
    options: fruitOptions,
    selectedValues: ['Apple', 'Orange', 'Mango'],
    onChange: (values: string[]) => {
      console.log('Updated values:', values);
    },
  },
};
