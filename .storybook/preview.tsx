import { h } from 'preact';
import type { Preview } from "@storybook/preact";
import '../src/index.css'; 

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'brand-a',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'brand-a', title: 'Brand A' },
          { value: 'brand-b', title: 'Brand B' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'brand-a';
      const themeClass = theme === 'brand-b' ? 'theme-brand-b' : '';
      
      // Використовуємо функцію h безпосередньо, щоб уникнути конфліктів типів JSX
      return h('div', { className: themeClass }, Story());
    },
  ],
};

export default preview;