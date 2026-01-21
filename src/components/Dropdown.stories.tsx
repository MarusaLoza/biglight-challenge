import { h } from 'preact';
import type { StoryFn } from '@storybook/preact';
import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const Template: StoryFn = (args) => (
  <div style={{ minHeight: '250px', width: '300px' }}>
    <Dropdown {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select an option',
  options: options,
};

export const BrandB = Template.bind({});
BrandB.args = {
  label: 'Select an option (Brand B)',
  options: options,
};
BrandB.decorators = [
  (Story) => (
    <div className="theme-brand-b">
      <Story />
    </div>
  ),
];