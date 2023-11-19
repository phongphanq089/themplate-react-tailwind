/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      dark: '#090E34',
      light: '#F4F7FE',
      darkThem: '#090E34',
      'body-color': 'rgba(7, 136, 255,.1)',
      rgba: {
        1: 'rgba(199, 20, 214, 0.4)',
        2: 'rgba(27, 175, 75, 0.4)',
        3: 'rgba(209, 18, 172, 0.4)',
        4: 'rgba(230, 26, 62, 0.4)',
        5: 'rgba(230, 202, 26, 0.3)',
        6: 'rgba(13, 218, 211, 0.4)'
      },
      gray: {
        50: '#f8f9fa',
        100: '#edf2f7',
        200: '#e9ecef',
        300: '#cbd5e0',
        400: '#a0aec0',
        500: '#adb5bd',
        600: '#a3aed0',
        700: '#707eae',
        800: '#252f40',
        900: '#1b2559'
      },
      navy: {
        50: '#d0dcfb',
        100: '#aac0fe',
        200: '#a3b9f8',
        300: '#728fea',
        400: '#3652ba',
        500: '#1b3bbb',
        600: '#24388a',
        700: '#1B254B',
        800: '#111c44',
        900: '#0b1437'
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2152ff',
        700: '#1d4ed8',
        800: '#344e86',
        900: '#00007d'
      },
      teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a'
      },
      yellow: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#fbcf33',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12'
      }
    },
    screens: {
      sm: '576px',
      'sm-max': { max: '576px' },
      md: '768px',
      'md-max': { max: '768px' },
      lg: '992px',
      'lg-max': { max: '992px' },
      xl: '1200px',
      'xl-max': { max: '1200px' },
      '2xl': '1350px',
      '2xl-max': { max: '1320px' },
      '3xl': '1600px',
      '3xl-max': { max: '1600px' },
      '4xl': '1850px',
      '4xl-max': { max: '1850px' }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        circularlight: 'repeating-radial-gradient(rgb(38, 177, 241, 0.4) 1px, #090E34 5px, #090E34 100px)'
      },
      boxShadow: {
        shadow: '#0bd1d1 0px 4px 15px 0px',
        shadow_2: '#0bd1d1 0px 5px 15px;'
      }
    },
    fontFamily: {
      // sans: ['Space Grotesk']
    }
  },
})
