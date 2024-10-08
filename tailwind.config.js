/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      screens: {
        xs: '555px',
      },
      dropShadow: {
        glow: '0 0 12px #7E70F7',
        strong: '0 0px 5px #7E70F7',
      },
      backgroundImage: {
        'nad-gradient': `linear-gradient(to bottom, 
          rgba(17, 17, 20, 0.3) 5%, 
          rgba(105, 59, 255, 0.73) 60%, 
          rgba(105, 59, 255, 1) 86%, 
          rgba(17, 17, 20, 0.9) 98%
        )`,
        'nad-radial-gradient': `radial-gradient(circle, 
          rgba(94, 76, 225, 1) 5%, 
          rgba(82, 61, 239, 0) 65%
        )`,
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          50: '#F7F9FD',
          100: '#DEE0E4',
          200: '#C5C7CB',
          300: '#ACAEB2',
          400: '#939599',
          500: '#7A7C80',
          600: '#616367',
          700: '#484A4E',
          800: '#2F3135',
          850: '#202124',
          900: '#111114',
        },
        purple: {
          50: '#D6DEFF',
          100: '#B9C0FE',
          200: '#9D9FFD',
          300: '#8A84FB',
          400: '#7E70F7',
          500: '#7560F1',
          600: '#6C52E5',
          700: '#5C42C8',
          800: '#412C8E',
          900: '#291C5C',
        },
        red: {
          50: '#FFEBF2',
          100: '#FEB9CC',
          200: '#FC8A9E',
          300: '#FA616F',
          400: '#F54045',
          500: '#EE2D28',
          600: '#DF2216',
          700: '#BA1909',
          800: '#720E02',
          900: '#330600',
        },
        green: {
          50: '#A9FFBF',
          100: '#79FF9F',
          200: '#50FF87',
          300: '#32E975',
          400: '#1DC865',
          500: '#0FA755',
          600: '#078646',
          700: '#036535',
          800: '#014524',
          900: '#002413',
        },
        background: '#000000',
        foreground: '#FFFFFF',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        hero: ['48px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: 700 }],
        headline1: ['36px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: 700 }],
        headline2: ['32px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: 700 }],
        headline3: ['24px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: 700 }],
        headline4: ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: 700 }],
        accent: ['20px', { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: 700 }],
        subtitle1: ['16px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 700 }],
        subtitle2: ['16px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 400 }],
        subtitle3: ['14px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 700 }],
        body1: ['14px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 500 }],
        body2: ['14px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 400 }],
        body3: ['12px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 500 }],
        body4: ['12px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 400 }],
        caption: ['10px', { lineHeight: '150%', letterSpacing: '-0.02em', fontWeight: 400 }],
        button1: ['20px', { lineHeight: 'auto', letterSpacing: '-0.02em', fontWeight: 700 }],
        button2: ['16px', { lineHeight: 'auto', letterSpacing: '-0.02em', fontWeight: 700 }],
        button3: ['12px', { lineHeight: 'auto', letterSpacing: '-0.02em', fontWeight: 700 }],
        button4: ['12px', { lineHeight: 'auto', letterSpacing: '-0.02em', fontWeight: 500 }],
        button5: ['10px', { lineHeight: 'auto', letterSpacing: '-0.02em', fontWeight: 500 }],
      },
    },
  },
  plugins: [],
}
