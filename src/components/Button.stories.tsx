import type { StoryFn } from '@storybook/preact';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

// Базова версія (Brand A)
export const Primary = {
  args: {
    label: 'Brand A Button',
  },
};

// Версія для Brand B
export const BrandB = {
  args: {
    label: 'Brand B Button',
  },
  // Використовуємо декоратор замість render, щоб уникнути проблем з HMR
  decorators: [
    (Story: StoryFn) => (
      <div className="theme-brand-b">
        <Story />
      </div>
    ),
  ],
};