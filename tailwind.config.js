module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        900: '#111827',
        800: '#1F2937',
        700: '#374151',
        500: '#6B7280',
        300: '#D1D5DB',
        200: '#E5E7EB',
        100: '#F3F4F6',
      },
      white: '#FAFAFA',
    },
    extend: {
      colors: {
        black: '#212121',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [],
};
