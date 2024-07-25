/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        purple: '#9747FF',
        background: '#0C0C0C',
        foreground: '#F4F4F4',
      },
      fontSize: {
        h1: [
          '64px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        h2: [
          '40px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        h3: [
          '32px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        h5: [
          '20px',
          {
            lineHeight: '150%',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        'body-bold': [
          '14px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
        'body-medium': [
          '14px',
          {
            lineHeight: '150%',
            fontWeight: 'medium',
            letterSpacing: '-0.02em',
          },
        ],
        'body-regular': [
          '14px',
          {
            lineHeight: '180%',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
          },
        ],
        'small-bold': [
          '12px',
          {
            lineHeight: '150%',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
          },
        ],
      },
    },
  },
  plugins: [],
}
