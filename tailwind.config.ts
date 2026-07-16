import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{json,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B8312F',
          'red-dark': '#8B2020',
          green: '#2D6A3F',
          'green-light': '#4A8C5C',
          yellow: '#F2C94C',
          cream: '#EFE2C8',
          dark: '#132A20',
          ink: '#1C2419'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          '"Liberation Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      boxShadow: {
        soft: '0 24px 80px rgba(11, 20, 16, 0.16)'
      }
    }
  },
  plugins: []
};

export default config;
