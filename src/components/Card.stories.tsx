import { h } from 'preact';
import type { StoryFn } from '@storybook/preact';
import { Card } from './Card';

export default {
  title: 'Components/Card', // Назва в меню Storybook
  component: Card,
};

const defaultArgs = {
  title: 'Luxury Living',
  description: 'Experience the perfect blend of comfort and style in our new apartments.',
  image: 'https://images.unsplash.com/photo-1460317442991-0ec239f3674b?auto=format&fit=crop&w=400&q=80',
};

// Базова сторі (Brand A за замовчуванням)
export const Primary = {
  args: defaultArgs,
};

// Сторі для перевірки Brand B
export const BrandB = {
  args: defaultArgs,
  decorators: [
    (Story: StoryFn) => (
      <div className="theme-brand-b">
        <Story />
      </div>
    ),
  ],
};