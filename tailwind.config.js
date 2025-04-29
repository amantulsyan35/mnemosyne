import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './index.html', // Ensure you're including your HTML files
    './src/**/*.{js,ts,jsx,tsx}', // Your React files
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // Ensure ShadCN is included
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: 'class', // Enable dark mode using class-based strategy
  plugins: [],
};
