**Multi-Brand Design System**

A scalable, token-driven design system built with Preact, Tailwind CSS v4, and Storybook.
This project demonstrates a robust approach to multi-brand theming by synchronizing UI components with a centralized design token architecture.

🌟 Key Features

Token-Based Architecture
All visual properties are derived from a structured figma-tokens.json, ensuring a single source of truth for design decisions.

Dynamic Theming
Seamless switching between Brand A (Default) and Brand B (Luxury / Modern) using CSS custom properties.

Tailwind CSS v4 Integration
Uses the latest CSS-native configuration and theme variables for better performance and scalability.

Responsive & Accessible
Components are optimized for all screen sizes, from small mobile devices to large desktops, with accessibility in mind.

🎨 Theming Logic

The system follows a “Double Variable” strategy to enable predictable and scalable theme switching.

1. Global Tokens (Primitives)

Primitive values such as colors, spacing, and scales are defined at the :root level.

2. Semantic Tokens

Components consume semantic variables (e.g. --color-btn-bg) instead of raw values, keeping UI intent clear and flexible.

3. Theme Overrides

Applying the .theme-brand-b class overrides primitive values, instantly updating the entire UI without modifying component code.

🏷 Brand Comparison
Feature	Brand A (Default)	Brand B (Modern)
Primary Color	Vibrant Orange #FC4C02	Deep Maroon #901438
Typography	Inter	Open Sans / Mencken
Border Radius	Rounded (8px)	Sharp (0px)
🧩 Components

Button
Versatile action component with dynamic hover states and brand-based border-radius mapping.

Input
Themed form fields with custom focus-ring logic tied to each brand’s primary color.

Dropdown
Fully themed select component featuring custom hover states, overflow protection, and mobile-friendly behavior.

Card
Content container with brand-specific surface backgrounds and image fallback handling.

LoginDrawer
A complex molecule component demonstrating how multiple atoms work together within a themed slide-out panel.

🛠 Tech Stack

Framework: Preact (lightweight React alternative)

Styling: Tailwind CSS v4

Environment: Storybook 8

Language: TypeScript

🚀 Getting Started
Install dependencies
npm install

Run Storybook
npm run storybook

Build for production
npm run build
