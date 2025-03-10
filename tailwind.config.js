const lynxPreset = require('@lynx-js/tailwind-preset');

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  presets: [lynxPreset], // Use the preset
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Adjust paths as needed
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    colors: {
      blue: '#ff0000',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
};
