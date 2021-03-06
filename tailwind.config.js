module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#3FB195',
      'primary-op-20': 'rgba(63, 177, 149, 0.2)',
      'primary-op-8': 'rgba(63, 177, 149, 0.08)',
      danger: '#dc2618',
      dark: '#222222',
      'dark-op-30': 'rgba(0, 0, 0, 0.3)',
      white: '#ffffff',
      'gray-300': '#FAFAFA',
      'gray-500': '#EAEBEA',
      'gray-600': '#9A9A9B',
      'gray-700': '#9E9E9E',
      'gray-800': '#666767',
      'icon-violet': '#C499FF',
      'icon-rose': '#FF9999',
      'icon-cyan': '#64C5E3',
      'icon-blue': '#81A4FF',
      'icon-orange': '#FD975E',
      'icon-amber': '#C17B53',
      'icon-green': '#8FCA6B',
      fb: '#3B5998',
      twitter: '#00ACEE',
      line: '#00B900',
    },
    fontSize: {
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '33px',
      '3xl': '3.625rem',
      icon: '2.75rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      boxShadow: {
        default: '0px 14px 24px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        17.5: '4.375rem',
        38: '9.5rem',
        41: '10.25rem',
        47: '11.75rem',
        59: '14.75rem',
        70: '17.5rem',
        84: '21rem',
        88.5: '22.125rem',
        91: '22.75rem',
      },
      minHeight: {
        'footer-bottom': 'calc(100vh - 57px - 128px)',
        'footer-bottom-sm': 'calc(100vh - 57px - 64px)',
        'footer-bottom-lg': 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [],
};
