import type { StoryFn } from '@storybook/preact';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

// (Brand A)
export const Primary = {
  args: {
    label: 'Brand A Button',
  },
};

// Brand B
export const BrandB = {
  args: {
    label: 'Brand B Button',
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="theme-brand-b">
        <Story />
      </div>
    ),
  ],
};