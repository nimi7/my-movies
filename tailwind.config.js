module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs' : '150px',
      'xs' : '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    },
    scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',    
      '100': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    },
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    
  },
}
