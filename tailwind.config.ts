 import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',      // if using app directory
    './pages/**/*.{ts,tsx}',    // if using pages directory
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      },
  },
  plugins: [],
};

export default config;
