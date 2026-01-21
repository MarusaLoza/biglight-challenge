import { h } from 'preact';
import type { StoryFn } from '@storybook/preact';
import { LoginDrawer } from './LoginDrawer';
import { useState } from 'preact/hooks';

export default {
  title: 'Components/LoginDrawer',
  component: LoginDrawer,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template: StoryFn = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border rounded"
      >
        Open Login Drawer
      </button>
      <LoginDrawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const BrandB = Template.bind({});
BrandB.args = {};
BrandB.decorators = [
  (Story) => (
    <div className="theme-brand-b">
      <Story />
    </div>
  ),
];