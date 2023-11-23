import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-blue': '#2F80ED',
        'primary-dark-gray': '#4F4F4F',
        'primary-gray': '#828282',
        'primary-white': '#E0E0E0',
        'indicator-deep-yellow': '#F8B76B',
        'indicator-purple': '#8785FF',
        'indicator-red': '#EB5757',
        'indicator-yellow': '#F2C94C',
      },
      fontFamily: {
        primary: ['Lato'],
      },
    },
  },
  plugins: [],
};
export default config;
