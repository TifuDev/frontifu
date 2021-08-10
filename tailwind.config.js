module.exports = {
  purge: [
    './src/index.js',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        900: '#111827',
        800: '#1F2937',
        700: '#374151',
        500: '#6B7280',
        300: '#D1D5DB',
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
